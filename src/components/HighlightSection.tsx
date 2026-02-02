"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Droplets, Trees, MousePointer2 } from "lucide-react"; // අලුත් Icon එකක්

const WATERFALL_IMAGES = [
  "image/w1.jpg",
  "image/w2.jpg",
  "image/w3.jpg",
  "image/w4.jpg",
  "image/w5.jpg",
];
const ELEPHANT_IMAGES = [
  "image/e1.webp",
  "image/e2.jpg",
  "image/e3.jpg",
  "image/e4.jpg",
  "image/e5.jpg",
];

export default function CompactHighlight() {
  const [wIndex, setWIndex] = useState(0);
  const [eIndex, setEIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setWIndex((prev) => (prev + 1) % WATERFALL_IMAGES.length);
      setEIndex((prev) => (prev + 1) % ELEPHANT_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full h-auto md:h-[35vh] min-h-[450px] md:min-h-[320px] flex flex-col md:flex-row bg-[#020202] overflow-hidden translate-z-0">
      {/* --- Section: Land of Waterfalls --- */}
      <motion.div
        initial={false}
        animate={{ width: "100%" }}
        whileHover={{ width: "135%" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative flex-1 group overflow-hidden border-b md:border-b-0 md:border-r border-white/10 cursor-pointer"
      >
        <AnimatePresence mode="wait">
          <motion.img
            key={WATERFALL_IMAGES[wIndex]}
            src={WATERFALL_IMAGES[wIndex]}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 w-full h-full object-cover group-hover:opacity-100 group-hover:scale-110 transition-all duration-[5s] ease-out"
            alt="Waterfalls"
          />
        </AnimatePresence>

        <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#020202] via-[#020202]/50 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-700" />

        <div className="relative z-20 h-full flex flex-col items-center justify-center p-6 text-center">
          {/* Hover කරන්නැයි කියන ඉඟිය (Hint) */}
          <motion.div
            animate={{ y: [0, -5, 0], opacity: [0.3, 0.6, 0.3] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute top-8 group-hover:hidden transition-opacity"
          >
            <MousePointer2 size={16} className="text-white/40" />
          </motion.div>

          {/* Icon Animation - හුස්ම ගන්නා බඳු ස්වභාවයක් */}
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            className="mb-4 p-4 rounded-full bg-blue-500/10 backdrop-blur-md border border-blue-400/20 group-hover:bg-blue-500/40 group-hover:scale-110 group-hover:border-blue-400/50 transition-all duration-500"
          >
            <Droplets size={26} className="text-blue-300 shadow-blue-500" />
          </motion.div>

          <h2 className="text-3xl md:text-4xl font-black tracking-tighter uppercase text-white leading-none mb-3 pointer-events-none group-hover:tracking-normal transition-all duration-700">
            LAND OF <br /> <span className="text-blue-400">WATERFALLS</span>
          </h2>

          <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-700 ease-in-out">
            <p className="text-[12px] font-medium tracking-wide text-zinc-300 max-w-[260px] italic py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
              Experience the mist-clad heights and the thunderous beauty of the
              island's hidden cascades.
            </p>
          </div>
        </div>
      </motion.div>

      {/* --- Section: Land of Elephants --- */}
      <motion.div
        initial={false}
        animate={{ width: "100%" }}
        whileHover={{ width: "135%" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative flex-1 group overflow-hidden cursor-pointer"
      >
        <AnimatePresence mode="wait">
          <motion.img
            key={ELEPHANT_IMAGES[eIndex]}
            src={ELEPHANT_IMAGES[eIndex]}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 w-full h-full object-cover group-hover:opacity-100 group-hover:scale-110 transition-all duration-[5s] ease-out"
            alt="Elephants"
          />
        </AnimatePresence>

        <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#020202] via-[#020202]/50 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-700" />

        <div className="relative z-20 h-full flex flex-col items-center justify-center p-6 text-center">
          <motion.div
            animate={{ y: [0, -5, 0], opacity: [0.3, 0.6, 0.3] }}
            transition={{ repeat: Infinity, duration: 2, delay: 1 }}
            className="absolute top-8 group-hover:hidden transition-opacity"
          >
            <MousePointer2 size={16} className="text-white/40" />
          </motion.div>

          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{
              repeat: Infinity,
              duration: 3,
              ease: "easeInOut",
              delay: 0.5,
            }}
            className="mb-4 p-4 rounded-full bg-amber-500/10 backdrop-blur-md border border-amber-400/20 group-hover:bg-amber-500/40 group-hover:scale-110 group-hover:border-amber-400/50 transition-all duration-500"
          >
            <Trees size={26} className="text-amber-300" />
          </motion.div>

          <h2 className="text-3xl md:text-4xl font-black tracking-tighter uppercase text-white leading-none mb-3 pointer-events-none group-hover:tracking-normal transition-all duration-700">
            LAND OF <br /> <span className="text-amber-500">ELEPHANTS</span>
          </h2>

          <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-700 ease-in-out">
            <p className="text-[12px] font-medium tracking-wide text-zinc-300 max-w-[260px] italic py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
              Venture into the wild heartlands to witness the silent majesty of
              the world's most gentle giants.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
