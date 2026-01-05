// // About Page Component

import { Link } from 'react-router-dom';
import { Leaf, BookOpen, Users, Star } from 'lucide-react'; // npm install lucide-react

function About() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 font-sans text-slate-800" dir="rtl">

      {/* כותרת ראשית */}
      <header className="mb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">אודות הישיבה</h1>
        <div className="w-24 h-1 bg-amber-600 mx-auto rounded-full"></div>
      </header>

      <article className="space-y-16 mb-24">

        {/* חלק א' - המיקום והאווירה */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-2 text-amber-700 mb-4">
              <Leaf size={24} />
              <h2 className="text-2xl font-bold text-slate-900">סיפור הישיבה</h2>
            </div>
            <div className="space-y-4 text-lg leading-relaxed">
              <p>
                הרחק משאון העיר, ההמולה ומרדפי החיים; בין החולות, בחבל ארץ עמוס במטעים של עצי פרי וחממות, קם וגם נהיה היישוב <strong>נווה</strong>.
              </p>
              <p className="text-slate-600">
                המרחק מהערים הגדולות, החיים על רקע עבודת אדמה, המרחבים העצומים והטבילה בנופה של ארץ ישראל שנותנת פריה בעין יפה, נותנים את האפשרות לצמוח ולהצמיח חיים נקיים, מלאי שמחה, חיוניות וטהרה.
              </p>
            </div>
          </div>
          <div className="bg-slate-200 h-64 md:h-80 rounded-2xl shadow-inner flex items-center justify-center text-slate-400 italic">
            <img
              src="/בניין.jpg"
              alt="מושב נווה"
              className="w-full h-full object-cover rounded-2xl shadow-lg"
            />
          </div>
        </div>

        {/* חלק ב' - חזון ותחיית הקודש (מודגש) */}
        <section className="bg-slate-900 text-white p-8 md:p-12 rounded-3xl shadow-xl border-b-4 border-amber-600">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xl md:text-2xl leading-relaxed font-light italic">
              "היישוב כולו, מעמלי התורה שבו, דרך העובדים בשוק החופשי ועד עובדי האדמה, שואף, מכוון את עצמו ורואה את עיקר חייו סביב הנקודה של <span className="text-amber-400 font-bold">תחיית הקודש</span>."
            </p>
          </div>
        </section>

        {/* חלק ג' - הישיבה והחבורה */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-slate-200 h-64 md:h-80 rounded-2xl shadow-inner flex items-center justify-center text-slate-400 italic order-2 md:order-1">
          <img
              src="/לרוחב.jpg"
              alt="בית המדרש"
              className="w-full h-full object-cover rounded-2xl shadow-lg"
            />
          </div>
          <div className="order-1 md:order-2">
            <div className="flex items-center gap-2 text-amber-700 mb-4">
              <BookOpen size={24} />
              <h2 className="text-2xl font-bold text-slate-900">חבורה של תורה</h2>
            </div>
            <div className="space-y-4 text-lg leading-relaxed">
              <p>
                באלול תשפ"ג קמה חבורה של נערים ממקומות שונים בכל רחבי הארץ, החפצים לגדול בתורה מתוך יראת שמיים, שמחה, טהרה ודיבוק חברים. חבורה המבקשת לחיות חיי קודש שבמרכזם עומד עמל התורה בחשק מתוך אחריות והתמסרות.
              </p>
              <p className="text-slate-600">
                בסייעתא דשמיא גדולה ובזכות אנשים רבים שהתמסרו בכל ליבם למטרה זו, ראינו ברכה בעמלינו; הישיבה התבססה במהירות והחבורה הולכת וגדלה בכמות ובאיכות.
              </p>
            </div>
          </div>
        </div>

        {/* חלק ד' - בשורה לעתיד */}
        <section className="bg-amber-50 border-r-8 border-amber-500 p-8 rounded-l-2xl shadow-sm">
          <div className="flex items-start gap-4">
            <Star className="text-amber-600 shrink-0" size={32} />
            <div className="text-lg leading-relaxed">
              <p>
                בשנה הבאה בעז"ה נזכה ובבית המדרש ישבו ללמוד <strong>ארבע כיתות מלאות</strong> – משיעור א' עד שיעור ד'.
                בחורי חמד מלאי שמחת חיים, מלאים בתורה ויראת שמיים. אשרינו שזכינו לכך.
              </p>
            </div>
          </div>
        </section>
      </article>

      {/* מדור הצוות - כרטיסיות מעוצבות */}
      {/* <section className="mt-24">
        <div className="flex items-center justify-center gap-3 mb-12">
          <Users size={32} className="text-amber-600" />
          <h2 className="text-3xl font-bold text-center">הצוות החינוכי</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { role: "ראש הישיבה", name: "הרב [שם]", desc: "קצת על הרקע והחזון של הרב בבניין הישיבה." },
            { role: "רב בכיר", name: "הרב [שם]", desc: "ניסיון תורני וחינוכי רב, ליווי הבחורים בצמיחה האישית." },
            { role: "מנהל חינוכי", name: "הרב [שם]", desc: "אחראי על המעטפת החינוכית והליווי האישי של כל תלמיד." }
          ].map((member, i) => (
            <div key={i} className="bg-white border border-slate-100 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="w-24 h-24 bg-slate-200 rounded-full mx-auto mb-6 flex items-center justify-center text-slate-400">
                [תמונה]
              </div>
              <h3 className="text-amber-700 font-bold text-sm uppercase tracking-wide mb-1">{member.role}</h3>
              <h4 className="text-xl font-bold text-slate-900 mb-3">{member.name}</h4>
              <p className="text-slate-600 leading-relaxed text-sm">{member.desc}</p>
            </div>
          ))}
        </div>
      </section> */}

      {/* קריאה לפעולה בסוף הדף */}
      <footer className="mt-24 text-center bg-amber-50 rounded-3xl p-10">
        <h3 className="text-2xl font-bold mb-4">רוצים להכיר מקרוב?</h3>
        <p className="mb-6 text-slate-600">אנחנו מזמינים אתכם לבוא ולראות את האור בעיניים של הבחורים.</p>
        <Link to="/registration" className="inline-block bg-amber-600 text-white px-8 py-3 rounded-full font-bold hover:bg-amber-700 transition-colors">
          צרו קשר לתיאום ביקור
        </Link>
      </footer>
    </div>
  );
}

export default About;