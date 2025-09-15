import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Award, BookOpen, Users } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Sobre Mim
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Sou uma jornalista investigativa apaixonada, dedicada a
                descobrir a verdade e responsabilizar os poderosos. Com mestrado
                em Jornalismo pela Columbia University e mais de 15 anos de
                experiência, já cobri desde corrupção corporativa até questões
                de justiça social.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Meu trabalho foi destaque em grandes publicações como The New
                York Times, The Washington Post e The Guardian. Acredito no
                poder da narrativa para promover mudanças significativas e dar
                voz a quem mais precisa.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <Card className="border-gray-200">
                  <CardContent className="p-4 text-center">
                    <Award className="h-8 w-8 text-gray-600 mx-auto mb-2" />
                    <div className="font-semibold text-gray-900">Prêmios</div>
                    <div className="text-sm text-gray-600">
                      12 prêmios de jornalismo
                    </div>
                  </CardContent>
                </Card>
                <Card className="border-gray-200">
                  <CardContent className="p-4 text-center">
                    <BookOpen className="h-8 w-8 text-gray-600 mx-auto mb-2" />
                    <div className="font-semibold text-gray-900">
                      Publicações
                    </div>
                    <div className="text-sm text-gray-600">500+ artigos</div>
                  </CardContent>
                </Card>
                <Card className="border-gray-200">
                  <CardContent className="p-4 text-center">
                    <Users className="h-8 w-8 text-gray-600 mx-auto mb-2" />
                    <div className="font-semibold text-gray-900">Alcance</div>
                    <div className="text-sm text-gray-600">10M+ leitores</div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                <Image
                  src="https://images.pexels.com/photos/10041256/pexels-photo-10041256.jpeg"
                  alt="Sarah Mitchell"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover object-top"
                  quality={100}
                />
              </div>
              <div className="absolute hidden md:block -bottom-6 -right-6 bg-gray-900 text-white p-6 rounded-lg">
                <div className="text-2xl font-bold">15+</div>
                <div className="text-sm">Anos de Excelência</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
