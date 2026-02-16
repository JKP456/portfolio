"use client";

import { motion } from "framer-motion";
import { Code2, ShieldCheck, BrainCircuit, Globe } from "lucide-react";

const skillCategories = [
  {
    title: "Web_Development.js",
    icon: <Globe size={18} />,
    skills: ["Next.js", "React", "Prisma", "Tailwind", "Firebase"],
    status: "OPTIMIZED",
  },
  {
    title: "Cyber_Security.sh",
    icon: <ShieldCheck size={18} />,
    skills: ["Vulnerability Assessment", "Network Security", "Auth Protocols", "Hardening"],
    status: "SECURED",
  },
  {
    title: "Artificial_Intelligence.py",
    icon: <BrainCircuit size={18} />,
    skills: ["LLM Integration", "Automation", "Data Modeling", "Python"],
    status: "ACTIVE",
  },
  {
    title: "Core_Systems.env",
    icon: <Code2 size={18} />,
    skills: ["AWS", "Node.js", "TypeScript", "SQL/NoSQL"],
    status: "STABLE",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-black">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="mb-12 flex items-center gap-3 font-mono">
          <span className="text-green-500 font-bold">$</span>
          <h2 className="text-2xl text-white uppercase tracking-widest">list --skills --all</h2>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="border border-green-900/30 bg-[#050505] p-6 rounded-lg group hover:border-green-500/50 transition-colors"
            >
              {/* Category Header */}
              <div className="flex justify-between items-center mb-6 border-b border-green-900/20 pb-4">
                <div className="flex items-center gap-3 text-green-400">
                  {category.icon}
                  <span className="font-mono font-bold uppercase tracking-tight">
                    {category.title}
                  </span>
                </div>
                <span className="text-[10px] font-mono text-green-600 animate-pulse">
                  [{category.status}]
                </span>
              </div>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-black border border-green-900 text-green-500/80 font-mono text-xs rounded-sm hover:text-white hover:border-green-400 transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Decorative "Progress Bar" */}
              <div className="mt-6 w-full bg-green-950/20 h-1.5 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                  className="h-full bg-gradient-to-r from-green-900 to-green-500"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}