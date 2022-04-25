INSERT INTO `laravel`.`weather_data_histories` 
(id, weather_id, city_name, city_id, main, main_description, temp_min, temp_max, pressure, humidity, wind_speed, date, created_at) 
VALUES 
(1, 320, "Sydney", 2147714, "Rain", "rain", 14.86, 16.3, 1028, 92, 4, "2022-04-23", "2022-04-23 01:01:01"),
(2, 670, "Melbourne", 2158177, "Clear", "clear", 9.48, 13.74, 1029, 73, 3, "2022-04-23", "2022-04-23 01:01:01"),
(3, 520, "Sydney", 2147714, "Rain", "light intensity shower rain", 14.86, 16.3, 1028, 92, 4, "2022-04-22", "2022-04-22 01:01:01"),
(4, 800, "Melbourne", 2158177, "Clear", "clear", 9.48, 13.74, 1029, 73, 3, "2022-04-22", "2022-04-22 01:01:01"),
(5, 300, "Sydney", 2147714, "test_main", "test_description", 15.48, 19.51, 1027, 83, 4, "2022-04-21", "2022-04-21 01:01:01"),
(6, 400, "Melbourne", 2158177, "test_main", "test_description", 13.24, 20.34, 1026, 81, 6, "2022-04-21", "2022-04-21 01:01:01");
