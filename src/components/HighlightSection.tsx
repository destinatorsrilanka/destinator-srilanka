"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Droplets, Trees } from "lucide-react";

// --- Photo Lists ---
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
    <section className="w-full h-auto md:h-[40vh] min-h-[550px] md:min-h-[380px] flex flex-col md:flex-row bg-[#020202] overflow-hidden translate-z-0 px-4 md:px-8 py-6 gap-4">
      {/* --- Section: Waterfalls --- */}
      <div className="relative flex-1 overflow-hidden rounded-none border border-white/10">
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

        <div className="relative z-20 h-full flex flex-col items-center justify-between py-10 px-2 text-center">
          <div className="flex flex-col items-center w-full">
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ repeat: Infinity, duration: 3 }}
              className="mb-4 p-3 rounded-full bg-blue-500/10 backdrop-blur-md border border-blue-400/20"
            >
              <Droplets size={20} className="text-blue-300" />
            </motion.div>

            <div className="flex flex-col items-center w-full overflow-hidden px-1">
              <h2
                className="text-white font-black uppercase tracking-tighter leading-none"
                style={{ fontSize: "clamp(1.1rem, 5vw, 2.5rem)" }}
              >
                LAND OF
              </h2>
              <h2
                className="text-blue-400 font-black uppercase tracking-tighter leading-none whitespace-nowrap mt-1 flex items-center justify-center gap-1 w-full"
                style={{ fontSize: "clamp(0.65rem, 3.8vw, 2.2rem)" }}
              >
                WATERFALLS <span className="text-white/40">|</span> LAKES
              </h2>
            </div>

            <p className="text-[10px] md:text-[12px] font-medium tracking-wide text-zinc-400 max-w-[220px] italic mt-4">
              Experience the mist-clad heights and the thunderous beauty.
            </p>
          </div>

          <div className="flex w-full overflow-hidden mt-auto px-2">
            <div className="flex w-full shadow-2xl overflow-hidden rounded-sm">
              {WATERFALL_STRIP.map((imgSrc, i) => (
                <div
                  key={i}
                  className="flex-1 h-12 md:h-20 overflow-hidden border-r border-black/20 last:border-0"
                >
                  <img
                    src={imgSrc}
                    className="w-full h-full object-cover"
                    alt="mini"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* --- Section: Elephants --- */}
      <div className="relative flex-1 overflow-hidden rounded-none border border-white/10">
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

        <div className="relative z-20 h-full flex flex-col items-center justify-between py-10 px-2 text-center">
          <div className="flex flex-col items-center w-full">
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ repeat: Infinity, duration: 3, delay: 0.5 }}
              className="mb-4 p-3 rounded-full bg-amber-500/10 backdrop-blur-md border border-amber-400/20"
            >
              <Trees size={20} className="text-amber-300" />
            </motion.div>

            <div className="flex flex-col items-center w-full overflow-hidden px-1">
              <h2
                className="text-white font-black uppercase tracking-tighter leading-none"
                style={{ fontSize: "clamp(1.1rem, 5vw, 2.5rem)" }}
              >
                LAND OF
              </h2>
              <h2
                className="text-amber-500 font-black uppercase tracking-tighter leading-none whitespace-nowrap mt-1 flex items-center justify-center gap-1 w-full"
                style={{ fontSize: "clamp(0.65rem, 3.8vw, 2.2rem)" }}
              >
                ELEPHANTS <span className="text-white/40">|</span> LEOPARDS
              </h2>
            </div>

            <p className="text-[10px] md:text-[12px] font-medium tracking-wide text-zinc-400 max-w-[220px] italic mt-4">
              Venture into the wild heartlands to witness the gentle giants.
            </p>
          </div>

          <div className="flex w-full overflow-hidden mt-auto px-2">
            <div className="flex w-full shadow-2xl overflow-hidden rounded-sm">
              {ELEPHANT_STRIP.map((imgSrc, i) => (
                <div
                  key={i}
                  className="flex-1 h-12 md:h-20 overflow-hidden border-r border-black/20 last:border-0"
                >
                  <img
                    src={imgSrc}
                    className="w-full h-full object-cover"
                    alt="mini"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
