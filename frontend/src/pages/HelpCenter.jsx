import { Link } from 'react-router';
import { useTranslation } from 'react-i18next';

const helpCategories = [
    { icon: 'bi-rocket-takeoff', titleKey: 'helpCenter.categories.0.title', descKey: 'helpCenter.categories.0.desc', articles: 12 },
    { icon: 'bi-person-circle', titleKey: 'helpCenter.categories.1.title', descKey: 'helpCenter.categories.1.desc', articles: 8 },
    { icon: 'bi-shield-check', titleKey: 'helpCenter.categories.2.title', descKey: 'helpCenter.categories.2.desc', articles: 15 },
    { icon: 'bi-credit-card', titleKey: 'helpCenter.categories.3.title', descKey: 'helpCenter.categories.3.desc', articles: 6 },
    { icon: 'bi-chat-dots', titleKey: 'helpCenter.categories.4.title', descKey: 'helpCenter.categories.4.desc', articles: 10 },
    { icon: 'bi-tools', titleKey: 'helpCenter.categories.5.title', descKey: 'helpCenter.categories.5.desc', articles: 20 },
];
export default function HelpCenter() {
    const { t } = useTranslation();
    return (
        <section className="py-8">
            <div className="container">
                <div className="max-w-3xl mx-auto text-center mb-8">
                    <h1 className="mb-3">{t('helpCenter.heading')}</h1>
                    <form className="bg-white rounded-lg p-2 shadow-sm">
                        <div className="flex">
                            <input
                                className="flex-1 px-4 py-3 border-0 bg-transparent focus:outline-none"
                                type="search"
                                placeholder={t('helpCenter.searchPlaceholder')}
                            />
                            <button type="button" className="btn btn-primary btn-lg">
                                <i className="fas fa-search"></i>
                            </button>
                        </div>
                    </form>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                    {helpCategories.map((cat, i) => (
                        <Link key={i} to="/help-detail" className="card p-6 text-center hover:shadow-md transition-shadow group">
                            <div className="w-14 h-14 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-3">
                                <i className={`bi ${cat.icon} text-2xl`}></i>
                            </div>
                            <h6 className="mb-2 group-hover:text-primary transition-colors">{t(cat.titleKey)}</h6>
                            <p className="text-sm text-body mb-2">{t(cat.descKey)}</p>
                            <span className="text-xs text-primary">{t('articles', { count: cat.articles })}</span>
                        </Link>
                    ))}
                </div>
                <div className="bg-white p-6 sm:p-8 rounded-lg text-center shadow-sm">
                    <h3 className="mb-2">{t('helpCenter.still_need_help')}</h3>
                    <p className="text-body mb-4">{t('helpCenter.contact_prompt')}</p>
                    <Link to="/contact" className="btn btn-primary">{t('helpCenter.contact_support')}</Link>
                </div>
            </div>
        </section>
    );
}
