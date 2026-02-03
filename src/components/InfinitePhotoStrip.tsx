"use client";
import React from "react";
import { motion } from "framer-motion";

const travelKeys = [
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

const greatCivilization = [
  { src: "/image/medication.jpg" },
  { src: "/image/Sunrice.jpg" },
  { src: "/image/Handicrafts.jpg" },
  { src: "/image/leapord.jpg" },
  { src: "/image/waterfalls.jpg" },
  { src: "/image/tea_states.jpg" },
  { src: "/image/Cinnamon.jpg" },
  { src: "/image/gems.jpg" },
  { src: "/image/elephants.jpg" },
];

export default function DualPhotoStrips() {
  return (
    <section className="py-12 bg-[#050505] overflow-hidden flex flex-col gap-12">
      {/* STRIP 1: TRAVEL KEYS (Right to Left) */}
      <div className="relative">
        <div className="max-w-[1400px] mx-auto px-6 mb-5">
          <div className="flex flex-col border-l-4 border-yellow-500 pl-4 py-1">
            <h2 className="text-yellow-500 text-xl md:text-2xl font-black uppercase tracking-[0.25em] drop-shadow-[0_0_10px_rgba(234,179,8,0.5)] leading-none">
              Travel Keys
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

      {/* STRIP 2: GREAT CIVILIZATION (Left to Right) */}
      <div className="relative">
        <div className="max-w-[1400px] mx-auto px-6 mb-5 text-right flex justify-end">
          <div className="flex flex-col border-r-4 border-white pr-4 py-1 items-end">
            <h2 className="text-white text-xl md:text-2xl font-black uppercase tracking-[0.25em] drop-shadow-[0_0_10px_rgba(255,255,255,0.3)] leading-none">
              Great Civilization
            </h2>
            <div className="flex items-center gap-2 mt-1.5 justify-end">
              <p className="text-yellow-500 text-[10px] md:text-[12px] uppercase tracking-[0.5em] font-black">
                MAHAWANSHA
              </p>
              <span className="h-[1px] w-4 bg-yellow-500/50"></span>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-y-0 left-0 w-24 md:w-40 bg-gradient-to-r from-[#050505] via-[#050505]/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-24 md:w-40 bg-gradient-to-l from-[#050505] via-[#050505]/80 to-transparent z-10 pointer-events-none" />

          <motion.div
            className="flex"
            animate={{ x: ["-50%", "0%"] }}
            transition={{ duration: 45, ease: "linear", repeat: Infinity }}
            style={{ width: "max-content" }}
          >
            {[...greatCivilization, ...greatCivilization].map((item, index) => (
              <div
                key={index}
                className="h-[110px] md:h-[140px] shrink-0 overflow-hidden"
              >
                <img
                  src={item.src}
                  alt="History"
                  className="h-full w-auto object-cover transition-transform duration-700 hover:scale-110"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom Accent */}
      <div className="max-w-[1100px] mx-auto w-full px-6 opacity-20 mt-4">
        <div className="h-[1px] bg-gradient-to-r from-transparent via-yellow-500 to-transparent" />
      </div>
    </section>
  );
}
