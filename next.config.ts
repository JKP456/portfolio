/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/portfolio', // ใส่ชื่อ Repository ของคุณ
  images: {
    unoptimized: true,
  },
};
export default nextConfig;