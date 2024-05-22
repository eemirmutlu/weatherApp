import React from "react";
import '../Styles/Navbar.css'
import { Icon } from '@iconify/react';

const Navbar: React.FC = () => {
    return (
        <nav className="Navbar">
            <div className="Search">
                <input type="text" placeholder="Search for location..." />
            </div>

            <div className="NavbarRight">
                <div className="Temperature">
                    <div className="Celsius">
                        <Icon icon="carbon:temperature-celsius" />
                        <p>
                            Celsius
                        </p>
                    </div>
                    <div className="Fahrenheit">
                        <Icon icon="carbon:temperature-fahrenheit" />
                        <p>
                            Fahrenheit
                        </p>
                    </div>
                    <div>
                        <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="" />
                    </div>
                </div>
                <div className="Social">
                </div>
            </div>
        </nav>
    )
}

export default Navbar