"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";

const EcoTourism: React.FC = () => {
  const [showInfo, setShowInfo] = useState(false);
  const infoRef = useRef<HTMLDivElement>(null);

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

  const categoriesLine1 = [
    "Strict Nature Reserve",
    "Conservation Forests",
    "Rainforests",
    "Plains",
  ];

  const categoriesLine2 = [
    "Botanical Gardens",
    "Sanctuaries",
    "National Parks",
  ];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        showInfo &&
        infoRef.current &&
        !infoRef.current.contains(event.target as Node)
      ) {
        setShowInfo(false);
      }
    }

    if (showInfo) {
      setTimeout(() => {
        document.addEventListener("mousedown", handleClickOutside);
      }, 0);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showInfo]);

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
              className="flex items-center justify-center gap-2 text-3xl md:text-5xl font-black tracking-tighter text-white drop-shadow-2xl mb-4"
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

            {/* Tags / Categories in Two Lines */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="flex flex-col items-center gap-2 mb-6"
            >
              <div className="flex flex-wrap justify-center gap-x-3 gap-y-1">
                {categoriesLine1.map((cat, i) => (
                  <span
                    key={i}
                    className="text-[10px] md:text-[11px] text-emerald-50/90 font-bold tracking-[0.15em] uppercase flex items-center drop-shadow-lg"
                  >
                    {cat}
                    {i !== categoriesLine1.length - 1 && (
                      <span className="ml-3 text-emerald-400/40">•</span>
                    )}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap justify-center gap-x-3 gap-y-1">
                {categoriesLine2.map((cat, i) => (
                  <span
                    key={i}
                    className="text-[10px] md:text-[11px] text-emerald-50/90 font-bold tracking-[0.15em] uppercase flex items-center drop-shadow-lg"
                  >
                    {cat}
                    {i !== categoriesLine2.length - 1 && (
                      <span className="ml-3 text-emerald-400/40">•</span>
                    )}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* READ MORE BUTTON */}
            <div className="pointer-events-auto">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setShowInfo(true);
                }}
                className="text-[10px] font-black text-white border-2 border-emerald-500/40 px-8 py-2 hover:bg-emerald-500 hover:border-emerald-500 hover:text-black transition-all uppercase tracking-[0.2em] backdrop-blur-md bg-black/40 shadow-xl"
              >
                READ MORE
              </button>
            </div>
          </div>

          {/* --- IMAGE GRID (MODIFIED FOR BETTER VISIBILITY) --- */}
          <div className="flex flex-wrap lg:flex-nowrap justify-center w-full relative z-10">
            {ecoImages.map((img, index) => (
              <motion.div
                key={img.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.03 }}
                className="relative h-40 md:h-56 w-1/2 sm:w-1/4 lg:w-[14.28%] overflow-hidden border-r border-white/5"
              >
                <Image
                  src={img.src}
                  alt={img.title}
                  fill
                  className="object-cover opacity-90 transition-opacity duration-500" // Opacity වැඩි කළා (50 සිට 90 දක්වා)
                />
                {/* අකුරු පෙනීම සඳහා තිබූ අඳුරු Overlay එක අඩු කළා */}
                <div className="absolute inset-0 bg-black/20" />
              </motion.div>
            ))}
          </div>

          {/* --- INFO OVERLAY (LEFT ALIGNED & SMALL TEXT) --- */}
          <AnimatePresence>
            {showInfo && (
              <motion.div
                ref={infoRef}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="absolute inset-0 z-50 bg-white/95 backdrop-blur-md p-6 md:p-12 overflow-y-auto flex flex-col items-start justify-center text-left"
              >
                <button
                  onClick={() => setShowInfo(false)}
                  className="absolute top-6 right-6 text-black bg-gray-100 p-2 rounded-full hover:bg-black hover:text-white transition-colors"
                >
                  <X size={20} />
                </button>

                <div className="w-full max-w-[1400px]">
                  <h3 className="text-black font-black text-xl md:text-2xl mb-4 tracking-tighter uppercase border-b-2 border-emerald-500 inline-block">
                    Eco Tourism
                  </h3>
                  <p className="text-gray-800 text-xs md:text-sm lg:text-base leading-relaxed font-medium">
                    Eco-tourism in Sri Lanka focuses on sustainable travel,
                    offering intimate experiences with the island's high
                    biodiversity, including wildlife safaris, rainforest treks,
                    and eco-lodges. Key areas include Sinharaja Rainforest, Yala
                    National Park, and the Knuckles Mountain Range, emphasizing
                    conservation, local community benefits, and minimal
                    environmental impact.
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
