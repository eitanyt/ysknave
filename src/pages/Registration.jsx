// Registration Page Component
function Registration() {
    return (
      <div>
        <h1 className="text-3xl font-bold mb-6">הרשמה</h1>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">טופס הרשמה</h2>
          <form className="max-w-md mx-auto bg-gray-100 p-6 rounded-lg">
            <div className="mb-4">
              <label className="block mb-2">שם מלא</label>
              <input 
                type="text" 
                className="w-full p-2 border rounded"
                placeholder="הזן שם מלא"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2">דוא״ל</label>
              <input 
                type="email" 
                className="w-full p-2 border rounded"
                placeholder="הזן דוא״ל"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2">טלפון</label>
              <input 
                type="tel" 
                className="w-full p-2 border rounded"
                placeholder="הזן מספר טלפון"
              />
            </div>
            <button 
              type="submit"
              className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
            >
              שלח טופס
            </button>
          </form>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4">שאלות נפוצות</h2>
          <div className="space-y-4">
            <div className="bg-gray-100 p-4 rounded-lg">
              <h3 className="font-bold mb-2">שאלה 1</h3>
              <p>תשובה לשאלה הנפוצה</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg">
              <h3 className="font-bold mb-2">שאלה 2</h3>
              <p>תשובה לשאלה הנפוצה</p>
            </div>
          </div>
        </section>
      </div>
    );
  }

export default Registration;