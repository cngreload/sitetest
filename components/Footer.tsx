import React from "react";

const Footer: React.FC = () =>
{
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left">
                <div className="mb-4 md:mb-0">
                    <h3 className="text-xl font-bold">Company Name</h3>
                    <p>Innovative solutions for healthcare professionals.</p>
                </div>
                <nav className="mb-4 md:mb-0">
                    <a href="#home" className="text-gray-400 hover:text-white mx-2">
                        Home
                    </a>
                    <a href="#about" className="text-gray-400 hover:text-white mx-2">
                        About
                    </a>
                    <a href="#contact" className="text-gray-400 hover:text-white mx-2">
                        Contact
                    </a>
                </nav>
                <div>
                    <p className="text-sm text-gray-400">© 2025 Company Name. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
