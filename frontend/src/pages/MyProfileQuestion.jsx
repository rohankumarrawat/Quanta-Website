import { Link } from 'react-router-dom';
const questions = Array.from({ length: 4 }, (_, i) => ({ title: ['How to implement dark mode in React?', 'Best database for real-time apps?', 'React vs Vue vs Angular comparison', 'How to optimize React performance?'][i], votes: [25, 18, 42, 15][i], answers: [8, 12, 5, 18][i], time: ['2 days ago', '5 days ago', '1 week ago', '2 weeks ago'][i] }));
export default function MyProfileQuestion() {
    return (
        <div className="space-y-4">
            {questions.map((q, i) => (
                <div key={i} className="card p-4 flex items-center gap-4">
                    <div className="text-center w-16 flex-shrink-0"><span className="block font-semibold text-heading">{q.votes}</span><span className="text-xs text-body">votes</span></div>
                    <div className="flex-1"><h6 className="mb-1"><Link to="/answer-detail" className="text-heading hover:text-primary">{q.title}</Link></h6><div className="text-sm text-body"><span>{q.answers} answers</span> • <span>{q.time}</span></div></div>
                </div>
            ))}
        </div>
    );
}
