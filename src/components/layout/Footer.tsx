import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-white pt-32 pb-10 relative overflow-hidden">
      {/* Massive gradient orb in background of footer */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[400px] bg-gradient-to-b from-purple-900/20 to-transparent rounded-[100%] blur-[100px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        
        <div className="flex flex-col md:flex-row justify-between items-start mb-20 gap-10">
          
          <div className="max-w-md">
            <Link href="/" className="inline-flex items-center gap-2 mb-6 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-400 to-blue-600 flex items-center justify-center shadow-[0_0_20px_rgba(34,211,238,0.4)]">
                <span className="font-extrabold text-white text-lg">J</span>
              </div>
              <span className="font-extrabold text-2xl tracking-tighter">JaishivNav Media</span>
            </Link>
            <p className="text-slate-400 text-lg font-medium leading-relaxed">
              We design and build world-class digital products for startups and enterprises worldwide.
            </p>
          </div>

          <div className="flex gap-16">
            <div className="flex flex-col gap-4">
              <h4 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-2">Studio</h4>
              <Link href="/work" className="text-lg font-semibold hover:text-cyan-400 transition-colors">Work</Link>
              <Link href="/services" className="text-lg font-semibold hover:text-cyan-400 transition-colors">Services</Link>
              <Link href="/about" className="text-lg font-semibold hover:text-cyan-400 transition-colors">About Us</Link>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-2">Social</h4>
              <a href="#" className="text-lg font-semibold hover:text-purple-400 transition-colors flex items-center gap-1 group">
                Twitter <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
              <a href="#" className="text-lg font-semibold hover:text-purple-400 transition-colors flex items-center gap-1 group">
                LinkedIn <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
              <a href="#" className="text-lg font-semibold hover:text-purple-400 transition-colors flex items-center gap-1 group">
                Instagram <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 font-medium">
            &copy; {new Date().getFullYear()} JaishivNav Media. All rights reserved.
          </p>
          <div className="flex gap-6 text-slate-500 font-medium">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
