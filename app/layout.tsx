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
    images: [{ url: "/brand/rotaract-logo.png", width: 1552, height: 498, alt: "Rotaract Club of St. Ann's logo" }],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: pageMeta.home.title,
    description: pageMeta.home.description,
    images: ["/brand/rotaract-logo.png"]
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
    logo: `${siteUrl}/brand/rotaract-logo.png`,
    description: pageMeta.home.description,
    sameAs: [
      "https://www.instagram.com/rotaract_st.anns",
      "http://www.youtube.com/@rotaractclubofstanns",
      "https://www.linkedin.com/in/rotaract-club-of-st-ann-s-206381384"
    ]
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
