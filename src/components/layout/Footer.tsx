import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between gap-8">
        <div className="flex flex-col gap-4 max-w-sm">
          <span className="font-bold text-xl tracking-tight text-primary-600 dark:text-primary-400">Jaishivnavmedia</span>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            AI-augmented development studio. We build production web, e-commerce, and AI products.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-12">
          <div className="flex flex-col gap-3 text-sm text-slate-600 dark:text-slate-400">
            <span className="font-semibold text-slate-900 dark:text-slate-100">Company</span>
            <Link href="/about" className="hover:text-primary-600 dark:hover:text-primary-400">About</Link>
            <Link href="/services" className="hover:text-primary-600 dark:hover:text-primary-400">Services</Link>
            <Link href="/work" className="hover:text-primary-600 dark:hover:text-primary-400">Work</Link>
            <Link href="/contact" className="hover:text-primary-600 dark:hover:text-primary-400">Contact</Link>
          </div>
          <div className="flex flex-col gap-3 text-sm text-slate-600 dark:text-slate-400">
            <span className="font-semibold text-slate-900 dark:text-slate-100">Legal</span>
            <Link href="/privacy" className="hover:text-primary-600 dark:hover:text-primary-400">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-primary-600 dark:hover:text-primary-400">Terms of Service</Link>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-200 dark:border-slate-800 py-6 text-center text-xs text-slate-500 dark:text-slate-400">
        &copy; {new Date().getFullYear()} Jaishivnavmedia. All rights reserved.
      </div>
    </footer>
  );
}
