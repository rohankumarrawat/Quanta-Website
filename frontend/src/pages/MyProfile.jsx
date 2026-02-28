<<<<<<< HEAD
import { Link, NavLink, Outlet, useLocation } from 'react-router';
const tabs = [
    { to: '/profile', label: 'About', icon: 'bi-person' },
    { to: '/profile/posts', label: 'Posts', icon: 'bi-file-earmark-text' },
    { to: '/profile/questions', label: 'Questions', icon: 'bi-patch-question' },
    { to: '/profile/followers', label: 'Followers', icon: 'bi-people' },
    { to: '/profile/achievements', label: 'Achievements', icon: 'bi-trophy' },
];
export default function MyProfile() {
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
                            <p className="text-body mb-0">@loriferguson • Joined 2 years ago</p>
                        </div>
                        <div className="flex gap-2">
                            <button className="btn btn-primary btn-sm">Follow</button>
                            <Link to="/settings" className="btn btn-light btn-sm"><i className="bi bi-gear"></i></Link>
                        </div>
                    </div>
                </div>
                {/* Tabs */}
                <div className="border-t border-border-color px-4 sm:px-6 overflow-x-auto">
                    <div className="flex gap-1">{tabs.map((t) => (
                        <NavLink key={t.to} to={t.to} end={t.to === '/profile'} className={({ isActive }) => `flex items-center gap-2 px-4 py-3 text-sm font-medium border-b-2 -mb-[1px] whitespace-nowrap transition-colors ${isActive ? 'text-primary border-primary' : 'text-body border-transparent hover:text-primary'}`}>
                            <i className={`bi ${t.icon}`}></i>{t.label}
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
    return (
        <div className="grid lg:grid-cols-12 gap-6">
            <div className="lg:col-span-8">
                <div className="card p-4 sm:p-6">
                    <h5 className="mb-3">About</h5>
                    <p className="text-body leading-relaxed mb-4">Full-stack developer passionate about building web applications and contributing to open source. I specialize in React, Node.js, and cloud technologies.</p>
                    <div className="grid sm:grid-cols-2 gap-4">
                        <div><h6 className="text-sm mb-2">Skills</h6><div className="flex flex-wrap gap-2">{['React', 'Node.js', 'TypeScript', 'Python', 'AWS', 'Docker'].map((s) => (<span key={s} className="bg-gray-100 text-body text-xs px-3 py-1 rounded-full">{s}</span>))}</div></div>
                        <div><h6 className="text-sm mb-2">Interests</h6><div className="flex flex-wrap gap-2">{['AI', 'Web Dev', 'Cloud', 'Open Source'].map((s) => (<span key={s} className="bg-primary/10 text-primary text-xs px-3 py-1 rounded-full">{s}</span>))}</div></div>
                    </div>
                </div>
            </div>
            <div className="lg:col-span-4">
                <div className="card p-4 mb-4">
                    <h6 className="mb-3">Info</h6>
                    <ul className="space-y-2 text-sm text-body">
                        <li className="flex items-center gap-2"><i className="bi bi-geo-alt"></i>San Francisco, CA</li>
                        <li className="flex items-center gap-2"><i className="bi bi-briefcase"></i>Senior Developer at TechCo</li>
                        <li className="flex items-center gap-2"><i className="bi bi-link-45deg"></i><a href="#">loriferguson.dev</a></li>
                        <li className="flex items-center gap-2"><i className="bi bi-calendar"></i>Joined: Jan 2023</li>
                    </ul>
                </div>
                <div className="card p-4">
                    <h6 className="mb-3">Stats</h6>
                    <div className="grid grid-cols-2 gap-3">
                        <div className="text-center"><h5 className="text-primary mb-0">128</h5><span className="text-xs text-body">Questions</span></div>
                        <div className="text-center"><h5 className="text-success mb-0">456</h5><span className="text-xs text-body">Answers</span></div>
                        <div className="text-center"><h5 className="text-warning mb-0">2.3K</h5><span className="text-xs text-body">Followers</span></div>
                        <div className="text-center"><h5 className="text-info mb-0">15</h5><span className="text-xs text-body">Badges</span></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
=======
import { Link, NavLink, Outlet, useLocation } from 'react-router';
const tabs = [
    { to: '/profile', label: 'About', icon: 'bi-person' },
    { to: '/profile/posts', label: 'Posts', icon: 'bi-file-earmark-text' },
    { to: '/profile/questions', label: 'Questions', icon: 'bi-patch-question' },
    { to: '/profile/followers', label: 'Followers', icon: 'bi-people' },
    { to: '/profile/achievements', label: 'Achievements', icon: 'bi-trophy' },
];
export default function MyProfile() {
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
                            <p className="text-body mb-0">@loriferguson • Joined 2 years ago</p>
                        </div>
                        <div className="flex gap-2">
                            <button className="btn btn-primary btn-sm">Follow</button>
                            <Link to="/settings" className="btn btn-light btn-sm"><i className="bi bi-gear"></i></Link>
                        </div>
                    </div>
                </div>
                {/* Tabs */}
                <div className="border-t border-border-color px-4 sm:px-6 overflow-x-auto">
                    <div className="flex gap-1">{tabs.map((t) => (
                        <NavLink key={t.to} to={t.to} end={t.to === '/profile'} className={({ isActive }) => `flex items-center gap-2 px-4 py-3 text-sm font-medium border-b-2 -mb-[1px] whitespace-nowrap transition-colors ${isActive ? 'text-primary border-primary' : 'text-body border-transparent hover:text-primary'}`}>
                            <i className={`bi ${t.icon}`}></i>{t.label}
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
    return (
        <div className="grid lg:grid-cols-12 gap-6">
            <div className="lg:col-span-8">
                <div className="card p-4 sm:p-6">
                    <h5 className="mb-3">About</h5>
                    <p className="text-body leading-relaxed mb-4">Full-stack developer passionate about building web applications and contributing to open source. I specialize in React, Node.js, and cloud technologies.</p>
                    <div className="grid sm:grid-cols-2 gap-4">
                        <div><h6 className="text-sm mb-2">Skills</h6><div className="flex flex-wrap gap-2">{['React', 'Node.js', 'TypeScript', 'Python', 'AWS', 'Docker'].map((s) => (<span key={s} className="bg-gray-100 text-body text-xs px-3 py-1 rounded-full">{s}</span>))}</div></div>
                        <div><h6 className="text-sm mb-2">Interests</h6><div className="flex flex-wrap gap-2">{['AI', 'Web Dev', 'Cloud', 'Open Source'].map((s) => (<span key={s} className="bg-primary/10 text-primary text-xs px-3 py-1 rounded-full">{s}</span>))}</div></div>
                    </div>
                </div>
            </div>
            <div className="lg:col-span-4">
                <div className="card p-4 mb-4">
                    <h6 className="mb-3">Info</h6>
                    <ul className="space-y-2 text-sm text-body">
                        <li className="flex items-center gap-2"><i className="bi bi-geo-alt"></i>San Francisco, CA</li>
                        <li className="flex items-center gap-2"><i className="bi bi-briefcase"></i>Senior Developer at TechCo</li>
                        <li className="flex items-center gap-2"><i className="bi bi-link-45deg"></i><a href="#">loriferguson.dev</a></li>
                        <li className="flex items-center gap-2"><i className="bi bi-calendar"></i>Joined: Jan 2023</li>
                    </ul>
                </div>
                <div className="card p-4">
                    <h6 className="mb-3">Stats</h6>
                    <div className="grid grid-cols-2 gap-3">
                        <div className="text-center"><h5 className="text-primary mb-0">128</h5><span className="text-xs text-body">Questions</span></div>
                        <div className="text-center"><h5 className="text-success mb-0">456</h5><span className="text-xs text-body">Answers</span></div>
                        <div className="text-center"><h5 className="text-warning mb-0">2.3K</h5><span className="text-xs text-body">Followers</span></div>
                        <div className="text-center"><h5 className="text-info mb-0">15</h5><span className="text-xs text-body">Badges</span></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
>>>>>>> b51d19062c6ff9441585b362d5db7e3f2b76ab0e
