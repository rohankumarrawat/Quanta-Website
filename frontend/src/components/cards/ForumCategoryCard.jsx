import { Link } from 'react-router';

export default function ForumCategoryCard({ icon, name, topics, posts, color, to = "/forum-category" }) {
    return (
        <Link to={to} className="card p-4 hover:shadow-md transition-shadow group">
            <div className="flex items-center gap-3 mb-3">
                <div className={`w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center ${color}`}>
                    <i className={`bi ${icon} text-xl`}></i>
                </div>
                <h6 className="mb-0 group-hover:text-primary transition-colors">{name}</h6>
            </div>
            <div className="flex gap-4 text-sm text-body">
                <span>{topics.toLocaleString()} Topics</span>
                <span>{posts.toLocaleString()} Posts</span>
            </div>
        </Link>
    );
}
