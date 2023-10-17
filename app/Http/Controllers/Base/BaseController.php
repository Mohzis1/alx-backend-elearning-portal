<?php

namespace App\Http\Controllers\Base;

use App\Http\Controllers\Controller;
use App\Services\Base\BaseService;
use App\Services\Location\CountryService;
use Exception;
use Illuminate\Http\Request;


class BaseController extends Controller
{
    protected CountryService $country;
    public function __construct(CountryService $country){
        $this->country = $country;
    }

    public function getAfricanCountries(): \Illuminate\Http\JsonResponse
    {
        try {
            $data = $this->country->africanCountries()->orderBy('country_name')->get();
            return response()->json([
               'success' => true,
               'countries' => $data,
            ]);

        }catch(Exception $e){
            return BaseService::tryCatchException($e);
        }
    }

    public function getWorldAfricanCountries(): \Illuminate\Http\JsonResponse
    {
        try {
            $data = $this->country->worldCountryAfrica()->select('id', 'name')->orderBy('name')->get();
            return response()->json([
                'success' => true,
                'countries' => $data,
            ]);

        }catch(Exception $e){
            return BaseService::tryCatchException($e);
        }
    }

    public function getWorldAfricanStates(Request $request): \Illuminate\Http\JsonResponse
    {
        try {
            $data = $this->country->worldStateAfrica($request->country_id)
                ->select('id', 'name')->orderBy('name')->get();
            return response()->json([
                'success' => true,
                'states' => $data,
            ]);

        }catch(Exception $e){
            return BaseService::tryCatchException($e);
        }
    }

}
