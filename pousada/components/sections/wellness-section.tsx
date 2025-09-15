"use client";

import Image from "next/image";

export function WellnessSection() {
  return (
    <section id="wellness" className="bg-cream-25 py-24">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-8 text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light tracking-wider text-cream-800">
            BEM-ESTAR
            <br />
            POUSADA
          </h2>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-cream-600">
            Renove corpo e mente em nossos espaços de bem-estar, onde o cuidado
            familiar, a tranquilidade e o carinho da Pousada Lech criam momentos
            únicos de relaxamento para você e sua família.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="text-center">
            <div className="mb-6 aspect-[4/5] overflow-hidden rounded-lg">
              <Image
                src="https://images.pexels.com/photos/4172894/pexels-photo-4172894.jpeg"
                alt="Espaço de relaxamento da pousada"
                width={480}
                height={600}
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <h3 className="mb-2 text-base xs:text-lg sm:text-xl md:text-2xl font-light tracking-wider text-cream-800">ÁGUA</h3>
            <p className="text-sm text-cream-600">
              Hidroterapia e piscinas termais com vista panorâmica
            </p>
          </div>

          <div className="text-center">
            <div className="mb-6 aspect-[4/5] overflow-hidden rounded-lg">
              <Image
                src="https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg"
                alt="Sauna familiar"
                width={480}
                height={600}
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <h3 className="mb-2 text-base xs:text-lg sm:text-xl md:text-2xl font-light tracking-wider text-cream-800">CALOR</h3>
            <p className="text-sm text-cream-600">
              Saunas tradicionais e banhos de vapor aromáticos
            </p>
          </div>

          <div className="text-center">
            <div className="mb-6 aspect-[4/5] overflow-hidden rounded-lg">
              <Image
                src="https://images.pexels.com/photos/32383878/pexels-photo-32383878.jpeg"
                alt="Área de descanso aconchegante"
                width={480}
                height={600}
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <h3 className="mb-2 text-base xs:text-lg sm:text-xl md:text-2xl font-light tracking-wider text-cream-800">
              RELAXAMENTO
            </h3>
            <p className="text-sm text-cream-600">
              Espaços de meditação e áreas de descanso silenciosas
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
