import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // output: "standalone",
  images: {
    // minimumCacheTTL: 31536000, // 1 year in seconds
    remotePatterns: [{ protocol: "https", hostname: "**" }],
  },
  // async rewrites() {
  //   return [
  //     {
  //       source: "/api/:path*",
  //       destination: `${process.env.API_URL}/:path*`,
  //     },
  //   ];
  // },
};

export default nextConfig;
