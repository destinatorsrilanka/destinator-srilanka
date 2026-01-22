"use client";
import React, { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { MapPin, ArrowRight, Wind, Calendar, Zap } from "lucide-react";

const SLOW_TRANSITION = { stiffness: 40, damping: 20 };
const LOGO_COLOR = "#EAB308";

const destinations = [
  {
    id: "sigiriya",
    name: "SIGIRIYA",
    tagline: "The Lion Rock",
    coords: { top: "32%", left: "55%" },
    description:
      "An ancient rock fortress rising 200m from the jungle, featuring mirror walls and celestial frescoes.",
    image: "image/k.png",
    stats: { altitude: "349m", period: "5th Century", climate: "Humid" },
  },
  {
    id: "kandy",
    name: "KANDY",
    tagline: "Sacred Kingdom",
    coords: { top: "48%", left: "50%" },
    description:
      "The spiritual heart of the island. Walk through the mist-covered hills and ancient heritage of the hill capital.",
    image: "image/clucture.png",
    stats: { altitude: "500m", period: "15th Century", climate: "Cool" },
  },
  {
    id: "ella",
    name: "ELLA",
    tagline: "Mountain Mist",
    coords: { top: "62%", left: "58%" },
    description:
      "A backpacker's paradise where the tea trails meet the sky. Home to the legendary Nine Arch Bridge.",
    image: "image/sildenew.png",
    stats: { altitude: "1041m", period: "Scenic Era", climate: "Cold" },
  },
];

export default function SriLankaInteractiveMap() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const active = destinations.find((d) => d.id === hoveredId);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, SLOW_TRANSITION);
  const mouseYSpring = useSpring(y, SLOW_TRANSITION);
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isMobile) return;
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <div className="min-h-screen w-full bg-[#f8f8f8] flex items-center justify-center p-0 sm:p-4 lg:p-10 overflow-hidden">
      <motion.section
        onMouseMove={handleMouseMove}
        animate={{
          backgroundColor: active ? "#050505" : "#ffffff",
          borderColor: active ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.08)",
        }}
        className="relative w-full max-w-[1400px] h-[100vh] sm:h-[90vh] overflow-hidden sm:rounded-[4rem] border-0 sm:border shadow-2xl flex flex-col items-center justify-center transition-colors duration-1000"
      >
        {/* --- HEADER CONTENT --- */}
        <div className="absolute top-10 sm:top-12 left-8 lg:left-16 z-20 pointer-events-none">
          <AnimatePresence>
            {!active && (
              <motion.div
                key="main-header"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-[10px] font-bold tracking-[0.5em] uppercase mb-2 text-gray-400">
                  Explore Sri Lanka
                </h3>
                <div className="relative inline-block mb-3">
                  <h1 className="text-4xl lg:text-6xl font-black tracking-tighter leading-none text-black">
                    DISCOVER THE <br /> PEARL
                  </h1>
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="h-[4px] lg:h-[6px] mt-2 rounded-full"
                    style={{ backgroundColor: LOGO_COLOR }}
                  />
                </div>
                <p className="max-w-[220px] sm:max-w-[280px] text-[10px] sm:text-xs leading-relaxed text-black/40">
                  Unveil the ancient mysteries and breathtaking landscapes. Tap
                  the markers below.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* --- BACKGROUND IMAGE --- */}
        <AnimatePresence mode="wait">
          {active && (
            <motion.div
              key={active.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.2 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0 z-0"
            >
              <img
                src={active.image}
                alt="bg"
                className="w-full h-full object-cover grayscale"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/90" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* --- WATERMARK --- */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-[1]">
          <motion.h1
            className="text-[30vw] lg:text-[18vw] font-black tracking-tighter uppercase leading-none opacity-[0.05]"
            animate={{
              color: active ? "rgba(255,255,255,1)" : "rgba(0,0,0,1)",
              scale: active ? 1.1 : 1,
            }}
          >
            {active ? active.name : "CEYLON"}
          </motion.h1>
        </div>

        {/* --- MAP CONTAINER (Fixed Overlap for Mobile) --- */}
        <motion.div
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          animate={{
            x: active ? (isMobile ? 0 : "22%") : "0%",
            // Mobile වලදී සිතියම මඳක් පහළට ගන්නා ලදී (Initial: 5%, Active: 12%)
            y: isMobile ? (active ? "12%" : "5%") : "0%",
            scale: isMobile ? (active ? 0.8 : 1.1) : 1,
          }}
          transition={SLOW_TRANSITION}
          className="relative w-full max-w-[310px] sm:max-w-[480px] lg:max-w-[650px] aspect-[4/5] flex items-center justify-center z-10"
        >
          <div
            className="relative w-full h-full"
            onMouseLeave={() => setHoveredId(null)}
          >
            <img
              src="/image/lk.svg"
              alt="Sri Lanka Map"
              className={`w-full h-full object-contain transition-all duration-1000 ${
                active
                  ? "brightness-125 opacity-100"
                  : "brightness-100 opacity-90"
              }`}
            />

            {/* PINS */}
            {destinations.map((loc) => (
              <div
                key={loc.id}
                className="absolute"
                style={{ top: loc.coords.top, left: loc.coords.left }}
              >
                <motion.div
                  onMouseEnter={() => setHoveredId(loc.id)}
                  onClick={() => setHoveredId(loc.id)}
                  className={`cursor-pointer w-9 h-9 sm:w-11 sm:h-11 rounded-2xl flex items-center justify-center border-2 transition-all ${
                    hoveredId === loc.id
                      ? "bg-yellow-500 border-yellow-300 shadow-2xl scale-125"
                      : "bg-white/70 border-black/10 backdrop-blur-md"
                  }`}
                >
                  <MapPin
                    size={20}
                    className={
                      hoveredId === loc.id ? "text-black" : "text-black/60"
                    }
                    fill={hoveredId === loc.id ? "black" : "none"}
                  />
                </motion.div>
              </div>
            ))}
          </div>

          {/* --- POP-UP CARD --- */}
          <AnimatePresence>
            {active && (
              <motion.div
                initial={{ opacity: 0, y: 100, scale: 0.9 }}
                animate={{
                  opacity: 1,
                  x: isMobile ? 0 : -420,
                  y: isMobile ? "75%" : 0,
                  scale: 1,
                }}
                exit={{ opacity: 0, y: 100, scale: 0.9 }}
                transition={SLOW_TRANSITION}
                className="absolute z-[100] w-[92vw] max-w-[380px] bg-white/10 backdrop-blur-3xl border border-white/20 p-6 sm:p-8 rounded-[2.5rem] lg:rounded-[3.5rem] shadow-2xl pointer-events-auto text-white"
              >
                <div className="relative">
                  <span className="text-yellow-500 font-bold text-[9px] sm:text-[10px] tracking-[0.4em] uppercase mb-2 block italic">
                    {active.tagline}
                  </span>
                  <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tighter mb-4 uppercase leading-none">
                    {active.name}
                  </h2>
                  <p className="text-gray-200 text-[11px] sm:text-xs lg:text-sm leading-relaxed mb-6 border-l-2 border-yellow-500 pl-4 opacity-90">
                    "{active.description}"
                  </p>

                  <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-6 sm:mb-8">
                    {[
                      { Icon: Wind, label: active.stats.climate },
                      { Icon: Zap, label: active.stats.altitude },
                      { Icon: Calendar, label: active.stats.period },
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="bg-white/5 p-2 rounded-xl text-center border border-white/10"
                      >
                        <item.Icon
                          size={12}
                          className="mx-auto text-yellow-500/70 mb-1"
                        />
                        <p className="text-[7px] sm:text-[8px] text-gray-300 uppercase font-bold">
                          {item.label}
                        </p>
                      </div>
                    ))}
                  </div>

                  <button className="w-full bg-white text-black py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-yellow-500 transition-all active:scale-95">
                    EXPLORE NOW <ArrowRight size={14} />
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* HUD UI */}
        <div className="absolute bottom-6 left-8 z-[100] flex items-center gap-3">
          <div
            className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center font-black text-[10px] ${active ? "bg-yellow-500 text-black" : "bg-black text-white"}`}
          >
            SL
          </div>
          <p
            className={`text-[8px] sm:text-[9px] font-black tracking-[0.3em] uppercase ${active ? "text-white/40" : "text-black/20"}`}
          >
            Paradise Guide v6
          </p>
        </div>
      </motion.section>
    </div>
  );
}
