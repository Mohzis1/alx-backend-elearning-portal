<?php

namespace App\Services\PostDiagnosticTool;

use App\Models\PostDiagnosticTool\PostDiagnosticOption;
use App\Models\PostDiagnosticTool\PostDiagnosticQuestion;

/**
 * Class ExportDiagnosticToolQuestionService.
 */
class PostDiagnosticQuestionService Extends PostDiagnosticCategoryService
{
    public function question(): PostDiagnosticQuestion
    {
        return new PostDiagnosticQuestion();
    }

    public function questionWithRelations(): \Illuminate\Database\Eloquent\Builder
    {
        return $this->question()->with('category', 'options');
    }

    public function option(){
        return new PostDiagnosticOption();
    }

    public function optionWithRelations(): \Illuminate\Database\Eloquent\Builder
    {
        return $this->option()->with('category', 'question');
    }

    public function questionsByCategoryId($id): \Illuminate\Database\Eloquent\Builder
    {
        return $this->questionWithRelations()->where('post_diagnostic_question_category_id', $id);
    }

    public function getQuestions($request): \Illuminate\Database\Eloquent\Builder
    {
        if(!empty($request->category_id)){
            $questions = $this->questionsByCategoryId($request->category_id);
        }else{
            $questions = $this->questionWithRelations();
        }
        return $questions;
    }

    public function storeQuestion($request){
        // Check if inputs exist
        // Iterate all inputs and add them individually
        $inputs = $request->all();
        // Assign conditional question
        $inputs['conditional'] = $inputs['conditional'] === "1" ? 1 : 0;
        return $this->question()->create($inputs);
    }

    public function updateQuestion($request, $id){
        $question = $this->question()->findOrFail($id);
        $inputs = $request->all();
        // Assign conditional question
        $inputs['conditional'] = $inputs['conditional'] === "1" ? 1 : 0;
        $question->update($inputs);
        return $question;
    }

    public function deleteQuestion($id): void
    {
        $question = $this->question()->with('options')->find($id);
        if(count($question->options) > 0){
            $question->options->each->delete();
        }
        $question->delete();
    }

    public function storeOptionsWithQuestionId($request, $questionId){

        $categoryId = $this->question()->where('id', $questionId)->first()->post_diagnostic_question_category_id;

        if(!empty($request['inputs'])){
            foreach ($request['inputs'] as $input) {
                $this->option()->create([
                    'post_diagnostic_question_category_id' => $categoryId,
                    'post_diagnostic_question_id' => $questionId,
                    'option' => $input['option'],
                    'sort' => $input['sort'],
                    'conditional' => $input['conditional'] === '1' ? 1 : 0,
                    'condition_type' => $input['condition_type'],
                    'hide_questions' => !empty($input['hide_questions']) ? $input['hide_questions'] : Null,
                ]);
            }
        }

        return $this->getOptionsFromQuestionId($questionId)->orderBy('sort')->get();
    }

    public function getOptionsFromQuestionId($questionId): \Illuminate\Database\Eloquent\Builder
    {
        return $this->optionWithRelations()->where('post_diagnostic_question_id', $questionId);
    }

    public function deleteOption($id){
        return $this->option()->findOrFail($id)->delete();
    }

}
