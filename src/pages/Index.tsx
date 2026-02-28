import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import DoctorsSection from "@/components/DoctorsSection";
import CertificationsSection from "@/components/CertificationsSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import BeforeAfterSection from "@/components/BeforeAfterSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import GoogleReviewsSection from "@/components/GoogleReviewsSection";
import InsuranceSection from "@/components/InsuranceSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import StickyMobileCTA from "@/components/StickyMobileCTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <DoctorsSection />
      <CertificationsSection />
      <AboutSection />
      <ServicesSection />
      <BeforeAfterSection />
      <TestimonialsSection />
      <GoogleReviewsSection />
      <InsuranceSection />
      <ContactSection />
      <Footer />
      <StickyMobileCTA />
    </div>
  );
};

export default Index;
