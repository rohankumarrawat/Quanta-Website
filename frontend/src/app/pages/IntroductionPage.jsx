import { InfoCard } from "../components/InfoCard";
import { Badge } from "../components/Badge";
import { Zap, Shield, Cpu, Globe, FileText, Sparkles, Megaphone } from "lucide-react";

export function IntroductionPage() {
    const latestUpdates = [
        {
            icon: FileText,
            type: "Release Note",
            title: "Quanta v2.7 Released",
            description: "Enhanced quantum error correction, improved type inference, and 40% faster compilation times.",
            date: "March 1, 2026",
            accentColor: "from-[#22d3ee]",
        },
        {
            icon: Sparkles,
            type: "New Feature",
            title: "Automatic Circuit Optimization",
            description: "The compiler now automatically optimizes quantum circuits for reduced gate count and depth.",
            date: "February 24, 2026",
            accentColor: "from-[#a855f7]",
        },
        {
            icon: Megaphone,
            type: "Announcement",
            title: "Community Forum Now Live",
            description: "Join discussions, ask questions, and share knowledge with the growing Quanta community.",
            date: "February 15, 2026",
            accentColor: "from-[#22d3ee]",
        },
    ];

    return (
        <div className="space-y-12">
            {/* Hero Section */}
            <div className="space-y-6">
                <div className="flex items-center gap-3">
                    <Badge variant="primary">v2.7 Latest</Badge>
                    <Badge variant="secondary">Open Source</Badge>
                </div>

                <h1 className="text-6xl font-bold leading-tight">
                    Welcome to{" "}
                    <span className="bg-gradient-to-r from-[#22d3ee] to-[#a855f7] bg-clip-text text-transparent">
                        Quanta
                    </span>
                </h1>

                <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
                    A next-generation programming language designed for quantum-ready computing.
                    Quanta combines the simplicity of modern syntax with the power of quantum operations,
                    enabling developers to build applications for tomorrow's computational paradigms.
                </p>
            </div>

            {/* Latest Updates Section */}
            <div className="space-y-6">
                <h2 className="text-3xl font-bold">Latest Updates</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {latestUpdates.map((update, index) => {
                        const Icon = update.icon;
                        return (
                            <div
                                key={index}
                                className="group bg-card border border-border rounded-xl p-6 hover:border-[#22d3ee]/30 transition-all cursor-pointer"
                            >
                                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${update.accentColor} to-[#a855f7]/20 flex items-center justify-center mb-4`}>
                                    <Icon className="w-6 h-6 text-[#22d3ee]" />
                                </div>
                                <div className="text-xs font-medium text-[#22d3ee] mb-2">
                                    {update.type}
                                </div>
                                <h3 className="text-lg font-semibold mb-2 group-hover:text-[#22d3ee] transition-colors">
                                    {update.title}
                                </h3>
                                <p className="text-sm text-muted-foreground mb-4">
                                    {update.description}
                                </p>
                                <div className="text-xs text-muted-foreground">
                                    {update.date}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <InfoCard
                    icon={Zap}
                    title="Lightning Fast"
                    description="Optimized compiler delivering blazing-fast execution with minimal overhead. Built for performance-critical applications."
                />
                <InfoCard
                    icon={Shield}
                    title="Type Safe"
                    description="Advanced type system with quantum state inference, catching errors at compile-time and ensuring reliability."
                />
                <InfoCard
                    icon={Cpu}
                    title="Quantum Ready"
                    description="Native support for quantum computing primitives, superposition states, and entanglement operations."
                />
                <InfoCard
                    icon={Globe}
                    title="Universal Runtime"
                    description="Deploy anywhere - from edge devices to quantum processors. Write once, run on classical or quantum hardware."
                />
            </div>

            {/* Getting Started */}
            <div className="bg-card border border-border rounded-xl p-8">
                <h2 className="text-2xl font-semibold mb-4">Ready to get started?</h2>
                <p className="text-muted-foreground mb-6">
                    Follow our quickstart guide to install Quanta and build your first quantum-ready application in minutes.
                </p>
                <a
                    href="/quickstart"
                    className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-[#22d3ee] to-[#a855f7] text-background font-medium hover:shadow-lg hover:shadow-[#22d3ee]/25 transition-all hover:scale-105"
                >
                    Get Started →
                </a>
            </div>
        </div>
    );
}
