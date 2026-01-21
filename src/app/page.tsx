import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";

import MapSection from "@/components/MapSection";
import InquiryForm from "@/components/InquiryForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />

      <MapSection />
      <InquiryForm />
      <Footer />
    </>
  );
}
