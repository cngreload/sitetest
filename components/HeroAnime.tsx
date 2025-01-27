import React from "react";

const Hero: React.FC = () =>
{
    return (
        <div className="flex items-center justify-center h-screen bg-gradient-to-b from-gray-900 to-gray-800">
            {/* Sun with Logo */ }
            <div className="relative w-[147px] h-[147px]">
                <div className="absolute w-[73.5px] h-[73.5px] bg-gradient-to-br from-yellow-400 to-red-500 rounded-full animate-pulse-glow flex items-center justify-center">
                    <img
                        src="https://via.placeholder.com/50?text=LOGO"
                        alt="Core Logo"
                        className="w-[40px] h-[40px]"
                    />
                </div>

                {/* Ring 1 */ }
                <div className="absolute w-[147px] h-[147px] border-2 border-dashed border-white/30 rounded-full animate-spin-slow">
                    <img
                        src="https://via.placeholder.com/50?text=HTML"
                        alt="HTML"
                        className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                    />
                    <img
                        src="https://via.placeholder.com/50?text=CSS"
                        alt="CSS"
                        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2"
                    />
                    <img
                        src="https://via.placeholder.com/50?text=JS"
                        alt="JavaScript"
                        className="absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
                    />
                </div>

                {/* Ring 2 */ }
                <div className="absolute w-[220.5px] h-[220.5px] border-2 border-dashed border-white/30 rounded-full animate-spin-slow">
                    <img
                        src="https://via.placeholder.com/50?text=React"
                        alt="React"
                        className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                    />
                    <img
                        src="https://via.placeholder.com/50?text=Vue"
                        alt="Vue"
                        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2"
                    />
                    <img
                        src="https://via.placeholder.com/50?text=Angular"
                        alt="Angular"
                        className="absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
                    />
                    <img
                        src="https://via.placeholder.com/50?text=Svelte"
                        alt="Svelte"
                        className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2"
                    />
                </div>

                {/* Ring 3 */ }
                <div className="absolute w-[294px] h-[294px] border-2 border-dashed border-white/30 rounded-full animate-spin-slow">
                    <img
                        src="https://via.placeholder.com/50?text=Node"
                        alt="Node.js"
                        className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                    />
                    <img
                        src="https://via.placeholder.com/50?text=Python"
                        alt="Python"
                        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2"
                    />
                    <img
                        src="https://via.placeholder.com/50?text=Java"
                        alt="Java"
                        className="absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
                    />
                    <img
                        src="https://via.placeholder.com/50?text=Ruby"
                        alt="Ruby"
                        className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2"
                    />
                </div>
            </div>
        </div>
    );
};

export default Hero;
