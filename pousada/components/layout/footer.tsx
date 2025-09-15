"use client"

import { motion } from "framer-motion"
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Mail, href: "mailto:contato@pousadalech.com", label: "Email" },
  ]

  const quickLinks = [
    { name: "Início", href: "#hero" },
    { name: "Sobre", href: "#about" },
    { name: "Quartos", href: "#rooms" },
    { name: "Gastronomia", href: "#food" },
    { name: "Wellness", href: "#wellness" },
    { name: "Ofertas", href: "#offers" },
    { name: "Reservas", href: "#booking" },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="bg-cream-800 text-cream-100">
      <div className="container mx-auto px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Logo e Descrição */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2"
          >
            <h3 className="mb-4 text-lg xs:text-xl sm:text-2xl md:text-3xl font-light tracking-wider">POUSADA LECH</h3>
            <p className="mb-6 text-cream-300 leading-relaxed">
              Viva a hospitalidade da Pousada Lech: um refúgio acolhedor em meio à natureza, onde cada detalhe é pensado para proporcionar conforto, bem-estar e momentos inesquecíveis em família.
            </p>

            {/* Redes Sociais */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-cream-700 text-cream-200 transition-colors hover:bg-cream-600 hover:text-white"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Links Rápidos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="mb-6 text-lg font-light">Links Rápidos</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-cream-300 transition-colors hover:text-white"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contato */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h4 className="mb-6 text-lg font-light">Contato</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="mt-1 text-cream-400" />
                <div className="text-cream-300">
                  <p>Sonnwend 123</p>
                  <p>6764 Lech am Arlberg</p>
                  <p>Áustria</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-cream-400" />
                <a href="tel:+43554412345" className="text-cream-300 transition-colors hover:text-white">
                  +43 5544 12345
                </a>
              </div>

              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-cream-400" />
                <a href="mailto:contato@pousadalech.com" className="text-cream-300 transition-colors hover:text-white">
                  contato@pousadalech.com
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Linha divisória */}
        <div className="my-12 border-t border-cream-700"></div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col items-center justify-between space-y-4 text-center text-cream-400 md:flex-row md:space-y-0"
        >
          <p>&copy; 2024 Pousada Lech im Sonnwend. Todos os direitos reservados.</p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="transition-colors hover:text-white">
              Política de Privacidade
            </a>
            <a href="#" className="transition-colors hover:text-white">
              Termos de Uso
            </a>
            <a href="#" className="transition-colors hover:text-white">
              Cookies
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
