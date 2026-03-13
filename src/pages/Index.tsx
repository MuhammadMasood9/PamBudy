import Navbar from "@/components/landing/Navbar";
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
  return (
    <div className="min-h-screen bg-background">
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
