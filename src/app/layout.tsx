import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { PageTracker } from "@/components/page-tracker";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
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
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://maindomain.com"),
  title: {
    default: "Ace - Apps, tools, and experiments",
    template: "%s | Ace Project Hub",
  },
  description:
    "Ace Project Hub is the formal home for Ace's apps, tools, experiments, legal pages, and support links.",
  openGraph: {
    title: "Ace Project Hub",
    description:
      "A focused project hub for independent apps, AI workflows, creative tools, and mobile products by Ace.",
    url: "/",
    siteName: "Ace Project Hub",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ace Project Hub",
    description: "Apps, tools, and experiments by Ace.",
    images: ["/opengraph-image"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[#f6f7f4] text-[#101211]">
        <PageTracker />
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
