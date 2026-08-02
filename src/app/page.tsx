import Link from "next/link";
import { ArrowRight, Code2, Globe, Cpu, Zap, Layers, Sparkles } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col min-h-screen relative font-sans overflow-hidden mesh-bg text-white selection:bg-cyan-500/30">
        
        {/* Advanced CSS 3D Mesh Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-purple-600/30 rounded-[100%] mix-blend-screen filter blur-[120px] animate-blob z-0" />
          <div className="absolute top-[10%] right-[-10%] w-[600px] h-[600px] bg-cyan-500/20 rounded-[100%] mix-blend-screen filter blur-[100px] animate-blob animation-delay-2000 z-0" />
          <div className="absolute bottom-[-20%] left-[20%] w-[900px] h-[900px] bg-blue-600/20 rounded-[100%] mix-blend-screen filter blur-[150px] animate-blob animation-delay-4000 z-0" />
          
          {/* Grid overlay for texture */}
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" opacity-20 />
        </div>

        {/* Hero Section */}
        <section className="min-h-[100vh] flex flex-col justify-center px-6 relative z-10 pt-40 pb-20 text-center items-center">
          <div className="max-w-[1200px] mx-auto w-full flex flex-col items-center">
            
            <AnimatedSection>
              <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-white/5 backdrop-blur-xl border border-white/20 text-xs font-bold text-cyan-100 tracking-[0.2em] uppercase mb-12 shadow-[0_0_30px_rgba(34,211,238,0.15)] hover:bg-white/10 transition-colors cursor-pointer">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                World-class digital engineering
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <h1 className="text-[12vw] sm:text-[8vw] md:text-[6.5vw] leading-[1.05] font-black tracking-tighter text-white drop-shadow-2xl max-w-[1100px] mb-8">
                Build digital products <br />
                <span className="relative inline-block mt-2">
                  <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400">that defy gravity.</span>
                  {/* Fake 3D Underline */}
                  <span className="absolute bottom-1 left-0 w-full h-[30%] bg-blue-500/30 -z-10 -rotate-1 blur-sm rounded-full" />
                </span>
              </h1>
            </AnimatedSection>
            
            <AnimatedSection delay={0.4}>
              <p className="text-xl md:text-2xl text-slate-300 max-w-2xl font-medium leading-relaxed mb-14 tracking-tight">
                We are a global engineering studio partnering with ambitious founders to design, build, and scale exceptional software.
              </p>
            </AnimatedSection>
            
            <AnimatedSection delay={0.6} className="flex flex-col sm:flex-row gap-6">
              <Link href="/contact" className="group relative px-10 py-5 rounded-full bg-white text-slate-900 font-extrabold text-lg overflow-hidden shadow-[0_10px_40px_rgba(255,255,255,0.2)] hover:shadow-[0_20px_60px_rgba(255,255,255,0.4)] hover:-translate-y-1 transition-all duration-300">
                <span className="relative z-10 flex items-center justify-center gap-3">
                  Start a Project
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-300 to-purple-300 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              </Link>
              <Link href="/work" className="group px-10 py-5 rounded-full bg-transparent text-white border border-white/30 font-bold text-lg hover:bg-white/10 transition-colors flex items-center justify-center gap-3">
                View Showreel
              </Link>
            </AnimatedSection>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-bounce">
            <span className="text-xs font-bold tracking-widest uppercase">Scroll</span>
            <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent" />
          </div>
        </section>

        {/* Dense Light Theme Section (Waplia style structural change) */}
        <div className="relative bg-[#ffffff] text-slate-900 rounded-t-[3rem] pt-32 pb-40 z-20 shadow-[0_-30px_60px_rgba(0,0,0,0.4)]">
          
          <section className="px-6 relative z-10">
            <div className="max-w-[1400px] mx-auto">
              
              <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                <div className="max-w-3xl">
                  <h2 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter leading-[1.1] mb-6">
                    Engineering excellence <br/> at every layer.
                  </h2>
                </div>
                <p className="text-xl text-slate-500 font-semibold max-w-md pb-3 tracking-tight">
                  We don't just write code. We architect solutions that are beautiful, scalable, and impossible to ignore.
                </p>
              </div>

              {/* Extremely Dense Bento Grid */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[400px]">
                
                {/* Huge Card: Web Engineering */}
                <AnimatedSection className="md:col-span-2 md:row-span-2 group">
                  <div className="w-full h-full bg-[#f8fafc] rounded-[2.5rem] p-12 flex flex-col justify-between overflow-hidden relative border border-slate-200 transition-all duration-500 hover:shadow-[0_40px_80px_rgba(0,0,0,0.07)] hover:-translate-y-2">
                    
                    {/* CSS 3D Sphere Placeholder */}
                    <div className="absolute right-[-10%] top-[-10%] w-[600px] h-[600px] rounded-full bg-gradient-to-br from-blue-100 to-cyan-50 opacity-80 blur-3xl group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute right-10 top-10 w-64 h-64 rounded-full bg-gradient-to-tr from-blue-500 to-cyan-300 shadow-[inset_-20px_-20px_40px_rgba(0,0,0,0.2)] opacity-20 group-hover:opacity-40 group-hover:rotate-12 transition-all duration-700" />

                    <div className="relative z-10">
                      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 text-sm font-bold text-slate-700 mb-8 shadow-sm">
                        <Code2 className="w-4 h-4 text-blue-500" /> Core Capability
                      </div>
                      <h3 className="text-5xl font-black tracking-tighter text-slate-900 mb-6 leading-tight">Web & Mobile <br/> Engineering</h3>
                      <p className="text-xl text-slate-600 font-medium leading-relaxed max-w-md">
                        High-performance React, Next.js, and React Native applications built for millions of users. 
                      </p>
                    </div>

                    <div className="relative z-10 flex gap-4">
                      {['Next.js', 'React', 'Tailwind', 'TypeScript'].map((tech) => (
                        <span key={tech} className="px-4 py-2 bg-white rounded-xl text-sm font-bold text-slate-700 shadow-sm border border-slate-100">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </AnimatedSection>

                {/* Medium Card: AI */}
                <AnimatedSection delay={0.2} className="md:col-span-2 group">
                  <div className="w-full h-full bg-[#f8fafc] rounded-[2.5rem] p-10 flex flex-col justify-between overflow-hidden relative border border-slate-200 transition-all duration-500 hover:shadow-[0_40px_80px_rgba(0,0,0,0.07)] hover:-translate-y-2">
                    <div className="absolute bottom-[-30%] right-[-10%] w-[400px] h-[400px] bg-gradient-to-tl from-purple-200 to-transparent rounded-full blur-3xl group-hover:scale-110 transition-transform duration-700" />
                    
                    <div className="relative z-10">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center mb-6 shadow-lg shadow-purple-500/30 transform group-hover:scale-110 transition-transform duration-500">
                        <Cpu className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-4xl font-black tracking-tighter text-slate-900 mb-4">AI Integration</h3>
                      <p className="text-lg text-slate-600 font-medium max-w-sm">Embedding LLMs and intelligent agents natively into your product workflows.</p>
                    </div>
                  </div>
                </AnimatedSection>

                {/* Small Card: Design */}
                <AnimatedSection delay={0.3} className="group">
                  <div className="w-full h-full bg-[#f8fafc] rounded-[2.5rem] p-10 flex flex-col justify-between overflow-hidden relative border border-slate-200 transition-all duration-500 hover:shadow-[0_40px_80px_rgba(0,0,0,0.07)] hover:-translate-y-2">
                    <div className="relative z-10">
                      <div className="w-14 h-14 rounded-2xl bg-slate-900 flex items-center justify-center mb-6 shadow-lg transform group-hover:rotate-12 transition-transform duration-500">
                        <Layers className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="text-3xl font-black tracking-tighter text-slate-900 mb-3">UI/UX Design</h3>
                      <p className="text-slate-600 font-medium">Interfaces that convert.</p>
                    </div>
                  </div>
                </AnimatedSection>

                {/* Small Card: Cloud */}
                <AnimatedSection delay={0.4} className="group">
                  <div className="w-full h-full bg-[#f8fafc] rounded-[2.5rem] p-10 flex flex-col justify-between overflow-hidden relative border border-slate-200 transition-all duration-500 hover:shadow-[0_40px_80px_rgba(0,0,0,0.07)] hover:-translate-y-2">
                    <div className="relative z-10">
                      <div className="w-14 h-14 rounded-2xl bg-cyan-500 flex items-center justify-center mb-6 shadow-lg shadow-cyan-500/30 transform group-hover:-rotate-12 transition-transform duration-500">
                        <Globe className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="text-3xl font-black tracking-tighter text-slate-900 mb-3">Cloud Arch</h3>
                      <p className="text-slate-600 font-medium">Scalable infrastructure.</p>
                    </div>
                  </div>
                </AnimatedSection>

              </div>
            </div>
          </section>

          {/* Massive 3D CTA Section */}
          <section className="mt-40 px-6 relative z-10">
            <div className="max-w-[1400px] mx-auto">
              <div className="relative w-full rounded-[3rem] bg-slate-900 p-16 md:p-24 overflow-hidden shadow-2xl">
                {/* 3D Inner Glow */}
                <div className="absolute inset-0 rounded-[3rem] ring-1 ring-inset ring-white/10 pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-transparent to-cyan-900/40" />
                
                <div className="relative z-10 flex flex-col items-center text-center">
                  <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-white mb-8">
                    Start Building.
                  </h2>
                  <p className="text-2xl text-slate-300 font-medium mb-12 max-w-2xl">
                    Don't settle for generic. Let's engineer something extraordinary together.
                  </p>
                  
                  <Link href="/contact" className="group relative h-20 px-12 rounded-full bg-white text-slate-900 font-extrabold text-xl flex items-center justify-center gap-4 hover:scale-105 transition-all duration-300 shadow-[0_20px_40px_rgba(0,0,0,0.5)]">
                    <span className="relative z-10 flex items-center gap-2">
                      Get Free Consultation <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </section>

        </div>
      </div>
      <Footer />
    </>
  );
}
