import { Link } from 'react-router';
import { useTranslation } from 'react-i18next';
const questionsData = [
    { key: 'q1', author: 'Larry Lawson', votes: 25, answers: 15, views: 102 },
    { key: 'q2', author: 'Dennis Barrett', votes: 36, answers: 22, views: 245 },
    { key: 'q3', author: 'Judy Nguyen', votes: 18, answers: 8, views: 67 },
    { key: 'q4', author: 'Frances Guerrero', votes: 42, answers: 31, views: 380 },
    { key: 'q5', author: 'Billy Vasquez', votes: 15, answers: 12, views: 95 },
    { key: 'q6', author: 'Amanda Reed', votes: 28, answers: 19, views: 156 },
];
export default function CategoryDetail() {
    const { t } = useTranslation();
    return (
        <section className="py-8"><div className="container">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-4">
                    <img src="/assets/images/elements/category/11.svg" className="w-14 h-14" alt="" />
                    <div><h2 className="mb-0">{t('categories.technology')}</h2><p className="text-body mb-0">4,500 {t('category_questions', {count: 4500})} • 3,200 {t('category_followers', {count: 3200})}</p></div>
                </div>
                <button className="btn btn-primary self-start">{t('follow_category')}</button>
            </div>
            <div className="flex gap-2 mb-6 border-b border-border-color pb-2">
                <button className="px-4 py-2 text-sm font-medium text-primary border-b-2 border-primary -mb-[10px]">{t('category_tabs.latest')}</button>
                <button className="px-4 py-2 text-sm font-medium text-body hover:text-primary">{t('category_tabs.popular')}</button>
                <button className="px-4 py-2 text-sm font-medium text-body hover:text-primary">{t('category_tabs.unanswered')}</button>
            </div>
            <div className="space-y-4">
                {questionsData.map((q, i) => (
                    <div key={i} className="card p-4 flex flex-col sm:flex-row gap-4">
                        <div className="flex sm:flex-col items-center gap-2 sm:gap-1 sm:w-16 sm:text-center flex-shrink-0">
                            <button className="text-body hover:text-primary"><i className="bi bi-caret-up-fill"></i></button>
                            <span className="font-semibold text-heading">{q.votes}</span>
                            <button className="text-body hover:text-primary"><i className="bi bi-caret-down-fill"></i></button>
                        </div>
                        <div className="flex-1">
                            <h5 className="card-title mb-1"><Link to="/answer-detail" className="text-heading hover:text-primary">{t(`questions.${q.key}`)}</Link></h5>
                            <div className="flex flex-wrap gap-3 text-sm text-body">
                                <Link to="/profile" className="text-primary">{q.author}</Link>
                                <span><i className="fa-regular fa-message mr-1"></i>{q.answers} {t('answers')}</span>
                                <span><i className="fa-regular fa-eye mr-1"></i>{q.views} {t('views', {count: q.views})}}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div></section>
    );
}
