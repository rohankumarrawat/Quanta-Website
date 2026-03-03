import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function FAQs() {
    const { t } = useTranslation();
    const [openIndex, setOpenIndex] = useState(0);
    const faqData = t('faq.questions', { returnObjects: true });

    return (
        <section className="py-8"><div className="container">
            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-8">
                    <h2 className="mb-2">{t('faq.heading')}</h2>
                    <p className="text-body">{t('faq.subtext')}</p>
                </div>
                <div className="space-y-2">
                    {faqData.map((item, i) => (
                        <div key={i} className="card overflow-hidden">
                            <button className="accordion-button" onClick={() => setOpenIndex(openIndex === i ? -1 : i)}>
                                <span>{item.q}</span>
                                <i className={`bi ${openIndex === i ? 'bi-dash' : 'bi-plus'} text-lg`}></i>
                            </button>
                            {openIndex === i && (
                                <div className="accordion-body text-body text-sm leading-relaxed">
                                    {item.a}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div></section>
    );
}
