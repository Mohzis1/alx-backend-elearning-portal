<?php

namespace App\Models\PostDiagnosticTool;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PostDiagnosticQuestion extends Model
{
    use HasFactory;

    protected $fillable = [
        'post_diagnostic_question_category_id',
        'question',
        'type',
        'points',
        'sort',
        'conditional',
    ];

    public function category(){
        return $this->belongsTo(PostDiagnosticQuestionCategory::class, 'post_diagnostic_question_category_id', 'id');
    }

    public function answer(){
        return $this->hasOne(PostDiagnosticAnswer::class, 'post_diagnostic_question_id', 'id');
    }

    public function options(){
        return $this->hasMany(PostDiagnosticOption::class, 'post_diagnostic_question_id', 'id')
            ->orderBy('sort', 'asc');
    }
}
