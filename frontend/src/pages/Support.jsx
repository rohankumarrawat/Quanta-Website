import { Link } from 'react-router';
import { useTranslation } from 'react-i18next';

export default function Support() {
    const { t } = useTranslation();
    return (
        <section className="py-8"><div className="container">
            <div className="max-w-3xl mx-auto text-center mb-8">
                <h2 className="mb-2">{t('support.heading')}</h2>
                <p className="text-body">{t('support.subtext')}</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
                <div className="card p-6 text-center">
                    <div className="w-14 h-14 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-3"><i className="bi bi-headset text-2xl"></i></div>
                    <h6 className="mb-2">{t('support.live_chat')}</h6>
                    <p className="text-sm text-body mb-3">{t('support.live_chat_desc')}</p>
                    <button className="btn btn-sm btn-primary">{t('support.start_chat')}</button>
                </div>
                <div className="card p-6 text-center">
                    <div className="w-14 h-14 rounded-full bg-success/10 text-success flex items-center justify-center mx-auto mb-3"><i className="bi bi-envelope text-2xl"></i></div>
                    <h6 className="mb-2">{t('support.email_support')}</h6>
                    <p className="text-sm text-body mb-3">{t('support.email_support_desc')}</p>
                    <a href="mailto:support@quanta.com" className="btn btn-sm btn-primary">{t('support.send_email')}</a>
                </div>
                <div className="card p-6 text-center">
                    <div className="w-14 h-14 rounded-full bg-warning/10 text-warning flex items-center justify-center mx-auto mb-3"><i className="bi bi-ticket-perforated text-2xl"></i></div>
                    <h6 className="mb-2">{t('support.submit_ticket')}</h6>
                    <p className="text-sm text-body mb-3">{t('support.submit_ticket_desc')}</p>
                    <Link to="/ticket-create" className="btn btn-sm btn-primary">{t('support.create_ticket')}</Link>
                </div>
            </div>
        </div></section>
    );
}
