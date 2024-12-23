// Community Life Page Component
import { Link } from 'react-router-dom';
function CommunityLife() {
    return (
      <div>
        <h1 className="text-3xl font-bold mb-6">חיי הקהילה</h1>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">אירועים</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gray-100 p-4 rounded-lg">
              <h3 className="font-bold">אירוע 1</h3>
              <p>תיאור האירוע ומועדו</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg">
              <h3 className="font-bold">אירוע 2</h3>
              <p>תיאור האירוע ומועדו</p>
            </div>
          </div>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">פעילויות</h2>
          <ul className="list-disc list-inside">
            <li>פעילות 1</li>
            <li>פעילות 2</li>
            <li>פעילות 3</li>
          </ul>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4">פרויקטים</h2>
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="font-bold mb-2">פרויקט מרכזי</h3>
            <p>תיאור הפרויקט והמטרות שלו</p>
          </div>
        </section>
      </div>
    );
  }

export default CommunityLife;