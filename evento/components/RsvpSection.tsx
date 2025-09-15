"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"

export default function RsvpSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    guests: "1",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aqui você implementaria a lógica de envio do formulário
    console.log("RSVP enviado:", formData)
    alert("Confirmação enviada com sucesso!")
  }

  return (
    <section id="rsvp" className="py-20 bg-gradient-to-b from-rose-50 to-pink-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-serif text-gray-800 mb-8 tracking-widest">VAMOS CELEBRAR</h2>

          <p className="text-lg text-gray-700 mb-4">Confirme sua presença até 21 de Agosto, 2024</p>

          <p className="text-gray-600">Registre-se agora</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 mb-2 font-medium">Nome Completo *</label>
                <Input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full"
                  placeholder="Seu nome completo"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2 font-medium">Email *</label>
                <Input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full"
                  placeholder="seu@email.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 mb-2 font-medium">Número de Convidados</label>
              <select
                value={formData.guests}
                onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-rose-500 focus:border-transparent"
              >
                <option value="1">1 pessoa</option>
                <option value="2">2 pessoas</option>
                <option value="3">3 pessoas</option>
                <option value="4">4 pessoas</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-700 mb-2 font-medium">Mensagem (opcional)</label>
              <Textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full"
                placeholder="Deixe uma mensagem carinhosa para os noivos..."
                rows={4}
              />
            </div>

            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                type="submit"
                className="w-full bg-rose-600 hover:bg-rose-700 text-white py-3 text-lg font-medium"
              >
                Confirmar Presença
              </Button>
            </motion.div>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
