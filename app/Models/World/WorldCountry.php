<?php

namespace App\Models\World;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class WorldCountry extends Model
{
    use HasFactory;
    protected $table = 'world_countries';

    public function states(): \Illuminate\Database\Eloquent\Relations\HasMany
    {
        return $this->hasMany(WorldState::class, 'country_id', 'id');
    }
}
