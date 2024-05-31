import React, { useEffect, useState } from "react";
import '../Styles/Forecast.css'
import Navbar from '../Components/Navbar'
import Axios from '../Library/Axios'
import Weekly from "../Components/Weekly";
import Hourly from "../Components/Hourly";

const Forecast: React.FC<any> = () => {

    const [weather, setWeather] = useState<any>(null)
    const [forecastType, setForecastType] = useState<string>('weekly');

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
    )
}

export default Forecast