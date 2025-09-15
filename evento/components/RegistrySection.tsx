"use client"

import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"

export default function RegistrySection() {
  const registries = [
    {
      name: "Amazon",
      description: "Lista de presentes completa",
      url: "#",
      color: "bg-orange-500",
    },
    {
      name: "Tok&Stok",
      description: "Móveis e decoração",
      url: "#",
      color: "bg-blue-500",
    },
    {
      name: "Camicado",
      description: "Casa e cozinha",
      url: "#",
      color: "bg-red-500",
    },
    {
      name: "Pix",
      description: "Contribuição em dinheiro",
      url: "#",
      color: "bg-green-500",
    },
  ]

  return (
    <section id="presentes" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-serif text-gray-800 mb-8 tracking-widest">LISTA DE PRESENTES</h2>

          <p className="text-lg text-gray-700 mb-4">Ajude-nos a construir nosso lar dos sonhos</p>

          <p className="text-gray-600 max-w-2xl mx-auto">
            Sua presença é o presente mais importante para nós, mas se desejar nos presentear, preparamos algumas opções
            especiais para começarmos nossa vida juntos.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {registries.map((registry, index) => (
            <motion.a
              key={registry.name}
              href={registry.url}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="block bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300"
            >
              <div className={`${registry.color} h-2`} />
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold text-gray-800">{registry.name}</h3>
                  <ExternalLink className="w-5 h-5 text-gray-400" />
                </div>
                <p className="text-gray-600">{registry.description}</p>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 italic">Contribuição: R$ 100,00</p>
        </motion.div>
      </div>
    </section>
  )
}
