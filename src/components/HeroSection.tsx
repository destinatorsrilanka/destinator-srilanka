"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

const carouselImages = [
  {
    src: "/image/sildenew.png",
    description:
      "Sri Lanka is a unique island where several climatic conditions exist 365 days a year & can be reached in less than 3 hours",
  },
  {
    src: "/image/clucture.png",
    description:
      "Discover ancient cities, vibrant traditions, and spiritual sites that have shaped the island's rich history.",
  },
  {
    src: "/image/k.png",
    description:
      "Encounter majestic elephants, elusive leopards, and diverse birdlife in their natural habitats.",
  },
  {
    src: "/image/slidenew1.png",
    description:
      "Encounter majestic elephants, elusive leopards, and diverse birdlife in their natural habitats.",
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
    const timer = setInterval(handleNext, 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black font-montserrat">
      {/* Background Images */}
      <div className="absolute inset-0">
        {carouselImages.map((item, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={item.src}
              alt="Background"
              fill
              className="object-cover brightness-[0.6]"
              priority
            />
          </div>
        ))}
      </div>

      {/* Left Content Area (Logo, Text, Button) */}
      <div className="absolute top-[30%] left-12 md:left-24 z-30 max-w-xl">
        <div className="animate-showContent">
          <Image
            src="/image/Logo.png"
            alt="Sri Lanka Time Logo"
            width={250}
            height={150}
            className="object-contain"
          />
        </div>
        <p className="text-white text-lg mt-6 leading-relaxed font-medium animate-showContent [animation-delay:0.2s] text-shadow-md">
          {carouselImages[currentIndex].description}
        </p>
        <button className="mt-8 bg-white text-black px-10 py-3 rounded-xl font-bold hover:bg-destinator-orange hover:text-white transition-all uppercase tracking-widest animate-showContent [animation-delay:0.4s] shadow-lg">
          See More
        </button>
      </div>

      {/* Bottom Area: Thumbnails with Arrows Centered Underneath */}
      <div className="absolute bottom-10 right-12 md:right-24 z-40 flex flex-col items-center gap-4">
        {/* Thumbnails Row */}
        <div className="flex gap-4">
          {carouselImages.map((item, index) => (
            <div
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`relative w-24 h-32 md:w-40 md:h-24 cursor-pointer rounded-2xl overflow-hidden border-2 transition-all duration-300 ${
                index === currentIndex
                  ? "border-white scale-105 shadow-2xl"
                  : "border-transparent opacity-50"
              }`}
            >
              <Image
                src={item.src}
                alt="thumbnail"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/20 hover:bg-transparent transition-colors"></div>
            </div>
          ))}
        </div>

        {/* Arrows Row - හරියටම Thumbnails වලට යටින් මැද්දට */}
        <div className="flex gap-4">
          <button
            onClick={handlePrev}
            className="w-11 h-11 rounded-full bg-white/20 hover:bg-white hover:text-black text-white flex items-center justify-center backdrop-blur-md transition-all border border-white/30"
          >
            <span className="text-xl">❮</span>
          </button>
          <button
            onClick={handleNext}
            className="w-11 h-11 rounded-full bg-white/20 hover:bg-white hover:text-black text-white flex items-center justify-center backdrop-blur-md transition-all border border-white/30"
          >
            <span className="text-xl">❯</span>
          </button>
        </div>
      </div>
    </section>
  );
}
