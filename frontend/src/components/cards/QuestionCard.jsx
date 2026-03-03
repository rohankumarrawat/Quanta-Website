import { Link } from 'react-router';

import { useTranslation } from 'react-i18next';

export default function QuestionCard({ badge, title, questionKey, time, answers, latest, to = "/answer-detail" }) {
    const { t, i18n } = useTranslation();
    const lang = i18n.language.split('-')[0];
    
    let displayTitle;
    if (questionKey) {
        // Use dedicated home_questions namespace so we never render keys like "questions.q7"
        displayTitle = t(`home_questions.${questionKey}`);
    } else if (typeof title === 'object') {
        displayTitle = title[lang] || title.en;
    } else {
        displayTitle = title;
    }

    return (
        <div className="card p-4">
            <span className="badge badge-dark mb-2 inline-block">{badge}</span>
            <h5 className="card-title mb-1">
                <Link to={to} className="text-heading hover:text-primary transition-colors">{displayTitle}</Link>
            </h5>
            <small className="text-body">{t('asked')} {time}</small>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-3 gap-1">
                <Link to={to} className="text-sm text-primary">
                    {answers} {t('answers')}
                </Link>
                <span className="text-sm text-body">
                    {t('latest_answer')} {latest}
                </span>
            </div>
        </div>
    );
}
