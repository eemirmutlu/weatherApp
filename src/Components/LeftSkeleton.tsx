import React from 'react';
import '../Styles/LeftSkeleton.css';

const LeftSkeleton: React.FC = () => {
    return (
        <div className="LeftSkeleton">
            <div className='SkeletonCountry'>
                <div className="SkeletonText large"></div>
            </div>

            <div className='SkeletonWeatherImg'>
                <div className="SkeletonCircle"></div>
            </div>

            <div className='SkeletonWeather'>
                <div className="SkeletonText xlarge"></div>
                <div className="SkeletonText medium"></div>
            </div>

            <div className='SkeletonLeftBottom'>
                <div className='SkeletonTopLeft'>
                    <div className='SkeletonIcon'></div>
                    <div className='SkeletonContent'>
                        <div className="SkeletonText small"></div>
                        <div className="SkeletonText large"></div>
                    </div>
                </div>
                <div className='SkeletonTopRight'>
                    <div className='SkeletonIcon'></div>
                    <div className='SkeletonContent'>
                        <div className="SkeletonText small"></div>
                        <div className="SkeletonText large"></div>
                    </div>
                </div>
                <div className='SkeletonBottomLeft'>
                    <div className='SkeletonIcon'></div>
                    <div className='SkeletonContent'>
                        <div className="SkeletonText small"></div>
                        <div className="SkeletonText large"></div>
                    </div>
                </div>
                <div className='SkeletonBottomRight'>
                    <div className='SkeletonIcon'></div>
                    <div className='SkeletonContent'>
                        <div className="SkeletonText small"></div>
                        <div className="SkeletonText large"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LeftSkeleton;
