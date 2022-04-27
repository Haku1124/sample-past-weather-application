<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use GuzzleHttp\Client;
use App\Models\WeatherDataHistory;

class GetWeatherDataBatch extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'command:getDataFromApi';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'getDataFromApi command started';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        try {
            $client = new Client();
            $sydney = config('app.citys.sydney');
            $melbourne = config('app.citys.melbourne');
            $apikey = config('app.api_key');
            // Geocoding API -> http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid={API key}
            // Current Weather Data -> https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
            $response = $client->request('GET', 'https://api.openweathermap.org/data/2.5/group?id=' . 
                $sydney . ',' . $melbourne . 
                '&appid=' . $apikey . '&units=metric');
            
            $insert_records = array();
            $resp = $response->getBody();
            $results = json_decode($resp, true);

            foreach ($results['list'] as $city => $details) {
                $insert_record = array(
                    'weather_id' => $details['weather'][0]['id'],
                    'icon_id' => $details['weather'][0]['icon'],
                    'city_id' => $details['id'],
                    'city_name' => $details['name'],
                    'main' => $details['weather'][0]['main'],
                    'main_description' => $details['weather'][0]['description'],
                    'temp_min' => $details['main']['temp_min'],
                    'temp_max' => $details['main']['temp_max'],
                    'pressure' => $details['main']['pressure'],
                    'humidity' => $details['main']['humidity'],
                    'wind_speed' => $details['wind']['speed'],
                    'date' => date('Y/m/d'),
                    'created_at' => date('Y/m/d H:m:s')
                );
                array_push($insert_records, $insert_record);
            }
            WeatherDataHistory::insert($insert_records);
        } catch (Exception $e) {
            //TODO::
        }
        
    }
}
