"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Play, Star } from "lucide-react";
import Image from "next/image";

export function HeroSection() {
  return (
    <section id="inicio" className="pt-32 pb-20 lg:pb-32">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-white"
            >
              FORÇA
              <br />
              <span className="text-lime-400">UNIDA</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-gray-300 text-lg mb-8 max-w-md leading-relaxed"
            >
              Junte-se à nossa comunidade de entusiastas do fitness e transforme
              seu corpo com nossos treinadores especialistas e equipamentos de
              última geração.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button className="bg-lime-400 text-black hover:bg-lime-500 px-8 py-3 font-semibold">
                  COMEÇAR AGORA
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="ghost"
                  className="flex items-center space-x-2 hover:text-lime-400 text-white"
                >
                  <Play className="w-5 h-5" />
                  <span>ASSISTIR VÍDEO</span>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl">
              <video
                src="/hero.mp4"
                className="object-cover w-full h-[500px] lg:h-[600px]"
                autoPlay
                loop
                muted
                playsInline
              />

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="absolute top-6 right-6 bg-black/90 backdrop-blur-sm p-4 rounded-xl border border-gray-700"
              >
                <div className="flex items-center space-x-2 mb-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-lime-400 text-lime-400"
                      />
                    ))}
                  </div>
                  <span className="text-sm font-semibold text-white">4.9</span>
                </div>
                <p className="text-xs text-gray-300">
                  Confiado por +10k membros
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
