import { Link } from 'react-router';
export default function TicketReply() {
    const messages = [
        { user: 'You', avatar: '01.jpg', time: '2 days ago', text: 'I cannot log in with my Google account. It keeps showing an error message saying "Authentication failed".' },
        { user: 'Support Agent', avatar: '06.jpg', time: '1 day ago', text: 'Thank you for reaching out. Could you please try clearing your browser cache and cookies, then attempt to log in again? Also, please let us know which browser you are using.' },
        { user: 'You', avatar: '01.jpg', time: '12 hours ago', text: 'I tried clearing the cache and using Chrome, Firefox, and Edge. The issue persists in all browsers.' },
    ];
    return (
        <section className="py-8"><div className="container">
            <div className="max-w-4xl mx-auto">
                <nav className="text-sm mb-4"><Link to="/ticket-list" className="text-body hover:text-primary">My Tickets</Link> <span className="mx-2">/</span> <span className="text-heading">#1024</span></nav>
                <div className="card p-4 sm:p-6 mb-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                        <h4 className="mb-0">Login issues with Google SSO</h4>
                        <span className="badge bg-danger/10 text-danger">Open</span>
                    </div>
                    <div className="flex flex-wrap gap-4 text-sm text-body">
                        <span><i className="bi bi-calendar mr-1"></i>Created: Nov 7, 2024</span>
                        <span><i className="bi bi-tag mr-1"></i>Priority: <span className="text-danger font-medium">High</span></span>
                        <span><i className="bi bi-hash mr-1"></i>ID: #1024</span>
                    </div>
                </div>
                <div className="space-y-4 mb-6">
                    {messages.map((m, i) => (
                        <div key={i} className={`card p-4 sm:p-6 ${m.user === 'Support Agent' ? 'bg-primary/5 border-primary/20' : ''}`}>
                            <div className="flex items-center gap-3 mb-3">
                                <img className="w-9 h-9 rounded-full object-cover" src={`/assets/images/avatar/${m.avatar}`} alt="" />
                                <div><span className="font-semibold text-heading text-sm">{m.user}</span>{m.user === 'Support Agent' && <span className="badge bg-primary/10 text-primary ml-2 text-xs">Staff</span>}<p className="text-xs text-body mb-0">{m.time}</p></div>
                            </div>
                            <p className="text-body leading-relaxed mb-0">{m.text}</p>
                        </div>
                    ))}
                </div>
                <div className="card p-4 sm:p-6">
                    <h5 className="mb-4">Reply</h5>
                    <textarea className="form-control mb-3" rows="4" placeholder="Type your reply..."></textarea>
                    <div className="flex gap-3"><button className="btn btn-primary">Send Reply</button><button className="btn btn-light">Close Ticket</button></div>
                </div>
            </div>
        </div></section>
    );
}
