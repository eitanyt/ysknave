// Home Page Component
import { Link } from 'react-router-dom';
function Home() {
    return (
      <div className="min-h-screen bg-cover bg-center bg-no-repeat flex flex-col justify-center relative"
           style={{
             backgroundImage: "url('/img_1.jpg')",
           }}>
        {/* שכבה כהה חצי שקופה מעל התמונה (אופציונלי) */}
        <div className="absolute inset-0 bg-black/30"></div>
        {/* התוכן של העמוד */}
        <div className="relative z-10">
          <div className="text-center " >
            <h1 className="text-4xl font-bold mb-6 text-white">אור חדש</h1>
            <h2 className="text-2xl font-semibold mb-4 text-white">הישיבה הקטנה בנווה </h2>
            <div className="flex items-center justify-center">
              <div className="bg-blue-100 bg-opacity-60 p-6 rounded-lg">
                <h2 className="text-2xl font-semibold mb-4">הצטרף אלינו לשבת היכרות!</h2>
                <Link to="/registration" className="text-blue-600 mt-2 block">להרשמה</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

export default Home;    