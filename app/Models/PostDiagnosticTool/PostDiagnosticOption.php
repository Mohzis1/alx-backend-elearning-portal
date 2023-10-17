<?php

namespace App\Models\PostDiagnosticTool;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PostDiagnosticOption extends Model
{
    use HasFactory;
    protected $fillable = [
        'post_diagnostic_question_id',
        'post_diagnostic_question_category_id',
        'option',
        'sort',
        'hide_questions',
        'conditional',
        'condition_type',
    ];

    public function category(): \Illuminate\Database\Eloquent\Relations\BelongsTo
    {
        return $this->belongsTo(PostDiagnosticQuestionCategory::class, 'post_diagnostic_category_id', 'id');
    }

    public function question(): \Illuminate\Database\Eloquent\Relations\BelongsTo
    {
        return $this->belongsTo(PostDiagnosticQuestion::class, 'post_diagnostic_question_id', 'id');
    }
}
