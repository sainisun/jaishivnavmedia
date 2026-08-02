import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* HERO SECTION */}
      <section className="flex flex-col items-center justify-center min-h-[80vh] p-8 text-center bg-white dark:bg-surface-900">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-slate-900 dark:text-white max-w-4xl mb-6">
          AI-augmented development studio — we build production web, e-commerce, and AI products.
        </h1>
        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mb-10">
          Shipping robust products for global startups and SMBs, driven by an AI-native process.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <Link
            className="rounded-full bg-primary-600 text-white hover:bg-primary-500 transition-colors text-base h-12 px-8 font-medium flex items-center justify-center"
            href="/contact"
          >
            Start a project
          </Link>
          <a
            className="rounded-full border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors text-slate-900 dark:text-white text-base h-12 px-8 font-medium flex items-center justify-center"
            href="https://wa.me/1234567890" 
            target="_blank"
            rel="noopener noreferrer"
          >
            Quick Chat on WhatsApp
          </a>
        </div>
      </section>

      {/* SERVICES OVERVIEW */}
      <section className="py-20 px-4 sm:px-8 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Our Services</h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl">Expertise focused on shipping real value.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ServiceCard 
              title="Web Development"
              description="Custom, high-performance websites and web applications built with Next.js and modern stacks."
              link="/services/web-development"
            />
            <ServiceCard 
              title="E-commerce Development"
              description="Headless storefronts, complex payment integrations, and custom admin dashboards."
              link="/services/ecommerce"
            />
            <ServiceCard 
              title="AI-Integrated Product Development"
              description="Workflow automation and AI agent-assisted tooling to accelerate your business operations."
              link="/services/ai-integration"
            />
          </div>
        </div>
      </section>

      {/* FEATURED WORK */}
      <section className="py-20 px-4 sm:px-8 bg-white dark:bg-surface-900">
        <div className="container mx-auto max-w-6xl">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Featured Work</h2>
              <p className="text-slate-600 dark:text-slate-400 max-w-2xl">Products we've built and shipped.</p>
            </div>
            <Link href="/work" className="hidden sm:block text-primary-600 hover:text-primary-500 font-medium">
              View all work →
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <WorkCard 
              title="Kvastram"
              description="Headless e-commerce storefront with custom admin."
              tags={["Next.js", "Hono", "Razorpay"]}
              link="/work/kvastram"
            />
            <WorkCard 
              title="AttendAI (Pilot)"
              description="AI product for face recognition and voice notifications."
              tags={["FastAPI", "AI Models", "Voice API"]}
              link="/work/attendai"
            />
          </div>
          
          <div className="mt-8 sm:hidden">
            <Link href="/work" className="text-primary-600 hover:text-primary-500 font-medium">
              View all work →
            </Link>
          </div>
        </div>
      </section>

      {/* PROCESS STRIP */}
      <section className="py-20 px-4 sm:px-8 bg-slate-900 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Process</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">A structured approach to shipping production software.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <ProcessStep number="01" title="Discover" desc="Document-first PRD & architecture." />
            <ProcessStep number="02" title="Design" desc="Schema and UI design systems." />
            <ProcessStep number="03" title="Develop" desc="AI-native execution & human review." />
            <ProcessStep number="04" title="Deploy" desc="Production launch & scaling." />
          </div>
        </div>
      </section>
    </div>
  );
}

function ServiceCard({ title, description, link }: { title: string, description: string, link: string }) {
  return (
    <Link href={link} className="block p-8 rounded-2xl bg-white dark:bg-surface-900 border border-slate-200 dark:border-slate-800 hover:shadow-lg transition-all hover:-translate-y-1">
      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{title}</h3>
      <p className="text-slate-600 dark:text-slate-400 mb-6">{description}</p>
      <span className="text-primary-600 dark:text-primary-500 font-medium text-sm flex items-center">
        Learn more <span className="ml-1">→</span>
      </span>
    </Link>
  );
}

function WorkCard({ title, description, tags, link }: { title: string, description: string, tags: string[], link: string }) {
  return (
    <Link href={link} className="group block">
      <div className="aspect-[4/3] bg-slate-100 dark:bg-slate-800 rounded-2xl mb-6 overflow-hidden flex items-center justify-center border border-slate-200 dark:border-slate-700">
        <span className="text-slate-400 text-sm">Image Placeholder</span>
      </div>
      <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-primary-600 transition-colors">{title}</h3>
      <p className="text-slate-600 dark:text-slate-400 mb-4">{description}</p>
      <div className="flex gap-2 flex-wrap">
        {tags.map(tag => (
          <span key={tag} className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs rounded-full font-medium">
            {tag}
          </span>
        ))}
      </div>
    </Link>
  );
}

function ProcessStep({ number, title, desc }: { number: string, title: string, desc: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="w-16 h-16 rounded-full bg-primary-600 flex items-center justify-center text-xl font-bold mb-6">
        {number}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-slate-400 text-sm">{desc}</p>
    </div>
  );
}
