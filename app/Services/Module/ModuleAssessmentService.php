<?php

namespace App\Services\Module;

use App\Exports\Admin\User\AdminUserAssessmentExport;
use App\Http\Resources\User\UserProfileResource;
use App\Models\Brace\User;
use App\Models\Learning\Course\BraceCourseView;
use App\Models\Learning\Module\BraceModuleView;
use App\Models\Learning\Module\ModuleAssessmentAnswer;
use App\Models\Learning\Module\ModuleAssessmentQuestion;
use App\Services\Course\CourseService;
use App\Services\User\UserService;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Session;
use Maatwebsite\Excel\Facades\Excel;
use PDF;

class ModuleAssessmentService
{
    protected ModuleService $module;
    protected UserService $user;
    public function __construct(
        ModuleService $module,
        UserService $user
    ){
        $this->module = $module;
        $this->user = $user;
    }

    public function moduleAssessment(): BraceModuleView
    {
        return new BraceModuleView();
    }

    public function moduleAssessmentQuestion(): ModuleAssessmentQuestion
    {
        return new ModuleAssessmentQuestion();
    }

    public function assessmentQuestionsByModuleId($moduleId): \Illuminate\Database\Eloquent\Builder
    {
        return $this->moduleAssessmentQuestion()->with('answer', 'module')
            ->where('brace_module_id', $moduleId);
    }

    public function moduleAssessmentAnswer(): ModuleAssessmentAnswer
    {
        return new ModuleAssessmentAnswer();
    }

    // Get total amount of users that have started this module
    public static function usersStartedModule($moduleId){
        return User::where('selected', 1)
            ->with('course_assessments')
            ->whereHas('course_assessments', function ($query) use ($moduleId) {
            $query->where('brace_module_id', $moduleId)->whereIn('status', [0, 1]);
        });
    }

    // Get total amount of users that have completed this module
    public static function usersCompletedModule($moduleId){
        return User::where('selected', 1)
            ->with('module_assessments')
            ->whereHas('module_assessments', function ($query) use ($moduleId) {
                $query->where('brace_module_id', $moduleId)->where('status', 1);
            });
    }

    // Assign default password to participants that have not started the program
    public function assignDefaultPasswordToParticipantsNotStartedProgram(){
       $users = $this->user->braceUser()
            ->where('users.selected', 1)
            ->leftjoin(
                'brace_module_views',
                'users.id', '=', 'brace_module_views.user_id'
            )->leftjoin(
                'brace_course_views',
                'users.id', '=', 'brace_course_views.user_id'
            )->select(
                'users.id AS user_id',
                'users.password AS user_password',
                'users.selected',
                'users.first_name',
                'users.last_name',
                'users.email',
                'brace_module_views.id AS module_view_id',
                'brace_module_views.user_id AS module_view_user_id',
                'brace_course_views.id AS course_view_id',
                'brace_course_views.user_id AS course_view_user_id',
            )
            ->where('brace_course_views.user_id', null);

        $users->update([
            'users.password' => Hash::make('brace'),
        ]);

        return $users->get();
    }

    public function updateModuleAssessmentStatusForStartedModule(): void
    {
        $users = $this->user->selectedUsersWithAssessments()->has('course_assessments')->get();
        $count = 0;

        foreach ($users as $user){
            // i just increased this number to 20000 to run all users since all users are not up to 2000
            if($count < 20000){
                $groupedUserCourses = BraceCourseView::where('user_id', $user->id)
                    ->select('brace_module_id')
                    ->groupBy('brace_module_id')->get();
                $count++;

                foreach ($groupedUserCourses as $moduleId){
                    $moduleAssessment = $this->moduleAssessment()->where([
                        ['user_id', $user->id],
                        ['brace_module_id', $moduleId->brace_module_id]
                    ])->first();

                    if(!$moduleAssessment){
                        $this->moduleAssessment()->create([
                            'brace_module_id' => $moduleId->brace_module_id,
                            'user_id' => $user->id,
                            'status' => 0,
                        ]);
                    }
                }
            }
        }

//        dd($count, $output);
    }

    public function assessmentAnswersByModuleId($moduleId, $userId): \Illuminate\Database\Eloquent\Builder
    {
        return $this->moduleAssessmentAnswer()
            ->with('question', 'module', 'user')
            ->where([
                ['brace_module_id', $moduleId],
                ['user_id', $userId],
            ]);
    }

    public function assessmentWithRelations(): \Illuminate\Database\Eloquent\Builder
    {
        return $this->moduleAssessment()->with('user', 'module');
    }

    public function questionWithRelations(): \Illuminate\Database\Eloquent\Builder
    {
        return $this->moduleAssessmentQuestion()->with('module');
    }

    public function assessmentById($id): \Illuminate\Database\Eloquent\Builder
    {
        return $this->assessmentWithRelations()->findOrFail($id);
    }

    public function assessmentByModuleId($id): \Illuminate\Database\Eloquent\Builder
    {
        return $this->assessmentWithRelations()->where('brace_module_id', $id)->first();
    }

    public function assessmentCompletionMessages($pass, $retake): string
    {
        $message = '';
        if($pass === 1){
            $message = "Congratulations on passing your assessment, please proceed to the next module";
        }

        if($pass === 0 && $retake <= 3){
            $retakes = 3 - $retake;
            $message = "Sorry, unfortunately you didn't make it. You have {$retakes} retakes, try again or proceed to the next module";
        }

        if($pass === 0 && $retake > 3){
            $message = "Sorry, unfortunately you didn't make it. You have no retakes. Proceed to the next module and try to do better in your next assessment";
        }
        return $message;
    }

    public function storeAnswers($request, $userId, $moduleId): \Illuminate\Http\JsonResponse
    {
        // Check if the user has completed the module before and if they have any retakes left
        $previousAssessment = $this->checkUserHasPreviousAssessment($userId, $moduleId);
        if($previousAssessment && $previousAssessment->retakes >= 3){
            return response()->json([
                'success' => false,
                'questions_message' => 'You are out of retakes for this module'
            ]);
        }

        // Clear all already existing answers
        $this->clearAllAssessmentAnswers($userId, $moduleId);

        // Store all questions
        foreach($request->inputs as $key => $value){
            $this->moduleAssessmentAnswer()->create([
                'user_id' => $userId,
                'brace_module_id' => $moduleId,
                'module_assessment_question_id' => $value['question_id'],
                'answer' => $value['answer']
            ]);
        }

        $totalQuestions = $this->assessmentQuestionsByModuleId($moduleId)->count();
        $answers = $this->assessmentAnswersByModuleId($moduleId, $userId)->get();

        // If submitted answer is same as correct answer from question relationship increase number of correct answers
        $correctAnswers = 0;
        foreach ($answers as $answer){
            if($answer->answer === $answer->question->correct_answer){
                $correctAnswers ++;
            }
        }

        $percent = ($correctAnswers / $totalQuestions) * 100;

        $submitted = $this->moduleAssessment()->where([
            ['user_id', $userId],
            ['brace_module_id', $moduleId],
        ])->first();

        // If assessment exists
        if($submitted){
            // Has taken assessment before
            if($submitted->status === 1){
                $submitted->score = $correctAnswers;
                $submitted->percent = $percent;
                ++$submitted->retake;

                if($percent >= 65) {
                    $submitted->passed = 1;
                }

                if($percent < 65 && $submitted->retake < 3){
                    $submitted->passed = 0;
                }

            }elseif($submitted->status === 0){
                $submitted->user_id = $userId;
                $submitted->brace_module_id = $moduleId;
                $submitted->score = $correctAnswers;
                $submitted->percent = $percent;
                ++$submitted->retake;
                $submitted->status = 1;

                if($percent >= 65){
                    $submitted->passed = 1;

                }else{
                    $submitted->passed = 0;
                }
            }

            $submitted->save();
        }

        // If assessment does not exist
        if(!$submitted){
            $submitted = $this->moduleAssessment()->create([
                'user_id' => $userId,
                'brace_module_id' => $moduleId,
                'score' => $correctAnswers,
                'percent' => $percent,
                'retake' => 1,
                'status' => 1,
                'passed' => $percent >= 65 ? 1 : 0,
            ]);
        }

        return response()->json([
            'success' => true,
            'passed' => $submitted->percent >= 65,
            'percent' => $submitted->percent,
            'retake' => $submitted->retake,
            'message' => $this->assessmentCompletionMessages($submitted->passed, $submitted->retake)
        ]);
    }

    public function checkUserPassedModule($userId, $moduleId){
        return $this->moduleAssessment()->where([
            ['user_id', $userId],
            ['brace_module_id', $moduleId],
            ['passed', 1],
        ])->first();
    }

    public function checkUserHasPreviousAssessment($userId, $moduleId){
        return $this->moduleAssessment()->where([
            ['user_id', $userId],
            ['brace_module_id', $moduleId],
            ['status', 1]
        ])->first();
    }

    public function checkUserHasRetakes($userId, $moduleId){
        return $this->moduleAssessment()->where([
            ['user_id', $userId],
            ['brace_module_id', $moduleId],
            ['retakes', "<", 3]
        ])->first();
    }

    public function clearAllAssessmentAnswers($userId, $moduleId): void
    {
        // Check if user passed module
        $passedModule = $this->checkUserPassedModule($userId, $moduleId);
        // If user has not passed module, clear all previous answers before they have another attempt
        // This is because each user has 3 tries
        if(!$passedModule){
            $moduleAssessmentAnswers = $this->assessmentAnswersByModuleId($moduleId, $userId);
            if($moduleAssessmentAnswers->count() > 0){
                $moduleAssessmentAnswers->delete();
            }
        }
    }

    public function getPreviousBraceModules($currentSort){
        return $this->module->braceModule()->where([
            ['sort', '<', $currentSort],
        ])->orderBy('sort', 'desc');
    }

    public function getNextBraceModules($currentSort){
        return $this->module->braceModule()->where([
            ['sort', '>', $currentSort],
        ])->orderBy('sort', 'asc');
    }

    public function searchUserAssessments($request): array
    {
        $input = $request->all();
        // Remove this session variable if it exists
        $request->session()->forget(['search_values', 'search_inputs']);

        $searchValues = [];
        foreach($input as $key => $value){
            if($key !== "page" && !empty($value)){
//                $searchValues[$key] = $value;
                if($key === "started_module"){
                    $searchValues[$key] = "Started ".$this->module->moduleById($value)->title;
                }elseif($key === "not_started_module"){
                    $searchValues[$key] = "Not Started ".$this->module->moduleById($value)->title;
                }elseif($key === "completed_module"){
                    $searchValues[$key] = "Completed ".$this->module->moduleById($value)->title;
                }elseif($key === "program_status" && $value === "started"){
                    $searchValues[$key] = "Started Program";
                }elseif($key === "program_status" && $value === "not-started"){
                    $searchValues[$key] = "Not Started Program";
                }else{
                    $searchValues[$key] = $value;
                }
            }
        }

        // Create this session variable to store results
        $request->session()->put('search_values', $searchValues);
        $request->session()->put('search_inputs', $input);

        $users = $this->user->selectedUsersWithAssessments()
            ->where(function($query) use ($input){
            $query->when(!empty($input['search_value']), static function($q) use($input){
                $q->where('first_name', 'like' , '%'. $input['search_value'] .'%')
                    ->orWhere('last_name', 'like' , '%'. $input['search_value'] .'%')
                    ->orWhere('email', 'like' , '%'. $input['search_value'] .'%');
            });

        })->when(!empty($input['started_module']), function ($q) use($input){
                $currentModule = $this->module->moduleById($input['started_module']);
                // Get next and previous modules for 'completed_module'
                $previousModules = $this->getPreviousBraceModules($currentModule->sort)->get()->pluck('id')->toArray();
                $nextModules = $this->getNextBraceModules($currentModule->sort)->get()->pluck('id')->toArray();
                $previousModules[] = (int)$input['started_module'];

                // where completed modules id are in the previous modules array
                // where incomplete modules id are in the next modules array
                return $q->whereHas('module_assessments', function ($q2) use ($previousModules){
                    $q2->whereIn('brace_module_id', $previousModules);
                    $q2->where('status', '>=', 0);
                })->whereDoesntHave('module_assessments', function ($q2) use ($nextModules) {
                    $q2->whereIn('brace_module_id', $nextModules);
                    $q2->where('status', '>=', 0);
                });

        })->when(!empty($input['not_started_module']), function ($q) use($input){
            $currentModule = $this->module->moduleById($input['not_started_module']);
            $previousModules = $this->getPreviousBraceModules($currentModule->sort)->get()->pluck('id')->toArray();
            $nextModules = $this->getNextBraceModules($currentModule->sort)->get()->pluck('id')->toArray();
            $previousModules[] = (int)$input['not_started_module'];

            if(count($previousModules) > 0){
                return $q->whereHas('module_assessments', function ($q2) use ($previousModules){
                    $q2->whereIn('brace_module_id', $previousModules);
                    $q2->where('status', '=', 1);
                })->whereDoesntHave('module_assessments', function ($q2) use ($nextModules) {
                    $q2->whereIn('brace_module_id', $nextModules);
                    $q2->where('status', '>=', 0);
                });
            }
            return $q->whereDoesntHave('course_assessments');


        })->when(!empty($input['completed_module']), function ($q) use($input){
            $currentModule = $this->module->moduleById($input['completed_module']);

            // Get next and previous modules for 'completed_module'
            $previousModules = $this->getPreviousBraceModules($currentModule->sort)->get()->pluck('id')->toArray();
            $nextModules = $this->getNextBraceModules($currentModule->sort)->get()->pluck('id')->toArray();
            $previousModules[] = (int)$input['completed_module'];

            // where completed modules id are in the previous modules array
            // where incomplete modules id are in the next modules array
            return $q->whereHas('completed_module_assessments', function ($q2) use ($previousModules){
                $q2->whereIn('brace_module_id', $previousModules);
            })->whereDoesntHave('completed_module_assessments', function ($q2) use ($nextModules) {
                $q2->whereIn('brace_module_id', $nextModules);
            });

        })->when(!empty($input['program_status']), static function ($q) use($input){
            if($input['program_status'] === "started"){
                return $q->has('course_assessments');
            }
            if($input['program_status'] === "not-started"){
               return $q->doesntHave('course_assessments');
            }
            return false;
        })->paginate(12);

        // if result exists return results, else return empty array
        if($users->total() > 0){
            return [
                'success' => true,
                'users' => UserProfileResource::collection($users)->response()->getData(true),
                'total' => $users->total(),
                'search_values' => Session::get('search_values')
            ];
        }

        return [
            'success' => true,
            'users' => [],
            'total' => 0,
            'search_values' => Session::get('search_values')
        ];
    }

    public function exportUserAssessments($form){
        // pass form inputs from vue to controller via url and json object string
        // Convert json object string to array
        $input = json_decode($form, true);
        $users = $this->user->selectedUsersWithAssessments();

        return Excel::download(new AdminUserAssessmentExport($input, $users), 'export-user-assessments.xlsx');
    }

}
