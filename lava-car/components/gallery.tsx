"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Gallery() {
  const galleryImages = [
    {
      src: "https://images.pexels.com/photos/6872163/pexels-photo-6872163.jpeg",
      alt: "Carro limpo e brilhante após detalhamento premium"
    },
    {
      src: "https://images.pexels.com/photos/4488643/pexels-photo-4488643.jpeg",
      alt: "Lavagem completa de veículo esportivo"
    },
    {
      src: "https://images.pexels.com/photos/20637912/pexels-photo-20637912.jpeg",
      alt: "Proteção e enceramento da pintura"
    },
    {
      src: "https://images.pexels.com/photos/6872606/pexels-photo-6872606.jpeg",
      alt: "Cuidado especializado para veículos de luxo"
    },
    {
      src: "https://images.pexels.com/photos/4488652/pexels-photo-4488652.jpeg",
      alt: "Acabamento perfeito com atenção aos detalhes"
    },
  ];

  return (
    <section id="gallery" className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Nossa Galeria
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Confira alguns dos nossos trabalhos e veja a qualidade dos nossos serviços
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {galleryImages.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <div className="relative aspect-video rounded-lg overflow-hidden bg-slate-200">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
