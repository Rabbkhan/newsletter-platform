import type { NextConfig } from "next";
import withBundleAnalyzer from "@next/bundle-analyzer";

// Enable bundle analyzer only when ANALYZE is set to 'true'
const withAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      { hostname: "media.beehiiv.com" },
      { hostname: "img.clerk.com" },
    ],
  },
  experimental: {
    lazyPostCSS: true, // Lazy load PostCSS
  },
};

export default withAnalyzer(nextConfig);
