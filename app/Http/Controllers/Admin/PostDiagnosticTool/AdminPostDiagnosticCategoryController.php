<?php

namespace App\Http\Controllers\Admin\PostDiagnosticTool;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\PostDiagnosticTool\AdminStoreCategoryRequest;
use App\Http\Requests\Admin\PostDiagnosticTool\AdminUpdateCategoryRequest;
use App\Services\Base\BaseService;
use App\Services\PostDiagnosticTool\PostDiagnosticCategoryService;
use App\Services\PostDiagnosticTool\PostDiagnosticQuestionService;
use Illuminate\Http\Request;

class AdminPostDiagnosticCategoryController extends Controller
{
    protected PostDiagnosticCategoryService $category;
    protected PostDiagnosticQuestionService $question;
    public function __construct(
        PostDiagnosticCategoryService $category,
        PostDiagnosticQuestionService $question
    ){
        $this->category = $category;
        $this->question = $question;
    }

    public function index(): \Illuminate\Http\JsonResponse
    {
        try {
            $data = $this->category->categoryWithRelationships()->orderBy('sort')->get();
            return response()->json([
                'success' => true,
                'total' => $data->count(),
                'categories' => $data,
            ]);

        } catch (\Exception $e) {
            return BaseService::tryCatchException($e);
        }
    }

    public function getCategoryQuestions(Request $request): \Illuminate\Http\JsonResponse{
        try {
            $data = $this->question->questionsByCategoryId($request->category_id)
                ->orderBy('sort')->paginate(12);
            return response()->json([
                'success' => true,
                'total' => $data->total(),
                'questions' => $data,
            ]);

        } catch (\Exception $e) {
            return BaseService::tryCatchException($e);
        }
    }

    public function store(AdminStoreCategoryRequest $request){
        try {
            $data = $this->category->storeCategory($request);
            return response()->json([
                'success' => true,
                'category' => $data
            ]);

        } catch (\Exception $e) {
            return BaseService::tryCatchException($e);
        }
    }

    public function populate(Request $request){
        try {
            $data = $this->category->category()->findOrFail($request->category_id);
            return response()->json([
                'success' => true,
                'category' => $data,
            ]);

        } catch (\Exception $e) {
            return BaseService::tryCatchException($e);
        }
    }

    public function update(AdminUpdateCategoryRequest $request, $id){
        try {
            $data = $this->category->updateCategory($request, $id);
            return response()->json([
                'success' => true,
                'category' => $data,
            ]);

        } catch (\Exception $e) {
            return BaseService::tryCatchException($e);
        }
    }

    public function delete(Request $request){
        try {
            $this->category->deleteCategory($request->category_id);
            return response()->json([
                'success' => true,
                'message' => "Category deleted successfully",
            ]);

        } catch (\Exception $e) {
            return BaseService::tryCatchException($e);
        }
    }

}
