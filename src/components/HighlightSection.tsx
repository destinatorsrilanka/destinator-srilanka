"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Droplets, Trees, X } from "lucide-react";

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

export default function CompactHighlight() {
  const [wIndex, setWIndex] = useState(0);
  const [eIndex, setEIndex] = useState(0);

  const [showWInfo, setShowWInfo] = useState(false);
  const [showEInfo, setShowEInfo] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setWIndex((prev) => (prev + 1) % WATERFALL_MAIN.length);
      setEIndex((prev) => (prev + 1) % ELEPHANT_MAIN.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full h-auto md:h-[30vh] min-h-[450px] md:min-h-[300px] flex flex-col md:flex-row bg-[#020202] overflow-hidden translate-z-0 px-4 md:px-8 py-6 gap-4">
      {/* --- Section: Waterfalls --- */}
      <div className="relative flex-1 overflow-hidden rounded-none border border-white/10 group">
        <AnimatePresence mode="wait">
          <motion.img
            key={WATERFALL_MAIN[wIndex]}
            src={WATERFALL_MAIN[wIndex]}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 0.8, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 1.8, ease: "easeOut" }}
            className="absolute inset-0 w-full h-full object-cover"
            alt="Waterfalls"
          />
        </AnimatePresence>
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#020202]/80 via-transparent to-black/20" />

        <div className="relative z-20 h-full flex flex-col items-center justify-center py-10 px-2 text-center">
          <div className="flex flex-col items-center w-full">
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ repeat: Infinity, duration: 3 }}
              className="mb-4 p-3 rounded-full bg-blue-500/20 backdrop-blur-md border border-blue-400/30"
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

            <p className="text-[10px] md:text-[12px] font-bold tracking-wide text-white/90 max-w-[220px] italic mt-4">
              Experience the mist-clad heights and the thunderous beauty.
            </p>

            <button
              onClick={() => setShowWInfo(true)}
              className="mt-4 text-[10px] font-bold text-white border border-white/30 px-3 py-1 hover:bg-white hover:text-black transition-all"
            >
              READ MORE
            </button>
          </div>
        </div>

        {/* විස්තරය - මාර්ජින් සහ පැඩින් නිවැරදි කළා */}
        <AnimatePresence>
          {showWInfo && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 z-50 bg-white p-8 overflow-y-auto flex flex-col items-start text-left"
            >
              <button
                onClick={() => setShowWInfo(false)}
                className="sticky top-0 self-end mb-4 text-black bg-gray-100 p-2 rounded-full hover:bg-black hover:text-white transition-colors"
              >
                <X size={18} />
              </button>

              <div className="w-full pr-2">
                <h3 className="text-black font-black text-2xl mb-3 tracking-tighter uppercase border-b-2 border-blue-500 inline-block">
                  Land of waterfalls
                </h3>
                <p className="text-gray-800 text-sm leading-relaxed mb-6 font-medium">
                  Sri Lanka, often called the "Land of Waterfalls," holds the
                  world's highest waterfall density with over 400 to 500
                  recorded waterfalls. Primarily located in the central
                  highlands, these cascades, ranging from the 263m tall
                  Bambarakanda Falls to the wide Bomburu Ella, are fed by heavy
                  monsoons and lush forests, with the highest concentration in
                  the Ratnapura district.
                </p>

                <h3 className="text-black font-black text-2xl mb-3 tracking-tighter uppercase border-b-2 border-blue-500 inline-block">
                  Land of Lakes
                </h3>
                <p className="text-gray-800 text-sm leading-relaxed mb-4 font-medium">
                  Sri Lanka, often called a "land of lakes," features an
                  extensive network of ancient man-made reservoirs ("tanks") and
                  natural lakes crucial for irrigation, biodiversity, and
                  tourism. Key water bodies include the massive Parakrama
                  Samudraya, Kalawewa Lake (largest), and Bolgoda Lake, which
                  support wildlife like crocodiles and diverse bird species.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* --- Section: Elephants --- */}
      <div className="relative flex-1 overflow-hidden rounded-none border border-white/10 group">
        <AnimatePresence mode="wait">
          <motion.img
            key={ELEPHANT_MAIN[eIndex]}
            src={ELEPHANT_MAIN[eIndex]}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 0.8, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 1.8, ease: "easeOut" }}
            className="absolute inset-0 w-full h-full object-cover"
            alt="Elephants"
          />
        </AnimatePresence>
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#020202]/80 via-transparent to-black/20" />

        <div className="relative z-20 h-full flex flex-col items-center justify-center py-10 px-2 text-center">
          <div className="flex flex-col items-center w-full">
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ repeat: Infinity, duration: 3, delay: 0.5 }}
              className="mb-4 p-3 rounded-full bg-amber-500/20 backdrop-blur-md border border-amber-400/30"
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

            <p className="text-[10px] md:text-[12px] font-bold tracking-wide text-white/90 max-w-[220px] italic mt-4">
              Venture into the wild heartlands to witness the gentle giants.
            </p>

            <button
              onClick={() => setShowEInfo(true)}
              className="mt-4 text-[10px] font-bold text-white border border-white/30 px-3 py-1 hover:bg-white hover:text-black transition-all"
            >
              READ MORE
            </button>
          </div>
        </div>

        {/* විස්තරය - මාර්ජින් සහ පැඩින් නිවැරදි කළා */}
        <AnimatePresence>
          {showEInfo && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 z-50 bg-white p-8 overflow-y-auto flex flex-col items-start text-left"
            >
              <button
                onClick={() => setShowEInfo(false)}
                className="sticky top-0 self-end mb-4 text-black bg-gray-100 p-2 rounded-full hover:bg-black hover:text-white transition-colors"
              >
                <X size={18} />
              </button>

              <div className="w-full pr-2">
                <h3 className="text-black font-black text-2xl mb-3 tracking-tighter uppercase border-b-2 border-amber-500 inline-block">
                  Land of leopards
                </h3>
                <p className="text-gray-800 text-sm leading-relaxed mb-6 font-medium">
                  Sri Lanka is considered one of the best places in the world to
                  view leopards (Panthera pardus kotiya), with Yala National
                  Park holding one of the highest leopard densities globally.
                  These apex predators thrive across the island, particularly in
                  the dry zone's scrublands and, uniquely, in the wet zone and
                  highland forest patches.
                </p>

                <h3 className="text-black font-black text-2xl mb-3 tracking-tighter uppercase border-b-2 border-amber-500 inline-block">
                  Land of Elephants
                </h3>
                <p className="text-gray-800 text-sm leading-relaxed mb-4 font-medium">
                  Sri Lanka is often celebrated as a "land of elephants" due to
                  its remarkably high density of wild Asian elephants (Elephas
                  maximus maximus). The island is home to an estimated 5,000 to
                  6,000 wild elephants, predominantly found in the dry zones of
                  the north, east, and southeast
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
