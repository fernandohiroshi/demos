import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const testimonials = [
  {
    name: "Michael Chen",
    role: "Editor-Chefe",
    company: "The New York Times",
    avatar: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&w=60&h=60&fit=facearea&facepad=2.5", 
    content:
      "O trabalho investigativo da Sarah é incomparável. Sua atenção aos detalhes e compromisso com a verdade resultaram em algumas das nossas reportagens mais impactantes. Ela é uma jornalista exemplar.",
    rating: 5,
  },
  {
    name: "Dra. Amanda Rodriguez",
    role: "Fonte & Denunciante",
    company: "Profissional da Saúde",
    avatar: "https://images.pexels.com/photos/12471831/pexels-photo-12471831.jpeg?auto=compress&w=60&h=60&fit=facearea&facepad=2.5", 
    content:
      "Sarah tratou minha história com incrível sensibilidade e profissionalismo. Ela protegeu minha identidade e garantiu que a verdade viesse à tona. Seu trabalho levou a mudanças reais de política.",
    rating: 5,
  },
  {
    name: "James Thompson",
    role: "Editor Executivo",
    company: "The Washington Post",
    avatar: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&w=60&h=60&fit=facearea&facepad=2.5", 
    content:
      "Trabalhar com Sarah foi uma verdadeira aula de jornalismo investigativo. Sua pesquisa é minuciosa, sua escrita envolvente e sua ética é irrepreensível.",
    rating: 5,
  },
  {
    name: "Lisa Park",
    role: "Diretora de Comunicação",
    company: "Organização Sem Fins Lucrativos",
    avatar: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&w=60&h=60&fit=facearea&facepad=2.5", 
    content:
      "Sarah nos ajudou a contar nossa história de uma forma que alcançou milhões. Sua capacidade de humanizar temas complexos mantendo a integridade jornalística é notável.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              O Que Dizem
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Depoimentos de editores, fontes e colegas que trabalharam comigo
              ao longo da minha carreira no jornalismo.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="border-gray-200 hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Quote className="h-8 w-8 text-gray-300 mr-3" />
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                  </div>

                  <p className="text-gray-600 mb-6 italic">
                    "{testimonial.content}"
                  </p>

                  <div className="flex items-center">
                    <Avatar className="w-12 h-12 mr-4">
                      <AvatarImage
                        src={testimonial.avatar || "/placeholder.svg"}
                        alt={testimonial.name}
                      />
                      <AvatarFallback>
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")
                          .slice(0, 2)}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold text-gray-900">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-gray-600">
                        {testimonial.role} em {testimonial.company}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
