"use client";

import Image from "next/image";
import { motion, easeOut } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const experts = [
  {
    name: "Sarah Johnson",
    role: "Artista Principal",
    specialty: "Especialista em retratos realistas e trabalhos de linha fina",
    image:
      "https://images.pexels.com/photos/31823303/pexels-photo-31823303.png",
  },
  {
    name: "Mike Rodriguez",
    role: "Artista Tradicional",
    specialty: "Especialista em estilos tradicionais e neo-tradicionais",
    image: "https://images.pexels.com/photos/5543219/pexels-photo-5543219.jpeg",
  },
  {
    name: "Alex Chen",
    role: "Especialista Geométrico",
    specialty: "Mestre em padrões geométricos e blackwork",
    image: "https://images.pexels.com/photos/842293/pexels-photo-842293.jpeg",
  },
];

export function ExpertsSection() {
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

  const expertVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.8, ease: easeOut },
    },
  };

  return (
    <section ref={ref} id="artistas" className="py-20 px-4 bg-black/50">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Nossos Especialistas em Tatuagem
        </motion.h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-8"
        >
          {experts.map((expert, index) => (
            <motion.div
              key={index}
              variants={expertVariants}
              whileHover={{
                y: -10,
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
              className="text-center"
            >
              <motion.div
                className="relative w-64 h-80 mx-auto mb-4 overflow-hidden rounded-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                  className="w-full h-full"
                >
                  <Image
                    src={expert.image || "/placeholder.svg"}
                    alt={expert.name}
                    fill
                    className="object-cover"
                  />
                </motion.div>
              </motion.div>
              <motion.h3
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                className="text-xl font-bold mb-2"
              >
                {expert.name}
              </motion.h3>
              <motion.p
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                className="text-white mb-2"
              >
                {expert.role}
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                className="text-white/80 text-sm"
              >
                {expert.specialty}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
