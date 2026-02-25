import { Link } from 'react-router';

export default function ForumTopicRow({ title, author, avatar, replies, views, time, category, to = "/forum-detail" }) {
    return (
        <tr className="hover:bg-gray-50">
            <td>
                <div className="flex items-center gap-3">
                    <img className="w-9 h-9 rounded-full object-cover flex-shrink-0" src={`/assets/images/avatar/${avatar}`} alt="" />
                    <div>
                        <Link to={to} className="font-medium text-heading hover:text-primary text-sm">{title}</Link>
                        <p className="text-xs text-body mb-0">{author} • <span className="text-primary">{category}</span></p>
                    </div>
                </div>
            </td>
            <td className="text-center text-sm">{replies}</td>
            <td className="text-center text-sm">{views.toLocaleString()}</td>
            <td className="text-sm text-body">{time}</td>
        </tr>
    );
}
