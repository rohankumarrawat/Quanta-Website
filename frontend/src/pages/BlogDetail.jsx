import { Link } from 'react-router-dom';
export default function BlogDetail() {
    return (
        <section className="py-8"><div className="container">
            <div className="max-w-3xl mx-auto">
                <span className="badge badge-primary mb-3">AI</span>
                <h1 className="text-3xl font-bold mb-3">The Future of AI in Education</h1>
                <div className="flex items-center gap-3 text-sm text-body mb-6">
                    <img className="w-9 h-9 rounded-full object-cover" src="/assets/images/avatar/03.jpg" alt="" />
                    <span className="text-heading font-medium">Dennis Barrett</span><span>•</span><span>Nov 7, 2024</span><span>•</span><span>5 min read</span>
                </div>
                <div className="h-64 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg flex items-center justify-center mb-6"><i className="bi bi-journal-richtext text-7xl text-primary/20"></i></div>
                <div className="prose max-w-none">
                    <p className="text-body leading-relaxed mb-4">Artificial intelligence is rapidly transforming the education sector, bringing personalized learning experiences, automated grading systems, and intelligent tutoring to students worldwide.</p>
                    <h3 className="text-xl font-semibold mb-3 mt-6">Personalized Learning</h3>
                    <p className="text-body leading-relaxed mb-4">AI algorithms can analyze a student's learning patterns, strengths, and weaknesses to create customized learning paths. This ensures that each student receives the right level of challenge and support.</p>
                    <h3 className="text-xl font-semibold mb-3 mt-6">Automated Assessment</h3>
                    <p className="text-body leading-relaxed mb-4">AI-powered assessment tools can evaluate student work more efficiently and consistently, providing instant feedback that helps students improve faster.</p>
                    <h3 className="text-xl font-semibold mb-3 mt-6">Intelligent Tutoring Systems</h3>
                    <p className="text-body leading-relaxed mb-4">Virtual tutors powered by AI can provide one-on-one guidance to students, answering questions and explaining concepts in multiple ways until the student understands.</p>
                    <h3 className="text-xl font-semibold mb-3 mt-6">The Road Ahead</h3>
                    <p className="text-body leading-relaxed mb-4">While AI in education holds tremendous promise, it also raises important questions about data privacy, the role of teachers, and ensuring equitable access to these technologies.</p>
                </div>
                <div className="flex flex-wrap gap-2 mt-6 pt-4 border-t border-border-color">
                    {['AI', 'Education', 'Technology', 'Machine Learning'].map((tag) => (
                        <Link key={tag} to="/category" className="bg-gray-100 text-body text-xs px-3 py-1.5 rounded-full hover:bg-primary hover:text-white transition-colors">{tag}</Link>
                    ))}
                </div>
                {/* Author */}
                <div className="card p-4 mt-6">
                    <div className="flex items-center gap-4">
                        <img className="w-14 h-14 rounded-full object-cover" src="/assets/images/avatar/03.jpg" alt="" />
                        <div className="flex-1"><h6 className="mb-0">Dennis Barrett</h6><p className="text-sm text-body mb-0">Tech writer and AI enthusiast with 10+ years of experience.</p></div>
                        <button className="btn btn-sm btn-primary-soft">Follow</button>
                    </div>
                </div>
            </div>
        </div></section>
    );
}
