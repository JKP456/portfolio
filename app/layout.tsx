import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "@fontsource/share-tech-mono";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  // ปรับชื่อให้เข้ากับ Portfolio ของคุณ
  title: "KUN.exe // Cybersecurity & AI Specialist", 
  description: "Portfolio of a Cybersecurity and AI specialist at Bangkok University",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth"> {/* เพิ่ม scroll-smooth เพื่อให้เวลาคลิกเมนูแล้วเลื่อนนุ่มนวล */}
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white min-h-screen overflow-x-hidden`}
      >
        {/* 1. overflow-x-hidden: ป้องกันหน้าจอเลื่อนแนวนอนบนมือถือจาก Animation ที่ล้นขอบ 
          2. min-h-screen: ให้พื้นหลังสีดำเต็มหน้าจอเสมอ
        */}
        <div className="relative flex flex-col w-full">
          {children}
        </div>
      </body>
    </html>
  );
}