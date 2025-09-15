"use client";

import Image from "next/image";

export function RoomsSection() {
  return (
    <section id="rooms" className="bg-cream-50 py-24">
      <div className="container mx-auto px-6">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <h2 className="mb-8 text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light tracking-wider text-cream-800">
              QUARTOS &<br />
              VISTA
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-cream-600">
              Cada quarto foi cuidadosamente decorado para oferecer o máximo
              conforto familiar e uma vista deslumbrante das montanhas. Desfrute
              de momentos de tranquilidade em um ambiente aconchegante e
              acolhedor.
            </p>
            <div className="aspect-video overflow-hidden rounded-lg">
              <Image
                src="https://images.pexels.com/photos/14025023/pexels-photo-14025023.jpeg"
                alt="Quarto aconchegante da pousada"
                width={600}
                height={400}
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>

          <div className="flex items-center">
            <div className="aspect-[3/4] w-full overflow-hidden rounded-lg">
              <Image
                src="https://images.pexels.com/photos/16436956/pexels-photo-16436956.jpeg"
                alt="Vista acolhedora das montanhas"
                width={600}
                height={800}
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
