"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Compass } from "lucide-react"; // Compass icon එක import කරගන්න

export default function PreLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => setLoading(false), 2800);
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
            transition: { duration: 1.2, ease: [0.7, 0, 0.3, 1] },
          }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#050505]"
        >
          <div className="relative flex flex-col items-center">
            {/* Brand Name Animation with Rotating Compass */}
            <motion.div
              initial={{ opacity: 0, filter: "blur(10px)" }}
              animate={{
                opacity: 1,
                filter: "blur(0px)",
                transition: { duration: 1.5, ease: "easeOut" },
              }}
              className="text-center"
            >
              <motion.h2
                initial={{ letterSpacing: "0.1em" }}
                animate={{ letterSpacing: "0.2em" }}
                transition={{ duration: 2, ease: "easeOut" }}
                className="text-[#f97316] text-4xl md:text-6xl font-black uppercase mb-6 flex items-center justify-center"
              >
                destinat
                <motion.span
                  animate={{ rotate: 360 }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  className="inline-block mx-1"
                >
                  <Compass className="w-8 h-8 md:w-12 md:h-12 stroke-[3px]" />
                </motion.span>
                r
              </motion.h2>

              {/* Minimal Progress Line */}
              <div className="w-48 h-[1px] bg-white/5 relative overflow-hidden mx-auto">
                <motion.div
                  initial={{ x: "-100%" }}
                  animate={{ x: "100%" }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-[#f97316] to-transparent w-full"
                />
              </div>

              {/* Description Tagline - Fixed for Mobile & Wrapped */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 1 }}
                className="mt-8 flex flex-col gap-4 px-6 max-w-[320px] md:max-w-none mx-auto"
              >
                <p className="text-white/60 text-[10px] md:text-[12px] uppercase tracking-[0.4em] md:tracking-[0.6em] font-medium leading-relaxed">
                  The real voyage of discovery consists{" "}
                  <br className="hidden md:block" />
                  not in seeking new landscapes _ <br />
                  but in having new eyes
                </p>
                <div className="flex justify-center gap-4">
                  <span className="w-1 h-1 bg-[#f97316] rounded-full animate-pulse" />
                  <span className="w-1 h-1 bg-[#f97316]/50 rounded-full animate-pulse delay-75" />
                  <span className="w-1 h-1 bg-[#f97316]/20 rounded-full animate-pulse delay-150" />
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Background Decorative Pattern */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.15 }}
            className="absolute inset-0 pointer-events-none overflow-hidden"
            style={{
              backgroundImage: `linear-gradient(to right, #111 1px, transparent 1px), linear-gradient(to bottom, #111 1px, transparent 1px)`,
              backgroundSize: "60px 60px",
            }}
          />

          {/* Ambient Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[#f97316]/5 rounded-full blur-[100px] md:blur-[120px] pointer-events-none" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
