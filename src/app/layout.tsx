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
import { SmoothScroll } from "@/components/ui/SmoothScroll";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { NoiseOverlay } from "@/components/ui/NoiseOverlay";

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
        <SmoothScroll>
          <NoiseOverlay />
          <CustomCursor />
          <div className="flex flex-col min-h-screen relative">
            <Navbar />
            <main className="flex-grow flex flex-col relative">{children}</main>
            <Footer />
          </div>
        </SmoothScroll>
        <Analytics />
      </body>
    </html>
  );
}
