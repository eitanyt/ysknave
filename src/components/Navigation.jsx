import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-blue-800 text-white p-4 relative z-10">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold flex" >ישיבת אור חדש
        {/* /מייבא את ysk.svg */}
          <img src="ysk.svg" alt="Logo" className="h-8 ml-2"/>
        </Link>

        {/* Desktop menu */}
        <div className="hidden md:flex gap-8 items-center" dir="rtl">
          <Link to="/about" className="hover:text-blue-200">אודות</Link>
          <Link to="/study-programs" className="hover:text-blue-200">סדר יום</Link>
          <Link to="/community-life" className="hover:text-blue-200">אירועים</Link>
          <Link to="/registration" className="hover:text-blue-200">הרשמה</Link>
          {/* <Link to="/contact" className="hover:text-blue-200">צור קשר</Link> */}
          <Link to="/gallery" className="hover:text-blue-200">גלריה</Link>
        </div>

        {/* Mobile menu toggle */}
        <div className="md:hidden">
          <button
            className="mobile-menu-button"
            onClick={toggleMobileMenu}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-blue-800">
            <div className="flex flex-col items-center py-4 space-y-4">
              <Link to="/about" className="hover:text-blue-200">אודות</Link>
              <Link to="/study-programs" className="hover:text-blue-200">תוכניות לימוד</Link>
              <Link to="/community-life" className="hover:text-blue-200">חיי הקהילה</Link>
              <Link to="/registration" className="hover:text-blue-200">הרשמה</Link>
              <Link to="/contact" className="hover:text-blue-200">צור קשר</Link>
              <Link to="/gallery" className="hover:text-blue-200">גלריה</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;