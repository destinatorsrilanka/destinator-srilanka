"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import "../i18n";
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

interface DestinationConfig {
  id: string;
  coords: { top: string; left: string };
  image: string;
  iconType: "landmark" | "trees" | "anchor" | "mountain" | "map-pin" | "gem";
  color: string;
}

const destinationConfigs: DestinationConfig[] = [
  {
    id: "jaffna",
    coords: { top: "17%", left: "35%" },
    image: "image/jaffna.png",
    iconType: "landmark",
    color: "#F97316",
  },
  {
    id: "trincomalee",
    coords: { top: "37%", left: "58%" },
    image: "image/trinco.png",
    iconType: "anchor",
    color: "#0EA5E9",
  },
  {
    id: "anuradhapura",
    coords: { top: "38%", left: "40%" },
    image: "image/anuradhapura.png",
    iconType: "landmark",
    color: "#EF4444",
  },
  {
    id: "polonnaruwa",
    coords: { top: "47%", left: "58%" },
    image: "image/polonnarruva.png",
    iconType: "landmark",
    color: "#F59E0B",
  },
  {
    id: "sigiriya",
    coords: { top: "49%", left: "49%" },
    image: "image/sigiriya.png",
    iconType: "mountain",
    color: "#EA580C",
  },
  {
    id: "dambulla",
    coords: { top: "52%", left: "46%" },
    image: "image/dabulla.png",
    iconType: "landmark",
    color: "#D97706",
  },
  {
    id: "knuckles",
    coords: { top: "63%", left: "53%" },
    image: "image/knuckles.png",
    iconType: "mountain",
    color: "#10B981",
  },
  {
    id: "kandy",
    coords: { top: "60%", left: "48%" },
    image: "image/kandy.png",
    iconType: "landmark",
    color: "#991B1B",
  },
  {
    id: "horton",
    coords: { top: "68%", left: "52%" },
    image: "image/hortan.png",
    iconType: "trees",
    color: "#065F46",
  },
  {
    id: "peak-wilderness",
    coords: { top: "65%", left: "47%" },
    image: "image/senctuary.png",
    iconType: "mountain",
    color: "#4F46E5",
  },
  {
    id: "ratnapura",
    coords: { top: "72%", left: "43%" },
    image: "image/ratnapura.png",
    iconType: "gem",
    color: "#C026D3",
  },
  {
    id: "sinharaja",
    coords: { top: "76%", left: "45%" },
    image: "image/sinharaja.png",
    iconType: "trees",
    color: "#059669",
  },
  {
    id: "galle",
    coords: { top: "83%", left: "39%" },
    image: "image/galle.png",
    iconType: "anchor",
    color: "#0284C7",
  },
  {
    id: "kataragama",
    coords: { top: "76%", left: "62%" },
    image: "image/kataraga.png",
    iconType: "landmark",
    color: "#FACC15",
  },
  {
    id: "devundara",
    coords: { top: "85%", left: "43%" },
    image: "image/devundara.png",
    iconType: "landmark",
    color: "#4338CA",
  },
  {
    id: "ruhuna",
    coords: { top: "73%", left: "66%" },
    image: "image/ruhuna.png",
    iconType: "landmark",
    color: "#84CC16",
  },
];

const SLOW_TRANSITION = { type: "spring", stiffness: 40, damping: 20 } as const;
const LOGO_COLOR = "#EAB308";

export default function SriLankaInteractiveMap() {
  const { t } = useTranslation();
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [currentBgIndex, setCurrentBgIndex] = useState(0);

  const activeConfig = destinationConfigs.find((d) => d.id === hoveredId);

  useEffect(() => {
    if (hoveredId) return;
    const timer = setInterval(() => {
      setCurrentBgIndex((prev) => (prev + 1) % destinationConfigs.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [hoveredId]);

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

    destinationConfigs.forEach((loc) => {
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
        animate={{ backgroundColor: hoveredId ? "#050505" : "#ffffff" }}
        className="relative w-full max-w-[1400px] h-[85vh] sm:h-[800px] overflow-hidden sm:rounded-[4rem] border shadow-2xl flex flex-col items-center justify-center transition-colors duration-1000"
        onClick={() => isMobile && setHoveredId(null)}
      >
        {/* LOGO SECTION */}
        <div className="absolute top-10 left-8 lg:left-16 z-40 pointer-events-none text-left">
          <AnimatePresence>
            {!hoveredId && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <h3 className="text-[10px] font-bold tracking-[0.5em] uppercase mb-2 text-gray-400">
                  {t("map.subtitle")}
                </h3>
                <h1 className="text-3xl lg:text-6xl font-black tracking-tighter leading-none text-black">
                  {t("map.title").split(" ").slice(0, 2).join(" ")} <br />{" "}
                  {t("map.title").split(" ").slice(2).join(" ")}
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
              key={hoveredId ? hoveredId : `slide-${currentBgIndex}`}
              initial={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
              animate={{
                opacity: hoveredId ? 0.75 : 0.4,
                scale: 1,
                filter: hoveredId
                  ? "blur(0px) saturate(1.4)"
                  : "blur(2px) saturate(0.8)",
              }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 1.5 }}
              className="absolute inset-0"
            >
              <Image
                src={
                  hoveredId
                    ? `/${activeConfig?.image}`
                    : `/${destinationConfigs[currentBgIndex].image}`
                }
                alt="BG"
                fill
                priority
                className="object-cover brightness-[0.7]"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/90" />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* MAP CONTAINER */}
        <motion.div
          ref={mapRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={() => setHoveredId(null)}
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          animate={{
            // මොබයිල් වලදී (isMobile) සිතියම වම් පැත්තට 25% ක් Shift කර Directory එකට ඉඩ සලසා ඇත
            left: isMobile ? "-25%" : "0%",
            x: hoveredId ? (isMobile ? "5%" : "22%") : "0%",
            scale: isMobile ? (hoveredId ? 0.55 : 1.1) : 1,
            y: isMobile ? (hoveredId ? -150 : 20) : 0,
          }}
          transition={SLOW_TRANSITION}
          className="relative w-full max-w-[310px] sm:max-w-[480px] lg:max-w-[650px] aspect-[4/5] z-10 flex items-center justify-center cursor-crosshair"
        >
          <div className="relative w-full h-full">
            <img
              src="/image/lk.svg"
              alt="Map"
              className={`relative z-10 w-full h-full object-contain transition-all duration-1000 pointer-events-none ${hoveredId ? "opacity-30 blur-[2px]" : "opacity-95"}`}
            />
            {destinationConfigs.map((loc) => (
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
                    {(hoveredId === loc.id || !hoveredId) && (
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
                      opacity: hoveredId && hoveredId !== loc.id ? 0.2 : 1,
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
            {hoveredId && activeConfig && (
              <motion.div
                key={hoveredId}
                initial={{ opacity: 0, x: isMobile ? 50 : -350 }}
                animate={{
                  opacity: 1,
                  // Info card එක සිතියම වමට ගිය පසු පෙනෙන සේ සකස් කර ඇත
                  x: isMobile ? "55%" : -450,
                  y: isMobile ? 280 : 0,
                }}
                exit={{ opacity: 0, x: isMobile ? 50 : -350 }}
                className="absolute z-[1000] pointer-events-none w-[80vw] max-w-[300px] bg-white/10 backdrop-blur-3xl border border-white/20 p-5 rounded-[2rem] text-white shadow-2xl text-left"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Compass size={12} style={{ color: activeConfig.color }} />
                    <span
                      style={{ color: activeConfig.color }}
                      className="font-bold text-[9px] tracking-widest uppercase italic"
                    >
                      {t(`map.destinations.${hoveredId}.tagline`)}
                    </span>
                  </div>
                  <h2 className="text-2xl font-black uppercase leading-none">
                    {t(`map.destinations.${hoveredId}.name`)}
                  </h2>
                  <p className="text-gray-200 text-[11px] leading-relaxed font-light">
                    {t(`map.destinations.${hoveredId}.description`)}
                  </p>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      {
                        icon: Wind,
                        label: t(`map.destinations.${hoveredId}.climate`),
                      },
                      {
                        icon: Zap,
                        label: t(`map.destinations.${hoveredId}.altitude`),
                      },
                      {
                        icon: Calendar,
                        label: t(`map.destinations.${hoveredId}.period`),
                      },
                    ].map((stat, idx) => (
                      <div
                        key={idx}
                        className="bg-white/10 p-1.5 rounded-xl border border-white/5 flex flex-col items-center"
                      >
                        <stat.icon
                          size={10}
                          style={{ color: activeConfig.color }}
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

        {/* SIDE DIRECTORY */}
        <div className="absolute z-50 flex pointer-events-auto right-0 top-1/2 -translate-y-1/2 flex-col gap-1 text-right max-h-[70vh] sm:max-h-[650px] overflow-y-auto pr-8 sm:pr-12 no-scrollbar items-end">
          <p
            className={`text-[9px] font-black tracking-[0.5em] uppercase mb-4 transition-opacity duration-500 mr-2 ${hoveredId ? "text-white/40" : "text-black/30"}`}
          >
            {t("map.directory")}
          </p>
          {destinationConfigs.map((loc) => (
            <motion.button
              key={`nav-${loc.id}`}
              onClick={(e) => {
                e.stopPropagation();
                setHoveredId(loc.id);
              }}
              onMouseEnter={() => !isMobile && setHoveredId(loc.id)}
              onMouseLeave={() => !isMobile && setHoveredId(null)}
              animate={{
                color:
                  hoveredId === loc.id
                    ? "#fff"
                    : hoveredId
                      ? "rgba(255,255,255,0.4)"
                      : "rgba(0,0,0,0.5)",
                scale: hoveredId === loc.id ? 1.05 : 1,
              }}
              className="group relative font-bold tracking-wider uppercase flex items-center justify-end outline-none text-[10px] py-1.5 whitespace-nowrap"
            >
              <span className="mr-3 text-right">
                {t(`map.destinations.${loc.id}.name`)}
              </span>
              <motion.div
                animate={{
                  scale: hoveredId === loc.id ? 1.5 : 1,
                  backgroundColor:
                    hoveredId === loc.id
                      ? loc.color
                      : hoveredId
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
            className={`w-7 h-7 rounded-lg flex items-center justify-center font-black text-[10px] transition-colors duration-500 ${hoveredId ? "text-black" : "bg-black text-white"}`}
            style={{
              backgroundColor: hoveredId ? activeConfig?.color : undefined,
            }}
          >
            SL
          </div>
          <p
            className={`text-[8px] font-black tracking-[0.3em] uppercase transition-colors duration-500 ${hoveredId ? "text-white/40" : "text-black/20"}`}
          >
            Heritage Archive v7
          </p>
        </div>
      </motion.section>
    </div>
  );
}
