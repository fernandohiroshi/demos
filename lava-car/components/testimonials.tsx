import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Proprietária BMW",
      avatar: "https://i.pravatar.cc/120?img=5",
      rating: 5,
      text: "Serviço absolutamente incrível! Minha BMW nunca esteve melhor. A atenção aos detalhes é incomparável, e a equipe é incrivelmente profissional.",
    },
    {
      name: "Michael Chen",
      role: "Proprietário Tesla Model S",
      avatar: "https://i.pravatar.cc/120?img=11",
      rating: 5,
      text: "A CruzeWash transformou completamente meu Tesla. O enceramento cerâmico que aplicaram manteve meu carro com aparência de showroom por meses.",
    },
    {
      name: "Emily Rodriguez",
      role: "Proprietária Audi",
      avatar: "https://i.pravatar.cc/120?img=32",
      rating: 5,
      text: "Já experimentei muitos lava-jatos, mas nenhum se compara à CruzeWash. Eles tratam cada carro como se fosse deles. Altamente recomendado!",
    },
    {
      name: "David Thompson",
      role: "Proprietário Mercedes",
      avatar: "https://i.pravatar.cc/120?img=8",
      rating: 5,
      text: "O pacote premium superou todas as expectativas. Minha Mercedes está melhor do que quando a comprei. Vale cada centavo!",
    },
    {
      name: "Lisa Park",
      role: "Proprietária Porsche",
      avatar: "https://i.pravatar.cc/120?img=47",
      rating: 5,
      text: "Profissional, confiável e resultados excepcionais. A equipe da CruzeWash sabe como cuidar de veículos de luxo com carinho.",
    },
    {
      name: "James Wilson",
      role: "Proprietário Range Rover",
      avatar: "https://i.pravatar.cc/120?img=15",
      rating: 5,
      text: "Atendimento excepcional do início ao fim. Eles ainda oferecem busca e entrega, o que é incrivelmente conveniente para agendas ocupadas.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Não acredite apenas em nossa palavra. Veja o que nossos clientes
            satisfeitos têm a dizer sobre sua experiência na CruzeWash.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <CardContent className="p-6 flex flex-col items-stretch justify-between h-full">
                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-slate-600 mb-6 leading-relaxed flex-1">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="flex items-center mt-auto pt-2">
                  <div className="mr-4">
                    <Avatar className="w-12 h-12">
                      <AvatarImage
                        src={testimonial.avatar}
                        alt={testimonial.name}
                      />
                      <AvatarFallback>
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-slate-500">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
