import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import GlobeSection from "./components/GlobeSection";
import FaqContactButton from "./components/FaqContactButton";
import TestimonialCarousel from "./components/TestimonialCarousel";
import Footer from "./components/Footer";
import MealsPage from "./pages/MealsPage"; 

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function HomePage() {
  return (
    <>
      <HeroSection />
      <GlobeSection />
      <FaqContactButton />
      <TestimonialCarousel />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#FFF1CA]">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/meals" element={<MealsPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
