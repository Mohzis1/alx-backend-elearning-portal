<?php

namespace App\Models\Brace;

use App\Models\Learning\Course\BraceCourseView;
use App\Models\Learning\Module\BraceModuleView;
use App\Models\Learning\Module\ModuleAssignmentSubmission;
use App\Models\Location\Country;
use App\Models\PostDiagnosticTool\PostDiagnosticUser;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'ip',
        'first_name',
        'last_name',
        'middle_name',
        'email',
        'password',
        'verification_token',
        'mobile',
        'gender',
        'education',
        'image',
        'image_path',
        'country_id',
        'country_residence_id',
        'date_of_birth',
        'selected',
        'last_login',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
        'verification_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function business(): \Illuminate\Database\Eloquent\Relations\HasOne
    {
        return $this->hasOne(ApplicationBusiness::class, 'user_id', 'id');
    }

    public function question(): \Illuminate\Database\Eloquent\Relations\HasOne
    {
        return $this->hasOne(ApplicationQuestion::class, 'user_id', 'id');
    }

    public function country(): \Illuminate\Database\Eloquent\Relations\BelongsTo
    {
        return $this->belongsTo(Country::class, 'country_id', 'id');
    }

    public function country_residence(): \Illuminate\Database\Eloquent\Relations\BelongsTo
    {
        return $this->belongsTo(Country::class, 'country_residence_id', 'id');
    }

    public function submitted_assignments(): \Illuminate\Database\Eloquent\Relations\HasMany
    {
        return $this->hasMany(ModuleAssignmentSubmission::class, 'user_id', 'id');
    }

    public function module_assessments(): \Illuminate\Database\Eloquent\Relations\HasMany
    {
        return $this->hasMany(BraceModuleView::class, 'user_id', 'id')
            ->orderBy('updated_at');
    }

    public function completed_module_assessments(): \Illuminate\Database\Eloquent\Relations\HasMany
    {
        return $this->hasMany(BraceModuleView::class, 'user_id', 'id')
            ->where('status', 1);
    }

    public function course_assessments(): \Illuminate\Database\Eloquent\Relations\HasMany
    {
        return $this->hasMany(BraceCourseView::class, 'user_id', 'id')
            ->orderBy('created_at');
    }

    public function post_diagnostic_user(): \Illuminate\Database\Eloquent\Relations\HasOne
    {
        return $this->hasOne(PostDiagnosticUser::class, 'user_id', 'id');
    }
}
