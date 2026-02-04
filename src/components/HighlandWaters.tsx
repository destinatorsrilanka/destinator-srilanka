"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function HighlandWaterLine() {
  const videoRef = useRef<HTMLVideoElement>(null);

  const images = [
    "image/lake7.jpeg",
    "image/lake1.jpeg",

    "image/lake3.jpeg",

    "image/lake5.jpeg",

    "image/lake2.jpeg",
    "image/lake4.jpeg",
    "image/lake1.jpeg",
    "image/lake2.jpeg",
    "image/lake6.jpeg",

    "image/lake3.jpeg",
    "image/lake7.jpeg",
    "image/lake4.jpeg",
  ];

  return (
    <section className="py-12 bg-[#050505] overflow-hidden relative border-y border-white/5">
      {/* --- ඉහළින් තිබූ රන්වන් පැහැති රේඛාව (Gold Line Animation) --- */}
      <div className="w-full flex flex-col items-center justify-center mb-12 relative">
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          whileInView={{ width: "85%", opacity: 1 }}
          transition={{ duration: 1.8, ease: "circOut" }}
          className="h-[1.5px] bg-gradient-to-r from-transparent via-yellow-500 to-transparent shadow-[0_0_25px_rgba(234,179,8,0.8)] relative z-0"
        />
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="absolute w-2 h-2 bg-yellow-400 rounded-full shadow-[0_0_15px_#eab308,0_0_30px_#eab308]"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* වීඩියෝ කන්ටේනරය */}
        <div className="relative w-full h-[400px] md:h-[450px] overflow-hidden rounded-sm border border-white/10 shadow-2xl bg-black">
          {/* 1. Background Video */}
          <div className="absolute inset-0 z-0">
            <video
              ref={videoRef}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover opacity-60"
            >
              <source src="/image/lake.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/90" />
          </div>

          {/* 2. Content Overlay */}
          <div className="relative z-10 h-full flex flex-col items-center pt-16 md:pt-20 px-4">
            {/* විස්තරය (Text) */}
            <div className="text-center mb-6">
              <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-white text-sm md:text-xl font-bold tracking-[0.25em] uppercase mb-4 drop-shadow-lg"
              >
                Seven Natural high altitude lakes in the{" "}
                <br className="hidden md:block" /> Central Highlands of the
                Island
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-yellow-400 text-[9px] md:text-xs font-bold tracking-[0.2em] uppercase max-w-2xl drop-shadow-md mx-auto"
              >
                1 (one) Great Lake (Cool water/No hot) and starts 04 great
                Rivers from it <br className="hidden md:block" />
                and flows in 04 directions to the ocean.
              </motion.p>
            </div>

            {/* පින්තූර ස්ලයිඩරය - වර්ණ සහිතයි (No Grayscale) */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden border-t border-white/10 bg-black/40 backdrop-blur-sm">
              <motion.div
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="flex flex-nowrap"
              >
                {images.map((src, i) => (
                  <div
                    key={i}
                    className="relative w-28 md:w-40 h-16 md:h-24 shrink-0 border-r border-white/5"
                  >
                    <Image
                      src={`/${src}`}
                      alt="Highland Lake"
                      fill
                      className="object-cover opacity-90 hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>

        {/* 3. දර්ශක (Indicators) */}
        <div className="w-full max-w-4xl mx-auto mt-10">
          <div className="relative flex items-center justify-between px-4">
            <div className="absolute inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            <div className="relative z-20 flex flex-col items-center">
              <span className="text-[7px] md:text-[8px] text-white/40 uppercase tracking-[0.3em] font-bold">
                07 Lakes
              </span>
            </div>

            <div className="relative z-20 flex flex-col items-center">
              <div className="w-4 h-4 rounded-full border border-emerald-500/30 flex items-center justify-center bg-[#050505]">
                <div className="w-1 h-1 bg-emerald-500 rounded-full shadow-[0_0_5px_#10b981]" />
              </div>
              <span className="text-[7px] md:text-[8px] text-emerald-500/80 uppercase tracking-[0.2em] font-bold mt-1">
                The Core
              </span>
            </div>

            <div className="relative z-20 flex flex-col items-center">
              <span className="text-[7px] md:text-[8px] text-white/40 uppercase tracking-[0.3em] font-bold">
                04 Rivers
              </span>
            </div>
          </div>

          <div className="text-center mt-6">
            <p className="text-[8px] text-slate-700 uppercase tracking-[0.5em] font-light">
              Cool Source <span className="mx-2 text-white/5">•</span>{" "}
              Millennial Life
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
