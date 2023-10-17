<?php

namespace App\Services\PostDiagnosticTool;


use App\Models\PostDiagnosticTool\PostDiagnosticQuestionCategory;
use Illuminate\Support\Str;

/**
 * Class ExportDiagnosticCategoryService.
 */
class PostDiagnosticCategoryService
{
    public function category(): PostDiagnosticQuestionCategory
    {
        return new PostDiagnosticQuestionCategory();
    }

    public function categoryWithRelationships(): \Illuminate\Database\Eloquent\Builder
    {
        return $this->category()->with('questions');
    }

    public function storeCategory($request){
        $input = $request->all();
        $input['slug'] = Str::slug($input['name']);
        return $this->category()->create($input);
    }

    public function updateCategory($request, $id){
        $category = $this->category()->find($id);
        $input = $request->all();
        $input['slug'] = Str::slug($input['name']);
        $category->update($input);
        return $category;
    }

    public function deleteCategory($id){
        $category = $this->category()->find($id);
        $category->delete();
    }

}
