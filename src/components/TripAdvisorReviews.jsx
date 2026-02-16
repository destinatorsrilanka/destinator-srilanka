import Script from "next/script";

const TripAdvisorReviews = () => {
  return (
    <section className="tripadvisor-reviews-container py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          What Our Clients Say on TripAdvisor
        </h2>

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

        {/* Localhost එකේ නොපෙනේ නම් පෙන්වන පණිවිඩය (Optional) */}
        <p className="text-xs text-center text-gray-400 mt-4">
          Note: Reviews might not appear in local development. Check your live
          site at destinator.lk
        </p>
      </div>
    </section>
  );
};

export default TripAdvisorReviews;
