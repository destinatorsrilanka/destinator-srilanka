"use client";

import React from "react";
import { motion } from "framer-motion";
import { Leaf, Footprints } from "lucide-react";
import Image from "next/image";

const EcoTourism: React.FC = () => {
  // පින්තූර 7ක් පමණක් ඇතුළත් කර ඇත
  const ecoImages = [
    { id: 6, src: "/image/ga6.PNG", title: "Sanctuaries" },
    { id: 5, src: "/image/ga5.PNG", title: "Gardens" },
    { id: 4, src: "/image/ga4.PNG", title: "Plains" },
    { id: 2, src: "/image/ga2.PNG", title: "Conservation Forests" },
    { id: 3, src: "/image/ga3.PNG", title: "Rainforests" },
    { id: 7, src: "/image/ga7.PNG", title: "National Parks" },
    { id: 8, src: "/image/ga8.PNG", title: "Biodiversity" },
  ];

  const categories = [
    "Strict Nature Reserve",
    "Conservation Forests",
    "Rainforests",
    "Plains",
    "Gardens",
    "Sanctuaries",
    "National Parks",
  ];

  return (
    <section className="w-full bg-[#050805] py-8 overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 relative">
        {/* --- HEADER CONTENT OVERLAY --- */}
        <div className="absolute inset-0 z-20 pointer-events-none flex flex-col justify-center items-center px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 text-emerald-400 font-bold uppercase tracking-[0.3em] text-[10px] md:text-[11px] mb-1 drop-shadow-[0_2px_4px_rgba(0,0,0,1)]"
          >
            <span className="flex items-center gap-2 drop-shadow-lg">
              <Leaf size={12} />
              Sustainable Exploration
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 5 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 text-2xl md:text-5xl font-black tracking-tighter text-white drop-shadow-[0_4px_12px_rgba(0,0,0,1)]"
          >
            <span
              style={{
                WebkitTextStroke: "1px rgba(255,255,255,0.9)",
                letterSpacing: "0.05em",
                lineHeight: "1",
              }}
              className="text-transparent inline-block"
            >
              ECO
            </span>
            <span className="relative inline-block overflow-hidden">
              <motion.span
                animate={{ backgroundPosition: ["200% 0%", "-200% 0%"] }}
                transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                style={{
                  background:
                    "linear-gradient(120deg, #10b981 40%, #ffffff 50%, #10b981 60%)",
                  backgroundSize: "200% 100%",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  display: "inline-block",
                  lineHeight: "1",
                }}
              >
                TOURISM
              </motion.span>
            </span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="max-w-4xl flex flex-wrap justify-center gap-x-2 gap-y-1 mt-3 px-3 py-1.5"
          >
            {categories.map((cat, i) => (
              <span
                key={i}
                className="text-[8px] md:text-[10px] text-emerald-50 font-semibold tracking-[0.1em] uppercase flex items-center drop-shadow-[0_2px_4px_rgba(0,0,0,1)]"
              >
                {cat}
                {i !== categories.length - 1 && (
                  <span className="ml-2 text-emerald-600/50">/</span>
                )}
              </span>
            ))}
          </motion.div>

          {/* Footprint Animation */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col items-center mt-4"
          >
            <div className="flex gap-5 mb-1">
              <motion.div
                animate={{ opacity: [0, 1, 0], y: [0, -4, -8] }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                  times: [0, 0.4, 1],
                }}
              >
                <Footprints
                  size={18}
                  className="text-emerald-400 rotate-[-20deg]"
                />
              </motion.div>
              <motion.div
                animate={{ opacity: [0, 1, 0], y: [0, -4, -8] }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                  delay: 1,
                  times: [0, 0.4, 1],
                }}
              >
                <Footprints
                  size={18}
                  className="text-emerald-400 rotate-[20deg]"
                />
              </motion.div>
            </div>
            <p className="text-[11px] md:text-[12px] font-bold italic text-emerald-300 tracking-[0.2em] uppercase drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              Leave only footprints
            </p>
          </motion.div>
        </div>

        {/* --- ADJUSTED IMAGE GRID FOR 7 ITEMS --- */}
        {/* පින්තූර 7ක් තිබෙන විට එය හරියටම screen එක පුරා විහිදෙන ලෙස මෙහි සකසා ඇත */}
        <div className="flex flex-wrap lg:flex-nowrap justify-center w-full border border-white/5 relative z-10">
          {ecoImages.map((img, index) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="relative h-32 md:h-44 w-1/2 sm:w-1/4 lg:w-[14.28%] overflow-hidden border-r border-white/5 group"
            >
              <Image
                src={img.src}
                alt={img.title}
                fill
                className="object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-500"
              />
              <div className="absolute bottom-0 left-0 w-full h-[1px] bg-emerald-500/20" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EcoTourism;
