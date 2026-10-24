/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  async redirects() {
    const services = '/services/';
    return [
      { source: '/roofing-services', destination: services, permanent: true },
      { source: '/roof-repairs', destination: services, permanent: true },
      { source: '/tile-and-ridge-tile-repairs', destination: services, permanent: true },
      { source: '/roof-leak-repairs', destination: services, permanent: true },
      { source: '/roof-maintenance', destination: services, permanent: true },
      { source: '/flat-roofing', destination: services, permanent: true },
      { source: '/slate-and-tile-roofing', destination: services, permanent: true },
      { source: '/roof-replacements', destination: services, permanent: true },
      { source: '/gutter-repairs', destination: services, permanent: true },
      { source: '/chimney-repairs', destination: services, permanent: true },
      { source: '/general-plumbing', destination: services, permanent: true },
      { source: '/hot-water-systems', destination: '/caldeiras-e-aquecedores/', permanent: true },
      { source: '/blocked-drains', destination: services, permanent: true },
    ];
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default nextConfig;
