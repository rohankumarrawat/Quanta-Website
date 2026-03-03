import { Link } from 'react-router';
import { useTranslation } from 'react-i18next';

const notifications = [
    { type: 'follow', user: 'Judy Nguyen', avatar: '01.jpg', key: 'notification.follow_started', params: {}, timeKey: 'notification.time.just_now', unread: true },
    { type: 'follow', user: 'Frances Guerrero', avatar: '05.jpg', key: 'notification.follow_suggestion', params: {}, timeKey: 'notification.time.1h', unread: true },
    { type: 'mention', user: 'StackBros', avatar: null, initials: 'WB', key: 'notification.mention', params: { place: 'creative page' }, timeKey: 'notification.time.1h', unread: false },
    { type: 'accept', user: 'Billy Vasquez', avatar: '08.jpg', key: 'notification.accept', params: {}, timeKey: 'notification.time.2h', unread: false },
    { type: 'answer', user: 'Dennis Barrett', avatar: '03.jpg', key: 'notification.answer', params: { question: 'What is AI?' }, timeKey: 'notification.time.5h', unread: false },
    { type: 'vote', user: 'Larry Lawson', avatar: '04.jpg', key: 'notification.vote', params: {}, timeKey: 'notification.time.1d', unread: false },
    { type: 'badge', user: 'System', avatar: null, initials: 'Q', key: 'notification.badge', params: { badge: 'Quick Responder' }, timeKey: 'notification.time.2d', unread: false },
];

export default function Notification() {
    const { t } = useTranslation();

    return (
        <section className="py-8"><div className="container">
            <div className="max-w-3xl mx-auto">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="mb-0">{t('notifications')}</h2>
                    <button className="text-sm text-primary hover:text-primary-700">{t('mark_all_as_read', 'Mark all as read')}</button>
                </div>
                <div className="card">
                    <ul className="divide-y divide-border-color">
                        {notifications.map((n, i) => (
                            <li key={i} className={`p-4 flex items-start gap-3 ${n.unread ? 'bg-primary/5' : 'hover:bg-gray-50'} transition-colors`}>
                                {n.avatar ? (
                                    <img className="w-10 h-10 rounded-full object-cover flex-shrink-0" src={`/assets/images/avatar/${n.avatar}`} alt="" />
                                ) : (
                                    <div className="w-10 h-10 rounded-full bg-success flex items-center justify-center flex-shrink-0"><span className="text-white text-sm font-bold">{n.initials}</span></div>
                                )}
                                <div className="flex-1">
                                    <p className="text-sm mb-0">
                                        <Link to="/profile" className="font-semibold text-heading">{n.user}</Link>
                                        {' '}
                                        {t(n.key, { ...n.params, user: n.user })}
                                    </p>
                                    <span className="text-xs text-body">{t(n.timeKey)}</span>
                                    {n.type === 'follow' && n.unread && (
                                        <div className="flex gap-2 mt-2">
                                            <button className="btn btn-sm btn-primary">{t('confirm', 'Confirm')}</button>
                                            <button className="btn btn-sm btn-light">{t('delete', 'Delete')}</button>
                                        </div>
                                    )}
                                </div>
                                {n.unread && <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div></section>
    );
}
