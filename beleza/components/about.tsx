import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-stone-800 mb-6">
            Tratamentos de beleza que atendem ao seu{" "}
            <span className="italic text-rose-400">
              estilo e preferências únicos
            </span>
          </h2>
          <p className="text-lg text-stone-600 max-w-3xl mx-auto">
            No Shine Beauty Salon, acreditamos que toda pessoa merece se sentir
            confiante e bonita. Nossa abordagem personalizada garante que você
            receba tratamentos especificamente adaptados às suas necessidades.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="group cursor-pointer">
            <div className="relative rounded-xl overflow-hidden mb-4 aspect-square">
              <Image
                src="https://images.pexels.com/photos/457701/pexels-photo-457701.jpeg"
                alt="Tratamentos Luxuosos"
                width={300}
                height={300}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="font-semibold text-stone-800 mb-2">
              Tratamentos Luxuosos
            </h3>
            <p className="text-stone-600 text-sm">
              Serviços premium usando os melhores produtos
            </p>
          </div>

          <div className="group cursor-pointer">
            <div className="relative rounded-xl overflow-hidden mb-4 aspect-square">
              <Image
                src="https://images.pexels.com/photos/4938191/pexels-photo-4938191.jpeg"
                alt="Estilização Especializada"
                width={300}
                height={300}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="font-semibold text-stone-800 mb-2">
              Estilização Especializada
            </h3>
            <p className="text-stone-600 text-sm">
              Estilistas profissionais com anos de experiência
            </p>
          </div>

          <div className="group cursor-pointer">
            <div className="relative rounded-xl overflow-hidden mb-4 aspect-square">
              <Image
                src="https://images.pexels.com/photos/853427/pexels-photo-853427.jpeg"
                alt="Ambiente Relaxante"
                width={300}
                height={300}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="font-semibold text-stone-800 mb-2">
              Ambiente Relaxante
            </h3>
            <p className="text-stone-600 text-sm">
              Espaço tranquilo projetado para seu conforto
            </p>
          </div>

          <div className="group cursor-pointer">
            <div className="relative rounded-xl overflow-hidden mb-4 aspect-square">
              <Image
                src="https://images.pexels.com/photos/3738349/pexels-photo-3738349.jpeg"
                alt="Cuidado Personalizado"
                width={300}
                height={300}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="font-semibold text-stone-800 mb-2">
              Cuidado Personalizado
            </h3>
            <p className="text-stone-600 text-sm">
              Tratamentos personalizados para suas necessidades únicas
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
