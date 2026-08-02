import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL('https://jaishivnavmedia.vercel.app'), // Replace with actual domain
  title: "Jaishivnavmedia | AI-Augmented Development Studio",
  description: "We build production web, e-commerce, and AI products.",
  alternates: {
    canonical: '/',
  },
};

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Jaishivnavmedia",
              "url": "https://jaishivnavmedia.vercel.app",
              "logo": "https://jaishivnavmedia.vercel.app/logo.png",
              "description": "AI-augmented development studio."
            })
          }}
        />
        <Navbar />
        <div className="min-h-screen flex flex-col">
          <main className="flex-grow">{children}</main>
        </div>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
