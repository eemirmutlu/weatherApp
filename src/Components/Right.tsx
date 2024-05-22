import React from 'react';
// import Navbar from './Navbar';
import '../Styles/Right.css'
import Forecast from './Forecast';
import Details from './Details';

const Right: React.FC = () => {
    return (
        <div className="Right">
            <Forecast/>
            <Details/>
        </div>
    );
};

export default Right;
