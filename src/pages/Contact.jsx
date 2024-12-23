// Contact Page Component
import { Link } from 'react-router-dom';
function Contact() {
    return (
      <div>
        <h1 className="text-3xl font-bold mb-6">צור קשר</h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">פרטי התקשרות</h2>
            <div className="bg-gray-100 p-6 rounded-lg">
              <p>כתובת: רחוב וכו׳, עיר</p>
              <p>טלפון: 03-XXXX-XXX</p>
              <p>דוא״ל: info@yeshiva.co.il</p>
            </div>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">טופס יצירת קשר</h2>
            <form className="space-y-4">
              <input 
                type="text" 
                placeholder="שם מלא"
                className="w-full p-2 border rounded"
              />
              <input 
                type="email" 
                placeholder="דוא״ל"
                className="w-full p-2 border rounded"
              />
              <textarea 
                placeholder="הודעה"
                className="w-full p-2 border rounded h-32"
              ></textarea>
              <button 
                type="submit"
                className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
              >
                שלח הודעה
              </button>
            </form>
          </section>
        </div>
      </div>
    );
  }

export default Contact;