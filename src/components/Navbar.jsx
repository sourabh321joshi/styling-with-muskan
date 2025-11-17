import React, { useState } from 'react';
import { FaSearch, FaUser, FaHeart, FaBars, FaTimes, FaPhone } from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white sticky top-0 z-50 border-b border-gray-200">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between py-6">
          {/* Left: Menu and Search */}
          <div className="flex items-center space-x-6">
            <button 
              className="text-black hover:text-gray-600 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <FaTimes className="text-lg" /> : <FaBars className="text-lg" />}
            </button>
            <button className="text-black hover:text-gray-600 transition-colors">
              <FaSearch className="text-lg" />
            </button>
          </div>

          {/* Center: Logo */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <h1 className="text-2xl font-bold text-black tracking-tight uppercase">
              Styling-With-Muskan
            </h1>
          </div>

          {/* Right: Call Us, Wishlist, User */}
          <div className="flex items-center space-x-6">
            <a href="tel:+911234567890" className="text-black hover:text-gray-600 transition-colors text-sm flex items-center space-x-2">
              <FaPhone className="text-sm" />
              <span>Call Us</span>
            </a>
            <button className="text-black hover:text-gray-600 transition-colors">
              <FaHeart className="text-lg" />
            </button>
            <button className="text-black hover:text-gray-600 transition-colors">
              <FaUser className="text-lg" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

