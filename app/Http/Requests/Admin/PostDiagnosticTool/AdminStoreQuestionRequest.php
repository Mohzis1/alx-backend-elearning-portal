<?php

namespace App\Http\Requests\Admin\PostDiagnosticTool;

use http\Env\Request;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Validation\ValidationException;
use Illuminate\Foundation\Http\FormRequest;

class AdminStoreQuestionRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'post_diagnostic_question_category_id' => 'required',
            'question' => 'required|min:5|unique:post_diagnostic_questions,question',
            'type' => 'required',
            'sort' => 'required|numeric',
            'conditional' => 'nullable',
        ];
    }

    public function messages()
    {
        return [
            'post_diagnostic_category_id.required' => 'Category is required!',
            'question.required' => 'Question is required!',
            'type.required' => 'Option type is required!',
            'question.unique' => 'Question already exists!',
        ];
    }

    protected function failedValidation(Validator $validator)
    {
        // return errors in json object/array
        if($this->wantsJson()){
            $response = response()->json([
                "success" => false,
                'errors' => $validator->getMessageBag()->toArray(),
            ]);
        }

        throw (new ValidationException($validator, $response))
            ->errorBag($this->errorBag)
            ->redirectTo($this->getRedirectUrl());
    }
}
