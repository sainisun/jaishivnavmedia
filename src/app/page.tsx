import Link from "next/link";
import { ArrowRight, Code2, Globe, Cpu, Zap, Layers } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen relative font-sans overflow-hidden mesh-bg text-white">
      
      {/* Animated Mesh Blobs */}
      <div className="fixed top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-500/40 rounded-full mix-blend-screen filter blur-[100px] animate-blob pointer-events-none z-0" />
      <div className="fixed top-[20%] right-[-10%] w-[400px] h-[400px] bg-cyan-400/30 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-2000 pointer-events-none z-0" />
      <div className="fixed bottom-[-20%] left-[20%] w-[600px] h-[600px] bg-fuchsia-500/30 rounded-full mix-blend-screen filter blur-[120px] animate-blob animation-delay-4000 pointer-events-none z-0" />

      {/* Hero Section */}
      <section className="min-h-[90vh] flex flex-col justify-center px-6 relative z-10 pt-32 pb-20 text-center items-center">
        <div className="max-w-[1200px] mx-auto w-full flex flex-col items-center">
          
          <AnimatedSection>
            <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full glass-card border border-white/30 text-sm font-semibold text-white tracking-wide uppercase mb-10 shadow-[0_0_20px_rgba(255,255,255,0.2)]">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
              Next-Gen Digital Solutions
            </div>
          </AnimatedSection>

          <h1 className="text-[11vw] sm:text-[7vw] md:text-[6vw] leading-[1.1] font-extrabold tracking-tight text-white drop-shadow-2xl max-w-5xl mb-6">
            Accelerate Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 drop-shadow-none">Online Presence</span>
          </h1>
          
          <AnimatedSection delay={0.4}>
            <p className="text-xl sm:text-2xl text-blue-100/70 max-w-2xl font-light leading-relaxed mb-12">
              We build premium, high-performance web applications and AI products designed to scale your business into the digital future.
            </p>
          </AnimatedSection>
          
          <AnimatedSection delay={0.6} className="flex flex-col sm:flex-row gap-6">
            <Link href="/contact" className="group relative px-10 py-5 rounded-full bg-white text-slate-900 font-bold text-lg overflow-hidden shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_rgba(255,255,255,0.5)] hover:-translate-y-1 transition-all duration-300">
              <span className="relative z-10 flex items-center justify-center gap-3">
                Start Project
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-300 to-purple-300 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Transitional White Background Section (Like Waplia) */}
      <div className="relative bg-[#f8fafc] text-slate-900 rounded-t-[4rem] pt-24 pb-32 z-20 shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
        
        {/* 3D Glassmorphism Bento Grid */}
        <section className="px-6 relative z-10">
          <div className="max-w-[1400px] mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">Our Expertise</h2>
              <p className="text-xl text-slate-500 font-medium max-w-2xl mx-auto">Comprehensive digital engineering solutions wrapped in stunning interfaces.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 auto-rows-[380px]">
              
              {/* Massive Web Dev Block */}
              <AnimatedSection className="md:col-span-2 group">
                <div className="w-full h-full glass-card-light p-10 flex flex-col justify-between overflow-hidden relative transition-all duration-500 hover:shadow-[0_30px_60px_rgba(8,112,200,0.2)] hover:-translate-y-3">
                  <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-gradient-to-bl from-blue-400/20 to-cyan-300/10 rounded-full blur-[80px] group-hover:from-blue-400/40 transition-colors duration-700" />
                  
                  <div className="relative z-10">
                    <div className="w-20 h-20 rounded-3xl bg-white border border-white/50 shadow-xl shadow-blue-500/20 flex items-center justify-center mb-8 transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                      <Globe className="w-10 h-10 text-blue-500" />
                    </div>
                    <h3 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-4">Web & App <br/> Development</h3>
                    <p className="text-xl text-slate-600 max-w-md font-medium leading-relaxed">Enterprise-grade React and Next.js applications engineered for massive scale and speed.</p>
                  </div>
                </div>
              </AnimatedSection>

              {/* AI Block */}
              <AnimatedSection delay={0.2} className="group">
                <div className="w-full h-full glass-card-light p-10 flex flex-col justify-between overflow-hidden relative transition-all duration-500 hover:shadow-[0_30px_60px_rgba(168,85,247,0.2)] hover:-translate-y-3">
                  <div className="absolute bottom-[-20%] right-[-20%] w-[350px] h-[350px] bg-gradient-to-tl from-purple-400/20 to-fuchsia-300/10 rounded-full blur-[60px] group-hover:from-purple-400/40 transition-colors duration-700" />
                  
                  <div className="relative z-10">
                    <div className="w-16 h-16 rounded-3xl bg-white border border-white/50 shadow-xl shadow-purple-500/20 flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500">
                      <Cpu className="w-8 h-8 text-purple-500" />
                    </div>
                    <h3 className="text-3xl font-bold tracking-tight text-slate-900 mb-3">AI Integration</h3>
                    <p className="text-lg text-slate-600 font-medium">Embedding intelligent agents and LLMs seamlessly into your workflow.</p>
                  </div>
                </div>
              </AnimatedSection>

              {/* UI/UX Design Block */}
              <AnimatedSection delay={0.3} className="group">
                <div className="w-full h-full glass-card-light p-10 flex flex-col justify-between overflow-hidden relative transition-all duration-500 hover:shadow-[0_30px_60px_rgba(16,185,129,0.2)] hover:-translate-y-3">
                  <div className="w-16 h-16 rounded-3xl bg-white border border-white/50 shadow-xl shadow-emerald-500/20 flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                    <Layers className="w-8 h-8 text-emerald-500" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold tracking-tight text-slate-900 mb-3">UI/UX Design</h3>
                    <p className="text-lg text-slate-600 font-medium">Stunning, vibrant interfaces built for conversion and visual impact.</p>
                  </div>
                </div>
              </AnimatedSection>

              {/* Wide Work Block */}
              <AnimatedSection delay={0.4} className="md:col-span-2 group">
                <Link href="/work" className="block w-full h-full rounded-[2.5rem] bg-slate-900 p-12 overflow-hidden relative shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_30px_60px_rgba(0,0,0,0.4)]">
                  {/* Inner ring for 3D effect */}
                  <div className="absolute inset-0 rounded-[2.5rem] ring-1 ring-inset ring-white/10 pointer-events-none" />
                  
                  <div className="flex flex-col justify-between h-full relative z-10">
                    <div>
                      <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-6">Case Studies</h2>
                      <p className="text-2xl text-slate-300 font-medium">Explore Kvastram, AttendAI, and our latest shipped products.</p>
                    </div>
                    <div className="flex items-center gap-4 text-cyan-400 font-bold text-xl group-hover:text-cyan-300 transition-colors">
                      View Portfolio 
                      <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                        <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                  {/* Intense glowing orb inside the dark block */}
                  <div className="absolute right-[-10%] bottom-[-30%] w-[500px] h-[500px] bg-gradient-to-tr from-purple-600 to-cyan-500 rounded-full blur-[100px] opacity-40 group-hover:opacity-70 transition-opacity duration-700" />
                </Link>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* 3D Modern CTA */}
        <section className="py-40 px-6 relative z-10 mt-20">
          <div className="max-w-[1200px] mx-auto relative group">
            {/* Massive glowing shadow behind CTA */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-[4rem] blur-[80px] opacity-30 group-hover:opacity-50 transition-opacity duration-700" />
            
            <div className="bg-white rounded-[4rem] p-20 flex flex-col items-center text-center relative overflow-hidden border border-white shadow-[0_20px_50px_rgba(0,0,0,0.1)]">
              {/* Top accent gradient line */}
              <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500" />
              
              <div className="w-24 h-24 rounded-3xl bg-slate-50 border border-slate-100 shadow-2xl shadow-blue-500/20 flex items-center justify-center mb-10">
                <Zap className="w-12 h-12 text-blue-500" />
              </div>
              
              <h2 className="text-6xl md:text-8xl font-black tracking-tight text-slate-900 mb-10">
                Ready to Build?
              </h2>
              <p className="text-2xl text-slate-500 font-medium mb-16 max-w-2xl">
                Let's transform your vision into a high-performance digital reality today.
              </p>
              
              <Link href="/contact" className="h-20 px-12 rounded-full bg-gradient-to-r from-slate-900 to-slate-800 text-white font-extrabold text-xl flex items-center justify-center gap-4 hover:scale-105 transition-all duration-300 shadow-[0_20px_40px_rgba(0,0,0,0.3)] hover:shadow-[0_30px_60px_rgba(0,0,0,0.5)]">
                Get Free Consultation
                <ArrowRight className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </section>
      </div>

    </div>
  );
}
