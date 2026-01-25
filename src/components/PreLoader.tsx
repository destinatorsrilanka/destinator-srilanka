"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function PreLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      // පිටුව load වී අවසන් වූ පසු තත්පර 2.5 කින් loader එක ඉවත් වේ
      setTimeout(() => setLoading(false), 2500);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  return (
    <AnimatePresence mode="wait">
      {loading && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{
            y: "-100%",
            transition: { duration: 1, ease: [0.7, 0, 0.3, 1] },
          }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#080808]"
        >
          <div className="relative flex flex-col items-center">
            {/* Logo Animation */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{
                scale: [0.8, 1.05, 1],
                opacity: 1,
              }}
              transition={{
                duration: 1.2,
                ease: "easeOut",
              }}
              className="mb-8"
            >
              <div className="relative w-28 h-28 md:w-36 md:h-36">
                <Image
                  src="/image/Logo1.png" // මෙතැන '/' ලකුණ එක් කර නිවැරදි කරන ලදී
                  alt="Destinator.lk Logo"
                  fill
                  style={{ objectFit: "contain" }} // Next.js 13+ සඳහා නිර්දේශිත ක්‍රමය
                  className="filter drop-shadow-[0_0_15px_rgba(249,115,22,0.3)]"
                  priority
                />
                {/* Logo එක වටා ඇති Pulse effect එක */}
                <motion.div
                  animate={{ scale: [1, 1.4], opacity: [0.4, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 2,
                    ease: "easeOut",
                  }}
                  className="absolute inset-0 rounded-full border-2 border-[#f97316]/40"
                />
              </div>
            </motion.div>

            {/* Brand Name Animation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-center"
            >
              <h2 className="text-[#f97316] text-xl md:text-2xl font-black lowercase tracking-[0.3em] mb-4">
                destinator.lk
              </h2>

              {/* Progress Bar Container */}
              <div className="w-56 h-[3px] bg-white/10 relative overflow-hidden rounded-full mx-auto">
                <motion.div
                  initial={{ x: "-100%" }}
                  animate={{ x: "0%" }}
                  transition={{
                    duration: 2.2,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-[#f97316] to-transparent w-full shadow-[0_0_10px_#f97316]"
                />
              </div>

              {/* Tagline */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="text-white/40 text-[10px] uppercase tracking-[0.5em] mt-5 font-bold"
              >
                Journey through paradise
              </motion.p>
            </motion.div>
          </div>

          {/* Background Decorative Pattern */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.05 }}
            className="absolute inset-0 pointer-events-none overflow-hidden opacity-5"
            style={{
              backgroundImage: `radial-gradient(#f97316 0.5px, transparent 0.5px)`,
              backgroundSize: "30px 30px",
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
