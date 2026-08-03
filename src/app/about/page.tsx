import { StaggeredContainer, StaggeredItem } from "@/components/ui/StaggeredReveal";

export default function AboutPage() {
  return (
    <div className="min-h-screen mesh-bg text-white pt-40 pb-20 px-6 relative overflow-hidden">
      <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-purple-600/20 rounded-[100%] mix-blend-screen filter blur-[120px] animate-blob z-0" />
      
      <div className="max-w-[800px] mx-auto relative z-10">
        <StaggeredContainer>
          <StaggeredItem>
            <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-white/5 backdrop-blur-xl border border-white/20 text-xs font-bold text-cyan-100 tracking-[0.2em] uppercase mb-8 shadow-[0_0_30px_rgba(34,211,238,0.15)]">
              Our Studio
            </div>
          </StaggeredItem>
          <StaggeredItem>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-white mb-10 leading-[1.1]">
              We build what matters.
            </h1>
          </StaggeredItem>
          
          <div className="prose prose-invert prose-lg max-w-none">
            <StaggeredItem>
              <p className="text-2xl text-slate-300 font-medium leading-relaxed mb-8">
                We are a founder-led, small studio focusing on building exceptional digital products. We believe in honesty, speed, and technical excellence over enterprise theater.
              </p>
            </StaggeredItem>
            
            <StaggeredItem>
              <h2 className="text-3xl font-bold tracking-tight text-white mt-16 mb-6">The AI-Native Build Process</h2>
              <p className="text-slate-400 font-medium mb-6">
                We don't just use AI to write marketing copy; it is deeply embedded into our engineering lifecycle. Our methodology relies on:
              </p>
            </StaggeredItem>
            
            <ul className="space-y-4 text-slate-300 font-medium">
              <li className="flex items-start gap-4">
                <div className="w-2 h-2 mt-2 rounded-full bg-cyan-400" />
                <p><strong className="text-white">Document-first PRDs:</strong> Every project starts with rigorous specification.</p>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-2 h-2 mt-2 rounded-full bg-cyan-400" />
                <p><strong className="text-white">Agent Execution:</strong> Tasks are executed one by one using state-of-the-art coding agents.</p>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-2 h-2 mt-2 rounded-full bg-cyan-400" />
                <p><strong className="text-white">Human Review:</strong> Every line of generated code passes through structured human review before it reaches production.</p>
              </li>
            </ul>

            <StaggeredItem>
              <p className="text-slate-400 font-medium mt-8">
                This approach allows us to ship high-quality products in a fraction of the time it takes traditional agencies, without sacrificing maintainability or security.
              </p>
            </StaggeredItem>
          </div>
        </StaggeredContainer>
      </div>
    </div>
  );
}
