import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const offerings = [
  {
    title: "BANHO COMPLETO",
    description:
      "Banho com produtos premium, secagem profissional e perfume especial para pets.",
    image: "https://images.pexels.com/photos/485294/pexels-photo-485294.jpeg",
    buttonColor: "bg-[#E85A4F] hover:bg-[#D44A3F]",
    buttonText: "AGENDAR",
  },
  {
    title: "TOSA ARTÍSTICA",
    description: "Equipamentos profissionais e técnicas especializadas.",
    image: "https://images.pexels.com/photos/6816847/pexels-photo-6816847.jpeg",
    buttonColor: "bg-[#4A90E2] hover:bg-[#357ABD]",
    buttonText: "AGENDAR",
  },
  {
    title: "SPA CANINO",
    description:
      "Tratamento completo com hidratação, massagem relaxante e cuidados especiais.",
    image: "https://images.pexels.com/photos/8343342/pexels-photo-8343342.jpeg",
    buttonColor: "bg-[#7ED321] hover:bg-[#6BC91A]",
    buttonText: "AGENDAR",
  },
];

export default function WhatWeOfferSection() {
  return (
    <section
      id="services"
      className="bg-white px-4 py-16 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <h2
          id="servicos"
          className="text-center text-5xl lg:text-6xl font-black text-black mb-6"
        >
          Serviços para seu pet
        </h2>
        <p className="text-center text-lg lg:text-xl text-black mb-12 max-w-3xl mx-auto">
          Conheça nossos serviços profissionais de banho, tosa, spa e cuidados
          especiais para o bem-estar do seu pet.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offerings.map((item, index) => (
            <Card
              key={index}
              className="bg-[#F5F1E8] rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-300"
            >
              <div className="relative h-48">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-black">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
                <Button
                  className={`${item.buttonColor} text-white px-6 py-2 rounded-full font-semibold w-full`}
                >
                  {item.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
