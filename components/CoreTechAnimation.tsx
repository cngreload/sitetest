import React from "react";

const CoreTechAnimation: React.FC = () =>
{
    return (
        <div className="relative flex items-center justify-center">
            <div className="w-24 h-24 rounded-full bg-yellow-500 animate-pulse"></div>
            <div className="absolute w-32 h-32 rounded-full border-4 border-yellow-300 animate-spin-slow"></div>
            <div className="absolute w-48 h-48 rounded-full border-4 border-yellow-200 animate-spin-reverse"></div>
            {/* Add circular logos */ }
        </div>
    );
};

export default CoreTechAnimation;
