import Link from "next/link";
import { ArrowRight, Code2, Globe, Cpu, Zap } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { TextReveal } from "@/components/ui/TextReveal";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen relative bg-black text-white font-sans overflow-hidden">
      
      {/* Noise Texture Overlay */}
      <div className="fixed inset-0 z-50 pointer-events-none opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>

      {/* Hero Section */}
      <section className="min-h-[100vh] flex flex-col justify-center px-6 relative z-10 pt-32 pb-20">
        <div className="max-w-[1400px] mx-auto w-full">
          <div className="flex flex-col gap-6">
            <AnimatedSection>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 text-xs font-mono tracking-widest uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                AI-Augmented Studio
              </div>
            </AnimatedSection>

            <h1 className="text-[12vw] sm:text-[8vw] md:text-[6vw] leading-[0.9] font-black tracking-tighter text-white">
              <TextReveal text="WE BUILD" />
              <br />
              <TextReveal text="THE FUTURE." delay={2} />
            </h1>
            
            <AnimatedSection delay={0.6} className="mt-8">
              <p className="text-xl sm:text-2xl text-white/50 max-w-xl font-light leading-relaxed">
                Production-grade web, e-commerce, and AI products shipped at impossible speeds.
              </p>
            </AnimatedSection>
            
            <AnimatedSection delay={0.8} className="mt-12 flex gap-4">
              <Link href="/contact" className="group h-16 px-8 rounded-full bg-white text-black font-bold flex items-center justify-center gap-3 hover:scale-105 transition-transform duration-300">
                Start a project
                <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center group-hover:translate-x-1 transition-transform">
                  <ArrowRight className="w-4 h-4 text-white" />
                </div>
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Bento Box Layout - Services & Work Combined */}
      <section className="py-20 px-6 relative z-10">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[400px]">
            
            {/* Big Feature Block */}
            <AnimatedSection className="md:col-span-2 md:row-span-2 group">
              <div className="w-full h-full rounded-[2rem] bg-white/5 border border-white/10 p-10 flex flex-col justify-between overflow-hidden relative transition-colors hover:border-white/20">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] group-hover:bg-blue-500/20 transition-colors duration-700" />
                <div className="relative z-10">
                  <Globe className="w-12 h-12 text-blue-400 mb-6" />
                  <h3 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">Web & App<br/>Development</h3>
                  <p className="text-lg text-white/50 max-w-md">High-performance React/Next.js applications engineered for scale and speed.</p>
                </div>
                <div className="relative z-10 flex items-center gap-2 mt-8">
                  <span className="px-4 py-2 rounded-full border border-white/10 text-sm font-mono bg-black/50 backdrop-blur-md">Next.js</span>
                  <span className="px-4 py-2 rounded-full border border-white/10 text-sm font-mono bg-black/50 backdrop-blur-md">Tailwind</span>
                </div>
              </div>
            </AnimatedSection>

            {/* Small Block 1 */}
            <AnimatedSection delay={0.2} className="group">
              <div className="w-full h-full rounded-[2rem] bg-white/5 border border-white/10 p-8 flex flex-col justify-between overflow-hidden relative hover:border-white/20">
                <Code2 className="w-10 h-10 text-purple-400" />
                <div>
                  <h3 className="text-3xl font-bold tracking-tight mb-2">E-Commerce</h3>
                  <p className="text-white/50">Custom headless storefronts and complex checkout flows.</p>
                </div>
              </div>
            </AnimatedSection>

            {/* Small Block 2 */}
            <AnimatedSection delay={0.3} className="group">
              <div className="w-full h-full rounded-[2rem] bg-white/5 border border-white/10 p-8 flex flex-col justify-between overflow-hidden relative hover:border-white/20">
                <Cpu className="w-10 h-10 text-emerald-400" />
                <div>
                  <h3 className="text-3xl font-bold tracking-tight mb-2">AI Integration</h3>
                  <p className="text-white/50">Embedding intelligent agents and LLMs into your workflow.</p>
                </div>
              </div>
            </AnimatedSection>

            {/* Wide Work Block */}
            <AnimatedSection className="md:col-span-3 group">
              <Link href="/work" className="block w-full h-full rounded-[2rem] bg-white/5 border border-white/10 p-10 overflow-hidden relative hover:border-white/20 transition-all">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end h-full">
                  <div className="max-w-2xl">
                    <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4">Our Work</h2>
                    <p className="text-xl text-white/50">Explore Kvastram, AttendAI, and our latest shipped products.</p>
                  </div>
                  <div className="w-16 h-16 rounded-full bg-white text-black flex items-center justify-center mt-8 md:mt-0 group-hover:scale-110 transition-transform">
                    <ArrowRight className="w-6 h-6" />
                  </div>
                </div>
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Massive CTA Section */}
      <section className="py-40 px-6 relative z-10 border-t border-white/10">
        <div className="max-w-[1400px] mx-auto flex flex-col items-center text-center">
          <Zap className="w-16 h-16 text-yellow-400 mb-8" />
          <h2 className="text-6xl md:text-9xl font-black tracking-tighter leading-none mb-12">
            LET'S SHIP.
          </h2>
          <Link href="/contact" className="h-20 px-12 rounded-full bg-white text-black font-bold text-xl flex items-center justify-center hover:scale-105 transition-transform duration-300">
            Contact Us Today
          </Link>
        </div>
      </section>

    </div>
  );
}
