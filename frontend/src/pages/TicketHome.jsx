import { Link } from 'react-router';
import { useTranslation } from 'react-i18next';
export default function TicketHome() {
    const { t } = useTranslation();
    return (
        <section className="py-8"><div className="container">
            <div className="max-w-3xl mx-auto text-center mb-8">
                <h1 className="mb-3">{t('tickets.home_title')}</h1>
                <p className="text-body mb-4">{t('tickets.home_desc')}</p>
                <div className="flex flex-wrap justify-center gap-3">
                    <Link to="/ticket-create" className="btn btn-primary">{t('tickets.create_button')}</Link>
                    <Link to="/ticket-list" className="btn btn-outline-dark">{t('tickets.view_button')}</Link>
                </div>
            </div>
            <div className="grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
                <div className="card p-6 text-center"><h3 className="text-primary mb-1">245</h3><p className="text-sm text-body mb-0">{t('tickets.open_tickets')}</p></div>
                <div className="card p-6 text-center"><h3 className="text-success mb-1">1,890</h3><p className="text-sm text-body mb-0">{t('tickets.resolved_tickets')}</p></div>
                <div className="card p-6 text-center"><h3 className="text-warning mb-1">2h</h3><p className="text-sm text-body mb-0">{t('tickets.avg_response')}</p></div>
            </div>
        </div></section>
    );
}
