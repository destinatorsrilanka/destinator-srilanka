"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image"; // Next.js Image component එක import කිරීම

const greatCivilization = [
  { src: "/image/m1.jpeg" },
  { src: "/image/m2.jpeg" },
  { src: "/image/m3.jpeg" },

  { src: "/image/m5.jpeg" },
  { src: "/image/m6.jpeg" },
  { src: "/image/m7.jpeg" },
  { src: "/image/m8.jpeg" },
  { src: "/image/m9.jpeg" },
  { src: "/image/m10.jpeg" },
  { src: "/image/m11.jpeg" },
  { src: "/image/m12.jpeg" },
  { src: "/image/m13.jpeg" },
  { src: "/image/m14.jpeg" },
  { src: "/image/m15.jpeg" },
  { src: "/image/m16.jpeg" },
  { src: "/image/m17.jpeg" },
  { src: "/image/m18.jpeg" },
  { src: "/image/m19.jpeg" },
  { src: "/image/m20.jpeg" },
  { src: "/image/m21.jpeg" },
  { src: "/image/m22.jpeg" },
  { src: "/image/m23.jpeg" },
  { src: "/image/m24.jpeg" },

  { src: "/image/m26.jpeg" },
  { src: "/image/m27.jpeg" },
  { src: "/image/m28.jpeg" },
  { src: "/image/m29.jpeg" },
  { src: "/image/m30.jpeg" },
  { src: "/image/m31.jpeg" },
  { src: "/image/m32.jpeg" },
  { src: "/image/m33.jpeg" },
  { src: "/image/m34.jpeg" },
  { src: "/image/m35.jpeg" },
  { src: "/image/m36.jpeg" },
  { src: "/image/m37.jpeg" },
  { src: "/image/m38.jpeg" },
  { src: "/image/m39.jpeg" },
  { src: "/image/m40.jpeg" },
  { src: "/image/m41.jpeg" },
  { src: "/image/m42.jpeg" },
  { src: "/image/m43.jpeg" },
  { src: "/image/m44.jpeg" },
  { src: "/image/m45.jpeg" },
  { src: "/image/m46.jpeg" },
  { src: "/image/m47.jpeg" },
  { src: "/image/m48.jpeg" },
  { src: "/image/m49.jpeg" },
  { src: "/image/m50.jpeg" },
  { src: "/image/m51.jpeg" },
  { src: "/image/m52.jpeg" },
  { src: "/image/m53.jpeg" },
  { src: "/image/m54.jpeg" },
  { src: "/image/m55.jpeg" },
  { src: "/image/m56.jpeg" },
  { src: "/image/m57.jpeg" },
  { src: "/image/m58.jpeg" },
  { src: "/image/m59.jpeg" },
  { src: "/image/m60.jpeg" },
  { src: "/image/m61.jpeg" },
  { src: "/image/m62.jpeg" },
  { src: "/image/m63.jpeg" },
  { src: "/image/m64.jpeg" },
  { src: "/image/m65.jpeg" },
];

export default function GreatCivilizationStrip() {
  return (
    <section className="py-6 bg-[#050505] overflow-hidden">
      <div className="relative">
        <div className="max-w-[1400px] mx-auto px-6 mb-5 text-right flex justify-end">
          <div className="flex flex-col border-r-4 border-white pr-4 py-1 items-end">
            <h2 className="text-white text-xl md:text-2xl font-black uppercase tracking-[0.25em] drop-shadow-[0_0_10px_rgba(255,255,255,0.3)] leading-none">
              Great Civilization
            </h2>
            <div className="flex items-center gap-2 mt-1.5 justify-end">
              <p className="text-yellow-500 text-[10px] md:text-[12px] uppercase tracking-[0.5em] font-black">
                Highlights/Ruines/Archeologial tourism
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
            transition={{ duration: 90, ease: "linear", repeat: Infinity }}
            style={{ width: "max-content" }}
          >
            {[...greatCivilization, ...greatCivilization].map((item, index) => (
              <div
                key={index}
                className="h-[110px] md:h-[140px] w-auto shrink-0 overflow-hidden relative"
              >
                <Image
                  src={item.src}
                  alt="History"
                  fill
                  className="!relative !h-full !w-auto object-cover transition-transform duration-700 hover:scale-110"
                  sizes="(max-width: 768px) 150px, 200px"
                  priority={index < 10} // මුල් පින්තූර කිහිපය ඉක්මනින් load වීමට
                />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Bottom Accent Line */}
        <div className="max-w-[1100px] mx-auto w-full px-6 opacity-20 mt-12">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-yellow-500 to-transparent" />
        </div>
      </div>
    </section>
  );
}
