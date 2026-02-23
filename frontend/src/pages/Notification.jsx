import { Link } from 'react-router-dom';
const notifications = [
    { type: 'follow', user: 'Judy Nguyen', avatar: '01.jpg', text: 'started following you.', time: 'Just now', unread: true },
    { type: 'follow', user: 'Frances Guerrero', avatar: '05.jpg', text: 'who you might know is on Quanta.', time: '1h ago', unread: true },
    { type: 'mention', user: 'StackBros', avatar: null, initials: 'WB', text: 'mentioned 😍 you in creative page', time: '1h ago', unread: false },
    { type: 'accept', user: 'Billy Vasquez', avatar: '08.jpg', text: 'accepted your follow request', time: '2h ago', unread: false },
    { type: 'answer', user: 'Dennis Barrett', avatar: '03.jpg', text: 'answered your question "What is AI?"', time: '5h ago', unread: false },
    { type: 'vote', user: 'Larry Lawson', avatar: '04.jpg', text: 'upvoted your answer', time: '1d ago', unread: false },
    { type: 'badge', user: 'System', avatar: null, initials: 'Q', text: 'You earned the "Quick Responder" badge!', time: '2d ago', unread: false },
];
export default function Notification() {
    return (
        <section className="py-8"><div className="container">
            <div className="max-w-3xl mx-auto">
                <div className="flex items-center justify-between mb-6"><h2 className="mb-0">Notifications</h2><button className="text-sm text-primary hover:text-primary-700">Mark all as read</button></div>
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
                                    <p className="text-sm mb-0"><Link to="/profile" className="font-semibold text-heading">{n.user}</Link> {n.text}</p>
                                    <span className="text-xs text-body">{n.time}</span>
                                    {n.type === 'follow' && n.unread && (
                                        <div className="flex gap-2 mt-2"><button className="btn btn-sm btn-primary">Confirm</button><button className="btn btn-sm btn-light">Delete</button></div>
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
