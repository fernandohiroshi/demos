import { Header } from "@/components/layout/header"
import { HeroSection } from "@/components/sections/hero-section"
import { MissionStatement } from "@/components/sections/mission-statement"
import { AboutSection } from "@/components/sections/about-section"
import { WorkoutSpaceSection } from "@/components/sections/workout-space-section"
import { EquipmentSection } from "@/components/sections/equipment-section"
import { TestimonialSection } from "@/components/sections/testimonial-section"
import { PricingSection } from "@/components/sections/pricing-section"
import { NewsSection } from "@/components/sections/news-section"
import { CtaSection } from "@/components/sections/cta-section"
import { Footer } from "@/components/layout/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Header />
      <main>
        <HeroSection />
        <MissionStatement />
        <AboutSection />
        <WorkoutSpaceSection />
        <EquipmentSection />
        <TestimonialSection />
        <PricingSection />
        <NewsSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  )
}
