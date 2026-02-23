import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);
    const [profileOpen, setProfileOpen] = useState(false);
    const { isDark, toggleTheme } = useTheme();

    return (
        <header className="sticky top-0 z-50 bg-white border-b border-border-color backdrop-blur-sm">
            <nav className="container">
                <div className="flex items-center justify-between h-16">
                    {/* Left: Hamburger + Nav */}
                    <div className="flex items-center gap-2">
                        <button
                            className="lg:hidden p-2 text-heading hover:text-primary"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            <div className="space-y-1.5">
                                <span className="block w-5 h-0.5 bg-current"></span>
                                <span className="block w-5 h-0.5 bg-current"></span>
                                <span className="block w-5 h-0.5 bg-current"></span>
                            </div>
                        </button>

                        {/* Desktop Nav */}
                        <ul className="hidden lg:flex items-center gap-1">
                            <li>
                                <NavLink to="/" className={({ isActive }) => `flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive ? 'text-primary' : 'text-body hover:text-primary'}`}>
                                    <i className="bi bi-house-door-fill text-lg"></i>
                                    <span>Home</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/profile/followers" className={({ isActive }) => `flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive ? 'text-primary' : 'text-body hover:text-primary'}`}>
                                    <i className="bi bi-receipt-cutoff text-lg"></i>
                                    <span>Follow</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/ask-question" className={({ isActive }) => `flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive ? 'text-primary' : 'text-body hover:text-primary'}`}>
                                    <i className="bi bi-patch-question-fill text-lg"></i>
                                    <span>Ask Questions</span>
                                </NavLink>
                            </li>
                            <li>
                                <button className="flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium text-body hover:text-primary transition-colors">
                                    <i className="bi bi-globe2 text-lg"></i>
                                    <span>Language</span>
                                </button>
                            </li>
                            <li>
                                <NavLink to="/notifications" className={({ isActive }) => `flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors relative ${isActive ? 'text-primary' : 'text-body hover:text-primary'}`}>
                                    <span className="relative">
                                        <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-danger rounded-full animate-pulse"></span>
                                        <i className="bi bi-bell-fill text-lg"></i>
                                    </span>
                                    <span>Notifications</span>
                                </NavLink>
                            </li>
                        </ul>
                    </div>

                    {/* Center: Logo */}
                    <Link to="/" className="flex items-center">
                        <img className={`h-8 ${isDark ? 'hidden' : ''}`} src="/assets/images/logo.svg" alt="Quanta" />
                        <img className={`h-8 ${isDark ? '' : 'hidden'}`} src="/assets/images/logo-light.svg" alt="Quanta" />
                    </Link>

                    {/* Right: Theme toggle, Search, Profile, Ask Button */}
                    <div className="flex items-center gap-2">
                        {/* Dark Mode Toggle */}
                        <button
                            className="p-2 text-body hover:text-primary transition-colors"
                            onClick={toggleTheme}
                            aria-label="Toggle dark mode"
                        >
                            {isDark ? (
                                <i className="bi bi-sun-fill text-lg text-warning"></i>
                            ) : (
                                <i className="bi bi-moon-stars-fill text-lg"></i>
                            )}
                        </button>

                        {/* Search */}
                        <div className="relative">
                            <button
                                className="p-2 text-body hover:text-primary transition-colors"
                                onClick={() => setSearchOpen(!searchOpen)}
                            >
                                <i className="bi bi-search text-lg"></i>
                            </button>
                            {searchOpen && (
                                <div className="absolute right-0 top-full mt-2 w-72 bg-white border border-border-color rounded-lg shadow-lg p-3 z-50">
                                    <form className="flex">
                                        <input
                                            type="search"
                                            className="form-control rounded-r-none border-primary"
                                            placeholder="Search..."
                                            autoFocus
                                        />
                                        <button className="btn btn-primary rounded-l-none">Search</button>
                                    </form>
                                </div>
                            )}
                        </div>

                        {/* Profile Dropdown */}
                        <div className="relative">
                            <button
                                className="w-9 h-9 rounded-full overflow-hidden"
                                onClick={() => setProfileOpen(!profileOpen)}
                            >
                                <img className="w-full h-full object-cover" src="/assets/images/avatar/01.jpg" alt="avatar" />
                            </button>
                            {profileOpen && (
                                <>
                                    <div className="fixed inset-0 z-40" onClick={() => setProfileOpen(false)}></div>
                                    <div className="absolute right-0 top-full mt-2 w-64 bg-white border border-border-color rounded-lg shadow-lg z-50 py-3">
                                        <div className="px-4 pb-3 border-b border-border-color">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 rounded-full overflow-hidden">
                                                    <img className="w-full h-full object-cover" src="/assets/images/avatar/01.jpg" alt="avatar" />
                                                </div>
                                                <div>
                                                    <Link to="/profile" className="font-semibold text-heading text-sm" onClick={() => setProfileOpen(false)}>Lori Ferguson</Link>
                                                    <p className="text-xs text-body">example@gmail.com</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="py-2">
                                            <Link to="/profile" className="dropdown-item flex items-center gap-2" onClick={() => setProfileOpen(false)}>
                                                <i className="bi bi-person"></i> Edit Profile
                                            </Link>
                                            <Link to="/settings" className="dropdown-item flex items-center gap-2" onClick={() => setProfileOpen(false)}>
                                                <i className="bi bi-gear"></i> Account Settings
                                            </Link>
                                            <Link to="/help-center" className="dropdown-item flex items-center gap-2" onClick={() => setProfileOpen(false)}>
                                                <i className="bi bi-info-circle"></i> Help
                                            </Link>
                                            <Link to="/signin" className="dropdown-item flex items-center gap-2 hover:bg-danger/10 hover:text-danger" onClick={() => setProfileOpen(false)}>
                                                <i className="bi bi-power"></i> Sign Out
                                            </Link>
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>

                        {/* Ask Question Button */}
                        <Link to="/ask-question" className="hidden md:inline-flex btn btn-sm btn-primary ml-2">
                            Ask Question
                        </Link>
                    </div>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="lg:hidden border-t border-border-color py-3">
                        <ul className="space-y-1">
                            <li>
                                <NavLink to="/" className={({ isActive }) => `flex items-center gap-3 px-3 py-2 rounded-md text-sm ${isActive ? 'text-primary bg-primary/5' : 'text-body hover:text-primary'}`} onClick={() => setMobileMenuOpen(false)}>
                                    <i className="bi bi-house-door-fill"></i> Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/profile/followers" className={({ isActive }) => `flex items-center gap-3 px-3 py-2 rounded-md text-sm ${isActive ? 'text-primary bg-primary/5' : 'text-body hover:text-primary'}`} onClick={() => setMobileMenuOpen(false)}>
                                    <i className="bi bi-receipt-cutoff"></i> Follow
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/ask-question" className={({ isActive }) => `flex items-center gap-3 px-3 py-2 rounded-md text-sm ${isActive ? 'text-primary bg-primary/5' : 'text-body hover:text-primary'}`} onClick={() => setMobileMenuOpen(false)}>
                                    <i className="bi bi-patch-question-fill"></i> Ask Questions
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/notifications" className={({ isActive }) => `flex items-center gap-3 px-3 py-2 rounded-md text-sm ${isActive ? 'text-primary bg-primary/5' : 'text-body hover:text-primary'}`} onClick={() => setMobileMenuOpen(false)}>
                                    <i className="bi bi-bell-fill"></i> Notifications
                                </NavLink>
                            </li>
                            <li>
                                <button onClick={toggleTheme} className="flex items-center gap-3 px-3 py-2 rounded-md text-sm text-body hover:text-primary w-full">
                                    <i className={`bi ${isDark ? 'bi-sun-fill' : 'bi-moon-stars-fill'}`}></i> {isDark ? 'Light Mode' : 'Dark Mode'}
                                </button>
                            </li>
                        </ul>
                    </div>
                )}
            </nav>
        </header>
    );
}
