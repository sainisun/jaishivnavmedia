export const metadata = { title: "Work | Jaishivnavmedia" };

export default function Work() {
  const projects = [
    {
      title: "Kvastram",
      desc: "A high-performance headless e-commerce storefront with custom admin controls.",
      stack: "Next.js, Hono, Razorpay, PayPal",
      outcome: "Delivered a fully integrated custom checkout flow.",
    },
    {
      title: "AttendAI (Pilot)",
      desc: "AI product leveraging facial recognition and voice notifications.",
      stack: "FastAPI, Face Recognition, Sarvam AI",
      outcome: "In-progress pilot phase, demonstrating advanced AI capabilities.",
    },
    {
      title: "Agency Course Shop",
      desc: "A learning management system and course selling platform.",
      stack: "Laravel, Signed Content Delivery",
      outcome: "Secure delivery of educational materials with custom dashboard.",
    },
    {
      title: "Odhvica",
      desc: "Brand build and technical SEO implementation.",
      stack: "SEO, Brand Identity",
      outcome: "Established structural SEO framework and brand presence.",
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col gap-12">
      <div className="max-w-3xl flex flex-col gap-4">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
          Products we've built
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400">
          Real products shipped for real users. No vanity metrics, just working software.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((p, i) => (
          <div key={i} className="p-8 border border-slate-200 dark:border-slate-800 rounded-2xl flex flex-col gap-4 bg-white dark:bg-slate-900">
            <div className="flex justify-between items-start">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100">{p.title}</h3>
            </div>
            <p className="text-slate-600 dark:text-slate-400">{p.desc}</p>
            <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-col gap-2">
              <div className="text-sm"><strong className="text-slate-900 dark:text-slate-300">Stack:</strong> <span className="text-slate-600 dark:text-slate-400">{p.stack}</span></div>
              <div className="text-sm"><strong className="text-slate-900 dark:text-slate-300">Outcome:</strong> <span className="text-slate-600 dark:text-slate-400">{p.outcome}</span></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
