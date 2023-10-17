<?php

namespace App\Http\Resources\Learning\Module;

use App\Http\Resources\Learning\Course\AdminCourseResource;
use App\Http\Resources\Learning\Course\CourseResource;
use App\Services\Module\ModuleAssessmentService;
use App\Services\Module\ModuleService;
use Carbon\Carbon;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Auth;

class AdminModuleResource extends JsonResource
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
            'title' => ucwords(strtolower($this->title)),
            'image' => !empty($this->image) ? $this->image_path.$this->image : config('app.app_url').'/images/no-image.jpg',
            'description' => $this->description,
            'trainers' => $this->trainers,
            'training_methods' => $this->training_methods,
            'status' => $this->status,
            'sort' => $this->sort,

            'courses' => $this->courses ? AdminCourseResource::collection($this->courses) : [],
            'assignments' => $this->assignments ?? [],

            'started_module_assessments' => ModuleAssessmentService::usersStartedModule($this->id)->count() > 0 ? ModuleAssessmentService::usersStartedModule($this->id)->count() : 0,
            'completed_module_assessments' => ModuleAssessmentService::usersCompletedModule($this->id)->count() > 0 ? ModuleAssessmentService::usersCompletedModule($this->id)->count() : 0,

            'passed_module_assessments' => $this->passed_module_assessments ?? [],
            'assignment_submissions' => $this->assignment_submissions ?? [],
            'assessment' => $this->assessment ? new ModuleAssessmentResource($this->assessment) : false,
            'created_at' => $this->created_at ? Carbon::parse($this->created_at)->format('M d Y') : '',
        ];
    }
}
