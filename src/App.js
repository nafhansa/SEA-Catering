import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import GlobeSection from "./components/GlobeSection";
import FaqContactButton from "./components/FaqContactButton";
import TestimonialCarousel from "./components/TestimonialCarousel";
import Footer from "./components/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function App() {
  return (
    <div className="min-h-screen bg-[#FFF1CA]">
      <Navbar />
      <HeroSection />
      <GlobeSection />
      <FaqContactButton />
      <TestimonialCarousel />
      <Footer />
    </div>
  );
}

export default App;
