import { Link } from 'react-router';
import { useTranslation } from 'react-i18next';

const posts = Array.from({ length: 6 }, (_, i) => ({
    titleKey: `profile.posts.title${i + 1}`,
    author: ['Dennis Barrett', 'Judy Nguyen', 'Frances Guerrero', 'Billy Vasquez', 'Larry Lawson', 'Amanda Reed'][i],
    avatar: ['03.jpg', '01.jpg', '05.jpg', '08.jpg', '04.jpg', '06.jpg'][i],
    dateKey: `profile.posts.date${i + 1}`,
    likes: [45, 32, 28, 67, 19, 38][i],
    comments: [12, 8, 15, 24, 6, 18][i],
}));

export default function CategoryPost() {
    const { t } = useTranslation();

    return (
        <section className="py-8"><div className="container">
            <h2 className="mb-6">{t('category_posts_title', 'Category Posts')}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {posts.map((p, i) => (
                    <div key={i} className="card overflow-hidden hover:shadow-md transition-shadow group">
                        <div className="h-40 bg-gradient-to-r from-primary/20 to-primary/5 flex items-center justify-center">
                            <i className="bi bi-file-earmark-text text-5xl text-primary/30"></i>
                        </div>
                        <div className="p-4">
                            <h6 className="mb-2">
                                <Link to="/blog-detail" className="text-heading group-hover:text-primary transition-colors">
                                    {t(p.titleKey)}
                                </Link>
                            </h6>
                            <div className="flex items-center gap-2 text-sm text-body mb-3">
                                <img className="w-6 h-6 rounded-full object-cover" src={`/assets/images/avatar/${p.avatar}`} alt="" />
                                <span>{p.author}</span><span>•</span><span>{t(p.dateKey)}</span>
                            </div>
                            <div className="flex gap-3 text-sm text-body">
                                <span><i className="bi bi-heart mr-1"></i>{t('profile.posts.likes', { count: p.likes })}</span>
                                <span><i className="bi bi-chat mr-1"></i>{t('profile.posts.comments', { count: p.comments })}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div></section>
    );
}
