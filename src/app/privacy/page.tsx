export const metadata = { title: "Privacy Policy | Jaishivnavmedia" };

export default function Privacy() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-20 flex flex-col gap-8">
      <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
        Privacy Policy
      </h1>
      
      <div className="prose prose-slate dark:prose-invert">
        <p>Last updated: {new Date().toLocaleDateString()}</p>
        
        <h2>1. Information We Collect</h2>
        <p>We only collect information you provide directly to us via our contact forms, which includes your name, email address, and project details.</p>
        
        <h2>2. How We Use Information</h2>
        <p>We use the information we collect to communicate with you about your project inquiry and to provide our services.</p>
        
        <h2>3. Data Protection</h2>
        <p>Your data is not sold or shared with third parties for marketing purposes. We retain inquiry data only as long as necessary for business purposes.</p>
      </div>
    </div>
  );
}
