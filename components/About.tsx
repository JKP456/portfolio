"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-black">
      <div className="max-w-4xl mx-auto">
        {/* Terminal Window Header */}
        <div className="bg-[#1a1a1a] rounded-t-lg p-3 flex items-center gap-2 border-x border-t border-green-900/30">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
          <span className="text-xs text-gray-500 ml-2 font-mono italic">bash — profile.sh</span>
        </div>

        {/* Terminal Body */}
        <div className="bg-[#0a0a0a] border border-green-900/30 p-8 rounded-b-lg shadow-[0_0_30px_rgba(34,197,94,0.05)] relative overflow-hidden">
          {/* Subtle Scanline Overlay */}
          <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]" />

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-mono relative z-10"
          >
            {/* Header / Title */}
            <div className="flex items-center gap-2 mb-8">
              <span className="text-green-500 font-bold">$</span>
              <motion.h2 
                className="text-xl md:text-2xl text-green-400 font-bold uppercase tracking-tighter"
                initial={{ width: 0 }}
                whileInView={{ width: "fit-content" }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                whoami
              </motion.h2>
              <motion.span 
                animate={{ opacity: [0, 1, 0] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
                className="w-2.5 h-6 bg-green-500"
              />
            </div>

            {/* Content Body */}
            <div className="space-y-6 text-green-500/90 md:text-lg leading-relaxed">
              <div>
                <p><span className="text-white brightness-125">NAME:</span> Khun (Jakapan Ploensup)</p>
                <p><span className="text-white brightness-125">FOCUS:</span> Cybersecurity // Full-stack Development</p>
                <p><span className="text-white brightness-125">STATUS:</span> Active_Developer_v2.0</p>
              </div>
              
              <p>
                I specialize in architecting <span className="text-green-300 border-b border-green-900">secure web applications</span> and 
                <span className="text-green-300 border-b border-green-900 ml-1">AI-driven automation</span>. 
                My expertise lies in bridging the gap between robust backend logic and hardened security protocols.
              </p>

              <div className="bg-green-950/10 p-4 border-l-2 border-green-500/50 text-sm md:text-base">
                <p className="text-green-400 mb-1">// Technical_Specs:</p>
                <p className="text-gray-400">
                  Main_Stack: Next.js, Python, MongoDB <br />
                  Specialization: Content Moderation AI, Penetration Testing
                </p>
              </div>

              <p className="text-green-600/70 italic text-sm md:text-base">
                &gt; Mission: Building secure, scalable, and intelligent digital environments.
              </p>
            </div>

            {/* Footer Prompt */}
            <div className="mt-10 flex items-center gap-2">
              <span className="text-green-500 font-bold">$</span>
              <span className="animate-pulse text-green-500">_</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}