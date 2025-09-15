"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { motion, easeOut } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function BookingSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: easeOut },
    },
  }

  const contactInfo = [
    { icon: Phone, text: "+55 (11) 9999-9999" },
    { icon: Mail, text: "contato@inkedstudio.com.br" },
    { icon: Clock, text: "Seg-Sáb: 10h-20h, Dom: 12h-18h" },
    { icon: MapPin, text: "Rua da Arte, 123, Vila Madalena, SP 01234-567" },
  ]

  return (
    <section ref={ref} id="contato" className="py-20 px-4 overflow-x-hidden w-full">
      <div className="container mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-12"
        >
          <motion.div variants={itemVariants}>
            <motion.h2 variants={itemVariants} className="text-4xl font-bold mb-6">
              Agende Sua Consulta
            </motion.h2>
            <motion.p variants={itemVariants} className="text-white/80 mb-8">
              Pronto para fazer sua próxima tatuagem? Preencha o formulário e entraremos em contato em até 24 horas para
              agendar sua consulta.
            </motion.p>

            <motion.div variants={containerVariants} className="space-y-4 mb-8">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ x: 10, transition: { duration: 0.3 } }}
                  className="flex items-center space-x-3"
                >
                  <motion.div whileHover={{ scale: 1.2, rotate: 5 }} transition={{ duration: 0.3 }}>
                    <item.icon className="h-5 w-5 text-white" />
                  </motion.div>
                  <span>{item.text}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={itemVariants}>
              <motion.h3 variants={itemVariants} className="text-xl font-bold mb-4">
                Como Agendar
              </motion.h3>
              <motion.p variants={itemVariants} className="text-white/80">
                Ligue diretamente ou preencha nosso formulário online. Discutiremos suas ideias, forneceremos um
                orçamento e agendaremos sua consulta em um horário que funcione para você.
              </motion.p>
            </motion.div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="bg-black p-8 rounded-lg"
          >
            <motion.form variants={containerVariants} className="space-y-6">
              <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-4">
                <motion.div whileFocus={{ scale: 1.02 }}>
                  <label className="block text-sm font-medium mb-2">Nome</label>
                  <Input className="bg-black border-white/20 text-white" placeholder="João" />
                </motion.div>
                <motion.div whileFocus={{ scale: 1.02 }}>
                  <label className="block text-sm font-medium mb-2">Sobrenome</label>
                  <Input className="bg-black border-white/20 text-white" placeholder="Silva" />
                </motion.div>
              </motion.div>
              <motion.div variants={itemVariants} whileFocus={{ scale: 1.02 }}>
                <label className="block text-sm font-medium mb-2">E-mail</label>
                <Input className="bg-black border-white/20 text-white" type="email" placeholder="joao@exemplo.com" />
              </motion.div>
              <motion.div variants={itemVariants} whileFocus={{ scale: 1.02 }}>
                <label className="block text-sm font-medium mb-2">Telefone</label>
                <Input className="bg-black border-white/20 text-white" type="tel" placeholder="+55 (11) 9999-9999" />
              </motion.div>
              <motion.div variants={itemVariants} whileFocus={{ scale: 1.02 }}>
                <label className="block text-sm font-medium mb-2">Descrição da Tatuagem</label>
                <Textarea
                  className="bg-black border-white/20 text-white min-h-[120px]"
                  placeholder="Descreva sua ideia de tatuagem, tamanho, localização e quaisquer imagens de referência que você tenha..."
                />
              </motion.div>
              <motion.div variants={itemVariants} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button className="w-full bg-white hover:bg-white/90 text-black py-3">Enviar Solicitação</Button>
              </motion.div>
            </motion.form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
