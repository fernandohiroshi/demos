"use client";

import { motion, easeOut } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const statistics = [
  { number: "1250+", label: "Clientes Diários" },
  { number: "15", label: "Anos de Experiência" },
  { number: "2,000", label: "Trabalhos & Artistas Certificados" },
  { number: "25+", label: "Localizações Premium" },
];

export function StatisticsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const statVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: easeOut },
    },
  };

  return (
    <section ref={ref} className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-4 gap-8 text-center"
        >
          {statistics.map((stat, index) => (
            <motion.div
              key={index}
              variants={statVariants}
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.3 },
              }}
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{
                  delay: 0.2 + index * 0.1,
                  duration: 0.8,
                  type: "spring",
                  stiffness: 200,
                }}
                className="text-5xl font-bold text-white mb-2"
              >
                {stat.number}
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                className="text-white/80"
              >
                {stat.label}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
