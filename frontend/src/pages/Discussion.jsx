import { Link } from 'react-router';
import { useTranslation } from 'react-i18next';

export default function Discussion() {
    const { t } = useTranslation();

    // Build discussion data inside the component so it re-evaluates on language change
    const discussions = Array.from({ length: 6 }, (_, i) => ({
        titleKey: `discussion.titles.${i + 1}`,
        authorKey: `discussion.authors.${i + 1}`,
        avatar: ['03.jpg', '01.jpg', '05.jpg', '08.jpg', '04.jpg', '06.jpg'][i],
        replies: [45, 32, 28, 67, 19, 38][i],
        likes: [120, 95, 85, 210, 55, 105][i],
        timeKey: `discussion.times.${i + 1}`,
    }));

    return (
        <section className="py-8"><div className="container">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div>
                    <h2 className="mb-1">{t('discussion.heading')}</h2>
                    <p className="text-body mb-0">{t('discussion.subtext')}</p>
                </div>
                <button className="btn btn-primary self-start">{t('discussion.start_button')}</button>
            </div>
            <div className="space-y-4">
                {discussions.map((d, i) => (
                    <div key={i} className="card p-4 hover:shadow-md transition-shadow">
                        <div className="flex gap-4">
                            <img className="w-10 h-10 rounded-full object-cover flex-shrink-0" src={`/assets/images/avatar/${d.avatar}`} alt="" />
                            <div className="flex-1">
                                <h5 className="card-title mb-1">
                                    <Link to="/forum-detail" className="text-heading hover:text-primary">
                                        {t(d.titleKey)}
                                    </Link>
                                </h5>
                                <div className="flex flex-wrap items-center gap-3 text-sm text-body">
                                    <Link to="/profile" className="text-primary">
                                        {t(d.authorKey)}
                                    </Link>
                                    <span>• {t(d.timeKey)}</span>
                                </div>
                                <div className="flex flex-wrap gap-4 mt-3 text-sm">
                                    <span className="text-body">
                                        <i className="bi bi-chat mr-1"></i>
                                        {d.replies} {t('discussion.replies')}
                                    </span>
                                    <span className="text-body">
                                        <i className="bi bi-heart mr-1"></i>
                                        {d.likes} {t('discussion.likes')}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div></section>
    );
}
