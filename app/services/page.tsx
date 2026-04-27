import type { Metadata } from "next";
import ServicesPageClient from "./ServicePageClient";

export const metadata: Metadata = {
  title: "Remote IT Support Services Cape Town | Mr Quick Fix IT Support",
  description:
    "Explore remote IT support services in Cape Town including performance repair, virus removal, WiFi troubleshooting, and remote computer help.",
  alternates: {
    canonical: "/services",
  },
};

export default function ServicePage() {
  return <ServicesPageClient />;
}