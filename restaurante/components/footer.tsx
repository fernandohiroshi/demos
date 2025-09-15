"use client";

import { motion } from "framer-motion";
import {
  Heart,
  Instagram,
  Facebook,
  Mail,
  PhoneCall,
} from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground" id="contact">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-serif font-bold text-white mb-4">
              Trattoria Bellavita
            </h3>
            <p className="text-white/80 mb-4 leading-relaxed">
              Autêntica culinária italiana no coração de São Paulo. Uma
              experiência gastronômica inesquecível desde 2010.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-white/80 hover:text-primary-foreground transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-white/80 hover:text-primary-foreground transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-bold text-white mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              {[
                { href: "#inicio", label: "Início" },
                { href: "#sobre", label: "Sobre" },
                { href: "#cardapio", label: "Cardápio" },
                { href: "#reservas", label: "Reservas" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/80 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-bold text-white mb-4">Contato</h4>
            <div className="space-y-2 text-white/80">
              <div className="flex items-center space-x-2">
                <PhoneCall className="h-4 w-4" />
                <span>(11) 3456-7890</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>contato@trattoriabellavita.com.br</span>
              </div>
            </div>
          </motion.div>

          {/* Hours */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="font-bold text-white mb-4">Funcionamento</h4>
            <div className="text-white/80 space-y-1">
              <div>Segunda a Domingo</div>
              <div>18h00 às 23h00</div>
              <div className="text-sm mt-2">Reservas até 22h00</div>
            </div>
          </motion.div>
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-primary-foreground/20 mt-8 pt-8 text-center"
        >
          <p className="text-white/80 flex items-center justify-center space-x-1">
            <span>© {currentYear} Trattoria Bellavita. Feito com</span>
            <Heart className="h-4 w-4 text-white fill-current" />
            <span>em São Paulo.</span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
