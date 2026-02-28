<<<<<<< HEAD
import { Link } from 'react-router';
const communities = Array.from({ length: 9 }, (_, i) => ({
    name: ['Tech Innovators', 'Creative Writers', 'Startup Founders', 'Data Scientists', 'Open Source Contributors', 'Educators Hub', 'Digital Marketers', 'Freelancers Network', 'Student Community'][i],
    members: [25000, 12000, 8500, 15000, 9200, 7800, 11000, 6500, 18000][i],
    posts: [3200, 1800, 1200, 2500, 1500, 950, 1400, 800, 2800][i],
    avatar: ['01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '01.jpg'][i],
    color: ['from-blue-500 to-blue-600', 'from-purple-500 to-purple-600', 'from-green-500 to-green-600', 'from-orange-500 to-orange-600', 'from-red-500 to-red-600', 'from-teal-500 to-teal-600', 'from-pink-500 to-pink-600', 'from-indigo-500 to-indigo-600', 'from-yellow-500 to-yellow-600'][i],
}));
export default function Communities() {
    return (
        <section className="py-8"><div className="container">
            <div className="text-center mb-8"><h2 className="mb-2">Communities</h2><p className="text-body">Join communities that align with your interests and expertise.</p></div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {communities.map((c, i) => (
                    <div key={i} className="card overflow-hidden hover:shadow-lg transition-shadow group">
                        <div className={`h-24 bg-gradient-to-r ${c.color}`}></div>
                        <div className="p-4 relative">
                            <img className="w-14 h-14 rounded-xl border-4 border-white object-cover shadow -mt-11" src={`/assets/images/avatar/${c.avatar}`} alt="" />
                            <h6 className="mt-2 mb-1"><Link to="/group-detail" className="text-heading group-hover:text-primary transition-colors">{c.name}</Link></h6>
                            <div className="flex gap-3 text-xs text-body mb-3">
                                <span>{c.members.toLocaleString()} members</span>
                                <span>{c.posts.toLocaleString()} posts</span>
                            </div>
                            <button className="btn btn-sm btn-primary-soft w-full">Join Community</button>
                        </div>
                    </div>
                ))}
            </div>
        </div></section>
    );
}
=======
import { Link } from 'react-router';
const communities = Array.from({ length: 9 }, (_, i) => ({
    name: ['Tech Innovators', 'Creative Writers', 'Startup Founders', 'Data Scientists', 'Open Source Contributors', 'Educators Hub', 'Digital Marketers', 'Freelancers Network', 'Student Community'][i],
    members: [25000, 12000, 8500, 15000, 9200, 7800, 11000, 6500, 18000][i],
    posts: [3200, 1800, 1200, 2500, 1500, 950, 1400, 800, 2800][i],
    avatar: ['01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '01.jpg'][i],
    color: ['from-blue-500 to-blue-600', 'from-purple-500 to-purple-600', 'from-green-500 to-green-600', 'from-orange-500 to-orange-600', 'from-red-500 to-red-600', 'from-teal-500 to-teal-600', 'from-pink-500 to-pink-600', 'from-indigo-500 to-indigo-600', 'from-yellow-500 to-yellow-600'][i],
}));
export default function Communities() {
    return (
        <section className="py-8"><div className="container">
            <div className="text-center mb-8"><h2 className="mb-2">Communities</h2><p className="text-body">Join communities that align with your interests and expertise.</p></div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {communities.map((c, i) => (
                    <div key={i} className="card overflow-hidden hover:shadow-lg transition-shadow group">
                        <div className={`h-24 bg-gradient-to-r ${c.color}`}></div>
                        <div className="p-4 relative">
                            <img className="w-14 h-14 rounded-xl border-4 border-white object-cover shadow -mt-11" src={`/assets/images/avatar/${c.avatar}`} alt="" />
                            <h6 className="mt-2 mb-1"><Link to="/group-detail" className="text-heading group-hover:text-primary transition-colors">{c.name}</Link></h6>
                            <div className="flex gap-3 text-xs text-body mb-3">
                                <span>{c.members.toLocaleString()} members</span>
                                <span>{c.posts.toLocaleString()} posts</span>
                            </div>
                            <button className="btn btn-sm btn-primary-soft w-full">Join Community</button>
                        </div>
                    </div>
                ))}
            </div>
        </div></section>
    );
}
>>>>>>> b51d19062c6ff9441585b362d5db7e3f2b76ab0e
