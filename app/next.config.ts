import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  /* config options here */
  webpack: (config) => {
    config.resolve.alias["@scoreboard/types"] = path.resolve(
      __dirname,
      "../packages/types/src"
    );
    return config;
  },
};

export default nextConfig;
