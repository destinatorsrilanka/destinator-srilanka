"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
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
  Gem,
} from "lucide-react";

interface Destination {
  id: string;
  name: string;
  tagline: string;
  coords: { top: string; left: string };
  description: string;
  image: string;
  stats: { altitude: string; period: string; climate: string };
  iconType: "landmark" | "trees" | "anchor" | "mountain" | "map-pin" | "gem";
  color: string;
}

const destinations: Destination[] = [
  {
    id: "jaffna",
    name: "JAFFNA (FORT/CULTURE)",
    tagline: "Northern Kingdom",
    coords: { top: "17%", left: "35%" },
    description:
      "The cultural hub of the North, famous for its historic fort and unique Tamil heritage.",
    image: "image/jaffna.png",
    stats: { altitude: "5m", period: "Ancient Era", climate: "Dry/Hot" },
    iconType: "landmark",
    color: "#F97316",
  },
  {
    id: "trincomalee",
    name: "TRINCOMALEE (SOBER ISLAND)",
    tagline: "The Deep Harbor",
    coords: { top: "37%", left: "58%" },
    description: "Home to Sober Island and the world's deepest natural harbor.",
    image: "image/trinco.png",
    stats: { altitude: "2m", period: "Pre-Christian", climate: "Hot" },
    iconType: "anchor",
    color: "#0EA5E9",
  },
  {
    id: "anuradhapura",
    name: "ANURADHAPURA",
    tagline: "First Sacred Capital",
    coords: { top: "38%", left: "40%" },
    description:
      "The first capital of ancient Sri Lanka, home to grand stupas.",
    image: "image/anuradhapura.png",
    stats: { altitude: "81m", period: "4th Century BC", climate: "Dry" },
    iconType: "landmark",
    color: "#EF4444",
  },
  {
    id: "polonnaruwa",
    name: "POLONNARUWA",
    tagline: "Medieval Capital",
    coords: { top: "47%", left: "58%" },
    description: "The second capital, showcasing grand ruins and rock statues.",
    image: "image/polonnarruva.png",
    stats: { altitude: "55m", period: "11th Century", climate: "Dry" },
    iconType: "landmark",
    color: "#F59E0B",
  },
  {
    id: "sigiriya",
    name: "SIGIRIYA",
    tagline: "The Lion Rock",
    coords: { top: "49%", left: "49%" },
    description: "An ancient rock fortress rising 200m from the jungle.",
    image: "image/sigiriya.png",
    stats: { altitude: "349m", period: "5th Century", climate: "Humid" },
    iconType: "mountain",
    color: "#EA580C",
  },
  {
    id: "dambulla",
    name: "DAMBULLA",
    tagline: "Golden Cave Temple",
    coords: { top: "52%", left: "46%" },
    description: "The largest cave temple complex in Sri Lanka.",
    image: "image/dabulla.png",
    stats: { altitude: "340m", period: "1st Century BC", climate: "Hot" },
    iconType: "landmark",
    color: "#D97706",
  },
  {
    id: "knuckles",
    name: "KNUCKLES MOUNTAIN RANGE",
    tagline: "Mountain Mist",
    coords: { top: "63%", left: "53%" },
    description: "A biodiversity hotspot with unique cloud forests.",
    image: "image/knuckles.png",
    stats: { altitude: "1863m", period: "Natural", climate: "Mist" },
    iconType: "mountain",
    color: "#10B981",
  },
  {
    id: "kandy",
    name: "KANDY",
    tagline: "Sacred Hill Capital",
    coords: { top: "60%", left: "48%" },
    description: "The last royal stronghold and home to the Tooth Relic.",
    image: "image/kandy.png",
    stats: { altitude: "500m", period: "15th Century", climate: "Cool" },
    iconType: "landmark",
    color: "#991B1B",
  },
  {
    id: "horton",
    name: "HORTON PLAINS CLOUD FOREST",
    tagline: "Cloud Forest",
    coords: { top: "68%", left: "52%" },
    description: "High plateau. Source of Mahaweli, Kelani, and Walawe rivers.",
    image: "image/hortan.png",
    stats: { altitude: "2100m", period: "Natural", climate: "Cold" },
    iconType: "trees",
    color: "#065F46",
  },
  {
    id: "peak-wilderness",
    name: "PEAK WILDERNESS SANCTUARY",
    tagline: "Wilderness Sanctuary",
    coords: { top: "65%", left: "47%" },
    description:
      "Sacred Sri Pada mountain, the source of Kelani and Kalu rivers.",
    image: "image/senctuary.png",
    stats: { altitude: "2243m", period: "Ancient", climate: "Rainy" },
    iconType: "mountain",
    color: "#4F46E5",
  },
  {
    id: "ratnapura",
    name: "GEM CITY RATNAPURA",
    tagline: "Gem City",
    coords: { top: "72%", left: "43%" },
    description: "World-famous for blue sapphires and gem mining.",
    image: "image/ratnapura.png",
    stats: { altitude: "130m", period: "History", climate: "Wet" },
    iconType: "gem",
    color: "#C026D3",
  },
  {
    id: "sinharaja",
    name: "SINHARAJAYA RAIN FOREST",
    tagline: "Rain Forest Heritage",
    coords: { top: "76%", left: "45%" },
    description: "A primary tropical rainforest and UNESCO site.",
    image: "image/sinharaja.png",
    stats: { altitude: "1170m", period: "Natural", climate: "Rainy" },
    iconType: "trees",
    color: "#059669",
  },
  {
    id: "galle",
    name: "GALLE",
    tagline: "Old Town & Fort",
    coords: { top: "83%", left: "39%" },
    description: "A coastal fortress town with colonial architecture.",
    image: "image/galle.png",
    stats: { altitude: "0m", period: "16th Century", climate: "Humid" },
    iconType: "anchor",
    color: "#0284C7",
  },
  {
    id: "kataragama",
    name: "SACRED KATARAGAMA",
    tagline: "City of Festivals",
    coords: { top: "76%", left: "62%" },
    description:
      "A multi-religious sacred city and home to the Ruhunu Maha Kataragama Devalaya.",
    image: "image/kataraga.png",
    stats: { altitude: "40m", period: "Ancient", climate: "Dry" },
    iconType: "landmark",
    color: "#FACC15",
  },
  {
    id: "devundara",
    name: "CITY OF GODS - DEVUNDARA",
    tagline: "Southern Gateway",
    coords: { top: "85%", left: "43%" },
    description:
      "The southernmost point of Sri Lanka, home to the Vishnu Devalaya.",
    image: "image/devundara.png",
    stats: { altitude: "1m", period: "Ancient", climate: "Coastal" },
    iconType: "landmark",
    color: "#4338CA",
  },
  {
    id: "ruhuna",
    name: "KINGDOM OF RUHUNA",
    tagline: "Kingdom of Wild",
    coords: { top: "73%", left: "66%" },
    description: "Ancient kingdom, now a world-renowned leopard sanctuary.",
    image: "image/ruhuna.png",
    stats: { altitude: "30m", period: "2nd Century BC", climate: "Dry" },
    iconType: "landmark",
    color: "#84CC16",
  },
];

const SLOW_TRANSITION = { type: "spring", stiffness: 40, damping: 20 } as const;
const LOGO_COLOR = "#EAB308";

export default function SriLankaInteractiveMap() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  const active = destinations.find((d) => d.id === hoveredId);

  useEffect(() => {
    if (active) return;
    const timer = setInterval(() => {
      setCurrentBgIndex((prev) => (prev + 1) % destinations.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [active]);

  const mapRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, SLOW_TRANSITION);
  const mouseYSpring = useSpring(y, SLOW_TRANSITION);
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  useEffect(() => {
    const checkMobile = () =>
      setIsMobile(window.matchMedia("(max-width: 1024px)").matches);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isMobile) return;
    const rect = mapRef.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);

    const mouseX = ((e.clientX - rect.left) / rect.width) * 100;
    const mouseY = ((e.clientY - rect.top) / rect.height) * 100;

    let closestId: string | null = null;
    let minDistance = 3.5;

    destinations.forEach((loc) => {
      const dx = mouseX - parseFloat(loc.coords.left);
      const dy = mouseY - parseFloat(loc.coords.top);
      const distance = Math.sqrt(dx * dx + dy * dy);
      if (distance < minDistance) {
        minDistance = distance;
        closestId = loc.id;
      }
    });
    if (closestId !== hoveredId) setHoveredId(closestId);
  };

  const renderIcon = (
    type: string,
    isActive: boolean,
    customColor?: string,
  ) => {
    const iconProps = {
      size: isMobile ? (isActive ? 12 : 8) : 14,
      style: { color: isActive ? "#fff" : customColor || "#000" },
      className: isActive ? "" : "opacity-90",
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
      case "gem":
        return <Gem {...iconProps} />;
      default:
        return <MapPin {...iconProps} />;
    }
  };

  return (
    <div className="min-h-screen w-full bg-[#f0f4f8] flex items-center justify-center p-0 sm:p-4 lg:p-10 overflow-hidden select-none font-sans">
      <motion.section
        animate={{ backgroundColor: active ? "#050505" : "#ffffff" }}
        className="relative w-full max-w-[1400px] h-[85vh] sm:h-[800px] overflow-hidden sm:rounded-[4rem] border shadow-2xl flex flex-col items-center justify-center transition-colors duration-1000"
        onClick={() => {
          if (isMobile) setHoveredId(null);
        }}
      >
        {/* LOGO SECTION */}
        <div className="absolute top-10 left-8 lg:left-16 z-40 pointer-events-none">
          <AnimatePresence>
            {!active && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <h3 className="text-[10px] font-bold tracking-[0.5em] uppercase mb-2 text-gray-400">
                  Sri Lanka Expedition
                </h3>
                <h1 className="text-3xl lg:text-6xl font-black tracking-tighter leading-none text-black">
                  THE CEYLON <br /> CHRONICLES
                </h1>
                <div className="relative h-[4px] mt-2 w-full max-w-[200px] lg:max-w-[300px] overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ delay: 0.7, duration: 1.5 }}
                    className="rounded-full h-full"
                    style={{ backgroundColor: LOGO_COLOR }}
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* BACKGROUND IMAGES */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <AnimatePresence mode="popLayout">
            <motion.div
              key={active ? active.id : `slide-${currentBgIndex}`}
              initial={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
              animate={{
                opacity: active ? 0.75 : 0.4,
                scale: 1,
                filter: active
                  ? "blur(0px) saturate(1.4)"
                  : "blur(2px) saturate(0.8)",
              }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 1.5 }}
              className="absolute inset-0"
            >
              <Image
                src={
                  active
                    ? `/${active.image}`
                    : `/${destinations[currentBgIndex].image}`
                }
                alt="Background"
                fill
                priority
                className="object-cover brightness-[0.7]"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/90" />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* MAP & INFO CONTAINER */}
        <motion.div
          ref={mapRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={() => setHoveredId(null)}
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          animate={{
            x: active ? (isMobile ? "-15%" : "22%") : "0%",
            scale: isMobile ? (active ? 0.7 : 1.2) : 1,
            y: isMobile ? (active ? -120 : 20) : 0,
          }}
          transition={SLOW_TRANSITION}
          className="relative w-full max-w-[310px] sm:max-w-[480px] lg:max-w-[650px] aspect-[4/5] z-10 flex items-center justify-center cursor-crosshair"
        >
          <div className="relative w-full h-full">
            <img
              src="/image/lk.svg"
              alt="Map"
              className={`relative z-10 w-full h-full object-contain transition-all duration-1000 pointer-events-none ${active ? "opacity-30 blur-[2px]" : "opacity-95"}`}
            />

            {destinations.map((loc) => (
              <div
                key={loc.id}
                className="absolute"
                style={{
                  top: loc.coords.top,
                  left: loc.coords.left,
                  transform: "translate(-50%, -50%)",
                  zIndex: hoveredId === loc.id ? 100 : 30,
                }}
              >
                <button
                  className="relative flex items-center justify-center outline-none"
                  onClick={(e) => {
                    e.stopPropagation();
                    setHoveredId(loc.id);
                  }}
                >
                  <AnimatePresence>
                    {(hoveredId === loc.id || !active) && (
                      <motion.div
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 2.2, opacity: 0 }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        style={{ borderColor: loc.color }}
                        className="absolute inset-0 rounded-full border-2"
                      />
                    )}
                  </AnimatePresence>
                  <motion.div
                    animate={{
                      y: hoveredId === loc.id ? -5 : 0,
                      scale: hoveredId === loc.id ? 1.3 : 1,
                      backgroundColor:
                        hoveredId === loc.id ? loc.color : "#FFFFFF",
                      opacity: active && hoveredId !== loc.id ? 0.2 : 1,
                    }}
                    className={`flex items-center justify-center border shadow-md ${hoveredId === loc.id ? "w-8 h-8 rounded-lg" : "w-4 h-4 rounded-md"}`}
                  >
                    {renderIcon(loc.iconType, hoveredId === loc.id, loc.color)}
                  </motion.div>
                </button>
              </div>
            ))}
          </div>

          {/* DESTINATION INFO CARD */}
          <AnimatePresence>
            {active && (
              <motion.div
                key={active.id}
                initial={{ opacity: 0, x: isMobile ? 50 : -350 }}
                animate={{
                  opacity: 1,
                  x: isMobile ? "20%" : -450,
                  y: isMobile ? 240 : 0,
                }}
                exit={{ opacity: 0, x: isMobile ? 50 : -350 }}
                className="absolute z-[1000] pointer-events-none w-[80vw] max-w-[320px] bg-white/10 backdrop-blur-3xl border border-white/20 p-5 rounded-[2rem] text-white shadow-2xl"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Compass size={12} style={{ color: active.color }} />
                    <span
                      style={{ color: active.color }}
                      className="font-bold text-[9px] tracking-widest uppercase italic"
                    >
                      {active.tagline}
                    </span>
                  </div>
                  <h2 className="text-2xl font-black uppercase leading-none">
                    {active.name}
                  </h2>
                  <p className="text-gray-200 text-[11px] leading-relaxed font-light">
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
                        className="bg-white/10 p-1.5 rounded-xl border border-white/5 flex flex-col items-center"
                      >
                        <stat.icon
                          size={10}
                          style={{ color: active.color }}
                          className="mb-1"
                        />
                        <span className="text-[7px] font-bold text-gray-300">
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

        {/* SIDE DIRECTORY (Fixed Vertical structure for all screens) */}
        <div
          className="absolute z-50 flex pointer-events-auto transition-all duration-700 right-4 sm:right-12 top-1/2 -translate-y-1/2 flex-col gap-1 text-right max-h-[70vh] sm:max-h-[650px] overflow-y-auto pr-4 sm:pr-6"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <style jsx>{`
            div::-webkit-scrollbar {
              display: none;
            }
          `}</style>

          <p
            className={`text-[9px] font-black tracking-[0.5em] uppercase mb-4 transition-opacity duration-500 ${active ? "text-white/40" : "text-black/30"}`}
          >
            Directory
          </p>

          {destinations.map((loc) => (
            <motion.button
              key={`nav-${loc.id}`}
              onClick={(e) => {
                e.stopPropagation();
                setHoveredId(loc.id);
              }}
              onMouseEnter={() => !isMobile && setHoveredId(loc.id)}
              onMouseLeave={() => !isMobile && setHoveredId(null)}
              animate={{
                x: hoveredId === loc.id ? -8 : 0,
                color:
                  hoveredId === loc.id
                    ? active
                      ? "#fff"
                      : loc.color
                    : active
                      ? "rgba(255,255,255,0.4)"
                      : "rgba(0,0,0,0.5)",
                scale: hoveredId === loc.id ? 1.05 : 1,
              }}
              className="group relative font-bold tracking-wider uppercase flex items-center justify-end transition-all outline-none whitespace-nowrap text-[10px] py-1.5"
            >
              <span className="mr-3">{loc.name}</span>
              <motion.div
                animate={{
                  scale: hoveredId === loc.id ? 1.5 : 1,
                  backgroundColor:
                    hoveredId === loc.id
                      ? loc.color
                      : active
                        ? "rgba(255,255,255,0.2)"
                        : "rgba(0,0,0,0.1)",
                }}
                className="w-1.5 h-1.5 rounded-full shrink-0"
              />
            </motion.button>
          ))}
        </div>

        {/* FOOTER */}
        <div className="absolute bottom-6 left-8 z-[100] flex items-center gap-3">
          <div
            className={`w-7 h-7 rounded-lg flex items-center justify-center font-black text-[10px] transition-colors duration-500 ${active ? "text-black" : "bg-black text-white"}`}
            style={{ backgroundColor: active ? active.color : undefined }}
          >
            SL
          </div>
          <p
            className={`text-[8px] font-black tracking-[0.3em] uppercase transition-colors duration-500 ${active ? "text-white/40" : "text-black/20"}`}
          >
            Heritage Archive v7
          </p>
        </div>
      </motion.section>
    </div>
  );
}
