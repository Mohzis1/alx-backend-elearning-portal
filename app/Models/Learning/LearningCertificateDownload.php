<?php

namespace App\Models\Learning;

use App\Models\Brace\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class LearningCertificateDownload extends Model
{
    use HasFactory;
    protected $fillable = [
        'user_id',
        'certificate_reference',
        'number_of_downloads'
    ];

    public function user(): \Illuminate\Database\Eloquent\Relations\BelongsTo
    {
        return $this->belongsTo(User::class, 'user_id', 'id');
    }
}
