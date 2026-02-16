/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // สำคัญมาก
  images: {
    unoptimized: true, // GitHub Pages ไม่รองรับ Image Optimization
  },
  // ถ้าโปรเจกต์คุณไม่ได้อยู่ที่ root (เช่น github.com/user/repo-name) 
  // ให้ใส่ basepath: '/repo-name' ด้วย แต่ถ้าเป็น domain หลักไม่ต้องครับ
};
export default nextConfig;