"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, Cpu, Zap, CreditCard, BarChart3, X } from "lucide-react";
import MusicRecommender from "./music-ai"; // นำเข้าคอมโพเนนต์ที่เราสร้างไว้

const projects = [
  {
    id: "mlbb",
    title: "MLBB Draft-Pick API",
    tech: "Python, FastAPI, MongoDB",
    icon: <BarChart3 size={20} className="text-cyan-400" />,
    status: "VERSION_1",
    description: "An intelligent recommendation engine for MLBB draft phases. Analyzes counter-picks and team synergy to optimize win-rate probability."
  },
  {
    id: "bot",
    title: "Game Boss Automation Bot",
    tech: "Python, ADB, OpenCV",
    icon: <Zap size={20} className="text-yellow-500" />,
    status: "COMPLETE",
    description: "Automated gameplay using computer vision for precise boss pattern recognition and task execution."
  },
  {
    id: "music-ai",
    title: "Mood-Based Music AI",
    tech: "Python, Flask, Scikit-learn, Next.js",
    icon: <Cpu size={20} className="text-purple-500" />,
    status: "LIVE_DEMO",
    description: "An adaptive music recommender using Random Forest Regressor to predict user preferences based on current mood and audio features."
  },
  {
    id: "topup",
    title: "Top-up Game Website",
    tech: "Next.js, Prisma, Stripe",
    icon: <CreditCard size={20} className="text-blue-500" />,
    status: "ACTIVE",
    description: "E-commerce portal featuring secure payment integration and instant digital delivery for game credits."
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-24 px-6 bg-black min-h-screen">
      <div className="max-w-6xl mx-auto">
        
        <div className="flex items-center gap-3 mb-12 font-mono">
          <span className="text-green-500 font-bold">$</span>
          <h2 className="text-2xl text-white uppercase tracking-[0.2em]">ls ./secondary_projects</h2>
          <motion.span 
            animate={{ opacity: [0, 1, 0] }}
            transition={{ repeat: Infinity, duration: 0.8 }}
            className="w-2.5 h-6 bg-green-500"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              onClick={() => project.id === "music-ai" && setSelectedProject(project)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`group relative bg-[#080808] border border-green-900/20 p-6 rounded-lg transition-all hover:bg-[#0a0a0a] cursor-pointer ${project.id === "music-ai" ? "hover:border-purple-500/40" : "hover:border-green-500/40"}`}
            >
              <div className="flex justify-between items-start mb-6">
                <div className="p-2 bg-black border border-green-900/30 rounded group-hover:border-green-500/50 transition-colors shadow-[0_0_10px_rgba(34,197,94,0.1)]">
                  {project.icon}
                </div>
                <span className="text-[9px] font-mono text-green-800 bg-green-950/10 px-2 py-0.5 rounded border border-green-950">
                  {project.status}
                </span>
              </div>

              <h3 className="text-lg font-bold text-white mb-2 font-mono group-hover:text-green-400 transition-colors">
                {project.title}
              </h3>
              
              <p className="text-gray-500 text-[13px] mb-6 leading-relaxed h-16 line-clamp-3">
                {project.description}
              </p>

              <div className="pt-4 border-t border-green-900/10">
                <div className="flex flex-wrap gap-2">
                  {project.tech.split(', ').map((t) => (
                    <span key={t} className="text-[10px] font-mono text-gray-400 uppercase tracking-tighter">
                      #{t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="absolute top-0 right-0 p-1 opacity-0 group-hover:opacity-100 transition-opacity">
                <Terminal size={12} className="text-green-900" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Modal - Live Demo สำหรับ Music AI */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-[#050505] border border-green-500/30 rounded-xl p-1"
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 text-green-900 hover:text-green-500 transition-colors z-10"
              >
                <X size={24} />
              </button>
              
              <div className="p-1">
                {selectedProject.id === "music-ai" && <MusicRecommender />}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}