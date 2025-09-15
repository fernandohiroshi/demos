import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Scissors,
  Zap,
  Sparkles,
  Crown,
  RadarIcon as Razor,
  Brush,
} from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Scissors,
      title: "Corte Clássico",
      description: "Cortes tradicionais e modernos sob medida para seu estilo",
      price: "R$ 45",
      features: ["Consulta", "Lavagem & Corte", "Finalização", "Toalha Quente"],
    },
    {
      icon: Razor,
      title: "Barba Premium",
      description: "Barba feita com toalha quente e produtos premium",
      price: "R$ 55",
      features: ["Toalha Quente", "Creme Premium", "Navalha", "Pós-Barba"],
    },
    {
      icon: Crown,
      title: "Tratamento Real",
      description: "Experiência completa de cuidado masculino",
      price: "R$ 95",
      features: [
        "Corte de Cabelo",
        "Aparar Barba",
        "Barba Quente",
        "Massagem Facial",
      ],
    },
    {
      icon: Brush,
      title: "Cuidado da Barba",
      description: "Aparar e modelar barba profissionalmente",
      price: "R$ 35",
      features: [
        "Aparar & Modelar",
        "Óleo para Barba",
        "Finalização",
        "Consultoria",
      ],
    },
    {
      icon: Sparkles,
      title: "Tratamento Capilar",
      description: "Tratamentos nutritivos para cabelos saudáveis",
      price: "R$ 50",
      features: [
        "Limpeza Profunda",
        "Tratamento",
        "Massagem no Couro Cabeludo",
        "Finalização",
      ],
    },
    {
      icon: Zap,
      title: "Retoque Rápido",
      description: "Serviço rápido para profissionais ocupados",
      price: "R$ 25",
      features: [
        "Corte Rápido",
        "Finalização Básica",
        "Sem Agendamento",
        "Serviço Expresso",
      ],
    },
  ];

  return (
    <section id="services" className="py-20 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-amber-500/10 text-amber-500 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            NOSSOS SERVIÇOS
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Nossos Preços de <span className="text-amber-500">Serviços</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Serviços profissionais de cuidado masculino projetados para o
            cavalheiro moderno. Cada serviço inclui nossa atenção especial aos
            detalhes e produtos premium.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-zinc-950 border-amber-500/20 hover:border-amber-500/40 transition-colors group"
            >
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-amber-500/10 rounded-full w-fit group-hover:bg-amber-500/20 transition-colors">
                  <service.icon className="h-8 w-8 text-amber-500" />
                </div>
                <CardTitle className="text-xl text-white">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-gray-400">
                  {service.description}
                </CardDescription>
                <div className="text-3xl font-bold text-amber-500 mt-4">
                  {service.price}
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <div className="w-2 h-2 bg-amber-500 rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-amber-500 hover:bg-amber-600 text-black font-semibold">
                  Agendar Serviço
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
