import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Scissors, Sparkles, Heart, Palette, Flower, Star } from "lucide-react";
import Image from "next/image";

export default function Services() {
  const services = [
    {
      icon: Scissors,
      title: "Corte de Cabelo",
      description:
        "Cortes profissionais adaptados ao formato do seu rosto e estilo de vida",
      image:
        "https://images.pexels.com/photos/28994396/pexels-photo-28994396.jpeg",
      price: "A partir de R$ 65",
    },
    {
      icon: Sparkles,
      title: "Penteados",
      description:
        "Penteados criativos para ocasiões especiais e elegância do dia a dia",
      image:
        "https://images.pexels.com/photos/4880257/pexels-photo-4880257.jpeg",
      price: "A partir de R$ 45",
    },
    {
      icon: Heart,
      title: "Tratamentos Faciais",
      description:
        "Faciais rejuvenescedores usando produtos premium para cuidados da pele",
      image:
        "https://images.pexels.com/photos/3148935/pexels-photo-3148935.jpeg",
      price: "A partir de R$ 85",
    },
    {
      icon: Palette,
      title: "Manicures",
      description: "Belas nail arts e serviços clássicos de manicure",
      image:
        "https://images.pexels.com/photos/29228977/pexels-photo-29228977.jpeg",
      price: "A partir de R$ 35",
    },
    {
      icon: Flower,
      title: "Tratamentos Spa",
      description: "Tratamentos corporais relaxantes e terapias de bem-estar",
      image:
        "https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg",
      price: "A partir de R$ 95",
    },
    {
      icon: Star,
      title: "Pacotes para Noivas",
      description:
        "Pacotes completos de beleza para noivas para seu dia especial",
      image:
        "https://images.pexels.com/photos/30875782/pexels-photo-30875782.jpeg",
      price: "A partir de R$ 250",
    },
  ];

  return (
    <section id="services" className="py-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-stone-800 mb-6">
            Nossos <span className="italic text-rose-400">serviços</span>
          </h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            Descubra nossa gama abrangente de serviços de beleza projetados para
            realçar sua beleza natural
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-0 bg-white"
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full p-2">
                  <service.icon className="h-5 w-5 text-rose-400" />
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-semibold text-stone-800">
                    {service.title}
                  </h3>
                  <span className="text-rose-400 font-semibold">
                    {service.price}
                  </span>
                </div>
                <p className="text-stone-600 mb-4">{service.description}</p>
                <Button
                  variant="outline"
                  className="w-full border-rose-200 text-rose-400 hover:bg-rose-50 bg-transparent"
                >
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
