import React, { useEffect, useState } from "react";
import '../Styles/Forecast.css'
import Navbar from '../Components/Navbar'
import Axios from '../Library/Axios'
import dayjs from "dayjs";
import weatherDiscription from "../Library/weatherDiscription";

const Forecast: React.FC = () => {

    const [weather, setWeather] = useState<any>(null)

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((success) => {
            Axios.get('/forecast', {
                params: {
                    lat: success,
                    lon: success,
                }
            }).then(data => {
                setWeather(data.data)
            })
        });

    }, [])

    if (!weather) return 'Loading...'

    return (
        <div className="Forecast">
            <Navbar />
            <div className="ForecastTop">
                <ul>
                    <li><b>Weekly Forecast</b></li>
                    <li>Hourly Forecast</li>
                </ul>
            </div>
            <div className="ForecastBottom">
                {weather.daily.time?.map((item, index) => (
                    <div className="Cart">
                        <h2>{dayjs(item).format('dddd')}</h2>
                        <h3>
                            {item}
                        </h3>
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
                ))}
            </div>
        </div>
    )
}

export default Forecast