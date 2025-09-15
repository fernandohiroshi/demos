"use client"

import { useInView } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Calendar } from "lucide-react"
import Image from "next/image"

const newsArticles = [
  {
    title: "FITNESS FUNCIONAL CONSTRÓI FORÇA PARA A VIDA REAL",
    image: "https://images.pexels.com/photos/4162438/pexels-photo-4162438.jpeg",
    date: "15 de Dezembro, 2023",
    excerpt: "Descubra como o treinamento funcional pode melhorar sua qualidade de vida diária.",
  },
  {
    title: "CONSULTORIA NUTRICIONAL E SUPORTE TELEFÔNICO",
    image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
    date: "12 de Dezembro, 2023",
    excerpt: "Aprenda sobre nossos serviços de nutrição e como eles podem acelerar seus resultados.",
  },
  {
    title: "FAÇA DA RECUPERAÇÃO ATIVA UM ESTILO DE VIDA SAUDÁVEL",
    image: "https://images.pexels.com/photos/4056723/pexels-photo-4056723.jpeg",
    date: "10 de Dezembro, 2023",
    excerpt: "A importância da recuperação ativa para manter um estilo de vida fitness sustentável.",
  },
]

export function NewsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="blog" ref={ref} className="py-20 lg:py-32 bg-gray-900">
      <div className="container mx-auto px-4">
        <div>
          <Badge className="bg-lime-400 text-black mb-6 px-4 py-2 font-semibold">BLOG</Badge>
        </div>

        <h2 className="text-4xl lg:text-5xl font-bold mb-12 text-white">
          ÚLTIMAS NOTÍCIAS
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsArticles.map((article, index) => (
            <div key={article.title}>
              <Card className="bg-black border-gray-800 overflow-hidden group cursor-pointer h-full">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    width={400}
                    height={200}
                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-2 text-lime-400 text-sm mb-3">
                    <Calendar className="w-4 h-4" />
                    <span>{article.date}</span>
                  </div>
                  <h3 className="font-bold text-white mb-3 line-clamp-2 leading-tight">{article.title}</h3>
                  <p className="text-gray-300 text-sm mb-4 line-clamp-2">{article.excerpt}</p>
                  <Button variant="ghost" className="p-0 h-auto text-lime-400 hover:text-lime-400 group">
                    LEIA MAIS
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div>
            <Button className="bg-lime-400 text-black hover:bg-lime-500 px-8 py-3 font-semibold">
              VER TODOS OS POSTS
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
