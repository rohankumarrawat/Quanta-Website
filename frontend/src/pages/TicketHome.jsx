<<<<<<< HEAD
import { Link } from 'react-router';
export default function TicketHome() {
    return (
        <section className="py-8"><div className="container">
            <div className="max-w-3xl mx-auto text-center mb-8">
                <h1 className="mb-3">Support Ticket System</h1>
                <p className="text-body mb-4">Submit and track your support requests easily.</p>
                <div className="flex flex-wrap justify-center gap-3">
                    <Link to="/ticket-create" className="btn btn-primary">Create New Ticket</Link>
                    <Link to="/ticket-list" className="btn btn-outline-dark">View My Tickets</Link>
                </div>
            </div>
            <div className="grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
                <div className="card p-6 text-center"><h3 className="text-primary mb-1">245</h3><p className="text-sm text-body mb-0">Open Tickets</p></div>
                <div className="card p-6 text-center"><h3 className="text-success mb-1">1,890</h3><p className="text-sm text-body mb-0">Resolved Tickets</p></div>
                <div className="card p-6 text-center"><h3 className="text-warning mb-1">2h</h3><p className="text-sm text-body mb-0">Avg Response Time</p></div>
            </div>
        </div></section>
    );
}
=======
import { Link } from 'react-router';
export default function TicketHome() {
    return (
        <section className="py-8"><div className="container">
            <div className="max-w-3xl mx-auto text-center mb-8">
                <h1 className="mb-3">Support Ticket System</h1>
                <p className="text-body mb-4">Submit and track your support requests easily.</p>
                <div className="flex flex-wrap justify-center gap-3">
                    <Link to="/ticket-create" className="btn btn-primary">Create New Ticket</Link>
                    <Link to="/ticket-list" className="btn btn-outline-dark">View My Tickets</Link>
                </div>
            </div>
            <div className="grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
                <div className="card p-6 text-center"><h3 className="text-primary mb-1">245</h3><p className="text-sm text-body mb-0">Open Tickets</p></div>
                <div className="card p-6 text-center"><h3 className="text-success mb-1">1,890</h3><p className="text-sm text-body mb-0">Resolved Tickets</p></div>
                <div className="card p-6 text-center"><h3 className="text-warning mb-1">2h</h3><p className="text-sm text-body mb-0">Avg Response Time</p></div>
            </div>
        </div></section>
    );
}
>>>>>>> b51d19062c6ff9441585b362d5db7e3f2b76ab0e
