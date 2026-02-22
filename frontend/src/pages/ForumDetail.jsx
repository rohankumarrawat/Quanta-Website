import { Link } from 'react-router-dom';
export default function ForumDetail() {
    const replies = [
        { user: 'Judy Nguyen', avatar: '01.jpg', time: '2 hours ago', text: 'I highly recommend using Zustand for most React projects. It has a minimal API and great performance.' },
        { user: 'Frances Guerrero', avatar: '05.jpg', time: '5 hours ago', text: 'Redux Toolkit has improved a lot. The createSlice and createAsyncThunk APIs make it much less boilerplate-heavy than old Redux.' },
        { user: 'Billy Vasquez', avatar: '08.jpg', time: '1 day ago', text: 'For server state, React Query (TanStack Query) is a game changer. It handles caching, refetching, and synchronization beautifully.' },
    ];
    return (
        <section className="py-8">
            <div className="container">
                <div className="max-w-4xl mx-auto">
                    <nav className="text-sm mb-4"><Link to="/forum" className="text-body hover:text-primary">Forum</Link> <span className="mx-2 text-body">/</span> <Link to="/forum-category" className="text-body hover:text-primary">Programming</Link> <span className="mx-2 text-body">/</span> <span className="text-heading">Topic</span></nav>
                    {/* Original Post */}
                    <div className="card p-4 sm:p-6 mb-6">
                        <div className="flex items-center gap-3 mb-4">
                            <img className="w-10 h-10 rounded-full object-cover" src="/assets/images/avatar/03.jpg" alt="" />
                            <div><Link to="/profile" className="font-semibold text-heading text-sm">Dennis Barrett</Link><p className="text-xs text-body mb-0">Posted 3 hours ago</p></div>
                        </div>
                        <h4 className="mb-3">Best practices for React state management in 2024</h4>
                        <p className="text-body leading-relaxed">I've been working with React for a while and I want to understand the current best practices for state management. With so many options like Redux, Zustand, Jotai, and React's built-in Context API, it's hard to decide which one to use for different scenarios.</p>
                        <p className="text-body leading-relaxed">What are your recommendations and why? I'd love to hear about real-world experience with these tools.</p>
                        <div className="flex items-center gap-4 mt-4 pt-4 border-t border-border-color text-sm">
                            <button className="text-body hover:text-primary"><i className="bi bi-hand-thumbs-up mr-1"></i>Like (24)</button>
                            <button className="text-body hover:text-primary"><i className="bi bi-reply mr-1"></i>Reply</button>
                            <button className="text-body hover:text-primary"><i className="bi bi-share mr-1"></i>Share</button>
                        </div>
                    </div>
                    {/* Replies */}
                    <h5 className="mb-4">{replies.length} Replies</h5>
                    <div className="space-y-4 mb-6">
                        {replies.map((r, i) => (
                            <div key={i} className="card p-4 sm:p-6">
                                <div className="flex items-center gap-3 mb-3">
                                    <img className="w-9 h-9 rounded-full object-cover" src={`/assets/images/avatar/${r.avatar}`} alt="" />
                                    <div><Link to="/profile" className="font-semibold text-heading text-sm">{r.user}</Link><p className="text-xs text-body mb-0">{r.time}</p></div>
                                </div>
                                <p className="text-body leading-relaxed mb-0">{r.text}</p>
                                <div className="flex items-center gap-4 mt-3 text-sm">
                                    <button className="text-body hover:text-primary"><i className="bi bi-hand-thumbs-up mr-1"></i>Like</button>
                                    <button className="text-body hover:text-primary"><i className="bi bi-reply mr-1"></i>Reply</button>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* Reply Form */}
                    <div className="card p-4 sm:p-6">
                        <h5 className="mb-4">Post a Reply</h5>
                        <textarea className="form-control mb-3" rows="4" placeholder="Write your reply..."></textarea>
                        <button className="btn btn-primary">Post Reply</button>
                    </div>
                </div>
            </div>
        </section>
    );
}
