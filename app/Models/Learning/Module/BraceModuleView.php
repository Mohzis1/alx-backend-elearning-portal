<?php

namespace App\Models\Learning\Module;

use App\Models\Brace\User;
use App\Models\Learning\Course\BraceCourse;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BraceModuleView extends Model
{
    use HasFactory;
    protected $fillable = [
        'user_id',
        'brace_module_id',
        'retake',
        'score',
        'percent',
        'passed',
        'status',
    ];

    public function user(): \Illuminate\Database\Eloquent\Relations\BelongsTo
    {
        return $this->belongsTo(User::class, 'user_id', 'id');
    }

    public function module(): \Illuminate\Database\Eloquent\Relations\BelongsTo
    {
        return $this->belongsTo(BraceModule::class, 'brace_module_id', 'id');
    }

    public function courses(): \Illuminate\Database\Eloquent\Relations\HasMany
    {
        return $this->hasMany(BraceCourse::class, 'brace_module_id', 'brace_module_id');
    }
}
