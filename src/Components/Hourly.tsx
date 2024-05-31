import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import Axios from "../Library/Axios";
import weatherDiscription from "../Library/weatherDiscription";
import Skeleton from "./Skeleton";
import '../Styles/Hourly.css';
import { InfinitySpin } from "react-loader-spinner";

const Hourly: React.FC = () => {
    const [weather, setWeather] = useState<any>(null);
    const [loading, setLoading] = useState<boolean[]>([]);
    const today = dayjs().startOf('day');

    const isToday = (timestamp: string | number | dayjs.Dayjs | Date | null | undefined) => {
        const date = dayjs(timestamp);
        return date.isSame(today, 'day');
    };

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((success) => {
            Axios.get('/forecast', {
                params: {
                    lat: success.coords.latitude,
                    lon: success.coords.longitude,
                }
            }).then(response => {
                setWeather(response.data);
                setLoading(new Array(response.data.hourly.time.length).fill(true));
            }).catch(error => {
                console.error("Error fetching weather data:", error);
            });
        }, error => {
            console.error("Error getting geolocation:", error);
        });
    }, []);

    const handleImageLoad = (index: number) => {
        setLoading(prevState => {
            const newLoadingState = [...prevState];
            newLoadingState[index] = false;
            return newLoadingState;
        });
    };

    return (
        <div className="HourlyForecast">
            {weather && weather.hourly && weather.hourly.time ? (
                weather.hourly.time.filter((time: number) => isToday(time)).map((item: string, index: number) => (
                    <div className="HourlyCart" key={index}>
                        <h3>{dayjs(item).format('hh:mm A')}</h3>
                        {loading[index] && (
                            <InfinitySpin
                                width="200"
                                color="gray"
                            />
                        )}
                        <img
                            src={`/Images/${weatherDiscription(weather.hourly.weather_code[index])?.icon}.svg`}
                            alt=""
                            onLoad={() => handleImageLoad(index)}
                            style={{ display: loading[index] ? 'none' : 'block' }}
                        />
                        <div>
                            <h2>
                                {weatherDiscription(weather.current.weather_code)?.description}
                            </h2>
                            <h2 className="high">
                                {weather.hourly.temperature_2m[index]}
                                {weather.hourly_units.temperature_2m}
                            </h2>
                        </div>
                    </div>
                ))
            ) : (
                <div className="loader-container">
                    {[...Array(24)].map((_, index) => (
                        <Skeleton key={index} />
                    ))}
                </div>
            )}
        </div>
    );
}

export default Hourly;
