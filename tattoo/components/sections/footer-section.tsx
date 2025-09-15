"use client"

import { Facebook, Instagram, Twitter, Youtube } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const footerLinks = {
  sobre: [
    { label: "Nossa História", href: "#" },
    { label: "Artistas", href: "#" },
    { label: "Galeria", href: "#" },
    { label: "Avaliações", href: "#" },
  ],
  servicos: [
    { label: "Tatuagens Personalizadas", href: "#" },
    { label: "Coberturas", href: "#" },
    { label: "Retoques", href: "#" },
    { label: "Consultas", href: "#" },
  ],
  informacoes: [
    { label: "Preços", href: "#" },
    { label: "Cuidados Pós-Tatuagem", href: "#" },
    { label: "FAQ", href: "#" },
    { label: "Contato", href: "#" },
  ],
}

const socialIcons = [
  { Icon: Facebook, href: "#" },
  { Icon: Instagram, href: "#" },
  { Icon: Twitter, href: "#" },
  { Icon: Youtube, href: "#" },
]

export function FooterSection() {
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
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  return (
    <footer ref={ref} className="bg-black border-t border-black py-12 px-4">
      <div className="container mx-auto">
        <motion.div variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
          <motion.div variants={itemVariants} className="text-center mb-8">
            <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }} className="text-2xl font-bold mb-2">
              AGENDE UMA CONSULTA - (11) 9999-9999
            </motion.div>
          </motion.div>

          <motion.div variants={itemVariants} className="text-center mb-8">
            <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }} className="text-3xl font-bold mb-4">
              inked
            </motion.div>
            <motion.div variants={containerVariants} className="flex justify-center space-x-6 mb-6">
              {socialIcons.map(({ Icon, href }, index) => (
                <motion.a
                  key={index}
                  href={href}
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.2,
                    rotate: 5,
                    transition: { duration: 0.3 },
                  }}
                  whileTap={{ scale: 0.9 }}
                  className="cursor-pointer"
                >
                  <Icon className="h-6 w-6 hover:text-white" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div variants={containerVariants} className="grid md:grid-cols-4 gap-8 text-center md:text-left">
            <motion.div variants={itemVariants}>
              <h4 className="font-bold mb-4">Sobre</h4>
              <ul className="space-y-2 text-white/80">
                {footerLinks.sobre.map((link, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.4 }}
                    whileHover={{ x: 5, transition: { duration: 0.2 } }}
                  >
                    <a href={link.href} className="hover:text-white">
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            <motion.div variants={itemVariants}>
              <h4 className="font-bold mb-4">Serviços</h4>
              <ul className="space-y-2 text-white/80">
                {footerLinks.servicos.map((link, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                    transition={{ delay: 0.4 + index * 0.1, duration: 0.4 }}
                    whileHover={{ x: 5, transition: { duration: 0.2 } }}
                  >
                    <a href={link.href} className="hover:text-white">
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            <motion.div variants={itemVariants}>
              <h4 className="font-bold mb-4">Informações</h4>
              <ul className="space-y-2 text-white/80">
                {footerLinks.informacoes.map((link, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.4 }}
                    whileHover={{ x: 5, transition: { duration: 0.2 } }}
                  >
                    <a href={link.href} className="hover:text-white">
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            <motion.div variants={itemVariants}>
              <h4 className="font-bold mb-4">Contato</h4>
              <motion.ul variants={containerVariants} className="space-y-2 text-white/80">
                {[
                  "Rua da Arte, 123",
                  "Vila Madalena, SP 01234-567",
                  "(11) 9999-9999",
                  "contato@inkedstudio.com.br",
                ].map((item, index) => (
                  <motion.li key={index} variants={itemVariants}>
                    {item}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </motion.div>

          <motion.div variants={itemVariants} className="border-t border-white/20 mt-12 pt-8 text-center text-white/60">
            <p>
              &copy; 2024 Inked Estúdio de Tatuagem. Todos os direitos reservados. | Política de Privacidade | Termos de
              Serviço
            </p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  )
}
