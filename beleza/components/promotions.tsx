import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Sparkles, Gift, Crown } from "lucide-react"

export default function Promotions() {
  const promotions = [
    {
      icon: Sparkles,
      title: "Especial Novo Cliente",
      discount: "25% OFF",
      description: "Clientes pela primeira vez recebem 25% de desconto em qualquer serviço",
      services: ["Corte e Penteado", "Tratamento Facial", "Manicure"],
      validUntil: "Válido até o final do mês",
      popular: false,
    },
    {
      icon: Crown,
      title: "Pacote Beleza para Noivas",
      discount: "Economize R$ 150",
      description: "Pacote completo para noivas incluindo sessões de teste",
      services: ["Teste de Cabelo e Maquiagem", "Penteado do Dia do Casamento", "Manicure e Pedicure"],
      validUntil: "Reserve com 2 meses de antecedência",
      popular: true,
    },
    {
      icon: Gift,
      title: "Pacote Mimo",
      discount: "30% OFF",
      description: "Dia relaxante no spa com múltiplos tratamentos",
      services: ["Tratamento Facial", "Massagem Corporal", "Manicure e Pedicure"],
      validUntil: "Oferta por tempo limitado",
      popular: false,
    },
  ]

  return (
    <section className="py-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-stone-800 mb-6">
            <span className="italic text-rose-400">Promoções</span> especiais
          </h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            Aproveite nossos pacotes exclusivos de beleza e ofertas sazonais
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {promotions.map((promo, index) => (
            <Card
              key={index}
              className={`relative border-0 shadow-lg hover:shadow-xl transition-all duration-300 ${
                promo.popular ? "ring-2 ring-rose-400" : ""
              }`}
            >
              {promo.popular && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-rose-400 text-white">Mais Popular</Badge>
              )}

              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-rose-100 rounded-full mb-4">
                    <promo.icon className="h-8 w-8 text-rose-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-stone-800 mb-2">{promo.title}</h3>
                  <div className="text-3xl font-bold text-rose-400 mb-2">{promo.discount}</div>
                  <p className="text-stone-600">{promo.description}</p>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-stone-800 mb-2">Inclui:</h4>
                    <ul className="space-y-1">
                      {promo.services.map((service, idx) => (
                        <li key={idx} className="text-stone-600 text-sm flex items-center">
                          <div className="w-1.5 h-1.5 bg-rose-400 rounded-full mr-2" />
                          {service}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-stone-200">
                    <p className="text-xs text-stone-500 mb-4">{promo.validUntil}</p>
                    <Button
                      className={`w-full ${
                        promo.popular
                          ? "bg-rose-400 hover:bg-rose-500 text-white"
                          : "bg-stone-800 hover:bg-stone-900 text-white"
                      }`}
                    >
                      Agendar Agora
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
