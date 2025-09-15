import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Instagram, Facebook, Twitter } from "lucide-react";

export default function Team() {
  const team = [
    {
      name: "Marcus Johnson",
      role: "Master Barber",
      specialty: "Cortes Clássicos & Barbearias",
      experience: "15 anos de experiência",
      image:
        "https://images.pexels.com/photos/9690289/pexels-photo-9690289.jpeg",
      social: {
        instagram: "#",
        facebook: "#",
        twitter: "#",
      },
    },
    {
      name: "David Rodriguez",
      role: "Barbeiro Sênior",
      specialty: "Estilos Modernos & Degradês",
      experience: "12 anos de experiência",
      image:
        "https://images.pexels.com/photos/10989588/pexels-photo-10989588.jpeg",
      social: {
        instagram: "#",
        facebook: "#",
        twitter: "#",
      },
    },
    {
      name: "James Wilson",
      role: "Especialista em Barba",
      specialty: "Cuidados com a Barba",
      experience: "8 anos de experiência",
      image:
        "https://images.pexels.com/photos/3998430/pexels-photo-3998430.jpeg",
      social: {
        instagram: "#",
        facebook: "#",
        twitter: "#",
      },
    },
    {
      name: "Michael Chen",
      role: "Consultor de Estilo",
      specialty: "Tratamentos Capilares",
      experience: "10 anos de experiência",
      image:
        "https://images.pexels.com/photos/5853392/pexels-photo-5853392.jpeg",
      social: {
        instagram: "#",
        facebook: "#",
        twitter: "#",
      },
    },
    {
      name: "Antonio Silva",
      role: "Master Barber",
      specialty: "Barbas Tradicionais",
      experience: "20 anos de experiência",
      image:
        "https://images.pexels.com/photos/7518732/pexels-photo-7518732.jpeg",
      social: {
        instagram: "#",
        facebook: "#",
        twitter: "#",
      },
    },
    {
      name: "Robert Taylor",
      role: "Estilista Sênior",
      specialty: "Cortes Criativos",
      experience: "14 anos de experiência",
      image:
        "https://images.pexels.com/photos/7697277/pexels-photo-7697277.jpeg",
      social: {
        instagram: "#",
        facebook: "#",
        twitter: "#",
      },
    },
  ];

  return (
    <section id="team" className="py-20 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-amber-500/10 text-amber-500 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            NOSSA EQUIPE
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Conheça Nossos <span className="text-amber-500">Especialistas</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Nossa equipe de mestres barbeiros traz décadas de experiência
            combinada e paixão pelo ofício. Cada especialista tem seu próprio
            estilo único e expertise.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <Card
              key={index}
              className="bg-zinc-950 pt-0 border-amber-500/20 overflow-hidden group hover:border-amber-500/40 transition-colors"
            >
              <div className="relative">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  width={400}
                  height={400}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

                {/* Social Media Overlay */}
                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={member.social.instagram}
                    className="p-2 bg-black/50 rounded-full hover:bg-amber-500 transition-colors"
                  >
                    <Instagram className="h-4 w-4 text-white" />
                  </a>
                  <a
                    href={member.social.facebook}
                    className="p-2 bg-black/50 rounded-full hover:bg-amber-500 transition-colors"
                  >
                    <Facebook className="h-4 w-4 text-white" />
                  </a>
                  <a
                    href={member.social.twitter}
                    className="p-2 bg-black/50 rounded-full hover:bg-amber-500 transition-colors"
                  >
                    <Twitter className="h-4 w-4 text-white" />
                  </a>
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  {member.name}
                </h3>
                <p className="text-amber-500 font-semibold mb-2">
                  {member.role}
                </p>
                <p className="text-gray-400 text-sm mb-3">{member.specialty}</p>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300 text-sm">
                    {member.experience} de experiência
                  </span>
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className="w-2 h-2 bg-amber-500 rounded-full"
                      />
                    ))}
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
