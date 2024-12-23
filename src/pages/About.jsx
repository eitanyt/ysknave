// About Page Component
import { Link } from 'react-router-dom';
function About() {
    return (
      <div>
        <h1 className="text-3xl font-bold mb-6">אודות הישיבה</h1>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">סיפור המוסד</h2>
          <p>כאן תכתוב את סיפור היסוד של הישיבה, מתי נוסדה, על ידי מי, ומהם הערכים המרכזיים שלה.</p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">הצוות</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-gray-100 p-4 rounded-lg">
              <h3 className="font-bold">ראש הישיבה</h3>
              <p>שם וקצת על הרקע</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg">
              <h3 className="font-bold">רב בכיר</h3>
              <p>שם וקצת על הרקע</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg">
              <h3 className="font-bold">מנהל חינוכי</h3>
              <p>שם וקצת על הרקע</p>
            </div>
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4">עדויות</h2>
          <div className="bg-blue-50 p-6 rounded-lg">
            <blockquote className="italic">
              "ציטוט של תלמיד או בוגר על החוויה בישיבה"
            </blockquote>
            <p className="text-right mt-2">- שם התלמיד, שנתון</p>
          </div>
        </section>
      </div>
    );
  }

export default About;