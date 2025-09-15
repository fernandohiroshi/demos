"use client";

import { useState } from "react";
import Image from "next/image";
import { Card } from "@/components/ui/card";

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "Todos os Trabalhos" },
    { id: "haircuts", name: "Cortes" },
    { id: "beards", name: "Barbas" },
    { id: "treatments", name: "Tratamentos" },
  ];

  const galleryItems = [
    {
      id: 1,
      category: "haircuts",
      image:
        "https://images.pexels.com/photos/1570807/pexels-photo-1570807.jpeg",
      title: "Degradê Moderno",
      description: "Degradê contemporâneo com topo texturizado",
    },
    {
      id: 2,
      category: "beards",
      image:
        "https://images.pexels.com/photos/3998427/pexels-photo-3998427.jpeg",
      title: "Escultura de Barba",
      description: "Aparar e modelar a barba com precisão",
    },
    {
      id: 3,
      category: "treatments",
      image:
        "https://images.pexels.com/photos/8789590/pexels-photo-8789590.jpeg",
      title: "Toalha Quente",
      description: "Tratamento relaxante com toalha quente",
    },
    {
      id: 4,
      category: "haircuts",
      image:
        "https://images.pexels.com/photos/1805600/pexels-photo-1805600.jpeg",
      title: "Pompadour Clássico",
      description: "Estilo atemporal com toque moderno",
    },
    {
      id: 5,
      category: "haircuts",
      image:
        "https://images.pexels.com/photos/9201296/pexels-photo-9201296.jpeg",
      title: "Corte Executivo",
      description: "Visual profissional para executivos",
    },
    {
      id: 6,
      category: "beards",
      image:
        "https://images.pexels.com/photos/3998405/pexels-photo-3998405.jpeg",
      title: "Estilo de Bigode",
      description: "Cuidados detalhados com o bigode",
    },
  ];

  const filteredItems =
    selectedCategory === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

  return (
    <section id="gallery" className="py-20 bg-zinc-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-amber-500/10 text-amber-500 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            NOSSO TRABALHO
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Nossos <span className="text-amber-500">Serviços Premium</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
            Veja nossos melhores trabalhos. Cada corte e estilo representa nosso
            compromisso com a excelência e atenção aos detalhes.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  selectedCategory === category.id
                    ? "bg-amber-500 text-black"
                    : "bg-zinc-800 text-gray-300 hover:bg-zinc-700"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <Card
              key={item.id}
              className="bg-zinc-800 py-0 border-amber-500/20 overflow-hidden group hover:border-amber-500/40 transition-colors"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  width={400}
                  height={400}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                  <h3 className="text-white font-semibold text-lg mb-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 text-sm">{item.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
