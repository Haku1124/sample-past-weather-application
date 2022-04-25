<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class WeatherDataHistory extends Model
{
    protected $fillable = [
        'weather_id',
        'city_name',
        'city_id',
        'main',
        'main_description',
        'temp_min',
        'temp_max',
        'pressure',
        'humidity',
        'wind_speed',
        'date',
    ];
}
