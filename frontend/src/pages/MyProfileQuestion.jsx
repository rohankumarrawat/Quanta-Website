import { Link } from 'react-router';
import { useTranslation } from 'react-i18next';

const questions = Array.from({ length: 4 }, (_, i) => ({
    titleKey: `profile.questions.q${i + 1}`,
    votes: [25, 18, 42, 15][i],
    answers: [8, 12, 5, 18][i],
    timeKey: `profile.questions.time${i + 1}`
}));

export default function MyProfileQuestion() {
    const { t } = useTranslation();

    return (
        <div className="space-y-4">
            {questions.map((q, i) => (
                <div key={i} className="card p-4 flex items-center gap-4">
                    <div className="text-center w-16 flex-shrink-0">
                        <span className="block font-semibold text-heading">{q.votes}</span>
                        <span className="text-xs text-body">{t('profile.questions.votes', 'votes')}</span>
                    </div>
                    <div className="flex-1">
                        <h6 className="mb-1">
                            <Link to="/answer-detail" className="text-heading hover:text-primary">
                                {t(q.titleKey)}
                            </Link>
                        </h6>
                        <div className="text-sm text-body">
                            <span>{q.answers} {t('profile.questions.answers', 'answers')}</span> • <span>{t(q.timeKey)}</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
