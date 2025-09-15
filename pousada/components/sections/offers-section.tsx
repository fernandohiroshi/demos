"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";

export function OffersSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const offers = [
    {
      title: "FAMÍLIA NA POUSADA",
      subtitle: "PACOTE ESPECIAL",
      description:
        "Hospedagem aconchegante, café da manhã artesanal e momentos de lazer para todas as idades. Viva dias inesquecíveis com quem você ama.",
      image:
        "https://images.pexels.com/photos/14835901/pexels-photo-14835901.jpeg",
    },
    {
      title: "NATUREZA E LAZER",
      subtitle: "EXPERIÊNCIA AO AR LIVRE",
      description:
        "Trilhas leves, atividades em meio à natureza e diversão garantida para toda a família, sem sair da pousada.",
      image:
        "https://images.pexels.com/photos/6364092/pexels-photo-6364092.jpeg",
    },
    {
      title: "SABORES DA CASA",
      subtitle: "GASTRONOMIA AFETIVA",
      description:
        "Pratos preparados com ingredientes frescos e receitas tradicionais, servidos em um ambiente familiar e acolhedor.",
      image:
        "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg",
    },
  ];

  return (
    <section id="offers" ref={ref} className="bg-cream-50 py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-8 text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light tracking-wider text-cream-800">
            OFERTAS E PACOTES
          </h2>
        </motion.div>

        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {offers.map((offer, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group overflow-hidden rounded-lg bg-white shadow-lg transition-transform duration-300 hover:scale-105"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <Image
                  src={offer.image || "/placeholder.svg"}
                  alt={offer.title}
                  width={600}
                  height={400}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-base xs:text-lg sm:text-xl md:text-2xl font-light tracking-wider text-cream-800">
                  {offer.title}
                </h3>
                <h3 className="mb-4 text-lg xs:text-xl sm:text-2xl md:text-3xl font-light tracking-wider text-cream-800">
                  {offer.subtitle}
                </h3>
                <p className="mb-6 text-cream-600">{offer.description}</p>
                <Button variant="outline" className="w-full bg-transparent">
                  Saiba Mais
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
