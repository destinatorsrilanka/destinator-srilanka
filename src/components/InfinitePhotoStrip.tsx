"use client";
import React from "react";
import { motion } from "framer-motion";

const travelKeys = [
  { src: "/image/h1.jpeg" },
  { src: "/image/h2.jpeg" },
  { src: "/image/h3.jpeg" },

  { src: "/image/h6.jpeg" },

  { src: "/image/h8.jpeg" },
  { src: "/image/h9.jpeg" },
  { src: "/image/h10.jpeg" },
  { src: "/image/h11.jpeg" },
  { src: "/image/h12.jpeg" },
  { src: "/image/h13.jpeg" },
  { src: "/image/h14.jpeg" },

  { src: "/image/Snorkeling.jpg" },
  { src: "/image/herbal.jpg" },
  { src: "/image/abseiling.jpg" },
  { src: "/image/water_sport.jpg" },
  { src: "/image/Glamping.jpg" },
  { src: "/image/Cooking.jpg" },
  { src: "/image/mirissa.jpg" },
  { src: "/image/Surfing1.jpg" },
  { src: "/image/Dolphing.jpg" },
  { src: "/image/Snorkeling.jpg" },
];

export default function TravelKeysStrip() {
  return (
    <section className="py-12 bg-[#050505] overflow-hidden">
      <div className="relative">
        <div className="max-w-[1400px] mx-auto px-6 mb-5">
          <div className="flex flex-col border-l-4 border-yellow-500 pl-4 py-1">
            <h2 className="text-yellow-500 text-xl md:text-2xl font-black uppercase tracking-[0.25em] drop-shadow-[0_0_10px_rgba(234,179,8,0.5)] leading-none">
              Things to do | Bucket list visuals
            </h2>
            <div className="flex items-center gap-2 mt-1.5">
              <span className="h-[1px] w-4 bg-white/30"></span>
              <p className="text-white text-[9px] md:text-[11px] uppercase tracking-[0.4em] font-black opacity-90">
                You Decide <span className="text-yellow-500">—</span> We Arrange
              </p>
            </div>
          </div>
        </div>

        <div className="relative group">
          <div className="absolute inset-y-0 left-0 w-24 md:w-40 bg-gradient-to-r from-[#050505] via-[#050505]/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-24 md:w-40 bg-gradient-to-l from-[#050505] via-[#050505]/80 to-transparent z-10 pointer-events-none" />

          <motion.div
            className="flex"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 40, ease: "linear", repeat: Infinity }}
            style={{ width: "max-content" }}
          >
            {[...travelKeys, ...travelKeys].map((item, index) => (
              <div
                key={index}
                className="h-[110px] md:h-[140px] shrink-0 overflow-hidden"
              >
                <img
                  src={item.src}
                  alt="Travel"
                  className="h-full w-auto object-cover transition-transform duration-700 hover:scale-110"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
