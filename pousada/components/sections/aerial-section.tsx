"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "framer-motion";
import { useRef } from "react";

export function AerialSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="relative h-screen overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg"
          alt="Vista aérea da pousada"
          fill
          className="object-cover"
        />
      </div>

      <div className="absolute inset-0 bg-black/30" />

      <div className="relative z-10 flex h-full items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={
            isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
          }
          transition={{ duration: 1 }}
          className="text-center text-cream-50"
        >
          <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light tracking-wider">
            UM REFÚGIO EM MEIO À NATUREZA
          </h2>
        </motion.div>
      </div>
    </section>
  );
}
