import Link from "next/link";
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
      <div className="container mx-auto px-6 py-8 text-center text-sm">
        <p className="text-muted-foreground">
          Discover our{" "}
          <Link
            href="/bespoke-suits-bangalore"
            className="underline underline-offset-4"
          >
            bespoke suits in Bangalore
          </Link>{" "}
          and{" "}
          <Link
            href="/wedding-tailor-bangalore"
            className="underline underline-offset-4"
          >
            wedding tailoring services
          </Link>{" "}
          crafted with timeless elegance.
        </p>
      </div>
    </main>
  );
}
