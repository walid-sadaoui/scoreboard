import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  webpackDevMiddleware: (config: any) => {
    config.watchOptions = {
      poll: 1000, // Vérifie les changements toutes les secondes
      aggregateTimeout: 300,
    };
    return config;
  },
};

export default nextConfig;
