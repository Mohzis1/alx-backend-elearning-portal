<?php

namespace App\Services\Module;

use App\Http\Resources\DiagnosticTool\DiagnosticToolStatusResource;
use App\Http\Resources\Learning\Course\CourseResourceResource;
use App\Http\Resources\Learning\Module\AdminModuleAssignmentSubmissionResource;
use App\Http\Resources\Learning\Module\ModuleAssignmentResource;
use App\Http\Resources\Learning\Module\ModuleAssignmentSubmissionResource;
use App\Models\Learning\Module\ModuleAssignment;
use App\Models\Learning\Module\ModuleAssignmentSubmission;
use App\Services\Base\CrudService;
use App\Services\User\UserService;
use Illuminate\Support\Facades\Session;

class ModuleAssignmentService
{
    protected UserService $user;
    public function __construct(UserService $user){
        $this->user = $user;
    }

    private string $assignmentSubmissionPath = 'documents/module/assignment';
    public function moduleAssignment(): ModuleAssignment
    {
        return new ModuleAssignment();
    }

    public function moduleAssignmentSubmission(): ModuleAssignmentSubmission
    {
        return new ModuleAssignmentSubmission();
    }

    public function moduleAssignmentSubmissionByUserId($userId, $assignmentId)
    {
        return $this->moduleAssignmentSubmission()->where([
            ['user_id', $userId],
            ['module_assignment_id', $assignmentId],
        ])->first();
    }

    public function assignmentWithRelations(): \Illuminate\Database\Eloquent\Builder
    {
        return $this->moduleAssignment()->with('module', 'submissions');
    }

    public function assignmentSubmissionsWithRelations(): \Illuminate\Database\Eloquent\Builder
    {
        return $this->moduleAssignmentSubmission()->with('module', 'user', 'assignment');
    }

    public function assignmentById($id)
    {
        return $this->assignmentWithRelations()->findOrFail($id);
    }

    public function assignmentsByModuleId($id): \Illuminate\Database\Eloquent\Builder
    {
        return $this->assignmentWithRelations()->where('brace_module_id', $id);
    }

    public function assignmentSubmissionsByModuleId($id): \Illuminate\Database\Eloquent\Builder
    {
        return $this->assignmentSubmissionsWithRelations()->where('brace_module_id', $id);
    }

    public function storeAssignment($request): array
    {
        $inputs = $request->all();
        $assignment = $this->moduleAssignment()->create($inputs);
        return [
            'success' => true,
            'assignment' => new ModuleAssignmentResource($assignment)
        ];
    }

    public function updateAssignment($request): array
    {
        $inputs = $request->all();
        $assignment = $this->assignmentById($request->id);
        $assignment->update($inputs);

        return [
            'success' => true,
            'assignment' => new ModuleAssignmentResource($assignment)
        ];
    }

    public function deleteAssignment($request): array
    {
        $assignment = $this->assignmentById($request->id);
        $assignment->delete();

        return [
            'success' => true,
            'message' => 'deleted'
        ];
    }

    public function submitAssignmentByUser($userId, $request): array
    {
        $inputs = $request->all();
        if(empty($inputs['document_one']) && empty($inputs['document_two']) && empty($inputs['document_three'])){
            return [
                'success' => false,
                'submission_error' => 'Please submit at least one document'
            ];
        }

        $inputs['user_id'] = $userId;
        $inputs['document_path'] = $this->assignmentSubmissionPath;
        foreach($inputs as $key => $value){
            if(in_array($key, ['document_one', 'document_two', 'document_three']) && !empty($value)){
                $inputs[$key] = CrudService::uploadAnyFile($request, $this->assignmentSubmissionPath, $key);
            }
        }

        $assignment = $this->moduleAssignmentSubmission()->create($inputs);

        return [
            'success' => true,
            'assignment' => new ModuleAssignmentSubmissionResource($assignment)
        ];
    }

    public function submittedUserAssignmentsByModuleId($moduleId): \Illuminate\Database\Eloquent\Builder
    {
        return $this->user->userWithRelations()
            ->whereHas('submitted_assignments', function($query) use ($moduleId){
                $query->where('brace_module_id', $moduleId);
        });
    }

    public function searchSubmittedAssignments($request): array
    {
        $input = $request->all();
        $request->session()->forget(['search_values', 'search_inputs']);

        $searchValues = [];
        foreach($input as $key => $value){
            if($key !== "page" && $key !== "module_id" && !empty($value)){
                $searchValues[$key] = $value;
            }
        }

        $request->session()->put('search_values', $searchValues);
        $request->session()->put('search_inputs', $input);

        $assignments = $this->assignmentSubmissionsByModuleId($request->module_id)->leftjoin(
            'users',
            'module_assignment_submissions.user_id', '=', 'users.id'

        )->select(
            'users.*',
            'module_assignment_submissions.*',
            'users.id AS user_id',
            'module_assignment_submissions.id AS assignment_submission_id',
            'module_assignment_submissions.updated_at AS assignment_submission_updated_at',

        )->where(function($query) use ($input){
            $query->when(!empty($input['terms']), static function($q) use($input){
                $q->where('users.first_name', 'like' , '%'. $input['terms'] .'%')
                    ->orWhere('users.last_name', 'like' , '%'. $input['terms'] .'%')
                    ->orWhere('users.email', 'like' , '%'. $input['terms'] .'%');
            });
        })->paginate(12);

        // if result exists return results, else return empty array
        if($assignments->total() > 0){
            return [
                'success' => true,
                'assignments' => AdminModuleAssignmentSubmissionResource::collection($assignments)->response()->getData(true),
                'total' => $assignments->total(),
                'search_values' => Session::get('search_values')
            ];
        }

        return [
            'success' => true,
            'assignments' => [],
            'total' => 0,
            'search_values' => Session::get('search_values')
        ];
    }
}
