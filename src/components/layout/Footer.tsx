import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-surface-900 mt-auto">
      <div className="container mx-auto px-4 sm:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="font-bold text-xl text-primary-600 dark:text-primary-500 mb-4">
              Jaishivnavmedia
            </h3>
            <p className="text-slate-600 dark:text-slate-400 max-w-xs text-sm">
              An AI-augmented development studio shipping production web, e-commerce, and AI products for global startups and SMBs.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
              <li><Link href="/" className="hover:text-primary-600 dark:hover:text-primary-400">Home</Link></li>
              <li><Link href="/services" className="hover:text-primary-600 dark:hover:text-primary-400">Services</Link></li>
              <li><Link href="/work" className="hover:text-primary-600 dark:hover:text-primary-400">Work</Link></li>
              <li><Link href="/about" className="hover:text-primary-600 dark:hover:text-primary-400">About</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
              <li><Link href="/privacy" className="hover:text-primary-600 dark:hover:text-primary-400">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-primary-600 dark:hover:text-primary-400">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-200 dark:border-slate-800 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Jaishivnavmedia. All rights reserved.</p>
          <p>Registration No. / GST: [To be added]</p>
        </div>
      </div>
    </footer>
  );
}
