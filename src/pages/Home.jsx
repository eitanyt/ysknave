// Home Page Component
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="flex-grow bg-cover bg-center bg-no-repeat flex flex-col justify-center relative"
         style={{ backgroundImage: (window.innerWidth < 768) ? "url('/מהפלאפון.png')": "url('img_1.jpg')"  }}>
      
      {/* שכבה כהה חזקה יותר כדי שהטקסט יבלוט בלי הריבוע הלבן */}
      <div className="absolute inset-0 bg-black/60"></div>
      
      <div className="relative z-10 text-center px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white drop-shadow-md">
          אור חדש
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-200 font-light">
          הישיבה הקטנה בנווה
        </p>
        
        <div className="flex flex-col items-center gap-4">
          <h2 className="text-2xl text-orange-400 font-semibold">
            מזמינים אותך לשבת היכרות!
          </h2>
          <Link to="/registration" 
                className="bg-orange-600 hover:bg-orange-700 text-white text-lg font-bold py-3 px-10 rounded-full transition-all transform hover:scale-105 shadow-xl">
            להרשמה
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;    
