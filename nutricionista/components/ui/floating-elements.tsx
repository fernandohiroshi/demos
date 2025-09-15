"use client"

import { motion } from "framer-motion"
import { Leaf, Apple, Carrot } from "lucide-react"

export function FloatingElements() {
  const elements = [
    { Icon: Leaf, delay: 0, x: "10%", y: "20%" },
    { Icon: Apple, delay: 1, x: "80%", y: "15%" },
    { Icon: Carrot, delay: 2, x: "15%", y: "70%" },
    { Icon: Leaf, delay: 1.5, x: "85%", y: "75%" },
  ]

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {elements.map(({ Icon, delay, x, y }, index) => (
        <motion.div
          key={index}
          className="absolute text-emerald-200/30"
          style={{ left: x, top: y }}
          initial={{ opacity: 0, scale: 0, rotate: 0 }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
            rotate: [0, 180, 360],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 4,
            delay,
            repeat: Number.POSITIVE_INFINITY,
            repeatDelay: 3,
            ease: "easeInOut",
          }}
        >
          <Icon size={24} />
        </motion.div>
      ))}
    </div>
  )
}
