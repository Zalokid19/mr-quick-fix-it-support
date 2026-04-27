import type { Metadata } from "next";
import HomePageClient from "./HomePageClient";
import HomeFaqSchema from "../components/HomeFaqSchema";

export const metadata: Metadata = {
  title: "Remote IT Support Cape Town",
  description:
    "Mr Quick Fix IT Support offers fast and affordable remote IT support in Cape Town, including PC repairs, virus removal, WiFi troubleshooting, and Windows help.",
};

export default function HomePage() {
  return (
    <>
      <HomeFaqSchema />
      <HomePageClient />
    </>
  );
}