import Header from "@/components/header"
import Hero from "@/components/hero"
import About from "@/components/about"
import Services from "@/components/services"
import Gallery from "@/components/gallery"
import Statistics from "@/components/statistics"
import Consultation from "@/components/consultation"
import Team from "@/components/team"
import Testimonials from "@/components/testimonials"
import Promotions from "@/components/promotions"
import Booking from "@/components/booking"
import Contact from "@/components/contact"

export default function Home() {
  return (
    <main className="min-h-screen bg-stone-50">
      <Header />
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Statistics />
      <Consultation />
      <Team />
      <Testimonials />
      <Promotions />
      <Booking />
      <Contact />
    </main>
  )
}
