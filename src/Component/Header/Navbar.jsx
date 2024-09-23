import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false); // State to manage menu visibility

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle the menu
  };

  return (
    <div className={`absolute max-h-fit pt-1 z-20 right-0 left-0 w-full md:right-20 lg:right-80 md:text-2xl font-bold text-white ${isOpen ? 'bg-black' : 'bg-transparent md:bg-transparent'}`}>
      {/* Hamburger Menu Button */}
      <div className="flex justify-between items-center px-4 sm:hidden">
        <button onClick={toggleMenu} className="text-white focus:outline-none bg-transparent">
          {/* Hamburger Icon */}
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>

      {/* Navigation Links */}
      <ul
        className={`flex-col justify-center items-center space-y-4 sm:space-y-0 sm:space-x-12 py-4 sm:flex-row sm:flex ${
          isOpen ? 'flex' : 'hidden'
        } sm:block transition-all duration-500 ease-in-out transform sm:transform-none ${isOpen ? 'translate-y-0' : '-translate-y-full'} sm:translate-y-0`}
      >
        {/* Home Link */}
        <li className={`relative flex items-center ${location.pathname === '/' ? 'text-red-500 border-b-2 border-red-500' : ''}`}>
          <Link to="/" className="py-2 px-4 block">Home</Link>
        </li>

        {/* Blog Link */}
        <li className={`relative group flex items-center ${location.pathname === '/blog' ? 'text-red-500 border-b-2 border-red-500' : ''}`}>
          <Link to="/blog" className="hover:text-red-500 py-2 px-4 block">Blog</Link>

        </li>

        {/* Contact Link */}
        <li className={`relative group flex items-center ${location.pathname === '/contact_section' ? 'text-red-500 border-b-2 border-red-500' : ''}`}>
          <Link to="/contact_section" className="hover:text-red-500 py-2 px-4 block">Contact</Link>
          <ul className="absolute left-0 mt-2 w-56 bg-gray-800 shadow-lg rounded-none text-white top-full border-t-2 border-yellow-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
            <Link to="appointment_form">
              <li className="py-2 px-4 border-b border-gray-700 hover:bg-gray-700">Contact Form</li>
            </Link>
            <Link to="location">
              <li className="py-2 px-4 border-b border-gray-700 hover:bg-gray-700">Location</li>
            </Link>
            <Link to="contacts">
              <li className="py-2 px-4 hover:bg-gray-700">Support</li>
            </Link>
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
