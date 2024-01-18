/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false, // Disable "X-Powered-By" header from Next.js for security reasons
  output: "standalone",
};

module.exports = nextConfig;
