import React, { useState } from 'react';

function Registration() {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [submitStatus, setSubmitStatus] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        try {
            const response = await fetch('http://localhost:5000/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ fullName, email, phone })
            });

            const result = await response.json();

            if (response.ok) {
                setSubmitStatus('ההרשמה התקבלה בהצלחה!');
                // ניקוי השדות לאחר שליחה מוצלחת
                setFullName('');
                setEmail('');
                setPhone('');
            } else {
                setSubmitStatus('אירעה שגיאה. אנא נסה שנית.');
            }
        } catch (error) {
            console.error('שגיאה:', error);
            setSubmitStatus('אירעה שגיאה. אנא נסה שנית.');
        }
    };

    return (
      <div>
        <h1 className="text-3xl font-bold mb-6">הרשמה</h1>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">טופס הרשמה</h2>
          <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-gray-100 p-6 rounded-lg">
            <div className="mb-4">
              <label className="block mb-2">שם מלא</label>
              <input 
                type="text" 
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full p-2 border rounded"
                placeholder="הזן שם מלא"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2">דוא״ל</label>
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 border rounded"
                placeholder="הזן דוא״ל"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2">טלפון</label>
              <input 
                type="tel" 
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full p-2 border rounded"
                placeholder="הזן מספר טלפון"
                required
              />
            </div>
            <button 
              type="submit"
              className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
            >
              שלח טופס
            </button>
            
            {submitStatus && (
              <div className="mt-4 text-center text-green-600">
                {submitStatus}
              </div>
            )}
          </form>
        </section>
      </div>
    );
}

export default Registration;