const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
  register: true,
  skipWaiting: true,
  fallbacks: {
    document: '/offline.html',
  },
});

const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true, 
  },
};

module.exports = withPWA(nextConfig);
