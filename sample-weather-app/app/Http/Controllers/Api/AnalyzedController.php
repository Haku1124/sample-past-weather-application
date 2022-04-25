<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\WeatherDataHistory;

class AnalyzedController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        try {
            $postTarget = WeatherDataHistory::whereIn('id', function ($query) {
                $length = config('app.data_section_length');
                $query->selectRaw('MAX(id)')
                    ->from('weather_data_histories')
                    ->whereRaw('weather_data_histories.date >= DATE_SUB(CURDATE(), INTERVAL ' . $length . ' DAY)')
                    ->groupBy('weather_data_histories.date', 'weather_data_histories.city_id');
            })
                ->get();
                // ->toSql();
        } catch (Exception $e) {
            //TODO::
        }
        return $postTarget;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
