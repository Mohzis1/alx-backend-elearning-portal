<?php

namespace App\Http\Requests\Learning\PostDiagnostic;

use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Validation\ValidationException;

class LearningPostDiagnosticSubmitAnswerRequest extends FormRequest
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
    public function rules(){
        return [
            'option_id' => 'required|sometimes',
            'option_ids' => 'required|sometimes',
            'answer' => 'required|sometimes',
        ];
    }

    public function messages(){
        return [
            'option_id.required' => 'Select an option to proceed!',
            'option_ids.required' => 'Select one or more options to proceed!',
            'answer.required' => 'An answer is required to proceed!',
        ];
    }

    protected function failedValidation(Validator $validator){
        // return errors in json object/array
        $message = $validator->errors()->all();
        throw new HttpResponseException(response()->json([
            'success' => false,
            'errors' => $message
        ]));
    }
}
