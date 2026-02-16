"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, Cpu, Zap, CreditCard, BarChart3, X, Code2 } from "lucide-react";
import MusicRecommender from "./music-ai"; 

// 1. เพิ่ม Interface เพื่อระบุประเภทข้อมูลของ Project
interface Project {
  id: string;
  title: string;
  tech: string;
  icon: React.ReactNode;
  status: string;
  github: string;
  description: string;
}

const projects: Project[] = [
  {
    id: "mlbb",
    title: "MLBB Draft-Pick System",
    tech: "Node.js, Firebase, Cloudinary",
    icon: <BarChart3 size={20} className="text-cyan-400" />,
    status: "COMPLETE",
    github: "https://github.com/JKP456/API2",
    description: "Professional tournament draft engine featuring a real-time broadcast control panel and dynamic hero pool management."
  },
  {
    id: "auto-form",
    title: "Google Forms Auto-Fill Bot",
    tech: "Python, Selenium, Pandas",
    icon: <Zap size={20} className="text-orange-500" />,
    status: "COMPLETE",
    github: "https://github.com/JKP456/BotFillAuto", 
    description: "High-speed automated data entry bot for Google Forms. Processes large datasets from Excel/CSV with 100% accuracy."
  },
  {
    id: "music-ai",
    title: "Mood-Based Music AI",
    tech: "Python, Flask, Scikit-learn",
    icon: <Cpu size={20} className="text-purple-500" />,
    status: "LIVE_DEMO",
    github: "https://github.com/JKP456/Mood-Based-Music-Recommender-main",
    description: "AI-driven recommendation system using Random Forest to analyze user mood and audio features for personalized playlists."
  },
  {
    id: "bot",
    title: "Game Boss Automation",
    tech: "Python, ADB, OpenCV",
    icon: <Zap size={20} className="text-yellow-500" />,
    status: "COMPLETE",
    github: "https://github.com/JKP456/BotADB",
    description: "Mobile game automation tool utilizing computer vision for pattern recognition and automated task execution."
  },
  {
    id: "topup",
    title: "Secure Top-up Portal",
    tech: "Next.js, Prisma, Supabase, Stripe",
    icon: <CreditCard size={20} className="text-blue-500" />,
    status: "INCOMPLETE",
    github: "https://github.com/JKP456/TermGame",
    description: "E-commerce platform with automated digital delivery and secure payment integration for gaming credits."
  }
];

export default function Projects() {
  // 2. กำหนดประเภทให้ useState เป็น <Project | null> เพื่อรองรับทั้งค่าว่างและข้อมูลโปรเจกต์
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 px-6 bg-black min-h-screen font-mono">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <span className="text-green-500 font-bold">$</span>
          <h2 className="text-2xl text-white uppercase tracking-[0.2em]">ls ./deployed_projects</h2>
          <motion.span 
            animate={{ opacity: [0, 1, 0] }}
            transition={{ repeat: Infinity, duration: 0.8 }}
            className="w-2.5 h-6 bg-green-500"
          />
        </div>

        {/* Grid Responsive: 1 คอลัมน์บนมือถือ และ 5 คอลัมน์บนจอใหญ่ตามที่คุณต้องการ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4"> 
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-[#080808] border border-green-900/20 p-5 rounded-lg hover:border-green-500/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-start mb-4">
                  <div className="p-2 bg-black border border-green-900/30 rounded group-hover:border-green-500/50 transition-colors">
                    {project.icon}
                  </div>
                  <span className={`text-[8px] px-2 py-0.5 rounded border ${
                    project.status === "COMPLETE" ? "text-green-500 border-green-900 bg-green-950/10" : 
                    project.status === "LIVE_DEMO" ? "text-purple-500 border-purple-900 bg-purple-950/10" :
                    "text-yellow-600 border-yellow-900 bg-yellow-950/10"
                  }`}>
                    {project.status}
                  </span>
                </div>

                <h3 className="text-md font-bold text-white mb-2 group-hover:text-green-400 leading-tight">
                  {project.title}
                </h3>
                
                <p className="text-gray-500 text-[11px] mb-4 leading-relaxed h-20 line-clamp-4">
                  {">"} {project.description}
                </p>
              </div>

              <div className="mt-auto">
                <div className="pt-3 border-t border-green-900/10 mb-3 flex flex-wrap gap-1">
                  {project.tech.split(', ').slice(0, 2).map((t) => (
                    <span key={t} className="text-[8px] text-gray-600 uppercase">#{t}</span>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1 bg-[#111] hover:bg-green-950/20 text-gray-400 hover:text-green-500 border border-white/5 hover:border-green-500/50 py-1.5 rounded text-[9px] transition-all"
                  >
                    <Code2 size={12} /> SOURCE
                  </a>

                  {project.id === "music-ai" ? (
                    <button 
                      onClick={() => setSelectedProject(project)}
                      className="flex items-center justify-center gap-1 bg-green-600/10 hover:bg-green-600/20 text-green-500 border border-green-600/30 py-1.5 rounded text-[9px] transition-all"
                    >
                      <Terminal size={12} /> RUN
                    </button>
                  ) : (
                    <div className="flex items-center justify-center text-gray-700 border border-white/5 py-1.5 rounded text-[8px] opacity-40 cursor-default">
                        SECURE_LINK
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal - ปรับให้ Compact */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/90 backdrop-blur-sm">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative w-full max-w-md bg-[#050505] border border-green-500/30 rounded-lg overflow-hidden"
            >
              <div className="bg-[#0a0a0a] border-b border-green-900/30 px-4 py-2 flex justify-between items-center">
                <span className="text-[10px] text-green-900 uppercase font-bold tracking-widest">executor.exe</span>
                <button onClick={() => setSelectedProject(null)} className="text-green-900 hover:text-green-500"><X size={18} /></button>
              </div>
              <div className="max-h-[70vh] overflow-y-auto p-2">
                <MusicRecommender />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}