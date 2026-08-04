import { AnimatedSection } from "@/components/ui/AnimatedSection";

export default function WorkPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white pt-40 pb-20 px-6 relative overflow-hidden">
      
      <div className="max-w-[1200px] mx-auto relative z-10">
        <AnimatedSection>
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-none border border-slate-800 bg-slate-900/50 text-xs font-bold text-slate-300 tracking-[0.2em] uppercase mb-8 shadow-sm">
            Our Portfolio
          </div>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-white mb-6">
            Products we've built.
          </h1>
          <p className="text-xl text-slate-300 font-medium mb-16 max-w-2xl">
            Real products shipped for real users. No vanity metrics, just working software engineered to scale.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <AnimatedSection delay={0.2} className="group">
            <div className="bg-[#0f172a] p-10 h-full flex flex-col justify-between border border-slate-800 rounded-none relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-3xl font-black tracking-tighter text-white mb-4">Corporate Law Firm</h3>
                <p className="text-lg text-slate-400 mb-8 font-medium">A high-performance corporate platform with secure client portals.</p>
              </div>
              <div className="relative z-10 pt-8 border-t border-slate-800">
                <p className="text-sm font-semibold text-slate-500 mb-2"><span className="text-slate-300">Stack:</span> Next.js, Node.js, PostgreSQL</p>
                <p className="text-sm font-semibold text-slate-500"><span className="text-slate-300">Outcome:</span> Delivered a fast, SEO-optimized web presence.</p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.3} className="group">
            <div className="bg-[#0f172a] p-10 h-full flex flex-col justify-between border border-slate-800 rounded-none relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-3xl font-black tracking-tighter text-white mb-4">High-Volume B2B E-commerce</h3>
                <p className="text-lg text-slate-400 mb-8 font-medium">Scalable headless storefront capable of handling massive B2B orders.</p>
              </div>
              <div className="relative z-10 pt-8 border-t border-slate-800">
                <p className="text-sm font-semibold text-slate-500 mb-2"><span className="text-slate-300">Stack:</span> React, TypeScript, GraphQL</p>
                <p className="text-sm font-semibold text-slate-500"><span className="text-slate-300">Outcome:</span> Built robust ordering workflows and admin controls.</p>
              </div>
            </div>
          </AnimatedSection>

        </div>
      </div>
    </div>
  );
}
