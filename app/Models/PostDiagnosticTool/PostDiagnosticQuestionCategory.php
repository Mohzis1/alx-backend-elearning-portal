<?php

namespace App\Models\PostDiagnosticTool;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PostDiagnosticQuestionCategory extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'slug',
        'sort',
    ];

    public function questions(): \Illuminate\Database\Eloquent\Relations\HasMany
    {
        return $this->hasMany(PostDiagnosticQuestion::class, 'post_diagnostic_question_category_id', 'id')
            ->orderBy('sort');
    }
}
