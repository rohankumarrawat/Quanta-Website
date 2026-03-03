import { Link } from 'react-router';

import { useTranslation } from 'react-i18next';

export default function ForumCategoryCard({ icon, name, topics, posts, color, to = "/forum-category" }) {
    const { t, i18n } = useTranslation();
    const lang = i18n.language.split('-')[0];
    const displayName = typeof name === 'object' ? name[lang] || name.en : name;

    return (
        <Link to={to} className="card p-4 hover:shadow-md transition-shadow group">
            <div className="flex items-center gap-3 mb-3">
                <div className={`w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center ${color}`}>
                    <i className={`bi ${icon} text-xl`}></i>
                </div>
                <h6 className="mb-0 group-hover:text-primary transition-colors">{displayName}</h6>
            </div>
            <div className="flex gap-4 text-sm text-body">
                <span>{topics.toLocaleString()} {t('topics')}</span>
                <span>{posts.toLocaleString()} {t('posts')}</span>
            </div>
        </Link>
    );
}
