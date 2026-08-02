import Link from 'next/link';

export function Navbar() {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-4xl">
      <div className="flex items-center justify-between px-6 py-3 bg-white/10 backdrop-blur-3xl border border-white/20 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.2)]">
        
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-cyan-400 to-blue-600 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
            <span className="font-extrabold text-white text-sm">J</span>
          </div>
          <span className="font-bold text-white tracking-tight text-lg group-hover:text-cyan-200 transition-colors">
            JaishivNav
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-200">
          <Link href="/work" className="hover:text-white transition-colors">Work</Link>
          <Link href="/services" className="hover:text-white transition-colors">Services</Link>
          <Link href="/about" className="hover:text-white transition-colors">Studio</Link>
        </div>

        <Link href="/contact" className="px-5 py-2 rounded-full bg-white text-slate-900 font-semibold text-sm hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] transition-all">
          Let's Talk
        </Link>
      </div>
    </nav>
  );
}
