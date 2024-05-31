import React, { useEffect, useState } from 'react';
import '../Styles/Left.css'
import { Icon } from '@iconify/react';
import Axios from '../Library/Axios'
import weatherDiscription from '../Library/weatherDiscription'


const Left: React.FC = () => {
    const [weather, setWeather] = useState<any>(null)

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((success) => {
            Axios.get('/forecast', {
                params: {
                    lat: success,
                    lon: success,
                }
            }).then(data => {
                console.log(data)
                setWeather(data.data)
            })
        });

    }, [])


    if (!weather) return 'Loading...'

    return (
        <div className="Left">
            <div className='Country'>
                <h1>
                    Tokyo, Japan
                </h1>
            </div>

            <div className='WeatherImg'>
                <img src={`../public/Images/${weatherDiscription(weather.current.weather_code)?.icon}.svg`} alt="" />
            </div>

            <div className='Weather'>
                <h1>
                    {weather ? weather.current.temperature_2m : 'Loading...'}
                    {weather.current_units.temperature_2m}
                </h1>

                <p>
                    {weatherDiscription(weather.current.weather_code)?.description}
                </p>
            </div>

            <div className='LeftBottom'>
                <div className='TopLeft'>
                    <div className='TopLeftImg'>
                        <Icon icon="ph:t-shirt-light" />
                    </div>
                    <div className='Content'>
                        <h2>Feels Like</h2>
                        <h1>
                            {weather ? weather.current.apparent_temperature : 'Loading...'}
                            {weather.current_units.apparent_temperature}
                        </h1>
                    </div>
                </div>
                <div className='TopRight'>
                    <div className='TopRightImg'>
                        <Icon icon="ph:wind" />
                    </div>
                    <div className='Content'>
                        <h2>Wind Speed</h2>
                        <h1>
                            {weather ? weather.current.wind_speed_10m : 'Loading...'}
                            {weather.current_units.wind_speed_10m}
                        </h1>
                    </div>
                </div>
                <div className='BottomLeft'>
                    <div className='BottomLeftImg'>
                        <Icon icon="material-symbols-light:visibility-outline" />
                    </div>
                    <div className='Content'>
                        <h2>Visibility</h2>
                        <h1>
                            {weather.current.visibility/1000}km
                        </h1>
                    </div>
                </div>
                <div className='BottomRight'>
                    <div className='BottomRightImg'>
                        <Icon icon="material-symbols-light:humidity-percentage-outline-rounded" />
                    </div>
                    <div className='Content'>
                        <h2>Humidity</h2>
                        <h1>
                            {weather.current.relative_humidity_2m}
                            {weather.current_units.relative_humidity_2m}
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Left;
