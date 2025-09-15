import { TestimonialCard } from "@/components/ui/testimonial-card"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Maria Silva",
      role: "Cliente há 6 meses",
      content:
        "A abordagem da nutricionista mudou minha relação com a comida. Perdi 15kg de forma saudável e sustentável.",
      image:
        "https://images.pexels.com/photos/3768911/pexels-photo-3768911.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
    },
    {
      name: "João Santos",
      role: "Cliente há 1 ano",
      content:
        "Finalmente encontrei um profissional que entende que cada pessoa é única. Os resultados falam por si só!",
      image:
        "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
    },
    {
      name: "Ana Costa",
      role: "Cliente há 8 meses",
      content:
        "O plano personalizado me ajudou não só a emagrecer, mas também a ter mais energia e disposição no dia a dia.",
      image:
        "https://images.pexels.com/photos/3768897/pexels-photo-3768897.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-4 leading-tight">
            O que nossos clientes dizem
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Veja os depoimentos de quem já transformou sua vida com nossa ajuda
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  )
}
