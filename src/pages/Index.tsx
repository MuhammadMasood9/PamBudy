import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/landing/Navbar";
import MarqueeBanner from "@/components/landing/MarqueeBanner";
import HeroSection from "@/components/landing/HeroSection";
import TopCategoriesSection from "@/components/landing/TopCategoriesSection";
import TopDiscountedSection from "@/components/landing/TopDiscountedSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import ScreenshotsSection from "@/components/landing/ScreenshotsSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import DownloadCTA from "@/components/landing/DownloadCTA";
import Footer from "@/components/landing/Footer";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location.hash, location.pathname]);

  return (
    <div className="min-h-screen bg-background">
      <MarqueeBanner />
      <Navbar />
      <HeroSection />
      <TopCategoriesSection />
      <TopDiscountedSection />
      <FeaturesSection />
      <HowItWorksSection />
      <ScreenshotsSection />
      <TestimonialsSection />
      <DownloadCTA />
      <Footer />
    </div>
  );
};

export default Index;
