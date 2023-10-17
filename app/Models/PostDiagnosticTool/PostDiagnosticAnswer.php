<?php

namespace App\Models\PostDiagnosticTool;

use App\Models\Brace\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PostDiagnosticAnswer extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'post_diagnostic_user_id',
        'post_diagnostic_question_id',
        'answer',
        'points',
    ];

    public function user(): \Illuminate\Database\Eloquent\Relations\BelongsTo
    {
        return $this->belongsTo(User::class, 'user_id', 'id');
    }

    public function post_diagnostic_user(): \Illuminate\Database\Eloquent\Relations\BelongsTo
    {
        return $this->belongsTo(PostDiagnosticUser::class, 'post_diagnostic_user_id', 'id');
    }

    public function question(): \Illuminate\Database\Eloquent\Relations\BelongsTo
    {
        return $this->belongsTo(PostDiagnosticQuestion::class, 'post_diagnostic_question_id', 'id');
    }
}
