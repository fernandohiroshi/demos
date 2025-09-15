"use client"
import Header from "@/components/Header"
import HeroSection from "@/components/HeroSection"
import StorySection from "@/components/StorySection"
import WeddingDetailsSection from "@/components/WeddingDetailsSection"
import CountdownSection from "@/components/CountdownSection"
import RsvpSection from "@/components/RsvpSection"
import RegistrySection from "@/components/RegistrySection"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 to-pink-50 overflow-x-hidden">
      <Header />
      <main>
        <HeroSection />
        <CountdownSection />
        <StorySection />
        <WeddingDetailsSection />
        <RsvpSection />
        <RegistrySection />
      </main>
      <Footer />
    </div>
  )
}
