import { Open_Sans } from "next/font/google";
import "@/app/ui/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { AOSIInit } from '@/components/Aos'
import NextTopLoader from 'nextjs-toploader'
import { SpeedInsights } from "@vercel/speed-insights/next"
import Script from 'next/script'

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
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-ZYCRQ3G7ZE"
          strategy="beforeInteractive"
        />
        <Script id="google-analytics" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-ZYCRQ3G7ZE');
          `}
        </Script>
        <AOSIInit />
        <NextTopLoader color="#0E87C3" showSpinner={false} />
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  );
}
