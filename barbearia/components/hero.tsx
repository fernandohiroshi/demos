import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          src="/hero.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-40"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              Experimente a Arte da{" "}
              <span className="text-amber-500">Excelência em Barbearia</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Onde a tradição encontra o estilo moderno. Nossos mestres
              barbeiros criam o visual perfeito para o cavalheiro moderno.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-amber-500 hover:bg-amber-600 text-black font-semibold px-8 py-4 text-lg"
              >
                Agendar Horário
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-black px-8 py-4 text-lg bg-transparent"
              >
                Ver Serviços
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="absolute hidden lg:block bottom-0 left-0 right-0 bg-black/80 backdrop-blur-sm border-t border-amber-500/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-amber-500 mb-2">
                450+
              </div>
              <div className="text-gray-300 text-sm uppercase tracking-wider">
                Clientes Satisfeitos
              </div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-amber-500 mb-2">
                11M
              </div>
              <div className="text-gray-300 text-sm uppercase tracking-wider">
                Cortes Realizados
              </div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-amber-500 mb-2">
                10+
              </div>
              <div className="text-gray-300 text-sm uppercase tracking-wider">
                Anos de Experiência
              </div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-amber-500 mb-2">
                300
              </div>
              <div className="text-gray-300 text-sm uppercase tracking-wider">
                Avaliações 5 Estrelas
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
