import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import WhatWeOfferSection from "@/components/what-we-offer-section"
import ProductsSection from "@/components/products-section"
import ServicesBanner from "@/components/services-banner"
import GroomingSection from "@/components/grooming-section"
import AdoptionSection from "@/components/adoption-section"
import AboutSection from "@/components/about-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <WhatWeOfferSection />
      <ProductsSection />
      <ServicesBanner />
      <GroomingSection />
      <AdoptionSection />
      <AboutSection />
      <Footer />
    </main>
  )
}
