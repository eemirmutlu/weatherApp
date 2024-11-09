import React, { useEffect, useState } from "react";
import '../Styles/Forecast.css';
import Navbar from '../Components/Navbar';
import Weekly from "../Components/Weekly";
import Hourly from "../Components/Hourly";
import WeeklySkeleton from "./WeeklySkeleton";
import fetchWeatherData from "../Library/Axios";

const Forecast: React.FC<any> = () => {
    const [weather, setWeather] = useState<any>(null);
    const [forecastType, setForecastType] = useState<string>('weekly');

    useEffect(() => {
        // Bursa'nın koordinatları
        const bursaLat = 40.1950;
        const bursaLon = 29.0610;

        // Hava durumu verisini Bursa'nın koordinatlarıyla çek
        fetchWeatherData(bursaLat, bursaLon)
            .then((response) => {
                setWeather(response.data);
            })
            .catch((error) => {
                console.error("Error fetching weather data:", error);
            });
    }, []);  // useEffect sadece ilk renderda çalışacak şekilde

    if (!weather) return <WeeklySkeleton />;

    return (
        <div className="Forecast">
            <Navbar />
            <div className="ForecastTop">
                <ul>
                    <li
                        onClick={() => setForecastType('weekly')}
                        style={{ fontWeight: forecastType === 'weekly' ? 'bold' : 'normal' }}
                    >
                        Weekly Forecast
                    </li>
                    <li
                        onClick={() => setForecastType('hourly')}
                        style={{ fontWeight: forecastType === 'hourly' ? 'bold' : 'normal' }}
                    >
                        Hourly Forecast
                    </li>
                </ul>
            </div>
            <div>
                {forecastType === 'weekly' ? <Weekly /> : <Hourly />}
            </div>
        </div>
    );
};

export default Forecast;
