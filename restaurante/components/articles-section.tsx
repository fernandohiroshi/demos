"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";

// Seção de Últimos Eventos
export function EventsSection() {
  const events = [
    {
      title: "Noite da Trufa Branca",
      description:
        "Menu especial com pratos à base de trufa branca de Alba. Reserve sua mesa!",
      image: "/imgs/articles1.jpg",
      date: "22 Ago, 2025",
    },
    {
      title: "Festival de Vinhos Italianos",
      description:
        "Degustação de vinhos italianos e queijos selecionados, com sommelier convidado.",
      image: "/imgs/articles2.jpg",
      date: "12 Set, 2025",
    },
    {
      title: "Jantar Musical com Jazz ao Vivo",
      description:
        "Jantar à la carte com apresentação de jazz ao vivo. Ambiente sofisticado e descontraído.",
      image: "/imgs/articles3.jpg",
      date: "30 Set, 2025",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-serif text-foreground mb-4">
            Últimos Eventos
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Fique por dentro dos eventos especiais, festivais e experiências
            exclusivas realizadas na Trattoria Bellavita.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {events.map(
            (
              event: {
                title: string;
                description: string;
                image: string;
                date: string;
              },
              index: number
            ) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="relative h-48 mb-4">
                  <Image
                    src={event.image}
                    alt={event.title}
                    width={420}
                    height={260}
                    className="rounded-xl object-cover mb-4 w-full h-[180px] md:h-[200px] lg:h-[220px] border border-muted"
                  />
                </div>
                <div className="p-6">
                  <div className="text-primary font-semibold text-lg mb-2">
                    {event.title}
                  </div>
                  <div className="text-muted-foreground mb-2 text-sm">
                    {event.date}
                  </div>
                  <div className="text-foreground mb-4">
                    {event.description}
                  </div>
                </div>
              </motion.article>
            )
          )}
        </div>
      </div>
    </section>
  );
}
