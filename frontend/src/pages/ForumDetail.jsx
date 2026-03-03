import { Link } from 'react-router';
import { useTranslation } from 'react-i18next';

export default function ForumDetail() {
    const { t } = useTranslation();

    // Original post and replies are provided by translation files so they update on language change
    const original = t('forum_detail.original_post', { returnObjects: true });
    const replies = t('forum_detail.replies_list', { returnObjects: true });

    return (
        <section className="py-8">
            <div className="container">
                <div className="max-w-4xl mx-auto">
                    <nav className="text-sm mb-4"><Link to="/forum" className="text-body hover:text-primary">{t('forum_detail.title')}</Link> <span className="mx-2 text-body">/</span> <Link to="/forum-category" className="text-body hover:text-primary">{t('forum_detail.category_programming')}</Link> <span className="mx-2 text-body">/</span> <span className="text-heading">{t('forum_detail.topic')}</span></nav>
                    {/* Original Post */}
                    <div className="card p-4 sm:p-6 mb-6">
                        <div className="flex items-center gap-3 mb-4">
                            <img className="w-10 h-10 rounded-full object-cover" src="/assets/images/avatar/03.jpg" alt="" />
                            <div><Link to="/profile" className="font-semibold text-heading text-sm">{original.author}</Link><p className="text-xs text-body mb-0">{t('forum_detail.posted')} {original.time}</p></div>
                        </div>
                        <h4 className="mb-3">{original.title}</h4>
                        <p className="text-body leading-relaxed">{original.p1}</p>
                        <p className="text-body leading-relaxed">{original.p2}</p>
                        <div className="flex items-center gap-4 mt-4 pt-4 border-t border-border-color text-sm">
                            <button className="text-body hover:text-primary"><i className="bi bi-hand-thumbs-up mr-1"></i>{t('forum_detail.like')} (24)</button>
                            <button className="text-body hover:text-primary"><i className="bi bi-reply mr-1"></i>{t('forum_detail.reply')}</button>
                            <button className="text-body hover:text-primary"><i className="bi bi-share mr-1"></i>{t('forum_detail.share')}</button>
                        </div>
                    </div>
                    {/* Replies */}
                    <h5 className="mb-4">{replies.length} {t('forum_detail.replies')}</h5>
                    <div className="space-y-4 mb-6">
                        {replies.map((r, i) => (
                            <div key={i} className="card p-4 sm:p-6">
                                <div className="flex items-center gap-3 mb-3">
                                    <img className="w-9 h-9 rounded-full object-cover" src={`/assets/images/avatar/${r.avatar}`} alt="" />
                                    <div><Link to="/profile" className="font-semibold text-heading text-sm">{r.user}</Link><p className="text-xs text-body mb-0">{r.time}</p></div>
                                </div>
                                <p className="text-body leading-relaxed mb-0">{r.text}</p>
                                <div className="flex items-center gap-4 mt-3 text-sm">
                                    <button className="text-body hover:text-primary"><i className="bi bi-hand-thumbs-up mr-1"></i>{t('forum_detail.like')}</button>
                                    <button className="text-body hover:text-primary"><i className="bi bi-reply mr-1"></i>{t('forum_detail.reply')}</button>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* Reply Form */}
                    <div className="card p-4 sm:p-6">
                        <h5 className="mb-4">{t('forum.post_reply', 'Post a Reply')}</h5>
                        <textarea className="form-control mb-3" rows="4" placeholder={t('forum.reply_placeholder', 'Write your reply...')}></textarea>
                        <button className="btn btn-primary">{t('forum.post_reply_button', 'Post Reply')}</button>
                    </div>
                </div>
            </div>
        </section>
    );
}
