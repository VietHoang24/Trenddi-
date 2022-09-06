/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  publicRuntimeConfig:{
    BE_BASE_URL: 'http://10.22.5.191:3001',
    REACT_ENV: 'dev'
  },
}

module.exports = nextConfig
