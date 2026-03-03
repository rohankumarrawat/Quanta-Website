import { Link } from 'react-router';
import { useTranslation } from 'react-i18next';
export default function ForumCategory() {
    const { t } = useTranslation();

   
    const topics = t("forum_category.topics", { returnObjects: true });
    return (
        <section className="py-8">
            <div className="container">
                
                <nav className="text-sm mb-4">
                    <Link to="/forum" className="text-body hover:text-primary">
                        {t('forum_category.breadcrumb.forum')}
                    </Link>
                    <span className="mx-2 text-body">/</span>
                    <span className="text-heading">
                        {t('forum_category.breadcrumb.category')}
                    </span>
                </nav>

                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                    <div>
                        <h2 className="mb-1">
                            {t('forum_category.header.title')}
                        </h2>
                        <p className="text-body mb-0">
                            {t('forum_category.header.description')}
                        </p>
                    </div>

                    <Link to="/ask-question" className="btn btn-primary self-start">
                        {t('forum_category.header.new_topic')}
                    </Link>
                </div>
                <div className="card">
                    <div className="overflow-x-auto">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>{t('topic')}</th>
                                    <th className="text-center">{t('replies')}</th>
                                    <th className="text-center">{t('views')}</th>
                                    <th>{t('activity')}</th>
                                </tr>
                            </thead>

                            <tbody>
                                {topics.map((topic, i) => (
                                    <tr key={i} className="hover:bg-gray-50">
                                        <td><div className="flex items-center gap-3"><img className="w-9 h-9 rounded-full object-cover flex-shrink-0" src={`/assets/images/avatar/${topic.avatar}`} alt="" /><div><Link to="/forum-detail" className="font-medium text-heading hover:text-primary text-sm">{topic.title}</Link><p className="text-xs text-body mb-0">{topic.author}</p></div></div></td>
                                        <td className="text-center text-sm">{topic.replies}</td>
                                        <td className="text-center text-sm">{topic.views}</td>
                                        <td className="text-sm text-body">{topic.time}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    );
}
