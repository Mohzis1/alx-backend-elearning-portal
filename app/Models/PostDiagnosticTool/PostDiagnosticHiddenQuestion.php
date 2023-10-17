<?php

namespace App\Models\PostDiagnosticTool;

use App\Models\Brace\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PostDiagnosticHiddenQuestion extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'post_diagnostic_user_id',
        'questions',
    ];

    public function user(){
        return $this->belongsTo(User::class, 'user_id', 'id');
    }

    public function diagnostic_user(): \Illuminate\Database\Eloquent\Relations\BelongsTo
    {
        return $this->belongsTo(PostDiagnosticUser::class, 'post_diagnostic_user_id', 'id');
    }
}
