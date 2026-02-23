import { Link } from 'react-router-dom';
const tickets = [
    { id: '#1024', subject: 'Login issues with Google SSO', status: 'Open', priority: 'High', date: '2024-11-07', updated: '2h ago' },
    { id: '#1023', subject: 'Cannot upload profile picture', status: 'In Progress', priority: 'Medium', date: '2024-11-06', updated: '1d ago' },
    { id: '#1022', subject: 'Email notifications not working', status: 'Resolved', priority: 'Low', date: '2024-11-05', updated: '3d ago' },
    { id: '#1021', subject: 'Account verification failed', status: 'Open', priority: 'High', date: '2024-11-04', updated: '5d ago' },
    { id: '#1020', subject: 'Dark mode display issues', status: 'Resolved', priority: 'Low', date: '2024-11-03', updated: '1w ago' },
];
const statusColors = { 'Open': 'bg-danger/10 text-danger', 'In Progress': 'bg-warning/10 text-yellow-700', 'Resolved': 'bg-success/10 text-success' };
const priorityColors = { 'High': 'text-danger', 'Medium': 'text-warning', 'Low': 'text-success' };
export default function TicketList() {
    return (
        <section className="py-8"><div className="container">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div><h2 className="mb-1">My Tickets</h2><p className="text-body mb-0">Track and manage your support requests.</p></div>
                <Link to="/ticket-create" className="btn btn-primary self-start">New Ticket</Link>
            </div>
            <div className="card">
                <div className="overflow-x-auto">
                    <table className="table">
                        <thead><tr><th>ID</th><th>Subject</th><th>Status</th><th>Priority</th><th>Date</th><th>Updated</th></tr></thead>
                        <tbody>
                            {tickets.map((t, i) => (
                                <tr key={i} className="hover:bg-gray-50">
                                    <td className="text-sm font-medium">{t.id}</td>
                                    <td><Link to="/ticket-reply" className="text-sm text-heading hover:text-primary">{t.subject}</Link></td>
                                    <td><span className={`badge ${statusColors[t.status]}`}>{t.status}</span></td>
                                    <td className={`text-sm font-medium ${priorityColors[t.priority]}`}>{t.priority}</td>
                                    <td className="text-sm text-body">{t.date}</td>
                                    <td className="text-sm text-body">{t.updated}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div></section>
    );
}
