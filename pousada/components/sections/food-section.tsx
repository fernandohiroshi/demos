"use client";

import Image from "next/image";

export function FoodSection() {
  return (
    <section id="food" className="bg-white py-24">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-8 text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light tracking-wider text-cream-800">
            COMIDA &<br />
            BEBIDAS
          </h2>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-cream-600">
            Saboreie a autêntica culinária caseira alpina preparada com carinho,
            usando ingredientes locais e receitas tradicionais da família,
            acompanhada de uma seleção especial de vinhos regionais.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="text-center">
            <div className="mb-6 aspect-square overflow-hidden rounded-lg">
              <Image
                src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg"
                alt="Culinária caseira da pousada"
                width={500}
                height={500}
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <h3 className="mb-4 text-base xs:text-lg sm:text-xl md:text-2xl font-light tracking-wider text-cream-800">
              A COZINHA FAMILIAR
            </h3>
            <p className="text-cream-600">
              Pratos tradicionais alpinos preparados com receitas de família e
              ingredientes frescos da região.
            </p>
          </div>

          <div className="text-center">
            <div className="mb-6 aspect-square overflow-hidden rounded-lg">
              <Image
                src="https://images.pexels.com/photos/30607249/pexels-photo-30607249.jpeg"
                alt="Ambiente familiar da pousada"
                width={500}
                height={500}
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <h3 className="mb-4 text-base xs:text-lg sm:text-xl md:text-2xl font-light tracking-wider text-cream-800">
              A SALA DE ESTAR
            </h3>
            <p className="text-cream-600">
              Um ambiente acolhedor para compartilhar histórias, vinhos locais e
              momentos especiais em família.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
