import { CodeBlock } from "../components/CodeBlock";
import { LinkCard } from "../components/LinkCard";
import { Terminal, Download, CheckCircle2 } from "lucide-react";

export function QuickstartPage() {
    return (
        <div className="space-y-12">
            {/* Header */}
            <div className="space-y-4">
                <div className="flex items-center gap-3 text-muted-foreground text-sm">
                    <span>Documentation</span>
                    <span>/</span>
                    <span>Quickstart Guide</span>
                </div>
                <h1 className="text-5xl font-bold">Quickstart Guide</h1>
                <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
                    Get up and running with Quanta in under 5 minutes. Follow these simple steps to install
                    and verify your Quanta environment.
                </p>
            </div>

            {/* Installation Section */}
            <div className="space-y-6">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#22d3ee]/20 to-[#a855f7]/20 flex items-center justify-center">
                        <Terminal className="w-4 h-4 text-[#22d3ee]" />
                    </div>
                    <h2 className="text-2xl font-semibold">Install via CLI</h2>
                </div>

                <p className="text-muted-foreground">
                    The fastest way to install Quanta is through our command-line installer. This will set up
                    the compiler, runtime, and essential tools.
                </p>

                <CodeBlock
                    code={`curl -fsSL https://quanta.dev/install.sh | bash

# Or using npm
npm install -g quanta-lang

# Or using Homebrew (macOS)
brew install quanta`}
                    language="bash"
                />
            </div>

            {/* Manual Download Section */}
            <div className="space-y-6">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#a855f7]/20 to-[#22d3ee]/20 flex items-center justify-center">
                        <Download className="w-4 h-4 text-[#a855f7]" />
                    </div>
                    <h2 className="text-2xl font-semibold">Manual Download</h2>
                </div>

                <p className="text-muted-foreground mb-4">
                    Prefer to install manually? Download the latest release for your platform.
                </p>

                <div className="grid gap-4">
                    <LinkCard title="Download for macOS (Apple Silicon)" href="https://quanta.dev/download/macos-arm64" />
                    <LinkCard title="Download for macOS (Intel)" href="https://quanta.dev/download/macos-x64" />
                    <LinkCard title="Download for Windows" href="https://quanta.dev/download/windows" />
                    <LinkCard title="Download for Linux" href="https://quanta.dev/download/linux" />
                </div>
            </div>

            {/* Verify Installation Section */}
            <div className="space-y-6">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#22d3ee]/20 to-[#a855f7]/20 flex items-center justify-center">
                        <CheckCircle2 className="w-4 h-4 text-[#22d3ee]" />
                    </div>
                    <h2 className="text-2xl font-semibold">Verify Installation</h2>
                </div>

                <p className="text-muted-foreground">
                    After installation, verify that Quanta is correctly installed and check the version.
                </p>

                <CodeBlock
                    code={`quanta --version
# Expected output: Quanta v2.7.0

# Create your first Quanta file
echo 'quantum main() { print("Hello from Quanta!"); }' > hello.qta

# Run your program
quanta run hello.qta`}
                    language="bash"
                />
            </div>

            {/* Next Steps */}
            <div className="bg-gradient-to-r from-[#22d3ee]/10 to-[#a855f7]/10 border border-[#22d3ee]/20 rounded-xl p-8">
                <h3 className="text-xl font-semibold mb-3">Next Steps</h3>
                <p className="text-muted-foreground mb-6">
                    Now that you have Quanta installed, explore the core syntax and start building quantum-ready applications.
                </p>
                <div className="flex gap-4">
                    <a
                        href="/syntax"
                        className="inline-flex items-center px-5 py-2.5 rounded-lg bg-gradient-to-r from-[#22d3ee] to-[#a855f7] text-background font-medium hover:shadow-lg hover:shadow-[#22d3ee]/25 transition-all"
                    >
                        Learn Core Syntax →
                    </a>
                    <a
                        href="/about"
                        className="inline-flex items-center px-5 py-2.5 rounded-lg border border-border text-foreground font-medium hover:bg-card transition-all"
                    >
                        About Quanta
                    </a>
                </div>
            </div>
        </div>
    );
}
