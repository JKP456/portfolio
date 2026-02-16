"use client";

import { motion } from "framer-motion";
import { ShoppingBag, Github, Image as ImageIcon, Database, Terminal, ExternalLink, ShieldAlert } from "lucide-react";

export default function SeniorProject() {
  const deploymentUrl = "https://walke4you-848537743925.asia-southeast1.run.app/";

  return (
    <section id="senior-project" className="py-24 px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        
        <div className="flex items-center gap-4 mb-12">
          <div className="h-[1px] w-12 bg-green-500"></div>
          <h2 className="text-xl font-mono text-green-500 tracking-[0.2em] uppercase">
            Senior Project Showcase
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative border border-green-900/40 bg-[#050505] rounded-lg overflow-hidden shadow-2xl shadow-green-900/10"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left: Main Project Info */}
            <div className="lg:col-span-8 p-8 md:p-12 border-b lg:border-b-0 lg:border-r border-green-900/30">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <ShieldAlert className="text-green-500" size={24} />
                  <span className="text-[10px] font-mono text-green-700 font-bold uppercase tracking-[0.2em]">
                    AI-Driven Security Protocol Active
                  </span>
                </div>
                <a 
                  href="https://github.com/iMpAtz/walk4you" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-1 bg-[#111] border border-green-900/50 rounded-full text-[10px] font-mono text-gray-400 hover:text-green-400 hover:border-green-400 transition-all"
                >
                  <Github size={12} /> iMpAtz/walk4you
                </a>
              </div>
              
              <h3 className="text-4xl font-bold text-white mb-6 tracking-tight">
                Walk4You <span className="text-green-500 text-2xl font-mono block md:inline mt-2 md:mt-0">v2.0.4</span>
              </h3>

              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                An intelligent university e-commerce ecosystem. Integrated an 
                <span className="text-white"> AI-powered content moderation layer</span> that 
                automatically scans and flags <span className="text-green-400">illegal products</span> 
                before they reach the store, ensuring platform compliance and security.
              </p>

              <div className="flex flex-wrap gap-4 mb-10">
                <div className="flex items-center gap-2 px-4 py-2 bg-green-950/10 border border-green-900/30 rounded text-green-400 text-sm font-mono">
                  Python AI
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-green-950/10 border border-green-900/30 rounded text-green-400 text-sm font-mono">
                  Next.js
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-green-950/10 border border-green-900/30 rounded text-green-400 text-sm font-mono">
                  Cloudinary
                </div>
                   <div className="flex items-center gap-2 px-4 py-2 bg-green-950/10 border border-green-900/30 rounded text-green-400 text-sm font-mono">
                  Mongo DB
                </div>
              </div>

              <a 
                href={deploymentUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-green-600 text-black font-bold rounded hover:bg-green-400 transition-all group"
              >
                LAUNCH_LIVE_DEMO <ExternalLink size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Right: Technical Stats/Logs */}
            <div className="lg:col-span-4 p-8 bg-[#080808] font-mono">
              <h4 className="text-xs text-gray-500 uppercase mb-6 flex items-center justify-between">
                Security Status <Terminal size={14} className="text-green-500" />
              </h4>
              
              <div className="space-y-4 text-[13px]">
                <div className="flex justify-between">
                  <span className="text-gray-600">AI Engine:</span>
                  <span className="text-green-400">Content_Shield_v1</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Scan Latency:</span>
                  <span className="text-green-400">&lt; 150ms</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Policy:</span>
                  <span className="text-green-400">Strict_Moderation</span>
                </div>
                
                <div className="mt-8 pt-6 border-t border-green-900/30">
                  <p className="text-[11px] text-green-800 leading-tight mb-4">
                    // AI INFERENCE LOGS<br />
                    &gt; product_upload_request received...<br />
                    &gt; scanning image metadata...<br />
                    &gt; scanning content for illegal patterns...<br />
                    &gt; result: <span className="text-green-500">CLEAR</span>
                  </p>
                  <a 
                    href="https://github.com/iMpAtz/walk4you"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full py-3 border border-green-900 text-green-500 font-bold uppercase text-xs text-center tracking-widest hover:bg-green-950/30 transition-colors"
                  >
                    VIEW_SOURCE_CODE
                  </a>
                </div>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}