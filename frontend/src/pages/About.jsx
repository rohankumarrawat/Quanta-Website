import { Link } from 'react-router';
import { useTranslation } from 'react-i18next';

export default function About() {
    const { t } = useTranslation();
    const team = Array.from({ length: 4 }, (_, i) => ({ name: ['Alice Johnson', 'Bob Smith', 'Carol Davis', 'David Wilson'][i], role: ['CEO & Founder', 'CTO', 'Head of Design', 'Lead Developer'][i], avatar: ['01.jpg', '03.jpg', '05.jpg', '08.jpg'][i] }));
    return (
        <section className="py-8"><div className="container">
            <div className="max-w-3xl mx-auto text-center mb-12">
                <h1 className="mb-3">{t('about.heading')}</h1>
                <p className="text-body text-lg">{t('about.description')}</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
                <div><img src="/assets/images/elements/18.svg" alt="" className="w-full max-w-sm mx-auto" /></div>
                <div>
                    <h3 className="mb-3">{t('about.mission_heading')}</h3>
                    <p className="text-body mb-4">{t('about.mission_text')}</p>
                    <h3 className="mb-3">{t('about.vision_heading')}</h3>
                    <p className="text-body">{t('about.vision_text')}</p>
                </div>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                <div className="card p-6 text-center"><h3 className="text-primary mb-1">50K+</h3><p className="text-sm text-body mb-0">{t('about.stats.active_users')}</p></div>
                <div className="card p-6 text-center"><h3 className="text-success mb-1">100K+</h3><p className="text-sm text-body mb-0">{t('about.stats.questions_asked')}</p></div>
                <div className="card p-6 text-center"><h3 className="text-warning mb-1">250K+</h3><p className="text-sm text-body mb-0">{t('about.stats.answers_given')}</p></div>
                <div className="card p-6 text-center"><h3 className="text-info mb-1">15K+</h3><p className="text-sm text-body mb-0">{t('about.stats.categories')}</p></div>
            </div>
            <div className="text-center mb-8">
                <h3>{t('about.team_heading')}</h3>
                <p className="text-body">{t('about.team_sub')}</p>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
                {team.map((m, i) => (
                    <div key={i} className="card p-4 text-center">
                        <img className="w-16 h-16 rounded-full object-cover mx-auto mb-3" src={`/assets/images/avatar/${m.avatar}`} alt="" />
                        <h6 className="mb-0">{m.name}</h6>
                        <p className="text-xs text-body">{m.role}</p>
                    </div>
                ))}
            </div>
        </div></section>
    );
}
