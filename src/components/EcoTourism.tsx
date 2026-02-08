"use client";

import React from "react";
import { motion } from "framer-motion";
import { Leaf, Footprints } from "lucide-react";
import Image from "next/image";

const EcoTourism: React.FC = () => {
  const ecoImages = [
    { id: 6, src: "/image/ga6.PNG", title: "Sanctuaries" },
    { id: 5, src: "/image/ga5.PNG", title: "Gardens" },
    { id: 4, src: "/image/ga4.PNG", title: "Plains" },
    { id: 2, src: "/image/ga2.PNG", title: "Conservation Forests" },
    { id: 3, src: "/image/ga3.PNG", title: "Rainforests" },
    { id: 7, src: "/image/ga7.PNG", title: "National Parks" },
    { id: 8, src: "/image/ga9.PNG", title: "Biodiversity" },
    { id: 9, src: "/image/ga8.PNG", title: "Biodiversity" },
  ];

  const categories = [
    "Strict Nature Reserve",
    "Conservation Forests",
    "Rainforests",
    "Plains",
    "Botenical Gardens",
    "Sanctuaries",
    "National Parks",
  ];

  return (
    <section className="w-full bg-[#050805] py-4 overflow-hidden relative">
      <div className="max-w-[1600px] mx-auto px-6 relative">
        {/* --- HEADER CONTENT OVERLAY --- */}
        <div className="absolute inset-0 z-20 pointer-events-none flex flex-col justify-center items-center px-6 text-center">
          {/* ඉහළම ඇති කුඩා පෙළ - Mobile size increased to 12px */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-1.5 text-emerald-400 font-bold uppercase tracking-[0.2em] text-[12px] md:text-[10px] drop-shadow-lg"
          >
            <Leaf size={12} className="md:w-[10px] md:h-[10px]" />
            Sustainable Exploration
          </motion.div>

          {/* මාතෘකාව - Mobile size increased to 3xl */}
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 text-3xl md:text-4xl font-black tracking-tighter text-white drop-shadow-2xl mt-2 mb-2"
          >
            <span
              style={{
                WebkitTextStroke: "1px rgba(255,255,255,0.9)",
                letterSpacing: "0.03em",
                lineHeight: "0.9",
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
                  lineHeight: "0.9",
                }}
              >
                TOURISM
              </motion.span>
            </span>
          </motion.h2>

          {/* Categories පෙළ - Mobile size increased to 10px */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="max-w-4xl flex flex-wrap justify-center gap-x-2 gap-y-1 px-3"
          >
            {categories.map((cat, i) => (
              <span
                key={i}
                className="text-[10px] md:text-[9px] text-emerald-50/90 font-medium tracking-wider uppercase flex items-center drop-shadow-md"
              >
                {cat}
                {i !== categories.length - 1 && (
                  <span className="ml-2 text-emerald-400/30">/</span>
                )}
              </span>
            ))}
          </motion.div>

          {/* --- INTEGRATED BADGE --- */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="relative w-14 h-14 md:w-16 md:h-16 flex items-center justify-center mt-3"
          >
            <div className="absolute inset-0 bg-black/30 rounded-full blur-sm" />
            <svg
              className="absolute w-full h-full animate-[spin_15s_linear_infinite]"
              viewBox="0 0 100 100"
            >
              <defs>
                <path
                  id="badgePath"
                  d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
                />
              </defs>
              <text className="fill-emerald-300/80 text-[10px] font-bold uppercase tracking-[0.3em]">
                <textPath xlinkHref="#badgePath">
                  LEAVE ONLY • LEAVE ONLY •{" "}
                </textPath>
              </text>
            </svg>
            <Footprints size={16} className="text-emerald-400 opacity-80" />
          </motion.div>
        </div>

        {/* --- IMAGE GRID --- */}
        <div className="flex flex-wrap lg:flex-nowrap justify-center w-full border border-white/5 relative z-10">
          {ecoImages.map((img, index) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.03 }}
              className="relative h-28 md:h-36 w-1/2 sm:w-1/4 lg:w-[14.28%] overflow-hidden border-r border-white/5"
            >
              <Image
                src={img.src}
                alt={img.title}
                fill
                className="object-cover opacity-70"
              />
              <div className="absolute inset-0 bg-black/20" />
              <div className="absolute bottom-0 left-0 w-full h-[1px] bg-emerald-500/20" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EcoTourism;
