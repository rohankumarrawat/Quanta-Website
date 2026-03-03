import { Link } from 'react-router';
import { useTranslation } from 'react-i18next';

const posts = Array.from({ length: 4 }, (_, i) => ({
    titleKey: `profile.posts.title${i + 1}`,
    dateKey: `profile.posts.date${i + 1}`,
    likes: [45, 32, 28, 22][i],
    comments: [12, 8, 15, 6][i],
}));

export default function MyProfilePost() {
    const { t } = useTranslation();

    return (
        <div className="space-y-4">
            {posts.map((p, i) => (
                <div key={i} className="card p-4">
                    <h6 className="mb-2">
                        <Link to="/blog-detail" className="text-heading hover:text-primary">
                            {t(p.titleKey)}
                        </Link>
                    </h6>
                    <div className="flex gap-4 text-sm text-body">
                        <span>{t(p.dateKey)}</span>
                        <span>
                            <i className="bi bi-heart mr-1"></i>
                            {t('profile.posts.likes', { count: p.likes })}
                        </span>
                        <span>
                            <i className="bi bi-chat mr-1"></i>
                            {t('profile.posts.comments', { count: p.comments })}
                        </span>
                    </div>
                </div>
            ))}
        </div>
    );
}
