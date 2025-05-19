import type { NextConfig } from "next";
import type { Configuration } from 'webpack';

const nextConfig: NextConfig = {
  webpack: (config: Configuration, { isServer }: { isServer: boolean }) => {
    // Add support for .mjs files
    if (config.resolve && config.resolve.extensions) {
      config.resolve.extensions.push('.mjs');
    }
    
    // Handle ESM modules
    if (config.module && config.module.rules) {
      config.module.rules.push({
        test: /\.m?js$/,
        type: 'javascript/auto',
        resolve: {
          fullySpecified: false
        }
      });
    }

    return config;
  }
};

export default nextConfig;
