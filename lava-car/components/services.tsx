import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Droplets, Sparkles, Shield, Car, Package, Star } from "lucide-react"

export default function Services() {
  const services = [
    {
      icon: Droplets,
      title: "Lavagem Externa",
      description: "Limpeza externa completa com sabões premium e cera protetora",
      features: ["Lavagem à mão", "Limpeza de rodas", "Brilho nos pneus", "Limpeza de vidros"],
      price: "A partir de R$ 45",
    },
    {
      icon: Sparkles,
      title: "Detalhamento Interno",
      description: "Limpeza profunda e condicionamento de todas as superfícies internas",
      features: ["Aspiração completa", "Hidratação do couro", "Enceramento do painel", "Eliminação de odores"],
      price: "A partir de R$ 85",
    },
    {
      icon: Shield,
      title: "Proteção da Pintura",
      description: "Aplicação avançada de cera e selante para proteção duradoura",
      features: ["Cera premium", "Selante de pintura", "Proteção UV", "Garantia de 6 meses"],
      price: "A partir de R$ 150",
    },
    {
      icon: Car,
      title: "Enceramento Cerâmico",
      description: "Enceramento cerâmico profissional para proteção máxima",
      features: ["Dureza 9H", "Revestimento hidrofóbico", "Garantia de 2 anos", "Brilho intensificado"],
      price: "A partir de R$ 599",
    },
    {
      icon: Package,
      title: "Pacote Detalhamento Completo",
      description: "Serviço completo de detalhamento interno e externo",
      features: ["Tudo incluído", "Limpeza do motor", "Restauração de faróis", "Tratamento clay bar"],
      price: "A partir de R$ 299",
    },
    {
      icon: Star,
      title: "Pacotes Premium",
      description: "Pacotes de luxo com serviços adicionais e benefícios",
      features: ["Agendamento prioritário", "Busca e entrega", "Manutenção mensal", "Tratamento VIP"],
      price: "A partir de R$ 399",
    },
  ]

  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Nossos Serviços Premium</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Escolha entre nossa gama abrangente de serviços de cuidado automotivo, cada um projetado para manter seu
            veículo com a melhor aparência possível.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white">
              <CardHeader className="text-center pb-4">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4 group-hover:bg-blue-600 transition-colors duration-300 mx-auto">
                  <service.icon className="h-8 w-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <CardTitle className="text-xl font-semibold text-slate-900">{service.title}</CardTitle>
                <CardDescription className="text-slate-600">{service.description}</CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-slate-600">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-slate-900">{service.price}</span>
                  <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">Saiba Mais →</button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
