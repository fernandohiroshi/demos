"use client";

import Image from "next/image";
import { motion, easeOut } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export function OurStorySection() {
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

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: easeOut }, // usando a função
    },
  };

  return (
    <section ref={ref} id="sobre" className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={itemVariants}>
            <motion.h2
              variants={itemVariants}
              className="text-4xl font-bold mb-6"
            >
              Nossa História
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-white/80 mb-6 leading-relaxed"
            >
              Profissionais dedicados trazendo sua visão à vida para criar arte
              significativa que conta sua história. Acreditamos que cada
              tatuagem deve ser tão única quanto a pessoa que a usa.
            </motion.p>
            <motion.p
              variants={itemVariants}
              className="text-white/80 mb-8 leading-relaxed"
            >
              Com mais de uma década de experiência, nossos artistas dominaram
              vários estilos e técnicas para entregar resultados excepcionais
              que superam expectativas.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 gap-6 mb-8"
            >
              <motion.div
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="https://images.pexels.com/photos/2183131/pexels-photo-2183131.jpeg"
                  alt="Processo de tatuagem"
                  width={120}
                  height={120}
                  className="rounded-lg object-cover h-full"
                />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, rotate: -2 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="https://images.pexels.com/photos/5320162/pexels-photo-5320162.jpeg"
                  alt="Equipamento de tatuagem"
                  width={120}
                  height={120}
                  className="rounded-lg object-cover h-full"
                />
              </motion.div>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-4">
              {[
                { label: "Nível de Experiência", value: "Especialista" },
                { label: "Estilo Artístico", value: "Todos os Estilos" },
                { label: "Padrões de Segurança", value: "Premium" },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={
                    isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                  }
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                  className="flex justify-between items-center"
                >
                  <span className="text-white/80">{item.label}</span>
                  <span className="text-white">{item.value}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4 }}
            className="relative"
          >
            <Image
              src="https://images.pexels.com/photos/2087995/pexels-photo-2087995.jpeg"
              alt="Trabalho detalhado de tatuagem"
              width={400}
              height={500}
              className="rounded-lg object-cover w-full"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
