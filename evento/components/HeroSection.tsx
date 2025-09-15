"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Heart, Calendar } from "lucide-react";

export default function HeroSection() {
  const scrollToRsvp = () => {
    document.getElementById("rsvp")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >

      {/* Overlay para melhorar o contraste */}
      <div className="absolute inset-0 bg-white/50 z-10" />

      {/* Background decorativo */}
      <div className="absolute inset-0 bg-gradient-to-br from-rose-50/10 via-pink-50/10 to-rose-100/10 opacity-10 z-5" />

      {/* Elementos decorativos flutuantes */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{
          duration: 6,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className="absolute top-20 left-10 w-10 h-10 bg-rose-300/30 rounded-full z-20"
      />
      <motion.div
        animate={{ y: [0, 15, 0], rotate: [0, -3, 0] }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute top-32 right-20 w-14 h-14 bg-pink-300/40 rounded-full z-20"
      />
      <motion.div
        animate={{ y: [0, -10, 0], rotate: [0, 8, 0] }}
        transition={{
          duration: 5,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute bottom-40 left-20 w-8 h-8 bg-rose-400/50 rounded-full z-20"
      />

      <div className="container mx-auto px-4 text-center relative z-30">
        {/* Decoração superior */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mb-8"
        >
          <Heart
            className="w-8 h-8 text-rose-400 mx-auto mb-4"
            fill="currentColor"
          />
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-rose-300 to-transparent mx-auto" />
        </motion.div>

        {/* Nomes dos noivos */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mb-6"
        >
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-serif text-gray-800 mb-4 tracking-widest"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.5 }}
          >
            TÂNIA
            <span className="block text-3xl md:text-4xl lg:text-5xl text-rose-500 font-light my-2">
              &
            </span>
            JOÃO
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-600 font-light tracking-wide italic mb-2"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 1.0 }}
          >
            Vamos nos casar
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 1.3 }}
            className="flex items-center justify-center space-x-2 text-gray-500"
          >
            <Calendar className="w-4 h-4" />
            <span className="text-lg">21 de Setembro, 2024</span>
          </motion.div>
        </motion.div>

        {/* Decoração central */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1.6 }}
          className="mb-8"
        >
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-rose-300" />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 20,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
              className="w-8 h-8 border-2 border-rose-300 rounded-full flex items-center justify-center"
            >
              <div className="w-3 h-3 bg-rose-400 rounded-full" />
            </motion.div>
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-rose-300" />
          </div>
        </motion.div>

        {/* Botão CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.8 }}
          className="mb-8"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              onClick={scrollToRsvp}
              size="lg"
              className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-4 text-lg font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Confirmar Presença
            </Button>
          </motion.div>
        </motion.div>

        {/* Mensagem especial */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="max-w-2xl mx-auto"
        >
          <p className="text-gray-600 italic text-lg leading-relaxed">
            "Duas almas, um só coração. Venha celebrar conosco o início de nossa
            jornada eterna de amor."
          </p>
        </motion.div>

        {/* Decoração inferior */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 2.2 }}
          className="mt-12"
        >
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-rose-300 to-transparent mx-auto" />
        </motion.div>
      </div>
    </section>
  );
}
