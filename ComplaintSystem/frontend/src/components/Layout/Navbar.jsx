import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link 
          to="/" 
          className="text-2xl font-bold text-black flex items-center space-x-2 no-underline"
        >
          <span>CitizenVoice AI</span>
        </Link>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-black focus:outline-none"
          >
            {isOpen ? (
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-6 w-6" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M6 18L18 6M6 6l12 12" 
                />
              </svg>
            ) : (
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-6 w-6" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M4 6h16M4 12h16M4 18h16" 
                />
              </svg>
            )}
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link 
            to="/" 
            className="text-black hover:text-gray-700 transition-colors duration-300 no-underline"
          >
            Home
          </Link>
          <Link 
            to="/complaint" 
            className="text-black hover:text-gray-700 transition-colors duration-300 no-underline"
          >
            Complaint
          </Link>
          <Link 
            to="/feedback" 
            className="text-black hover:text-gray-700 transition-colors duration-300 no-underline"
          >
            Feedback
          </Link>
          <Link 
            to="/help" 
            className="text-black hover:text-gray-700 transition-colors duration-300 no-underline"
          >
            Help
          </Link>
          <Link 
            to="/register" 
            className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors duration-300 no-underline"
          >
            Register
          </Link>
        </div>

        {/* Mobile Navigation Dropdown */}
        {isOpen && (
          <div className="absolute top-16 left-0 w-full bg-white shadow-md md:hidden">
            <div className="flex flex-col">
              <Link 
                to="/" 
                className="px-4 py-3 text-black hover:bg-gray-100 border-b no-underline"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/complaint" 
                className="px-4 py-3 text-black hover:bg-gray-100 border-b no-underline"
                onClick={() => setIsOpen(false)}
              >
                Complaint
              </Link>
              <Link 
                to="/feedback" 
                className="px-4 py-3 text-black hover:bg-gray-100 border-b no-underline"
                onClick={() => setIsOpen(false)}
              >
                Feedback
              </Link>
              <Link 
                to="/help" 
                className="px-4 py-3 text-black hover:bg-gray-100 border-b no-underline"
                onClick={() => setIsOpen(false)}
              >
                Help
              </Link>
              <Link 
                to="/register" 
                className="px-4 py-3 bg-black text-white text-center hover:bg-gray-800 no-underline"
                onClick={() => setIsOpen(false)}
              >
                Register
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;