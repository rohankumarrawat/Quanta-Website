import { Link } from 'react-router';

const answers = [
    { user: 'Dennis Barrett', avatar: '03.jpg', time: '2 hours ago', text: 'A compiler translates the entire source code of a program into machine code before execution, while an interpreter translates and executes the code line by line at runtime.', votes: 36, accepted: true },
    { user: 'Judy Nguyen', avatar: '01.jpg', time: '5 hours ago', text: 'The key difference lies in execution: compilers produce standalone executable files, while interpreters process code directly. Compiled programs generally run faster, but interpreted languages offer more flexibility during development.', votes: 12, accepted: false },
    { user: 'Frances Guerrero', avatar: '05.jpg', time: '8 hours ago', text: 'Compilers check the entire program for errors before generating output, making debugging harder but execution faster. Interpreters stop at the first error encountered, making debugging easier but execution slower.', votes: 8, accepted: false },
];

export default function AnswerDetail() {
    return (
        <section className="py-8">
            <div className="container">
                <div className="grid lg:grid-cols-12 gap-6">
                    {/* Main Content */}
                    <div className="lg:col-span-8">
                        {/* Question */}
                        <div className="card p-4 sm:p-6 mb-4">
                            <div className="flex gap-4">
                                {/* Vote */}
                                <div className="flex flex-col items-center gap-1 pt-1">
                                    <button className="text-body hover:text-primary"><i className="bi bi-caret-up-fill text-xl"></i></button>
                                    <span className="font-semibold text-heading text-lg">25</span>
                                    <button className="text-body hover:text-primary"><i className="bi bi-caret-down-fill text-xl"></i></button>
                                </div>
                                {/* Content */}
                                <div className="flex-1">
                                    <div className="flex flex-wrap gap-2 mb-2">
                                        <span className="badge badge-dark">Programmer</span>
                                        <span className="badge bg-success/10 text-success">Answered</span>
                                    </div>
                                    <h4 className="mb-2">What is the difference between a compiler and an interpreter?</h4>
                                    <div className="flex items-center gap-2 text-sm text-body mb-4">
                                        <Link to="/profile" className="text-primary">Larry Lawson</Link>
                                        <span>•</span>
                                        <span>Asked: 07 Nov 2024</span>
                                    </div>
                                    <p className="text-body leading-relaxed">I'm trying to understand the fundamental difference between compilers and interpreters. Could someone explain this clearly with examples? I understand that both are language translators, but I'm confused about their working mechanisms.</p>
                                    <div className="flex flex-wrap gap-2 mt-4">
                                        <span className="bg-gray-100 text-body text-xs px-3 py-1 rounded-full">programming</span>
                                        <span className="bg-gray-100 text-body text-xs px-3 py-1 rounded-full">compiler</span>
                                        <span className="bg-gray-100 text-body text-xs px-3 py-1 rounded-full">interpreter</span>
                                    </div>
                                    <div className="flex items-center gap-4 mt-4 pt-4 border-t border-border-color text-sm">
                                        <Link to="#" className="text-body hover:text-primary"><i className="fa-regular fa-message mr-1"></i>15 Answers</Link>
                                        <span className="text-body"><i className="fa-regular fa-eye mr-1"></i>102 Views</span>
                                        <button className="text-body hover:text-primary ml-auto"><i className="bi bi-share"></i></button>
                                        <button className="text-body hover:text-primary"><i className="fa-regular fa-bookmark"></i></button>
                                        <button className="text-body hover:text-primary"><i className="fa-regular fa-flag"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Answers */}
                        <div className="flex items-center justify-between mb-4">
                            <h5 className="mb-0">{answers.length} Answers</h5>
                            <select className="form-select w-auto text-sm">
                                <option>Most recent</option>
                                <option>Oldest first</option>
                                <option>Most voted</option>
                            </select>
                        </div>

                        <div className="space-y-4">
                            {answers.map((a, i) => (
                                <div key={i} className={`card p-4 sm:p-6 ${a.accepted ? 'border-success border-2' : ''}`}>
                                    <div className="flex gap-4">
                                        {/* Vote */}
                                        <div className="flex flex-col items-center gap-1">
                                            <button className="text-body hover:text-primary"><i className="bi bi-hand-thumbs-up-fill"></i></button>
                                            <span className="font-semibold text-heading">{a.votes}</span>
                                            <button className="text-body hover:text-primary"><i className="bi bi-hand-thumbs-down-fill"></i></button>
                                        </div>
                                        {/* Content */}
                                        <div className="flex-1">
                                            <div className="flex items-center gap-3 mb-3">
                                                <img className="w-9 h-9 rounded-full object-cover" src={`/assets/images/avatar/${a.avatar}`} alt="" />
                                                <div>
                                                    <Link to="/profile" className="font-semibold text-heading text-sm">{a.user}</Link>
                                                    <p className="text-xs text-body mb-0">{a.time}</p>
                                                </div>
                                                {a.accepted && (
                                                    <span className="badge bg-success text-white ml-auto">
                                                        <i className="bi bi-check-circle mr-1"></i>Accepted
                                                    </span>
                                                )}
                                            </div>
                                            <p className="text-body leading-relaxed mb-0">{a.text}</p>
                                            <div className="flex items-center gap-3 mt-3 text-sm">
                                                <button className="text-body hover:text-primary"><i className="bi bi-reply mr-1"></i>Reply</button>
                                                <button className="text-body hover:text-primary"><i className="bi bi-share mr-1"></i>Share</button>
                                                <button className="text-body hover:text-primary"><i className="bi bi-flag mr-1"></i>Report</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Add Answer */}
                        <div className="card p-4 sm:p-6 mt-6">
                            <h5 className="mb-4">Your Answer</h5>
                            <textarea className="form-control mb-3" rows="5" placeholder="Write your answer here..."></textarea>
                            <button className="btn btn-primary">Post your Answer</button>
                        </div>
                    </div>

                    {/* Right Sidebar */}
                    <div className="lg:col-span-4">
                        {/* Related Questions */}
                        <div className="card p-4 mb-4">
                            <h6 className="mb-3">Related Questions</h6>
                            <ul className="space-y-3">
                                {['What is the difference between JVM, JRE, and JDK?', 'How does garbage collection work in Java?', 'Explain polymorphism in object-oriented programming', 'What are the SOLID principles?'].map((q, i) => (
                                    <li key={i}><Link to="/answer-detail" className="text-sm text-body hover:text-primary">{q}</Link></li>
                                ))}
                            </ul>
                        </div>

                        {/* Trending Tags */}
                        <div className="card p-4 mb-4">
                            <h6 className="mb-3">Trending Tags</h6>
                            <div className="flex flex-wrap gap-2">
                                {['javascript', 'python', 'react', 'node.js', 'css', 'html', 'typescript', 'sql'].map((tag, i) => (
                                    <Link key={i} to="/category" className="bg-gray-100 hover:bg-primary hover:text-white text-body text-xs px-3 py-1.5 rounded-full transition-colors">{tag}</Link>
                                ))}
                            </div>
                        </div>

                        {/* Join Community */}
                        <div className="card p-4 text-center">
                            <img src="/assets/images/elements/18.svg" className="w-24 mx-auto mb-3" alt="" />
                            <h6>Join the Community</h6>
                            <p className="text-sm text-body mb-3">Get answers to your questions from experts.</p>
                            <Link to="/signup" className="btn btn-primary btn-sm w-full">Join Free</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
