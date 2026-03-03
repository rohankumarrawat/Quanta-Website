import { Link } from 'react-router';
import { useTranslation } from 'react-i18next';

export default function HomeCTA() {
    const { t } = useTranslation();
    return (
        <section className="py-0 lg:py-12">
            <div className="container">
                <div className="bg-white p-8 sm:p-12 rounded-lg shadow-sm">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                        <div>
                            <h3 className="mb-2">{t('home_cta.title')}</h3>
                            <p className="text-body mb-0">{t('home_cta.text')}</p>
                        </div>
                        <Link to="/ask-question" className="btn btn-dark whitespace-nowrap self-start">
                            {t('home_cta.button')}
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
