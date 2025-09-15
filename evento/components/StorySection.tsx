"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function StorySection() {
  return (
    <section id="historia" className="py-20 bg-gradient-to-b from-rose-50 to-pink-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-serif text-gray-800 mb-8 tracking-widest">ELA DISSE SIM</h2>

          <div className="max-w-4xl mx-auto">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6 font-light">
              Em uma tarde ensolarada de primavera, João preparou uma surpresa especial. Com o coração acelerado e as
              mãos trêmulas, ele se ajoelhou e fez a pergunta que mudaria suas vidas para sempre.
            </p>

            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6 font-light">
              Tânia, com lágrimas de alegria nos olhos, disse sim sem hesitar. Naquele momento mágico, eles souberam que
              estavam prontos para começar uma nova jornada juntos.
            </p>

            <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-light italic">
              É com grande alegria que os convidamos para celebrar conosco este momento único e especial.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="max-w-2xl mx-auto"
        >
          <Image
            src="https://images.pexels.com/photos/1488312/pexels-photo-1488312.jpeg"
            alt="Tânia e João abraçados e sorridentes"
            width={800}
            height={600}
            className="w-full h-auto rounded-lg shadow-2xl object-cover"
          />
        </motion.div>
      </div>
    </section>
  )
}
