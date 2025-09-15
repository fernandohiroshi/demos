"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FaqSection() {
  const faqs = [
    {
      question: "Vocês aceitam reservas?",
      answer:
        "Sim, recomendamos fazer reservas, especialmente para o jantar e fins de semana. Você pode reservar online ou nos ligar diretamente.",
    },
    {
      question: "Vocês atendem restrições alimentares?",
      answer:
        "Oferecemos opções vegetarianas, veganas e sem glúten. Por favor, nos informe sobre alergias ou restrições alimentares ao fazer sua reserva.",
    },
    {
      question: "Quais são os horários de funcionamento?",
      answer:
        "Funcionamos diariamente das 11h às 22h. A cozinha fecha às 21h30. Fechamos nos principais feriados.",
    },
    {
      question: "Vocês oferecem jantar privativo?",
      answer:
        "Sim, temos uma sala de jantar privativa que acomoda até 20 convidados. Perfeita para ocasiões especiais e reuniões de negócios.",
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-serif text-foreground mb-8">
              Perguntas Frequentes
            </h2>

            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-card rounded-lg px-6"
                >
                  <AccordionTrigger className="text-left font-medium">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/imgs/faq.jpg"
                alt="Elegant restaurant table setting"
                fill
                className="object-cover object-top"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
