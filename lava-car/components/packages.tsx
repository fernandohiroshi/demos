import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, Star } from "lucide-react"

export default function Packages() {
  const packages = [
    {
      name: "Lavagem Básica",
      price: "R$ 59",
      duration: "30 min",
      description: "Perfeito para manutenção regular",
      features: [
        "Lavagem externa à mão",
        "Limpeza de rodas",
        "Brilho nos pneus",
        "Limpeza de vidros",
        "Aspiração básica interna",
      ],
      popular: false,
    },
    {
      name: "Detalhamento Premium",
      price: "R$ 159",
      duration: "90 min",
      description: "Nosso pacote mais popular",
      features: [
        "Tudo do Básico",
        "Limpeza interna profunda",
        "Hidratação do couro",
        "Enceramento do painel",
        "Aplicação de cera premium",
        "Restauração de faróis",
      ],
      popular: true,
    },
    {
      name: "Experiência de Luxo",
      price: "R$ 299",
      duration: "3 horas",
      description: "A experiência definitiva em cuidado automotivo",
      features: [
        "Tudo do Premium",
        "Tratamento clay bar",
        "Correção de pintura",
        "Limpeza do motor",
        "Preparação para cerâmica",
        "Proteção interna",
        "Busca e entrega cortesia",
      ],
      popular: false,
    },
  ]

  return (
    <section id="packages" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Pacotes de Serviços</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Escolha o pacote perfeito para seu veículo. Todos os pacotes incluem nossa garantia de satisfação e produtos
            premium.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <Card
              key={index}
              className={`relative ${
                pkg.popular ? "border-blue-500 shadow-xl scale-105" : "border-slate-200"
              } bg-white`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center">
                    <Star className="h-4 w-4 mr-1" />
                    <span>Mais Popular</span>
                  </div>
                </div>
              )}

              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-bold text-slate-900">{pkg.name}</CardTitle>
                <CardDescription className="text-slate-600 mb-4">{pkg.description}</CardDescription>
                <div className="space-y-1">
                  <div className="text-4xl font-bold text-slate-900">{pkg.price}</div>
                  <div className="text-sm text-slate-500">{pkg.duration}</div>
                </div>
              </CardHeader>

              <CardContent className="pt-0">
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full ${
                    pkg.popular ? "bg-blue-600 hover:bg-blue-700" : "bg-slate-900 hover:bg-slate-800"
                  } text-white`}
                >
                  Escolher Pacote
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-slate-600 mb-4">
            Precisa de uma solução personalizada? Oferecemos pacotes sob medida para frotas e veículos comerciais.
          </p>
          <Button variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-50 bg-transparent">
            Contato para Orçamento Personalizado
          </Button>
        </div>
      </div>
    </section>
  )
}
