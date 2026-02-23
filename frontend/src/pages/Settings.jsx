import { useState } from 'react';
export default function Settings() {
    const [activeTab, setActiveTab] = useState('account');
    const tabs = [
        { id: 'account', label: 'Account', icon: 'bi-person' },
        { id: 'notification', label: 'Notification', icon: 'bi-bell' },
        { id: 'privacy', label: 'Privacy', icon: 'bi-shield-check' },
        { id: 'password', label: 'Password', icon: 'bi-lock' },
        { id: 'delete', label: 'Delete Account', icon: 'bi-trash' },
    ];
    return (
        <section className="py-8"><div className="container">
            <h2 className="mb-6">Settings</h2>
            <div className="grid lg:grid-cols-12 gap-6">
                <div className="lg:col-span-3">
                    <div className="card p-3">
                        <ul className="space-y-1">{tabs.map((t) => (
                            <li key={t.id}><button onClick={() => setActiveTab(t.id)} className={`w-full flex items-center gap-2 px-3 py-2 rounded text-sm text-left transition-colors ${activeTab === t.id ? 'bg-primary/10 text-primary font-medium' : 'text-body hover:bg-gray-50'}`}><i className={`bi ${t.icon}`}></i>{t.label}</button></li>
                        ))}</ul>
                    </div>
                </div>
                <div className="lg:col-span-9">
                    {activeTab === 'account' && (
                        <div className="card p-4 sm:p-6">
                            <h5 className="mb-4">Account Settings</h5>
                            <div className="flex items-center gap-4 mb-6">
                                <img className="w-16 h-16 rounded-full object-cover" src="/assets/images/avatar/01.jpg" alt="" />
                                <div><button className="btn btn-sm btn-primary mr-2">Change Photo</button><button className="btn btn-sm btn-light">Remove</button></div>
                            </div>
                            <div className="grid sm:grid-cols-2 gap-4 mb-4">
                                <div><label className="form-label">First Name</label><input type="text" className="form-control" defaultValue="Lori" /></div>
                                <div><label className="form-label">Last Name</label><input type="text" className="form-control" defaultValue="Ferguson" /></div>
                            </div>
                            <div className="mb-4"><label className="form-label">Email</label><input type="email" className="form-control" defaultValue="lori@example.com" /></div>
                            <div className="mb-4"><label className="form-label">Bio</label><textarea className="form-control" rows="3" defaultValue="Full-stack developer passionate about building web apps."></textarea></div>
                            <div className="mb-4"><label className="form-label">Location</label><input type="text" className="form-control" defaultValue="San Francisco, CA" /></div>
                            <button className="btn btn-primary">Save Changes</button>
                        </div>
                    )}
                    {activeTab === 'notification' && (
                        <div className="card p-4 sm:p-6">
                            <h5 className="mb-4">Notification Preferences</h5>
                            {['Email notifications for new answers', 'Email notifications for new followers', 'Push notifications for mentions', 'Weekly digest email', 'Marketing emails'].map((item, i) => (
                                <div key={i} className="flex items-center justify-between py-3 border-b border-border-color last:border-0">
                                    <span className="text-sm">{item}</span>
                                    <label className="relative inline-flex items-center cursor-pointer">
                                        <input type="checkbox" className="sr-only peer" defaultChecked={i < 3} />
                                        <div className="w-9 h-5 bg-gray-300 peer-checked:bg-primary rounded-full peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all"></div>
                                    </label>
                                </div>
                            ))}
                            <button className="btn btn-primary mt-4">Save Preferences</button>
                        </div>
                    )}
                    {activeTab === 'privacy' && (
                        <div className="card p-4 sm:p-6">
                            <h5 className="mb-4">Privacy Settings</h5>
                            {['Show my profile to public', 'Allow others to follow me', 'Show my questions in search results', 'Allow messages from non-followers'].map((item, i) => (
                                <div key={i} className="flex items-center justify-between py-3 border-b border-border-color last:border-0">
                                    <span className="text-sm">{item}</span>
                                    <label className="relative inline-flex items-center cursor-pointer">
                                        <input type="checkbox" className="sr-only peer" defaultChecked />
                                        <div className="w-9 h-5 bg-gray-300 peer-checked:bg-primary rounded-full peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all"></div>
                                    </label>
                                </div>
                            ))}
                            <button className="btn btn-primary mt-4">Save Settings</button>
                        </div>
                    )}
                    {activeTab === 'password' && (
                        <div className="card p-4 sm:p-6">
                            <h5 className="mb-4">Change Password</h5>
                            <div className="max-w-md">
                                <div className="mb-4"><label className="form-label">Current Password</label><input type="password" className="form-control" /></div>
                                <div className="mb-4"><label className="form-label">New Password</label><input type="password" className="form-control" /></div>
                                <div className="mb-4"><label className="form-label">Confirm New Password</label><input type="password" className="form-control" /></div>
                                <button className="btn btn-primary">Update Password</button>
                            </div>
                        </div>
                    )}
                    {activeTab === 'delete' && (
                        <div className="card p-4 sm:p-6">
                            <h5 className="mb-2 text-danger">Delete Account</h5>
                            <p className="text-body text-sm mb-4">Once you delete your account, there is no going back. This action is permanent.</p>
                            <div className="mb-4"><label className="form-label">Type "DELETE" to confirm</label><input type="text" className="form-control max-w-xs" /></div>
                            <button className="btn bg-danger text-white border-danger hover:bg-red-700">Delete My Account</button>
                        </div>
                    )}
                </div>
            </div>
        </div></section>
    );
}
