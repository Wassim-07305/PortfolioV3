import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { portfolioData } from "@/lib/data";
import Navbar from './components/Navbar';

const geist = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${portfolioData.name} - ${portfolioData.title}`,
  description: portfolioData.intro,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={`${geist.className} bg-background text-text-main antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
