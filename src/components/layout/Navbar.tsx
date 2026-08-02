import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-surface-900/80 backdrop-blur-md">
      <div className="container mx-auto px-4 sm:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="font-bold text-xl tracking-tight text-primary-600 dark:text-primary-500">
          Jaishivnavmedia
        </Link>
        <nav className="hidden md:flex gap-6 text-sm font-medium text-slate-600 dark:text-slate-300">
          <Link href="/services" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
            Services
          </Link>
          <Link href="/work" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
            Work
          </Link>
          <Link href="/about" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
            About
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link
            href="/contact"
            className="rounded-full bg-primary-600 text-white text-sm font-medium px-4 py-2 hover:bg-primary-500 transition-colors"
          >
            Start a project
          </Link>
        </div>
      </div>
    </header>
  );
}
