"use client";

import Image from "next/image";
import { motion, easeOut } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export function GallerySection() {
  // Lista de imagens da pasta public/gallery
  const galleryImages = [
    "/gallery/1.jpeg",
    "/gallery/2.jpeg",
    "/gallery/3.jpeg",
    "/gallery/4.jpeg",
    "/gallery/5.jpeg",
    "/gallery/6.jpeg",
    "/gallery/7.jpeg",
    "/gallery/8.jpeg",
    "/gallery/9.jpeg",
    "/gallery/10.jpeg",
    "/gallery/11.jpeg",
    "/gallery/12.jpeg",
    "/gallery/13.jpeg",
    "/gallery/14.jpeg",
    "/gallery/16.jpeg",
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.5, ease: easeOut },
    },
  };

  return (
    <section ref={ref} id="galeria" className="py-20 px-4">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Galeria Inked
        </motion.h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4"
        >
          {Array.from({ length: 18 }, (_, i) => {
  // Rotaciona as imagens, sem repetição sequencial
  const imgIndex = i % galleryImages.length;
  return (
    <motion.div
      key={i}
      variants={itemVariants}
      whileHover={{
        scale: 1.05,
        zIndex: 10,
        transition: { duration: 0.3 },
      }}
      whileTap={{ scale: 0.95 }}
      className="aspect-square relative overflow-hidden rounded-lg cursor-pointer"
    >
      <motion.div
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.4 }}
        className="w-full h-full"
      >
        <Image
          src={galleryImages[imgIndex]}
          alt={`Trabalho de tatuagem ${i + 1}`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 16vw"
          priority={i < galleryImages.length}
        />
      </motion.div>
    </motion.div>
  );
})}
        </motion.div>
      </div>
    </section>
  );
}
