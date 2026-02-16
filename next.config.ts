/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/portfolio', // ชื่อ repository ของคุณ
  assetPrefix: '/portfolio', // ช่วยให้หาไฟล์ CSS/JS เจอ
  images: {
    unoptimized: true,
  },
};
export default nextConfig;