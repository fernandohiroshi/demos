"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export function TestimonialSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 lg:py-32 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Badge className="bg-lime-400 text-black mb-6 px-4 py-2 font-semibold">
                DEPOIMENTO
              </Badge>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-4xl lg:text-5xl font-bold mb-6 text-white"
            >
              AVALIAÇÃO DO CLIENTE
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-gray-300 text-lg mb-8 leading-relaxed"
            >
              "Os treinadores vão além para criar planos de treino
              personalizados que atendem aos seus objetivos e necessidades. O
              que eles oferecem se mistura perfeitamente com o senso de
              comunidade. É incrível como todos se apoiam mutuamente."
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex items-center space-x-4"
            >
              <div className="w-12 h-12 bg-lime-400 rounded-full flex items-center justify-center text-black font-bold text-lg">
                JS
              </div>
              <div>
                <p className="font-semibold text-lg text-white">
                  Jessica Silva
                </p>
                <p className="text-gray-300 text-sm">Membro Premium</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl">
              <Image
                src="https://images.pexels.com/photos/1554824/pexels-photo-1554824.jpeg"
                alt="Cliente satisfeita treinando"
                width={600}
                height={500}
                className="object-cover w-full h-[400px] lg:h-[500px]"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
