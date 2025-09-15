"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

export function HeroSection() {
  const plugin = useRef(Autoplay({ delay: 4000, stopOnInteraction: false }));

  const slides = [
    {
      image:
        "https://images.pexels.com/photos/33237503/pexels-photo-33237503.jpeg",
      alt: "Entrada charmosa da Pousada Lech",
      title: "BEM-VINDO À POUSADA LECH",
      subtitle: "Seu refúgio nos Alpes brasileiros",
      description:
        "Conforto, hospitalidade e natureza em perfeita harmonia para momentos inesquecíveis.",
    },
    {
      image:
        "https://images.pexels.com/photos/13813465/pexels-photo-13813465.jpeg",
      alt: "Quarto aconchegante da pousada",
      title: "CONFORTO E TRANQUILIDADE",
      subtitle: "Ambientes acolhedores para relaxar",
      description:
        "Descanse em suítes charmosas e aproveite o clima familiar da nossa pousada.",
    },
    {
      image:
        "https://images.pexels.com/photos/1006321/pexels-photo-1006321.jpeg",
      alt: "Vista para a natureza na pousada",
      title: "NATUREZA E BEM-ESTAR",
      subtitle: "Experiências únicas ao ar livre",
      description:
        "Desfrute de paisagens incríveis, trilhas e espaços de lazer pensados para você.",
    },
  ];

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden">
      <Carousel
        plugins={[plugin.current]}
        className="absolute inset-0 h-full w-full"
      >
        <CarouselContent className="h-full ml-0">
          {slides.map((slide, index) => (
            <CarouselItem
              key={index}
              className="relative h-full w-full pl-0 basis-full"
            >
              {/* Background Image */}
              <div className="absolute inset-0 h-full w-full">
                <Image
                  src={slide.image || "/placeholder.svg"}
                  alt={slide.alt}
                  fill
                  className="object-cover"
                  priority={index === 0}
                  sizes="100vw"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/30" />

              {/* Content */}
              <div className="relative z-10 flex h-full w-full items-center justify-center">
                <div className="text-center text-cream-50">
                  <h1 className="mb-4 text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-light tracking-wider">
                    {slide.title}
                  </h1>
                  <p className="text-base sm:text-lg md:text-xl font-light tracking-widest">
                    {slide.subtitle}
                  </p>
                  {slide.description && (
                    <p className="mt-4 text-lg font-light md:text-xl">
                      {slide.description}
                    </p>
                  )}
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Navigation Arrows */}
        <CarouselPrevious className="absolute hidden lg:flex items-center justify-center left-8 top-1/2 -translate-y-1/2 h-12 w-12 border-white/30 bg-transparent text-cream-50 hover:bg-white/10 hover:text-white" />
        <CarouselNext className="absolute hidden lg:flex items-center justify-center right-8 top-1/2 -translate-y-1/2 h-12 w-12 border-white/30 bg-transparent text-cream-50 hover:bg-white/10 hover:text-white" />
      </Carousel>

      {/* Custom Indicators */}
      <div className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2">
        <div className="flex space-x-3">
          {slides.map((_, index) => (
            <div
              key={index}
              className="h-3 w-3 rounded-full border border-white/50 bg-white/30"
            />
          ))}
        </div>
      </div>

      {/* Header Spacer */}
      <div className="absolute top-0 z-30 h-20 w-full bg-gradient-to-b from-black/20 to-transparent" />
    </section>
  );
}
