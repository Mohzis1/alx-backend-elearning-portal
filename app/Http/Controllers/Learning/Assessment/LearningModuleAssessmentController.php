<?php

namespace App\Http\Controllers\Learning\Assessment;

use App\Http\Controllers\Controller;
use App\Http\Requests\Learning\SubmitModuleAssessmentRequest;
use App\Http\Resources\Learning\Module\ModuleAssessmentQuestionResource;
use App\Services\Base\BaseService;
use App\Services\Module\AssessmentCompletionService;
use App\Services\Module\ModuleAssessmentQuestionService;
use App\Services\Module\ModuleAssessmentService;
use App\Services\Module\ModuleService;
use App\Services\PostDiagnosticTool\PostDiagnosticToolService;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LearningModuleAssessmentController extends Controller
{
    protected ModuleService $module;
    protected ModuleAssessmentQuestionService $question;
    protected ModuleAssessmentService $moduleAssessment;
    protected AssessmentCompletionService $assessmentCompletion;
    protected PostDiagnosticToolService $postDiagnostic;

    public function __construct(
        ModuleAssessmentQuestionService $question,
        ModuleAssessmentService $moduleAssessment,
        ModuleService $module,
        AssessmentCompletionService $assessmentCompletion,
        PostDiagnosticToolService $postDiagnostic
    ){
        $this->moduleAssessment = $moduleAssessment;
        $this->question = $question;
        $this->module = $module;
        $this->assessmentCompletion = $assessmentCompletion;
        $this->postDiagnostic = $postDiagnostic;
    }

    public function index(Request $request): \Illuminate\Http\JsonResponse
    {
        try {
            $assessment = $this->moduleAssessment->assessmentByModuleId($request->module_id);
            return response()->json([
                'success' => true,
                'assessment' => $assessment,
                'module' => $this->module->moduleById($request->module_id),
            ]);

        } catch (\Exception $e) {
            return BaseService::tryCatchException($e);
        }
    }

    public function userStatus(Request $request): \Illuminate\Http\JsonResponse
    {
        try {
            $this->moduleAssessment->clearAllAssessmentAnswers(Auth::user()->id, $request->module_id);
            $assessment = $this->moduleAssessment->moduleAssessment()->where([
                ['user_id', Auth::user()->id],
                ['brace_module_id', $request->module_id],
            ])->first();

            return response()->json([
                'success' => true,
                'passed' => $assessment && $assessment->passed === 1,
                'retake' => $assessment ? $assessment->retake : 0,
                'status' => $assessment && $assessment->status === 1,
            ]);

        } catch (\Exception $e) {
            return BaseService::tryCatchException($e);
        }
    }

    public function questions(Request $request): \Illuminate\Http\JsonResponse
    {
        try {
            // Clear all already existing answers
            $this->moduleAssessment->clearAllAssessmentAnswers(Auth::user()->id, $request->module_id);
            // Get module assessment questions
            $questions = $this->question->questionsByModuleId($request->module_id)->get();
            $passedModule = $this->moduleAssessment->checkUserPassedModule(Auth::user()->id, $request->module_id);

            return response()->json([
                'success' => true,
                'questions' => ModuleAssessmentQuestionResource::collection($questions),
                'module' => $this->module->moduleById($request->module_id),
                'passed_module' => (bool)$passedModule,
            ]);

        } catch (\Exception $e) {
            return BaseService::tryCatchException($e);
        }
    }

    public function submitAssessment(SubmitModuleAssessmentRequest $request): \Illuminate\Http\JsonResponse
    {
        try {
            return $this->moduleAssessment->storeAnswers($request, Auth::user()->id, $request->module_id);

        } catch (\Exception $e) {
            return BaseService::tryCatchException($e);
        }
    }

    public function moduleAssessmentHistory(): \Illuminate\Http\JsonResponse
    {
        try {
            $completedModuleAssessments = $this->assessmentCompletion->getCompletedModulesByUser(Auth::user()->id)
                ->orderBy('created_at')->get();
            $accumulatedAssessment = $this->assessmentCompletion->accumulatedAssessmentScore(Auth::user()->id);
            $dateCompletedLastModule = $this->assessmentCompletion->getCompletedModulesByUser(Auth::user()->id)->select('id', 'created_at')
                ->orderBy('created_at', 'desc')->first()->created_at;
            $completedPostDiagnostic = $this->postDiagnostic->completedPostDiagnosticTool(Auth::user()->id);

//            dd(Carbon::parse($dateCompletedLastModule)->format('M d Y'));

            return response()->json([
                'success' => true,
                'completed_module_assessments' => $completedModuleAssessments,
                'accumulated_assessment_score' => $accumulatedAssessment['score'],
                'date_completed' => $dateCompletedLastModule ? Carbon::parse($dateCompletedLastModule)->format('M d Y') : '',
                'completed_post_diagnostic' => (bool)$completedPostDiagnostic,
                'user' => [
                    'id' => Auth::user()->id,
                    'first_name' => Auth::user()->first_name,
                    'middle_name' => Auth::user()->middle_name,
                    'last_name' => Auth::user()->last_name,
                ],
            ]);

        } catch (\Exception $e) {
            return BaseService::tryCatchException($e);
        }
    }

    public function downloadCertificate($user)
    {
        try {
            return $this->assessmentCompletion->generateCertificate($user);

        } catch (\Exception $e) {
            return BaseService::tryCatchException($e);
        }
    }

    public function updateModuleAssessmentStatus(Request $request): \Illuminate\Http\JsonResponse
    {
        try {
            $this->moduleAssessment->updateModuleAssessmentStatusForStartedModule();
            return response()->json([
              'success' => true,
              'message' => 'Updated',
            ]);

        } catch (\Exception $e) {
            return BaseService::tryCatchException($e);
        }
    }
}
