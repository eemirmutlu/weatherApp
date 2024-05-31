import React, { useEffect, useState } from "react";
import '../Styles/Details.css'
import Axios from '../Library/Axios'
import uvIndex from '../Library/uvIndex'
import wind from '../Library/wind'
import windDirection from "../Library/windDirection";
import windSpeed from "../Library/windSpeed";
import dayjs from "dayjs";

const Details: React.FC = () => {

    const [weather, setWeather] = useState<any>(null)

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((success) => {
            Axios.get('/forecast', {
                params: {
                    lat: success,
                    lon: success,
                }
            }).then((data: { data: any; }) => {
                setWeather(data.data)
            })
        });

    }, [])


    if (!weather) return 'Loading...'

    return (
        <div className="DetailsMain">
            <h4>
                Details for Today
            </h4>
            <div className="Details">
                <div className="DetailCart">
                    <h5>Sunrise</h5>
                    <div className="DetailCartContent">
                        <img src="../src/Images/sunrise.svg" alt="" />
                        <p>
                            {dayjs(weather.daily.sunrise[0]).format('HH:HH')}

                        </p>
                    </div>
                </div>
                <div className="DetailCart">
                    <h5>Sunset</h5>
                    <div className="DetailCartContent">
                        <img src="../src/Images/sunset.svg" alt="" />
                        <p>
                            {dayjs(weather.daily.sunset[0]).format('HH:HH')}
                        </p>
                    </div>
                </div>
                <div className="DetailCart">
                    <h5>Highest Tepmerature</h5>
                    <div className="DetailCartContent">
                        <div className="HighTemp">
                            <img src="../src/Images/thermometer-warmer.svg" alt="" />
                            <p>
                                {weather.daily.apparent_temperature_max[0]}
                                {weather.daily_units.apparent_temperature_max}
                            </p>
                        </div>
                        <p>
                            {weather.daily.temperature_2m_max[0]}
                            {weather.daily_units.temperature_2m_max}
                        </p>
                    </div>
                </div>
                <div className="DetailCart">
                    <h5>Lowest Temperature</h5>
                    <div className="DetailCartContent">
                        <div className="LowTemp">
                            <img src="../src/Images/thermometer-colder.svg" alt="" />
                            <p>
                                {weather.daily.apparent_temperature_min[0]}
                                {weather.daily_units.apparent_temperature_min}
                            </p>
                        </div>
                        <p>
                            {weather.daily.temperature_2m_min[0]}
                            {weather.daily_units.temperature_2m_min}
                        </p>
                    </div>
                </div>
                <div className="DetailCart">
                    <h5>Preciptional Probablility</h5>
                    <div className="DetailCartContentLeft">
                        <img src="../src/Images/raindrop.svg" alt="" />
                        <p>
                            {weather.daily.precipitation_sum[0] != null ? weather.daily.rain_sum[0] : '0%'}
                            {weather.daily_units.rain_sum}
                        </p>
                    </div>
                </div>
                <div className="DetailCart">
                    <h5>Total Precipitation</h5>
                    <div className="DetailCartContentLeft">
                        <img src="../src/Images/raindrops.svg" alt="" />
                        <p>
                            {weather.daily.precipitation_sum[0]}
                            {weather.daily_units.precipitation_sum}
                        </p>
                    </div>
                </div>
                <div className="DetailCart">
                    <h5>UV Index</h5>
                    <div className="DetailCartContent">
                        <img src={`../src/Images/${uvIndex(weather.daily.sunshine_duration)?.icon}.svg`} alt="" />
                        <p>
                            {uvIndex(weather.daily.sunshine_duration).description}
                        </p>
                    </div>
                </div>
                <div className="DetailCart">
                    <h5>Wind Speed</h5>
                    <div className="DetailCartContent">
                        <img src={`../src/Images/${wind(weather.current.wind_gusts_10m)?.icon}.svg`} alt="" />
                        <h2>
                            {weather.current.wind_speed_10m}
                            {weather.current_units.wind_speed_10m}
                        </h2>
                        <p>
                            {windDirection(weather.current.wind_gusts_10m)},
                            {windSpeed(weather.current.wind_speed_10m)}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Details