<?php

namespace App\Models\PostDiagnosticTool;

use App\Models\Brace\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PostDiagnosticUser extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'last_question_id',
        'last_login',
        'status'
    ];

    public function user(): \Illuminate\Database\Eloquent\Relations\BelongsTo
    {
        return $this->belongsTo(User::class, 'user_id', 'id');
    }

    public function answers(): \Illuminate\Database\Eloquent\Relations\HasMany
    {
        return $this->hasMany(PostDiagnosticAnswer::class, 'user_id', 'id');
    }

    public function last_question(): \Illuminate\Database\Eloquent\Relations\HasOne
    {
        return $this->hasOne(PostDiagnosticQuestion::class, 'last_question_id', 'id');
    }
}
