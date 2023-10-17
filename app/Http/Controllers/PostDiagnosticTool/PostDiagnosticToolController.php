<?php

namespace App\Http\Controllers\PostDiagnosticTool;

use App\Http\Controllers\Controller;
use App\Http\Requests\Learning\PostDiagnostic\LearningPostDiagnosticSubmitAnswerRequest;
use App\Services\Base\BaseService;
use App\Services\Module\AssessmentCompletionService;
use App\Services\PostDiagnosticTool\PostDiagnosticToolService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class PostDiagnosticToolController extends Controller
{
    private PostDiagnosticToolService $application;
    protected AssessmentCompletionService $assessmentCompletion;
    public function __construct(
        PostDiagnosticToolService $application,
        AssessmentCompletionService $assessmentCompletion
    ){
        $this->application = $application;
        $this->assessmentCompletion = $assessmentCompletion;
    }

    public function getQuestion(): \Illuminate\Http\JsonResponse
    {
        try {
            $status = '';
            $accumulatedAssessment = $this->assessmentCompletion->accumulatedAssessmentScore(Auth::user()->id);
            $question = $this->application->getQuestion(Auth::user()->id);

            return response()->json([
                'success' => true,
                'accumulated_assessment_score' => $accumulatedAssessment['score'],
                'question' => $question,
                'status' => $status
            ]);

        } catch (\Exception $e) {
            return BaseService::tryCatchException($e);
        }
    }

    public function storeAnswer(LearningPostDiagnosticSubmitAnswerRequest $request): \Illuminate\Http\JsonResponse
    {
        try {
            $this->application->storeAnswerFromQuestionId($request, $request->question_id, Auth::user()->id);
            return response()->json([
                'success' => true
            ]);

        } catch (\Exception $e) {
            return BaseService::tryCatchException($e);
        }
    }

    public function applicationProgress(): \Illuminate\Http\JsonResponse
    {
        try {
            $progressPercent = $this->application->getprogressPercentage(Auth::user()->id);
            return response()->json([
                'success' => true,
                'progress' => $progressPercent
            ]);

        } catch (\Exception $e) {
            return BaseService::tryCatchException($e);
        }
    }
}
