
import { Link } from 'react-router';
import { useTranslation } from 'react-i18next';

export default function TicketCreate() {
    const { t } = useTranslation();

    return (
        <section className="py-8"><div className="container">
            <div className="max-w-3xl mx-auto">
                <h2 className="mb-2">{t('tickets.create_heading')}</h2>
                <p className="text-body mb-6">{t('tickets.create_desc')}</p>
                <div className="card p-4 sm:p-6">
                    <form>
                        <div className="mb-4"><label className="form-label">{t('tickets.subject_label')}</label><input type="text" className="form-control" placeholder={t('tickets.subject_placeholder')} /></div>
                        <div className="grid sm:grid-cols-2 gap-4 mb-4">
                            <div><label className="form-label">{t('tickets.category_label')}</label><select className="form-select"><option>{t('tickets.cat_general')}</option><option>{t('tickets.cat_technical')}</option><option>{t('tickets.cat_billing')}</option><option>{t('tickets.cat_account')}</option><option>{t('tickets.cat_feature')}</option></select></div>
                            <div><label className="form-label">{t('tickets.priority_label')}</label><select className="form-select"><option>{t('tickets.priority_low')}</option><option>{t('tickets.priority_medium')}</option><option>{t('tickets.priority_high')}</option><option>{t('tickets.priority_critical')}</option></select></div>
                        </div>
                        <div className="mb-4"><label className="form-label">{t('tickets.description_label')}</label><textarea className="form-control" rows="6" placeholder={t('tickets.description_placeholder')}></textarea></div>
                        <div className="mb-4"><label className="form-label">{t('tickets.attachments_label')}</label><input type="file" className="form-control" multiple /></div>
                        <div className="flex gap-3"><button type="submit" className="btn btn-primary">{t('tickets.submit_ticket')}</button><Link to="/ticket-list" className="btn btn-light">{t('tickets.cancel')}</Link></div>
                    </form>
                </div>
            </div>
        </div></section>
    );
}