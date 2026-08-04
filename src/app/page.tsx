import Link from "next/link";
import { ArrowRight, Code2, Globe, Cpu, Layers, Sparkles } from "lucide-react";
import { StaggeredContainer, StaggeredItem } from "@/components/ui/StaggeredReveal";
import { TiltCard } from "@/components/ui/TiltCard";

export default function Home() {
  return (
    <>
      <div className="flex flex-col flex-grow relative font-sans overflow-hidden mesh-bg text-white selection:bg-cyan-500/30">
        
        {/* Technical Minimalist Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none bg-slate-950">
          {/* Subtle grid overlay for texture */}
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" style={{opacity: 0.1}} />
        </div>

        {/* Hero Section */}
        <section className="min-h-[100vh] flex flex-col justify-center px-6 relative z-10 pt-40 pb-20 text-center items-center">
          <div className="max-w-[1200px] mx-auto w-full flex flex-col items-center">
            
            <StaggeredContainer className="flex flex-col items-center">
              <StaggeredItem>
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-none border border-slate-800 bg-slate-900/50 text-xs font-bold text-slate-300 tracking-[0.2em] uppercase mb-12 shadow-sm">
                  <Code2 className="w-4 h-4 text-cyan-400" />
                  AI-Native Development
                </div>
              </StaggeredItem>

              <StaggeredItem>
                <h1 className="text-[12vw] sm:text-[8vw] md:text-[6.5vw] leading-[1.05] font-black tracking-tighter text-white max-w-[1100px] mb-8">
                  Engineering studio. <br />
                  <span className="text-slate-400">AI agents build, we review every line.</span>
                </h1>
              </StaggeredItem>
              
              <StaggeredItem>
                <p className="text-xl md:text-2xl text-slate-300 max-w-2xl font-medium leading-relaxed mb-14 tracking-tight">
                  We are a global engineering studio partnering with ambitious founders to design, build, and scale exceptional software.
                </p>
              </StaggeredItem>
              
              <StaggeredItem>
                <div className="flex flex-col sm:flex-row gap-6">
                  <Link href="/contact" className="group relative px-10 py-5 bg-white text-slate-950 font-extrabold text-lg transition-transform hover:-translate-y-1">
                    <span className="flex items-center justify-center gap-3">
                      Start a Project
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Link>
                  <Link href="/work" className="group px-10 py-5 bg-transparent text-white border border-slate-700 font-bold text-lg hover:bg-slate-800 transition-colors flex items-center justify-center gap-3">
                    View Showreel
                  </Link>
                </div>
              </StaggeredItem>
            </StaggeredContainer>
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
              
              <StaggeredContainer className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                <StaggeredItem className="max-w-3xl">
                  <h2 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter leading-[1.1] mb-6">
                    Engineering excellence <br/> at every layer.
                  </h2>
                </StaggeredItem>
                <StaggeredItem>
                  <p className="text-xl text-slate-500 font-semibold max-w-md pb-3 tracking-tight">
                    We don't just write code. We architect solutions that are beautiful, scalable, and impossible to ignore.
                  </p>
                </StaggeredItem>
              </StaggeredContainer>

              {/* Dense Bento Grid */}
              <StaggeredContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[400px]">
                
                {/* Card 1: Web Engineering */}
                <StaggeredItem className="md:col-span-2">
                  <TiltCard className="w-full h-full bg-slate-50 p-12 flex flex-col justify-between overflow-hidden relative border border-slate-200 group rounded-none">
                    <div className="relative z-10 pointer-events-none">
                      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-none border border-slate-200 bg-white text-sm font-bold text-slate-700 mb-8 shadow-sm">
                        <Code2 className="w-4 h-4 text-slate-900" /> Web Development
                      </div>
                      <h3 className="text-5xl font-black tracking-tighter text-slate-900 mb-6 leading-tight">Fast, accessible <br/> web engineering</h3>
                      <p className="text-xl text-slate-600 font-medium leading-relaxed max-w-md">
                        React, Next.js, and modern TypeScript applications built for performance.
                      </p>
                    </div>
                  </TiltCard>
                </StaggeredItem>

                {/* Card 2: E-commerce */}
                <StaggeredItem>
                  <TiltCard className="w-full h-full bg-slate-50 p-10 flex flex-col justify-between overflow-hidden relative border border-slate-200 group rounded-none">
                    <div className="relative z-10 pointer-events-none">
                      <div className="w-16 h-16 bg-slate-900 flex items-center justify-center mb-6">
                        <Globe className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-4xl font-black tracking-tighter text-slate-900 mb-4">E-commerce</h3>
                      <p className="text-lg text-slate-600 font-medium max-w-sm">High-converting headless storefronts.</p>
                    </div>
                  </TiltCard>
                </StaggeredItem>

                {/* Card 3: AI Integration */}
                <StaggeredItem className="md:col-span-3">
                  <TiltCard className="w-full h-full bg-slate-50 p-12 flex flex-col justify-between overflow-hidden relative border border-slate-200 group rounded-none">
                    <div className="relative z-10 pointer-events-none flex flex-col md:flex-row md:items-center justify-between gap-8">
                      <div>
                        <div className="w-16 h-16 bg-slate-900 flex items-center justify-center mb-6">
                          <Cpu className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-4xl font-black tracking-tighter text-slate-900 mb-4">AI Integration</h3>
                        <p className="text-lg text-slate-600 font-medium max-w-md">Embedding LLMs and intelligent agents natively into your product workflows.</p>
                      </div>
                    </div>
                  </TiltCard>
                </StaggeredItem>

              </StaggeredContainer>
            </div>
          </section>

          {/* Massive CTA Section */}
          <section className="mt-40 px-6 relative z-10">
            <StaggeredContainer className="max-w-[1400px] mx-auto">
              <StaggeredItem>
                <div className="relative w-full rounded-none bg-slate-950 p-16 md:p-24 overflow-hidden border border-slate-800">
                  <div className="relative z-10 flex flex-col items-center text-center">
                    <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-white mb-8">
                      Start Building.
                    </h2>
                    <p className="text-2xl text-slate-400 font-medium mb-12 max-w-2xl">
                      Don't settle for generic. Let's engineer something extraordinary together.
                    </p>
                    
                    <Link href="/contact" className="group relative h-20 px-12 bg-white text-slate-950 font-extrabold text-xl flex items-center justify-center gap-4 hover:-translate-y-1 transition-transform">
                      <span className="flex items-center gap-2">
                        Get Free Consultation <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </Link>
                  </div>
                </div>
              </StaggeredItem>
            </StaggeredContainer>
          </section>

        </div>
      </div>
    </>
  );
}
