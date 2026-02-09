"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sprout, X } from "lucide-react";
import Image from "next/image";

const AgroTourism: React.FC = () => {
  const [showInfo, setShowInfo] = useState(false);
  const infoRef = useRef<HTMLDivElement>(null); // පැනලය හඳුනා ගැනීමට ref එකක්

  const agroImages = [
    { id: 2, src: "/image/k2.jpeg", title: "Paddy Fields" },
    { id: 5, src: "/image/k6.jpeg", title: "Coconut" },
    { id: 3, src: "/image/k4.jpeg", title: "Cinnamon" },
    { id: 4, src: "/image/k5.jpeg", title: "Spice Garden" },
    { id: 1, src: "/image/k1.jpeg", title: "Tea Estates" },

    { id: 6, src: "/image/k7.jpeg", title: "Organic" },
    { id: 7, src: "/image/k8.jpeg", title: "Orchards" },
    { id: 8, src: "/image/k9.WEBP", title: "Vegetable" },
  ];

  // පිටත ක්ලික් කිරීම් හඳුනාගැනීම සඳහා useEffect
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
      // Button එක ක්ලික් කළ සැනින් වැසීම වැළැක්වීමට සුළු ප්‍රමාවකින් listener එක add කරයි
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
    <section className="w-full bg-[#0a0a0a] py-12 overflow-hidden relative">
      <div className="max-w-[1600px] mx-auto px-6 relative">
        {/* Box Container */}
        <div className="relative border border-white/5 overflow-hidden">
          {/* --- HEADER OVERLAY --- */}
          <div className="absolute inset-0 z-20 pointer-events-none flex flex-col justify-center items-center px-6 md:px-12 text-center bg-[radial-gradient(circle,rgba(0,0,0,0.5)_0%,transparent_70%)]">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 text-emerald-400 font-bold uppercase tracking-[0.4em] text-[10px] md:text-[12px] mb-2 drop-shadow-[0_2px_4px_rgba(0,0,0,1)]"
            >
              <Sprout size={14} />
              Cultivating Journeys
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex items-center justify-center gap-3 text-3xl md:text-6xl font-black tracking-tighter text-white drop-shadow-[0_4px_12px_rgba(0,0,0,1)]"
            >
              <span
                style={{
                  WebkitTextStroke: "1px rgba(255,255,255,0.9)",
                  letterSpacing: "0.05em",
                  lineHeight: "1",
                }}
                className="text-transparent inline-block"
              >
                AGRO
              </span>

              <span
                className="relative inline-block text-emerald-500 overflow-hidden"
                style={{
                  background:
                    "linear-gradient(120deg, rgba(16,185,129,1) 40%, rgba(255,255,255,0.8) 50%, rgba(16,185,129,1) 60%)",
                  backgroundSize: "200% 100%",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  lineHeight: "1",
                  display: "inline-block",
                }}
              >
                <motion.span
                  animate={{
                    backgroundPosition: ["200% 0%", "-200% 0%"],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 3,
                    ease: "linear",
                  }}
                  style={{
                    background: "inherit",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    display: "inline-block",
                  }}
                >
                  TOURISM
                </motion.span>
              </span>
            </motion.h2>

            <button
              onClick={(e) => {
                e.stopPropagation(); // Button එක ක්ලික් කිරීම පිටත ක්ලික් කිරීමක් ලෙස සලකන්නේ නැත
                setShowInfo(true);
              }}
              className="mt-6 pointer-events-auto text-[10px] font-bold text-white border border-emerald-500/50 px-4 py-1.5 hover:bg-emerald-500 hover:text-black transition-all backdrop-blur-sm shadow-lg shadow-emerald-900/20"
            >
              READ MORE
            </button>
          </div>

          {/* --- IMAGE GRID --- */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-0 relative z-10">
            {agroImages.map((img, index) => (
              <motion.div
                key={img.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="relative h-32 md:h-48 overflow-hidden border-r border-white/5"
              >
                <Image
                  src={img.src}
                  alt={img.title}
                  fill
                  className="object-cover opacity-70"
                />
                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-emerald-500/30" />
              </motion.div>
            ))}
          </div>

          {/* --- READ MORE INFO --- */}
          <AnimatePresence>
            {showInfo && (
              <motion.div
                ref={infoRef} // මෙතැනට ref එක සම්බන්ධ කළා
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
                    Agro Tourism
                  </h3>

                  <p className="text-gray-800 text-xs md:text-sm leading-relaxed mb-4 font-medium">
                    Agro-tourism in Sri Lanka offers immersive farm stays and
                    experiences, letting visitors engage with traditional
                    practices like tea plucking, spice harvesting, and organic
                    farming, especially in areas like Nuwara Eliya, Kandy, and
                    Sigiriya, blending agricultural education with cultural
                    insights into the island's rich farming heritage. Key
                    attractions include exploring spice gardens, tea estates,
                    paddy fields, and supporting sustainable local practices,
                    with many resorts offering direct involvement in farm
                    activities like milking cows or harvesting crops.
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

export default AgroTourism;
