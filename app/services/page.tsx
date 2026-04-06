import type { Metadata } from "next";
import ServicesPageClient from "./ServicePageClient";

export const metadata: Metadata = {
  title: "IT Services",
  description:
    "Explore IT support services including PC and laptop repair, virus removal, internet and WiFi help, and remote computer support.",
};

export default function ServicesPage() {
  return <ServicesPageClient />;
}