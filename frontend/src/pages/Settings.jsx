import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function Settings() {
    const { t } = useTranslation();
    const [activeTab, setActiveTab] = useState('account');
    const tabs = t('settings.tabs', { returnObjects: true });
    const tabOrder = ['account', 'notification', 'privacy', 'password', 'delete'];
    const tabIcons = { account: 'bi-person', notification: 'bi-bell', privacy: 'bi-shield-check', password: 'bi-lock', delete: 'bi-trash' };

    return (
        <section className="py-8"><div className="container">
            <h2 className="mb-6">{t('settings.title')}</h2>
            <div className="grid lg:grid-cols-12 gap-6">
                <div className="lg:col-span-3">
                    <div className="card p-3">
                        <ul className="space-y-1">
                            {tabOrder.map((tabKey) => (
                                <li key={tabKey}>
                                    <button
                                        onClick={() => setActiveTab(tabKey)}
                                        className={`w-full flex items-center gap-2 px-3 py-2 rounded text-sm text-left transition-colors ${
                                            activeTab === tabKey
                                                ? 'bg-primary/10 text-primary font-medium'
                                                : 'text-body hover:bg-gray-50'
                                        }`}
                                    >
                                        <i className={`bi ${tabIcons[tabKey]}`}></i>
                                        {tabs[tabKey]}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="lg:col-span-9">
                    {activeTab === 'account' && (
                        <div className="card p-4 sm:p-6">
                            <h5 className="mb-4">{t('settings.account_heading')}</h5>
                            <div className="flex items-center gap-4 mb-6">
                                <img className="w-16 h-16 rounded-full object-cover" src="/assets/images/avatar/01.jpg" alt="" />
                                <div>
                                    <button className="btn btn-sm btn-primary mr-2">{t('settings.change_photo')}</button>
                                    <button className="btn btn-sm btn-light">{t('settings.remove_photo')}</button>
                                </div>
                            </div>
                            <div className="grid sm:grid-cols-2 gap-4 mb-4">
                                <div>
                                    <label className="form-label">{t('settings.first_name')}</label>
                                    <input type="text" className="form-control" defaultValue={t('settings.sample_first_name')} />
                                </div>
                                <div>
                                    <label className="form-label">{t('settings.last_name')}</label>
                                    <input type="text" className="form-control" defaultValue={t('settings.sample_last_name')} />
                                </div>
                            </div>
                            <div className="mb-4">
                                <label className="form-label">{t('settings.email_label')}</label>
                                <input type="email" className="form-control" defaultValue={t('settings.sample_email')} />
                            </div>
                            <div className="mb-4">
                                <label className="form-label">{t('settings.bio')}</label>
                                <textarea className="form-control" rows="3" defaultValue={t('settings.sample_bio')}></textarea>
                            </div>
                            <div className="mb-4">
                                <label className="form-label">{t('settings.location')}</label>
                                <input type="text" className="form-control" defaultValue={t('settings.sample_location')} />
                            </div>
                            <button className="btn btn-primary">{t('settings.save_changes')}</button>
                        </div>
                    )}
                    {activeTab === 'notification' && (
                        <div className="card p-4 sm:p-6">
                            <h5 className="mb-4">{t('settings.notification_heading')}</h5>
                            {t('settings.notification_items', { returnObjects: true }).map((item, i) => (
                                <div key={i} className="flex items-center justify-between py-3 border-b border-border-color last:border-0">
                                    <span className="text-sm">{item}</span>
                                    <label className="relative inline-flex items-center cursor-pointer">
                                        <input type="checkbox" className="sr-only peer" defaultChecked={i < 3} />
                                        <div className="w-9 h-5 bg-gray-300 peer-checked:bg-primary rounded-full peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all"></div>
                                    </label>
                                </div>
                            ))}
                            <button className="btn btn-primary mt-4">{t('settings.save_preferences')}</button>
                        </div>
                    )}
                    {activeTab === 'privacy' && (
                        <div className="card p-4 sm:p-6">
                            <h5 className="mb-4">{t('settings.privacy_heading')}</h5>
                            {t('settings.privacy_items', { returnObjects: true }).map((item, i) => (
                                <div key={i} className="flex items-center justify-between py-3 border-b border-border-color last:border-0">
                                    <span className="text-sm">{item}</span>
                                    <label className="relative inline-flex items-center cursor-pointer">
                                        <input type="checkbox" className="sr-only peer" defaultChecked />
                                        <div className="w-9 h-5 bg-gray-300 peer-checked:bg-primary rounded-full peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all"></div>
                                    </label>
                                </div>
                            ))}
                            <button className="btn btn-primary mt-4">{t('settings.save_settings')}</button>
                        </div>
                    )}
                    {activeTab === 'password' && (
                        <div className="card p-4 sm:p-6">
                            <h5 className="mb-4">{t('settings.password_heading')}</h5>
                            <div className="max-w-md">
                                <div className="mb-4">
                                    <label className="form-label">{t('settings.current_password')}</label>
                                    <input type="password" className="form-control" />
                                </div>
                                <div className="mb-4">
                                    <label className="form-label">{t('settings.new_password')}</label>
                                    <input type="password" className="form-control" />
                                </div>
                                <div className="mb-4">
                                    <label className="form-label">{t('settings.confirm_new_password')}</label>
                                    <input type="password" className="form-control" />
                                </div>
                                <button className="btn btn-primary">{t('settings.update_password')}</button>
                            </div>
                        </div>
                    )}
                    {activeTab === 'delete' && (
                        <div className="card p-4 sm:p-6">
                            <h5 className="mb-2 text-danger">{t('settings.delete_heading')}</h5>
                            <p className="text-body text-sm mb-4">{t('settings.delete_warning')}</p>
                            <div className="mb-4">
                                <label className="form-label">{t('settings.type_delete_label')}</label>
                                <input type="text" className="form-control max-w-xs" />
                            </div>
                            <button className="btn bg-danger text-white border-danger hover:bg-red-700">{t('settings.delete_account')}</button>
                        </div>
                    )}
                </div>
            </div>
        </div></section>
    );
}
