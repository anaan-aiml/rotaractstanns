import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import { Footer } from "@/components/footer";
import { LoadingScreen } from "@/components/loading-screen";
import { Navbar } from "@/components/navbar";
import { SmoothScroll } from "@/components/smooth-scroll";
import { pageMeta, siteUrl } from "@/lib/utils";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const poppins = Poppins({ subsets: ["latin"], weight: ["500", "600", "700", "800"], variable: "--font-poppins", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: pageMeta.home.title,
    template: "%s"
  },
  description: pageMeta.home.description,
  alternates: { canonical: "/" },
  openGraph: {
    title: pageMeta.home.title,
    description: pageMeta.home.description,
    url: siteUrl,
    siteName: "Rotaract Club of St. Ann's",
    images: [{ url: "/placeholders/photo.svg", width: 1200, height: 800, alt: "Upload Club Photo Here" }],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: pageMeta.home.title,
    description: pageMeta.home.description,
    images: ["/placeholders/photo.svg"]
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Rotaract Club of St. Ann's",
    url: siteUrl,
    logo: `${siteUrl}/placeholders/logo.svg`,
    description: pageMeta.home.description,
    sameAs: ["https://www.instagram.com/", "https://www.linkedin.com/"]
  };

  return (
    <html lang="en">
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased`}>
        <SmoothScroll />
        <LoadingScreen />
        <div className="noise" />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
      </body>
    </html>
  );
}
