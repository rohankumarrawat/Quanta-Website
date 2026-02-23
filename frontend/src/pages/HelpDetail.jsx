import { Link } from 'react-router-dom';
export default function HelpDetail() {
    const articles = ['How to create an account', 'Setting up your profile', 'Asking your first question', 'Understanding the voting system', 'How to earn badges', 'Community guidelines overview'];
    return (
        <section className="py-8">
            <div className="container">
                <div className="grid lg:grid-cols-12 gap-6">
                    <div className="lg:col-span-4">
                        <div className="card p-4">
                            <h6 className="mb-3">Getting Started</h6>
                            <ul className="space-y-1">
                                {articles.map((a, i) => (
                                    <li key={i}><Link to="/help-detail" className={`block py-2 px-3 rounded text-sm ${i === 0 ? 'bg-primary/10 text-primary font-medium' : 'text-body hover:bg-gray-50 hover:text-primary'}`}>{a}</Link></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="lg:col-span-8">
                        <nav className="text-sm mb-4"><Link to="/help-center" className="text-body hover:text-primary">Help Center</Link> <span className="mx-2">/</span> <Link to="/help-detail" className="text-body hover:text-primary">Getting Started</Link> <span className="mx-2">/</span> <span className="text-heading">How to create an account</span></nav>
                        <div className="card p-4 sm:p-6">
                            <h3 className="mb-4">How to create an account</h3>
                            <p className="text-body leading-relaxed mb-4">Creating an account on our platform is quick and easy. Follow these simple steps to get started:</p>
                            <h5 className="mb-2">Step 1: Visit the Sign Up Page</h5>
                            <p className="text-body leading-relaxed mb-4">Click the "Sign Up" button in the top right corner of the page, or navigate directly to the registration page.</p>
                            <h5 className="mb-2">Step 2: Fill in Your Details</h5>
                            <p className="text-body leading-relaxed mb-4">Enter your email address and create a strong password. You can also sign up using your Google or Facebook account for faster registration.</p>
                            <h5 className="mb-2">Step 3: Verify Your Email</h5>
                            <p className="text-body leading-relaxed mb-4">Check your inbox for a verification email and click the confirmation link to activate your account.</p>
                            <h5 className="mb-2">Step 4: Complete Your Profile</h5>
                            <p className="text-body leading-relaxed mb-4">Add your profile picture, bio, and areas of expertise to help the community get to know you.</p>
                            <div className="flex items-center justify-between mt-6 pt-4 border-t border-border-color">
                                <p className="text-sm text-body mb-0">Was this article helpful?</p>
                                <div className="flex gap-2"><button className="btn btn-sm btn-outline-dark"><i className="bi bi-hand-thumbs-up mr-1"></i>Yes</button><button className="btn btn-sm btn-outline-dark"><i className="bi bi-hand-thumbs-down mr-1"></i>No</button></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
