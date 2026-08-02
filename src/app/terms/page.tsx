export const metadata = { title: "Terms of Service | Jaishivnavmedia" };

export default function Terms() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-20 flex flex-col gap-8">
      <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
        Terms of Service
      </h1>
      
      <div className="prose prose-slate dark:prose-invert">
        <p>Last updated: {new Date().toLocaleDateString()}</p>
        
        <h2>1. Engagement & Pricing</h2>
        <p>All projects are scoped individually. We typically require an advance payment before work begins, with the remaining balance due upon completion and prior to final code handover or deployment.</p>
        
        <h2>2. Scope Changes</h2>
        <p>Any modifications to the originally agreed-upon PRD (Product Requirements Document) may incur additional costs and extended timelines.</p>
        
        <h2>3. Delivery</h2>
        <p>We deliver high-quality, production-ready code. Once the final payment is cleared, the intellectual property of the custom code transfers to you.</p>
      </div>
    </div>
  );
}
