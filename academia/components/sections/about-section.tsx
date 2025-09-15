"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="sobre" ref={ref} className="py-20 lg:py-32 bg-black">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Badge className="bg-lime-400 text-black mb-6 px-4 py-2 font-semibold">SOBRE NÓS</Badge>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-4xl lg:text-5xl font-bold mb-6 text-white"
            >
              SOBRE NÓS
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-gray-300 mb-6 text-lg leading-relaxed"
            >
              Somos dedicados a proporcionar a melhor experiência fitness com nossos equipamentos modernos, treinadores
              especialistas e comunidade acolhedora. Nossa missão é ajudá-lo a alcançar seus objetivos fitness em um
              ambiente motivador.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-gray-300 mb-8 text-lg leading-relaxed"
            >
              Com mais de 10 anos de experiência na indústria fitness, ajudamos milhares de membros a transformarem suas
              vidas através de programas de fitness e bem-estar.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button className="bg-lime-400 text-black hover:bg-lime-500 px-8 py-3 font-semibold">
                SAIBA MAIS
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl">
              <Image
                src="https://images.pexels.com/photos/4162449/pexels-photo-4162449.jpeg"
                alt="Pessoa fazendo exercício de prancha"
                width={600}
                height={600}
                className="object-cover w-full h-[500px] lg:h-[600px]"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
