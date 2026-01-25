import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MapSection from "@/components/MapSection";
import InquiryForm from "@/components/InquiryForm";
import Footer from "@/components/Footer";
import Aboutus from "@/components/aboutus";
import InfinitePhotoStrip from "@/components/InfinitePhotoStrip";

export default function Home() {
  return (
    <>
      <Navbar />

      <section id="home">
        <HeroSection />
      </section>

      <section id="heritage">
        <MapSection />
      </section>

      <section id="about">
        <Aboutus />
      </section>

      <InfinitePhotoStrip />

      <section id="contact">
        <InquiryForm />
      </section>

      <Footer />
    </>
  );
}
