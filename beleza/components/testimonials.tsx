import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"

export default function Testimonials() {
  const testimonials = [
    {
      name: "Emily Davis",
      avatar: "/placeholder.svg?height=60&width=60",
      rating: 5,
      text: "Experiência absolutamente incrível! Jessica transformou completamente meu cabelo e nunca me senti mais confiante. O salão tem uma atmosfera tão relaxante.",
      service: "Transformação Capilar",
    },
    {
      name: "Sophie Wilson",
      avatar: "/placeholder.svg?height=60&width=60",
      rating: 5,
      text: "Os tratamentos faciais da Maria são incríveis. Minha pele nunca esteve melhor! A abordagem personalizada realmente faz a diferença.",
      service: "Tratamento Facial",
    },
    {
      name: "Rachel Brown",
      avatar: "/placeholder.svg?height=60&width=60",
      rating: 5,
      text: "Pacote para noivas perfeito! A equipe me fez sentir como uma princesa no meu dia de casamento. Cada detalhe foi tratado com tanto cuidado e profissionalismo.",
      service: "Pacote para Noivas",
    },
    {
      name: "Amanda Taylor",
      avatar: "/placeholder.svg?height=60&width=60",
      rating: 5,
      text: "Os tratamentos de spa aqui são puro luxo. Sempre saio me sentindo renovada e rejuvenescida. Agora é meu ritual mensal de autocuidado!",
      service: "Tratamento Spa",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-stone-800 mb-6">
            O que nossos <span className="italic text-rose-400">clientes dizem</span>
          </h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            Leia depoimentos de nossos clientes satisfeitos que experimentaram nossos serviços excepcionais
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                <blockquote className="text-stone-700 mb-6 leading-relaxed">&quot;{testimonial.text}&quot;</blockquote>

                <div className="flex items-center gap-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                    <AvatarFallback>
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-stone-800">{testimonial.name}</div>
                    <div className="text-sm text-rose-400">{testimonial.service}</div>
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
