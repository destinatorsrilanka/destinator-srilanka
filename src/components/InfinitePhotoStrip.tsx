"use client";
import React from "react";
import { motion } from "framer-motion";

const visualHighlights = [
  { src: "/image/sildenew.png", title: "Ancient Heritage" },
  { src: "/image/clucture.png", title: "Local Culture" },
  { src: "/image/k.png", title: "Wild Safari" },
  { src: "/image/slidenew1.png", title: "Golden Shores" },
  { src: "/image/about.png", title: "Lush Tea Estates" },
];

const fullList = [
  ...visualHighlights,
  ...visualHighlights,
  ...visualHighlights,
];

export default function CompactPhotoStrip() {
  return (
    <section className="py-10 bg-[#080808] overflow-hidden">
      {/* Header - More minimal for the strip look */}
      <div className="max-w-[1400px] mx-auto px-6 mb-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="w-10 h-[1px] bg-yellow-500"></span>
          <h2 className="text-white text-xs md:text-sm font-black uppercase tracking-[0.3em]">
            Visual Highlights
          </h2>
        </div>
        <p className="text-gray-500 text-[10px] uppercase tracking-widest hidden md:block">
          Discover paradise in every frame
        </p>
      </div>

      {/* The Strip Container */}
      <div className="relative">
        {/* Edge Blur Overlays */}
        <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-[#080808] to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-[#080808] to-transparent z-10" />

        <motion.div
          className="flex gap-4 py-2"
          animate={{
            x: ["0%", "-33.33%"],
          }}
          transition={{
            duration: 25,
            ease: "linear",
            repeat: Infinity,
          }}
          style={{ width: "max-content" }}
          whileHover={{ animationPlayState: "paused" }}
        >
          {fullList.map((item, index) => (
            <motion.div
              key={index}
              className="relative shrink-0 w-[200px] h-[120px] md:w-[300px] md:h-[180px] rounded-xl overflow-hidden border border-white/5 group/item"
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover grayscale-[0.2] group-hover/item:grayscale-0 transition-all duration-500 group-hover/item:scale-105"
              />

              {/* Simple Text Overlay on Hover */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                <p className="text-white text-[10px] md:text-xs font-bold uppercase tracking-widest text-center border-b border-yellow-500 pb-1">
                  {item.title}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Bottom accent line */}
      <div className="mt-8 opacity-20">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-yellow-500 to-transparent" />
      </div>
    </section>
  );
}
