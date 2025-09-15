"use client";

import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { MenuSection } from "@/components/menu-section";
import { StatsSection } from "@/components/stats-section";
import { ReservationSection } from "@/components/reservation-section";
import { EventsSection } from "@/components/articles-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { FaqSection } from "@/components/faq-section";
import { Footer } from "@/components/footer";

export default function HomePage() {
  return (
    <>
      <main className="min-h-screen overflow-x-hidden px-4">
        <Header />
        <HeroSection />
        <AboutSection />
        <MenuSection />
        <StatsSection />
        <EventsSection />
        <ReservationSection />
        <TestimonialsSection />
        <FaqSection />
      </main>
      <Footer />
    </>
  );
}
