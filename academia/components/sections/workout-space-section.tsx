"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

const workoutAreas = [
  {
    title: "TREINAMENTO DE FORÇA",
    image: "https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg",
    description: "Equipamentos de musculação profissionais",
  },
  {
    title: "FITNESS FUNCIONAL",
    image: "https://images.pexels.com/photos/4162438/pexels-photo-4162438.jpeg",
    description: "Exercícios com peso corporal",
  },
  {
    title: "CARDIO FITNESS",
    image: "https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg",
    description: "Equipamentos cardiovasculares modernos",
  },
  {
    title: "SESSÕES PERSONAIS",
    image: "https://images.pexels.com/photos/4162451/pexels-photo-4162451.jpeg",
    description: "Treinamento individual especializado",
  },
]

export function WorkoutSpaceSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="servicos" ref={ref} className="py-20 lg:py-32 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <Badge className="bg-lime-400 text-black mb-6 px-4 py-2 font-semibold">INSTALAÇÕES</Badge>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl lg:text-5xl font-bold mb-12 text-white"
        >
          EXPLORE NOSSO ESPAÇO DE TREINO
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {workoutAreas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
              whileHover={{ y: -10 }}
            >
              <Card className="bg-black border-gray-800 overflow-hidden group cursor-pointer h-full">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={area.image || "/placeholder.svg"}
                    alt={area.title}
                    width={300}
                    height={200}
                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-bold text-white mb-2 text-sm">{area.title}</h3>
                  <p className="text-gray-300 text-xs">{area.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
