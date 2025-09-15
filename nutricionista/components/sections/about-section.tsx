"use client"

import { Button } from "@/components/ui/button"
import { NutritionStats } from "@/components/ui/nutrition-stats"
import { AnimatedSection } from "@/components/ui/animated-section"
import { motion } from "framer-motion"
import Image from "next/image"

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <AnimatedSection direction="left" delay={0.2}>
            <motion.div className="relative" whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
              <Image
                src="https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=500&h=600&fit=crop"
                alt="Nutricionista profissional sorrindo"
                width={500}
                height={600}
                className="rounded-lg shadow-lg"
              />
              <motion.div
                className="absolute -top-4 right-4 w-16 h-16 bg-emerald-500 rounded-full opacity-20"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          </AnimatedSection>

          <div className="space-y-6">
            <AnimatedSection direction="right" delay={0.3}>
              <h2 className="text-3xl md:text-4xl font-light text-gray-800 leading-tight">
                Uma abordagem{" "}
                <motion.span
                  className="text-emerald-600"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  inovadora
                </motion.span>{" "}
                para sua nutrição
              </h2>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.4}>
              <div className="space-y-4 text-gray-600">
                <motion.p
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum
                  tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero
                  vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum
                  tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero
                  vitae erat.
                </motion.p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.6}>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl">
                  Saiba mais
                </Button>
              </motion.div>
            </AnimatedSection>
          </div>
        </div>

        <AnimatedSection delay={0.8}>
          <NutritionStats />
        </AnimatedSection>
      </div>
    </section>
  )
}
