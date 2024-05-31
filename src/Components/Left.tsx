import React, { useEffect, useState } from 'react';
import '../Styles/Left.css';
import { Icon } from '@iconify/react';
import Axios from '../Library/Axios';
import weatherDiscription from '../Library/weatherDiscription';
import LeftSkeleton from './LeftSkeleton';
import { InfinitySpin } from 'react-loader-spinner';

const Left: React.FC = () => {
    const [weather, setWeather] = useState<any>(null);
    const [imageLoaded, setImageLoaded] = useState<boolean>(false);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((success) => {
            Axios.get('/forecast', {
                params: {
                    lat: success.coords.latitude,
                    lon: success.coords.longitude,
                }
            }).then(data => {
                setWeather(data.data);
            }).catch(error => {
                console.error("Error fetching weather data:", error);
            });
        }, error => {
            console.error("Error getting geolocation:", error);
        });
    }, []);

    if (!weather) return <LeftSkeleton />;

    return (
        <div className="Left">
            <div className='Country'>
                <h1>Tokyo, Japan</h1>
            </div>

            <div className='WeatherImg'>
                {!imageLoaded && <InfinitySpin width="200" color="gray" />}
                <img
                    src={`/Images/${weatherDiscription(weather.current.weather_code)?.icon}.svg`}
                    alt=""
                    onLoad={() => setImageLoaded(true)}
                    style={{ display: imageLoaded ? 'block' : 'none' }}
                />
            </div>

            <div className='Weather'>
                <h1>
                    {weather.current.temperature_2m}
                    {weather.current_units.temperature_2m}
                </h1>
                <p>{weatherDiscription(weather.current.weather_code)?.description}</p>
            </div>

            <div className='LeftBottom'>
                <div className='TopLeft'>
                    <div className='TopLeftImg'>
                        <Icon icon="ph:t-shirt-light" />
                    </div>
                    <div className='Content'>
                        <h2>Feels Like</h2>
                        <h1>
                            {weather.current.apparent_temperature}
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
                            {weather.current.wind_speed_10m}
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
                        <h1>{weather.current.visibility / 1000}km</h1>
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
