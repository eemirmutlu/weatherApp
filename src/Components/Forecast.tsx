import React from "react";
import '../Styles/Forecast.css'
import Navbar from '../Components/Navbar'

const Forecast: React.FC = () => {
    return (
        <div className="Forecast">
            <Navbar/>
            <div className="ForecastTop">
                <ul>
                    <li><b>Weekly Forecast</b></li>
                    <li>Hourly Forecast</li>
                </ul>
            </div>
            <div className="ForecastBottom">
                <div className="Cart">
                    <h2>Today</h2>
                    <h3>2023-03-21</h3>
                    <img src="../src/Images/overcast-day.svg" alt="" />
                    <div>
                        <h2 className="high">17.2</h2>
                        <h2 className="low">10.5</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Forecast