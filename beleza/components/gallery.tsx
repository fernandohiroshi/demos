"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const galleryImages = [
    {
      src: "https://images.pexels.com/photos/12728015/pexels-photo-12728015.jpeg",
      alt: "Transformação capilar",
      title: "Transformação Capilar",
    },
    {
      src: "https://images.pexels.com/photos/29588102/pexels-photo-29588102.jpeg",
      alt: "Resultados do tratamento facial",
      title: "Resultados de Pele Radiante",
    },
    {
      src: "https://images.pexels.com/photos/33197837/pexels-photo-33197837.jpeg",
      alt: "Maquiagem para noivas",
      title: "Elegância Nupcial",
    },
    {
      src: "https://images.pexels.com/photos/939836/pexels-photo-939836.jpeg",
      alt: "Nail art",
      title: "Unhas Artísticas",
    },
    {
      src: "https://images.pexels.com/photos/3768926/pexels-photo-3768926.jpeg",
      alt: "Tratamento spa",
      title: "Luxo do Spa",
    },
  ];

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + galleryImages.length) % galleryImages.length
    );
  };

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-stone-800 mb-6">
            <span className="italic text-rose-400">Transformações</span> de
            beleza
          </h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            Veja as incríveis transformações que nossos clientes experimentaram
          </p>
        </div>

        {/* Main Carousel */}
        <div className="relative max-w-4xl mx-auto mb-8">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
            <Image
              src={galleryImages[currentIndex].src || "/placeholder.svg"}
              alt={galleryImages[currentIndex].alt}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-2xl font-semibold">
                {galleryImages[currentIndex].title}
              </h3>
            </div>
          </div>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm border-white/20"
            onClick={prevImage}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm border-white/20"
            onClick={nextImage}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        {/* Thumbnail Navigation */}
        <div className="flex justify-center gap-2">
          {galleryImages.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex ? "bg-rose-400" : "bg-stone-300"
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
