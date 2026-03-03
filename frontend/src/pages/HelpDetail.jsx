import { Link } from 'react-router';
import { useTranslation } from 'react-i18next';

export default function HelpDetail() {
    const { t } = useTranslation();

    // Pull arrays/objects from translations so paragraphs and steps come from locale files
    const articles = t('helpDetail.articles', { returnObjects: true });
    const article = t('helpDetail.article', { returnObjects: true });

    return (
        <section className="py-8">
            <div className="container">
                <div className="grid lg:grid-cols-12 gap-6">
                    <div className="lg:col-span-4">
                        <div className="card p-4">
                            <h6 className="mb-3">{t('helpDetail.sidebarHeading')}</h6>
                            <ul className="space-y-1">
                                {articles.map((a, i) => (
                                    <li key={i}>
                                        <Link
                                            to="/help-detail"
                                            className={`block py-2 px-3 rounded text-sm ${
                                                i === 0
                                                    ? 'bg-primary/10 text-primary font-medium'
                                                    : 'text-body hover:bg-gray-50 hover:text-primary'
                                            }`}
                                        >
                                            {a}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="lg:col-span-8">
                        <nav className="text-sm mb-4">
                            <Link to="/help-center" className="text-body hover:text-primary">
                                {t('helpDetail.breadcrumb.helpCenter')}
                            </Link>{' '}
                            <span className="mx-2">/</span>{' '}
                            <Link to="/help-detail" className="text-body hover:text-primary">
                                {t('helpDetail.breadcrumb.gettingStarted')}
                            </Link>{' '}
                            <span className="mx-2">/</span>{' '}
                            <span className="text-heading">{article.title}</span>
                        </nav>
                        <div className="card p-4 sm:p-6">
                            <h3 className="mb-4">{article.title}</h3>
                            <p className="text-body leading-relaxed mb-4">{article.p1}</p>
                            <h5 className="mb-2">{article.step1_heading}</h5>
                            <p className="text-body leading-relaxed mb-4">{article.step1_text}</p>
                            <h5 className="mb-2">{article.step2_heading}</h5>
                            <p className="text-body leading-relaxed mb-4">{article.step2_text}</p>
                            <h5 className="mb-2">{article.step3_heading}</h5>
                            <p className="text-body leading-relaxed mb-4">{article.step3_text}</p>
                            <h5 className="mb-2">{article.step4_heading}</h5>
                            <p className="text-body leading-relaxed mb-4">{article.step4_text}</p>
                            <div className="flex items-center justify-between mt-6 pt-4 border-t border-border-color">
                                <p className="text-sm text-body mb-0">{article.helpful}</p>
                                <div className="flex gap-2">
                                    <button className="btn btn-sm btn-outline-dark">
                                        <i className="bi bi-hand-thumbs-up mr-1"></i>
                                        {article.yes}
                                    </button>
                                    <button className="btn btn-sm btn-outline-dark">
                                        <i className="bi bi-hand-thumbs-down mr-1"></i>
                                        {article.no}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
