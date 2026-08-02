import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Jaishivnavmedia | AI-Augmented Development Studio",
  description: "We build production web, e-commerce, and AI products.",
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
