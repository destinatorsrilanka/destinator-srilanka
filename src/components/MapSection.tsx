"use client";
import React, { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  MapPin,
  ArrowRight,
  Wind,
  Calendar,
  Zap,
  Landmark,
  Trees,
  Anchor,
  Mountain,
  Compass,
} from "lucide-react";

const SLOW_TRANSITION = { type: "spring", stiffness: 40, damping: 20 };
const LOGO_COLOR = "#EAB308";

const destinations = [
  {
    id: "anuradhapura",
    name: "ANURADHAPURA",
    tagline: "Sacred Ancient City",
    coords: { top: "38%", left: "42%" },
    description:
      "The first capital of ancient Sri Lanka, a UNESCO site home to grand stupas and the sacred Bodhi tree.",
    image: "image/anuradhapura.jpeg",
    stats: { altitude: "81m", period: "4th Century BC", climate: "Dry" },
    iconType: "landmark",
    geo: "8.3114° N, 80.4037° E",
  },
  {
    id: "polonnaruwa",
    name: "POLONNARUWA",
    tagline: "Medieval Capital",
    coords: { top: "46%", left: "56%" },
    description:
      "The second capital of Sri Lanka, known for its well-preserved ruins and spectacular Gal Vihara rock statues.",
    image: "image/polonnaruva.jpeg",
    stats: { altitude: "55m", period: "11th Century", climate: "Dry" },
    iconType: "landmark",
    geo: "7.9403° N, 81.0188° E",
  },
  {
    id: "sigiriya",
    name: "SIGIRIYA",
    tagline: "The Lion Rock",
    coords: { top: "48%", left: "48%" },
    description:
      "An ancient rock fortress rising 200m from the jungle, featuring mirror walls and celestial frescoes.",
    image: "image/sigiriya.WEBP",
    stats: { altitude: "349m", period: "5th Century", climate: "Humid" },
    iconType: "mountain",
    geo: "7.9570° N, 80.7603° E",
  },
  {
    id: "dambulla",
    name: "DAMBULLA",
    tagline: "Golden Cave Temple",
    coords: { top: "55%", left: "45%" },
    description:
      "The largest cave temple complex in Sri Lanka with 157 statues and extensive sacred murals.",
    image: "image/dabulla.jpg",
    stats: { altitude: "340m", period: "1st Century BC", climate: "Hot" },
    iconType: "landmark",
    geo: "7.8608° N, 80.6516° E",
  },
  {
    id: "kandy",
    name: "KANDY",
    tagline: "Sacred Hill Capital",
    coords: { top: "62%", left: "45%" },
    description:
      "The last royal stronghold and home to the Temple of the Sacred Tooth Relic.",
    image: "image/kandy.jpg",
    stats: { altitude: "500m", period: "15th Century", climate: "Cool" },
    iconType: "landmark",
    geo: "7.2906° N, 80.6337° E",
  },
  {
    id: "galle",
    name: "GALLE",
    tagline: "Old Town & Fort",
    coords: { top: "80%", left: "36%" },
    description:
      "A coastal fortress built by Europeans, showcasing a blend of colonial and South Asian architecture.",
    image: "image/galle.jpg",
    stats: { altitude: "0m", period: "16th Century", climate: "Humid" },
    iconType: "anchor",
    geo: "6.0329° N, 80.2168° E",
  },
  {
    id: "sinharaja",
    name: "SINHARAJA",
    tagline: "Natural Rain Forest",
    coords: { top: "70%", left: "40%" },
    description:
      "A primary tropical rainforest and a UNESCO site, rich in endemic flora and fauna.",
    image: "image/sinharaja.jpg",
    stats: { altitude: "1170m", period: "Natural Heritage", climate: "Rainy" },
    iconType: "trees",
    geo: "6.3833° N, 80.4167° E",
  },
  {
    id: "highlands",
    name: "CENTRAL HIGHLANDS",
    tagline: "Wilderness Peaks",
    coords: { top: "58%", left: "52%" },
    description:
      "Includes Horton Plains and Adam's Peak, known for biodiversity and scenic beauty.",
    image: "image/centralHighland.jpeg",
    stats: { altitude: "2100m", period: "Natural Heritage", climate: "Cold" },
    iconType: "mountain",
    geo: "6.8096° N, 80.8144° E",
  },
];

export default function SriLankaInteractiveMap() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const active = destinations.find((d) => d.id === hoveredId);

  useEffect(() => {
    const checkMobile = () =>
      setIsMobile(window.matchMedia("(max-width: 1024px)").matches);
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

  const renderIcon = (type: string, isActive: boolean) => {
    const props = {
      size: isMobile ? 12 : 20,
      className: isActive ? "text-white" : "text-black/60",
    };
    switch (type) {
      case "landmark":
        return <Landmark {...props} />;
      case "trees":
        return <Trees {...props} />;
      case "anchor":
        return <Anchor {...props} />;
      case "mountain":
        return <Mountain {...props} />;
      default:
        return <MapPin {...props} />;
    }
  };

  return (
    <div className="min-h-screen w-full bg-[#f8f8f8] flex items-center justify-center p-0 sm:p-4 lg:p-10 overflow-hidden select-none font-sans">
      <motion.section
        onMouseMove={handleMouseMove}
        animate={{
          backgroundColor: active ? "#050505" : "#ffffff",
          borderColor: active ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.08)",
        }}
        className="relative w-full max-w-[1400px] h-[100vh] sm:h-[90vh] overflow-hidden sm:rounded-[4rem] border-0 sm:border shadow-2xl flex flex-col items-center justify-center transition-colors duration-1000"
      >
        {/* HEADER CONTENT */}
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
                  Sri Lanka Expedition
                </h3>
                <div className="relative inline-block mb-3">
                  <h1 className="text-4xl lg:text-6xl font-black tracking-tighter leading-none text-black">
                    THE CEYLON <br /> CHRONICLES
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
                  Embark on a voyage through time to explore the majestic
                  heritage and untouched wonders of the island.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* ENHANCED BACKGROUND IMAGE SECTION */}
        <AnimatePresence mode="wait">
          {active && (
            <motion.div
              key={active.id}
              initial={{ opacity: 0, scale: 1.15 }}
              animate={{ opacity: 0.35, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="absolute inset-0 z-0 overflow-hidden"
            >
              <img
                src={active.image}
                alt="bg"
                className="w-full h-full object-cover grayscale brightness-75 contrast-125"
              />
              {/* Cinematic Vignette and Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.6)_100%)]" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* WATERMARK */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-[15]">
          <motion.h1
            className="text-[10vw] lg:text-[6vw] font-black tracking-tighter uppercase leading-none opacity-[0.08] text-center px-10"
            animate={{
              color: active ? "rgba(255,255,255,1)" : "rgba(0,0,0,1)",
            }}
          >
            {active ? active.name : "EXPLORE WITH DESTINATOR"}
          </motion.h1>
        </div>

        {/* MAP CONTAINER */}
        <motion.div
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          animate={{
            x: active ? (isMobile ? 0 : "22%") : "0%",
            y: isMobile ? (active ? "8%" : "5%") : "0%",
            scale: isMobile ? (active ? 0.75 : 1.1) : 1,
          }}
          transition={SLOW_TRANSITION}
          className="relative w-full max-w-[310px] sm:max-w-[480px] lg:max-w-[650px] aspect-[4/5] z-10 flex items-center justify-center"
        >
          <div
            className="relative w-full h-full"
            onMouseLeave={() => !isMobile && setHoveredId(null)}
            onClick={() => isMobile && setHoveredId(null)}
          >
            <img
              src="/image/lk.svg"
              alt="Map"
              className={`w-full h-full object-contain transition-all duration-1000 ${
                active ? "opacity-30 blur-[1px]" : "opacity-90"
              }`}
            />

            {/* PINS */}
            {destinations.map((loc) => (
              <div
                key={loc.id}
                className="absolute"
                style={{
                  top: loc.coords.top,
                  left: loc.coords.left,
                  transform: "translate(-50%, -50%)",
                  zIndex: hoveredId === loc.id ? 200 : 100,
                  pointerEvents: "auto",
                }}
              >
                <div
                  className="relative p-3 cursor-pointer"
                  onMouseEnter={() => !isMobile && setHoveredId(loc.id)}
                  onClick={(e) => {
                    e.stopPropagation();
                    setHoveredId(hoveredId === loc.id ? null : loc.id);
                  }}
                >
                  <motion.div
                    className={`flex items-center justify-center border transition-all shadow-xl ${
                      hoveredId === loc.id
                        ? "w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-yellow-500 border-white scale-125 rotate-12 rounded-lg sm:rounded-2xl"
                        : "w-5 h-5 sm:w-8 sm:h-8 lg:w-10 lg:h-10 bg-white border-transparent rounded-md sm:rounded-xl"
                    }`}
                  >
                    {renderIcon(loc.iconType || "", hoveredId === loc.id)}
                  </motion.div>
                </div>
              </div>
            ))}
          </div>

          {/* POP-UP CARD */}
          <AnimatePresence>
            {active && (
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={{
                  opacity: 1,
                  x: isMobile ? 0 : -450,
                  scale: 1,
                  y: isMobile ? 220 : 0,
                }}
                exit={{ opacity: 0, y: 20, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="absolute z-[1000] w-[92vw] max-w-[380px] bg-white/10 backdrop-blur-3xl border border-white/20 p-6 sm:p-8 rounded-[2rem] shadow-2xl text-white pointer-events-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-center gap-2">
                    <Compass size={14} className="text-yellow-500" />
                    <span className="text-yellow-500 font-bold text-[10px] tracking-widest uppercase italic">
                      {active.tagline}
                    </span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-black tracking-tighter uppercase leading-none">
                    {active.name}
                  </h2>
                  <p className="text-gray-200 text-xs sm:text-sm leading-relaxed font-light">
                    {active.description}
                  </p>

                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { i: Wind, l: active.stats.climate },
                      { i: Zap, l: active.stats.altitude },
                      { i: Calendar, l: active.stats.period },
                    ].map((stat, idx) => (
                      <div
                        key={idx}
                        className="bg-white/10 p-2 rounded-xl border border-white/5 flex flex-col items-center"
                      >
                        <stat.i size={12} className="text-yellow-500 mb-1" />
                        <span className="text-[7px] sm:text-[8px] uppercase font-bold text-gray-300 text-center">
                          {stat.l}
                        </span>
                      </div>
                    ))}
                  </div>

                  <button className="w-full bg-white text-black py-3 sm:py-4 rounded-xl font-black text-[10px] uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-yellow-500 transition-all">
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
            className={`w-7 h-7 rounded-lg flex items-center justify-center font-black text-[10px] ${
              active ? "bg-yellow-500 text-black" : "bg-black text-white"
            }`}
          >
            SL
          </div>
          <p
            className={`text-[8px] font-black tracking-[0.3em] uppercase ${
              active ? "text-white/40" : "text-black/20"
            }`}
          >
            Heritage Archive v6
          </p>
        </div>
      </motion.section>
    </div>
  );
}
