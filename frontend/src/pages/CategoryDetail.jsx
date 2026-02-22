import { Link } from 'react-router-dom';
const questions = Array.from({ length: 6 }, (_, i) => ({
    title: ['What is artificial intelligence?', 'How does blockchain work?', 'Best programming language for beginners', 'Cloud computing vs traditional hosting', 'Machine learning applications', 'Cybersecurity best practices'][i],
    author: ['Larry Lawson', 'Dennis Barrett', 'Judy Nguyen', 'Frances Guerrero', 'Billy Vasquez', 'Amanda Reed'][i],
    votes: [25, 36, 18, 42, 15, 28][i],
    answers: [15, 22, 8, 31, 12, 19][i],
    views: [102, 245, 67, 380, 95, 156][i],
}));
export default function CategoryDetail() {
    return (
        <section className="py-8"><div className="container">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-4">
                    <img src="/assets/images/elements/category/11.svg" className="w-14 h-14" alt="" />
                    <div><h2 className="mb-0">Technology</h2><p className="text-body mb-0">4,500 Questions • 3,200 Followers</p></div>
                </div>
                <button className="btn btn-primary self-start">Follow Category</button>
            </div>
            <div className="flex gap-2 mb-6 border-b border-border-color pb-2">
                <button className="px-4 py-2 text-sm font-medium text-primary border-b-2 border-primary -mb-[10px]">Latest</button>
                <button className="px-4 py-2 text-sm font-medium text-body hover:text-primary">Popular</button>
                <button className="px-4 py-2 text-sm font-medium text-body hover:text-primary">Unanswered</button>
            </div>
            <div className="space-y-4">
                {questions.map((q, i) => (
                    <div key={i} className="card p-4 flex flex-col sm:flex-row gap-4">
                        <div className="flex sm:flex-col items-center gap-2 sm:gap-1 sm:w-16 sm:text-center flex-shrink-0">
                            <button className="text-body hover:text-primary"><i className="bi bi-caret-up-fill"></i></button>
                            <span className="font-semibold text-heading">{q.votes}</span>
                            <button className="text-body hover:text-primary"><i className="bi bi-caret-down-fill"></i></button>
                        </div>
                        <div className="flex-1">
                            <h5 className="card-title mb-1"><Link to="/answer-detail" className="text-heading hover:text-primary">{q.title}</Link></h5>
                            <div className="flex flex-wrap gap-3 text-sm text-body">
                                <Link to="/profile" className="text-primary">{q.author}</Link>
                                <span><i className="fa-regular fa-message mr-1"></i>{q.answers} Answers</span>
                                <span><i className="fa-regular fa-eye mr-1"></i>{q.views} Views</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div></section>
    );
}
