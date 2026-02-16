import Script from "next/script";

const TripAdvisorReviews = () => {
  return (
    <section className="tripadvisor-reviews-container py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Next.js Script Loader */}
        <Script
          src="https://elfsightcdn.com/platform.js"
          strategy="lazyOnload"
        />

        {/* Elfsight Widget Div */}
        <div
          className="elfsight-app-ded5b2d8-93e3-4068-b23e-9ecb858ebff4"
          data-elfsight-app-lazy
        ></div>
      </div>
    </section>
  );
};

export default TripAdvisorReviews;
