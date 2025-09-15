"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "framer-motion";
import { useRef } from "react";

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="bg-cream-25 py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-8 text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light tracking-wider text-cream-800">
            POUSADA LECH
            <br />
            HOSPITALIDADE E CONFORTO
          </h2>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-cream-600">
            Viva a essência da hospitalidade familiar em um ambiente acolhedor,
            cercado pela natureza e por detalhes que tornam cada estadia única.
            Na Pousada Lech, tradição e conforto se unem para criar experiências
            inesquecíveis, seja para relaxar, celebrar ou explorar.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center"
          >
            <div className="mb-6 aspect-square overflow-hidden rounded-lg">
              <Image
                src="https://images.pexels.com/photos/33237502/pexels-photo-33237502.jpeg"
                alt="Recepção acolhedora da pousada"
                width={400}
                height={400}
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <h3 className="mb-2 text-base xs:text-lg sm:text-xl md:text-2xl font-light tracking-wider text-cream-800">
              ENCONTRE SEU
              <br />
              ANFITRIÃO PERFEITO
            </h3>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center"
          >
            <div className="mb-6 aspect-square overflow-hidden rounded-lg">
              <Image
                src="https://images.pexels.com/photos/28915353/pexels-photo-28915353.jpeg"
                alt="Paisagem alpina aconchegante"
                width={400}
                height={400}
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <h3 className="mb-2 text-base xs:text-lg sm:text-xl md:text-2xl font-light tracking-wider text-cream-800">
              CONFORTO EM TODOS
              <br />
              OS DETALHES
            </h3>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center"
          >
            <div className="mb-6 aspect-square overflow-hidden rounded-lg">
              <Image
                src="https://images.pexels.com/photos/13871294/pexels-photo-13871294.jpeg"
                alt="Atividades para toda família"
                width={400}
                height={400}
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <h3 className="mb-2 text-base xs:text-lg sm:text-xl md:text-2xl font-light tracking-wider text-cream-800">
              NATUREZA E LAZER
              <br />
              PARA VOCÊ
            </h3>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
