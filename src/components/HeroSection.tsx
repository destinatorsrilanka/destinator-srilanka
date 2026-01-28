"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { ArrowRight, ChevronLeft, ChevronRight, Compass } from "lucide-react";

const carouselImages = [
  {
    src: "/image/sildenew.png",
    enTitle: "ISLAND BLISS",
    frTitle: "Vivez l’expérience Sri lankaise",
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
    frTitle: "Des aventures sauvages ",
    description:
      "Encounter majestic wildlife in their pristine natural habitats. | Rencontrez une faune majestueuse dans son habitat naturel.",
  },
  {
    src: "/image/slidenew1.png",
    enTitle: "Golden Beaches",
    frTitle: "Des plages dorées ",
    description:
      "Relax on the sun-kissed shores and crystal clear waters. | Détendez-vous sur les rivages ensoleillés.",
  },
];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const handleNext = () =>
    setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
  const handlePrev = () =>
    setCurrentIndex(
      (prev) => (prev - 1 + carouselImages.length) % carouselImages.length,
    );

  return (
    <section className="relative min-h-screen w-full bg-black font-montserrat flex flex-col overflow-x-hidden">
      {/* Animation Keyframes Injection */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes rotate-compass { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes border-top-new { 0% { transform: translateX(-100%); } 100% { transform: translateX(100%); } }
        @keyframes border-right-new { 0% { transform: translateY(-100%); } 100% { transform: translateY(100%); } }
        @keyframes border-bottom-new { 0% { transform: translateX(100%); } 100% { transform: translateX(-100%); } }
        @keyframes border-left-new { 0% { transform: translateY(100%); } 100% { transform: translateY(-100%); } }
        @keyframes slide-up { from { transform: translateY(20px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
        
        .animate-rotate-now { animation: rotate-compass 10s infinite linear !important; }
        .animate-border-top-new { animation: border-top-new 3s infinite linear; }
        .animate-border-right-new { animation: border-right-new 3s infinite linear 0.75s; }
        .animate-border-bottom-new { animation: border-bottom-new 3s infinite linear 1.5s; }
        .animate-border-left-new { animation: border-left-new 3s infinite linear 2.25s; }
        .animate-slide-up { animation: slide-up 0.8s forwards; }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
      `,
        }}
      />

      {/* Background Slider */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
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
              alt="Travel"
              fill
              className="object-cover brightness-[0.45]"
              priority
            />
          </div>
        ))}
      </div>

      {/* --- Main UI Layer (Centered) --- */}
      <div className="relative z-30 flex flex-col flex-1 px-6 md:px-12 lg:px-24 justify-center overflow-x-hidden scrollbar-hide">
        {/* Content Group */}
        <div className="w-full flex flex-col">
          <div className="max-w-full md:max-w-5xl animate-slide-up py-10">
            <div className="flex flex-col md:flex-row md:items-end gap-4 md:gap-8 mb-6">
              {/* Logo Area */}
              <div className="relative w-fit shrink-0">
                <div className="relative px-5 py-3 md:px-8 md:py-4 bg-white/5 backdrop-blur-md border border-white/10 overflow-hidden rounded-2xl flex flex-col items-center">
                  <span className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-orange-500 to-transparent -translate-x-full animate-border-top-new"></span>
                  <span className="absolute top-0 right-0 w-[2px] h-full bg-gradient-to-b from-transparent via-orange-500 to-transparent -translate-y-full animate-border-right-new"></span>
                  <span className="absolute bottom-0 right-0 w-full h-[2px] bg-gradient-to-l from-transparent via-orange-500 to-transparent translate-x-full animate-border-bottom-new"></span>
                  <span className="absolute bottom-0 left-0 w-[2px] h-full bg-gradient-to-t from-transparent via-orange-500 to-transparent translate-y-full animate-border-left-new"></span>

                  <h3 className="text-orange-500 text-[2.5vh] md:text-3xl lg:text-4xl font-black tracking-[0.15em] md:tracking-[0.2em] uppercase italic flex items-center gap-0 leading-none mb-2">
                    DESTINAT
                    <span className="relative inline-flex items-center justify-center mx-1">
                      <span className="opacity-0">O</span>
                      <Compass
                        className={`absolute w-[2.2vh] h-[2.2vh] md:w-9 md:h-9 ${isLoaded ? "animate-rotate-now" : ""}`}
                      />
                    </span>
                    R
                  </h3>

                  <div className="flex items-center justify-center gap-2 md:gap-3 w-full border-t border-white/10 pt-2">
                    {["Nature", "Culture", "Adventure"].map((text, i) => (
                      <div
                        key={text}
                        className="flex items-center gap-2 md:gap-3"
                      >
                        <span className="text-white/90 text-[0.7vh] md:text-[9px] font-bold tracking-[0.2em] uppercase whitespace-nowrap">
                          {text}
                        </span>
                        {i < 2 && (
                          <span className="w-1 h-1 bg-orange-500 rounded-full"></span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* French Badge */}
              <div className="inline-flex items-center gap-2 bg-orange-500/20 backdrop-blur-lg border border-orange-500/30 px-3 py-1.5 rounded-xl mb-1 h-fit w-fit shrink-0">
                <div className="flex gap-1 shrink-0">
                  <span className="w-1.5 h-3 bg-[#002395]"></span>
                  <span className="w-1.5 h-3 bg-white"></span>
                  <span className="w-1.5 h-3 bg-[#ED2939]"></span>
                </div>
                <p className="text-white text-[0.9vh] md:text-[10px] font-black tracking-widest uppercase italic leading-tight whitespace-nowrap">
                  Spécialiste des Circuits Francophones
                </p>
              </div>
            </div>

            <div className="mb-4">
              <h2 className="text-orange-500 text-[1.4vh] md:text-lg lg:text-xl font-bold italic mb-1">
                {carouselImages[currentIndex]?.frTitle}
              </h2>
              <h1 className="text-white text-[4vh] md:text-5xl lg:text-6xl xl:text-7xl font-black uppercase leading-[1.1]">
                {carouselImages[currentIndex]?.enTitle}
              </h1>
            </div>

            <p className="text-gray-300 text-[1.6vh] md:text-base lg:text-lg max-w-2xl mb-6 line-clamp-3 md:line-clamp-none">
              {carouselImages[currentIndex]?.description}
            </p>

            <button className="bg-orange-500 hover:bg-white text-white hover:text-black px-6 py-2.5 rounded-full font-black transition-all flex items-center gap-2 text-[1.2vh] md:text-base group w-fit">
              EXPLORE NOW{" "}
              <ArrowRight
                size={18}
                className="group-hover:translate-x-2 transition-transform"
              />
            </button>
          </div>
        </div>

        {/* Navigation Section */}
        <div className="pb-8 md:pb-12 shrink-0">
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-end gap-6">
            <div className="flex md:hidden gap-2 mb-2">
              {carouselImages.map((_, i) => (
                <div
                  key={i}
                  className={`w-2 h-2 rounded-full transition-all ${i === currentIndex ? "bg-orange-500 w-6" : "bg-white/20"}`}
                />
              ))}
            </div>

            <div className="flex flex-col items-center gap-4 scale-85 md:scale-100">
              <div className="flex gap-3 p-2 bg-black/40 backdrop-blur-xl rounded-[2.5rem] border border-white/20">
                {carouselImages.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`relative w-14 h-9 md:w-24 md:h-14 lg:w-28 lg:h-16 rounded-xl overflow-hidden border-2 transition-all ${index === currentIndex ? "border-orange-500 scale-105" : "border-transparent opacity-40"}`}
                  >
                    <Image
                      src={item.src}
                      alt="nav"
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
              <div className="flex gap-4">
                <button
                  onClick={handlePrev}
                  className="p-2.5 rounded-full border border-white/20 bg-black/50 hover:bg-orange-500 text-white transition-colors"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={handleNext}
                  className="p-2.5 rounded-full border border-white/20 bg-black/50 hover:bg-orange-500 text-white transition-colors"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
