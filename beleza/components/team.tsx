import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { Star, Award, Users } from "lucide-react";

export default function Team() {
  const teamMembers = [
    {
      name: "Jessica Chen",
      role: "Estilista Sênior",
      image:
        "https://images.pexels.com/photos/3993320/pexels-photo-3993320.jpeg",
      specialties: [
        "Corte de Cabelo",
        "Especialista em Cor",
        "Penteados para Noivas",
      ],
      experience: "8+ anos",
      achievements: [
        "Melhor Estilista 2023",
        "Especialista em Cor Certificada",
      ],
      clients: "500+",
      rating: 4.9,
    },
    {
      name: "Sarah Johnson",
      role: "Nail Artist e Manicure",
      image:
        "https://images.pexels.com/photos/7755224/pexels-photo-7755224.jpeg",
      specialties: ["Nail Art", "Manicures em Gel", "Pedicures"],
      experience: "5+ anos",
      achievements: ["Campeã de Nail Art", "Designer Criativa"],
      clients: "300+",
      rating: 4.9,
    },
    {
      name: "Maria Rodriguez",
      role: "Esteticista e Especialista em Spa",
      image:
        "https://images.pexels.com/photos/16120497/pexels-photo-16120497.jpeg",
      specialties: ["Tratamentos Faciais", "Anti-Idade", "Análise de Pele"],
      experience: "6+ anos",
      achievements: [
        "Especialista em Cuidados da Pele",
        "Especialista em Bem-Estar",
      ],
      clients: "400+",
      rating: 4.8,
    },
  ];

  return (
    <section id="team" className="py-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-stone-800 mb-6">
            Conheça nossa <span className="italic text-rose-400">equipe</span>{" "}
            especialista
          </h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            Nossos profissionais talentosos são apaixonados por ajudá-la a se
            sentir e parecer incrível
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-0 bg-white overflow-hidden"
            >
              <div className="relative">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  width={400}
                  height={400}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="text-sm font-semibold">{member.rating}</span>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-stone-800 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-rose-400 font-medium">{member.role}</p>
                </div>

                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {member.specialties.map((specialty, idx) => (
                      <Badge
                        key={idx}
                        variant="secondary"
                        className="bg-rose-50 text-rose-600 border-rose-200"
                      >
                        {specialty}
                      </Badge>
                    ))}
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <Award className="h-4 w-4 text-stone-400" />
                      <span className="text-stone-600">
                        {member.experience}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-stone-400" />
                      <span className="text-stone-600">
                        {member.clients} clientes
                      </span>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-stone-100">
                    <p className="text-xs text-stone-500 mb-1">
                      Conquistas Recentes:
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {member.achievements.map((achievement, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-stone-100 text-stone-600 px-2 py-1 rounded"
                        >
                          {achievement}
                        </span>
                      ))}
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
