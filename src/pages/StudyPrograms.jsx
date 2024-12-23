// Study Programs Page Component
import { Link } from 'react-router-dom';
function StudyPrograms() {
    return (
      <div>
        <h1 className="text-3xl font-bold mb-6">תוכניות הלימוד</h1>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">לימודי בוקר</h2>
          <p>פירוט על תוכנית הלימודים בשעות הבוקר, שיעורי גמרא, עיון וכו׳</p>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4">לימודי צהריים</h2>
          <p>פירוט על תוכנית הלימודים בשעות הצהריים, שיעורים נוספים, חברותות וכו׳</p>
        </section>
      </div>
    );
  }

export default StudyPrograms;