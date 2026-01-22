"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { ArrowRight, ChevronLeft, ChevronRight, Languages } from "lucide-react";

const carouselImages = [
  {
    src: "/image/sildenew.png",
    enTitle: "Experience Sri Lanka",
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
      <div className="relative z-30 flex flex-col justify-center min-h-screen px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl">
          {/* French Priority Tag */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-lg border border-white/20 px-4 py-2 rounded-full mb-6 animate-fade-in shadow-xl w-fit">
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
          <div className="space-y-2 mb-6">
            <h2 className="text-destinator-orange text-lg md:text-2xl font-bold tracking-tight animate-slide-up italic">
              {carouselImages[currentIndex]?.frTitle}
            </h2>
            <h1 className="text-white text-4xl md:text-6xl lg:text-8xl font-black tracking-tighter leading-[1.1] animate-slide-up">
              {carouselImages[currentIndex]?.enTitle}
            </h1>
          </div>

          <p className="text-gray-300 text-sm md:text-lg leading-relaxed max-w-2xl mb-10 animate-fade-in-up">
            {carouselImages[currentIndex]?.description}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 items-center animate-fade-in-up">
            <button className="bg-destinator-orange hover:bg-white text-white hover:text-black px-8 md:px-10 py-3 md:py-4 rounded-full font-black transition-all duration-300 flex items-center gap-3 shadow-lg group text-sm md:text-base">
              EXPLORE NOW{" "}
              <ArrowRight
                size={20}
                className="group-hover:translate-x-2 transition-transform"
              />
            </button>

            <div className="flex items-center gap-3 px-4 py-2 border border-white/20 rounded-xl bg-white/5 backdrop-blur-sm">
              <Languages size={18} className="text-blue-400 shrink-0" />
              <span className="text-white text-[10px] md:text-xs font-medium uppercase tracking-wider italic">
                Guide Francophone
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* --- Thumbnails and Arrows Container --- */}
      {/* 1160px ට අඩු වන විට හයිඩ් වේ (hidden), 1161px සිට පෙන්වයි (min-[1161px]:flex) */}
      <div className="absolute bottom-10 right-10 lg:right-24 z-40 hidden min-[1161px]:flex flex-col items-center gap-4">
        {/* Thumbnails Area */}
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

        {/* Navigation Arrows - Centered under Thumbnails */}
        <div className="flex gap-4">
          <button
            onClick={handlePrev}
            className="p-3 md:p-4 rounded-full border border-white/20 bg-black/50 hover:bg-destinator-orange text-white transition-all backdrop-blur-md group"
          >
            <ChevronLeft
              size={24}
              className="group-hover:-translate-x-1 transition-transform"
            />
          </button>
          <button
            onClick={handleNext}
            className="p-3 md:p-4 rounded-full border border-white/20 bg-black/50 hover:bg-destinator-orange text-white transition-all backdrop-blur-md group"
          >
            <ChevronRight
              size={24}
              className="group-hover:translate-x-1 transition-transform"
            />
          </button>
        </div>
      </div>

      {/* Mobile Dot Indicators (1160px ට අඩු වූ විට පෙන්වයි) */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-2 min-[1161px]:hidden z-40">
        {carouselImages.map((_, i) => (
          <div
            key={i}
            className={`h-1.5 w-6 rounded-full transition-all ${i === currentIndex ? "bg-destinator-orange w-10" : "bg-white/30"}`}
          />
        ))}
      </div>

      <style jsx>{`
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
          animation: fadeInUp 1s ease-out 0.4s forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
}
