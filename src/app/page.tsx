import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { FloatingElement } from "@/components/ui/FloatingElement";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20 relative overflow-hidden">
      
      {/* Background Floating Orbs for Premium Aesthetic */}
      <div className="absolute top-1/4 left-1/4 -z-10 opacity-30 blur-3xl">
        <FloatingElement delay={0}>
          <div className="w-64 h-64 bg-primary-500/20 rounded-full" />
        </FloatingElement>
      </div>
      <div className="absolute bottom-1/4 right-1/4 -z-10 opacity-30 blur-3xl">
        <FloatingElement delay={1}>
          <div className="w-64 h-64 bg-primary-600/20 rounded-full" />
        </FloatingElement>
      </div>

      <AnimatedSection className="flex flex-col gap-8 items-center text-center z-10">
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tighter text-slate-900 dark:text-slate-50 max-w-4xl">
          AI-augmented development studio — we build production web, e-commerce, and AI products.
        </h1>
        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl font-light">
          Shipping robust products for global startups and SMBs, driven by an AI-native process.
        </p>

        <div className="flex gap-4 items-center flex-col sm:flex-row mt-8">
          <Link
            className="rounded-full border border-solid border-transparent transition-all hover:scale-105 active:scale-95 flex items-center justify-center bg-primary-600 text-white gap-2 hover:bg-primary-500 shadow-lg shadow-primary-500/25 text-sm sm:text-base h-12 px-10 font-medium"
            href="/contact"
          >
            Start a project
          </Link>
          <a
            className="rounded-full border border-solid border-slate-200 dark:border-slate-800 transition-all hover:scale-105 active:scale-95 flex items-center justify-center hover:bg-slate-100 dark:hover:bg-slate-800 text-sm sm:text-base h-12 px-10 font-medium"
            href="https://wa.me/yourwhatsappnumber"
            target="_blank"
            rel="noopener noreferrer"
          >
            Quick Chat on WhatsApp
          </a>
        </div>
      </AnimatedSection>
    </div>
  );
}
