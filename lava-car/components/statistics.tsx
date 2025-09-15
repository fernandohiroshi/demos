import { TrendingUp, Users, Award, Clock } from "lucide-react"

export default function Statistics() {
  const stats = [
    {
      icon: Users,
      number: "15.000+",
      label: "Carros Lavados",
      description: "Veículos transformados com cuidado",
    },
    {
      icon: Award,
      number: "4.9/5",
      label: "Avaliação dos Clientes",
      description: "Baseado em 2.500+ avaliações",
    },
    {
      icon: TrendingUp,
      number: "98%",
      label: "Taxa de Satisfação",
      description: "Clientes que retornam",
    },
    {
      icon: Clock,
      number: "8+",
      label: "Anos de Experiência",
      description: "Em cuidado automotivo premium",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-r from-slate-900 to-blue-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Confiança de Milhares</h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Nosso compromisso com a excelência nos rendeu a confiança de entusiastas automotivos e motoristas do dia a
            dia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600/20 rounded-full mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                <stat.icon className="h-8 w-8 text-blue-400 group-hover:text-white transition-colors duration-300" />
              </div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-xl font-semibold text-blue-200 mb-2">{stat.label}</div>
              <div className="text-slate-400 text-sm">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
