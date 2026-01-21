"use client";

export default function MapSection() {
  const pins = [
    { name: "Anuradhapura", class: "anuradhapura" },
    { name: "Sigiriya", class: "sigiriya" },
    { name: "Kandy", class: "kandy" },
    { name: "Galle", class: "Galle" },
  ];

  return (
    <section className="map-section bg-white py-20">
      <div className="world-map relative inline-block">
        <h1 className="text-black mb-10">EXPLORE SRI LANKA</h1>
        <img src="/image/map.png" alt="Sri Lanka Map" className="mx-auto" />

        {pins.map((pin) => (
          <div key={pin.name} className={`pin ${pin.class}`}>
            <span>{pin.name}</span>
          </div>
        ))}
      </div>

      <div className="h-slider-main mt-20">
        <div className="h-slider bg-destinator-black py-10">
          <div className="h-slider-track animate-scroll-left flex">
            {/* Slider Images - ඔබගේ image folder එකේ ඇති පින්තූර 10-15ක් මෙතැනට දාන්න */}
            {[1, 2, 3, 4, 5, 6, 1, 2, 3, 4].map((img, index) => (
              <div key={index} className="slide min-w-[220px] h-[180px] px-2">
                <img
                  src={`/image/gallery${img}.jpg`}
                  className="w-full h-full object-cover rounded-xl"
                  alt="Gallery"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
