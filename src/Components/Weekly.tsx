import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import fetchWeatherData from "../Library/Axios";
import weatherDiscription from "../Library/weatherDiscription";
import '../Styles/Weekly.css';
import { InfinitySpin } from "react-loader-spinner";
import WeeklySkeleton from "./WeeklySkeleton";

const Weekly: React.FC = () => {
    const [weather, setWeather] = useState<any>(null);
    const [loading, setLoading] = useState<boolean[]>([]);
    const [location, setLocation] = useState<{ lat: number, lon: number } | null>(null);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                setLocation({
                    lat: 40.1950,
                    lon: 29.0610,
                });
            },
            (error) => {
                console.error("Error getting geolocation:", error);
            }
        );
    }, []);

    useEffect(() => {
        if (location) {
            fetchWeatherData(location.lat, location.lon).then(response => {
                setWeather(response.data);
                setLoading(new Array(response.data.daily.time.length).fill(true));
            }).catch(error => {
                console.error("Error fetching weather data:", error);
            });
        }
    }, [location]);

    const handleImageLoad = (index: number) => {
        setLoading(prevState => {
            const newLoadingState = [...prevState];
            newLoadingState[index] = false;
            return newLoadingState;
        });
    };

    return (
        <div className="ForecastBottom">
            {weather && weather.daily && weather.daily.time ? (
                weather.daily.time.map((item: string, index: number) => (
                    <div className="Cart" key={index}>
                        <h2>{index === 0 ? 'Today' : dayjs(item).format('dddd')}</h2>
                        <h3>{dayjs(item).format('DD/MM/YYYY')}</h3>
                        {loading[index] && (
                            <InfinitySpin
                                width="200"
                                color="gray"
                            />
                        )}
                        <img
                            src={`/Images/${weatherDiscription(weather.daily.weather_code[index])?.icon}.svg`}
                            alt=""
                            onLoad={() => handleImageLoad(index)}
                            style={{ display: loading[index] ? 'none' : 'block' }}
                        />
                        <div>
                            <h2 className="high">
                                {weather.daily.temperature_2m_max[index]}
                                {weather.daily_units.temperature_2m_max}
                            </h2>
                            <h2 className="low">
                                {weather.daily.temperature_2m_min[index]}
                                {weather.daily_units.temperature_2m_min}
                            </h2>
                        </div>
                    </div>
                ))
            ) : (
                <div className="loader-container">
                    {[...Array(7)].map((_, index) => (
                        <WeeklySkeleton key={index} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Weekly;
