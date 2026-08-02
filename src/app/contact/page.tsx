"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";

export default function ContactPage() {
  return (
    <div className="min-h-screen mesh-bg text-white pt-40 pb-20 px-6 relative overflow-hidden">
      <div className="max-w-[800px] mx-auto relative z-10 text-center">
        <AnimatedSection>
          <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-white/5 backdrop-blur-xl border border-white/20 text-xs font-bold text-cyan-100 tracking-[0.2em] uppercase mb-8 shadow-[0_0_30px_rgba(34,211,238,0.15)]">
            Start a project
          </div>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-white mb-6">
            Let's Talk.
          </h1>
          <p className="text-xl text-slate-300 font-medium mb-16 max-w-2xl mx-auto">
            Fill out the form below or start a quick chat on WhatsApp. We aim to respond on the same day.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="glass-card p-10 max-w-2xl mx-auto rounded-[2.5rem] border border-white/20 shadow-2xl relative text-left">
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-[2.5rem] pointer-events-none" />
            
            <form className="relative z-10 flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold tracking-widest uppercase text-slate-400">Name</label>
                <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all" placeholder="John Doe" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold tracking-widest uppercase text-slate-400">Email</label>
                <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all" placeholder="john@company.com" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold tracking-widest uppercase text-slate-400">Project Type</label>
                <select className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-slate-300 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all appearance-none">
                  <option value="" className="text-slate-900">Select a type...</option>
                  <option value="web" className="text-slate-900">Web Development</option>
                  <option value="ecommerce" className="text-slate-900">E-commerce</option>
                  <option value="ai" className="text-slate-900">AI Integration</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold tracking-widest uppercase text-slate-400">Message</label>
                <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all resize-none" placeholder="Tell us about your project..."></textarea>
              </div>
              
              <button className="w-full mt-4 py-5 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-extrabold text-lg hover:shadow-[0_0_40px_rgba(34,211,238,0.5)] hover:scale-[1.02] transition-all">
                Submit Inquiry
              </button>
            </form>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
