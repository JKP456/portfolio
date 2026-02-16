"use client";

import { motion } from "framer-motion";
import { GraduationCap, Terminal } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="py-12 px-6 bg-black">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-3 mb-8 font-mono">
          <span className="text-green-500 font-bold">$</span>
          <h2 className="text-xl text-white uppercase tracking-[0.2em]">cat ./academic_history</h2>
        </div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative border-l-2 border-green-900 ml-4 pl-8 py-2"
        >
          {/* Animated Node Point */}
          <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-black border-2 border-green-500 shadow-[0_0_10px_#22c55e]" />

          <div className="bg-[#080808] border border-green-900/30 p-6 rounded-lg group hover:border-green-500/50 transition-all">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
              <div>
                <h3 className="text-2xl font-bold text-white group-hover:text-green-400 transition-colors">
                  Bachelor of Computer Science
                </h3>
                <p className="text-green-600 font-mono flex items-center gap-2 mt-1">
                  <GraduationCap size={18} /> Bangkok University
                </p>
              </div>
              <div className="text-right">
                <span className="text-[10px] font-mono text-green-900 bg-green-950/20 px-3 py-1 rounded border border-green-900/50 block md:inline-block">
                  2022 — 2026 (ACTIVE)
                </span>
              </div>
            </div>

            <div className="space-y-4 text-sm md:text-base text-gray-500 font-mono">
              <div className="flex items-start gap-3">
                <Terminal size={14} className="text-green-500 mt-1 shrink-0" />
                <p>
                  <span className="text-white">Specialization:</span> Data Science & Cybersecurity
                </p>
              </div>

              {/* Added Technical Focus to highlight skills over GPA */}
              <div className="flex items-start gap-3">
                <Terminal size={14} className="text-green-500 mt-1 shrink-0" />
                <p>
                  <span className="text-white">Technical_Focus:</span> AI Moderation Systems, Network Defense, and Full-stack Architecture.
                </p>
              </div>
              
              <div className="flex items-start gap-3">
                <Terminal size={14} className="text-green-500 mt-1 shrink-0" />
                <p>
                  <span className="text-white">Relevant_Labs:</span> Cloud Infrastructure (AWS), Intelligent Data Analysis, and Web Security.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <Terminal size={14} className="text-green-500 mt-1 shrink-0" />
                <p>
                  <span className="text-white">Location:</span> Pathum Thani, Thailand
                </p>
              </div>
            </div>

            {/* BU Creative Tech Accent */}
            <div className="mt-8 pt-4 border-t border-green-900/20 text-[10px] text-green-800 flex justify-between items-center">
              <span>&gt; BU_CORE_AUTHORIZED</span>
              <span>VERIFIED_STUDENT_ID: 1650703570</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}