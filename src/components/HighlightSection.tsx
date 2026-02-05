"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Droplets, Trees } from "lucide-react";

// --- Photo List 1: Waterfall Background Images ---
const WATERFALL_MAIN = [
  "image/r1.jpeg",
  "image/r2.jpeg",
  "image/r3.jpeg",
  "image/r4.jpeg",
  "image/r5.PNG",
  "image/r6.jpeg",
  "image/r7.jpeg",
  "image/r8.jpeg",
  "image/r9.jpeg",
  "image/r10.PNG",
];

// --- Photo List 2: Waterfall Mini Strip Images (10 Photos) ---
const WATERFALL_STRIP = [
  "image/ws1.jpeg",
  "image/ws2.jpeg",
  "image/ws3.jpeg",
  "image/ws4.jpeg",
  "image/ws5.jpeg",
  "image/ws6.jpeg",
  "image/ws8.jpeg",
  "image/ws9.jpeg",
];

// --- Photo List 3: Elephant Background Images ---
const ELEPHANT_MAIN = [
  "image/e1.jpeg",
  "image/e2.jpeg",
  "image/e3.jpeg",
  "image/e4.jpeg",
  "image/e5.jpeg",
  "image/e6.jpeg",
  "image/e7.jpeg",
  "image/e8.jpeg",
  "image/e9.jpeg",
];

// --- Photo List 4: Elephant Mini Strip Images (10 Photos) ---
const ELEPHANT_STRIP = [
  "image/es1.jpeg",
  "image/es2.jpeg",
  "image/es3.jpeg",
  "image/es4.jpeg",
  "image/es5.jpeg",
  "image/es7.jpeg",
];

export default function CompactHighlight() {
  const [wIndex, setWIndex] = useState(0);
  const [eIndex, setEIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setWIndex((prev) => (prev + 1) % WATERFALL_MAIN.length);
      setEIndex((prev) => (prev + 1) % ELEPHANT_MAIN.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full h-auto md:h-[40vh] min-h-[550px] md:min-h-[380px] flex flex-col md:flex-row bg-[#020202] overflow-hidden translate-z-0">
      {/* --- Section: Land of Waterfalls --- */}
      <div className="relative flex-1 overflow-hidden border-b md:border-b-0 md:border-r border-white/10">
        <AnimatePresence mode="wait">
          <motion.img
            key={WATERFALL_MAIN[wIndex]}
            src={WATERFALL_MAIN[wIndex]}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 w-full h-full object-cover"
            alt="Waterfalls"
          />
        </AnimatePresence>

        <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#020202] via-[#020202]/40 to-transparent opacity-90" />

        <div className="relative z-20 h-full flex flex-col items-center justify-between py-10 px-0 text-center">
          <div className="flex flex-col items-center">
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="mb-4 p-4 rounded-full bg-blue-500/10 backdrop-blur-md border border-blue-400/20"
            >
              <Droplets size={26} className="text-blue-300 shadow-blue-500" />
            </motion.div>

            <h2 className="text-3xl md:text-4xl font-black tracking-tighter uppercase text-white leading-none mb-4">
              LAND OF <br />{" "}
              <span className="text-blue-400">WATERFALLS | LAKES</span>
            </h2>

            <div className="h-auto overflow-hidden">
              <p className="text-[12px] font-medium tracking-wide text-zinc-300 max-w-[260px] italic py-2 opacity-100">
                Experience the mist-clad heights and the thunderous beauty.
              </p>
            </div>
          </div>

          <div className="flex w-full overflow-hidden mt-auto px-4">
            {/* rounded-lg ඉවත් කර ඇත */}
            <div className="flex w-full overflow-hidden shadow-2xl">
              {WATERFALL_STRIP.map((imgSrc, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: i * 0.05 }}
                  className="flex-1 h-14 md:h-20 overflow-hidden"
                >
                  <img
                    src={imgSrc}
                    className="w-full h-full object-cover"
                    alt={`mini-waterfall-${i}`}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* --- Section: Land of Elephants --- */}
      <div className="relative flex-1 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.img
            key={ELEPHANT_MAIN[eIndex]}
            src={ELEPHANT_MAIN[eIndex]}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 w-full h-full object-cover"
            alt="Elephants"
          />
        </AnimatePresence>

        <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#020202] via-[#020202]/40 to-transparent opacity-90" />

        <div className="relative z-20 h-full flex flex-col items-center justify-between py-10 px-0 text-center">
          <div className="flex flex-col items-center">
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{
                repeat: Infinity,
                duration: 3,
                ease: "easeInOut",
                delay: 0.5,
              }}
              className="mb-4 p-4 rounded-full bg-amber-500/10 backdrop-blur-md border border-amber-400/20"
            >
              <Trees size={26} className="text-amber-300" />
            </motion.div>

            <h2 className="text-3xl md:text-4xl font-black tracking-tighter uppercase text-white leading-none mb-4">
              LAND OF <br />{" "}
              <span className="text-amber-500">ELEPHANTS | LEOPARDS</span>
            </h2>

            <div className="h-auto overflow-hidden">
              <p className="text-[12px] font-medium tracking-wide text-zinc-300 max-w-[260px] italic py-2 opacity-100">
                Venture into the wild heartlands to witness the gentle giants.
              </p>
            </div>
          </div>

          <div className="flex w-full overflow-hidden mt-auto px-4">
            {/* rounded-lg ඉවත් කර ඇත */}
            <div className="flex w-full overflow-hidden shadow-2xl">
              {ELEPHANT_STRIP.map((imgSrc, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: i * 0.05 }}
                  className="flex-1 h-14 md:h-20 overflow-hidden"
                >
                  <img
                    src={imgSrc}
                    className="w-full h-full object-cover"
                    alt={`mini-elephant-${i}`}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
