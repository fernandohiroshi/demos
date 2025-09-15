import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-20 bg-zinc-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <Image
              src="https://images.pexels.com/photos/11169557/pexels-photo-11169557.jpeg"
              alt="Barbershop Interior"
              width={500}
              height={600}
              className="rounded-lg shadow-2xl"
            />
            <div className="absolute hidden lg:block -bottom-6 -right-6 bg-amber-500 text-black p-6 rounded-lg">
              <div className="text-2xl font-bold">25+</div>
              <div className="text-sm">Anos de Excelência</div>
            </div>
          </div>

          <div>
            <div className="inline-block bg-amber-500/10 text-amber-500 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              SOBRE NÓS
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Dominando a Arte do{" "}
              <span className="text-amber-500">Cuidado Masculino</span>
            </h2>
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              Desde 1998, nos dedicamos a proporcionar a melhor experiência de
              cuidado masculino para o cavalheiro moderno. Nossa paixão pelo
              ofício e atenção aos detalhes nos diferencia dos demais.
            </p>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Combinamos técnicas tradicionais de barbearia com estilos
              contemporâneos, garantindo que cada cliente saia com a melhor
              aparência e se sentindo confiante. Nosso compromisso com a
              excelência se reflete em cada corte, cada barba feita e cada
              serviço que prestamos.
            </p>

            <div className="hidden lg:grid grid-cols-2 gap-6">
              <div className="text-center p-4 border border-amber-500/20 rounded-lg">
                <div className="text-2xl font-bold text-amber-500 mb-2">
                  Especialistas
                </div>
                <div className="text-gray-300 text-sm">Mestres Barbeiros</div>
              </div>
              <div className="text-center p-4 border border-amber-500/20 rounded-lg">
                <div className="text-2xl font-bold text-amber-500 mb-2">
                  Premium
                </div>
                <div className="text-gray-300 text-sm">
                  Produtos de Qualidade
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
