<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('weather_data_histories', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('weather_id');
            $table->string('city_name', 50);
            $table->integer('city_id');
            $table->string('main', 50);
            $table->text('main_description')->nullable();
            $table->float('temp_min');
            $table->float('temp_max');
            $table->integer('pressure');
            $table->integer('humidity');
            $table->integer('wind_speed');
            $table->date('date');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('weather_data_histories');
    }
};
