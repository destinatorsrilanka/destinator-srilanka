"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Languages,
  Compass,
} from "lucide-react";

const carouselImages = [
  {
    src: "/image/sildenew.png",
    enTitle: "ISLAND BLISS",
    frTitle: "Vivez l'expérience du Sri Lanka",
    description:
      "Discover a unique island where diverse climates coexist 365 days a year. | Découvrez une île unique aux climats diversifiés.",
  },
  {
    src: "/image/clucture.png",
    enTitle: "Timeless Heritage",
    frTitle: "Héritage Intemporel",
    description:
      "Explore ancient cities and vibrant traditions of our rich history. | Explorez les cités anciennes et les traditions vibrantes.",
  },
  {
    src: "/image/k.png",
    enTitle: "Wild Adventures",
    frTitle: "Aventures Sauvages",
    description:
      "Encounter majestic wildlife in their pristine natural habitats. | Rencontrez une faune majestueuse dans son habitat naturel.",
  },
  {
    src: "/image/slidenew1.png",
    enTitle: "Golden Beaches",
    frTitle: "Plages Dorées",
    description:
      "Relax on the sun-kissed shores and crystal clear waters. | Détendez-vous sur les rivages ensoleillés.",
  },
];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + carouselImages.length) % carouselImages.length,
    );
  };

  useEffect(() => {
    const timer = setInterval(handleNext, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black font-montserrat">
      {/* --- Background Slider --- */}
      <div className="absolute inset-0 z-0">
        {carouselImages.map((item, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentIndex
                ? "opacity-100 scale-110"
                : "opacity-0 scale-100"
            }`}
            style={{
              transition: "opacity 1.5s ease-in-out, transform 10s linear",
            }}
          >
            <Image
              src={item.src}
              alt="Sri Lanka Travel"
              fill
              className="object-cover brightness-[0.45]"
              priority
            />
          </div>
        ))}
      </div>

      {/* --- Main Content Area --- */}
      <div className="relative z-30 flex flex-col justify-center min-h-screen px-6 md:px-12 lg:px-24 pt-20 md:pt-0">
        <div className="max-w-5xl">
          {/* --- LOGO & SLOGAN GROUP (Positioned closer to the tag below) --- */}
          <div className="mb-4 animate-slide-up">
            {/* --- ANIMATED TEXT LOGO --- */}
            <div className="relative group w-fit mb-3">
              <div className="relative px-6 py-3 bg-white/5 backdrop-blur-md border border-white/10 overflow-hidden rounded-xl shadow-2xl">
                <span className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-destinator-orange to-transparent -translate-x-full animate-border-top-new"></span>
                <span className="absolute top-0 right-0 w-[2px] h-full bg-gradient-to-b from-transparent via-destinator-orange to-transparent -translate-y-full animate-border-right-new"></span>
                <span className="absolute bottom-0 right-0 w-full h-[2px] bg-gradient-to-l from-transparent via-destinator-orange to-transparent translate-x-full animate-border-bottom-new"></span>
                <span className="absolute bottom-0 left-0 w-[2px] h-full bg-gradient-to-t from-transparent via-destinator-orange to-transparent translate-y-full animate-border-left-new"></span>

                <h3 className="text-destinator-orange text-2xl md:text-4xl lg:text-5xl font-black tracking-[0.15em] md:tracking-[0.2em] uppercase italic flex items-center gap-0">
                  DESTINAT
                  <span className="relative inline-flex items-center justify-center mx-1">
                    <span className="opacity-0">O</span>
                    <Compass className="absolute w-7 h-7 md:w-11 md:h-11 animate-compass-rotate drop-shadow-[0_0_8px_rgba(234,179,8,0.5)]" />
                  </span>
                  R
                  <span className="ml-3 w-2 h-2 md:w-3 md:h-3 bg-destinator-orange rounded-full animate-pulse shadow-[0_0_15px_#EAB308]"></span>
                </h3>
              </div>
            </div>

            {/* --- SLOGAN (Nature Culture Adventure) --- */}
            <div
              className="flex items-center gap-3 px-2 opacity-0 animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              <span className="text-white/80 text-[10px] md:text-xs lg:text-sm font-bold tracking-[0.3em] uppercase">
                Nature
              </span>
              <span className="w-1.5 h-1.5 bg-destinator-orange rounded-full"></span>
              <span className="text-white/80 text-[10px] md:text-xs lg:text-sm font-bold tracking-[0.3em] uppercase">
                Culture
              </span>
              <span className="w-1.5 h-1.5 bg-destinator-orange rounded-full"></span>
              <span className="text-white/80 text-[10px] md:text-xs lg:text-sm font-bold tracking-[0.3em] uppercase">
                Adventure
              </span>
            </div>
          </div>

          {/* French Priority Tag */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-lg border border-white/20 px-4 py-2 rounded-full mb-8 animate-fade-in shadow-xl w-fit">
            <div className="flex gap-1 shrink-0">
              <span className="w-2 h-4 bg-[#002395]"></span>
              <span className="w-2 h-4 bg-white"></span>
              <span className="w-2 h-4 bg-[#ED2939]"></span>
            </div>
            <p className="text-white text-[10px] md:text-xs font-bold tracking-widest uppercase">
              Spécialiste des Circuits Francophones
            </p>
          </div>

          {/* Titles */}
          <div className="space-y-1 md:space-y-2 mb-6 overflow-visible">
            <h2 className="text-destinator-orange text-base md:text-xl lg:text-2xl font-bold tracking-tight animate-slide-up italic">
              {carouselImages[currentIndex]?.frTitle}
            </h2>
            <h1 className="text-white text-3xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tighter leading-tight animate-slide-up uppercase whitespace-nowrap">
              {carouselImages[currentIndex]?.enTitle}
            </h1>
          </div>

          <p className="text-gray-300 text-xs md:text-base lg:text-lg leading-relaxed max-w-2xl mb-8 md:mb-10 animate-fade-in-up">
            {carouselImages[currentIndex]?.description}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 items-center animate-fade-in-up">
            <button className="bg-destinator-orange hover:bg-white text-white hover:text-black px-6 md:px-10 py-3 md:py-4 rounded-full font-black transition-all duration-300 flex items-center gap-3 shadow-lg group text-xs md:text-base">
              EXPLORE NOW{" "}
              <ArrowRight
                size={18}
                className="group-hover:translate-x-2 transition-transform"
              />
            </button>

            <div className="flex items-center gap-2 md:gap-3 px-3 py-1.5 md:px-4 md:py-2 border border-white/20 rounded-xl bg-white/5 backdrop-blur-sm">
              <Languages size={16} className="text-blue-400 shrink-0" />
              <span className="text-white text-[9px] md:text-xs font-medium uppercase tracking-wider italic">
                Guide Francophone
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* --- Navigation Controls --- */}
      <div className="absolute bottom-10 right-10 lg:right-24 z-40 hidden min-[1161px]:flex flex-col items-center gap-4">
        <div className="flex gap-4 p-3 bg-black/30 backdrop-blur-xl rounded-[2.5rem] border border-white/10 shadow-2xl">
          {carouselImages.map((item, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`relative w-24 h-14 xl:w-28 xl:h-16 rounded-2xl overflow-hidden transition-all duration-500 border-2 ${
                index === currentIndex
                  ? "border-destinator-orange scale-105"
                  : "border-transparent opacity-40 hover:opacity-100"
              }`}
            >
              <Image src={item.src} alt="nav" fill className="object-cover" />
            </button>
          ))}
        </div>
        <div className="flex gap-4">
          <button
            onClick={handlePrev}
            className="p-3 md:p-4 rounded-full border border-white/20 bg-black/50 hover:bg-destinator-orange text-white transition-all backdrop-blur-md group"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={handleNext}
            className="p-3 md:p-4 rounded-full border border-white/20 bg-black/50 hover:bg-destinator-orange text-white transition-all backdrop-blur-md group"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Pagination */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-2 min-[1161px]:hidden z-40">
        {carouselImages.map((_, i) => (
          <div
            key={i}
            className={`h-1.5 w-6 rounded-full transition-all ${i === currentIndex ? "bg-destinator-orange w-10" : "bg-white/30"}`}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes border-top-new {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        @keyframes border-right-new {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(100%);
          }
        }
        @keyframes border-bottom-new {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        @keyframes border-left-new {
          0% {
            transform: translateY(100%);
          }
          100% {
            transform: translateY(-100%);
          }
        }
        .animate-border-top-new {
          animation: border-top-new 3s infinite linear;
        }
        .animate-border-right-new {
          animation: border-right-new 3s infinite linear 0.75s;
        }
        .animate-border-bottom-new {
          animation: border-bottom-new 3s infinite linear 1.5s;
        }
        .animate-border-left-new {
          animation: border-left-new 3s infinite linear 2.25s;
        }

        @keyframes compass-rotate {
          0%,
          100% {
            transform: rotate(0deg);
          }
          25% {
            transform: rotate(15deg);
          }
          75% {
            transform: rotate(-15deg);
          }
        }
        .animate-compass-rotate {
          animation: compass-rotate 6s infinite ease-in-out;
        }

        @keyframes slide-up {
          from {
            transform: translateY(30px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slide-up {
          animation: slide-up 0.8s cubic-bezier(0.19, 1, 0.22, 1) forwards;
        }
        .animate-fade-in {
          animation: fadeIn 1.5s ease-out forwards;
        }
        .animate-fade-in-up {
          animation: fadeInUp 1s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
