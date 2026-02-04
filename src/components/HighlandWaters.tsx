"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function HighlandWaterLine() {
  const [showPhotos, setShowPhotos] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const images = [
    "image/lake1.jpeg",
    "image/lake2.jpeg",
    "image/lake3.jpeg",
    "image/lake4.jpeg",
    "image/lake5.jpeg",
    "image/lake6.jpeg",
    "image/lake7.jpeg",
  ];

  return (
    <section className="py-12 bg-[#050505] overflow-hidden relative border-y border-white/5">
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .custom-scrollbar::-webkit-scrollbar { width: 3px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(234, 179, 8, 0.2); border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: rgba(234, 179, 8, 0.5); }
      `,
        }}
      />

      <div className="w-full flex flex-col items-center justify-center mb-16 relative">
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
        {/* මෙහි උස h-64 (mobile) සහ md:h-96 (desktop) ලෙස වැඩි කරන ලදී */}
        <div className="relative w-full h-64 md:h-96 mb-10 overflow-hidden group rounded-sm border border-white/5">
          <AnimatePresence mode="wait">
            {!showPhotos ? (
              <motion.div
                key="video"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false, amount: 0.5 }}
                onViewportEnter={async () => {
                  if (videoRef.current) {
                    try {
                      videoRef.current.currentTime = 0;
                      await videoRef.current.play();
                    } catch (err) {
                      console.warn("Video play interrupted safely:", err);
                    }
                  }
                }}
                exit={{ x: -100, opacity: 0 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <video
                  ref={videoRef}
                  autoPlay
                  muted
                  playsInline
                  onCanPlay={(e) => (e.currentTarget.playbackRate = 2)}
                  onEnded={() => setShowPhotos(true)}
                  className="w-full h-full object-cover"
                >
                  <source src="/image/lake.mp4" type="video/mp4" />
                </video>
                <div
                  onClick={() => setShowPhotos(true)}
                  className="absolute inset-0 bg-black/20 flex items-center justify-center cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <span className="text-[9px] text-white tracking-[0.5em] uppercase font-medium bg-black/40 px-4 py-2 backdrop-blur-sm rounded-full">
                    Explore Gallery
                  </span>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="gallery"
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                onViewportLeave={() => setShowPhotos(false)}
                className="absolute inset-0 flex p-1"
              >
                <div className="grid grid-cols-2 md:flex md:flex-row w-full h-full gap-1 md:gap-2 overflow-y-auto md:overflow-hidden custom-scrollbar">
                  {images.map((src, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="h-24 md:h-full md:flex-1 relative overflow-hidden rounded-sm filter brightness-75 hover:brightness-110 border border-white/5"
                    >
                      <Image
                        src={`/${src}`}
                        alt="Lake"
                        fill
                        sizes="(max-width: 768px) 50vw, 15vw"
                        className="object-cover"
                      />
                    </motion.div>
                  ))}
                </div>
                <button
                  onClick={() => setShowPhotos(false)}
                  className="absolute right-2 top-2 bg-black/80 w-6 h-6 flex items-center justify-center rounded-full text-[10px] text-white/70 border border-white/20 z-30"
                >
                  ✕
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="relative flex flex-col items-center">
          <div className="relative w-full max-w-5xl flex items-center justify-between">
            <div className="absolute inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            <motion.div
              animate={{ left: ["0%", "100%"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="absolute w-12 h-[1px] bg-emerald-400 shadow-[0_0_10px_#10b981] z-10"
            />
            <div className="relative z-20 flex flex-col items-center bg-[#050505] px-4">
              <div className="flex gap-0.5 mb-2">
                {[...Array(7)].map((_, i) => (
                  <div
                    key={i}
                    className="w-1 h-1 rounded-full bg-emerald-500/40"
                  />
                ))}
              </div>
              <span className="text-[8px] text-white/40 uppercase tracking-[0.3em] font-bold">
                07 Lakes
              </span>
            </div>
            <div className="relative z-20 flex flex-col items-center bg-[#050505] px-4">
              <div className="w-6 h-6 rounded-full border border-emerald-500/30 flex items-center justify-center">
                <div className="w-1 h-1 bg-emerald-500 rounded-full shadow-[0_0_5px_#10b981]" />
              </div>
              <span className="text-[8px] text-emerald-500 uppercase tracking-[0.3em] font-bold mt-1">
                The Core
              </span>
            </div>
            <div className="relative z-20 flex flex-col items-center bg-[#050505] px-4">
              <div className="relative w-4 h-4 mb-1">
                <div className="absolute inset-x-0 top-1/2 h-[1px] bg-blue-500/50" />
                <div className="absolute inset-y-0 left-1/2 w-[1px] bg-blue-500/50" />
              </div>
              <span className="text-[8px] text-white/40 uppercase tracking-[0.3em] font-bold">
                04 Rivers
              </span>
            </div>
          </div>
          <p className="mt-6 text-[9px] text-slate-600 uppercase tracking-[0.5em] font-light">
            Cool Source <span className="mx-2 text-white/10">•</span> Millennial
            Life
          </p>
          <div className="mt-8 max-w-2xl text-center">
            <p className="text-[11px] md:text-[12px] text-slate-400 leading-relaxed font-light tracking-[0.1em] uppercase">
              Originating from high-altitude springs, this ancient water network
              nourishes seven pristine lakes and four major rivers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
