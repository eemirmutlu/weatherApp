import React from "react";
import '../Styles/Skeleton.css';

const Skeleton: React.FC = () => {
    return (
        <div className="Skeleton">
            <div className="SkeletonCart">
                <div className="SkeletonTime"></div>
                <div className="SkeletonIcon"></div>
                <div className="SkeletonDetails">
                    <div className="SkeletonDescription"></div>
                    <div className="SkeletonTemp"></div>
                </div>
            </div>
        </div>
    );
}

export default Skeleton;
