"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <section id="inicio" className="relative h-screen flex items-center justify-center overflow-hidden">
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <video
  src="/hero.mp4"
  autoPlay
  loop
  muted
  playsInline
  className="object-cover w-full h-full absolute inset-0 opacity-60"
/>

        <div className="absolute inset-0 bg-black/50" />
      </motion.div>
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
          className="text-3xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight"
        >
          TATUAGENS PERSONALIZADAS,
          <br />
          FEITAS PARA VOCÊ
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-base md:text-xl mb-8 text-white/80"
        >
          Experimente a arte da tatuagem com nossos artistas especializados que dão vida à sua visão
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button size="lg" className="bg-white hover:bg-gray-300 text-black px-8 py-3 w-44 text-base font-semibold">
              Agendar Consulta
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-black px-8 py-3 bg-transparent w-44 text-base font-semibold"
            >
              Ver Galeria
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
