import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Globe, Cpu, Layers } from "lucide-react";

export default function ServicesPage() {
  return (
    <div className="min-h-screen mesh-bg text-white pt-40 pb-20 px-6 relative overflow-hidden">
      <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-blue-600/20 rounded-[100%] mix-blend-screen filter blur-[120px] animate-blob z-0" />
      
      <div className="max-w-[1200px] mx-auto relative z-10">
        <AnimatedSection>
          <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-white/5 backdrop-blur-xl border border-white/20 text-xs font-bold text-cyan-100 tracking-[0.2em] uppercase mb-8 shadow-[0_0_30px_rgba(34,211,238,0.15)]">
            Our Services
          </div>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-white mb-6">
            Engineering at <br/> the highest level.
          </h1>
          <p className="text-xl text-slate-300 font-medium mb-16 max-w-2xl">
            We focus on what we do best: delivering production-grade digital products swiftly through our AI-native workflow.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <AnimatedSection delay={0.2} className="group">
            <div className="glass-card p-10 h-full flex flex-col justify-between border border-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(34,211,238,0.2)] relative overflow-hidden rounded-[2.5rem]">
              <div className="absolute top-[-20%] right-[-20%] w-[200px] h-[200px] bg-blue-500/20 rounded-full blur-[60px] group-hover:bg-blue-500/40 transition-colors duration-700" />
              <div className="relative z-10">
                <Globe className="w-10 h-10 text-cyan-400 mb-6" />
                <h3 className="text-2xl font-black tracking-tight text-white mb-4">Web Development</h3>
                <p className="text-slate-300 font-medium mb-8">Custom marketing sites, high-performance landing pages, and interactive web apps.</p>
              </div>
              <div className="relative z-10 pt-6 border-t border-white/10">
                <p className="text-xs font-bold text-slate-400 font-mono">Stack: Next.js, Tailwind, Vercel</p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.3} className="group">
            <div className="glass-card p-10 h-full flex flex-col justify-between border border-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(168,85,247,0.2)] relative overflow-hidden rounded-[2.5rem]">
              <div className="absolute top-[-20%] right-[-20%] w-[200px] h-[200px] bg-purple-500/20 rounded-full blur-[60px] group-hover:bg-purple-500/40 transition-colors duration-700" />
              <div className="relative z-10">
                <Layers className="w-10 h-10 text-purple-400 mb-6" />
                <h3 className="text-2xl font-black tracking-tight text-white mb-4">E-commerce</h3>
                <p className="text-slate-300 font-medium mb-8">Headless storefronts, custom checkout flows, and payment gateway integrations.</p>
              </div>
              <div className="relative z-10 pt-6 border-t border-white/10">
                <p className="text-xs font-bold text-slate-400 font-mono">Stack: Next.js, Hono, Custom Admin</p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.4} className="group">
            <div className="glass-card p-10 h-full flex flex-col justify-between border border-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(236,72,153,0.2)] relative overflow-hidden rounded-[2.5rem]">
              <div className="absolute top-[-20%] right-[-20%] w-[200px] h-[200px] bg-pink-500/20 rounded-full blur-[60px] group-hover:bg-pink-500/40 transition-colors duration-700" />
              <div className="relative z-10">
                <Cpu className="w-10 h-10 text-pink-400 mb-6" />
                <h3 className="text-2xl font-black tracking-tight text-white mb-4">AI Integration</h3>
                <p className="text-slate-300 font-medium mb-8">Workflow automation and AI features integrated seamlessly into existing products.</p>
              </div>
              <div className="relative z-10 pt-6 border-t border-white/10">
                <p className="text-xs font-bold text-slate-400 font-mono">Stack: FastAPI, LLMs, Node.js</p>
              </div>
            </div>
          </AnimatedSection>

        </div>
      </div>
    </div>
  );
}
