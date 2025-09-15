"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Users, Award, Clock, Heart } from "lucide-react"

export function StatsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const stats = [
    {
      icon: Users,
      number: "2000+",
      label: "Clientes Satisfeitos",
      description: "Experiências gastronômicas memoráveis",
    },
    {
      icon: Award,
      number: "15+",
      label: "Prêmios Recebidos",
      description: "Reconhecimento pela excelência",
    },
    {
      icon: Clock,
      number: "14",
      label: "Anos de Tradição",
      description: "Servindo a melhor culinária italiana",
    },
    {
      icon: Heart,
      number: "100%",
      label: "Ingredientes Frescos",
      description: "Qualidade em cada prato",
    },
  ]

  return (
    <section ref={ref} className="py-20 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="text-center group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                <stat.icon className="h-8 w-8 text-primary" />
              </div>
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ delay: index * 0.1 + 0.3, duration: 0.5, type: "spring" }}
                className="text-3xl md:text-4xl font-serif font-bold text-primary mb-2"
              >
                {stat.number}
              </motion.div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{stat.label}</h3>
              <p className="text-sm text-muted-foreground">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
