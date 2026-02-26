"use client";

import { motion } from "framer-motion";
import { Github, Mail, Phone, ShieldCheck, Globe, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-black">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-12 font-mono">
          <span className="text-green-500 font-bold">$</span>
          <h2 className="text-2xl text-white uppercase tracking-[0.2em]">initiate --connection</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

          {/* Email Port */}
          <motion.a
            href="mailto:nongkhun2015@gmail.com"
            whileHover={{ y: -5 }}
            className="group bg-[#080808] border border-green-900/30 p-8 rounded-lg text-center transition-all hover:border-green-500/50 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-2 opacity-20 group-hover:opacity-100 transition-opacity">
              <ShieldCheck size={12} className="text-green-500" />
            </div>
            <Mail className="mx-auto mb-4 text-green-700 group-hover:text-green-400 transition-colors" size={32} />
            <p className="text-[10px] font-mono text-green-900 uppercase mb-1 tracking-tighter">Protocol: SMTP</p>
            <p className="text-white font-mono text-sm group-hover:text-green-400 transition-colors">Email_Client</p>
          </motion.a>

          {/* GitHub Port */}
          <motion.a
            href="https://github.com/JKP456"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -5 }}
            className="group bg-[#080808] border border-green-900/30 p-8 rounded-lg text-center transition-all hover:border-green-500/50 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-2 opacity-20 group-hover:opacity-100 transition-opacity">
              <Github size={12} className="text-green-500" />
            </div>
            <Github className="mx-auto mb-4 text-green-700 group-hover:text-green-400 transition-colors" size={32} />
            <p className="text-[10px] font-mono text-green-900 uppercase mb-1 tracking-tighter">Remote: Origin</p>
            <p className="text-white font-mono text-sm group-hover:text-green-400 transition-colors">Source_Control</p>
          </motion.a>

          {/* LinkedIn Port */}
          <motion.a
            href="https://www.linkedin.com/in/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -5 }}
            className="group bg-[#080808] border border-green-900/30 p-8 rounded-lg text-center transition-all hover:border-green-500/50 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-2 opacity-20 group-hover:opacity-100 transition-opacity">
              <Linkedin size={12} className="text-green-500" />
            </div>
            <Linkedin className="mx-auto mb-4 text-green-700 group-hover:text-green-400 transition-colors" size={32} />
            <p className="text-[10px] font-mono text-green-900 uppercase mb-1 tracking-tighter">Network: Professional</p>
            <p className="text-white font-mono text-sm group-hover:text-green-400 transition-colors">LinkedIn_Profile</p>
          </motion.a>

          {/* Phone/Signal Port */}
          <motion.div
            whileHover={{ y: -5 }}
            className="group bg-[#080808] border border-green-900/30 p-8 rounded-lg text-center transition-all hover:border-green-500/50 relative overflow-hidden cursor-default"
          >
            <div className="absolute top-0 right-0 p-2 opacity-20 group-hover:opacity-100 transition-opacity">
              <Globe size={12} className="text-green-500" />
            </div>
            <Phone className="mx-auto mb-4 text-green-700 group-hover:text-green-400 transition-colors" size={32} />
            <p className="text-[10px] font-mono text-green-900 uppercase mb-1 tracking-tighter">Line: +66 (TH)</p>
            <p className="text-white font-mono text-sm group-hover:text-green-400 transition-colors">092-883-5189</p>
          </motion.div>

        </div>

        {/* Closing Terminal Prompt */}
        <div className="mt-16 text-center">
          <p className="text-green-900 font-mono text-xs italic">
            &gt; connection_timeout: false <br />
            &gt; awaiting_inbound_transmission...
          </p>
          <motion.div 
            animate={{ opacity: [0, 1, 0] }}
            transition={{ repeat: Infinity, duration: 1 }}
            className="w-12 h-1 bg-green-500 mx-auto mt-4 shadow-[0_0_10px_#22c55e]"
          />
        </div>
      </div>
    </section>
  );
}