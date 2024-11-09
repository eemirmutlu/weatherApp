import axios from "axios";

const instance = axios.create({
  baseURL: 'https://api.open-meteo.com/v1'
});

const fetchWeatherData = (lat: any, lon: any) => {
  return instance.get('/forecast', {
    params: {
      latitude: 40.1950,
      longitude: 29.0610,
      current: ["temperature_2m", 'visibility', "relative_humidity_2m", "apparent_temperature", "is_day", "precipitation", "rain", "showers", "snowfall", "weather_code", "cloud_cover", "pressure_msl", "surface_pressure", "wind_speed_10m", "wind_direction_10m", "wind_gusts_10m"],
      hourly: ["temperature_2m", "relative_humidity_2m", "dew_point_2m", "apparent_temperature", 'visibility', "precipitation", "rain", "snowfall", "weather_code", "pressure_msl", "surface_pressure", "cloud_cover", "cloud_cover_low", "cloud_cover_mid", "cloud_cover_high", "et0_fao_evapotranspiration", "vapour_pressure_deficit", "wind_speed_10m", "wind_direction_10m"],
      daily: ["weather_code", "temperature_2m_max", "temperature_2m_min", "apparent_temperature_max", "apparent_temperature_min", "sunrise", "sunset", "daylight_duration", "sunshine_duration", "precipitation_sum", "rain_sum", "snowfall_sum", "precipitation_hours", "wind_speed_10m_max", "wind_gusts_10m_max", "wind_direction_10m_dominant", "shortwave_radiation_sum", "et0_fao_evapotranspiration"]
    }
  });
};

export default fetchWeatherData;
