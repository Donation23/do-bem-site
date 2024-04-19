/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/do-bem-site",
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
};

export default nextConfig;
