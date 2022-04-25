SELECT * FROM `laravel`.`weather_data_histories` WHERE id IN( 
  SELECT MAX(id) FROM `laravel`.`weather_data_histories` WHERE date >= DATE_SUB(CURDATE(), INTERVAL 1 DAY) group by date, city_id
);