"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Link from "next/link"
import { Facebook, Twitter, Instagram, MapPin, Phone, Mail } from "lucide-react"

const footerSections = [
  {
    title: "PÁGINAS",
    links: [
      { href: "#sobre", label: "Sobre Nós" },
      { href: "#servicos", label: "Serviços" },
      { href: "#", label: "Aulas" },
      { href: "#", label: "Treinadores" },
      { href: "#contato", label: "Contato" },
    ],
  },
  {
    title: "LINKS",
    links: [
      { href: "#planos", label: "Planos" },
      { href: "#", label: "Preços" },
      { href: "#blog", label: "Blog" },
      { href: "#", label: "FAQ" },
      { href: "#", label: "Suporte" },
    ],
  },
  {
    title: "SERVIÇOS",
    links: [
      { href: "#", label: "Treinamento Pessoal" },
      { href: "#", label: "Aulas em Grupo" },
      { href: "#", label: "Consultoria Nutricional" },
      { href: "#", label: "Programas de Bem-estar" },
      { href: "#", label: "Serviços de Recuperação" },
    ],
  },
]

export function Footer() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <footer id="contato" ref={ref} className="bg-gray-900 py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-white">GLADIATOR</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Transforme seu corpo e mente com nossos programas fitness abrangentes e orientação especializada.
            </p>

            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="w-4 h-4 text-lime-400" />
                <span className="text-sm">Rua Fitness, 123 - São Paulo, SP</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="w-4 h-4 text-lime-400" />
                <span className="text-sm">(11) 9999-9999</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="w-4 h-4 text-lime-400" />
                <span className="text-sm">contato@gladiator.com.br</span>
              </div>
            </div>

            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram].map((Icon, index) => (
                <motion.div key={index} whileHover={{ scale: 1.1, y: -2 }} whileTap={{ scale: 0.95 }}>
                  <div className="w-10 h-10 bg-lime-400 rounded-lg flex items-center justify-center cursor-pointer hover:bg-lime-500 transition-colors">
                    <Icon className="w-5 h-5 text-black" />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {footerSections.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: (sectionIndex + 1) * 0.1 }}
            >
              <h4 className="font-bold mb-6 text-lg text-white">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <motion.li
                    key={`${link.href}-${linkIndex}`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.4, delay: (sectionIndex + 1) * 0.1 + linkIndex * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-lime-400 transition-colors duration-300 text-sm"
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="border-t border-gray-800 mt-12 pt-8 text-center"
        >
          <p className="text-gray-300">&copy; 2023 Gladiator Fitness. Todos os direitos reservados.</p>
        </motion.div>
      </div>
    </footer>
  )
}
