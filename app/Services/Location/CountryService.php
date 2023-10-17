<?php

namespace App\Services\Location;

use App\Models\Location\Country;
use App\Models\World\WorldCountry;
use App\Models\World\WorldState;

class CountryService
{
    public function country(): Country
    {
        return new Country();
    }

    public function worldCountry(): WorldCountry
    {
        return new WorldCountry();
    }

    public function worldState(): WorldState
    {
        return new WorldState();
    }

    public function countryById($id){
        return $this->country()->findOrFail($id);
    }

    public function africanCountries(){
        return $this->country()->where('continent_name', '=', 'Africa');
    }

    public function worldCountryAfrica(){
        return $this->worldCountry()->where('region', '=', 'Africa');
    }

    public function worldStateAfrica($countryId){
        return $this->worldState()->where('country_id', '=', $countryId);
    }
}
