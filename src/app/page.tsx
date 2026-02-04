import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MapSection from "@/components/MapSection";
import InquiryForm from "@/components/InquiryForm";
import Footer from "@/components/Footer";
import Aboutus from "@/components/aboutus";
import InfinitePhotoStrip from "@/components/InfinitePhotoStrip";
import ClimateMap from "@/components/ClimateMap";
import InvestInviteStrip from "@/components/InvestInviteStrip";
import GreenCarpetWidget from "@/components/GreenCarpetWidget";
import InquiryModal from "@/components/InquiryModal";
import HighlightSection from "@/components/HighlightSection";
import ProtectedAreas from "@/components/ProtectedAreas";
import GreatCivilizationStrip from "@/components/GreatCivilizationStrip";
import HighlandWaters from "@/components/HighlandWaters";
import AgroTourism from "@/components/AgroTourism";

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

      <HighlightSection />
      <HighlandWaters />
      <section id="climate">
        <ClimateMap />
      </section>

      <AgroTourism />
      <GreatCivilizationStrip />
      <GreenCarpetWidget />

      <ProtectedAreas />

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
