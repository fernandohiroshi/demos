import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-2xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Contando histórias que importam, <span className="text-gray-600">revelando a verdade</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Jornalista investigativa premiada com mais de 15 anos de experiência expondo corrupção, promovendo justiça e dando voz a quem não tem.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gray-900 hover:bg-gray-800 text-white">
              Ver Meu Trabalho
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-gray-300 bg-transparent">
              Ler Últimos Artigos
            </Button>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-gray-200">
            <div className="text-center">
              <div className="text-lg font-bold text-gray-900">500+</div>
              <div className="text-gray-600">Artigos Publicados</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-gray-900">50+</div>
              <div className="text-gray-600">Investigações</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-gray-900">12</div>
              <div className="text-gray-600">Prêmios Recebidos</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-gray-900">15</div>
              <div className="text-gray-600">Anos de Experiência</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
