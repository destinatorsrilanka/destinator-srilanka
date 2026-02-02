"use client";
import React, { useState, useEffect } from "react";
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

// --- Realistic River Component (Enhanced for Visibility) ---
const RiverLine = ({
  d,
  color,
  name,
  labelCoords,
}: {
  d: string;
  color: string;
  name: string;
  labelCoords: { top: string; left: string };
}) => (
  <g>
    <motion.path
      d={d}
      fill="transparent"
      stroke={color}
      strokeWidth="0.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={{ pathLength: 0, opacity: 0.8 }}
      animate={{ pathLength: 1, opacity: 1 }}
      transition={{ duration: 2, ease: "easeInOut" }}
    />

    <text
      x={labelCoords.left}
      y={labelCoords.top}
      fill={color}
      fontSize="2.0"
      fontWeight="900"
      className="uppercase tracking-tighter"
      style={{
        pointerEvents: "none",
        textShadow:
          "1px 1px 0px #fff, -1px -1px 0px #fff, 1px -1px 0px #fff, -1px 1px 0px #fff",
        letterSpacing: "-0.05em",
      }}
    >
      {name}
    </text>
  </g>
);

interface Destination {
  id: string;
  name: string;
  tagline: string;
  coords: { top: string; left: string };
  description: string;
  image: string;
  stats: { altitude: string; period: string; climate: string };
  iconType:
    | "landmark"
    | "trees"
    | "anchor"
    | "mountain"
    | "map-pin"
    | "gem"
    | "river";
  color: string;
  imageFocus?: string;
  riverPath?: string;
}

const SLOW_TRANSITION = { type: "spring", stiffness: 40, damping: 20 } as const;
const LOGO_COLOR = "#EAB308";

const destinations: Destination[] = [
  {
    id: "jaffna",
    name: "JAFFNA (FORT/CULTURE)",
    tagline: "Northern Kingdom",
    coords: { top: "17%", left: "35%" },
    description:
      "The cultural hub of the North, famous for its historic fort and unique Tamil heritage.",
    image: "image/jaffna.jpg",
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
    image: "image/thrinco.jpg",
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
    image: "image/anuradhapura.jpg",
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
    image: "image/polonnarruva.jpg",
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
    image: "image/sigiriya.jpg",
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
    image: "image/dambulla.jpg",
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
    image: "image/knuckles.jpg",
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
    image: "image/kandy.jpg",
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
    image: "image/adam.jpg",
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
    image: "image/ratnapura.jpg",
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
    image: "image/sinharaja.jpg",
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
    image: "image/galle.jpg",
    stats: { altitude: "0m", period: "16th Century", climate: "Humid" },
    iconType: "anchor",
    color: "#0284C7",
  },
  {
    id: "devundara",
    name: "CITY OF GODS - DEVUNDARA",
    tagline: "City of Gods",
    coords: { top: "86%", left: "45%" },
    description: "Southernmost point, home to a grand shrine and lighthouse.",
    image: "image/devundara.jpg",
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
    image: "image/ruhuna.jpg",
    stats: { altitude: "30m", period: "2nd Century BC", climate: "Dry" },
    iconType: "landmark",
    color: "#84CC16",
  },
  {
    id: "mahaweli",
    name: "MAHAWELI RIVER",
    tagline: "The Longest River",
    coords: { top: "55%", left: "51%" },
    description: "Sri Lanka's longest river, originating from Horton Plains.",
    image: "image/mahaweli.jpg",
    stats: { altitude: "335km", period: "Life Line", climate: "Fresh" },
    iconType: "river",
    color: "#0369A1",
    riverPath:
      "M 52 68 C 58 65, 48 58, 52 52 C 55 48, 65 48, 62 38 C 60 35, 58 34, 58 34",
  },
  {
    id: "kelani",
    name: "KELANI RIVER",
    tagline: "Sacred Waters",
    coords: { top: "71%", left: "32%" },
    description: "Rising from Sri Pada, it flows to Colombo.",
    image: "image/kelani.jpg",
    stats: { altitude: "145km", period: "Sacred", climate: "Fresh" },
    iconType: "river",
    color: "#0284C7",
    riverPath: "M 47 68 C 42 69, 38 71, 32 70 C 30 70, 29 71, 29 71",
  },
  {
    id: "kalu",
    name: "KALU RIVER",
    tagline: "The Black River",
    coords: { top: "79%", left: "31%" },
    description: "Flows from the Peak Wilderness to the west coast.",
    image: "image/kalu.jpg",
    stats: { altitude: "129km", period: "Fast Flow", climate: "Wet" },
    iconType: "river",
    color: "#1e3a8a", // Changed from black/slate to Deep Blue
    riverPath: "M 47 68 C 45 73, 44 76, 40 80 C 36 84, 33 83, 31 83",
  },
  {
    id: "walawe",
    name: "WALAWE RIVER",
    tagline: "Southern Flow",
    coords: { top: "83%", left: "55%" },
    description: "Starts at Horton Plains and flows to the southern sea.",
    image: "image/walawe.jpg",
    stats: { altitude: "138km", period: "Agricultural", climate: "Dry Zone" },
    iconType: "river",
    color: "#075985",
    riverPath: "M 52 68 C 55 75, 54 82, 57 85 C 58 87, 59 88, 60 89",
  },
  {
    id: "nilwala",
    name: "NILWALA RIVER",
    tagline: "The Blue River",
    coords: { top: "88%", left: "46%" },
    description: "Flowing through Matara, starting from Sinharaja area.",
    image: "image/nilwala.jpg",
    stats: { altitude: "72km", period: "Southern Heritage", climate: "Wet" },
    iconType: "river",
    color: "#1e40af",
    riverPath: "M 45 76 C 47 84, 48 89, 47 96",
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
      size: isMobile ? (isActive ? 12 : 9) : 18,
      style: { color: isActive ? "#fff" : customColor || "#000" },
      className: isActive ? "" : "opacity-90",
    };
    if (type === "river") return null;
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
        <div className="absolute top-10 sm:top-12 left-8 lg:left-16 z-40 pointer-events-none">
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
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <AnimatePresence mode="wait">
          {active && (
            <motion.div
              key={active.id}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 0.45, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0 z-0"
            >
              <Image
                src={`/${active.image}`}
                alt={active.name}
                fill
                priority
                className="grayscale brightness-90 contrast-110"
                style={{
                  objectFit: "cover",
                  objectPosition: active.imageFocus || "center 30%",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/60" />
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          animate={{
            x: active ? (isMobile ? 0 : "22%") : "0%",
            scale: isMobile ? (active ? 0.75 : 1.35) : 1,
            y: isMobile ? (active ? -40 : 40) : 0,
          }}
          transition={SLOW_TRANSITION}
          className="relative w-full max-w-[310px] sm:max-w-[480px] lg:max-w-[650px] aspect-[4/5] z-10 flex items-center justify-center"
        >
          <div
            className="relative w-full h-full"
            onMouseLeave={() => !isMobile && setHoveredId(null)}
          >
            <svg
              viewBox="0 0 100 100"
              className="absolute inset-0 w-full h-full z-20 pointer-events-none overflow-visible"
            >
              {destinations.map(
                (loc) =>
                  loc.riverPath && (
                    <RiverLine
                      key={`river-${loc.id}`}
                      d={loc.riverPath}
                      name={loc.name.split(" ")[0]}
                      color={loc.color}
                      labelCoords={{
                        top: (parseFloat(loc.coords.top) + 2).toString(),
                        left: (parseFloat(loc.coords.left) + 2).toString(),
                      }}
                    />
                  ),
              )}
            </svg>

            <img
              src="/image/lk.svg"
              alt="Map"
              className={`relative z-10 w-full h-full object-contain transition-all duration-1000 ${
                active ? "opacity-30 blur-[1px]" : "opacity-95"
              }`}
            />

            {destinations.map(
              (loc) =>
                loc.iconType !== "river" && (
                  <div
                    key={loc.id}
                    className="absolute"
                    style={{
                      top: loc.coords.top,
                      left: loc.coords.left,
                      transform: "translate(-50%, -50%)",
                      zIndex: hoveredId === loc.id ? 200 : 100,
                    }}
                  >
                    <button
                      className="relative p-1 outline-none bg-transparent border-none cursor-pointer"
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
                            className="absolute inset-0 rounded-full border-2 opacity-50 pointer-events-none"
                          />
                        )}
                      </AnimatePresence>
                      <motion.div
                        animate={{
                          y: hoveredId === loc.id ? -5 : 0,
                          scale: hoveredId === loc.id ? 1.15 : 1,
                          backgroundColor:
                            hoveredId === loc.id ? loc.color : "#FFFFFF",
                          opacity: active && hoveredId !== loc.id ? 0.1 : 1,
                        }}
                        className={`relative flex items-center justify-center border transition-all ${
                          hoveredId === loc.id
                            ? "w-7 h-7 sm:w-11 sm:h-11 border-2 rounded-lg"
                            : "w-4 h-4 sm:w-8 sm:h-8 border rounded-md"
                        }`}
                      >
                        {renderIcon(
                          loc.iconType,
                          hoveredId === loc.id,
                          loc.color,
                        )}
                      </motion.div>
                    </button>
                  </div>
                ),
            )}
          </div>

          <AnimatePresence>
            {active && (
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{
                  opacity: 1,
                  x: isMobile ? 0 : -450,
                  y: isMobile ? 260 : 0,
                }}
                exit={{ opacity: 0, y: 20 }}
                className="absolute z-[1000] w-[85vw] max-w-[340px] bg-white/10 backdrop-blur-3xl border border-white/20 p-5 rounded-[2rem] text-white shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
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

        <div className="absolute bottom-6 left-8 z-[100] flex items-center gap-3">
          <div
            className={`w-7 h-7 rounded-lg flex items-center justify-center font-black text-[10px] ${
              active ? "text-black" : "bg-black text-white"
            }`}
            style={{ backgroundColor: active ? active.color : undefined }}
          >
            SL
          </div>
          <p
            className={`text-[8px] font-black tracking-[0.3em] uppercase ${
              active ? "text-white/40" : "text-black/20"
            }`}
          >
            Heritage Archive v7
          </p>
        </div>
      </motion.section>
    </div>
  );
}
