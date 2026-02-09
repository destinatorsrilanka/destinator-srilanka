"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Footprints, X } from "lucide-react";
import Image from "next/image";

const EcoTourism: React.FC = () => {
  const [showInfo, setShowInfo] = useState(false);

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
    "Botanical Gardens",
    "Sanctuaries",
    "National Parks",
  ];

  return (
    <section className="w-full bg-[#050805] py-4 overflow-hidden relative">
      <div className="max-w-[1600px] mx-auto px-6 relative">
        <div className="relative border border-white/5 overflow-hidden flex flex-col">
          {/* --- HEADER CONTENT OVERLAY --- */}
          <div className="absolute inset-0 z-20 pointer-events-none flex flex-col justify-center items-center px-6 text-center">
            {/* මාතෘකාව */}
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center justify-center gap-2 text-3xl md:text-4xl font-black tracking-tighter text-white drop-shadow-2xl mb-2"
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

            {/* Tags / Categories */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="max-w-4xl flex flex-wrap justify-center gap-x-2 gap-y-1 px-3 mb-4"
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

            {/* READ MORE BUTTON (ටැග් වලට යටින්) */}
            <div className="pointer-events-auto mb-4">
              <button
                onClick={() => setShowInfo(true)}
                className="text-[9px] font-bold text-white border border-emerald-500/40 px-5 py-1.5 hover:bg-emerald-500 hover:text-black transition-all uppercase tracking-widest backdrop-blur-md bg-black/20"
              >
                READ MORE
              </button>
            </div>

            {/* Footprint Badge */}
            <motion.div
              animate={{
                scale: [1.6, 1, 1, 1.6],
                opacity: [0, 1, 1, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                times: [0, 0.2, 0.8, 1],
              }}
              className="relative w-12 h-12 md:w-14 md:h-14 flex items-center justify-center"
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
                <text className="fill-emerald-300/60 text-[10px] font-bold uppercase tracking-[0.3em]">
                  <textPath xlinkHref="#badgePath">
                    LEAVE ONLY • LEAVE ONLY •{" "}
                  </textPath>
                </text>
              </svg>
              <Footprints size={14} className="text-emerald-400 opacity-60" />
            </motion.div>
          </div>

          {/* --- IMAGE GRID (උස එජස් කරන ලදී) --- */}
          <div className="flex flex-wrap lg:flex-nowrap justify-center w-full relative z-10">
            {ecoImages.map((img, index) => (
              <motion.div
                key={img.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.03 }}
                className="relative h-32 md:h-44 w-1/2 sm:w-1/4 lg:w-[14.28%] overflow-hidden border-r border-white/5"
              >
                <Image
                  src={img.src}
                  alt={img.title}
                  fill
                  className="object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-black/30" />
                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-emerald-500/20" />
              </motion.div>
            ))}
          </div>

          {/* --- INFO OVERLAY --- */}
          <AnimatePresence>
            {showInfo && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 z-50 bg-white p-6 md:p-8 overflow-y-auto flex flex-col items-start text-left"
              >
                <button
                  onClick={() => setShowInfo(false)}
                  className="sticky top-0 self-end mb-2 text-black bg-gray-100 p-2 rounded-full hover:bg-black hover:text-white transition-colors"
                >
                  <X size={18} />
                </button>
                <div className="w-full">
                  <h3 className="text-black font-black text-xl md:text-2xl mb-3 tracking-tighter uppercase border-b-2 border-emerald-500 inline-block">
                    Eco Tourism
                  </h3>
                  <p className="text-gray-800 text-xs md:text-sm leading-relaxed mb-4 font-medium">
                    Eco-tourism in Sri Lanka focuses on sustainable travel,
                    offering intimate experiences with the island's high
                    biodiversity, including wildlife safaris, rainforest treks,
                    and eco-lodges. Key areas include Sinharaja Rainforest, Yala
                    National Park, and the Knuckles Mountain Range, emphasizing
                    conservation, local community benefits, and minimal
                    environmental impact
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default EcoTourism;
