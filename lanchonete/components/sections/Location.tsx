'use client';

import { motion } from 'framer-motion';
import { MapPin, Clock, Phone, Mail, Car, Navigation } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Location() {

  const openMap = () => {
    // Aqui abriria o Google Maps ou Waze
  };

  const callRestaurant = () => {
    // Call restaurant logic here
  };

  return (
    <section id="localizacao" className="py-20 bg-gradient-to-br from-gray-50 to-white" data-konbinicode="location-section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          data-konbinicode="location-header"
        >
          <h2 className="text-4xl lg:text-6xl font-bold text-brand-black mb-6" data-konbinicode="location-title">
            Onde Nos
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-brand-yellow">
              Encontrar
            </span>
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto" data-konbinicode="location-subtitle">
            Visite nossa loja física ou peça pelo delivery. Estamos sempre prontos 
            para servir os melhores hambúrgueres da cidade!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start">
          
          {/* Left Content - Info */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            data-konbinicode="location-info"
          >
            {/* Address */}
            <div className="bg-white rounded-3xl p-4 sm:p-8 shadow-lg" data-konbinicode="location-address">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-gradient-to-r from-brand-red to-brand-pink rounded-2xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-white" size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-brand-black mb-3">Endereço</h3>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Rua das Delícias, 123<br />
                    Vila Gourmet - São Paulo, SP<br />
                    CEP: 01234-567
                  </p>
                  <Button 
                    className="mt-4 bg-gradient-to-r from-brand-red to-brand-pink hover:from-brand-pink hover:to-brand-red text-white font-bold"
                    onClick={openMap}
                  >
                    <Navigation className="mr-2" size={18} />
                    Ver no Mapa
                  </Button>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-white rounded-3xl p-4 sm:p-8 shadow-lg" data-konbinicode="location-hours">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-gradient-to-r from-brand-yellow to-brand-green rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Clock className="text-white" size={28} />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-brand-black mb-4">Horário de Funcionamento</h3>
                  <div className="space-y-2 text-gray-700">
                    <div className="flex justify-between">
                      <span className="font-medium">Segunda a Quinta:</span>
                      <span>11h00 - 23h00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Sexta e Sábado:</span>
                      <span>11h00 - 00h00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Domingo:</span>
                      <span>12h00 - 22h00</span>
                    </div>
                  </div>
                  <div className="mt-4 p-3 bg-brand-green/10 rounded-xl">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-brand-green rounded-full animate-pulse"></div>
                      <span className="text-brand-green font-bold">Aberto agora!</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-3xl p-6 shadow-lg" data-konbinicode="location-phone">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-brand-blue to-brand-pink rounded-xl flex items-center justify-center">
                    <Phone className="text-white" size={20} />
                  </div>
                  <h4 className="font-bold text-brand-black">Telefone</h4>
                </div>
                <p className="text-gray-700 mb-3">(11) 99999-9999</p>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white"
                  onClick={callRestaurant}
                >
                  Ligar Agora
                </Button>
              </div>

              <div className="bg-white rounded-3xl p-6 shadow-lg" data-konbinicode="location-email">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-brand-pink to-brand-yellow rounded-xl flex items-center justify-center">
                    <Mail className="text-white" size={20} />
                  </div>
                  <h4 className="font-bold text-brand-black">E-mail</h4>
                </div>
                <p className="text-gray-700 mb-3">contato@smashhouse.com</p>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full border-brand-pink text-brand-pink hover:bg-brand-pink hover:text-white"
                  onClick={() => {
                    // Open email logic here
                  }}
                >
                  Enviar E-mail
                </Button>
              </div>
            </div>

            {/* Parking Info */}
            <div className="bg-gradient-to-r from-brand-yellow/10 to-brand-green/10 rounded-3xl p-6" data-konbinicode="location-parking">
              <div className="flex items-center space-x-3 mb-3">
                <Car className="text-brand-green" size={24} />
                <h4 className="font-bold text-brand-black">Estacionamento</h4>
              </div>
              <p className="text-gray-700">
                Estacionamento gratuito para clientes com 20 vagas disponíveis. 
                Vaga preferencial para pessoas com deficiência.
              </p>
            </div>
          </motion.div>

          {/* Right Content - Map */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            data-konbinicode="location-map"
          >
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
              {/* Map Header */}
              <div className="bg-gradient-to-r from-brand-red to-brand-yellow p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Nossa Localização</h3>
                <p className="opacity-90">Clique no mapa para abrir navegação</p>
              </div>

              {/* Mock Map */}
              <div 
                className="h-56 sm:h-72 md:h-80 bg-gray-100 relative cursor-pointer group overflow-hidden"
                onClick={openMap}
              >
                {/* Background Image (simulando um mapa) */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-green-50 to-yellow-50"></div>
                
                {/* Streets */}
                <div className="absolute top-20 left-0 right-0 h-2 bg-gray-300"></div>
                <div className="absolute bottom-32 left-0 right-0 h-2 bg-gray-300"></div>
                <div className="absolute top-0 bottom-0 left-32 w-2 bg-gray-300"></div>
                <div className="absolute top-0 bottom-0 right-24 w-2 bg-gray-300"></div>

                {/* Location Pin */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <motion.div 
                    className="w-12 h-12 bg-brand-red rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300"
                    animate={{ y: [-5, 5, -5] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <MapPin className="text-white" size={24} />
                  </motion.div>
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-white px-3 py-1 rounded-full shadow-lg">
                    <span className="text-sm font-bold text-brand-red">Smash House</span>
                  </div>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-brand-red/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-white rounded-2xl p-4 shadow-xl transform scale-90 group-hover:scale-100 transition-transform duration-300">
                    <Navigation className="mx-auto text-brand-red mb-2" size={32} />
                    <p className="text-brand-black font-bold">Abrir Navegação</p>
                  </div>
                </div>
              </div>

              {/* Map Footer */}
              <div className="p-4 bg-gray-50">
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <span>📍 São Paulo, SP</span>
                  <span>🚗 15min do centro</span>
                </div>
              </div>
            </div>

            {/* Floating Stats */}
            <div className="absolute -top-2 -left-2 sm:-top-4 sm:-left-4 bg-white rounded-2xl shadow-xl p-2 sm:p-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-brand-red">4.9★</div>
                <div className="text-xs text-gray-600">Google Reviews</div>
              </div>
            </div>

            <div className="absolute -bottom-2 -right-2 sm:-bottom-4 sm:-right-4 bg-white rounded-2xl shadow-xl p-2 sm:p-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-brand-green">25min</div>
                <div className="text-xs text-gray-600">Delivery</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}