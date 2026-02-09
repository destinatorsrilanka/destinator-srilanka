"use client";

import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";

export default function HighlandWaterLine() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showInfo, setShowInfo] = useState(false);

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
        <div className="relative border border-white/5 overflow-hidden p-2 md:p-4 bg-white/5 rounded-sm">
          {/* READ MORE BUTTON (දකුණු පැත්තේ උඩට ගෙන ආවා) */}
          <div className="absolute top-4 right-4 z-20">
            <button
              onClick={() => setShowInfo(true)}
              className="text-[10px] font-bold text-white border border-yellow-500/50 px-4 py-1.5 hover:bg-yellow-500 hover:text-black transition-all backdrop-blur-sm shadow-lg shadow-yellow-900/20"
            >
              READ MORE
            </button>
          </div>

          {/* Main Grid: Video Left, Text Right */}
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 relative z-10">
            {/* 1. Video Container */}
            <div className="relative w-full lg:w-[45%] h-[180px] md:h-[230px] overflow-hidden rounded-sm border border-white/10 shadow-2xl bg-black shrink-0">
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
            </div>

            {/* 2. Text Content */}
            <div className="w-full lg:w-[55%] text-center lg:text-left flex flex-col justify-center">
              <motion.h2
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="text-white text-xl md:text-2xl font-black tracking-tighter uppercase mb-4 leading-tight"
              >
                High Altitude Lake <br className="hidden md:block" />
                <span className="text-yellow-500">Mahaeliyathenna</span>{" "}
                <span className="text-sm block font-bold tracking-[0.2em] text-white/70 mt-1">
                  Horton Plains
                </span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-white/80 text-[10px] md:text-xs font-bold tracking-[0.15em] uppercase leading-relaxed max-w-xl lg:mx-0 mx-auto mb-6"
              >
                The Great Lake in the Central Highlands | Mountainous Geography
                & Lakes | Four (4) Rivers to Four directions to the Ocean.
              </motion.p>

              {/* Slider Container */}
              <div className="w-full overflow-hidden border border-white/10 bg-black/20 backdrop-blur-sm rounded-sm">
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
                      className="relative w-24 md:w-32 h-12 md:h-16 shrink-0 border-r border-white/5 overflow-hidden"
                    >
                      <Image
                        src={`/${src}`}
                        alt="Lake"
                        fill
                        className="object-cover opacity-90"
                      />
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>

          {/* --- INFO OVERLAY (Read More Panel) --- */}
          <AnimatePresence>
            {showInfo && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="absolute inset-0 z-50 bg-white p-6 md:p-8 overflow-y-auto flex flex-col items-start text-left"
              >
                <button
                  onClick={() => setShowInfo(false)}
                  className="sticky top-0 self-end mb-2 text-black bg-gray-100 p-2 rounded-full hover:bg-black hover:text-white transition-colors"
                >
                  <X size={18} />
                </button>

                <div className="w-full">
                  <h3 className="text-black font-black text-xl md:text-2xl mb-3 tracking-tighter uppercase border-b-2 border-yellow-500 inline-block">
                    High Altitude lake | Anotatta
                  </h3>

                  <p className="text-gray-800 text-xs md:text-sm leading-relaxed mb-6 font-medium">
                    Horton Plains (National Park), a 2,100–2,300m high-altitude
                    plateau (lake in dry mode) in Sri Lanka's central highlands,
                    acts as a crucial watershed, with its misty montane forests
                    and grasslands serving as the source of major rivers,
                    including the Mahaweli, Kelani, and Walawe, as well as
                    tributaries like Belihul Oya and Agra Oya & Uma Oya.
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
