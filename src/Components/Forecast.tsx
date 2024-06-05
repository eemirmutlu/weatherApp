import React, { useEffect, useState } from "react";
import '../Styles/Forecast.css';
import Navbar from '../Components/Navbar';
import axios from 'axios'; // Import Axios from axios library
import Weekly from "../Components/Weekly";
import Hourly from "../Components/Hourly";
import WeeklySkeleton from "./WeeklySkeleton";

const Forecast: React.FC<any> = () => {
    const [weather, setWeather] = useState<any>(null);
    const [forecastType, setForecastType] = useState<string>('weekly');

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((success) => {
            axios.get('https://api.open-meteo.com/v1/forecast', {
                params: {
                    lat: success.coords.latitude,
                    lon: success.coords.longitude,
                }
            }).then((response) => {
                setWeather(response.data);
            }).catch((error) => {
                console.error("Error fetching weather data:", error);
            });
        }, (error) => {
            console.error("Error getting geolocation:", error);
        });
    }, []);

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
