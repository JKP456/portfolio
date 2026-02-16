"use client";

import { motion } from "framer-motion";
import { Terminal, Shield, Cpu } from "lucide-react";

export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center relative overflow-hidden bg-black font-mono">
      
      {/* Background Grid & Scanline */}
      <div className="absolute inset-0 opacity-20 pointer-events-none bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-500/5 to-transparent h-[200%] animate-scanline pointer-events-none" />

      {/* Central Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-green-500/10 blur-[120px] rounded-full pointer-events-none"></div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="z-10 px-6"
      >
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-green-900/50 bg-green-950/20 text-[10px] text-green-500 uppercase tracking-widest"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          System_Status: Online
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold tracking-tighter text-white"
        >
          &gt; I'm <span className="text-green-500">ขัน</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-6 flex flex-col md:flex-row items-center gap-4 text-green-600/80 text-sm md:text-base"
        >
          <span className="flex items-center gap-2">
            <Shield size={16} /> Cybersecurity Student
          </span>
          <span className="hidden md:block text-green-900">|</span>
          <span className="flex items-center gap-2 text-green-400">
            <Cpu size={16} /> AI Developer
          </span>
          <span className="hidden md:block text-green-900">|</span>
          <span className="flex items-center gap-2">
             <Terminal size={16} /> Web Dev
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-12 flex flex-wrap justify-center gap-4"
        >
          <a
            href="#projects"
            className="group relative px-8 py-3 bg-green-600 text-black font-bold uppercase text-xs tracking-widest hover:bg-green-400 transition-all overflow-hidden"
          >
            <span className="relative z-10">Access_Projects</span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </a>

          <a
            href="#contact"
            className="px-8 py-3 border border-green-900 text-green-500 font-bold uppercase text-xs tracking-widest hover:bg-green-950/30 transition-all"
          >
            Init_Contact
          </a>
        </motion.div>
      </motion.div>

      {/* Footer Meta info */}
      <div className="absolute bottom-10 left-10 hidden lg:block">
        <p className="text-[10px] text-green-900 font-mono text-left leading-tight">
          LOC: BANGKOK, TH<br />
          STACK: NEXT_JS // PYTHON // MONGO<br />
          PORT: 3000 // STATUS: 200
        </p>
      </div>
    </section>
  );
}