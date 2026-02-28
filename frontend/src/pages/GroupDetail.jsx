<<<<<<< HEAD
import { Link } from 'react-router';
export default function GroupDetail() {
    const posts = Array.from({ length: 4 }, (_, i) => ({
        author: ['Dennis Barrett', 'Judy Nguyen', 'Frances Guerrero', 'Billy Vasquez'][i],
        avatar: ['03.jpg', '01.jpg', '05.jpg', '08.jpg'][i],
        time: ['2h ago', '5h ago', '1d ago', '3d ago'][i],
        text: ['Just published a new article about React Server Components. Check it out!', 'What state management library are you using in 2024? I\'m curious about the community preferences.', 'Here\'s a performance tip: always memoize your context providers to prevent unnecessary re-renders!', 'Looking for contributors to an open-source React component library. DM if interested!'][i],
        likes: [24, 18, 45, 12][i],
        comments: [8, 15, 22, 5][i],
    }));
    return (
        <section className="py-8"><div className="container">
            {/* Banner */}
            <div className="card overflow-hidden mb-6">
                <div className="h-40 bg-gradient-to-r from-primary to-primary-700"></div>
                <div className="p-4 sm:p-6 relative">
                    <div className="flex flex-col sm:flex-row sm:items-end gap-4 -mt-16 sm:-mt-12">
                        <img className="w-20 h-20 rounded-xl border-4 border-white object-cover shadow" src="/assets/images/avatar/03.jpg" alt="" />
                        <div className="flex-1"><h3 className="mb-0">React Developers</h3><p className="text-body mb-0">12,500 members • Public Group</p></div>
                        <button className="btn btn-primary self-start">Join Group</button>
                    </div>
                </div>
            </div>
            <div className="grid lg:grid-cols-12 gap-6">
                <div className="lg:col-span-8">
                    {/* Post form */}
                    <div className="card p-4 mb-4">
                        <div className="flex gap-3">
                            <img className="w-9 h-9 rounded-full object-cover flex-shrink-0" src="/assets/images/avatar/01.jpg" alt="" />
                            <input className="form-control bg-light border-0" placeholder="Share something with the group..." readOnly />
                        </div>
                    </div>
                    {/* Posts */}
                    <div className="space-y-4">
                        {posts.map((p, i) => (
                            <div key={i} className="card p-4">
                                <div className="flex items-center gap-3 mb-3">
                                    <img className="w-9 h-9 rounded-full object-cover" src={`/assets/images/avatar/${p.avatar}`} alt="" />
                                    <div><Link to="/profile" className="font-semibold text-heading text-sm">{p.author}</Link><p className="text-xs text-body mb-0">{p.time}</p></div>
                                </div>
                                <p className="text-body leading-relaxed mb-3">{p.text}</p>
                                <div className="flex gap-4 text-sm pt-3 border-t border-border-color">
                                    <button className="text-body hover:text-primary"><i className="bi bi-heart mr-1"></i>{p.likes}</button>
                                    <button className="text-body hover:text-primary"><i className="bi bi-chat mr-1"></i>{p.comments}</button>
                                    <button className="text-body hover:text-primary"><i className="bi bi-share mr-1"></i>Share</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="lg:col-span-4">
                    <div className="card p-4 mb-4">
                        <h6 className="mb-3">About</h6>
                        <p className="text-sm text-body mb-3">A community for React enthusiasts to share knowledge, discuss best practices, and help each other grow.</p>
                        <ul className="space-y-2 text-sm text-body">
                            <li><i className="bi bi-globe mr-2"></i>Public Group</li>
                            <li><i className="bi bi-people mr-2"></i>12,500 Members</li>
                            <li><i className="bi bi-calendar mr-2"></i>Created Jan 2023</li>
                        </ul>
                    </div>
                    <div className="card p-4">
                        <h6 className="mb-3">Members</h6>
                        <div className="flex flex-wrap gap-2">
                            {['01', '02', '03', '04', '05', '06', '07', '08'].map((n) => (
                                <img key={n} className="w-9 h-9 rounded-full object-cover" src={`/assets/images/avatar/${n}.jpg`} alt="" />
                            ))}
                        </div>
                        <Link to="#" className="text-sm text-primary mt-3 block">View all members</Link>
                    </div>
                </div>
            </div>
        </div></section>
    );
}
=======
import { Link } from 'react-router';
export default function GroupDetail() {
    const posts = Array.from({ length: 4 }, (_, i) => ({
        author: ['Dennis Barrett', 'Judy Nguyen', 'Frances Guerrero', 'Billy Vasquez'][i],
        avatar: ['03.jpg', '01.jpg', '05.jpg', '08.jpg'][i],
        time: ['2h ago', '5h ago', '1d ago', '3d ago'][i],
        text: ['Just published a new article about React Server Components. Check it out!', 'What state management library are you using in 2024? I\'m curious about the community preferences.', 'Here\'s a performance tip: always memoize your context providers to prevent unnecessary re-renders!', 'Looking for contributors to an open-source React component library. DM if interested!'][i],
        likes: [24, 18, 45, 12][i],
        comments: [8, 15, 22, 5][i],
    }));
    return (
        <section className="py-8"><div className="container">
            {/* Banner */}
            <div className="card overflow-hidden mb-6">
                <div className="h-40 bg-gradient-to-r from-primary to-primary-700"></div>
                <div className="p-4 sm:p-6 relative">
                    <div className="flex flex-col sm:flex-row sm:items-end gap-4 -mt-16 sm:-mt-12">
                        <img className="w-20 h-20 rounded-xl border-4 border-white object-cover shadow" src="/assets/images/avatar/03.jpg" alt="" />
                        <div className="flex-1"><h3 className="mb-0">React Developers</h3><p className="text-body mb-0">12,500 members • Public Group</p></div>
                        <button className="btn btn-primary self-start">Join Group</button>
                    </div>
                </div>
            </div>
            <div className="grid lg:grid-cols-12 gap-6">
                <div className="lg:col-span-8">
                    {/* Post form */}
                    <div className="card p-4 mb-4">
                        <div className="flex gap-3">
                            <img className="w-9 h-9 rounded-full object-cover flex-shrink-0" src="/assets/images/avatar/01.jpg" alt="" />
                            <input className="form-control bg-light border-0" placeholder="Share something with the group..." readOnly />
                        </div>
                    </div>
                    {/* Posts */}
                    <div className="space-y-4">
                        {posts.map((p, i) => (
                            <div key={i} className="card p-4">
                                <div className="flex items-center gap-3 mb-3">
                                    <img className="w-9 h-9 rounded-full object-cover" src={`/assets/images/avatar/${p.avatar}`} alt="" />
                                    <div><Link to="/profile" className="font-semibold text-heading text-sm">{p.author}</Link><p className="text-xs text-body mb-0">{p.time}</p></div>
                                </div>
                                <p className="text-body leading-relaxed mb-3">{p.text}</p>
                                <div className="flex gap-4 text-sm pt-3 border-t border-border-color">
                                    <button className="text-body hover:text-primary"><i className="bi bi-heart mr-1"></i>{p.likes}</button>
                                    <button className="text-body hover:text-primary"><i className="bi bi-chat mr-1"></i>{p.comments}</button>
                                    <button className="text-body hover:text-primary"><i className="bi bi-share mr-1"></i>Share</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="lg:col-span-4">
                    <div className="card p-4 mb-4">
                        <h6 className="mb-3">About</h6>
                        <p className="text-sm text-body mb-3">A community for React enthusiasts to share knowledge, discuss best practices, and help each other grow.</p>
                        <ul className="space-y-2 text-sm text-body">
                            <li><i className="bi bi-globe mr-2"></i>Public Group</li>
                            <li><i className="bi bi-people mr-2"></i>12,500 Members</li>
                            <li><i className="bi bi-calendar mr-2"></i>Created Jan 2023</li>
                        </ul>
                    </div>
                    <div className="card p-4">
                        <h6 className="mb-3">Members</h6>
                        <div className="flex flex-wrap gap-2">
                            {['01', '02', '03', '04', '05', '06', '07', '08'].map((n) => (
                                <img key={n} className="w-9 h-9 rounded-full object-cover" src={`/assets/images/avatar/${n}.jpg`} alt="" />
                            ))}
                        </div>
                        <Link to="#" className="text-sm text-primary mt-3 block">View all members</Link>
                    </div>
                </div>
            </div>
        </div></section>
    );
}
>>>>>>> b51d19062c6ff9441585b362d5db7e3f2b76ab0e
