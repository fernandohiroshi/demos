import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Search, PenTool, Mic, FileText, Users, Lightbulb } from "lucide-react"

const services = [
  {
    icon: Search,
    title: "Reportagens Investigativas",
    description:
      "Investigações aprofundadas sobre corrupção, fraudes e questões sociais com pesquisa minuciosa e checagem de fatos.",
  },
  {
    icon: PenTool,
    title: "Reportagens Especiais",
    description:
      "Artigos longos e histórias de interesse humano que envolvem leitores e promovem conversas significativas.",
  },
  {
    icon: Mic,
    title: "Entrevistas",
    description:
      "Habilidade em entrevistas para extrair histórias marcantes de diferentes perfis, de CEOs a pessoas comuns.",
  },
  {
    icon: FileText,
    title: "Criação de Conteúdo",
    description:
      "Conteúdo editorial de alta qualidade para publicações, sites e plataformas digitais em diversos setores.",
  },
  {
    icon: Users,
    title: "Consultoria Editorial",
    description: "Orientação estratégica para publicações, ajudando a aprimorar padrões editoriais e estratégia de conteúdo.",
  },
  {
    icon: Lightbulb,
    title: "Desenvolvimento de Histórias",
    description: "Desenvolvimento colaborativo de pautas e orientação editorial para dar visibilidade a histórias importantes.",
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Serviços</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Serviços completos de jornalismo, da investigação à publicação, ajudando organizações e veículos a contar suas histórias mais importantes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-gray-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <service.icon className="h-12 w-12 text-gray-600 mb-4" />
                  <CardTitle className="text-xl text-gray-900">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
