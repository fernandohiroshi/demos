"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select";
import { useState } from "react";

export function MenuSection() {
  const menuItems = [
    {
      category: "Antipasti",
      items: [
        {
          name: "Bruschetta Tradizionale",
          description:
            "Pão italiano tostado com tomate fresco, manjericão e azeite extra virgem",
          price: "R$ 28",
        },
        {
          name: "Antipasto Misto",
          description:
            "Seleção de queijos, embutidos, azeitonas e vegetais marinados",
          price: "R$ 45",
        },
        {
          name: "Carpaccio di Manzo",
          description:
            "Finas fatias de carne bovina, rúcula, parmesão e molho de alcaparras",
          price: "R$ 39",
        },
        {
          name: "Arancini Siciliani",
          description: "Bolinhos de arroz recheados com queijo e ragu de carne",
          price: "R$ 32",
        },
        {
          name: "Focaccia al Rosmarino",
          description: "Pão italiano artesanal com azeite e alecrim fresco",
          price: "R$ 22",
        },
      ],
    },
    {
      category: "Primi Piatti",
      items: [
        {
          name: "Spaghetti Carbonara",
          description:
            "Massa artesanal com ovos, queijo pecorino, pancetta e pimenta preta",
          price: "R$ 52",
        },
        {
          name: "Risotto ai Funghi Porcini",
          description:
            "Risotto cremoso com cogumelos porcini e parmigiano reggiano",
          price: "R$ 58",
        },
        {
          name: "Lasagna della Nonna",
          description:
            "Lasanha tradicional com molho bolognese, bechamel e queijos",
          price: "R$ 48",
        },
        {
          name: "Gnocchi al Pesto",
          description: "Nhoque de batata ao molho pesto de manjericão e pinoli",
          price: "R$ 46",
        },
        {
          name: "Tagliatelle alla Bolognese",
          description: "Massa fresca com molho clássico de carne e tomate",
          price: "R$ 54",
        },
      ],
    },
    {
      category: "Secondi Piatti",
      items: [
        {
          name: "Pizza Margherita",
          description:
            "Pizza tradicional com molho de tomate, mozzarella di bufala e manjericão",
          price: "R$ 42",
        },
        {
          name: "Osso Buco alla Milanese",
          description: "Osso buco braseado com risotto alla milanese",
          price: "R$ 78",
        },
        {
          name: "Pollo alla Parmigiana",
          description:
            "Peito de frango empanado, molho de tomate e queijo gratinado",
          price: "R$ 56",
        },
        {
          name: "Saltimbocca alla Romana",
          description:
            "Escalopes de vitela com presunto cru e sálvia ao vinho branco",
          price: "R$ 74",
        },
        {
          name: "Bistecca alla Fiorentina",
          description:
            "Corte especial de carne bovina grelhado, servido ao ponto",
          price: "R$ 120",
        },
      ],
    },
    {
      category: "Dolci",
      items: [
        {
          name: "Tiramisù",
          description: "Sobremesa clássica com mascarpone, café e cacau",
          price: "R$ 24",
        },
        {
          name: "Panna Cotta ai Frutti di Bosco",
          description: "Panna cotta cremosa com calda de frutas vermelhas",
          price: "R$ 22",
        },
        {
          name: "Cannoli Siciliani",
          description:
            "Massa crocante recheada com creme de ricota e frutas cristalizadas",
          price: "R$ 18",
        },
        {
          name: "Gelato Artigianale",
          description: "Sorvete artesanal de sabores variados",
          price: "R$ 16",
        },
        {
          name: "Zabaglione",
          description: "Creme leve de gemas, açúcar e vinho marsala",
          price: "R$ 20",
        },
      ],
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState(menuItems[0].category);

  return (
    <section id="cardapio" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Imagem fixa à esquerda */}
          <div>
            <img
              src="/imgs/menu.jpg"
              alt="Ambiente aconchegante de restaurante italiano"
              className="rounded-xl shadow-lg object-cover w-full h-[340px] md:h-[420px] lg:h-[500px] border border-muted"
            />
          </div>

          {/* Menu textual à direita */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary mb-8">
              Menu
            </h2>
            {/* Select para mobile */}
            <div className="block md:hidden mb-8">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {menuItems.map((category) => (
                    <SelectItem key={category.category} value={category.category}>
                      {category.category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            {/* Tabs para desktop/tablet */}
            <div className="hidden md:block">
              <Tabs defaultValue={menuItems[0].category} value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
                <div className="relative -mx-4 px-4">
                  <TabsList className="mb-8 flex-nowrap overflow-x-auto gap-1 w-full whitespace-nowrap no-scrollbar relative">
                    {/* Fade lateral para indicar rolagem */}
                    <div className="pointer-events-none absolute left-0 top-0 h-full w-6 bg-gradient-to-r from-background via-background/80 to-transparent z-10" />
                    <div className="pointer-events-none absolute right-0 top-0 h-full w-6 bg-gradient-to-l from-background via-background/80 to-transparent z-10" />
                    {menuItems.map((category) => (
                      <TabsTrigger
                        key={category.category}
                        value={category.category}
                        className="text-lg px-4 py-2"
                      >
                        {category.category}
                      </TabsTrigger>
                    ))}
                  </TabsList>
                </div>
              </Tabs>
            </div>
            {/* Renderiza os itens da categoria selecionada */}
            <ul className="divide-y divide-muted-foreground/10 mt-4">
              {menuItems.find((cat) => cat.category === selectedCategory)?.items.map((item) => (
                <li key={item.name} className="py-4 flex flex-col gap-1">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-lg text-foreground">
                      {item.name}
                    </span>
                    <span className="font-semibold text-primary text-base">
                      {item.price}
                    </span>
                  </div>
                  <span className="text-muted-foreground text-sm">
                    {item.description}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
