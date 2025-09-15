"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { AnimatedSection } from "@/components/ui/animated-section"
import { Check, Leaf } from "lucide-react"
import { motion } from "framer-motion"

interface ServiceCardProps {
  title: string
  price: string
  features: string[]
  featured?: boolean
  index?: number
}

export function ServiceCard({ title, price, features, featured = false, index = 0 }: ServiceCardProps) {
  return (
    <AnimatedSection delay={index * 0.2}>
      <motion.div whileHover={{ y: -10, scale: 1.02 }} transition={{ duration: 0.3 }}>
        <Card
          className={`relative transition-all duration-300 hover:shadow-xl ${
            featured ? "ring-2 ring-emerald-500 shadow-lg" : ""
          }`}
        >
          {featured && (
            <motion.div
              className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-emerald-500 text-white px-4 py-1 rounded-full text-sm font-medium"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Mais Popular
            </motion.div>
          )}

          <CardHeader className="text-center pb-4">
            <motion.div
              className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4"
              whileHover={{
                rotate: 360,
                backgroundColor: "rgb(16 185 129)",
              }}
              transition={{ duration: 0.5 }}
            >
              <motion.div whileHover={{ color: "white" }} transition={{ duration: 0.3 }}>
                <Leaf className="w-8 h-8 text-emerald-600" />
              </motion.div>
            </motion.div>

            <motion.div
              className="bg-emerald-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-4"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              {price}
            </motion.div>
            <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
          </CardHeader>

          <CardContent className="space-y-4">
            <ul className="space-y-3">
              {features.map((feature, featureIndex) => (
                <motion.li
                  key={featureIndex}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: featureIndex * 0.1 }}
                >
                  <Check className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600 text-sm">{feature}</span>
                </motion.li>
              ))}
            </ul>

            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                className={`w-full rounded-full transition-all duration-300 ${
                  featured
                    ? "bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg hover:shadow-xl"
                    : "bg-gray-800 hover:bg-gray-900 text-white"
                }`}
              >
                Escolher
              </Button>
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>
    </AnimatedSection>
  )
}
