import { useTranslation } from 'react-i18next';

export default function TermsAndCondition() {
    const { t } = useTranslation();
    const sections = t('terms.sections', { returnObjects: true });
    return (
        <section className="py-8"><div className="container">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-3xl font-bold mb-2">{t('terms.page_title')}</h1>
                <p className="text-body text-sm mb-2">{t('terms.last_updated')}</p>
                <p className="text-body text-sm mb-6 italic">{t('terms.translation_notice')}</p>
                <div className="card p-4 sm:p-6 space-y-6">
                    {sections.map((s, i) => (
                        <div key={i}><h5>{s.title}</h5><p className="text-body leading-relaxed mb-0">{s.content}</p></div>
                    ))}
                </div>
            </div>
        </div></section>
    );
}
