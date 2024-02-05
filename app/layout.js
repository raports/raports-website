import { Open_Sans } from "next/font/google";
import "@/app/ui/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { AOSIInit } from '@/components/Aos'
import NextTopLoader from 'nextjs-toploader'
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next"

const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Raports - Ramis's portfolio",
  description:
    "Ramis Khasianov's portfolio website. A place where to show projects and skills.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-ulgrey ${openSans.className}`}>
        <AOSIInit />
        <NextTopLoader color="#0E87C3" showSpinner={false} />
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
