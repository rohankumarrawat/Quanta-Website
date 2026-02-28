<<<<<<< HEAD
import { Link } from 'react-router';
const groups = Array.from({ length: 8 }, (_, i) => ({
    name: ['React Developers', 'Python Community', 'Data Science Hub', 'UX Designers', 'DevOps Engineers', 'AI Enthusiasts', 'Web3 Builders', 'Mobile Dev'][i],
    members: [12500, 8900, 6700, 4500, 3200, 9800, 2100, 5600][i],
    avatar: ['03.jpg', '01.jpg', '05.jpg', '08.jpg', '04.jpg', '06.jpg', '07.jpg', '02.jpg'][i],
    desc: ['A community for React enthusiasts', 'Explore Python together', 'Data science discussions', 'Design thinking and UX', 'CI/CD and cloud infra', 'Artificial intelligence talk', 'Blockchain and decentralized apps', 'iOS and Android development'][i],
    isPublic: [true, true, false, true, true, false, true, true][i],
}));
export default function Group() {
    return (
        <section className="py-8"><div className="container">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div><h2 className="mb-1">Groups</h2><p className="text-body mb-0">Find and join groups that match your interests.</p></div>
                <button className="btn btn-primary self-start">Create Group</button>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {groups.map((g, i) => (
                    <div key={i} className="card p-4 hover:shadow-md transition-shadow">
                        <div className="flex items-center gap-3 mb-3">
                            <img className="w-12 h-12 rounded-full object-cover" src={`/assets/images/avatar/${g.avatar}`} alt="" />
                            <div><h6 className="mb-0"><Link to="/group-detail" className="text-heading hover:text-primary">{g.name}</Link></h6><span className="text-xs text-body">{g.isPublic ? 'Public' : 'Private'} Group</span></div>
                        </div>
                        <p className="text-sm text-body mb-3">{g.desc}</p>
                        <div className="flex items-center justify-between">
                            <span className="text-xs text-body"><i className="bi bi-people mr-1"></i>{g.members.toLocaleString()} members</span>
                            <button className="btn btn-sm btn-primary-soft">Join</button>
                        </div>
                    </div>
                ))}
            </div>
        </div></section>
    );
}
=======
import { Link } from 'react-router';
const groups = Array.from({ length: 8 }, (_, i) => ({
    name: ['React Developers', 'Python Community', 'Data Science Hub', 'UX Designers', 'DevOps Engineers', 'AI Enthusiasts', 'Web3 Builders', 'Mobile Dev'][i],
    members: [12500, 8900, 6700, 4500, 3200, 9800, 2100, 5600][i],
    avatar: ['03.jpg', '01.jpg', '05.jpg', '08.jpg', '04.jpg', '06.jpg', '07.jpg', '02.jpg'][i],
    desc: ['A community for React enthusiasts', 'Explore Python together', 'Data science discussions', 'Design thinking and UX', 'CI/CD and cloud infra', 'Artificial intelligence talk', 'Blockchain and decentralized apps', 'iOS and Android development'][i],
    isPublic: [true, true, false, true, true, false, true, true][i],
}));
export default function Group() {
    return (
        <section className="py-8"><div className="container">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div><h2 className="mb-1">Groups</h2><p className="text-body mb-0">Find and join groups that match your interests.</p></div>
                <button className="btn btn-primary self-start">Create Group</button>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {groups.map((g, i) => (
                    <div key={i} className="card p-4 hover:shadow-md transition-shadow">
                        <div className="flex items-center gap-3 mb-3">
                            <img className="w-12 h-12 rounded-full object-cover" src={`/assets/images/avatar/${g.avatar}`} alt="" />
                            <div><h6 className="mb-0"><Link to="/group-detail" className="text-heading hover:text-primary">{g.name}</Link></h6><span className="text-xs text-body">{g.isPublic ? 'Public' : 'Private'} Group</span></div>
                        </div>
                        <p className="text-sm text-body mb-3">{g.desc}</p>
                        <div className="flex items-center justify-between">
                            <span className="text-xs text-body"><i className="bi bi-people mr-1"></i>{g.members.toLocaleString()} members</span>
                            <button className="btn btn-sm btn-primary-soft">Join</button>
                        </div>
                    </div>
                ))}
            </div>
        </div></section>
    );
}
>>>>>>> b51d19062c6ff9441585b362d5db7e3f2b76ab0e
