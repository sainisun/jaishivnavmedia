import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-8 items-center text-center">
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-primary-900 dark:text-primary-50 max-w-3xl">
          AI-augmented development studio — we build production web, e-commerce, and AI products.
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl">
          Shipping robust products for global startups and SMBs, driven by an AI-native process.
        </p>

        <div className="flex gap-4 items-center flex-col sm:flex-row mt-8">
          <Link
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-primary-600 text-white gap-2 hover:bg-primary-500 text-sm sm:text-base h-10 sm:h-12 px-8 font-medium"
            href="/contact"
          >
            Start a project
          </Link>
          <a
            className="rounded-full border border-solid border-slate-200 dark:border-slate-800 transition-colors flex items-center justify-center hover:bg-slate-100 dark:hover:bg-slate-800 text-sm sm:text-base h-10 sm:h-12 px-8 font-medium"
            href="https://wa.me/yourwhatsappnumber"
            target="_blank"
            rel="noopener noreferrer"
          >
            Quick Chat on WhatsApp
          </a>
        </div>
      </main>
    </div>
  );
}
