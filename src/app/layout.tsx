import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "NR Workforce - Connecting Talent with Opportunity",
    template: "%s | NR Workforce",
  },
  description: "NR Workforce is a premier job consultancy bridging the gap between companies seeking top talent and professionals searching for their ideal career opportunities. We specialize in seamless job placements across diverse industries.",
  keywords: [
    "job consultancy", "recruitment", "talent acquisition", "job placement",
    "career services", "hiring solutions", "employment agency", "staffing",
    "job search", "career guidance", "Hyderabad jobs", "NR Workforce",
    "connect companies and candidates", "find employees", "find jobs"
  ],
  authors: [{ name: "NR Workforce Team", url: "https://www.nrworkforce.com" }],
  creator: "NR Workforce",
  publisher: "NR Workforce",
  openGraph: {
    title: "NR Workforce - Your Bridge to the Best Talent & Jobs",
    description: "NR Workforce connects businesses with exceptional candidates and helps job seekers find their perfect roles. Streamlined recruitment and career advancement.",
    url: "https://www.nrworkforce.com",
    siteName: "NR Workforce",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NR Workforce - Your Bridge to the Best Talent & Jobs",
    description: "NR Workforce connects businesses with exceptional candidates and helps job seekers find their perfect roles. Streamlined recruitment and career advancement.",
    creator: "@nrworkforce",
  },
  alternates: {
    canonical: "https://www.nrworkforce.com",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}