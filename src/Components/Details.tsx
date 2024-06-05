import React, { useEffect, useState } from "react";
import '../Styles/Details.css';
// import Axios from '../Library/Axios';
import uvIndex from '../Library/uvIndex';
import wind from '../Library/wind';
import windDirection from "../Library/windDirection";
import windSpeed from "../Library/windSpeed";
import dayjs from "dayjs";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import fetchWeatherData from "../Library/Axios";

const Details: React.FC = () => {

    const [weather, setWeather] = useState<any>(null);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((success) => {
            fetchWeatherData(success.coords.latitude, success.coords.longitude)
                .then((response: any) => {
                    setWeather(response.data);
                })
                .catch((error: any) => {
                    console.error("Error fetching weather data:", error);
                });
        }, (error) => {
            console.error("Error getting geolocation:", error);
        });
    }, []);

    if (!weather) {
        return (
            <div className="DetailsMain">
                <h4>
                    <Skeleton width={200} height={30} />
                </h4>
                <div className="Details">
                    {Array(8).fill(undefined).map((_, index) => (
                        <div className="DetailCart" key={index}>
                            <h5><Skeleton width={150} /></h5>
                            <div className="DetailCartContent">
                                <Skeleton circle={true} height={50} width={50} />
                                <p><Skeleton width={100} /></p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    return (
        <div className="DetailsMain">
            <h4>
                Details for Today
            </h4>
            <div className="Details">
                <div className="DetailCart">
                    <h5>Sunrise</h5>
                    <div className="DetailCartContent">
                        <img src="/Images/sunrise.svg" alt="Sunrise" />
                        <p>
                            {dayjs(weather.daily.sunrise[0]).format('HH:mm')}
                        </p>
                    </div>
                </div>
                <div className="DetailCart">
                    <h5>Sunset</h5>
                    <div className="DetailCartContent">
                        <img src="/Images/sunset.svg" alt="Sunset" />
                        <p>
                            {dayjs(weather.daily.sunset[0]).format('HH:mm')}
                        </p>
                    </div>
                </div>
                <div className="DetailCart">
                    <h5>Highest Temperature</h5>
                    <div className="DetailCartContent">
                        <div className="HighTemp">
                            <img src="/Images/thermometer-warmer.svg" alt="Highest Temperature" />
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
                            <img src="/Images/thermometer-colder.svg" alt="Lowest Temperature" />
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
                    <h5>Preciptional Probability</h5>
                    <div className="DetailCartContentLeft">
                        <img src="/Images/raindrop.svg" alt="Preciptional Probability" />
                        <p>
                            {weather.daily.precipitation_sum[0] != null ? weather.daily.rain_sum[0] : '0%'}
                            {weather.daily_units.rain_sum}
                        </p>
                    </div>
                </div>
                <div className="DetailCart">
                    <h5>Total Precipitation</h5>
                    <div className="DetailCartContentLeft">
                        <img src="/Images/raindrops.svg" alt="Total Precipitation" />
                        <p>
                            {weather.daily.precipitation_sum[0]}
                            {weather.daily_units.precipitation_sum}
                        </p>
                    </div>
                </div>
                <div className="DetailCart">
                    <h5>UV Index</h5>
                    <div className="DetailCartContent">
                        <img src={`/Images/${uvIndex(weather.daily.sunshine_duration)?.icon}.svg`} alt="UV Index" />
                        <p>
                            {uvIndex(weather.daily.sunshine_duration).description}
                        </p>
                    </div>
                </div>
                <div className="DetailCart">
                    <h5>Wind Speed</h5>
                    <div className="DetailCartContent">
                        <img src={`/Images/${wind(weather.current.wind_gusts_10m)?.icon}.svg`} alt="Wind Speed" />
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
    );
}

export default Details;
