import { Link } from 'react-router-dom';
export default function ForumCategory() {
    const topics = Array.from({ length: 8 }, (_, i) => ({
        title: ['Best React state management tools', 'Understanding TypeScript generics', 'CSS Grid vs Flexbox guide', 'Node.js performance tips', 'GraphQL vs REST API comparison', 'Docker containers explained', 'CI/CD pipeline setup guide', 'Microservices architecture patterns'][i],
        author: ['Dennis Barrett', 'Judy Nguyen', 'Frances Guerrero', 'Billy Vasquez', 'Larry Lawson', 'Amanda Reed', 'Louis Burns', 'Carolyn Ortiz'][i],
        avatar: [`03.jpg`, `01.jpg`, `05.jpg`, `08.jpg`, `04.jpg`, `06.jpg`, `07.jpg`, `02.jpg`][i],
        replies: [24, 18, 32, 15, 42, 8, 21, 36][i],
        views: [1200, 950, 2100, 780, 3500, 420, 1800, 2900][i],
        time: ['2h ago', '5h ago', '1d ago', '2d ago', '3d ago', '4d ago', '5d ago', '1w ago'][i],
    }));
    return (
        <section className="py-8">
            <div className="container">
                <nav className="text-sm mb-4"><Link to="/forum" className="text-body hover:text-primary">Forum</Link> <span className="mx-2 text-body">/</span> <span className="text-heading">Programming</span></nav>
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                    <div><h2 className="mb-1">Programming</h2><p className="text-body mb-0">Discuss programming topics, share code, and get help.</p></div>
                    <Link to="/ask-question" className="btn btn-primary self-start">New Topic</Link>
                </div>
                <div className="card">
                    <div className="overflow-x-auto">
                        <table className="table">
                            <thead><tr><th>Topic</th><th className="text-center">Replies</th><th className="text-center">Views</th><th>Activity</th></tr></thead>
                            <tbody>
                                {topics.map((t, i) => (
                                    <tr key={i} className="hover:bg-gray-50">
                                        <td><div className="flex items-center gap-3"><img className="w-9 h-9 rounded-full object-cover flex-shrink-0" src={`/assets/images/avatar/${t.avatar}`} alt="" /><div><Link to="/forum-detail" className="font-medium text-heading hover:text-primary text-sm">{t.title}</Link><p className="text-xs text-body mb-0">{t.author}</p></div></div></td>
                                        <td className="text-center text-sm">{t.replies}</td>
                                        <td className="text-center text-sm">{t.views.toLocaleString()}</td>
                                        <td className="text-sm text-body">{t.time}</td>
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
