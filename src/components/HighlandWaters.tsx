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
    "image/lake7.jpeg",
    "image/lake6.jpeg",
    "image/lake1.jpeg",
    "image/lake2.jpeg",
    "image/lake3.jpeg",
    "image/lake4.jpeg",
  ];

  return (
    <section className="py-12 bg-[#050505] overflow-hidden relative border-y border-white/5">
      {/* --- Gold Line Animation --- */}
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
        {/* Main Grid: Video Left, Text Right */}
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* 1. වීඩියෝ කන්ටේනරය (Left & Small Size) */}
          <div className="relative w-full lg:w-[45%] h-[250px] md:h-[350px] overflow-hidden rounded-sm border border-white/10 shadow-2xl bg-black">
            <div className="absolute inset-0 z-0">
              <video
                ref={videoRef}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover opacity-80"
              >
                <source src="/image/lake.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
            </div>

            {/* පින්තූර ස්ලයිඩරය (වීඩියෝ එක ඇතුළේ පහළින්ම - Size increased) */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden border-t border-white/10 bg-black/40 backdrop-blur-sm">
              <motion.div
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="flex flex-nowrap items-center"
              >
                {images.map((src, i) => (
                  <div
                    key={i}
                    /* මෙතන width සහ height වැඩි කර තිබේ */
                    className="relative w-28 md:w-44 h-16 md:h-24 shrink-0 border-r border-white/5 overflow-hidden"
                  >
                    <Image
                      src={`/${src}`}
                      alt="Highland Lake"
                      fill
                      className="object-cover opacity-90 transition-opacity duration-300"
                    />
                  </div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* 2. විස්තරය (Right Content) */}
          <div className="w-full lg:w-[55%] text-center lg:text-left">
            <motion.h2
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-white text-xl md:text-3xl font-black tracking-tighter uppercase mb-6 leading-tight drop-shadow-lg"
            >
              High Altitude Lake <br className="hidden md:block" />
              <span className="text-yellow-500">Mahaeliyathenna</span>{" "}
              <span className="text-sm block font-bold tracking-[0.2em] text-white/70 mt-2">
                Horton Plains
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-white/80 text-[10px] md:text-xs font-bold tracking-[0.15em] uppercase leading-relaxed max-w-xl lg:mx-0 mx-auto"
            >
              The Great Lake in the Central Highlands | Mountainous Geography &
              Lakes | Anotatta | Dambadiwa | Canda Desha | Four (4) Rivers to
              Four directions (North/Eastern/South/Western) to the Ocean.
            </motion.p>

            {/* 3. දර්ශක (Indicators) */}
            <div className="mt-10 pt-6 border-t border-white/5">
              <div className="flex items-center justify-between lg:justify-start lg:gap-12">
                <div className="flex flex-col items-center lg:items-start">
                  <span className="text-[7px] md:text-[8px] text-white/40 uppercase tracking-[0.3em] font-bold">
                    07 Lakes
                  </span>
                </div>

                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 rounded-full border border-emerald-500/30 flex items-center justify-center bg-[#050505]">
                    <div className="w-1 h-1 bg-emerald-500 rounded-full shadow-[0_0_5px_#10b981]" />
                  </div>
                  <span className="text-[7px] md:text-[8px] text-emerald-500/80 uppercase tracking-[0.2em] font-bold mt-1">
                    The Core
                  </span>
                </div>

                <div className="flex flex-col items-center lg:items-start">
                  <span className="text-[7px] md:text-[8px] text-white/40 uppercase tracking-[0.3em] font-bold">
                    04 Rivers
                  </span>
                </div>
              </div>

              <div className="mt-6">
                <p className="text-[8px] text-slate-700 uppercase tracking-[0.5em] font-light text-center lg:text-left">
                  Cool Source <span className="mx-2 text-white/5">•</span>{" "}
                  Millennial Life
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
