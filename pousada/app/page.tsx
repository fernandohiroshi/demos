import { Header } from "@/components/layout/header"
import { HeroSection } from "@/components/sections/hero-section"
import { AboutSection } from "@/components/sections/about-section"
import { PanoramicSection } from "@/components/sections/panoramic-section"
import { RoomsSection } from "@/components/sections/rooms-section"
import { FoodSection } from "@/components/sections/food-section"
import { AerialSection } from "@/components/sections/aerial-section"
import { WellnessSection } from "@/components/sections/wellness-section"
import { MemoriesSection } from "@/components/sections/memories-section"
import { OffersSection } from "@/components/sections/offers-section"
import { BookingSection } from "@/components/sections/booking-section"
import { Footer } from "@/components/layout/footer"

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden">
      <Header />
      <HeroSection />
      <AboutSection />
      <PanoramicSection />
      <RoomsSection />
      <FoodSection />
      <AerialSection />
      <WellnessSection />
      <MemoriesSection />
      <OffersSection />
      <BookingSection />
      <Footer />
    </main>
  )
}
