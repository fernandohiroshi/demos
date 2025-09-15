import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, TrendingUp, ExternalLink } from "lucide-react";

const recentArticles = [
  {
    title: "Ética em IA no Jornalismo: A Nova Fronteira",
    publication: "Columbia Journalism Review",
    date: "28 de março de 2024",
    readTime: "8 min de leitura",
    trending: true,
    category: "Tecnologia",
    excerpt:
      "Explorando como a inteligência artificial está transformando as redações e os desafios éticos enfrentados pelos jornalistas.",
    image:
      "https://images.pexels.com/photos/30530409/pexels-photo-30530409.jpeg", // IA no Jornalismo
  },
  {
    title: "A Crise de Saúde Mental nas Redações",
    publication: "Nieman Reports",
    date: "25 de março de 2024",
    readTime: "12 min de leitura",
    trending: true,
    category: "Indústria",
    excerpt:
      "Uma investigação sobre o impacto psicológico do jornalismo moderno e o que as organizações estão fazendo a respeito.",
    image:
      "https://images.pexels.com/photos/3094215/pexels-photo-3094215.jpeg?auto=compress&w=400&h=200&fit=crop", // Saúde Mental
  },
  {
    title: "Cobertura Climática na Era da Desinformação",
    publication: "The Guardian",
    date: "20 de março de 2024",
    readTime: "10 min de leitura",
    trending: false,
    category: "Meio Ambiente",
    excerpt:
      "Como jornalistas podem comunicar ciência do clima de forma eficaz enquanto combatem a desinformação generalizada.",
    image:
      "https://images.pexels.com/photos/2561628/pexels-photo-2561628.jpeg?auto=compress&w=400&h=200&fit=crop", // Clima
  },
  {
    title: "O Futuro das Notícias Locais",
    publication: "Poynter Institute",
    date: "15 de março de 2024",
    readTime: "15 min de leitura",
    trending: false,
    category: "Mídia",
    excerpt:
      "Examinando modelos inovadores que estão ajudando redações locais a sobreviver e prosperar na era digital.",
    image:
      "https://images.pexels.com/photos/3944454/pexels-photo-3944454.jpeg?auto=compress&w=400&h=200&fit=crop", // Notícias Locais
  },
];

export default function RecentWork() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex md:flex-row flex-col gap-8 items-center justify-between mb-16">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Trabalhos Recentes
              </h2>
              <p className="text-xl text-gray-600">
                Últimos artigos e histórias em destaque das minhas publicações
                recentes.
              </p>
            </div>
            <Button
              variant="outline"
              className="border-gray-300 bg-transparent"
            >
              Ver Todos os Artigos
            </Button>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {recentArticles.map((article, index) => (
              <Card
                key={index}
                className="overflow-hidden border-gray-200 hover:shadow-lg transition-shadow"
              >
                <div className="relative">
                  <img
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    className="w-full h-48 object-cover"
                  />
                  {article.trending && (
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-red-500 hover:bg-red-600">
                        <TrendingUp className="h-3 w-3 mr-1" />
                        Em Alta
                      </Badge>
                    </div>
                  )}
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="bg-white/90">
                      {article.category}
                    </Badge>
                  </div>
                </div>

                <CardContent className="p-6">
                  <div className="flex items-center text-gray-600 mb-3">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span className="text-sm">{article.date}</span>
                    <span className="mx-2">•</span>
                    <span className="text-sm">{article.readTime}</span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {article.title}
                  </h3>

                  <p className="text-gray-600 mb-4">{article.excerpt}</p>

                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-700">
                      {article.publication}
                    </span>
                    <Button variant="ghost" size="sm">
                      Ler Mais
                      <ExternalLink className="ml-2 h-4 w-4" />
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
