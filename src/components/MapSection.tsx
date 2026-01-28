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
  Wind,
  Calendar,
  Zap,
  Landmark,
  Trees,
  Anchor,
  Mountain,
  Compass,
  Globe,
} from "lucide-react"; // නිවැරදි පැකේජය lucide-react වේ

// --- Types & Interfaces ---
interface Destination {
  id: string;
  name: string;
  tagline: string;
  coords: { top: string; left: string };
  description: string;
  image: string;
  stats: { altitude: string; period: string; climate: string };
  iconType: "landmark" | "trees" | "anchor" | "mountain" | "map-pin";
  geo: string;
  color: string;
}

const SLOW_TRANSITION = {
  type: "spring",
  stiffness: 40,
  damping: 20,
} as const;

const LOGO_COLOR = "#EAB308";

const destinations: Destination[] = [
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
    color: "#EF4444",
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
    color: "#F59E0B",
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
    color: "#EA580C",
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
    color: "#D97706",
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
    color: "#991B1B",
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
    color: "#0284C7",
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
    color: "#059669",
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
    color: "#0891B2",
  },
];

export default function SriLankaInteractiveMap() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState<boolean>(false);
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

  const renderIcon = (
    type: string,
    isActive: boolean,
    customColor?: string,
  ) => {
    const iconProps = {
      size: isMobile ? 12 : 20,
      style: { color: isActive ? "#fff" : customColor || "#000" },
      className: isActive ? "" : "opacity-80",
    };
    switch (type) {
      case "landmark":
        return <Landmark {...iconProps} />;
      case "trees":
        return <Trees {...iconProps} />;
      case "anchor":
        return <Anchor {...iconProps} />;
      case "mountain":
        return <Mountain {...iconProps} />;
      default:
        return <MapPin {...iconProps} />;
    }
  };

  return (
    <div
      className="min-h-screen w-full bg-[#f0f4f8] flex items-center justify-center p-0 sm:p-4 lg:p-10 overflow-hidden select-none font-sans"
      onClick={() => isMobile && setHoveredId(null)}
    >
      <motion.section
        onMouseMove={handleMouseMove}
        animate={{
          backgroundColor: active ? "#050505" : "#ffffff",
          borderColor: active ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.08)",
        }}
        className="relative w-full max-w-[1400px] h-[100vh] sm:h-[90vh] overflow-hidden sm:rounded-[4rem] border-0 sm:border shadow-2xl flex flex-col items-center justify-center transition-colors duration-1000"
      >
        {/* HEADER */}
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

        {/* BACKGROUND IMAGE ON ACTIVE */}
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
                src={`/${active.image}`}
                alt={active.name}
                className="w-full h-full object-cover grayscale brightness-75 contrast-125"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* WATERMARK */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-[15]">
          <motion.h1
            className="text-[10vw] lg:text-[6vw] font-black tracking-tighter uppercase leading-none opacity-[0.08] text-center px-10"
            animate={{ color: active ? active.color : "rgba(0,0,0,1)" }}
          >
            {active ? active.name : "EXPLORE WITH DESTINATOR"}
          </motion.h1>
        </div>

        {/* MAP CONTAINER */}
        <motion.div
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          animate={{
            x: active ? (isMobile ? 0 : "22%") : "0%",
            scale: isMobile ? (active ? 0.75 : 1.1) : 1,
          }}
          transition={SLOW_TRANSITION}
          className="relative w-full max-w-[310px] sm:max-w-[480px] lg:max-w-[650px] aspect-[4/5] z-10 flex items-center justify-center"
        >
          <div
            className="relative w-full h-full"
            onMouseLeave={() => !isMobile && setHoveredId(null)}
          >
            {/* --- OCEAN VISUALS ONLY (NO SHIPS) --- */}
            <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none">
              {/* Deep Sea Ripple Layers */}
              {[...Array(4)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    scale: [1, 1.5, 2],
                    opacity: [0, 0.4, 0],
                  }}
                  transition={{
                    duration: 12,
                    repeat: Infinity,
                    delay: i * 3,
                    ease: "easeInOut",
                  }}
                  className="absolute w-full h-full rounded-full border-[1.5px] border-blue-500/20 blur-[1px]"
                />
              ))}

              {/* Coastal Glow */}
              <motion.div
                animate={{ opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute w-[90%] h-[95%] rounded-full bg-blue-400/10 blur-[100px]"
              />
            </div>

            <img
              src="/image/lk.svg"
              alt="Sri Lanka Map"
              className={`relative z-10 w-full h-full object-contain transition-all duration-1000 ${
                active
                  ? "opacity-30 blur-[1px]"
                  : "opacity-95 drop-shadow-[0_25px_80px_rgba(37,99,235,0.4)]"
              }`}
            />

            {/* Destinations Map Pins */}
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
                  className="relative p-3 cursor-pointer group"
                  onMouseEnter={() => !isMobile && setHoveredId(loc.id)}
                  onClick={(e) => {
                    e.stopPropagation();
                    setHoveredId(hoveredId === loc.id ? null : loc.id);
                  }}
                >
                  <AnimatePresence>
                    {(hoveredId === loc.id || !active) && (
                      <motion.div
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 2.2, opacity: 0 }}
                        transition={{
                          repeat: Infinity,
                          duration: 2,
                          ease: "easeOut",
                        }}
                        style={{ borderColor: loc.color }}
                        className="absolute inset-0 rounded-full border-2 opacity-50"
                      />
                    )}
                  </AnimatePresence>
                  <motion.div
                    animate={{
                      y: hoveredId === loc.id ? -10 : 0,
                      scale: hoveredId === loc.id ? 1.25 : 1,
                      rotate: hoveredId === loc.id ? 12 : 0,
                      backgroundColor:
                        hoveredId === loc.id ? loc.color : "#FFFFFF",
                      boxShadow:
                        hoveredId === loc.id
                          ? `0 20px 40px -10px ${loc.color}66, 0 0 20px ${loc.color}33`
                          : "0 4px 10px rgba(0,0,0,0.1)",
                    }}
                    transition={{
                      y: { type: "spring", stiffness: 300 },
                      backgroundColor: { duration: 0.3 },
                    }}
                    style={{
                      borderColor:
                        hoveredId === loc.id ? "white" : `${loc.color}33`,
                    }}
                    className={`relative flex items-center justify-center border transition-all ${hoveredId === loc.id ? "w-8 h-8 sm:w-12 sm:h-12 border-2 rounded-lg sm:rounded-2xl" : "w-6 h-6 sm:w-9 sm:h-9 border rounded-md sm:rounded-xl"}`}
                  >
                    {renderIcon(loc.iconType, hoveredId === loc.id, loc.color)}
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
                    <Compass size={14} style={{ color: active.color }} />
                    <span
                      style={{ color: active.color }}
                      className="font-bold text-[10px] tracking-widest uppercase italic"
                    >
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
                      { icon: Wind, label: active.stats.climate },
                      { icon: Zap, label: active.stats.altitude },
                      { icon: Calendar, label: active.stats.period },
                    ].map((stat, idx) => (
                      <div
                        key={idx}
                        className="bg-white/10 p-2 rounded-xl border border-white/5 flex flex-col items-center"
                      >
                        <stat.icon
                          size={12}
                          style={{ color: active.color }}
                          className="mb-1"
                        />
                        <span className="text-[7px] sm:text-[8px] uppercase font-bold text-gray-300 text-center">
                          {stat.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* HUD UI */}
        <div className="absolute bottom-6 left-8 z-[100] flex items-center gap-3">
          <div
            className={`w-7 h-7 rounded-lg flex items-center justify-center font-black text-[10px] transition-colors duration-500 ${active ? "text-black" : "bg-black text-white"}`}
            style={{ backgroundColor: active ? active.color : undefined }}
          >
            SL
          </div>
          <p
            className={`text-[8px] font-black tracking-[0.3em] uppercase ${active ? "text-white/40" : "text-black/20"}`}
          >
            Heritage Archive v6
          </p>
        </div>
      </motion.section>
    </div>
  );
}
