import React from 'react';
import '../Styles/Left.css'
import { Icon } from '@iconify/react';

const Left: React.FC = () => {
    return (
        <div className="Left">
            <div className='Country'>
                <h1>
                    Tokyo, Japan
                </h1>
            </div>

            <div className='WeatherImg'>
                <img src="../src/Images/overcast-day.svg" alt="" />
            </div>

            <div className='Weather'>
                <h1>
                    13.7°
                </h1>
                <p>
                    Overcast
                </p>
            </div>

            <div className='LeftBottom'>
                <div className='TopLeft'>
                    <div className='TopLeftImg'>
                        <Icon icon="ph:t-shirt-light" />
                    </div>
                    <div className='Content'>
                        <h2>Feels Like</h2>
                        <h1>13.8°C</h1>
                    </div>
                </div>
                <div className='TopRight'>
                    <div className='TopRightImg'>
                        <Icon icon="ph:wind" />
                    </div>
                    <div className='Content'>
                        <h2>Wind Speed</h2>
                        <h1>3.9km/h</h1>
                    </div>
                </div>
                <div className='BottomLeft'>
                    <div className='BottomLeftImg'>
                        <Icon icon="material-symbols-light:visibility-outline" />
                    </div>
                    <div className='Content'>
                        <h2>Visibility</h2>
                        <h1>24.14km</h1>
                    </div>
                </div>
                <div className='BottomRight'>
                    <div className='BottomRightImg'>
                        <Icon icon="material-symbols-light:humidity-percentage-outline-rounded" />
                    </div>
                    <div className='Content'>
                        <h2>Humidity</h2>
                        <h1>90%</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Left;
