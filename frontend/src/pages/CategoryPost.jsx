<<<<<<< HEAD
import { Link } from 'react-router';
const posts = Array.from({ length: 6 }, (_, i) => ({
    title: ['Understanding React Server Components', 'Top 10 CSS tricks you should know', 'A guide to Node.js streams', 'Building scalable APIs with GraphQL', 'Docker for beginners: Complete guide', 'Git workflow best practices'][i],
    author: ['Dennis Barrett', 'Judy Nguyen', 'Frances Guerrero', 'Billy Vasquez', 'Larry Lawson', 'Amanda Reed'][i],
    avatar: ['03.jpg', '01.jpg', '05.jpg', '08.jpg', '04.jpg', '06.jpg'][i],
    date: ['Nov 7, 2024', 'Nov 6, 2024', 'Nov 5, 2024', 'Nov 4, 2024', 'Nov 3, 2024', 'Nov 2, 2024'][i],
    likes: [45, 32, 28, 67, 19, 38][i],
    comments: [12, 8, 15, 24, 6, 18][i],
}));
export default function CategoryPost() {
    return (
        <section className="py-8"><div className="container">
            <h2 className="mb-6">Category Posts</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {posts.map((p, i) => (
                    <div key={i} className="card overflow-hidden hover:shadow-md transition-shadow group">
                        <div className="h-40 bg-gradient-to-r from-primary/20 to-primary/5 flex items-center justify-center"><i className="bi bi-file-earmark-text text-5xl text-primary/30"></i></div>
                        <div className="p-4">
                            <h6 className="mb-2"><Link to="/blog-detail" className="text-heading group-hover:text-primary transition-colors">{p.title}</Link></h6>
                            <div className="flex items-center gap-2 text-sm text-body mb-3">
                                <img className="w-6 h-6 rounded-full object-cover" src={`/assets/images/avatar/${p.avatar}`} alt="" />
                                <span>{p.author}</span><span>•</span><span>{p.date}</span>
                            </div>
                            <div className="flex gap-3 text-sm text-body"><span><i className="bi bi-heart mr-1"></i>{p.likes}</span><span><i className="bi bi-chat mr-1"></i>{p.comments}</span></div>
                        </div>
                    </div>
                ))}
            </div>
        </div></section>
    );
}
=======
import { Link } from 'react-router';
const posts = Array.from({ length: 6 }, (_, i) => ({
    title: ['Understanding React Server Components', 'Top 10 CSS tricks you should know', 'A guide to Node.js streams', 'Building scalable APIs with GraphQL', 'Docker for beginners: Complete guide', 'Git workflow best practices'][i],
    author: ['Dennis Barrett', 'Judy Nguyen', 'Frances Guerrero', 'Billy Vasquez', 'Larry Lawson', 'Amanda Reed'][i],
    avatar: ['03.jpg', '01.jpg', '05.jpg', '08.jpg', '04.jpg', '06.jpg'][i],
    date: ['Nov 7, 2024', 'Nov 6, 2024', 'Nov 5, 2024', 'Nov 4, 2024', 'Nov 3, 2024', 'Nov 2, 2024'][i],
    likes: [45, 32, 28, 67, 19, 38][i],
    comments: [12, 8, 15, 24, 6, 18][i],
}));
export default function CategoryPost() {
    return (
        <section className="py-8"><div className="container">
            <h2 className="mb-6">Category Posts</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {posts.map((p, i) => (
                    <div key={i} className="card overflow-hidden hover:shadow-md transition-shadow group">
                        <div className="h-40 bg-gradient-to-r from-primary/20 to-primary/5 flex items-center justify-center"><i className="bi bi-file-earmark-text text-5xl text-primary/30"></i></div>
                        <div className="p-4">
                            <h6 className="mb-2"><Link to="/blog-detail" className="text-heading group-hover:text-primary transition-colors">{p.title}</Link></h6>
                            <div className="flex items-center gap-2 text-sm text-body mb-3">
                                <img className="w-6 h-6 rounded-full object-cover" src={`/assets/images/avatar/${p.avatar}`} alt="" />
                                <span>{p.author}</span><span>•</span><span>{p.date}</span>
                            </div>
                            <div className="flex gap-3 text-sm text-body"><span><i className="bi bi-heart mr-1"></i>{p.likes}</span><span><i className="bi bi-chat mr-1"></i>{p.comments}</span></div>
                        </div>
                    </div>
                ))}
            </div>
        </div></section>
    );
}
>>>>>>> b51d19062c6ff9441585b362d5db7e3f2b76ab0e
