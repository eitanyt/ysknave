import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import StudyPrograms from './pages/StudyPrograms';
import CommunityLife from './pages/CommunityLife';
import Registration from './pages/Regis';
import Contact from './pages/Contact';
import Navigation from './components/Navigation';
import { Forms } from './components/forms';
import Gallery from './pages/Gallery';

function App() {
  return (
    <Router>
      <div className="flex flex-col">
        <Navigation />

        {/* Main Content */}
        <main className="flex-grow relative" dir="rtl">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/study-programs" element={<StudyPrograms />} />
            <Route path="/community-life" element={<CommunityLife />} />
            <Route path="/registration" element={<Forms />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/gallery" element={<Gallery />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="bg-blue-900 text-white py-3" dir="rtl">
          <div className="container mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
                <a href="mailto:info@orhadas.edu" className="hover:text-blue-200">yeshivaktananava@gmail.com

                </a>
              </div>
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>
                <a href="tel:0546702181" className="hover:text-blue-200">054-6702181</a>
              </div>
            </div>
            <p>&copy; כל הזכויות שמורות | <a href="tel:0546286423" className="hover:text-blue-200">אתרא קדישא</a></p>
          </div>
        </footer>
      </div>
    </Router>
  );
}


export default App;
