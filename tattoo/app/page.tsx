import { HeroSection } from "@/components/sections/hero-section"
import { Navigation } from "@/components/sections/navigation"
import { OurStorySection } from "@/components/sections/our-story-section"
import { ServicesSection } from "@/components/sections/services-section"
import { StatisticsSection } from "@/components/sections/statistics-section"
import { WorkflowSection } from "@/components/sections/workflow-section"
import { GallerySection } from "@/components/sections/gallery-section"
import { ExpertsSection } from "@/components/sections/experts-section"
import { BookingSection } from "@/components/sections/booking-section"
import { TestimonialSection } from "@/components/sections/testimonial-section"
import { FooterSection } from "@/components/sections/footer-section"

export default function InkedTattooStudio() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <Navigation />
      <HeroSection />
      <OurStorySection />
      <ServicesSection />
      <StatisticsSection />
      <WorkflowSection />
      <GallerySection />
      <ExpertsSection />
      <BookingSection />
      <TestimonialSection />
      <FooterSection />
    </div>
  )
}
