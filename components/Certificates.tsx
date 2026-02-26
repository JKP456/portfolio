"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ShieldCheck, Download, ExternalLink, Award } from "lucide-react";

type Certificate = {
  title: string;
  issuer: string;
  file?: string;
  image?: string;
  type: string;
};

const certificates: Certificate[] = [
  {
    title: "Basic Cybersecurity",
    issuer: "NCSA",
    file: "/certificates/BAH3EFTU9JHLJ.pdf",
    type: "CRITICAL"
  },
  {
    title: "Badge of AWS Academy",
    issuer: "AWS",
    type: "CLOUD"
  },
  {
    title: "MEET the Youth Cyber Guardian 2025",
    issuer: "Royal Thai Armed Forces Headquarters Cyber Command",
    file: "/certificates/cyber-guardian-2025.pdf",
    type: "ELITE"
  },
];

export default function Certificates() {
  const basePath = process.env.NODE_ENV === "production" ? "/portfolio" : "";
  const withBasePath = (path?: string) => (path ? `${basePath}${path}` : "#");

  return (
    <section id="certificates" className="py-24 px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-12 font-mono">
          <span className="text-green-500 font-bold">$</span>
          <h2 className="text-2xl text-white uppercase tracking-[0.2em]">verify --credentials</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group bg-[#050505] border border-green-900/20 rounded-lg overflow-hidden transition-all hover:border-green-500/50"
            >
              {/* Header Badge */}
              <div className="absolute top-3 right-3 z-20">
                <span className="text-[8px] font-mono px-2 py-0.5 border border-green-900 bg-black text-green-600 rounded uppercase">
                </span>
              </div>

              {/* Visual Preview */}
              <div className="relative w-full h-44 bg-[#080808] flex items-center justify-center border-b border-green-900/10">
                {cert.image ? (
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    fill
                    className="object-contain p-8 group-hover:scale-110 transition-transform duration-500"
                  />
                ) : (
                  <div className="flex flex-col items-center gap-3">
                    <div className="relative">
                      <ShieldCheck className="text-green-500/20" size={60} />
                      <Award className="absolute inset-0 m-auto text-green-500" size={30} />
                    </div>
                    <span className="text-[10px] font-mono text-green-900">ENCRYPTED_DOC</span>
                  </div>
                )}
                {/* Scanline Effect */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-500/5 to-transparent h-full w-full animate-pulse pointer-events-none" />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                   <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-ping" />
                   <span className="text-[10px] font-mono text-green-500 tracking-widest uppercase">Verified</span>
                </div>
                
                <h3 className="text-sm font-bold text-white mb-1 group-hover:text-green-400 transition-colors h-10 line-clamp-2">
                  {cert.title}
                </h3>
                <p className="text-[11px] text-gray-500 font-mono mb-6">
                  AUTH: {cert.issuer}
                </p>

                {/* Actions */}
                <div className="flex items-center justify-between pt-4 border-t border-green-900/20">
                  <a
                    href={withBasePath(cert.file)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-[10px] font-bold text-green-500 hover:text-white transition-colors uppercase tracking-wider"
                  >
                    <ExternalLink size={12} /> View
                  </a>
                  {cert.file && (
                    <a
                      href={withBasePath(cert.file)}
                      download
                      className="p-1.5 rounded-md hover:bg-green-500 hover:text-black transition-all text-gray-600"
                    >
                      <Download size={14} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}