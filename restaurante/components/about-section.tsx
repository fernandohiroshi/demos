"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/ui/card";
import { ChefHatIcon as Chef, Heart, Award } from "lucide-react";

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: Chef,
      title: "Chefs Experientes",
      description:
        "Nossa equipe de chefs traz décadas de experiência da Itália",
    },
    {
      icon: Heart,
      title: "Ingredientes Frescos",
      description: "Utilizamos apenas ingredientes da mais alta qualidade",
    },
    {
      icon: Award,
      title: "Tradição Familiar",
      description: "Receitas passadas de geração em geração",
    },
  ];

  return (
    <section id="sobre" ref={ref} className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary mb-6">
              Crie uma atmosfera acolhedora e artesanal
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Na Trattoria Bellavita, cada prato conta uma história. Fundada em
              2010 por uma família italiana apaixonada pela culinária, nossa
              trattoria oferece uma experiência gastronômica autêntica no
              coração de São Paulo.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Nossos chefs especializados trazem receitas tradicionais da
              Toscana e Emilia-Romagna, preparadas com ingredientes importados e
              produtos locais da mais alta qualidade.
            </p>

            {/* Features */}
            <div className="grid sm:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-serif font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <Card className="overflow-hidden">
              <img
                src="/imgs/about.jpg"
                alt="Ingredientes frescos italianos - tomates, manjericão, azeite e queijos"
                className="w-full h-[500px] object-cover"
              />
            </Card>

            {/* Floating Stats */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="absolute -bottom-6 -left-6 bg-card p-6 rounded-lg shadow-lg border"
            >
              <div className="text-center">
                <div className="text-2xl font-serif font-bold text-primary">
                  14+
                </div>
                <div className="text-sm text-muted-foreground">
                  Anos de Tradição
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="absolute -top-6 -right-6 bg-card p-6 rounded-lg shadow-lg border"
            >
              <div className="text-center">
                <div className="text-2xl font-serif font-bold text-primary">
                  50+
                </div>
                <div className="text-sm text-muted-foreground">
                  Pratos Especiais
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
