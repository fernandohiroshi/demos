import { Shield, Clock, Award, Headphones, Truck, Sparkles } from "lucide-react"

export default function WhyChooseUs() {
  const benefits = [
    {
      icon: Shield,
      title: "Garantia de Satisfação",
      description: "100% de satisfação garantida ou corrigimos",
    },
    {
      icon: Clock,
      title: "Eficiência no Tempo",
      description: "Serviço rápido sem comprometer a qualidade",
    },
    {
      icon: Award,
      title: "Profissionais Certificados",
      description: "Especialistas treinados e certificados em cuidado automotivo",
    },
    {
      icon: Headphones,
      title: "Suporte 24/7",
      description: "Atendimento ao cliente disponível 24 horas por dia",
    },
    {
      icon: Truck,
      title: "Busca e Entrega",
      description: "Serviço conveniente de busca e entrega disponível",
    },
    {
      icon: Sparkles,
      title: "Produtos Premium",
      description: "Apenas os melhores produtos e equipamentos de cuidado automotivo",
    },
  ]

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Por Que Escolher a CruzeWash?</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Não somos apenas mais um lava-jato. Somos seu parceiro em manter seu veículo em condições pristinas com
            qualidade de serviço incomparável.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
                <benefit.icon className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">{benefit.title}</h3>
              <p className="text-slate-600 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Guarantees Section */}
        <div className="bg-gradient-to-r from-slate-900 to-blue-900 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">Nossas Garantias</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">100%</div>
              <div className="text-white font-medium mb-1">Satisfação</div>
              <div className="text-slate-300 text-sm">Garantida ou dinheiro de volta</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">30 Dias</div>
              <div className="text-white font-medium mb-1">Proteção</div>
              <div className="text-slate-300 text-sm">Garantia em todos os serviços</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">0%</div>
              <div className="text-white font-medium mb-1">Risco de Danos</div>
              <div className="text-slate-300 text-sm">Operações totalmente seguradas</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
