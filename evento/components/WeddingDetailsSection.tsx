"use client"

import { motion } from "framer-motion"
import { Calendar, Clock, MapPin } from "lucide-react"

export default function WeddingDetailsSection() {
  const details = [
    {
      icon: Calendar,
      title: "Data",
      info: "Sábado, 21 de Setembro, 2024",
    },
    {
      icon: Clock,
      title: "Cerimônia",
      info: "Cerimônia Religiosa: 15:00h\nRecepção: 17:00h",
    },
    {
      icon: MapPin,
      title: "Local",
      info: "Igreja Nossa Senhora da Paz\nRua das Flores, 123\nSão Paulo - SP",
    },
  ]

  return (
    <section id="detalhes" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-6xl font-serif text-gray-800 mb-8 tracking-widest">
              O GRANDE
              <br />
              DIA
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {details.map((detail, index) => (
              <motion.div
                key={detail.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="flex items-start space-x-4 p-6 bg-rose-50 rounded-lg shadow-sm"
              >
                <div className="flex-shrink-0">
                  <detail.icon className="w-6 h-6 text-rose-600 mt-1" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{detail.title}</h3>
                  <p className="text-gray-700 leading-relaxed whitespace-pre-line">{detail.info}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
