import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import { StructuredData } from "@/components/seo/StructuredData";
import { generatePageMetadata } from "@/lib/metadata-generator";
import { LOCAL_BUSINESS_SCHEMA, ORGANIZATION_SCHEMA, SITE_CONFIG } from "@/lib/seo-config";
import QueryProvider from "@/providers/query-provider";
import type { Metadata, Viewport } from "next";
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
  ...generatePageMetadata({ page: "home" }),
  metadataBase: new URL(SITE_CONFIG.url),
  authors: [
    {
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
    },
  ],
  creator: SITE_CONFIG.name,
  publisher: SITE_CONFIG.name,
  formatDetection: {
    email: false,
    telephone: true,
    address: true,
  },
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: SITE_CONFIG.name,
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <head>
        <StructuredData schema={ORGANIZATION_SCHEMA} />
        <StructuredData schema={LOCAL_BUSINESS_SCHEMA} />
        <meta name="apple-mobile-web-app-title" content={SITE_CONFIG.name} />
        <meta name="application-name" content={SITE_CONFIG.name} />
      </head>
      <body className="min-h-full flex flex-col">
        <Navbar />
        <QueryProvider>{children}</QueryProvider>
        <Footer />
      </body>
    </html>
  );
}
