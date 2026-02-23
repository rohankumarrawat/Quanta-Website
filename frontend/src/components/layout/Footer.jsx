import { Link } from 'react-router-dom';

export default function Footer() {
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
                                    <li><Link to="/blog" className="text-gray-400 hover:text-white text-sm transition-colors">News and Blogs</Link></li>
                                    <li><Link to="/about" className="text-gray-400 hover:text-white text-sm transition-colors">About</Link></li>
                                    <li><Link to="/contact" className="text-gray-400 hover:text-white text-sm transition-colors">Contact us</Link></li>
                                    <li><Link to="/communities" className="text-gray-400 hover:text-white text-sm transition-colors">Community</Link></li>
                                </ul>
                            </div>
                            <div>
                                <ul className="space-y-2">
                                    <li><Link to="/home-v1" className="text-gray-400 hover:text-white text-sm transition-colors">Questions</Link></li>
                                    <li><Link to="/forum" className="text-gray-400 hover:text-white text-sm transition-colors">Forum</Link></li>
                                    <li><Link to="/help-center" className="text-gray-400 hover:text-white text-sm transition-colors">Help center</Link></li>
                                    <li><Link to="/tickets" className="text-gray-400 hover:text-white text-sm transition-colors">Support ticket</Link></li>
                                    <li><Link to="/discussion" className="text-gray-400 hover:text-white text-sm transition-colors">Discussion</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Newsletter */}
                    <div className="lg:col-span-5">
                        <h5 className="text-white mb-2">Sign up For All Latest Update</h5>
                        <p className="text-gray-400 text-sm mb-4">Receive all notifications on our new releases.</p>
                        <form className="flex">
                            <input
                                type="email"
                                className="flex-1 px-4 py-2.5 bg-gray-800 border border-gray-700 rounded-l-md text-white placeholder-gray-400 text-sm focus:outline-none focus:border-primary"
                                placeholder="Your email address"
                            />
                            <button type="button" className="btn btn-white rounded-l-none">Subscribe!</button>
                        </form>
                    </div>
                </div>

                {/* Divider */}
                <hr className="border-gray-700 my-6" />

                {/* Bottom Footer */}
                <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
                    <p className="text-gray-400 text-sm">
                        Copyrights <Link to="/" className="text-gray-400 hover:text-white">©2025 Quanta</Link>. All rights reserved.
                    </p>
                    <ul className="flex items-center gap-4 text-sm">
                        <li><Link to="/terms" className="text-gray-400 hover:text-white transition-colors">Terms of use</Link></li>
                        <li><Link to="/terms" className="text-gray-400 hover:text-white transition-colors">Privacy policy</Link></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}
