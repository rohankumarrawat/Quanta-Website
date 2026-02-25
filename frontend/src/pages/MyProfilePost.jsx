import { Link } from 'react-router';
const posts = Array.from({ length: 4 }, (_, i) => ({ title: ['Getting Started with React Hooks', 'Understanding CSS Grid Layout', 'Node.js Best Practices Guide', 'Introduction to TypeScript'][i], date: ['Nov 7, 2024', 'Nov 5, 2024', 'Nov 3, 2024', 'Nov 1, 2024'][i], likes: [45, 32, 28, 22][i], comments: [12, 8, 15, 6][i] }));
export default function MyProfilePost() {
    return (
        <div className="space-y-4">
            {posts.map((p, i) => (
                <div key={i} className="card p-4"><h6 className="mb-2"><Link to="/blog-detail" className="text-heading hover:text-primary">{p.title}</Link></h6><div className="flex gap-4 text-sm text-body"><span>{p.date}</span><span><i className="bi bi-heart mr-1"></i>{p.likes}</span><span><i className="bi bi-chat mr-1"></i>{p.comments}</span></div></div>
            ))}
        </div>
    );
}
