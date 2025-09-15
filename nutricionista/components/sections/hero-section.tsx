"use client"

import { Button } from "@/components/ui/button"
import { AnimatedSection } from "@/components/ui/animated-section"
import { FloatingElements } from "@/components/ui/floating-elements"
import { motion } from "framer-motion"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          alt="Mesa com torta, utensílios e ingredientes frescos"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-white/60" />
      </div>

      <FloatingElements />

      <div className="relative z-10 text-center max-w-2xl mx-auto px-4">
        <AnimatedSection delay={0.2}>
          <motion.h1
            className="text-4xl md:text-6xl font-light text-gray-800 mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Nutricionista que pode te fazer{" "}
            <motion.span
              className="text-emerald-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              feliz
            </motion.span>
          </motion.h1>
        </AnimatedSection>

        <AnimatedSection delay={0.4}>
          <p className="text-lg text-gray-600 mb-8 max-w-lg mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum
            tristique.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.6}>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-full text-lg transition-all duration-300 shadow-lg hover:shadow-xl">
              Conheça meus serviços
            </Button>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  )
}
