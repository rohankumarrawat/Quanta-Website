import { Badge } from "../components/Badge";
import { Sparkles, Target, Gauge, Boxes } from "lucide-react";

export function AboutPage() {
    return (
        <div className="space-y-12">
            {/* Header */}
            <div className="space-y-4">
                <div className="flex items-center gap-3 text-muted-foreground text-sm">
                    <span>Documentation</span>
                    <span>/</span>
                    <span>About</span>
                </div>
                <h1 className="text-5xl font-bold">About Quanta</h1>
                <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
                    Learn about the philosophy, design principles, and vision behind Quanta—the programming
                    language built for the quantum age.
                </p>
            </div>

            {/* Purpose Section */}
            <div className="space-y-6">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#22d3ee]/20 to-[#a855f7]/20 flex items-center justify-center">
                        <Target className="w-4 h-4 text-[#22d3ee]" />
                    </div>
                    <h2 className="text-2xl font-semibold">Purpose</h2>
                </div>

                <div className="prose prose-invert max-w-none">
                    <p className="text-muted-foreground leading-relaxed">
                        Quanta was created to bridge the gap between classical and quantum computing. As quantum
                        processors become more accessible, developers need tools that make quantum programming
                        intuitive without sacrificing the power and flexibility required for advanced applications.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                        Traditional programming languages treat quantum operations as external libraries or
                        afterthoughts. Quanta takes a different approach—quantum primitives are first-class
                        citizens, deeply integrated into the language syntax and type system.
                    </p>
                </div>
            </div>

            {/* Benefits Section */}
            <div className="space-y-6">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#a855f7]/20 to-[#22d3ee]/20 flex items-center justify-center">
                        <Sparkles className="w-4 h-4 text-[#a855f7]" />
                    </div>
                    <h2 className="text-2xl font-semibold">Key Benefits</h2>
                </div>

                <div className="grid gap-6">
                    <div className="bg-card border border-border rounded-xl p-6">
                        <h3 className="font-semibold mb-2 flex items-center gap-2">
                            <Badge variant="primary">Developer Experience</Badge>
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                            Write quantum algorithms with the same ease as classical code. Quanta's syntax is
                            designed to be familiar to developers coming from modern languages like TypeScript,
                            Rust, or Swift, while introducing quantum concepts gradually.
                        </p>
                    </div>

                    <div className="bg-card border border-border rounded-xl p-6">
                        <h3 className="font-semibold mb-2 flex items-center gap-2">
                            <Badge variant="primary">Type Safety</Badge>
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                            The advanced type system prevents common quantum programming errors at compile-time.
                            Quantum state types, measurement constraints, and entanglement tracking are all
                            verified before your code runs.
                        </p>
                    </div>

                    <div className="bg-card border border-border rounded-xl p-6">
                        <h3 className="font-semibold mb-2 flex items-center gap-2">
                            <Badge variant="primary">Hybrid Computing</Badge>
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                            Seamlessly mix classical and quantum operations. Quanta's runtime intelligently manages
                            the boundary between quantum and classical computation, optimizing execution across
                            both paradigms.
                        </p>
                    </div>
                </div>
            </div>

            {/* Performance Section */}
            <div className="space-y-6">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#22d3ee]/20 to-[#a855f7]/20 flex items-center justify-center">
                        <Gauge className="w-4 h-4 text-[#22d3ee]" />
                    </div>
                    <h2 className="text-2xl font-semibold">Performance</h2>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                    Quanta compiles to highly optimized quantum circuits and classical machine code. The compiler
                    performs aggressive optimization passes including:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                        { title: "Gate Fusion", desc: "Combines multiple quantum gates into optimized composite operations" },
                        { title: "Circuit Depth Reduction", desc: "Minimizes circuit depth for better performance on NISQ devices" },
                        { title: "Classical Optimization", desc: "LLVM-based compilation for classical code paths" },
                        { title: "Auto-Parallelization", desc: "Automatically parallelizes independent quantum operations" },
                    ].map((item) => (
                        <div key={item.title} className="flex gap-3 items-start">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#22d3ee] mt-2 flex-shrink-0" />
                            <div>
                                <p className="font-medium">{item.title}</p>
                                <p className="text-sm text-muted-foreground">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Use Cases Section */}
            <div className="space-y-6">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#a855f7]/20 to-[#22d3ee]/20 flex items-center justify-center">
                        <Boxes className="w-4 h-4 text-[#a855f7]" />
                    </div>
                    <h2 className="text-2xl font-semibold">Use Cases</h2>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-6">
                    Quanta is ideal for a wide range of quantum computing applications:
                </p>

                <div className="space-y-4">
                    {[
                        { title: "Quantum Machine Learning", gradient: "from-[#22d3ee]/5 to-[#a855f7]/5", desc: "Build quantum neural networks, variational algorithms, and hybrid ML models that leverage quantum advantage for pattern recognition and optimization." },
                        { title: "Cryptography & Security", gradient: "from-[#a855f7]/5 to-[#22d3ee]/5", desc: "Implement quantum key distribution, post-quantum encryption algorithms, and quantum-safe security protocols for next-generation secure communications." },
                        { title: "Optimization Problems", gradient: "from-[#22d3ee]/5 to-[#a855f7]/5", desc: "Solve complex optimization challenges in logistics, finance, and operations research using quantum annealing and variational quantum algorithms." },
                        { title: "Quantum Simulation", gradient: "from-[#a855f7]/5 to-[#22d3ee]/5", desc: "Simulate molecular dynamics, materials science, and chemical reactions with quantum accuracy for drug discovery and materials engineering." },
                    ].map((uc) => (
                        <div key={uc.title} className={`bg-gradient-to-r ${uc.gradient} border border-border rounded-lg p-5`}>
                            <h4 className="font-semibold mb-2">{uc.title}</h4>
                            <p className="text-sm text-muted-foreground">{uc.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Footer CTA */}
            <div className="bg-gradient-to-r from-[#22d3ee]/10 to-[#a855f7]/10 border border-[#22d3ee]/20 rounded-xl p-8 text-center">
                <h3 className="text-2xl font-semibold mb-3">Join the Quantum Revolution</h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                    Quanta is open source and actively developed by a global community of quantum computing
                    enthusiasts and researchers. Start building quantum applications today.
                </p>
                <div className="flex gap-4 justify-center">
                    <a
                        href="/quickstart"
                        className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-[#22d3ee] to-[#a855f7] text-background font-medium hover:shadow-lg hover:shadow-[#22d3ee]/25 transition-all"
                    >
                        Get Started
                    </a>
                    <a
                        href="https://github.com/quanta-lang"
                        className="inline-flex items-center px-6 py-3 rounded-lg border border-border text-foreground font-medium hover:bg-card transition-all"
                    >
                        View on GitHub
                    </a>
                </div>
            </div>
        </div>
    );
}
