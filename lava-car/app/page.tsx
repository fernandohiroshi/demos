import Header from "@/components/header"
import Hero from "@/components/hero"
import About from "@/components/about"
import Services from "@/components/services"
import Gallery from "@/components/gallery"
import Packages from "@/components/packages"
import Statistics from "@/components/statistics"
import Testimonials from "@/components/testimonials"
import WhyChooseUs from "@/components/why-choose-us"
import Booking from "@/components/booking"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Header />
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Packages />
      <Statistics />
      <Testimonials />
      <WhyChooseUs />
      <Booking />
      <Contact />
      <Footer />
    </main>
  );
}
