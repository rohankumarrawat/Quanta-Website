import { ModuleCard } from "../components/ModuleCard";
import { CodeBlock } from "../components/CodeBlock";
import { Brain, Atom, Network, Database } from "lucide-react";

export function CoreSyntaxPage() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-3 text-muted-foreground text-sm">
          <span>Documentation</span>
          <span>/</span>
          <span>Core Syntax</span>
        </div>
        <h1 className="text-5xl font-bold">Core Syntax</h1>
        <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
          Explore the fundamental building blocks of Quanta. Learn about modules, quantum primitives, 
          and the unique syntax that makes quantum programming accessible.
        </p>
      </div>

      {/* Module Reference */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold">Core Modules</h2>
        <p className="text-muted-foreground">
          Quanta provides powerful built-in modules for quantum and classical computing operations.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ModuleCard
            icon={Brain}
            title="Logic Engine"
            description="Classical computation primitives, control flow, and traditional programming constructs for hybrid quantum-classical algorithms."
          />
          <ModuleCard
            icon={Atom}
            title="Quantum Compute"
            description="Quantum gates, superposition, and measurement operations. Interface with quantum processors and simulators."
          />
          <ModuleCard
            icon={Network}
            title="Entanglement API"
            description="Create and manage entangled quantum states. Build quantum communication protocols and distributed quantum systems."
          />
          <ModuleCard
            icon={Database}
            title="Memory Core"
            description="Quantum memory management, state persistence, and error correction codes for fault-tolerant quantum computing."
          />
        </div>
      </div>

      {/* Code Example */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold">Example: Quantum Superposition</h2>
        <p className="text-muted-foreground">
          Here's a simple example demonstrating quantum superposition and measurement in Quanta.
        </p>

        <CodeBlock
          code={`import { Qubit, Gate, measure } from "@quanta/quantum";

quantum main() {
  // Create a qubit in |0⟩ state
  let q = Qubit.init(0);
  
  // Apply Hadamard gate to create superposition
  q = Gate.hadamard(q);
  
  // Now q is in state: |0⟩ + |1⟩ (equal superposition)
  
  // Measure the qubit
  let result = measure(q);
  print(\`Measured: \${result}\`); // 0 or 1 with 50% probability
}

// Entanglement example
quantum bellState() {
  let q1 = Qubit.init(0);
  let q2 = Qubit.init(0);
  
  // Create Bell state (EPR pair)
  q1 = Gate.hadamard(q1);
  [q1, q2] = Gate.cnot(q1, q2);
  
  // q1 and q2 are now maximally entangled
  return [q1, q2];
}`}
          language="quanta"
        />
      </div>

      {/* Syntax Features */}
      <div className="bg-card border border-border rounded-xl p-8 space-y-6">
        <h3 className="text-xl font-semibold">Key Syntax Features</h3>
        
        <div className="grid gap-4">
          <div className="flex gap-4">
            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#22d3ee] to-[#a855f7] mt-2 flex-shrink-0" />
            <div>
              <h4 className="font-semibold mb-1">Quantum-First Keywords</h4>
              <p className="text-sm text-muted-foreground">
                Use <code className="px-2 py-0.5 rounded bg-muted text-[#22d3ee]">quantum</code> keyword 
                to denote functions that can operate on quantum states.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#22d3ee] to-[#a855f7] mt-2 flex-shrink-0" />
            <div>
              <h4 className="font-semibold mb-1">Type Inference</h4>
              <p className="text-sm text-muted-foreground">
                Automatic type inference for both classical and quantum types, with explicit annotations when needed.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#22d3ee] to-[#a855f7] mt-2 flex-shrink-0" />
            <div>
              <h4 className="font-semibold mb-1">Immutable by Default</h4>
              <p className="text-sm text-muted-foreground">
                Variables are immutable by default, preventing accidental quantum state modifications.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#22d3ee] to-[#a855f7] mt-2 flex-shrink-0" />
            <div>
              <h4 className="font-semibold mb-1">Gate Composition</h4>
              <p className="text-sm text-muted-foreground">
                Compose quantum gates using intuitive functional syntax with automatic optimization.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
