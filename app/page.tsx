import HeroSection from "@/components/HeroSection";
import HeritageSection from "@/components/HeritageSection";
import ServicesGrid from "@/components/ServicesGrid";
import TailoringScroll from "@/components/TailoringScroll";
import FabricPhilosophy from "@/components/FabricPhilosophy";
import Testimonials from "@/components/Testimonials";
import AppointmentCTA from "@/components/AppointmentCTA";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-background text-foreground selection:bg-accent selection:text-black">
      <HeroSection />
      <HeritageSection />
      <ServicesGrid />
      <TailoringScroll />
      <FabricPhilosophy />
      <Testimonials />
      <AppointmentCTA />
    </main>
  );
}
