import "./globals.css";
import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import WhatsAppButton from "../components/WhatsAppButton";
import MobileStickyCTA from "../components/MobileStickyCTA";
import LocalBusinessSchema from "../components/LocalBusinessSchema";

export const metadata: Metadata = {
  metadataBase: new URL("https://mr-quick-fix-it-support.vercel.app"),
  title: {
    default: "Mr Quick Fix IT Support | Remote IT Support Cape Town",
    template: "%s | Mr Quick Fix IT Support",
  },
  description:
    "Fast and affordable remote IT support in Cape Town. We fix laptops, remove viruses, solve WiFi issues, and provide remote computer support for homes and small businesses.",
  keywords: [
    "Mr Quick Fix IT Support",
    "IT support Cape Town",
    "remote IT support Cape Town",
    "computer repair Cape Town",
    "laptop repair Cape Town",
    "PC repair Cape Town",
    "virus removal Cape Town",
    "WiFi help Cape Town",
    "Windows support Cape Town",
    "remote computer support South Africa",
  ],
  alternates: {
    canonical: "/",
  },
  verification: {
    google: "ztJiIrf2qAbjfDw86WN0KTRrSjJA_N_usywWUtG1hLM",
},
  openGraph: {
    title: "Mr Quick Fix IT Support | Remote IT Support Cape Town",
    description:
      "Fast and affordable remote IT support in Cape Town. PC repairs, virus removal, WiFi troubleshooting, and Windows support.",
    url: "https://mr-quick-fix-it-support.vercel.app",
    siteName: "Mr Quick Fix IT Support",
    locale: "en_ZA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mr Quick Fix IT Support | Remote IT Support Cape Town",
    description:
      "Fast and affordable remote IT support in Cape Town. PC repairs, virus removal, WiFi troubleshooting, and Windows support.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#050816] text-white">
        <LocalBusinessSchema />
        <Navbar />
        {children}
        <WhatsAppButton />
        <MobileStickyCTA />
      </body>
    </html>
  );
}
