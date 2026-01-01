// // About Page Component
// import { Link } from 'react-router-dom';
// function About() {
//   return (
//     <div>
//       <h1 className="text-3xl font-bold mb-6">אודות הישיבה</h1>

//       <section className="mb-8">
//         <h2 className="text-2xl font-semibold mb-4">סיפור המוסד</h2>
//       </section>
//       <article class="about-yeshiva">
//         <section class="location-description">
//           <p>
//             הרחק משאון העיר, ההמולה ומרדפי החיים; בין החולות, בחבל ארץ עמוס במטעים של עצי פרי וחממות, קם וגם נהיה היישוב <strong>נווה</strong>.
//           </p>
//           <p>
//             המרחק מהערים הגדולות, החיים על רקע עבודת אדמה, המרחבים העצומים והטבילה בנופה של ארץ ישראל שנותנת פריה בעין יפה, נותנים את האפשרות לצמוח ולהצמיח חיים נקיים, מלאי שמחה, חיוניות וטהרה.
//           </p>
//         </section>

//         <section class="community-vision">
//           <p>
//             היישוב כולו, מעמלי התורה שבו, דרך העובדים בשוק החופשי ועד עובדי האדמה, שואף, מכוון את עצמו ורואה את עיקר חייו סביב הנקודה של <strong>תחיית הקודש</strong>.
//           </p>
//         </section>

//         <section class="yeshiva-foundation">
//           <p>
//             על רקע זה קמה לפני שנתיים וחצי חבורה של נערים ממקומות שונים בכל רחבי הארץ, החפצים לגדול בתורה מתוך יראת שמיים, שמחה, טהרה ודיבוק חברים. חבורה המבקשת לחיות חיי קודש שבמרכזם עומד עמל התורה בחשק מתוך אחריות והתמסרות.
//           </p>
//           <p>
//             בסייעתא דשמיא גדולה ובזכות אנשים רבים שהתמסרו בכל ליבם למטרה זו, ראינו ברכה בעמלינו; הישיבה התבססה במהירות והחבורה הולכת וגדלה בכמות ובאיכות.
//           </p>
//         </section>

//         <section class="future-outlook">
//           <p>
//             בשנה הבאה בעז"ה נזכה ובבית המדרש ישבו ללמוד <strong>ארבע כיתות מלאות</strong> – משיעור א' עד שיעור ד'.
//             בחורי חמד מלאי שמחת חיים, מלאים בתורה ויראת שמיים. אשרינו שזכינו לכך.
//           </p>
//         </section>
//       </article>

//       <section className="mb-8">
//         <h2 className="text-2xl font-semibold mb-4">הצוות</h2>
//         <div className="grid md:grid-cols-3 gap-4">
//           <div className="bg-gray-100 p-4 rounded-lg">
//             <h3 className="font-bold">ראש הישיבה</h3>
//             <p>שם וקצת על הרקע</p>
//           </div>
//           <div className="bg-gray-100 p-4 rounded-lg">
//             <h3 className="font-bold">רב בכיר</h3>
//             <p>שם וקצת על הרקע</p>
//           </div>
//           <div className="bg-gray-100 p-4 rounded-lg">
//             <h3 className="font-bold">מנהל חינוכי</h3>
//             <p>שם וקצת על הרקע</p>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default About;

// import { Link } from 'react-router-dom';
// import { Leaf, BookOpen, Users, Sun } from 'lucide-react'; // מומלץ להתקין lucide-react לאייקונים

// function About() {
//   return (
//     <div className="max-w-6xl mx-auto px-4 py-12 font-sans text-slate-800">

//       {/* כותרת ראשית עם קו דקורטיבי */}
//       <header className="mb-16 text-center">
//         <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">אודות הישיבה</h1>
//         <div className="w-24 h-1 bg-amber-600 mx-auto rounded-full"></div>
//       </header>

//       {/* סקשן סיפור המוסד - פריסה של טקסט לצד תמונה או רקע */}
//       <article className="space-y-16 mb-24">

//         {/* בלוק 1: חיבור לאדמה */}
//         <div className="grid md:grid-cols-2 gap-12 items-center">
//           <div className="order-2 md:order-1">
//             <div className="flex items-center gap-2 text-amber-700 mb-3">
//               <Leaf size={24} />
//               <span className="font-bold tracking-widest uppercase text-sm">המיקום שלנו</span>
//             </div>
//             <h2 className="text-3xl font-bold mb-4 text-slate-900">בין חולות למטעים</h2>
//             <p className="text-lg leading-relaxed mb-4">
//               הרחק משאון העיר, ההמולה ומרדפי החיים; בין החולות, בחבל ארץ עמוס במטעים של עצי פרי וחממות, קם וגם נהיה היישוב <span className="font-semibold text-amber-800">נווה</span>.
//             </p>
//             <p className="text-lg leading-relaxed text-slate-600">
//             המרחק מהערים הגדולות, החיים על רקע עבודת אדמה, המרחבים העצומים והטבילה בנופה של ארץ ישראל שנותנת פריה בעין יפה, נותנים את האפשרות לצמוח ולהצמיח חיים נקיים, מלאי שמחה חיוניות וטהרה.
//             </p>
//           </div>
//           <div className="order-1 md:order-2 bg-slate-200 h-64 md:h-80 rounded-2xl shadow-lg flex items-center justify-center text-slate-400 italic">
//             [כאן כדאי לשלב תמונת נוף של המושב]
//           </div>
//         </div>

//         {/* בלוק 2: חזון (מרכז דף בולט) */}
//         <section className="bg-slate-900 text-white p-8 md:p-12 rounded-3xl shadow-xl relative overflow-hidden">
//           <div className="relative z-10 max-w-2xl mx-auto text-center">
//             <Sun className="mx-auto mb-6 text-amber-400" size={48} />
//             <h2 className="text-3xl font-bold mb-6">תחיית הקודש</h2>
//             <p className="text-xl leading-relaxed italic opacity-90">
//             "היישוב כולו, מעמלי התורה שבו, דרך העובדים בשוק החופשי ועד עובדי האדמה, שואף, מכוון את עצמו ורואה את עיקר חייו סביב הנקודה של <span className="text-amber-400 font-bold">תחיית הקודש</span>."</p>
//           </div>
//           {/* עיגול דקורטיבי ברקע */}
//           <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-amber-600/10 rounded-full blur-3xl"></div>
//         </section>

//         {/* בלוק 3: החבורה והלימוד */}
//         <div className="grid md:grid-cols-2 gap-12 items-center">
//           <div className="bg-slate-200 h-64 md:h-80 rounded-2xl shadow-lg flex items-center justify-center text-slate-400 italic">
//             [כאן כדאי לשלב תמונה של בית המדרש]
//           </div>
//           <div>
//             <div className="flex items-center gap-2 text-amber-700 mb-3">
//               <BookOpen size={24} />
//               <span className="font-bold tracking-widest uppercase text-sm">החיים בישיבה</span>
//             </div>
//             <h2 className="text-3xl font-bold mb-4 text-slate-900">חבורה של עמל ושמחה</h2>
//             <p className="text-lg leading-relaxed mb-4 text-slate-600">
//             באלול תשפ"ג התכנסה חבורה של נערים ממקומות שונים בכל רחבי הארץ, החפצים לגדול בתורה מתוך יראת שמיים, שמחה, טהרה ודיבוק חברים. חבורה המבקשת לחיות חיי קודש שבמרכזם עומד עמל התורה בחשק מתוך אחריות והתמסרות.            </p>
//             <div className="bg-amber-50 border-r-4 border-amber-500 p-4 mt-6">
//               <p className="font-bold text-amber-900">
//                 התקדמות מרגשת: בשנה הבאה נזכה ללמוד בארבע כיתות מלאות – משיעור א' ועד שיעור ד'.
//               </p>
//             </div>
//           </div>
//         </div>
//       </article>
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
              <h2 className="text-2xl font-bold text-slate-900">סיפור המוסד</h2>
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
            [כאן מומלץ לשלב תמונת נוף של המושב]
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
            [כאן מומלץ לשלב תמונה של בית המדרש]
          </div>
          <div className="order-1 md:order-2">
            <div className="flex items-center gap-2 text-amber-700 mb-4">
              <BookOpen size={24} />
              <h2 className="text-2xl font-bold text-slate-900">חבורה של תורה</h2>
            </div>
            <div className="space-y-4 text-lg leading-relaxed">
              <p>
                על רקע זה קמה לפני שנתיים וחצי חבורה של נערים ממקומות שונים בכל רחבי הארץ, החפצים לגדול בתורה מתוך יראת שמיים, שמחה, טהרה ודיבוק חברים. חבורה המבקשת לחיות חיי קודש שבמרכזם עומד עמל התורה בחשק מתוך אחריות והתמסרות.
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
      <section className="mt-24">
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
      </section>

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