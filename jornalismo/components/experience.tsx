import { Card, CardContent } from "@/components/ui/card";
import { Building, Calendar, Award } from "lucide-react";
import Image from "next/image";

const experiences = [
  {
    role: "Repórter Investigativa Sênior",
    company: "The New York Times",
    period: "2020 - Atual",
    description:
      "Liderança de equipe investigativa cobrindo responsabilidade corporativa e transparência governamental.",
    achievements: [
      "Pulitzer Prize Finalist 2023",
      "3 National Press Club Awards",
    ],
  },
  {
    role: "Redatora",
    company: "The Washington Post",
    period: "2017 - 2020",
    description:
      "Cobertura de política, justiça social e notícias de última hora com foco em reportagens investigativas.",
    achievements: [
      "George Polk Award 2019",
      "Society of Professional Journalists Award",
    ],
  },
  {
    role: "Jornalista Freelancer",
    company: "Various Publications",
    period: "2015 - 2017",
    description:
      "Colaborações para The Guardian, Wired, The Atlantic e outros grandes veículos.",
    achievements: [
      "National Magazine Award Nomination",
      "Overseas Press Club Award",
    ],
  },
  {
    role: "Repórter Júnior",
    company: "Chicago Tribune",
    period: "2012 - 2015",
    description:
      "Início de carreira cobrindo notícias locais, política municipal e questões comunitárias.",
    achievements: [
      "Illinois Press Association Award",
      "Rising Star Journalist 2014",
    ],
  },
];

const publications = [
  { name: "The New York Times", logo: "/ny-logo.svg" },
  { name: "The Washington Post", logo: "/wp-logo.svg" },
  { name: "The Guardian", logo: "/tg-logo.svg" },
  { name: "Wired", logo: "/w-logo.svg" },
  { name: "The Atlantic", logo: "/ta-logo.svg" },
  { name: "Chicago Tribune", logo: "/ct-logo.svg" },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Experiência
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Uma carreira construída com integridade, pesquisa minuciosa e
              compromisso com a verdade, atuando nos veículos de imprensa mais
              respeitados do mundo.
            </p>
          </div>

          {/* Career Timeline */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Destaques da Carreira
            </h3>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <Card key={index} className="border-gray-200">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h4 className="text-xl font-bold text-gray-900">
                          {exp.role}
                        </h4>
                        <div className="flex items-center text-gray-600 mt-1">
                          <Building className="h-4 w-4 mr-2" />
                          <span>{exp.company}</span>
                        </div>
                      </div>
                      <div className="flex items-center text-gray-600 mt-2 md:mt-0">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.achievements.map((achievement, i) => (
                        <div
                          key={i}
                          className="flex items-center bg-gray-100 px-3 py-1 rounded-full"
                        >
                          <Award className="h-3 w-3 mr-1 text-gray-600" />
                          <span className="text-sm text-gray-700">
                            {achievement}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Publications */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-12 text-center">
              Publicado em
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
              {publications.map((pub, index) => (
                <div key={index} className="flex justify-center">
                  <Image
                    src={pub.logo || "/placeholder.svg"}
                    alt={pub.name}
                    width={120}
                    height={60}
                    className="h-12 object-contain opacity-60 hover:opacity-100 transition-opacity"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
