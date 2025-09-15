"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function BookingSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="booking" ref={ref} className="bg-cream-100 py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-8 text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light tracking-wider text-cream-800">RESERVA</h2>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-cream-600">
            Reserve sua estadia conosco e descubra o verdadeiro significado da hospitalidade alpina familiar e
            acolhedora.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto max-w-2xl rounded-lg bg-white p-8 shadow-lg"
        >
          <form className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <Label htmlFor="checkin" className="text-cream-700">
                  Check-in
                </Label>
                <Input id="checkin" type="date" className="mt-2 border-cream-300 focus:border-cream-500" />
              </div>
              <div>
                <Label htmlFor="checkout" className="text-cream-700">
                  Check-out
                </Label>
                <Input id="checkout" type="date" className="mt-2 border-cream-300 focus:border-cream-500" />
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <Label htmlFor="adults" className="text-cream-700">
                  Adultos
                </Label>
                <Input
                  id="adults"
                  type="number"
                  min="1"
                  defaultValue="2"
                  className="mt-2 border-cream-300 focus:border-cream-500"
                />
              </div>
              <div>
                <Label htmlFor="children" className="text-cream-700">
                  Crianças
                </Label>
                <Input
                  id="children"
                  type="number"
                  min="0"
                  defaultValue="0"
                  className="mt-2 border-cream-300 focus:border-cream-500"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="email" className="text-cream-700">
                E-mail
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="seu@email.com"
                className="mt-2 border-cream-300 focus:border-cream-500"
              />
            </div>

            <div>
              <Label htmlFor="message" className="text-cream-700">
                Mensagem (opcional)
              </Label>
              <textarea
                id="message"
                rows={4}
                placeholder="Conte-nos sobre suas preferências ou necessidades especiais..."
                className="mt-2 w-full rounded-md border border-cream-300 px-3 py-2 focus:border-cream-500 focus:outline-none focus:ring-1 focus:ring-cream-500"
              />
            </div>

            <Button className="w-full bg-cream-700 text-white hover:bg-cream-800">Verificar Disponibilidade</Button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
