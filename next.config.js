const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['cdn-icons-png.flaticon.com', "e7.pngegg.com", "w7.pngwing.com", "cdn.worldvectorlogo.com", "caddyserver.com", "static-00.iconduck.com", "1000logos.net"],
    unoptimized: true
  },
  sassOptions: {
    includePaths: [path.join(__dirname, './styles')],
  },
  output: "export",
  distDir: "out"
}

module.exports = nextConfig
