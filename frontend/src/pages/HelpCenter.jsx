import { Link } from 'react-router-dom';
const helpCategories = [
    { icon: 'bi-rocket-takeoff', title: 'Getting Started', desc: 'Learn the basics and get up to speed quickly.', articles: 12 },
    { icon: 'bi-person-circle', title: 'Account & Profile', desc: 'Manage your account settings and profile.', articles: 8 },
    { icon: 'bi-shield-check', title: 'Security & Privacy', desc: 'Keep your account safe and manage privacy.', articles: 15 },
    { icon: 'bi-credit-card', title: 'Billing & Plans', desc: 'Questions about pricing, billing and plans.', articles: 6 },
    { icon: 'bi-chat-dots', title: 'Community Guidelines', desc: 'Rules and guidelines for the community.', articles: 10 },
    { icon: 'bi-tools', title: 'Troubleshooting', desc: 'Fix common issues and technical problems.', articles: 20 },
];
export default function HelpCenter() {
    return (
        <section className="py-8">
            <div className="container">
                <div className="max-w-3xl mx-auto text-center mb-8">
                    <h1 className="mb-3">How can we help you?</h1>
                    <form className="bg-white rounded-lg p-2 shadow-sm">
                        <div className="flex">
                            <input className="flex-1 px-4 py-3 border-0 bg-transparent focus:outline-none" type="search" placeholder="Search for help articles..." />
                            <button type="button" className="btn btn-primary btn-lg"><i className="fas fa-search"></i></button>
                        </div>
                    </form>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                    {helpCategories.map((cat, i) => (
                        <Link key={i} to="/help-detail" className="card p-6 text-center hover:shadow-md transition-shadow group">
                            <div className="w-14 h-14 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-3">
                                <i className={`bi ${cat.icon} text-2xl`}></i>
                            </div>
                            <h6 className="mb-2 group-hover:text-primary transition-colors">{cat.title}</h6>
                            <p className="text-sm text-body mb-2">{cat.desc}</p>
                            <span className="text-xs text-primary">{cat.articles} articles</span>
                        </Link>
                    ))}
                </div>
                <div className="bg-white p-6 sm:p-8 rounded-lg text-center shadow-sm">
                    <h3 className="mb-2">Still need help?</h3>
                    <p className="text-body mb-4">Can't find what you're looking for? Contact our support team.</p>
                    <Link to="/contact" className="btn btn-primary">Contact Support</Link>
                </div>
            </div>
        </section>
    );
}
