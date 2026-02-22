import { Link } from 'react-router-dom';
const blogPosts = Array.from({ length: 6 }, (_, i) => ({
    title: ['The Future of AI in Education', '10 Tips for Better Code Reviews', 'Understanding Microservices Architecture', 'A Beginner\'s Guide to Cloud Computing', 'The Rise of Remote Work Culture', 'Cybersecurity Trends to Watch'][i],
    excerpt: ['Explore how artificial intelligence is transforming the education sector...', 'Learn the best practices for conducting effective code reviews...', 'A comprehensive guide to building scalable microservices...', 'Everything you need to know about cloud computing basics...', 'How remote work is changing the professional landscape...', 'Stay ahead of emerging cybersecurity threats and trends...'][i],
    author: ['Dennis Barrett', 'Judy Nguyen', 'Frances Guerrero', 'Billy Vasquez', 'Larry Lawson', 'Amanda Reed'][i],
    avatar: ['03.jpg', '01.jpg', '05.jpg', '08.jpg', '04.jpg', '06.jpg'][i],
    date: ['Nov 7, 2024', 'Nov 5, 2024', 'Nov 3, 2024', 'Nov 1, 2024', 'Oct 30, 2024', 'Oct 28, 2024'][i],
    readTime: ['5 min', '8 min', '12 min', '6 min', '4 min', '10 min'][i],
    category: ['AI', 'Programming', 'Architecture', 'Cloud', 'Culture', 'Security'][i],
}));
export default function Blog() {
    return (
        <section className="py-8"><div className="container">
            <div className="text-center mb-8"><h2 className="mb-2">Blog</h2><p className="text-body">Latest articles, tutorials, and insights from our community.</p></div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {blogPosts.map((p, i) => (
                    <div key={i} className="card overflow-hidden hover:shadow-lg transition-shadow group">
                        <div className="h-48 bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center"><i className="bi bi-journal-richtext text-6xl text-primary/20"></i></div>
                        <div className="p-4">
                            <span className="badge badge-primary mb-2">{p.category}</span>
                            <h5 className="card-title mb-2"><Link to="/blog-detail" className="text-heading group-hover:text-primary transition-colors">{p.title}</Link></h5>
                            <p className="text-sm text-body mb-3">{p.excerpt}</p>
                            <div className="flex items-center gap-2 text-sm text-body pt-3 border-t border-border-color">
                                <img className="w-6 h-6 rounded-full object-cover" src={`/assets/images/avatar/${p.avatar}`} alt="" />
                                <span>{p.author}</span><span>•</span><span>{p.date}</span><span className="ml-auto">{p.readTime} read</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div></section>
    );
}
