/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export',
  images: {
    unoptimized: true
  },
  env: {
    VIRUSTOTAL_API_KEY: process.env.VIRUSTOTAL_API_KEY,
    ABUSEIPDB_API_KEY: process.env.ABUSEIPDB_API_KEY,
    ALIENVAULT_API_KEY: process.env.ALIENVAULT_API_KEY,
    OPENAI_API_KEY: process.env.OPENAI_API_KEY,
    NEXT_PUBLIC_PAYPAL_CLIENT_ID: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID,
    PAYPAL_SECRET_KEY: process.env.PAYPAL_SECRET_KEY
  },
  onDemandEntries: {
    // Period (in ms) where the server will keep pages in the buffer
    maxInactiveAge: 25 * 1000,
    // Number of pages that should be kept simultaneously without being disposed
    pagesBufferLength: 2,
  },
  webpack: (config, { isServer, dev }) => {
    // This suppresses the warning in development
    config.ignoreWarnings = [
      { module: /node_modules\/node-fetch\/lib\/index\.js/ },
    ];
    
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        punycode: require.resolve('punycode/')
      };
    }
    
    return config;
  },
}

module.exports = nextConfig
