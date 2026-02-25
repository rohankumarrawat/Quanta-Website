import { Link } from 'react-router';

const forumCategories = [
    { icon: 'bi-code-slash', name: 'Programming', topics: 1250, posts: 8500, color: 'text-primary' },
    { icon: 'bi-briefcase', name: 'Business', topics: 890, posts: 5200, color: 'text-success' },
    { icon: 'bi-heart-pulse', name: 'Health & Wellness', topics: 650, posts: 3800, color: 'text-danger' },
    { icon: 'bi-book', name: 'Education', topics: 1100, posts: 7200, color: 'text-warning' },
    { icon: 'bi-palette', name: 'Design & Art', topics: 420, posts: 2100, color: 'text-info' },
    { icon: 'bi-globe', name: 'General Discussion', topics: 2300, posts: 15000, color: 'text-dark' },
];

const recentTopics = [
    { title: 'Best practices for React state management in 2024', author: 'Dennis Barrett', avatar: '03.jpg', replies: 24, views: 1200, time: '2 hours ago', category: 'Programming' },
    { title: 'How to start a successful online business from scratch', author: 'Judy Nguyen', avatar: '01.jpg', replies: 18, views: 950, time: '5 hours ago', category: 'Business' },
    { title: 'The importance of mental health in the workplace', author: 'Frances Guerrero', avatar: '05.jpg', replies: 32, views: 2100, time: '1 day ago', category: 'Health' },
    { title: 'Top 10 coding languages to learn in 2024', author: 'Billy Vasquez', avatar: '08.jpg', replies: 45, views: 3500, time: '2 days ago', category: 'Programming' },
];

export default function Forum() {
    return (
        <section className="py-8">
            <div className="container">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                    <div>
                        <h2 className="mb-1">Forum</h2>
                        <p className="text-body mb-0">Join the discussion and share your knowledge with the community.</p>
                    </div>
                    <Link to="/ask-question" className="btn btn-primary self-start">Create New Topic</Link>
                </div>

                {/* Forum Categories */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                    {forumCategories.map((cat, i) => (
                        <Link key={i} to="/forum-category" className="card p-4 hover:shadow-md transition-shadow group">
                            <div className="flex items-center gap-3 mb-3">
                                <div className={`w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center ${cat.color}`}>
                                    <i className={`bi ${cat.icon} text-xl`}></i>
                                </div>
                                <h6 className="mb-0 group-hover:text-primary transition-colors">{cat.name}</h6>
                            </div>
                            <div className="flex gap-4 text-sm text-body">
                                <span>{cat.topics.toLocaleString()} Topics</span>
                                <span>{cat.posts.toLocaleString()} Posts</span>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Recent Topics */}
                <h4 className="mb-4">Recent Topics</h4>
                <div className="card">
                    <div className="overflow-x-auto">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Topic</th>
                                    <th className="text-center">Replies</th>
                                    <th className="text-center">Views</th>
                                    <th>Activity</th>
                                </tr>
                            </thead>
                            <tbody>
                                {recentTopics.map((topic, i) => (
                                    <tr key={i} className="hover:bg-gray-50">
                                        <td>
                                            <div className="flex items-center gap-3">
                                                <img className="w-9 h-9 rounded-full object-cover flex-shrink-0" src={`/assets/images/avatar/${topic.avatar}`} alt="" />
                                                <div>
                                                    <Link to="/forum-detail" className="font-medium text-heading hover:text-primary text-sm">{topic.title}</Link>
                                                    <p className="text-xs text-body mb-0">{topic.author} • <span className="text-primary">{topic.category}</span></p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="text-center text-sm">{topic.replies}</td>
                                        <td className="text-center text-sm">{topic.views.toLocaleString()}</td>
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
