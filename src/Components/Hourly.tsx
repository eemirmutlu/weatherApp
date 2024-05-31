import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import Axios from "../Library/Axios";
import weatherDiscription from "../Library/weatherDiscription";
import '../Styles/Hourly.css'

const Hourly: React.FC = () => {
    const [weather, setWeather] = useState<any>(null);
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
            }).catch(error => {
                console.error("Error fetching weather data:", error);
            });
        }, error => {
            console.error("Error getting geolocation:", error);
        });
    }, []);

    return (
        <div className="HourlyForecast">
            {weather && weather.hourly && weather.hourly.time ? (
                weather.hourly.time.filter((time:number) => isToday(time)).map((item:string, index:number) => (
                    <div className="HourlyCart" key={index}>
                        <h3>{dayjs(item).format('hh:mm A')}</h3>
                        <img
                            src={`/Images/${weatherDiscription(weather.hourly.weather_code[index])?.icon}.svg`}
                            alt=""
                        />
                        <div>
                            <h2 className="high">
                                {weather.hourly.temperature_2m[index]}
                                {weather.hourly_units.temperature_2m}
                            </h2>
                        </div>
                    </div>
                ))
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default Hourly;
