"use client";

import Image from "next/image";
import { motion, easeOut } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const workflowSteps = [
  {
    number: 1,
    title: "Consulta & Desenvolvimento do Conceito",
    description:
      "Discutimos suas ideias, preferências e criamos o conceito de design perfeito.",
  },
  {
    number: 2,
    title: "Design & Aprovação Final",
    description:
      "Nossos artistas criam designs detalhados e os refinam até você ficar completamente satisfeito.",
  },
  {
    number: 3,
    title: "Tatuagem e Cuidados Pós-Tatuagem",
    description:
      "Processo profissional de tatuagem seguido por orientação abrangente de cuidados pós-tatuagem.",
  },
];

export function WorkflowSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const stepVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: easeOut },
    },
  };

  return (
    <section ref={ref} className="py-20 px-4 bg-black/50">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8 }}
              className="text-4xl font-bold mb-8"
            >
              Processo da Tatuagem
            </motion.h2>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="space-y-6"
            >
              {workflowSteps.map((step) => (
                <motion.div
                  key={step.number}
                  variants={stepVariants}
                  whileHover={{ x: 10, transition: { duration: 0.3 } }}
                  className="flex items-start space-x-4"
                >
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={
                      isInView
                        ? { scale: 1, rotate: 0 }
                        : { scale: 0, rotate: -180 }
                    }
                    transition={{
                      delay: 0.3 + step.number * 0.2,
                      duration: 0.6,
                      type: "spring",
                      stiffness: 200,
                    }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="bg-white text-black rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0"
                  >
                    {step.number}
                  </motion.div>
                  <div>
                    <motion.h3
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                      transition={{
                        delay: 0.4 + step.number * 0.1,
                        duration: 0.6,
                      }}
                      className="font-bold mb-2"
                    >
                      {step.title}
                    </motion.h3>
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                      transition={{
                        delay: 0.5 + step.number * 0.1,
                        duration: 0.6,
                      }}
                      className="text-white/80"
                    >
                      {step.description}
                    </motion.p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-2 gap-4"
          >
            <motion.div
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="https://images.pexels.com/photos/28820810/pexels-photo-28820810.jpeg"
                alt="Consulta"
                width={200}
                height={200}
                className="rounded-lg object-cover"
              />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, rotate: -2 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="https://images.pexels.com/photos/4123886/pexels-photo-4123886.jpeg"
                alt="Processo de tatuagem"
                width={200}
                height={200}
                className="rounded-lg object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
