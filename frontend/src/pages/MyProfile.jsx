import { Link, NavLink, Outlet, useLocation } from 'react-router';
const tabs = [
    { to: '/profile', key: 'about', icon: 'bi-person' },
    { to: '/profile/posts', key: 'posts', icon: 'bi-file-earmark-text' },
    { to: '/profile/questions', key: 'questions', icon: 'bi-patch-question' },
    { to: '/profile/followers', key: 'followers', icon: 'bi-people' },
    { to: '/profile/achievements', key: 'achievements', icon: 'bi-trophy' },
];
import { useTranslation } from 'react-i18next';

export default function MyProfile() {
    const { t } = useTranslation();
    const location = useLocation();
    const isBase = location.pathname === '/profile';
    return (
        <section className="py-8"><div className="container">
            {/* Profile Header */}
            <div className="card overflow-hidden mb-6">
                <div className="h-36 bg-gradient-to-r from-primary to-primary-700"></div>
                <div className="p-4 sm:p-6">
                    <div className="flex flex-col sm:flex-row sm:items-end gap-4 -mt-16">
                        <img className="w-24 h-24 rounded-xl border-4 border-white object-cover shadow-lg" src="/assets/images/avatar/01.jpg" alt="" />
                        <div className="flex-1">
                            <h3 className="mb-0">Lori Ferguson</h3>
                            <p className="text-body mb-0">@loriferguson • {t('joined_duration')}</p>
                        </div>
                        <div className="flex gap-2">
                            <button className="btn btn-primary btn-sm">{t('profile.follow', 'Follow')}</button>
                            <Link to="/settings" className="btn btn-light btn-sm"><i className="bi bi-gear"></i></Link>
                        </div>
                    </div>
                </div>
                {/* Tabs */}
                <div className="border-t border-border-color px-4 sm:px-6 overflow-x-auto">
                    <div className="flex gap-1">{tabs.map((tab) => (
                        <NavLink key={tab.to} to={tab.to} end={tab.to === '/profile'} className={({ isActive }) => `flex items-center gap-2 px-4 py-3 text-sm font-medium border-b-2 -mb-[1px] whitespace-nowrap transition-colors ${isActive ? 'text-primary border-primary' : 'text-body border-transparent hover:text-primary'}`}>
                            <i className={`bi ${tab.icon}`}></i>{t(`profile.tabs.${tab.key}`)}
                        </NavLink>
                    ))}</div>
                </div>
            </div>
            {/* Tab Content */}
            {isBase ? <ProfileAbout /> : <Outlet />}
        </div></section>
    );
}

function ProfileAbout() {
    const { t } = useTranslation();

    const skills = ['react', 'node', 'typescript', 'python', 'aws', 'docker'];
    const interests = ['ai', 'webdev', 'cloud', 'opensource'];

    return (
        <div className="grid lg:grid-cols-12 gap-6">
            <div className="lg:col-span-8">
                <div className="card p-4 sm:p-6">
                    <h5 className="mb-3">{t('profile.about_heading')}</h5>
                    <p className="text-body leading-relaxed mb-4">
                        {t('profile_description')}
                    </p>
                    <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                            <h6 className="text-sm mb-2">{t('profile.skills')}</h6>
                            <div className="flex flex-wrap gap-2">
                                {skills.map((key) => (
                                    <span key={key} className="bg-gray-100 text-body text-xs px-3 py-1 rounded-full">
                                        {t(`skills_list.${key}`)}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div>
                            <h6 className="text-sm mb-2">{t('profile.interests')}</h6>
                            <div className="flex flex-wrap gap-2">
                                {interests.map((key) => (
                                    <span key={key} className="bg-primary/10 text-primary text-xs px-3 py-1 rounded-full">
                                        {t(`interests_list.${key}`)}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="lg:col-span-4">
                <div className="card p-4 mb-4">
                    <h6 className="mb-3">{t('profile.info')}</h6>
                    <ul className="space-y-2 text-sm text-body">
                        <li className="flex items-center gap-2"><i className="bi bi-geo-alt"></i>{t('location')}</li>
                        <li className="flex items-center gap-2"><i className="bi bi-briefcase"></i>{t('job')}</li>
                        <li className="flex items-center gap-2"><i className="bi bi-link-45deg"></i><a href="#">loriferguson.dev</a></li>
                        <li className="flex items-center gap-2"><i className="bi bi-calendar"></i>{t('joined_on')}</li>
                    </ul>
                </div>
                <div className="card p-4">
                    <h6 className="mb-3">{t('profile.stats_title', 'Stats')}</h6>
                    <div className="grid grid-cols-2 gap-3">
                        <div className="text-center"><h5 className="text-primary mb-0">128</h5><span className="text-xs text-body">{t('profile.stats.questions')}</span></div>
                        <div className="text-center"><h5 className="text-success mb-0">456</h5><span className="text-xs text-body">{t('profile.stats.answers')}</span></div>
                        <div className="text-center"><h5 className="text-warning mb-0">2.3K</h5><span className="text-xs text-body">{t('profile.stats.followers')}</span></div>
                        <div className="text-center"><h5 className="text-info mb-0">15</h5><span className="text-xs text-body">{t('profile.stats.badges')}</span></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
