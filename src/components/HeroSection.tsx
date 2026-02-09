"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { ArrowRight, ChevronLeft, ChevronRight, Compass } from "lucide-react";

const carouselImages = [
  {
    id: "s2",
    src: "/image/clucture.png",
    enTitle: "Lost Royalty Kandy",
    frTitle: "Bonbons de la royauté perdue",
    description:
      "Sri Lanka's final monarchy; fell to the British in 1815. | Dernière monarchie du Sri Lanka ; elle est tombée aux mains des Britanniques en 1815.",
  },
  {
    id: "s5",
    src: "/image/hero-slide.jpeg",
    enTitle: "Timeless Heritage",
    frTitle: "Héritage Intemporel",
    description:
      "Explore ancient cities and vibrant traditions of our rich history. | Explorez les cités anciennes et les traditions vibrantes. ",
  },
  {
    id: "s6",
    src: "/image/hero-slide2.png",
    enTitle: "Divine chapter Atlantis",
    frTitle: "Chapitre divin Atlantide",
    description:
      " Lost city,Geography,First Civilization inhabitants,City of Gods. | Cité perdue, Géographie, Premiers habitants de la civilisation, Cité des dieux.",
  },
  {
    id: "s1",
    src: "/image/sildenew.png",
    enTitle: "ISLAND BLISS",
    frTitle: "Vivez l’expérience Sri lankaise",
    description:
      "Discover a unique island where diverse climates coexist 365 days a year. | Découvrez une île unique aux climats diversifiés.",
  },

  {
    id: "s4",
    src: "/image/slidenew1.png",
    enTitle: "Sunkissed Shores",
    frTitle: " Eaux Cristallines ",
    description:
      "Relax on the sun-kissed shores and crystal clear waters. | Détendez-vous sur les rivages ensoleillés.",
  },
  {
    id: "s3",
    src: "/image/k.png",
    enTitle: "Wild Adventures",
    frTitle: "Des adventures sauvages ",
    description:
      "Encounter majestic wildlife in their pristine natural habitats. | Rencontrez une faune majestueuse dalam son habitat naturel.",
  },

  {
    id: "s7",
    src: "/image/hero-slide3.png",
    enTitle: "Kingdom of RAVANA",
    frTitle: "Royaume du RAVANA",
    description:
      "A legendary, high-tech golden kingdom; modern Sri Lanka. |Un royaume doré légendaire et de haute technologie ; le Sri Lanka moderne",
  },
];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleNext = () =>
    setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
  const handlePrev = () =>
    setCurrentIndex(
      (prev) => (prev - 1 + carouselImages.length) % carouselImages.length,
    );

  return (
    <section className="relative min-h-[700px] h-screen w-full bg-black font-montserrat overflow-hidden flex flex-col">
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes rotate-compass { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes border-top-new { 0% { transform: translateX(-100%); } 100% { transform: translateX(100%); } }
        @keyframes border-bottom-new { 0% { transform: translateX(100%); } 100% { transform: translateX(-100%); } }
        @keyframes slide-up { from { transform: translateY(20px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
        .animate-rotate-now { animation: rotate-compass 10s infinite linear !important; }
        .animate-border-top-new { animation: border-top-new 3s infinite linear; }
        .animate-border-bottom-new { animation: border-bottom-new 3s infinite linear 1.5s; }
        .animate-slide-up { animation: slide-up 0.8s forwards; }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `,
        }}
      />

      {/* Background Images */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {carouselImages.map((item, index) => (
          <div
            key={item.id}
            className={`absolute inset-0 transition-opacity duration-[1500ms] ease-in-out ${index === currentIndex ? "opacity-100 scale-110" : "opacity-0 scale-100"}`}
            style={{
              transform: index === currentIndex ? "scale(1.1)" : "scale(1)",
              transition: "opacity 1.5s ease-in-out, transform 8s linear",
            }}
          >
            <Image
              src={item.src}
              alt={item.enTitle}
              fill
              className="object-cover brightness-[0.45]"
              priority={index === 0}
            />
          </div>
        ))}
      </div>

      <div className="relative z-30 flex-grow w-full flex items-center px-6 md:px-12 lg:px-24">
        {/* Changed justify-center (mobile) to justify-between (lg) */}
        <div className="flex flex-col justify-center lg:justify-between h-full w-full max-w-7xl mx-auto pt-12 pb-6">
          {/* Top Content Area - Centered on mobile, bottom-aligned on lg */}
          <div className="animate-slide-up flex flex-col items-start w-full lg:w-3/4 lg:mt-20">
            <div className="flex flex-col items-start gap-3 mb-6">
              <div className="relative w-fit">
                <div className="relative px-5 py-3 md:px-8 md:py-4 bg-white/5 backdrop-blur-md border border-white/10 overflow-hidden rounded-2xl flex flex-col items-center">
                  <span className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-orange-500 to-transparent -translate-x-full animate-border-top-new"></span>
                  <span className="absolute bottom-0 right-0 w-full h-[2px] bg-gradient-to-l from-transparent via-orange-500 to-transparent translate-x-full animate-border-bottom-new"></span>
                  <h3 className="text-orange-500 text-2xl md:text-3xl lg:text-4xl font-black tracking-[0.15em] uppercase italic flex items-center gap-0 leading-none">
                    DESTINAT
                    <span className="relative inline-flex items-center justify-center mx-1">
                      <span className="opacity-0">O</span>
                      <Compass
                        className={`absolute w-7 h-7 md:w-9 md:h-9 ${isLoaded ? "animate-rotate-now" : ""}`}
                      />
                    </span>
                    R
                  </h3>
                </div>
              </div>
              <div className="inline-flex items-center gap-2 bg-orange-500/20 backdrop-blur-lg border border-orange-500/30 px-3 py-1.5 rounded-xl">
                <div className="flex gap-1 shrink-0">
                  <span className="w-1 h-3 bg-[#002395]"></span>
                  <span className="w-1 h-3 bg-white"></span>
                  <span className="w-1 h-3 bg-[#ED2939]"></span>
                </div>
                <p className="text-white text-[10px] font-black tracking-widest uppercase italic">
                  Spécialiste des Circuits Francophones
                </p>
              </div>
            </div>

            <div className="mb-8 w-full">
              <h2 className="text-orange-500 text-lg md:text-xl font-bold italic mb-2 uppercase tracking-wide">
                {carouselImages[currentIndex].frTitle}
              </h2>
              <h1 className="text-white text-[2.2rem] sm:text-[3rem] md:text-5xl lg:text-6xl xl:text-7xl font-black uppercase leading-tight mb-4 whitespace-nowrap">
                {carouselImages[currentIndex].enTitle}
              </h1>
              <p className="text-gray-300 text-sm md:text-lg max-w-2xl leading-relaxed opacity-90">
                {carouselImages[currentIndex].description}
              </p>
            </div>

            <button
              onClick={() =>
                document
                  .getElementById("heritage")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="bg-orange-500 hover:bg-white text-white hover:text-black px-10 py-4 rounded-full font-black transition-all flex items-center gap-2 text-lg shadow-2xl group"
            >
              EXPLORE NOW{" "}
              <ArrowRight
                size={22}
                className="group-hover:translate-x-2 transition-transform"
              />
            </button>
          </div>

          {/* Bottom Right Slider & Nav - Hidden on mobile, flex on lg */}
          <div className="hidden lg:flex flex-col items-center gap-4 mt-auto self-end w-fit">
            <div className="flex items-center gap-3 p-3 bg-black/40 backdrop-blur-xl rounded-[2rem] border border-white/10 shadow-2xl max-w-full overflow-x-auto no-scrollbar">
              {carouselImages.map((item, index) => (
                <button
                  key={`thumb-${item.id}`}
                  onClick={() => setCurrentIndex(index)}
                  className={`relative flex-shrink-0 w-16 h-10 md:w-20 md:h-12 lg:w-24 lg:h-14 rounded-xl overflow-hidden border-2 transition-all duration-500 shadow-md ${index === currentIndex ? "border-orange-500 scale-105 ring-4 ring-orange-500/20" : "border-transparent opacity-50 hover:opacity-100"}`}
                >
                  <Image
                    src={item.src}
                    alt="nav"
                    fill
                    className="object-cover"
                  />
                  {index === currentIndex && (
                    <div className="absolute inset-0 bg-orange-500/10 animate-pulse" />
                  )}
                </button>
              ))}
            </div>

            <div className="flex gap-4">
              <button
                onClick={handlePrev}
                className="p-3 rounded-full border border-white/10 bg-black/50 hover:bg-orange-500 text-white transition-all shadow-xl backdrop-blur-md active:scale-95 group"
              >
                <ChevronLeft
                  size={20}
                  className="group-hover:-translate-x-1 transition-transform"
                />
              </button>
              <button
                onClick={handleNext}
                className="p-3 rounded-full border border-white/10 bg-black/50 hover:bg-orange-500 text-white transition-all shadow-xl backdrop-blur-md active:scale-95 group"
              >
                <ChevronRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
