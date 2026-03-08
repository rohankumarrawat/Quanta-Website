import { useState, useEffect } from "react";
import { Search, Plus, TrendingUp, Award, BookOpen } from "lucide-react";
import { QuestionCard } from "../components/QuestionCard";
import { getCommunityQuestions, createQuestion, voteQuestion } from "../../api/community";
import { useAuth } from "../../context/AuthContext";

const FALLBACK_QUESTIONS = [
    { _id: "1", votes: 42, answers: [], views: 1203, title: "How to implement quantum error correction in Quanta?", preview: "I'm trying to implement a simple error correction code using the Memory Core module...", content: "I'm trying to implement a simple error correction code using the Memory Core module. The documentation mentions automatic error correction, but I need more control over the correction strategy...", tags: ["quantum-computing", "error-correction", "memory-core"], username: "quantum_dev", timePosted: "2 hours ago", isAnswered: true },
    { _id: "2", votes: 38, answers: [], views: 892, title: "Best practices for optimizing quantum circuit depth?", preview: "My Quanta code compiles but the resulting circuit depth is too large for current NISQ devices...", content: "My Quanta code compiles but the resulting circuit depth is too large for current NISQ devices. What are the recommended approaches for reducing circuit depth while maintaining algorithm correctness?", tags: ["optimization", "circuit-design", "performance"], username: "alice_quantum", timePosted: "5 hours ago", isAnswered: true },
    { _id: "3", votes: 27, answers: [], views: 456, title: "Entanglement API - creating multi-qubit Bell states", preview: "The examples show creating 2-qubit Bell states, but I need to create 4-qubit GHZ states...", content: "The examples show creating 2-qubit Bell states, but I need to create 4-qubit GHZ states. Is there a built-in function or do I need to manually compose the gates?", tags: ["entanglement", "bell-states", "api"], username: "qbit_explorer", timePosted: "1 day ago", isAnswered: false },
    { _id: "4", votes: 51, answers: [], views: 2145, title: "Quanta vs Qiskit - when to use which?", preview: "I'm currently using Qiskit for quantum algorithm development. What are the main advantages...", content: "I'm currently using Qiskit for quantum algorithm development. What are the main advantages of switching to Quanta? Are there specific use cases where Quanta excels?", tags: ["comparison", "qiskit", "getting-started"], username: "dev_curious", timePosted: "2 days ago", isAnswered: true },
    { _id: "5", votes: 19, answers: [], views: 678, title: "Type inference not working for quantum state variables", preview: "The compiler is throwing type errors when I try to use automatic type inference with quantum states...", content: "The compiler is throwing type errors when I try to use automatic type inference with quantum states. Do I need to explicitly annotate all quantum types?", tags: ["type-system", "compiler", "bug"], username: "type_safe_quantum", timePosted: "3 days ago", isAnswered: true },
    { _id: "6", votes: 33, answers: [], views: 1567, title: "Performance benchmarks: Quanta simulator vs real quantum hardware", preview: "Has anyone run performance comparisons between the built-in Quanta simulator and actual quantum processors?", content: "Has anyone run performance comparisons between the built-in Quanta simulator and actual quantum processors? I want to know if my code will scale when moving to hardware.", tags: ["performance", "benchmarks", "hardware"], username: "quantum_bench", timePosted: "4 days ago", isAnswered: true },
];

const TRENDING_TAGS = [
    { name: "quantum-computing", count: 342 },
    { name: "error-correction", count: 187 },
    { name: "optimization", count: 156 },
    { name: "entanglement", count: 134 },
    { name: "type-system", count: 98 },
    { name: "performance", count: 87 },
];

const TOP_CONTRIBUTORS = [
    { name: "quantum_master", answers: 156, reputation: 4521 },
    { name: "alice_quantum", answers: 134, reputation: 3892 },
    { name: "qubit_guru", answers: 98, reputation: 2765 },
];

export function CommunityPage() {
    const { user } = useAuth();
    const [activeFilter, setActiveFilter] = useState("all");
    const [sortBy, setSortBy] = useState("newest");
    const [searchQuery, setSearchQuery] = useState("");
    const [questions, setQuestions] = useState(FALLBACK_QUESTIONS);
    const [isLoading, setIsLoading] = useState(true);
    const [showAskForm, setShowAskForm] = useState(false);
    const [newQuestion, setNewQuestion] = useState({ title: "", preview: "", tags: "" });

    const filters = [
        { id: "all", label: "All Questions" },
        { id: "unanswered", label: "Unanswered" },
        { id: "popular", label: "Popular" },
        { id: "recent", label: "Recent" },
    ];

    useEffect(() => {
        setIsLoading(true);
        getCommunityQuestions({ filter: activeFilter, sort: sortBy })
            .then((data) => { if (data && data.length > 0) setQuestions(data); })
            .catch(() => { })
            .finally(() => setIsLoading(false));
    }, [activeFilter, sortBy]);

    const filteredQuestions = questions.filter((q) => {
        if (!searchQuery) return true;
        const q2 = searchQuery.toLowerCase();
        return (
            q.title.toLowerCase().includes(q2) ||
            q.preview.toLowerCase().includes(q2) ||
            q.tags.some((t) => t.toLowerCase().includes(q2))
        );
    });

    const handleAskQuestion = async (e) => {
        e.preventDefault();
        if (!user) { alert("Please login to ask a question!"); return; }
        try {
            const created = await createQuestion({
                title: newQuestion.title,
                preview: newQuestion.preview,
                content: newQuestion.preview, // Use preview for content if not separated
                tags: newQuestion.tags.split(",").map((t) => t.trim()).filter(Boolean),
            });
            setQuestions([created, ...questions]);
        } catch {
            const fake = {
                _id: Date.now().toString(),
                ...newQuestion,
                tags: newQuestion.tags.split(",").map((t) => t.trim()).filter(Boolean),
                votes: 0, answers: 0, views: 0,
                username: user.username,
                timePosted: "just now",
                isAnswered: false,
            };
            setQuestions([fake, ...questions]);
        }
        setNewQuestion({ title: "", preview: "", tags: "" });
        setShowAskForm(false);
    };

    const handleVote = async (id) => {
        try {
            await voteQuestion(id);
        } catch { }
        setQuestions((prev) =>
            prev.map((q) => q._id === id ? { ...q, votes: q.votes + 1 } : q)
        );
    };

    return (
        <div className="flex gap-8">
            {/* Main Content */}
            <div className="flex-1 min-w-0 space-y-8">
                {/* Header */}
                <div className="space-y-4">
                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className="text-4xl font-bold mb-2">Community Discussions</h1>
                            <p className="text-muted-foreground">Find answers, share knowledge, build with Quanta.</p>
                        </div>
                        <button
                            onClick={() => user ? setShowAskForm(!showAskForm) : alert("Please login to ask a question!")}
                            className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-[#22d3ee] to-[#a855f7] text-background font-medium hover:shadow-lg hover:shadow-[#22d3ee]/25 transition-all hover:scale-105"
                        >
                            <Plus className="w-4 h-4" />
                            Ask Question
                        </button>
                    </div>
                </div>

                {/* Ask Question Form */}
                {showAskForm && (
                    <form onSubmit={handleAskQuestion} className="bg-card border border-[#22d3ee]/30 rounded-xl p-6 space-y-4">
                        <h3 className="font-semibold text-lg">Ask a Question</h3>
                        <input
                            type="text"
                            placeholder="Question title..."
                            value={newQuestion.title}
                            onChange={(e) => setNewQuestion({ ...newQuestion, title: e.target.value })}
                            required
                            className="w-full px-4 py-2.5 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-[#22d3ee]/50"
                        />
                        <textarea
                            placeholder="Describe your question..."
                            value={newQuestion.preview}
                            onChange={(e) => setNewQuestion({ ...newQuestion, preview: e.target.value })}
                            required
                            rows={3}
                            className="w-full px-4 py-2.5 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-[#22d3ee]/50 resize-none"
                        />
                        <input
                            type="text"
                            placeholder="Tags (comma separated, e.g. quantum-computing, optimization)"
                            value={newQuestion.tags}
                            onChange={(e) => setNewQuestion({ ...newQuestion, tags: e.target.value })}
                            className="w-full px-4 py-2.5 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-[#22d3ee]/50"
                        />
                        <div className="flex gap-3">
                            <button type="submit" className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-[#22d3ee] to-[#a855f7] text-background font-medium hover:shadow-lg transition-all">
                                Post Question
                            </button>
                            <button type="button" onClick={() => setShowAskForm(false)} className="px-5 py-2.5 rounded-lg border border-border text-muted-foreground hover:text-foreground transition-colors">
                                Cancel
                            </button>
                        </div>
                    </form>
                )}

                {/* Search Bar */}
                <div className="relative">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <input
                        type="text"
                        placeholder="Search questions..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-12 pr-4 py-3 bg-card border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-[#22d3ee]/50 transition-colors"
                    />
                </div>

                {/* Filters and Sort */}
                <div className="flex items-center justify-between">
                    <div className="flex gap-2">
                        {filters.map((filter) => (
                            <button
                                key={filter.id}
                                onClick={() => setActiveFilter(filter.id)}
                                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${activeFilter === filter.id
                                    ? "bg-gradient-to-r from-[#22d3ee]/20 to-[#a855f7]/20 text-[#22d3ee] border border-[#22d3ee]/30"
                                    : "text-muted-foreground hover:text-foreground hover:bg-card border border-transparent"
                                    }`}
                            >
                                {filter.label}
                            </button>
                        ))}
                    </div>

                    <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        className="px-4 py-2 bg-card border border-border rounded-lg text-sm text-foreground focus:outline-none focus:border-[#22d3ee]/50 transition-colors cursor-pointer"
                    >
                        <option value="newest">Newest</option>
                        <option value="votes">Most Votes</option>
                        <option value="activity">Recent Activity</option>
                    </select>
                </div>

                {/* Question List */}
                <div className="space-y-4">
                    {isLoading ? (
                        <div className="text-center text-muted-foreground py-12">Loading questions...</div>
                    ) : filteredQuestions.length === 0 ? (
                        <div className="text-center text-muted-foreground py-12">No questions found.</div>
                    ) : (
                        filteredQuestions.map((question) => (
                            <QuestionCard key={question._id || question.title} {...question} />
                        ))
                    )}
                </div>
            </div>

            {/* Right Sidebar */}
            <aside className="w-[280px] flex-shrink-0 space-y-6">
                {/* Trending Tags */}
                <div className="bg-card border border-border rounded-xl p-6">
                    <div className="flex items-center gap-2 mb-4">
                        <TrendingUp className="w-4 h-4 text-[#22d3ee]" />
                        <h3 className="font-semibold">Trending Tags</h3>
                    </div>
                    <div className="space-y-2">
                        {TRENDING_TAGS.map((tag) => (
                            <button
                                key={tag.name}
                                onClick={() => setSearchQuery(tag.name)}
                                className="flex items-center justify-between w-full px-3 py-2 rounded-lg hover:bg-muted/50 transition-colors text-left group"
                            >
                                <span className="text-sm text-muted-foreground group-hover:text-foreground">
                                    {tag.name}
                                </span>
                                <span className="text-xs text-muted-foreground">{tag.count}</span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Top Contributors */}
                <div className="bg-card border border-border rounded-xl p-6">
                    <div className="flex items-center gap-2 mb-4">
                        <Award className="w-4 h-4 text-[#a855f7]" />
                        <h3 className="font-semibold">Top Contributors</h3>
                    </div>
                    <div className="space-y-3">
                        {TOP_CONTRIBUTORS.map((contributor, index) => (
                            <div key={contributor.name} className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#22d3ee]/20 to-[#a855f7]/20 flex items-center justify-center text-xs font-semibold text-[#22d3ee]">
                                    #{index + 1}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-medium text-foreground truncate">{contributor.name}</p>
                                    <p className="text-xs text-muted-foreground">
                                        {contributor.answers} answers • {contributor.reputation} rep
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Community Guidelines */}
                <div className="bg-gradient-to-br from-[#22d3ee]/10 to-[#a855f7]/10 border border-[#22d3ee]/20 rounded-xl p-6">
                    <div className="flex items-center gap-2 mb-3">
                        <BookOpen className="w-4 h-4 text-[#22d3ee]" />
                        <h3 className="font-semibold">Community Guidelines</h3>
                    </div>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                        {["Be respectful and inclusive", "Search before asking", "Provide minimal examples", "Accept helpful answers"].map((g) => (
                            <li key={g} className="flex gap-2">
                                <span className="text-[#22d3ee]">•</span>
                                <span>{g}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </aside>
        </div>
    );
}
