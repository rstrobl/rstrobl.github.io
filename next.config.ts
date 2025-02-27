const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disable default image optimization
  },
  assetPrefix: isProd ? '/rstrobl.github.io/' : '',
  basePath: isProd ? '/rstrobl.github.io' : '',
  output: 'export'
};

export default nextConfig;