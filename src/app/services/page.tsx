import { Globe, ShoppingCart, Bot } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { FloatingElement } from "@/components/ui/FloatingElement";

export const metadata = { title: "Services | Jaishivnavmedia" };

export default function Services() {
  const services = [
    {
      title: "Web Development",
      desc: "Custom marketing sites, high-performance landing pages, and interactive web apps.",
      stack: "Next.js, Tailwind, Vercel",
      icon: <Globe className="w-8 h-8 text-primary-500 mb-2" />,
    },
    {
      title: "E-commerce Development",
      desc: "Headless storefronts, custom checkout flows, and payment gateway integrations (Razorpay, PayPal).",
      stack: "Next.js, Hono, Custom Admin",
      icon: <ShoppingCart className="w-8 h-8 text-primary-500 mb-2" />,
    },
    {
      title: "AI-Integrated Product Development",
      desc: "Workflow automation and AI features integrated seamlessly into existing products and processes.",
      stack: "FastAPI, LLMs, Node.js",
      icon: <Bot className="w-8 h-8 text-primary-500 mb-2" />,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col gap-12 relative overflow-hidden">
      <div className="absolute top-10 right-10 -z-10 opacity-20 blur-3xl">
        <FloatingElement delay={0}>
          <div className="w-48 h-48 bg-primary-600/30 rounded-full" />
        </FloatingElement>
      </div>

      <AnimatedSection className="max-w-3xl flex flex-col gap-4">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
          Our Services
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400">
          We focus on what we do best: delivering production-grade digital products swiftly through our AI-native workflow.
        </p>
      </AnimatedSection>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((s, i) => (
          <AnimatedSection key={i} delay={i * 0.1}>
            <div className="p-8 h-full border border-slate-200 dark:border-slate-800 rounded-2xl flex flex-col gap-4 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm transition-all hover:scale-[1.02] hover:shadow-xl hover:shadow-primary-500/10 cursor-default">
              {s.icon}
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">{s.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 flex-grow">{s.desc}</p>
              <div className="text-sm font-mono text-primary-600 dark:text-primary-400 mt-4 border-t border-slate-100 dark:border-slate-800 pt-4">
                Stack: {s.stack}
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  );
}
