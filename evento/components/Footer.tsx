"use client"

import { motion } from "framer-motion"
import { Heart, Mail, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className="mb-6"
          >
            <Heart className="w-8 h-8 text-rose-400 mx-auto" fill="currentColor" />
          </motion.div>

          <h3 className="text-2xl font-serif mb-4">Tânia & João</h3>

          <p className="text-gray-300 mb-6">21 de Setembro, 2024</p>

          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 mb-8">
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <span>contato@taniajoao.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>(11) 99999-9999</span>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-6">
            <p className="text-gray-400 text-sm">© 2024 Tânia & João. Feito com amor para nosso grande dia.</p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
