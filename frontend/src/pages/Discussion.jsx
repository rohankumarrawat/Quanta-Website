import { Link } from 'react-router-dom';
const discussions = Array.from({ length: 6 }, (_, i) => ({
    title: ['Should we switch to TypeScript for all new projects?', 'What are the best remote work tools in 2024?', 'Is college education still worth it?', 'The future of AI in everyday life', 'Best practices for work-life balance', 'How to deal with imposter syndrome'][i],
    author: ['Dennis Barrett', 'Judy Nguyen', 'Frances Guerrero', 'Billy Vasquez', 'Larry Lawson', 'Amanda Reed'][i],
    avatar: ['03.jpg', '01.jpg', '05.jpg', '08.jpg', '04.jpg', '06.jpg'][i],
    replies: [45, 32, 28, 67, 19, 38][i],
    likes: [120, 95, 85, 210, 55, 105][i],
    time: ['2h ago', '5h ago', '1d ago', '2d ago', '3d ago', '1w ago'][i],
}));
export default function Discussion() {
    return (
        <section className="py-8"><div className="container">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div><h2 className="mb-1">Discussions</h2><p className="text-body mb-0">Start or join conversations on trending topics.</p></div>
                <button className="btn btn-primary self-start">Start Discussion</button>
            </div>
            <div className="space-y-4">
                {discussions.map((d, i) => (
                    <div key={i} className="card p-4 hover:shadow-md transition-shadow">
                        <div className="flex gap-4">
                            <img className="w-10 h-10 rounded-full object-cover flex-shrink-0" src={`/assets/images/avatar/${d.avatar}`} alt="" />
                            <div className="flex-1">
                                <h5 className="card-title mb-1"><Link to="/forum-detail" className="text-heading hover:text-primary">{d.title}</Link></h5>
                                <div className="flex flex-wrap items-center gap-3 text-sm text-body">
                                    <Link to="/profile" className="text-primary">{d.author}</Link>
                                    <span>• {d.time}</span>
                                </div>
                                <div className="flex flex-wrap gap-4 mt-3 text-sm">
                                    <span className="text-body"><i className="bi bi-chat mr-1"></i>{d.replies} replies</span>
                                    <span className="text-body"><i className="bi bi-heart mr-1"></i>{d.likes} likes</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div></section>
    );
}
