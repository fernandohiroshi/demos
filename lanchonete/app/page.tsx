'use client';

import Header from '@/components/sections/Header';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Menu from '@/components/sections/Menu';
import Gallery from '@/components/sections/Gallery';
import Differentials from '@/components/sections/Differentials';
import Reviews from '@/components/sections/Reviews';
import Blog from '@/components/sections/Blog';
import CTA from '@/components/sections/CTA';
import Location from '@/components/sections/Location';
import Footer from '@/components/sections/Footer';

export default function Home() {
  
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Menu />
      <Gallery />
      <Differentials />
      <Reviews />
      <Blog />
      <CTA />
      <Location />
      <Footer />
    </div>
  );
}