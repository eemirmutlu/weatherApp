import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import Axios from "../Library/Axios";
import weatherDiscription from "../Library/weatherDiscription";
import '../Styles/Weekly.css';


const Weekly: React.FC<any> = () => {

    const [weather, setWeather] = useState<any>(null);

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
        <div className="ForecastBottom">
            {weather && weather.daily && weather.daily.time ? (
                weather.daily.time.map((item:string, index:number) => (
                    <div className="Cart" key={index}>
                        <h2>{dayjs(item).format('dddd')}</h2>
                        <h3>{item}</h3>
                        {/* <img src="../src/Images/${}-day.svg" alt="" /> */}
                        <img src={`../src/Images/${weatherDiscription(weather.daily.weather_code[index])?.icon}.svg`} alt="" />
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
                <p>Loading...</p>
            )}
        </div>
    );
}

export default Weekly;
