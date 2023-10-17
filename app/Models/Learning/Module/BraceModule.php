<?php

namespace App\Models\Learning\Module;

use App\Models\Learning\Course\BraceCourse;
use App\Models\Learning\Course\BraceCourseView;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BraceModule extends Model
{
    use HasFactory;
    protected  $fillable = [
        'title',
        'image',
        'image_path',
        'description',
        'trainers',
        'training_methods',
        'start',
        'end',
        'sort',
        'status'
    ];

    public function courses(): \Illuminate\Database\Eloquent\Relations\HasMany
    {
        return $this->hasMany(BraceCourse::class, 'brace_module_id', 'id')
            ->orderBy('sort', 'asc');
    }

    public function module_views(): \Illuminate\Database\Eloquent\Relations\HasMany
    {
        return $this->hasMany(BraceModuleView::class, 'brace_module_id', 'id')
            ->orderBy('id');
    }

    public function module_assessments(): \Illuminate\Database\Eloquent\Relations\HasMany
    {
        return $this->hasMany(BraceModuleView::class, 'brace_module_id', 'id');
    }

    public function started_module_assessments(): \Illuminate\Database\Eloquent\Relations\HasMany
    {
        return $this->hasMany(BraceCourseView::class, 'brace_module_id', 'id')
            ->orderBy('updated_at');
    }

    public function completed_module_assessments(): \Illuminate\Database\Eloquent\Relations\HasMany
    {
        return $this->hasMany(BraceModuleView::class, 'brace_module_id', 'id')
            ->where('status', 1);
    }

    public function passed_module_assessments(): \Illuminate\Database\Eloquent\Relations\HasMany
    {
        return $this->hasMany(BraceModuleView::class, 'brace_module_id', 'id')
            ->where('passed', 1)
            ->orderBy('updated_at');
    }

    public function assessment(): \Illuminate\Database\Eloquent\Relations\HasOne
    {
        return $this->hasOne(BraceModuleView::class, 'brace_module_id', 'id');
    }

    public function assessment_questions(): \Illuminate\Database\Eloquent\Relations\HasMany
    {
        return $this->hasMany(ModuleAssessmentQuestion::class, 'brace_module_id', 'id');
    }

    public function assignments(): \Illuminate\Database\Eloquent\Relations\HasMany
    {
        return $this->hasMany(ModuleAssignment::class, 'brace_module_id', 'id');
    }

    public function assignment_submissions(): \Illuminate\Database\Eloquent\Relations\HasMany
    {
        return $this->hasMany(ModuleAssignmentSubmission::class, 'brace_module_id', 'id');
    }
}
