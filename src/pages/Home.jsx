// Home Page Component
import { Link } from 'react-router-dom';
function Home() {
    return (
      <div className="min-h-screen bg-cover bg-center bg-no-repeat relative"
           style={{
             backgroundImage: "url('/img_1.JPG')",
           }}>
        {/* שכבה כהה חצי שקופה מעל התמונה (אופציונלי) */}
        <div className="absolute inset-0 bg-black/30"></div>
        
        {/* התוכן של העמוד */}
        <div className="relative z-10">
          <div className="text-center" >
            <h1 className="text-4xl font-bold mb-6">ברוכים הבאים לישיבה</h1>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-blue-100 bg-opacity-30 p-6 rounded-lg">
                <h2 className="text-2xl font-semibold mb-4">אודות</h2>
                <p>הכירו את הישיבה ואת הערכים שלנו</p>
                <Link to="/about" className="text-blue-600 mt-2 block">קרא עוד</Link>
              </div>
              <div className="bg-blue-100 p-6 rounded-lg">
                <h2 className="text-2xl font-semibold mb-4">תוכניות לימוד</h2>
                <p>למד והתפתח עם תוכניות הלימוד שלנו</p>
                <Link to="/study-programs" className="text-blue-600 mt-2 block">גלה עוד</Link>
              </div>
              <div className="bg-blue-100 p-6 rounded-lg">
                <h2 className="text-2xl font-semibold mb-4">הרשמה</h2>
                <p>הצטרף אלינו והתחל את המסע שלך</p>
                <Link to="/registration" className="text-blue-600 mt-2 block">הירשם עכשיו</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

export default Home;    