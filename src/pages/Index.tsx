import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProgramsSection from "@/components/ProgramsSection";
import USPSection from "@/components/USPSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FacilitiesSection from "@/components/FacilitiesSection";
import CTA from "@/components/cta";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-body">
      <Header />
      <HeroSection />
      <AboutSection />
      <ProgramsSection />
      <USPSection />
      <TestimonialsSection />
      <FacilitiesSection />
      <CTA/>
      <Footer />
    </div>
  );
};

export default Index;
