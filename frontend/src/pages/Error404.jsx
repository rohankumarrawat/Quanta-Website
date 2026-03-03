import { Link } from 'react-router';
import { useTranslation } from 'react-i18next';

export default function Error404() {
    const { t } = useTranslation();

    return (
        <section className="py-0"><div className="container">
            <div className="flex justify-center items-center min-h-screen text-center py-8">
                <div className="max-w-lg">
                    <h1 className="text-8xl font-bold text-primary mb-4">{t('404_title')}</h1>
                    <h2 className="mb-3">{t('404_heading')}</h2>
                    <p className="text-body mb-6">{t('404_text')}</p>
                    <div className="flex flex-wrap justify-center gap-3">
                        <Link to="/" className="btn btn-primary">{t('go_home')}</Link>
                        <Link to="/help-center" className="btn btn-light">{t('help_center')}</Link>
                    </div>
                </div>
            </div>
        </div></section>
    );
}
