"use client"

import { ServiceCard } from "@/components/ui/service-card"
import { AnimatedSection } from "@/components/ui/animated-section"

export function ServicesSection() {
  const services = [
    {
      title: "Consulta inicial",
      price: "R$ 200,00",
      features: [
        "Avaliação nutricional",
        "Análise de peso e composição corporal",
        "Diagnóstico inicial",
      ],
    },
    {
      title: "Plano Nutricional Personalizado",
      price: "R$ 300,00",
      features: [
        "Plano alimentar para 1 mês",
        "Plano alimentar para família",
        "Plano alimentar para exercícios",
        "Plano alimentar para objetivos específicos",
      ],
      featured: true,
    },
    {
      title: "Consulta de acompanhamento",
      price: "R$ 100,00",
      features: ["Análise de peso e composição corporal", "Avaliação nutricional", "Diagnóstico inicial"],
    },
  ]

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-4 leading-tight">
              A comida não é sua inimiga.
              <br />
              Deixe-me provar isso para você
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum
              tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae
              erat.
            </p>
          </AnimatedSection>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
