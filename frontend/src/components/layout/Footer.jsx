import { Link } from 'react-router';
import { useTranslation } from 'react-i18next';

export default function Footer() {
    const { t } = useTranslation();
    return (
        <footer className="bg-dark pt-12 pb-6" data-bs-theme="dark">
            <div className="container">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
                    {/* Link Columns */}
                    <div className="lg:col-span-7">
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                            <div>
                                <ul className="space-y-2">
                                    <li><Link to="/blog" className="text-gray-400 hover:text-white text-sm transition-colors">{t('news_and_blogs')}</Link></li>
                                    <li><Link to="/about" className="text-gray-400 hover:text-white text-sm transition-colors">{t('about')}</Link></li>
                                    <li><Link to="/contact" className="text-gray-400 hover:text-white text-sm transition-colors">{t('contact_us')}</Link></li>
                                    <li><Link to="/communities" className="text-gray-400 hover:text-white text-sm transition-colors">{t('community')}</Link></li>
                                </ul>
                            </div>
                            <div>
                                <ul className="space-y-2">
                                    <li><Link to="/home-v1" className="text-gray-400 hover:text-white text-sm transition-colors">{t('questions')}</Link></li>
                                    <li><Link to="/forum" className="text-gray-400 hover:text-white text-sm transition-colors">{t('forum')}</Link></li>
                                    <li><Link to="/help-center" className="text-gray-400 hover:text-white text-sm transition-colors">{t('help_center')}</Link></li>
                                    <li><Link to="/tickets" className="text-gray-400 hover:text-white text-sm transition-colors">{t('support_ticket')}</Link></li>
                                    <li><Link to="/discussion" className="text-gray-400 hover:text-white text-sm transition-colors">{t('discussion')}</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Newsletter */}
                    <div className="lg:col-span-5">
                        <h5 className="text-white mb-2">{t('sign_up_latest_update')}</h5>
                        <p className="text-gray-400 text-sm mb-4">{t('receive_notifications')}</p>
                        <form className="flex">
                            <input
                                type="email"
                                className="flex-1 px-4 py-2.5 bg-gray-800 border border-gray-700 rounded-l-md text-white placeholder-gray-400 text-sm focus:outline-none focus:border-primary"
                                placeholder={t('your_email_address')}
                            />
                            <button type="button" className="btn btn-white rounded-l-none">{t('subscribe')}</button>
                        </form>
                    </div>
                </div>

                {/* Divider */}
                <hr className="border-gray-700 my-6" />

                {/* Bottom Footer */}
                <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
                    <p className="text-gray-400 text-sm">
                        {t('copyright')} <Link to="/" className="text-gray-400 hover:text-white">©2025 Quanta</Link>. {t('all_rights_reserved')}
                    </p>
                    <ul className="flex items-center gap-4 text-sm">
                        <li><Link to="/terms" className="text-gray-400 hover:text-white transition-colors">{t('terms_of_use') || 'Terms of use'}</Link></li>
                        <li><Link to="/terms" className="text-gray-400 hover:text-white transition-colors">{t('privacy_policy') || 'Privacy policy'}</Link></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}
