import Link from "next/link";

export function Navbar() {
  return (
    <nav className="w-full border-b border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-950/50 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="font-bold text-xl tracking-tight text-primary-600 dark:text-primary-400">
          Jaishivnavmedia
        </Link>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600 dark:text-slate-300">
          <Link href="/services" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Services</Link>
          <Link href="/work" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Work</Link>
          <Link href="/about" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">About</Link>
          <Link href="/contact" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
