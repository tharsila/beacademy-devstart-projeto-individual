/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = {
  nextConfig,
  images: { domains: ['*', 'petz.com.br', 'www.petz.com.br', 'images.pexels.com', 'wwww.images.pexels.com'] }

}
