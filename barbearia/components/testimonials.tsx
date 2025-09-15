"use client";

import { useState } from "react";

import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "John Anderson",
      role: "Executivo de Negócios",
      image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg", // Homem jovem, executivo
      rating: 5,
      text: "A atenção aos detalhes é incrível. Marcus me deu o melhor corte de cabelo que já tive. O ambiente é sofisticado e o serviço é de altíssimo nível. Não iria a outro lugar.",
      service: "Corte Clássico",
    },
    {
      name: "Robert Martinez",
      role: "Empreendedor",
      image:
        "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg", // Homem maduro, empreendedor
      rating: 5,
      text: "A expertise do David em estilos modernos é incomparável. Ele entendeu exatamente o que eu queria e superou minhas expectativas. O Tratamento Real vale cada centavo.",
      service: "Tratamento Real",
    },
    {
      name: "Michael Thompson",
      role: "Diretor Criativo",
      image: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg", // Homem criativo, casual
      rating: 5,
      text: "Frequento aqui há 3 anos e a qualidade nunca decepciona. A equipe é profissional, habilidosa e o ambiente é perfeito para relaxar. Recomendo muito!",
      service: "Barba Premium",
    },
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="py-20 bg-zinc-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-amber-500/10 text-amber-500 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            DEPOIMENTOS
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ouça o que Nossos{" "}
            <span className="text-amber-500">Clientes Dizem</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Não acredite apenas na nossa palavra. Veja o que nossos clientes
            satisfeitos têm a dizer sobre sua experiência conosco.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-black border-amber-500/20 relative overflow-hidden">
            <CardContent className="p-8 md:p-12">
              <div className="flex items-center justify-between mb-8">
                <Quote className="h-12 w-12 text-amber-500/30" />
                <div className="flex space-x-1">
                  {[...Array(testimonials[currentTestimonial].rating)].map(
                    (_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 fill-amber-500 text-amber-500"
                      />
                    )
                  )}
                </div>
              </div>

              <blockquote className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-8 italic">
                &quot;{testimonials[currentTestimonial].text}&quot;
              </blockquote>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <Avatar className="h-16 w-16 border-2 border-shadow-red/40">
                    <AvatarImage
                      className="object-cover"
                      src={
                        testimonials[currentTestimonial].image ||
                        "/placeholder.svg"
                      }
                      alt={testimonials[currentTestimonial].name}
                    />
                    <AvatarFallback>
                      {testimonials[currentTestimonial].name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="text-white font-semibold text-lg">
                      {testimonials[currentTestimonial].name}
                    </h4>
                    <p className="text-gray-400">
                      {testimonials[currentTestimonial].role}
                    </p>
                    <p className="text-shadow-red/40 text-sm">
                      {testimonials[currentTestimonial].service}
                    </p>
                  </div>
                </div>

                <div className="flex space-x-2">
                  <button
                    onClick={prevTestimonial}
                    className="p-2 bg-zinc-800 hover:bg-amber-500 rounded-full transition-colors group"
                  >
                    <ChevronLeft className="h-5 w-5 text-gray-400 group-hover:text-black" />
                  </button>
                  <button
                    onClick={nextTestimonial}
                    className="p-2 bg-zinc-800 hover:bg-amber-500 rounded-full transition-colors group"
                  >
                    <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-black" />
                  </button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Testimonial Indicators */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentTestimonial ? "bg-amber-500" : "bg-zinc-600"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
