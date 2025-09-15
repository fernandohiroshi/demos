import Header from "@/components/header";
import Hero from "@/components/hero";
import About from "@/components/about";
import Services from "@/components/services";
import Gallery from "@/components/gallery";
import Team from "@/components/team";
import Testimonials from "@/components/testimonials";
import Promotions from "@/components/promotions";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <Hero />
      <About />
      <Gallery />
      <Services />
      <Promotions />
      <Testimonials />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}
