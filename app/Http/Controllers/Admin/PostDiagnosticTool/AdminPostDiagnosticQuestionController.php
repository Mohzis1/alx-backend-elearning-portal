<?php

namespace App\Http\Controllers\Admin\PostDiagnosticTool;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\PostDiagnosticTool\AdminStoreOptionsRequest;
use App\Http\Requests\Admin\PostDiagnosticTool\AdminStoreQuestionRequest;
use App\Http\Requests\Admin\PostDiagnosticTool\AdminUpdateQuestionRequest;
use App\Services\Base\BaseService;
use App\Services\PostDiagnosticTool\PostDiagnosticQuestionService;
use Illuminate\Http\Request;

class AdminPostDiagnosticQuestionController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    protected PostDiagnosticQuestionService $question;
    public function __construct(PostDiagnosticQuestionService $question){
        $this->question = $question;
    }

    public function index(Request $request): \Illuminate\Http\JsonResponse
    {
        try {
            $data = $this->question->getQuestions($request)->orderBy('sort', 'asc')->paginate(12);
            return response()->json([
                'success' => true,
                'total' => $data->total(),
                'questions' => $data,
            ]);

        } catch (\Exception $e) {
            return BaseService::tryCatchException($e);
        }
    }

    public function allQuestions(): \Illuminate\Http\JsonResponse
    {
        try {
            $data = $this->question->question()->orderBy('sort', 'asc')->get();
            return response()->json([
                'success' => true,
                'total' => $data->count(),
                'questions' => $data,
            ]);

        } catch (\Exception $e) {
            return BaseService::tryCatchException($e);
        }
    }

    public function store(AdminStoreQuestionRequest $request): \Illuminate\Http\JsonResponse
    {
        try {
            $data = $this->question->storeQuestion($request);
            return response()->json([
                'success' => true,
                'question' => $data
            ]);

        } catch (\Exception $e) {
            return BaseService::tryCatchException($e);
        }
    }

    public function populate(Request $request): \Illuminate\Http\JsonResponse
    {
        try {
            $data = $this->question->questionWithRelations()->findOrFail($request->question_id);
            return response()->json([
                'success' => true,
                'question' => $data,
            ]);

        } catch (\Exception $e) {
            return BaseService::tryCatchException($e);
        }
    }

    public function update(AdminUpdateQuestionRequest $request): \Illuminate\Http\JsonResponse
    {
        try {
            $data = $this->question->updateQuestion($request, $request->question_id);
            return response()->json([
                'success' => true,
                'question' => $data,
            ]);

        } catch (\Exception $e) {
            return BaseService::tryCatchException($e);
        }
    }

    public function delete(Request $request): \Illuminate\Http\JsonResponse
    {
        try {
            $this->question->deleteQuestion($request->question_id);
            return response()->json([
                'success' => true,
                'message' => "Question deleted successfully",
            ]);

        } catch (\Exception $e) {
            return BaseService::tryCatchException($e);
        }
    }

    public function storeQuestionOption(AdminStoreOptionsRequest $request): \Illuminate\Http\JsonResponse
    {
        try {
            $data = $this->question->storeOptionsWithQuestionId($request, $request->question_id);
            return response()->json([
                'success' => true,
                'options' => $data,
            ]);

        } catch (\Exception $e) {
            return BaseService::tryCatchException($e);
        }
    }

    public function getQuestionOptions(Request $request): \Illuminate\Http\JsonResponse
    {
        try {
            $data = $this->question->getOptionsFromQuestionId($request->question_id)
                ->orderBy('sort')->get();
            $question = $this->question->questionWithRelations()->findOrFail($request->question_id);
            return response()->json([
                'success' => true,
                'options' => $data,
                'question' => $question,
            ]);

        } catch (\Exception $e) {
            return BaseService::tryCatchException($e);
        }
    }

    public function deleteOption(Request $request): \Illuminate\Http\JsonResponse
    {
        try {
            $this->question->deleteOption($request->option_id);
            return response()->json([
                'success' => true,
                'message' => "Deleted successfully",
            ]);

        } catch (\Exception $e) {
            return BaseService::tryCatchException($e);
        }
    }

}
