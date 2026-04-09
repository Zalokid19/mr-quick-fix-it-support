import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/performance-repair-cape-town",
        destination: "/services/performance-repair",
        permanent: true,
      },
      {
        source: "/wifi-help-cape-town",
        destination: "/services/internet-wifi-help",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;