"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion, easeOut } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    title: "Design de Tatuagem Personalizada",
    description:
      "Trabalhe com nossos artistas para criar um design completamente único que reflita sua personalidade e história.",
    image: "https://images.pexels.com/photos/2865412/pexels-photo-2865412.jpeg",
  },
  {
    title: "Orientação de Cuidados Pós-Tatuagem",
    description:
      "Instruções abrangentes de cuidados pós-tatuagem e produtos premium para garantir que sua tatuagem cicatrize perfeitamente.",
    image: "https://images.pexels.com/photos/5320030/pexels-photo-5320030.jpeg",
  },
  {
    title: "Walk-in/Design de Cobertura",
    description:
      "Transforme tatuagens antigas ou faça tinta espontânea com nossos serviços walk-in e expertise em cobertura.",
    image: "https://images.pexels.com/photos/1447934/pexels-photo-1447934.jpeg",
  },
];

export function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: easeOut },
    },
  };

  return (
    <section ref={ref} id="servicos" className="py-20 px-4 bg-black/50">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Nossos Serviços
        </motion.h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                y: -10,
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
            >
              <Card className="bg-black border-black overflow-hidden h-full">
                <motion.div
                  className="relative h-48 overflow-hidden"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                >
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </motion.div>
                <CardContent className="p-6">
                  <motion.h3
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                    className="text-xl font-bold mb-3 text-white"
                  >
                    {service.title}
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                    className="text-white/80 mb-4"
                  >
                    {service.description}
                  </motion.p>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                      isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                    }
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      variant="outline"
                      className="border-white text-white hover:bg-white hover:text-black bg-transparent"
                    >
                      Saiba Mais
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
