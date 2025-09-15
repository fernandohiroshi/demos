"use client"

import { TrendingUp, Users, Award, Heart } from "lucide-react"
import { AnimatedCounter } from "@/components/ui/animated-counter"
import { AnimatedSection } from "@/components/ui/animated-section"
import { motion } from "framer-motion"

export function NutritionStats() {
  const stats = [
    {
      icon: Users,
      number: 500,
      suffix: "+",
      label: "Clientes atendidos",
    },
    {
      icon: Award,
      number: 5,
      suffix: "",
      label: "Anos de experiência",
    },
    {
      icon: Heart,
      number: 98,
      suffix: "%",
      label: "Taxa de satisfação",
    },
    {
      icon: TrendingUp,
      number: 85,
      suffix: "%",
      label: "Resultados positivos",
    },
  ]

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      {stats.map((stat, index) => (
        <AnimatedSection key={index} delay={index * 0.1}>
          <motion.div className="text-center" whileHover={{ y: -5 }} transition={{ duration: 0.3 }}>
            <motion.div
              className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4"
              whileHover={{
                scale: 1.1,
                backgroundColor: "rgb(16 185 129)",
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.div whileHover={{ color: "white" }} transition={{ duration: 0.3 }}>
                <stat.icon className="w-8 h-8 text-emerald-600" />
              </motion.div>
            </motion.div>
            <div className="text-3xl font-bold text-gray-800 mb-2">
              <AnimatedCounter value={stat.number} suffix={stat.suffix} />
            </div>
            <div className="text-gray-600 text-sm">{stat.label}</div>
          </motion.div>
        </AnimatedSection>
      ))}
    </div>
  )
}
