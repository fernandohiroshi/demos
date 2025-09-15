"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

import { useState } from "react";

export function TestimonialSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const testimonials = [
    {
      name: "Jessica Davis",
      role: "Atriz • Cliente Verificada",
      image:
        "https://images.pexels.com/photos/12932733/pexels-photo-12932733.jpeg",
      text: "Experiência incrível! Artistas talentosos transformaram minha ideia em obra-prima. Atenção aos detalhes e limpeza impecáveis. Recomendo muito!",
    },
    {
      name: "Carlos Lima",
      role: "Empresário • Cliente Verificado",
      image:
        "https://images.pexels.com/photos/7029081/pexels-photo-7029081.jpeg",
      text: "Ambiente acolhedor e tatuadores profissionais. Resultado final perfeito! Qualidade, segurança e atendimento diferenciado. Voltarei em breve!",
    },
    {
      name: "Fernanda Souza",
      role: "Modelo • Cliente Verificada",
      image:
        "https://images.pexels.com/photos/1188748/pexels-photo-1188748.jpeg",
      text: "Minha primeira tatuagem não poderia ter sido melhor! Higiene, profissionalismo e atenção impecáveis. Recomendo de olhos fechados!",
    },
  ];

  const [current, setCurrent] = useState(0);
  const total = testimonials.length;

  const prevTestimonial = () =>
    setCurrent((prev) => (prev - 1 + total) % total);
  const nextTestimonial = () => setCurrent((prev) => (prev + 1) % total);

  return (
    <section ref={ref} className="hidden lg:block py-24 px-4 bg-black/50">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
            >
              <Image
                src={testimonials[current].image}
                alt={testimonials[current].name}
                width={500}
                height={400}
                className="rounded-lg object-cover"
              />
            </motion.div>
            {/* Botões do carrossel - mobile visível abaixo da imagem */}
            <div className="flex gap-6 mt-6 justify-center lg:hidden">
              <button
                aria-label="Anterior"
                onClick={prevTestimonial}
                className="p-3 rounded-full bg-gradient-to-r from-gray-800 to-black text-white hover:from-gray-700 hover:to-gray-900 shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                aria-label="Próximo"
                onClick={nextTestimonial}
                className="p-3 rounded-full bg-gradient-to-r from-gray-800 to-black text-white hover:from-gray-700 hover:to-gray-900 shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.3 }}
              className="bg-white text-black p-10 rounded-xl relative shadow-2xl"
            >
              <motion.blockquote
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-lg mb-8 leading-relaxed"
                key={current}
              >
                "{testimonials[current].text}"
              </motion.blockquote>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ delay: 0.6, duration: 0.6 }}
                className="mb-6"
              >
                <div className="font-bold text-xl mb-1">
                  {testimonials[current].name}
                </div>
                <div className="text-sm text-black/60">
                  {testimonials[current].role}
                </div>
              </motion.div>
              {/* Indicadores do carrossel */}
              <div className="flex gap-3 justify-center">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    aria-label={`Ir para depoimento ${idx + 1}`}
                    className={`w-4 h-4 rounded-full border-2 transition-all duration-300 ${
                      idx === current
                        ? "bg-black border-black scale-110"
                        : "bg-transparent border-black/40 hover:border-black/60 hover:scale-105"
                    }`}
                    onClick={() => setCurrent(idx)}
                  />
                ))}
              </div>
            </motion.div>
            {/* Botões do carrossel - desktop visível embaixo da div */}
            <div className="hidden lg:flex gap-6 justify-center mt-8">
              <button
                aria-label="Anterior"
                onClick={prevTestimonial}
                className="p-3 rounded-full bg-gradient-to-r from-gray-800 to-black text-white hover:from-gray-700 hover:to-gray-900 shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                aria-label="Próximo"
                onClick={nextTestimonial}
                className="p-3 rounded-full bg-gradient-to-r from-gray-800 to-black text-white hover:from-gray-700 hover:to-gray-900 shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
