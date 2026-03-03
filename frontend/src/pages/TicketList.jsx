

import { Link } from 'react-router';
import { useTranslation } from 'react-i18next';



const statusColors = {
    'open': 'bg-danger/10 text-danger', 'in_progress': 'bg-warning/10 text-yellow-700', 'resolved': 'bg-success/10 text-success',
    "ouvert": "bg-danger/10 text-danger",
    "en_cours": "bg-warning/10 text-yellow-700",
    "résolu": "bg-success/10 text-success",
    "abierto": "bg-danger/10 text-danger",
    "en_progreso": "bg-warning/10 text-yellow-700",
    "resuelto": "bg-success/10 text-success",
    "offen": "bg-danger/10 text-danger",
    "in_bearbeitung": "bg-warning/10 text-yellow-700",
    "gelöst": "bg-success/10 text-success"
};
const priorityColors = {
    'high': 'text-danger', 'medium': 'text-warning', 'low': 'text-success',
    "élevée": "text-danger",
    "moyenne": "text-warning",
    "faible": "text-success",
    "alta": "text-danger",
    "media": "text-warning",
    "baja": "text-success",
    "hoch": "text-danger",
    "mittel": "text-warning",
    "niedrig": "text-success"

};

export default function TicketList() {
    const { t } = useTranslation();

    const tickets = t('tickets.tickets', { returnObjects: true });

    return (
        <section className="py-8"><div className="container">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div><h2 className="mb-1">{t('tickets.list_title')}</h2><p className="text-body mb-0">{t('tickets.list_desc')}</p></div>
                <Link to="/ticket-create" className="btn btn-primary self-start">{t('tickets.new_ticket')}</Link>
            </div>
            <div className="card">
                <div className="overflow-x-auto">
                    <table className="table">
                        <thead><tr><th>{t('tickets.table.id')}</th><th>{t('tickets.table.subject')}</th><th>{t('tickets.table.status')}</th><th>{t('tickets.table.priority')}</th><th>{t('tickets.table.date')}</th><th>{t('tickets.table.updated')}</th></tr></thead>
                        <tbody>
                            {tickets.map((ticket, i) => (
                                <tr key={i} className="hover:bg-gray-50">
                                    <td className="text-sm font-medium">{ticket.id}</td>
                                    <td><Link to="/ticket-reply" className="text-sm text-heading hover:text-primary">{ticket.subject}</Link></td>
                                    <td><span className={`badge ${statusColors[ticket.status]}`}>{ticket.status}</span></td>
                                    <td className={`text-sm font-medium ${priorityColors[ticket.priority]}`}>{ticket.priority}</td>
                                    <td className="text-sm text-body">{ticket.date}</td>
                                    <td className="text-sm text-body">{ticket.updated}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div></section>
    );
}
