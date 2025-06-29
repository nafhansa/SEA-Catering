import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import GlobeSection from "./components/GlobeSection";
import FaqContactButton from "./components/FaqContactButton";
import TestimonialCarousel from "./components/TestimonialCarousel";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
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
