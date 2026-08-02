import Link from "next/link";
import { ArrowRight, Code2, Globe, Cpu, Zap, Layers } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { TextReveal } from "@/components/ui/TextReveal";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen relative bg-[#f4f7fe] text-slate-800 font-sans overflow-hidden">
      
      {/* Massive Gradient Background Orbs */}
      <div className="fixed top-[-20%] left-[-10%] w-[70vw] h-[70vw] rounded-full bg-gradient-to-br from-purple-400/30 to-blue-400/30 blur-[120px] pointer-events-none -z-10 animate-pulse" />
      <div className="fixed bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-gradient-to-br from-cyan-400/20 to-emerald-400/20 blur-[100px] pointer-events-none -z-10" />

      {/* Hero Section */}
      <section className="min-h-[90vh] flex flex-col justify-center px-6 relative z-10 pt-32 pb-20 text-center items-center">
        <div className="max-w-[1200px] mx-auto w-full flex flex-col items-center">
          
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/60 backdrop-blur-md border border-white/40 shadow-xl shadow-purple-500/10 text-sm font-semibold text-purple-700 tracking-wide uppercase mb-8">
              <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
              Smart Digital Solutions
            </div>
          </AnimatedSection>

          <h1 className="text-[10vw] sm:text-[6vw] md:text-[5vw] leading-[1.1] font-extrabold tracking-tight text-slate-900 drop-shadow-sm max-w-4xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">Accelerate</span> Your Online Presence
          </h1>
          
          <AnimatedSection delay={0.4} className="mt-6">
            <p className="text-lg sm:text-xl text-slate-600 max-w-2xl font-medium leading-relaxed">
              We build premium, high-performance web applications and AI products designed to scale your business into the digital future.
            </p>
          </AnimatedSection>
          
          <AnimatedSection delay={0.6} className="mt-10 flex gap-4">
            <Link href="/contact" className="group h-14 px-8 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold flex items-center justify-center gap-3 shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 hover:scale-105 transition-all duration-300">
              Start Project
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                <ArrowRight className="w-4 h-4 text-white" />
              </div>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* 3D Glassmorphism Bento Grid */}
      <section className="py-20 px-6 relative z-10">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-slate-900 mb-4">Our Expertise</h2>
            <p className="text-slate-600">Comprehensive digital engineering solutions</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 auto-rows-[350px]">
            
            {/* Massive Web Dev Block */}
            <AnimatedSection className="md:col-span-2 group">
              <div className="w-full h-full rounded-3xl bg-white/80 backdrop-blur-xl border border-white/60 p-10 flex flex-col justify-between overflow-hidden relative transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-2">
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-bl from-blue-400/20 to-transparent rounded-full blur-3xl group-hover:from-blue-400/30 transition-colors" />
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-6 shadow-lg shadow-blue-500/30">
                    <Globe className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-4xl font-bold tracking-tight text-slate-900 mb-3">Web & App Development</h3>
                  <p className="text-lg text-slate-600 max-w-md font-medium">Enterprise-grade React and Next.js applications engineered for massive scale.</p>
                </div>
              </div>
            </AnimatedSection>

            {/* AI Block */}
            <AnimatedSection delay={0.2} className="group">
              <div className="w-full h-full rounded-3xl bg-white/80 backdrop-blur-xl border border-white/60 p-8 flex flex-col justify-between overflow-hidden relative transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 hover:-translate-y-2">
                <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-gradient-to-tl from-purple-400/20 to-transparent rounded-full blur-2xl group-hover:from-purple-400/30 transition-colors" />
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-6 shadow-lg shadow-purple-500/30">
                    <Cpu className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold tracking-tight text-slate-900 mb-2">AI Integration</h3>
                  <p className="text-slate-600 font-medium">Embedding intelligent agents into your workflow.</p>
                </div>
              </div>
            </AnimatedSection>

            {/* UI/UX Design Block */}
            <AnimatedSection delay={0.3} className="group">
              <div className="w-full h-full rounded-3xl bg-white/80 backdrop-blur-xl border border-white/60 p-8 flex flex-col justify-between overflow-hidden relative transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-500/20 hover:-translate-y-2">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center mb-6 shadow-lg shadow-emerald-500/30">
                  <Layers className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold tracking-tight text-slate-900 mb-2">UI/UX Design</h3>
                  <p className="text-slate-600 font-medium">Stunning, vibrant interfaces built for conversion.</p>
                </div>
              </div>
            </AnimatedSection>

            {/* Wide Work Block */}
            <AnimatedSection delay={0.4} className="md:col-span-2 group">
              <Link href="/work" className="block w-full h-full rounded-3xl bg-gradient-to-r from-slate-900 to-slate-800 border border-slate-700 p-10 overflow-hidden relative hover:shadow-2xl hover:shadow-slate-900/30 transition-all duration-500 hover:-translate-y-2">
                <div className="flex flex-col justify-between h-full relative z-10">
                  <div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Case Studies</h2>
                    <p className="text-xl text-slate-300 font-medium">Explore Kvastram, AttendAI, and our latest shipped products.</p>
                  </div>
                  <div className="flex items-center gap-4 text-purple-400 font-bold group-hover:text-purple-300 transition-colors">
                    View Portfolio <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
                {/* 3D abstract shapes decoration */}
                <div className="absolute right-[-10%] bottom-[-20%] w-[300px] h-[300px] bg-gradient-to-tr from-purple-600 to-blue-600 rounded-full blur-3xl opacity-50 group-hover:opacity-70 transition-opacity" />
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Modern CTA */}
      <section className="py-32 px-6 relative z-10 mt-20">
        <div className="max-w-[1000px] mx-auto bg-white/90 backdrop-blur-2xl border border-white shadow-2xl shadow-blue-500/10 rounded-[3rem] p-16 flex flex-col items-center text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500" />
          <Zap className="w-16 h-16 text-blue-500 mb-8" />
          <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 mb-8">
            Ready to Build?
          </h2>
          <p className="text-xl text-slate-600 font-medium mb-10 max-w-lg">
            Let's transform your vision into a high-performance digital reality.
          </p>
          <Link href="/contact" className="h-16 px-10 rounded-full bg-slate-900 text-white font-bold text-lg flex items-center justify-center hover:bg-slate-800 hover:scale-105 transition-all shadow-xl shadow-slate-900/20">
            Get Free Consultation
          </Link>
        </div>
      </section>

    </div>
  );
}
