<?php

namespace App\Http\Resources\Learning\Module;

use App\Http\Resources\User\UserProfileResource;
use Carbon\Carbon;
use Illuminate\Http\Resources\Json\JsonResource;

class AdminModuleAssignmentSubmissionResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'user' => $this->user ? new UserProfileResource($this->user) : '',

            'document_one_name' => $this->document_one,
            'document_two_name' => $this->document_one,
            'document_three_name' => $this->document_one,

            'document_one' => !empty($this->document_one) ? config('app.app_url').'/'.$this->document_path.'/'.$this->document_one : '',
            'document_two' => !empty($this->document_two) ? config('app.app_url').'/'.$this->document_path.'/'.$this->document_two : '',
            'document_three' => !empty($this->document_three) ? config('app.app_url').'/'.$this->document_path.'/'.$this->document_three : '',

            'created_at' => $this->created_at ? Carbon::parse($this->created_at)->format('M d Y') : '',
            'updated_at' => $this->updated_at ? Carbon::parse($this->updated_at)->format('M d Y') : '',
        ];
    }
}
