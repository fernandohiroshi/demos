"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function MissionStatement() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="py-16 border-t border-gray-800"
    >
      <div className="container mx-auto px-4 text-center">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
        >
          Dedicados a nutrir o bem-estar, promover a comunidade e impulsionar o crescimento físico de cada membro.
        </motion.p>
      </div>
    </motion.section>
  )
}
