import { Link } from 'react-router';

export default function QuestionCard({ badge, title, time, answers, latest, to = "/answer-detail" }) {
    return (
        <div className="card p-4">
            <span className="badge badge-dark mb-2 inline-block">{badge}</span>
            <h5 className="card-title mb-1">
                <Link to={to} className="text-heading hover:text-primary transition-colors">{title}</Link>
            </h5>
            <small className="text-body">Asked: {time}</small>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-3 gap-1">
                <Link to={to} className="text-sm text-primary">{answers} Answers</Link>
                <span className="text-sm text-body">Latest answer was {latest}</span>
            </div>
        </div>
    );
}
