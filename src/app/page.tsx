import Link from "next/link";
import { ArrowRight, Code2, Globe, Cpu, ChevronRight } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { TextReveal } from "@/components/ui/TextReveal";
import { MagneticButton } from "@/components/ui/MagneticButton";

export default function Home() {
  const services = [
    { title: "Web Development", desc: "High-performance sites & apps.", icon: <Globe className="w-6 h-6 text-primary-400" /> },
    { title: "E-commerce", desc: "Headless storefronts & custom checkouts.", icon: <Code2 className="w-6 h-6 text-primary-400" /> },
    { title: "AI Integration", desc: "Workflow automation & smart tools.", icon: <Cpu className="w-6 h-6 text-primary-400" /> },
  ];

  const projects = [
    { title: "Kvastram", role: "Headless E-commerce", stack: "Next.js, Razorpay" },
    { title: "AttendAI", role: "AI Face Recognition (Pilot)", stack: "FastAPI, Sarvam AI" },
    { title: "Course Shop", role: "LMS Platform", stack: "Laravel" },
  ];

  return (
    <div className="flex flex-col min-h-screen relative bg-[#050505] text-slate-50 overflow-hidden font-sans">
      
      {/* Background Ambient Glows */}
      <div className="fixed top-0 left-1/4 w-[50vw] h-[50vw] bg-primary-900/20 rounded-full blur-[120px] -z-10 opacity-60 pointer-events-none" />
      <div className="fixed bottom-0 right-1/4 w-[40vw] h-[40vw] bg-blue-900/20 rounded-full blur-[100px] -z-10 opacity-50 pointer-events-none" />
      
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 relative">
        <div className="max-w-5xl w-full flex flex-col items-center text-center gap-8 z-10 pt-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-slate-300 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse" />
            AI-Native Development Studio
          </div>
          
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-extrabold tracking-tighter text-white">
            <TextReveal text="We build production web, e-commerce, and AI products." />
          </h1>
          
          <AnimatedSection delay={0.6}>
            <p className="text-xl text-slate-400 max-w-2xl font-light mx-auto leading-relaxed">
              Shipping robust digital products for global startups and SMBs, driven by an advanced AI-native workflow. No enterprise theater. Just shipped code.
            </p>
          </AnimatedSection>
          
          <AnimatedSection delay={0.8} className="flex gap-6 mt-8 flex-col sm:flex-row">
            <MagneticButton>
              <Link href="/contact" className="h-14 px-8 rounded-full bg-white text-black font-semibold flex items-center justify-center gap-2 hover:bg-slate-200 transition-colors shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]">
                Start a project <ArrowRight className="w-4 h-4" />
              </Link>
            </MagneticButton>
            <MagneticButton>
              <a href="https://wa.me/yourwhatsappnumber" target="_blank" rel="noopener noreferrer" className="h-14 px-8 rounded-full bg-white/5 border border-white/10 text-white font-medium flex items-center justify-center hover:bg-white/10 transition-colors backdrop-blur-sm">
                WhatsApp Chat
              </a>
            </MagneticButton>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 px-6 border-t border-white/5 relative z-10 bg-black/40 backdrop-blur-3xl">
        <div className="max-w-7xl mx-auto flex flex-col gap-16">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Our Expertise</h2>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="group p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-primary-500/50 hover:bg-white/10 transition-all duration-500 cursor-default h-full flex flex-col gap-4 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/10 rounded-full blur-3xl group-hover:bg-primary-500/20 transition-all duration-500" />
                  <div className="bg-white/10 w-12 h-12 rounded-2xl flex items-center justify-center border border-white/5">
                    {s.icon}
                  </div>
                  <h3 className="text-2xl font-bold mt-4">{s.title}</h3>
                  <p className="text-slate-400 font-light">{s.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto flex flex-col gap-16">
          <AnimatedSection className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Products we've built</h2>
            <Link href="/work" className="text-primary-400 hover:text-primary-300 flex items-center gap-1 font-medium transition-colors">
              View all work <ChevronRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>

          <div className="flex flex-col gap-6">
            {projects.map((p, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <Link href="/work" className="group block relative p-8 md:p-12 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-500 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-900/0 via-primary-900/10 to-primary-900/0 opacity-0 group-hover:opacity-100 translate-x-[-100%] group-hover:translate-x-[100%] transition-all duration-1000 ease-in-out" />
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
                    <div>
                      <h3 className="text-3xl font-bold group-hover:text-primary-400 transition-colors">{p.title}</h3>
                      <p className="text-slate-400 text-lg mt-2 font-light">{p.role}</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="px-4 py-2 rounded-full bg-white/10 text-sm font-mono text-slate-300 border border-white/5">
                        {p.stack}
                      </span>
                      <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                        <ArrowRight className="w-5 h-5" />
                      </div>
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Process Strip */}
      <section className="py-32 px-6 border-t border-white/5 bg-black/40 backdrop-blur-3xl">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-16 text-center">How we build</h2>
          </AnimatedSection>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {['Discover', 'Design', 'Develop', 'Deploy'].map((step, i) => (
              <AnimatedSection key={i} delay={i * 0.1} className="flex flex-col gap-4 relative">
                <div className="text-6xl font-black text-white/5 absolute -top-10 -left-4 pointer-events-none select-none">
                  0{i + 1}
                </div>
                <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden relative">
                  <div className="absolute inset-0 bg-primary-500 w-0 group-hover:w-full transition-all duration-1000" />
                </div>
                <h3 className="text-2xl font-bold text-white mt-4">{step}</h3>
                <p className="text-slate-400 font-light text-sm">
                  {i === 0 && "Document-first PRDs & deep technical scoping."}
                  {i === 1 && "Architecture, schemas, and visual design systems."}
                  {i === 2 && "AI-native agent execution with human review."}
                  {i === 3 && "Production shipping on Vercel with SEO finalized."}
                </p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-40 px-6 relative">
        <div className="absolute inset-0 bg-primary-900/10 blur-[100px] -z-10 pointer-events-none" />
        <AnimatedSection className="max-w-4xl mx-auto text-center flex flex-col items-center gap-10">
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter">
            Ready to ship your next product?
          </h2>
          <MagneticButton>
            <Link href="/contact" className="h-16 px-10 rounded-full bg-primary-600 text-white font-bold text-lg flex items-center justify-center gap-3 hover:bg-primary-500 transition-colors shadow-[0_0_50px_-10px_rgba(59,130,246,0.5)]">
              Let's talk <ArrowRight className="w-5 h-5" />
            </Link>
          </MagneticButton>
        </AnimatedSection>
      </section>

    </div>
  );
}
