import React from "react";

const Header: React.FC = () =>
{
    return (
        <header className="flex flex-row-reverse items-center justify-between p-4 bg-white">
            <div className="w-1/6">
                <img src="/svg/bmslogo.svg" alt="لوگو" className="w-20" />
            </div>
            <nav className="flex-1 flex justify-center space-x-4 rtl:space-x-reverse">
                <a href="#hero" className="text-gray-800 hover:text-blue-500">خانه</a>
                <a href="#about" className="text-gray-800 hover:text-blue-500">محصولات</a>
                <a href="#contact" className="text-gray-800 hover:text-blue-500">درباره ما</a>
            </nav>
            <div className="w-1/6">
                <img src="/motto.png" alt="شعار" className="w-full" />
            </div>
        </header>
    );
};

export default Header;
