"use client";
import React from "react";
import { motion } from "framer-motion";

const visualHighlights = [
  { src: "/image/slide1.jpeg", title: "Budupatuna" },
  { src: "/image/slide2.jpeg", title: "Gal Vihara" },
  { src: "/image/slide3.PNG", title: "Sapria Himalayana" },
  { src: "/image/slide4.jpeg", title: "Secret Beach" },
  { src: "/image/slide5.jpeg", title: "Flora of LK" },
  { src: "/image/slide6.jpeg", title: "Rumassala Hill" },
  { src: "/image/slide7.jpeg", title: "Avukana Buddha Statue" },
  { src: "/image/slide8.jpeg", title: "Secret Beach" },
  { src: "/image/slide9.jpeg", title: "Medirigiriya Vatadage" },
  { src: "/image/silde10.jpeg", title: "Secret Lake" },
  { src: "/image/slide11.jpeg", title: "Statue of King" },
];

const fullList = [
  ...visualHighlights,
  ...visualHighlights,
  ...visualHighlights,
];

export default function CompactPhotoStrip() {
  return (
    <section className="py-10 bg-[#080808] overflow-hidden">
      {/* Header */}
      <div className="max-w-[1400px] mx-auto px-6 mb-8 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="w-10 h-[1.5px] bg-yellow-500 shadow-[0_0_8px_#eab308]"></span>
          <h2 className="text-white text-xs md:text-sm font-black uppercase tracking-[0.4em]">
            Visual Highlights
          </h2>
        </div>
      </div>

      {/* The Strip Container */}
      <div className="relative">
        {/* Side Fades for smooth entry/exit */}
        <div className="absolute inset-y-0 left-0 w-20 md:w-40 bg-gradient-to-r from-[#080808] via-[#080808]/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-20 md:w-40 bg-gradient-to-l from-[#080808] via-[#080808]/80 to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex gap-5 py-4"
          animate={{ x: ["0%", "-33.33%"] }}
          transition={{ duration: 45, ease: "linear", repeat: Infinity }}
          style={{ width: "max-content" }}
        >
          {fullList.map((item, index) => (
            <div
              key={index}
              className="relative shrink-0 h-[180px] md:h-[260px] rounded-[1.5rem] overflow-hidden border border-white/10 bg-[#111]"
            >
              {/* Image */}
              <img
                src={item.src}
                alt={item.title}
                className="h-full w-auto object-contain transition-transform duration-1000 group-hover:scale-110"
              />

              {/* පින්තූරය යටින් තියෙන සියුම් අඳුරු සෙවනැල්ල (Tag එක කැපී පෙනෙන්න) */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Premium Tag Design */}
              <div className="absolute bottom-4 left-4 right-4 flex justify-start">
                <div className="flex items-center gap-2.5 bg-white/5 backdrop-blur-xl border border-white/20 px-3.5 py-2 rounded-2xl shadow-2xl">
                  {/* Glowing Dot */}
                  <div className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-500 shadow-[0_0_10px_#eab308]"></span>
                  </div>

                  {/* Text */}
                  <span className="text-white text-[10px] md:text-[11px] font-bold uppercase tracking-[0.15em] whitespace-nowrap">
                    {item.title}
                  </span>
                </div>
              </div>

              {/* Corner Accent: සියුම් රන්වන් ඉරක් ටැග් එකට උඩින් */}
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-yellow-500/40 via-transparent to-transparent" />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom accent line */}
      <div className="mt-10 opacity-30">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-yellow-500 to-transparent shadow-[0_0_15px_rgba(234,179,8,0.5)]" />
      </div>
    </section>
  );
}
