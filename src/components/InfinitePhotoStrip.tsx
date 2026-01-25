"use client";
import React from "react";
import { motion } from "framer-motion";

const visualHighlights = [
  { src: "/image/slide1.jpeg", title: "Budupatuna" },
  { src: "/image/slide2.jpeg", title: "Gal Vihara" },
  { src: "/image/slide3.png", title: "Sapria Himalayana" },
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
        <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-[#080808] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-[#080808] to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex gap-6 py-4"
          animate={{
            x: ["0%", "-33.33%"],
          }}
          transition={{
            duration: 40,
            ease: "linear",
            repeat: Infinity,
          }}
          style={{ width: "max-content" }}
          whileHover={{ animationPlayState: "paused" }}
        >
          {fullList.map((item, index) => (
            <motion.div
              key={index}
              // මෙහිදී w-[auto] සහ h-[150px/220px] ලෙස වෙනස් කිරීමෙන් පින්තූරයේ හැඩය අනුව රාමුව සැකසේ
              className="relative shrink-0 h-[150px] md:h-[220px] rounded-xl overflow-hidden border border-white/10 group/item bg-white/5"
            >
              <img
                src={item.src}
                alt={item.title}
                // 'object-contain' මඟින් පින්තූරය කැපීම වළක්වයි
                className="h-full w-auto object-contain group-hover/item:scale-105 transition-transform duration-700"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/80 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
                <p className="text-white text-[9px] md:text-xs font-bold uppercase tracking-[0.2em] text-center border-b border-yellow-500 pb-1 mb-2">
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
