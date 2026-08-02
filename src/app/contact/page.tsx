"use client";

import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    
    // Honeypot check
    if (data.bot_field) {
      setStatus("success"); // fake success for bots
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-6 py-20 flex flex-col gap-12">
      <div className="flex flex-col gap-4 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
          Start a project
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400">
          Fill out the form below or start a quick chat on WhatsApp. We aim to respond on the same day.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <div className="flex flex-col gap-6">
          <a
            href="https://wa.me/yourwhatsappnumber"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full rounded-xl border border-solid border-slate-200 dark:border-slate-800 p-6 flex flex-col items-center justify-center gap-4 hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors"
          >
            <span className="text-lg font-semibold text-slate-900 dark:text-slate-100">Quick Chat</span>
            <span className="text-slate-600 dark:text-slate-400 text-center text-sm">
              Need a fast answer? Reach out to us directly on WhatsApp.
            </span>
            <span className="bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 px-4 py-2 rounded-full text-sm font-medium mt-2">
              Open WhatsApp
            </span>
          </a>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input type="text" name="bot_field" className="hidden" tabIndex={-1} autoComplete="off" />
          
          <div className="flex flex-col gap-1.5">
            <label htmlFor="name" className="text-sm font-medium text-slate-900 dark:text-slate-300">Name</label>
            <input required type="text" id="name" name="name" className="w-full px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-transparent text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-primary-500" />
          </div>
          
          <div className="flex flex-col gap-1.5">
            <label htmlFor="email" className="text-sm font-medium text-slate-900 dark:text-slate-300">Email</label>
            <input required type="email" id="email" name="email" className="w-full px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-transparent text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-primary-500" />
          </div>
          
          <div className="flex flex-col gap-1.5">
            <label htmlFor="type" className="text-sm font-medium text-slate-900 dark:text-slate-300">Project Type</label>
            <select required id="type" name="type" className="w-full px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-transparent text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-primary-500">
              <option value="" disabled selected>Select a type...</option>
              <option value="web">Web Development</option>
              <option value="ecommerce">E-commerce</option>
              <option value="ai">AI Integration</option>
              <option value="other">Other</option>
            </select>
          </div>
          
          <div className="flex flex-col gap-1.5">
            <label htmlFor="budget" className="text-sm font-medium text-slate-900 dark:text-slate-300">Budget Range</label>
            <input required type="text" id="budget" name="budget" placeholder="e.g. $5k - $10k" className="w-full px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-transparent text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-primary-500" />
          </div>
          
          <div className="flex flex-col gap-1.5">
            <label htmlFor="message" className="text-sm font-medium text-slate-900 dark:text-slate-300">Message</label>
            <textarea required id="message" name="message" rows={4} className="w-full px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-transparent text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-primary-500"></textarea>
          </div>
          
          <button 
            type="submit" 
            disabled={status === "submitting" || status === "success"}
            className="mt-2 w-full rounded-lg bg-primary-600 text-white font-medium py-3 hover:bg-primary-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === "submitting" ? "Sending..." : status === "success" ? "Sent Successfully!" : "Submit Inquiry"}
          </button>
          
          {status === "error" && (
            <p className="text-red-500 text-sm text-center mt-2">There was an error sending your message. Please try again or use WhatsApp.</p>
          )}
        </form>
      </div>
    </div>
  );
}
