<?php

namespace App\Http\Requests\Admin\PostDiagnosticTool;

use Illuminate\Contracts\Validation\Validator;
use Illuminate\Validation\ValidationException;
use Illuminate\Foundation\Http\FormRequest;

class AdminStoreOptionsRequest extends FormRequest
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
            'inputs.*.option' => 'required',
            'inputs.*.sort' => 'required|numeric',
        ];
    }

    public function messages()
    {
        return [
            'inputs.*.option.required' => 'Option is required!',
            'inputs.*.sort.required' => 'Sort is required!',
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
