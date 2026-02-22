const badges = [
    { icon: 'bi-star-fill', name: 'First Question', desc: 'Asked your first question', color: 'text-warning', earned: true },
    { icon: 'bi-chat-fill', name: 'First Answer', desc: 'Answered your first question', color: 'text-primary', earned: true },
    { icon: 'bi-trophy-fill', name: 'Top Contributor', desc: 'Reached 100 helpful answers', color: 'text-success', earned: true },
    { icon: 'bi-lightning-fill', name: 'Quick Responder', desc: 'Answered within 5 minutes', color: 'text-danger', earned: true },
    { icon: 'bi-people-fill', name: 'Community Leader', desc: 'Gained 1000 followers', color: 'text-info', earned: false },
    { icon: 'bi-gem', name: 'Expert', desc: 'Accumulated 5000 reputation points', color: 'text-purple-500', earned: false },
];
export default function MyProfileAchievement() {
    return (
        <div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
                <div className="card p-4 text-center"><h4 className="text-primary mb-0">456</h4><span className="text-sm text-body">Points</span></div>
                <div className="card p-4 text-center"><h4 className="text-success mb-0">4</h4><span className="text-sm text-body">Badges Earned</span></div>
                <div className="card p-4 text-center"><h4 className="text-warning mb-0">#12</h4><span className="text-sm text-body">Global Rank</span></div>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {badges.map((b, i) => (
                    <div key={i} className={`card p-4 text-center ${!b.earned ? 'opacity-50' : ''}`}>
                        <div className={`w-14 h-14 rounded-full ${b.earned ? 'bg-gray-100' : 'bg-gray-200'} flex items-center justify-center mx-auto mb-3`}>
                            <i className={`bi ${b.icon} text-2xl ${b.earned ? b.color : 'text-gray-400'}`}></i>
                        </div>
                        <h6 className="mb-1">{b.name}</h6>
                        <p className="text-xs text-body mb-0">{b.desc}</p>
                        {b.earned && <span className="badge bg-success/10 text-success mt-2">Earned</span>}
                    </div>
                ))}
            </div>
        </div>
    );
}
