import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="bg-gray-800 p-4 mb-12 text-white">
            <div className="container mx-auto">
                <div className="flex justify-between">
                    <Link to="/admin" className="text-white font-bold text-lg">Admin</Link>
                    {/* Hamburger menu icon for mobile */}
                    <button onClick={toggleMenu} className="lg:hidden">
                        <svg className="w-6 h-6 fill-current text-white" viewBox="0 0 24 24">
                            {isMenuOpen ? (
                                <path d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path d="M4 6h16M4 12h16m-7 6h7" />
                            )}
                        </svg>
                    </button>
                    {/* Navigation links */}
                    <ul className={`lg:flex lg:items-center lg:w-auto ${isMenuOpen ? 'block' : 'hidden'}`}>
                        <li>
                            <Link to="/admin" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-400 mr-4">Home</Link>
                        </li>
                        <li>
                            <Link to="/admin/projects" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-400 mr-4">Projects</Link>
                        </li>
                        <li>
                            <Link to="/admin/skills" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-400 mr-4">Skills</Link>
                        </li>
                        <li>
                            <Link to="/admin/about" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-400 mr-4">About Me</Link>
                        </li>
                        <li>
                            <Link to="/admin/messages" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-400">Messages</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
