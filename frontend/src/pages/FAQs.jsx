import { useState } from 'react';
const faqData = [
    { q: 'How do I create an account?', a: 'Click on the Sign Up button and fill in your details. You can also sign up using Google or Facebook.' },
    { q: 'How do I ask a question?', a: 'Click the "Ask Question" button, enter your question title and description, select a category, and submit.' },
    { q: 'How does the voting system work?', a: 'Users can upvote or downvote questions and answers. The best answers are automatically sorted by votes.' },
    { q: 'Can I edit my question after posting?', a: 'Yes, you can edit your questions and answers at any time from your profile page.' },
    { q: 'How do I earn badges?', a: 'Badges are earned through community participation - asking questions, providing answers, and receiving votes.' },
    { q: 'Is my personal information safe?', a: 'We use industry-standard encryption and security practices to protect your personal information.' },
    { q: 'How do I report inappropriate content?', a: 'Click the flag icon on any question or answer to report it to our moderation team.' },
    { q: 'Can I delete my account?', a: 'Yes, you can delete your account from the Settings page. Note that this action is irreversible.' },
];
export default function FAQs() {
    const [openIndex, setOpenIndex] = useState(0);
    return (
        <section className="py-8"><div className="container">
            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-8"><h2 className="mb-2">Frequently Asked Questions</h2><p className="text-body">Find answers to the most common questions about our platform.</p></div>
                <div className="space-y-2">
                    {faqData.map((item, i) => (
                        <div key={i} className="card overflow-hidden">
                            <button className="accordion-button" onClick={() => setOpenIndex(openIndex === i ? -1 : i)}>
                                <span>{item.q}</span>
                                <i className={`bi ${openIndex === i ? 'bi-dash' : 'bi-plus'} text-lg`}></i>
                            </button>
                            {openIndex === i && <div className="accordion-body text-body text-sm leading-relaxed">{item.a}</div>}
                        </div>
                    ))}
                </div>
            </div>
        </div></section>
    );
}
