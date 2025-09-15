'use client';

import { motion } from 'framer-motion';
import { Instagram, Facebook, Youtube, Phone, Mail, MapPin, Clock, Heart } from 'lucide-react';

export default function Footer() {

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram', color: 'hover:text-pink-500' },
    { icon: Facebook, href: '#', label: 'Facebook', color: 'hover:text-blue-500' },
    { icon: Youtube, href: '#', label: 'YouTube', color: 'hover:text-red-500' }
  ];

  const menuLinks = [
    'Sobre Nós',
    'Cardápio',
    'Delivery',
    'Reservas',
    'Trabalhe Conosco'
  ];

  const quickLinks = [
    'Política de Privacidade',
    'Termos de Uso',
    'FAQ',
    'Blog',
    'Contato'
  ];

  return (
    <footer className="bg-brand-black text-white relative overflow-hidden" data-konbinicode="footer">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-white rounded-full"></div>
      </div>

      <div className="relative">
        {/* Main Footer */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            
            {/* Brand Column */}
            <motion.div 
              className="lg:col-span-1"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              data-konbinicode="footer-brand"
            >
              {/* Logo */}
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-brand-yellow to-brand-red rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">S</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Smash House</h3>
                  <p className="text-brand-red font-medium text-sm">BURGERS</p>
                </div>
              </div>

              <p className="text-gray-300 leading-relaxed mb-6">
                Os melhores smash burgers da cidade! Ingredientes frescos, 
                sabor autêntico e a técnica perfeita para criar experiências únicas.
              </p>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    className={`w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center transition-colors duration-300 ${social.color}`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      // Redirect to social media logic here
                    }}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Menu Links */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              data-konbinicode="footer-menu"
            >
              <h4 className="text-xl font-bold mb-6 text-brand-yellow">Menu</h4>
              <ul className="space-y-3">
                {menuLinks.map((link, index) => (
                  <li key={index}>
                    <button 
                      className="text-gray-300 hover:text-brand-yellow transition-colors duration-300 text-left"
                      onClick={() => {
                        // Navigation logic here
                      }}
                    >
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              data-konbinicode="footer-links"
            >
              <h4 className="text-xl font-bold mb-6 text-brand-yellow">Links Úteis</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <button 
                      className="text-gray-300 hover:text-brand-yellow transition-colors duration-300 text-left"
                      onClick={() => {
                        // Navigation logic here
                      }}
                    >
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              data-konbinicode="footer-contact"
            >
              <h4 className="text-xl font-bold mb-6 text-brand-yellow">Contato</h4>
              
              <div className="space-y-4">
                {/* Address */}
                <div className="flex items-start space-x-3">
                  <MapPin className="text-brand-red mt-1 flex-shrink-0" size={18} />
                  <div className="text-gray-300">
                    <p>Rua das Delícias, 123</p>
                    <p>Vila Gourmet - São Paulo, SP</p>
                    <p>CEP: 01234-567</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center space-x-3">
                  <Phone className="text-brand-red" size={18} />
                  <div className="text-gray-300">
                    <p>(11) 99999-9999</p>
                    <p className="text-sm opacity-80">WhatsApp disponível</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center space-x-3">
                  <Mail className="text-brand-red" size={18} />
                  <p className="text-gray-300">contato@smashhouse.com</p>
                </div>

                {/* Hours */}
                <div className="flex items-start space-x-3">
                  <Clock className="text-brand-red mt-1 flex-shrink-0" size={18} />
                  <div className="text-gray-300">
                    <p className="font-medium">Horário de Funcionamento:</p>
                    <p className="text-sm">Seg-Qui: 11h-23h</p>
                    <p className="text-sm">Sex-Sáb: 11h-00h</p>
                    <p className="text-sm">Dom: 12h-22h</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Newsletter Section */}
          <motion.div 
            className="mt-16 pt-8 border-t border-gray-800"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            data-konbinicode="footer-newsletter"
          >
            <div className="text-center max-w-2xl mx-auto">
              <h4 className="text-2xl font-bold mb-4 text-brand-yellow">
                Receba Nossas Novidades!
              </h4>
              <p className="text-gray-300 mb-6">
                Seja o primeiro a saber sobre novos hambúrgueres, promoções exclusivas e eventos especiais.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Seu melhor e-mail"
                  className="flex-1 px-4 py-3 rounded-full bg-gray-800 text-white border border-gray-700 focus:border-brand-yellow focus:outline-none"
                />
                <button 
                  className="bg-gradient-to-r from-brand-yellow to-brand-red text-brand-black font-bold px-8 py-3 rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                  onClick={() => console.log("Newsletter subscription")}
                >
                  Assinar
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="flex items-center space-x-2 text-gray-400 text-sm">
                <span>© 2024 Smash House Burgers. Todos os direitos reservados.</span>
              </div>
              
              <div className="flex items-center space-x-2 text-gray-400 text-sm mt-4 md:mt-0">
                <span>Feito com</span>
                <Heart className="text-brand-red fill-current" size={16} />
                <span>para você!</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}