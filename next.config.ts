import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block", // Prevents Cross-Site Scripting (XSS)
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN", // Prevents Clickjacking
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff", // Mime-sniffing prevention
          },
          {
            key: "Referrer-Policy",
            value: "origin-when-cross-origin",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
