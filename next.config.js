/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
        path: false,

      }
    }
    return config
  },
  reactStrictMode: true,
  images:{
    domains:["picsum.photos", "www.google.com" ,"drive.google.com","doc-10-ak-docs.googleusercontent.com"]
  },
  async rewrites() {
    return [
      {
        source: '/Auth',
        destination: process.env.NODE_ENV === 'production' ? '/' : '/Auth',
      },
      {
        source: '/Articles',
        destination: process.env.NODE_ENV === 'production' ? '/' : '/Articles',
      },
      {
        source: '/Admin',
        destination: process.env.NODE_ENV === 'production' ? '/' : '/Admin',
      },
    ];
  },
}

module.exports = nextConfig
