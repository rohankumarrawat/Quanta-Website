import { useTranslation } from 'react-i18next';

export default function ContactUs() {
    const { t } = useTranslation();
    return (
        <section className="py-8"><div className="container">
            <div className="max-w-3xl mx-auto text-center mb-8">
                <h2 className="mb-2">{t('contact.title')}</h2>
                <p className="text-body">{t('contact.subtitle')}</p>
            </div>
            <div className="grid lg:grid-cols-12 gap-6 max-w-5xl mx-auto">
                <div className="lg:col-span-5">
                    <div className="card p-6">
                        <h5 className="mb-4">{t('contact.get_in_touch')}</h5>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3"><div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0"><i className="bi bi-geo-alt"></i></div><div><h6 className="mb-0 text-sm">{t('contact.address')}</h6><p className="text-sm text-body mb-0">{t('contact.address_value')}</p></div></li>
                            <li className="flex items-start gap-3"><div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0"><i className="bi bi-envelope"></i></div><div><h6 className="mb-0 text-sm">{t('contact.email')}</h6><p className="text-sm text-body mb-0">{t('contact.email_value')}</p></div></li>
                            <li className="flex items-start gap-3"><div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0"><i className="bi bi-telephone"></i></div><div><h6 className="mb-0 text-sm">{t('contact.phone')}</h6><p className="text-sm text-body mb-0">{t('contact.phone_value')}</p></div></li>
                        </ul>
                    </div>
                </div>
                <div className="lg:col-span-7">
                    <div className="card p-6">
                        <h5 className="mb-4">{t('contact.send_message')}</h5>
                        <form>
                            <div className="grid sm:grid-cols-2 gap-4 mb-4">
                                <div><label className="form-label">{t('contact.first_name')}</label><input type="text" className="form-control" /></div>
                                <div><label className="form-label">{t('contact.last_name')}</label><input type="text" className="form-control" /></div>
                            </div>
                            <div className="mb-4"><label className="form-label">{t('contact.email')}</label><input type="email" className="form-control" /></div>
                            <div className="mb-4"><label className="form-label">{t('contact.subject')}</label><input type="text" className="form-control" /></div>
                            <div className="mb-4"><label className="form-label">{t('contact.message')}</label><textarea className="form-control" rows="4"></textarea></div>
                            <button type="submit" className="btn btn-primary">{t('contact.send_message')}</button>
                        </form>
                    </div>
                </div>
            </div>
        </div></section>
    );
}
