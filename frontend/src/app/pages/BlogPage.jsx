import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { ArrowRight, Calendar, User } from "lucide-react";
import { getBlogPosts } from "../../api/blog";

const FALLBACK_POSTS = [
    { _id: "1", title: "Introducing Quantum Error Correction in Quanta v2.7", preview: "We're excited to announce built-in quantum error correction capabilities that make your quantum applications more robust and reliable on real quantum hardware.", author: "Dr. Sarah Chen", date: "March 1, 2026", readTime: "5 min read" },
    { _id: "2", title: "Building Your First Quantum Algorithm with Quanta", preview: "A comprehensive guide to creating quantum algorithms using Quanta's intuitive syntax. Learn the fundamentals and best practices for quantum development.", author: "Michael Torres", date: "February 24, 2026", readTime: "8 min read" },
    { _id: "3", title: "Performance Benchmarks: Quanta vs Traditional Frameworks", preview: "Deep dive into performance comparisons between Quanta and other quantum programming frameworks. See how Quanta optimizes circuit compilation and execution.", author: "Alex Kumar", date: "February 18, 2026", readTime: "6 min read" },
    { _id: "4", title: "Understanding Quantum Entanglement with Practical Examples", preview: "Explore the fascinating world of quantum entanglement through hands-on Quanta code examples. From Bell states to multi-qubit entanglement patterns.", author: "Dr. Emily Watson", date: "February 10, 2026", readTime: "10 min read" },
    { _id: "5", title: "Quanta's Type System: Safety Meets Quantum Computing", preview: "How Quanta's advanced type system prevents common quantum programming errors at compile time, making quantum development safer and more predictable.", author: "Jordan Lee", date: "February 3, 2026", readTime: "7 min read" },
    { _id: "6", title: "From Classical to Quantum: A Developer's Journey", preview: "One developer's story of transitioning from classical programming to quantum computing with Quanta. Lessons learned and tips for getting started.", author: "Chris Martinez", date: "January 27, 2026", readTime: "9 min read" },
];

export function BlogPage() {
    const navigate = useNavigate();
    const [blogPosts, setBlogPosts] = useState(FALLBACK_POSTS);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getBlogPosts()
            .then((data) => { if (data && data.length > 0) setBlogPosts(data); })
            .catch(() => { })
            .finally(() => setIsLoading(false));
    }, []);

    return (
        <div className="space-y-12">
            {/* Header */}
            <div className="space-y-4">
                <h1 className="text-4xl font-bold">Quanta Blog</h1>
                <p className="text-lg text-muted-foreground max-w-2xl">
                    Latest updates, tutorials, and insights from the Quanta team and community.
                </p>
            </div>

            {/* Blog Grid */}
            {isLoading ? (
                <div className="text-center text-muted-foreground py-12">Loading posts...</div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {blogPosts.map((post) => (
                        <article
                            key={post._id || post.title}
                            className="group bg-card border border-border rounded-xl p-6 hover:border-[#22d3ee]/30 transition-all cursor-pointer"
                        >
                            <h2 className="text-xl font-semibold mb-3 group-hover:text-[#22d3ee] transition-colors">
                                {post.title}
                            </h2>

                            <p className="text-muted-foreground mb-4 line-clamp-3">
                                {post.preview}
                            </p>

                            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                                <div className="flex items-center gap-1.5">
                                    <User className="w-4 h-4" />
                                    <span>{post.author}</span>
                                </div>
                                <span>•</span>
                                <div className="flex items-center gap-1.5">
                                    <Calendar className="w-4 h-4" />
                                    <span>{post.date}</span>
                                </div>
                                <span>•</span>
                                <span>{post.readTime}</span>
                            </div>

                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    navigate(`/blog/${post._id}`);
                                }}
                                className="flex items-center gap-2 text-[#22d3ee] text-sm font-medium group-hover:gap-3 transition-all"
                            >
                                Read More
                                <ArrowRight className="w-4 h-4" />
                            </button>
                        </article>
                    ))}
                </div>
            )}
        </div>
    );
}
