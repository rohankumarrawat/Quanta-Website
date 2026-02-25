import { Link } from 'react-router';
export default function TicketCreate() {
    return (
        <section className="py-8"><div className="container">
            <div className="max-w-3xl mx-auto">
                <h2 className="mb-2">Create Support Ticket</h2>
                <p className="text-body mb-6">Fill out the form below and our team will get back to you shortly.</p>
                <div className="card p-4 sm:p-6">
                    <form>
                        <div className="mb-4"><label className="form-label">Subject *</label><input type="text" className="form-control" placeholder="Brief description of your issue" /></div>
                        <div className="grid sm:grid-cols-2 gap-4 mb-4">
                            <div><label className="form-label">Category</label><select className="form-select"><option>General</option><option>Technical</option><option>Billing</option><option>Account</option><option>Feature Request</option></select></div>
                            <div><label className="form-label">Priority</label><select className="form-select"><option>Low</option><option>Medium</option><option>High</option><option>Critical</option></select></div>
                        </div>
                        <div className="mb-4"><label className="form-label">Description *</label><textarea className="form-control" rows="6" placeholder="Provide details about your issue..."></textarea></div>
                        <div className="mb-4"><label className="form-label">Attachments</label><input type="file" className="form-control" multiple /></div>
                        <div className="flex gap-3"><button type="submit" className="btn btn-primary">Submit Ticket</button><Link to="/ticket-list" className="btn btn-light">Cancel</Link></div>
                    </form>
                </div>
            </div>
        </div></section>
    );
}
