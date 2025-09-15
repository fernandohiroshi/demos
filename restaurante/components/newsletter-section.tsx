"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail } from "lucide-react"

export function NewsletterSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aqui seria implementada a lógica de inscrição na newsletter
    alert("Obrigado por se inscrever! Você receberá nossas novidades em breve.")
    setEmail("")
  }

  return (
    <section ref={ref} className="py-20 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-primary text-primary-foreground p-8 rounded-lg">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Fique por dentro das novidades</h2>
              <p className="text-lg mb-6 opacity-90">
                Receba em primeira mão informações sobre novos pratos, eventos especiais e promoções exclusivas da
                Trattoria Bellavita.
              </p>

              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <Input
                    type="email"
                    placeholder="Seu melhor e-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="bg-white text-foreground border-0"
                  />
                </div>
                <Button
                  type="submit"
                  variant="secondary"
                  className="bg-secondary text-secondary-foreground hover:bg-secondary/90"
                >
                  <Mail className="h-4 w-4 mr-2" />
                  Inscrever-se
                </Button>
              </form>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="overflow-hidden">
              <img
                src="/images/wine-selection.png"
                alt="Seleção de vinhos italianos"
                className="w-full h-[400px] object-cover"
              />
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
