import React from "react";
import '../Styles/WeeklySkeleton.css';

const Skeleton: React.FC = () => {
    return (
        <div className="WeeklySkeleton">
            <div className="WeeklySkeletonCart">
                <div className="WeeklySkeletonTime"></div>
                <div className="WeeklySkeletonIcon"></div>
                <div className="WeeklySkeletonDetails">
                    <div className="WeeklySkeletonDescription"></div>
                    <div className="WeeklySkeletonTemp"></div>
                </div>
            </div>
        </div>
    );
}

export default Skeleton;
