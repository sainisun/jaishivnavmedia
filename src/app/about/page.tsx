export const metadata = { title: "About | Jaishivnavmedia" };

export default function About() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-20 flex flex-col gap-8">
      <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
        About Jaishivnavmedia
      </h1>
      
      <div className="prose prose-slate dark:prose-invert prose-lg">
        <p>
          We are a founder-led, small studio focusing on building exceptional digital products. 
          We believe in honesty, speed, and technical excellence over enterprise theater.
        </p>
        
        <h2>The AI-Native Build Process</h2>
        <p>
          We don't just use AI to write marketing copy; it is deeply embedded into our engineering 
          lifecycle. Our methodology relies on:
        </p>
        <ul>
          <li><strong>Document-first PRDs:</strong> Every project starts with rigorous specification.</li>
          <li><strong>Agent Execution:</strong> Tasks are executed one by one using state-of-the-art coding agents.</li>
          <li><strong>Human Review:</strong> Every line of generated code passes through structured human review before it reaches production.</li>
        </ul>
        
        <p>
          This approach allows us to ship high-quality products in a fraction of the time it takes traditional agencies, without sacrificing maintainability or security.
        </p>
      </div>
    </div>
  );
}
