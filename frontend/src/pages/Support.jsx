import { Link } from 'react-router-dom';
export default function Support() {
    return (
        <section className="py-8"><div className="container">
            <div className="max-w-3xl mx-auto text-center mb-8">
                <h2 className="mb-2">Support</h2>
                <p className="text-body">We're here to help. Choose the option that works best for you.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
                <div className="card p-6 text-center">
                    <div className="w-14 h-14 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-3"><i className="bi bi-headset text-2xl"></i></div>
                    <h6 className="mb-2">Live Chat</h6>
                    <p className="text-sm text-body mb-3">Chat with our support team in real-time.</p>
                    <button className="btn btn-sm btn-primary">Start Chat</button>
                </div>
                <div className="card p-6 text-center">
                    <div className="w-14 h-14 rounded-full bg-success/10 text-success flex items-center justify-center mx-auto mb-3"><i className="bi bi-envelope text-2xl"></i></div>
                    <h6 className="mb-2">Email Support</h6>
                    <p className="text-sm text-body mb-3">Send us an email and we'll reply within 24 hours.</p>
                    <a href="mailto:support@quanta.com" className="btn btn-sm btn-primary">Send Email</a>
                </div>
                <div className="card p-6 text-center">
                    <div className="w-14 h-14 rounded-full bg-warning/10 text-warning flex items-center justify-center mx-auto mb-3"><i className="bi bi-ticket-perforated text-2xl"></i></div>
                    <h6 className="mb-2">Submit a Ticket</h6>
                    <p className="text-sm text-body mb-3">Create a support ticket for detailed assistance.</p>
                    <Link to="/ticket-create" className="btn btn-sm btn-primary">Create Ticket</Link>
                </div>
            </div>
        </div></section>
    );
}
