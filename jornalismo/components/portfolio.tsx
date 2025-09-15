import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ExternalLink, Calendar } from "lucide-react";

const featuredArticles = [
  {
    title: "O Custo Oculto da Evasão Fiscal Corporativa",
    publication: "The New York Times",
    date: "15 de março de 2024",
    description:
      "Uma investigação de seis meses revela como empresas da Fortune 500 evitam bilhões em impostos enquanto pequenos negócios enfrentam dificuldades.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Investigação",
    featured: true,
  },
  {
    title: "Vozes da Linha de Frente do Clima",
    publication: "The Guardian",
    date: "28 de fevereiro de 2024",
    description:
      "Histórias pessoais de comunidades mais afetadas pelas mudanças climáticas ao redor do mundo.",
    image:
      "https://images.pexels.com/photos/63858/mill-windmill-wind-sky-63858.jpeg",
    category: "Especial",
  },
  {
    title: "Profissionais de Saúde Falam",
    publication: "The Washington Post",
    date: "20 de janeiro de 2024",
    description:
      "Um olhar aprofundado sobre os desafios enfrentados por profissionais de saúde no pós-pandemia.",
    image: "https://images.pexels.com/photos/249348/pexels-photo-249348.jpeg",
    category: "Investigação",
  },
  {
    title: "O Futuro do Trabalho Remoto",
    publication: "Wired Magazine",
    date: "10 de dezembro de 2023",
    description:
      "Como a pandemia mudou permanentemente o ambiente de trabalho e o que isso significa para o futuro.",
    image: "https://images.pexels.com/photos/4050301/pexels-photo-4050301.jpeg",
    category: "Especial",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Trabalho em Destaque
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Uma seleção das minhas investigações e histórias mais impactantes,
              que ajudaram a moldar o debate público e promover mudanças reais.
            </p>
          </div>

          {/* Featured Article */}
          <div className="mb-12">
            <Card className="overflow-hidden border-gray-200">
              <div className="grid lg:grid-cols-2">
                <div className="relative">
                  <Image
                    src="https://images.pexels.com/photos/10041271/pexels-photo-10041271.jpeg"
                    alt={featuredArticles[0].title}
                    width={600}
                    height={400}
                    className="w-full h-64 lg:h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-gray-900 text-white px-3 py-1 rounded-full text-sm">
                      {featuredArticles[0].category}
                    </span>
                  </div>
                </div>
                <CardContent className="p-8 flex flex-col justify-center">
                  <div className="flex items-center text-gray-600 mb-4">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span className="text-sm">{featuredArticles[0].date}</span>
                    <span className="mx-2">•</span>
                    <span className="text-sm font-medium">
                      {featuredArticles[0].publication}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Destaque da Carreira
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {featuredArticles[0].description}
                  </p>
                  <Button
                    variant="outline"
                    className="w-fit border-gray-300 bg-transparent"
                  >
                    Ler Artigo
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </div>
            </Card>
          </div>

          {/* Article Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredArticles.slice(1).map((article, index) => (
              <Card
                key={index}
                className="overflow-hidden border-gray-200 hover:shadow-lg transition-shadow"
              >
                <div className="relative">
                  <img
                    src={article.image || ""}
                    alt={article.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-gray-900 text-white px-3 py-1 rounded-full text-sm">
                      {article.category === "Investigação"
                        ? "Investigação"
                        : article.category === "Especial"
                        ? "Especial"
                        : article.category}
                    </span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center text-gray-600 mb-3">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span className="text-sm">{article.date}</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {article.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-700">
                      {article.publication}
                    </span>
                    <Button variant="ghost" size="sm">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
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
