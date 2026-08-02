import { AnimatedSection } from "@/components/ui/AnimatedSection";

export default function WorkPage() {
  return (
    <div className="min-h-screen mesh-bg text-white pt-40 pb-20 px-6 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-cyan-500/20 rounded-[100%] mix-blend-screen filter blur-[120px] animate-blob z-0" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-purple-600/20 rounded-[100%] mix-blend-screen filter blur-[120px] animate-blob animation-delay-2000 z-0" />
      
      <div className="max-w-[1200px] mx-auto relative z-10">
        <AnimatedSection>
          <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-white/5 backdrop-blur-xl border border-white/20 text-xs font-bold text-cyan-100 tracking-[0.2em] uppercase mb-8 shadow-[0_0_30px_rgba(34,211,238,0.15)]">
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
            <div className="glass-card p-10 h-full flex flex-col justify-between border border-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(34,211,238,0.2)] relative overflow-hidden rounded-[2.5rem]">
              <div className="absolute top-[-20%] right-[-20%] w-[300px] h-[300px] bg-cyan-500/20 rounded-full blur-[80px] group-hover:bg-cyan-500/40 transition-colors duration-700" />
              <div className="relative z-10">
                <h3 className="text-3xl font-black tracking-tighter text-white mb-4">Kvastram</h3>
                <p className="text-lg text-slate-300 mb-8 font-medium">A high-performance headless e-commerce storefront with custom admin controls.</p>
              </div>
              <div className="relative z-10 pt-8 border-t border-white/10">
                <p className="text-sm font-semibold text-slate-400 mb-2"><span className="text-white">Stack:</span> Next.js, Hono, Razorpay, PayPal</p>
                <p className="text-sm font-semibold text-slate-400"><span className="text-white">Outcome:</span> Delivered a fully integrated custom checkout flow.</p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.3} className="group">
            <div className="glass-card p-10 h-full flex flex-col justify-between border border-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(168,85,247,0.2)] relative overflow-hidden rounded-[2.5rem]">
              <div className="absolute top-[-20%] right-[-20%] w-[300px] h-[300px] bg-purple-500/20 rounded-full blur-[80px] group-hover:bg-purple-500/40 transition-colors duration-700" />
              <div className="relative z-10">
                <h3 className="text-3xl font-black tracking-tighter text-white mb-4">AttendAI (Pilot)</h3>
                <p className="text-lg text-slate-300 mb-8 font-medium">AI product leveraging facial recognition and voice notifications.</p>
              </div>
              <div className="relative z-10 pt-8 border-t border-white/10">
                <p className="text-sm font-semibold text-slate-400 mb-2"><span className="text-white">Stack:</span> FastAPI, Face Recognition, Sarvam AI</p>
                <p className="text-sm font-semibold text-slate-400"><span className="text-white">Outcome:</span> In-progress pilot phase, demonstrating advanced AI capabilities.</p>
              </div>
            </div>
          </AnimatedSection>

        </div>
      </div>
    </div>
  );
}
