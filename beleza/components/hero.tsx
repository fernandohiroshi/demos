import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="pt-16 min-h-screen bg-gradient-to-br from-stone-50 to-rose-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-light text-stone-800 leading-tight">
                Realçando sua beleza para{" "}
                <span className="italic text-rose-400 font-normal">
                  você brilhar
                </span>
              </h1>
              <p className="text-lg text-stone-600 max-w-lg leading-relaxed">
                Experimente o máximo em beleza e bem-estar em nosso salão
                premium. Nossos estilistas e esteticistas especializados são
                dedicados a realçar sua radiância natural.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-rose-400 hover:bg-rose-500 text-white px-8 py-3"
              >
                Agendar Consulta
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-stone-300 text-stone-700 px-8 py-3 bg-transparent"
              >
                Ver Serviços
              </Button>
            </div>

            {/* Stats */}
            <div className="flex gap-8 pt-8">
              <div>
                <div className="text-3xl font-bold text-stone-800">2k+</div>
                <div className="text-stone-600">Clientes Felizes</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-stone-800">10+</div>
                <div className="text-stone-600">Serviços</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-stone-800">5+</div>
                <div className="text-stone-600">Anos de Experiência</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1752504704467-c837aff78ee6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Interior elegante do salão de beleza"
                width={600}
                height={700}
                className="w-full h-auto object-cover"
                priority
              />
              {/* Floating elements for visual interest */}
              <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-sm font-medium text-stone-700">
                    Disponível Agora
                  </span>
                </div>
              </div>

              <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                <div className="text-sm text-stone-600 mb-1">
                  Próximo Disponível
                </div>
                <div className="font-semibold text-stone-800">
                  Hoje às 14:00
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute hidden md:block -top-4 -left-4 w-24 h-24 bg-rose-100 rounded-full opacity-60"></div>
            <div className="absolute hidden md:block -bottom-6 -right-6 w-32 h-32 bg-stone-100 rounded-full opacity-40"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
