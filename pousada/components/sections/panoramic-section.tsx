"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "framer-motion";
import { useRef } from "react";

export function PanoramicSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="relative h-screen overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="https://images.pexels.com/photos/5590653/pexels-photo-5590653.jpeg"
          alt="Recepção acolhedora da pousada"
          fill
          className="object-cover"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />

      <div className="relative z-10 flex h-full items-center">
        <div className="container mx-auto px-6">
          <div className="grid gap-12 md:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8 }}
              className="text-cream-50"
            >
              <h3 className="mb-4 text-base xs:text-lg sm:text-xl md:text-2xl font-light tracking-wider">
                UM NOVO DIA NA POUSADA
              </h3>
              <p className="text-sm leading-relaxed opacity-90">
                Cada amanhecer traz novas possibilidades de relaxar, explorar a
                natureza e viver momentos especiais em um ambiente acolhedor e
                familiar na Pousada Lech.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-cream-50"
            >
              <h3 className="mb-4 text-base xs:text-lg sm:text-xl md:text-2xl font-light tracking-wider">
                O LUGAR PERFEITO
              </h3>
              <p className="text-sm leading-relaxed opacity-90">
                Em meio à natureza, a Pousada Lech oferece uma experiência única de hospitalidade calorosa e conforto caseiro.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-cream-50"
            >
              <h3 className="mb-4 text-base xs:text-lg sm:text-xl md:text-2xl font-light tracking-wider">
                TRADIÇÃO E
              </h3>
              <h3 className="mb-4 text-base xs:text-lg sm:text-xl md:text-2xl font-light tracking-wider">
                MODERNIDADE
              </h3>
              <p className="text-sm leading-relaxed opacity-90">
                Combinamos a tradição familiar com o conforto aconchegante para criar momentos especiais.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
