<?php

namespace App\Http\Requests\Admin\PostDiagnosticTool;

use Illuminate\Contracts\Validation\Validator;
use Illuminate\Validation\ValidationException;
use Illuminate\Foundation\Http\FormRequest;

class AdminStoreCategoryRequest extends FormRequest
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
            'inputs.*.name' => 'required|min:5|unique:post_diagnostic_question_categories,name',
            'inputs.*.sort' => 'nullable',
        ];
    }

    public function messages()
    {
        return [
            'inputs.*.name.required' => 'Name is required!',
            'inputs.*.sort.required' => 'Sort is required!',
            'inputs.*.name.unique' => 'This name already exists!',
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
