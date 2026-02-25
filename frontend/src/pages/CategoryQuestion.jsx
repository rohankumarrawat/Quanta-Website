import { Link } from 'react-router';
export default function CategoryQuestion() {
    const questions = Array.from({ length: 8 }, (_, i) => ({ title: ['How to implement binary search?', 'Explain recursion with examples', 'What is dynamic programming?', 'Difference between stack and queue', 'How does hash table work?', 'Explain Big O notation', 'What is a linked list?', 'Binary tree traversal methods'][i], votes: [25, 18, 42, 15, 32, 28, 12, 36][i], answers: [8, 12, 5, 18, 9, 14, 6, 22][i] }));
    return (
        <section className="py-8"><div className="container">
            <h2 className="mb-6">Category Questions</h2>
            <div className="space-y-3">
                {questions.map((q, i) => (
                    <div key={i} className="card p-4 flex items-center gap-4">
                        <div className="text-center w-16 flex-shrink-0"><span className="block font-semibold text-heading">{q.votes}</span><span className="text-xs text-body">votes</span></div>
                        <div className="text-center w-16 flex-shrink-0"><span className={`block font-semibold ${q.answers > 0 ? 'text-success' : 'text-body'}`}>{q.answers}</span><span className="text-xs text-body">answers</span></div>
                        <h6 className="mb-0 flex-1"><Link to="/answer-detail" className="text-heading hover:text-primary">{q.title}</Link></h6>
                    </div>
                ))}
            </div>
        </div></section>
    );
}
