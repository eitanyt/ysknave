import React, { useState, useEffect } from 'react'; 
import { Link, useLocation } from 'react-router-dom'; 

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation(); // מאזין למיקום הנוכחי בדפדפן

  // בכל פעם שהנתיב (URL) משתנה - סוגר את התפריט
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-amber-50 p-4 relative z-10 text-orange-950">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold flex" >
          <img src="לוגו.png" alt="Logo" className="absolute top-0 h-24 ml-2" />
        </Link>

        {/* Desktop menu */}
        <div className="hidden md:flex gap-8 items-center text-orange-950" dir="rtl">
          {/*<Link to="/study-programs" className="hover:text-blue-200">סדר יום</Link>
          <Link to="/community-life" className="hover:text-blue-200">אירועים</Link> */}
          <Link to="/" className="text-orange-950 hover:text-orange-800">בית</Link>
          <Link to="/about" className="text-orange-950 hover:text-orange-800">אודות</Link>
          <Link to="/registration" className="hover:text-orange-800">הרשמה</Link>
          {/* <Link to="/contact" className="hover:text-orange-800">צור קשר</Link> */}
          <Link to="/gallery" className="hover:text-orange-800">גלריה</Link>
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
        </div>
        {isMobileMenuOpen && (
          <div className="md:hidden top-full left-0 w-full bg-amber-50">
            <div className="flex flex-col items-center py-4 space-y-4">
          {/* <Link to="/about" className="hover:text-blue-200">אודות</Link>
          <Link to="/study-programs" className="hover:text-blue-200">סדר יום</Link>
          <Link to="/community-life" className="hover:text-blue-200">אירועים</Link> */}
          <Link to="/" className="text-orange-950 hover:text-orange-800">בית</Link>
          <Link to="/registration" className="text-orange-950 hover:text-orange-800">הרשמה</Link>
          {/* <Link to="/contact" className="text-orange-950 hover:text-orange-800">צור קשר</Link> */}
          <Link to="/gallery" className="text-orange-950 hover:text-orange-800">גלריה</Link>
            </div>
          </div>
        )}
    </nav>
  );
}

export default Navbar;
