"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";
import Image from "next/image";

const pricingPlans = [
  {
    name: "PADRÃO",
    description: "Plano básico com acesso à academia",
    price: "R$ 89,99",
    period: "/mês",
    features: [
      "Acesso à Academia",
      "Vestiário",
      "Aulas em Grupo",
      "Suporte Online",
    ],
    popular: false,
  },
  {
    name: "PREMIUM",
    description: "Acesso completo com treinamento pessoal",
    price: "R$ 149,99",
    period: "/mês",
    features: [
      "Tudo do Plano Padrão",
      "Treinamento Pessoal",
      "Consultoria Nutricional",
      "Agendamento Prioritário",
      "Acesso 24h",
    ],
    popular: true,
  },
];

export function PricingSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="planos" ref={ref} className="py-20 lg:py-32 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative overflow-hidden rounded-2xl">
              <Image
                src="https://images.pexels.com/photos/5327533/pexels-photo-5327533.jpeg"
                alt="Treinamento fitness"
                width={500}
                height={600}
                className="object-cover w-full h-[500px] lg:h-[600px]"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Badge className="bg-lime-400 text-black mb-6 px-4 py-2 font-semibold">
                PREÇOS
              </Badge>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-4xl lg:text-5xl font-bold mb-8 text-white"
            >
              PLANOS DE PREÇOS
            </motion.h2>

            <div className="space-y-6">
              {pricingPlans.map((plan, index) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                  }
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <Card
                    className={`bg-gray-900 p-6 ${
                      plan.popular
                        ? "border-lime-400 ring-2 ring-lime-400/20"
                        : "border-gray-800"
                    }`}
                  >
                    <div className="flex flex-col lg:flex-row justify-between items-start mb-4">
                      <div>
                        <div className="flex items-center space-x-2 mb-1">
                          <h3 className="text-xl font-bold text-white">
                            {plan.name}
                          </h3>
                          {plan.popular && (
                            <Badge className="bg-lime-400 text-black text-xs px-2 py-1">
                              POPULAR
                            </Badge>
                          )}
                        </div>
                        <p className="text-gray-300 text-sm">
                          {plan.description}
                        </p>
                      </div>
                      <div className="text-right lg:text-left">
                        <span className="text-2xl font-bold text-white">
                          {plan.price}
                        </span>
                        <span className="text-gray-300">{plan.period}</span>
                      </div>
                    </div>

                    <ul className="space-y-2 mb-6">
                      {plan.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-center space-x-2"
                        >
                          <Check className="w-4 h-4 text-lime-400 flex-shrink-0" />
                          <span className="text-sm text-gray-200">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button className="w-full bg-lime-400 text-black hover:bg-lime-500 font-semibold">
                        ESCOLHER PLANO
                      </Button>
                    </motion.div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
