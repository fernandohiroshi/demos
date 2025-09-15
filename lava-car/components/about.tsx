import { Shield, Award, Users, Clock } from "lucide-react"

export default function About() {
  const features = [
    {
      icon: Shield,
      title: "Proteção Premium",
      description: "Serviços avançados de enceramento cerâmico e proteção de pintura",
    },
    {
      icon: Award,
      title: "Técnicos Especialistas",
      description: "Profissionais certificados com anos de experiência em cuidado automotivo",
    },
    {
      icon: Users,
      title: "Cliente em Primeiro",
      description: "Atendimento personalizado adaptado às necessidades específicas do seu veículo",
    },
    {
      icon: Clock,
      title: "Eficiência no Tempo",
      description: "Atendimento rápido sem comprometer a qualidade",
    },
  ]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Sobre a CruzeWash</h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Há mais de 8 anos, a CruzeWash tem sido o destino premium para cuidados automotivos de luxo. Combinamos
            tecnologia de ponta com artesanato tradicional para entregar resultados excepcionais que superam
            expectativas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                <feature.icon className="h-8 w-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-slate-900 to-blue-900 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Nossa Missão</h3>
          <p className="text-slate-300 text-lg max-w-3xl mx-auto leading-relaxed">
            Proporcionar a experiência definitiva em cuidado automotivo através de técnicas inovadoras, produtos premium
            e atendimento ao cliente incomparável. Cada veículo que sai de nossas instalações representa nosso
            compromisso com a excelência.
          </p>
        </div>
      </div>
    </section>
  )
}
