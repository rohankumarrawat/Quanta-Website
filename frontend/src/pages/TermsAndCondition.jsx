export default function TermsAndCondition() {
    return (
        <section className="py-8"><div className="container">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-3xl font-bold mb-2">Terms and Conditions</h1>
                <p className="text-body text-sm mb-6">Last updated: November 7, 2024</p>
                <div className="card p-4 sm:p-6 space-y-6">
                    {[
                        { title: '1. Acceptance of Terms', content: 'By accessing and using this platform, you accept and agree to be bound by the terms and conditions outlined in this agreement. If you do not agree to these terms, please do not use our services.' },
                        { title: '2. User Accounts', content: 'You are responsible for maintaining the confidentiality of your account credentials. You must provide accurate and complete information when creating an account. You are solely responsible for all activities that occur under your account.' },
                        { title: '3. Content Guidelines', content: 'Users must not post content that is illegal, harmful, threatening, abusive, defamatory, or otherwise objectionable. We reserve the right to remove any content that violates these guidelines without prior notice.' },
                        { title: '4. Intellectual Property', content: 'All content submitted by users remains the intellectual property of the respective authors. By posting content, you grant us a non-exclusive, worldwide license to use, display, and distribute your content on our platform.' },
                        { title: '5. Privacy Policy', content: 'We are committed to protecting your privacy. Our Privacy Policy explains how we collect, use, and safeguard your personal information. By using our services, you consent to our data practices.' },
                        { title: '6. Limitation of Liability', content: 'Our platform is provided on an "as is" basis. We make no warranties, expressed or implied, regarding the reliability, accuracy, or availability of the service. We shall not be liable for any indirect, incidental, or consequential damages.' },
                        { title: '7. Modifications', content: 'We reserve the right to modify these terms at any time. Users will be notified of significant changes. Continued use of the platform after modifications constitutes acceptance of the new terms.' },
                    ].map((s, i) => (
                        <div key={i}><h5>{s.title}</h5><p className="text-body leading-relaxed mb-0">{s.content}</p></div>
                    ))}
                </div>
            </div>
        </div></section>
    );
}
