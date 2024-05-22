import React from "react";
import '../Styles/Details.css'

const Details: React.FC = () => {
    return (
        <div className="DetailsMain">
            <h4>
                Details for Today
            </h4>
            <div className="Details">
                <div className="DetailCart">
                    <h5>Sunrise</h5>
                    <div className="DetailCartContent">
                        <img src="../src/Images/sunrise.svg" alt="" />
                        <p>20:42</p>
                    </div>
                </div>
                <div className="DetailCart">
                    <h5>Sunset</h5>
                    <div className="DetailCartContent">
                        <img src="../src/Images/sunset.svg" alt="" />
                        <p>08:54</p>
                    </div>
                </div>
                <div className="DetailCart">
                    <h5>Highest Tepmerature</h5>
                    <div className="DetailCartContent">
                        <div className="HighTemp">
                            <img src="../src/Images/thermometer-warmer.svg" alt="" />
                            <p>17.2</p>
                        </div>
                        <p>Feels like 16.4</p>
                    </div>
                </div>
                <div className="DetailCart">
                    <h5>Lowest Temperature</h5>
                    <div className="DetailCartContent">
                        <div className="LowTemp">
                            <img src="../src/Images/thermometer-colder.svg" alt="" />
                            <p>10.5</p>
                        </div>
                        <p>Feels like 9.4</p>
                    </div>
                </div>
                <div className="DetailCart">
                    <h5>Preciptional Probablility</h5>
                    <div className="DetailCartContentLeft">
                        <img src="../src/Images/raindrop.svg" alt="" />
                        <p>3%</p>
                    </div>
                </div>
                <div className="DetailCart">
                    <h5>Total Predipitation</h5>
                    <div className="DetailCartContentLeft">
                        <img src="../src/Images/raindrops.svg" alt="" />
                        <p>0mm</p>
                    </div>
                </div>
                <div className="DetailCart">
                    <h5>UV Index</h5>
                    <div className="DetailCartContent">
                        <img src="../src/Images/uv-index-4.svg" alt="" />
                        <p>Protection Required.</p>
                    </div>
                </div>
                <div className="DetailCart">
                    <h5>Wind Speed</h5>
                    <div className="DetailCartContent">
                        <img src="../src/Images/wind-beaufort-3.svg" alt="" />
                        <h2>6.3km/h</h2>
                        <p>South-West, gentle breeze</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Details