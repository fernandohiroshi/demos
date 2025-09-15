import Header from "@/components/header"
import Hero from "@/components/hero"
import About from "@/components/about"
import Services from "@/components/services"
import Portfolio from "@/components/portfolio"
import Experience from "@/components/experience"
import Testimonials from "@/components/testimonials"
import RecentWork from "@/components/recent-work"
import Newsletter from "@/components/newsletter"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Experience />
      <Testimonials />
      <RecentWork />
      <Newsletter />
      <Contact />
      <Footer />
    </div>
  )
}
