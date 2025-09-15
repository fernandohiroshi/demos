'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Phone, Clock, Truck, ArrowRight, Star } from 'lucide-react';

export default function CTA() {

  const handleOrderClick = () => {
    // Aqui normalmente redirecionaria para WhatsApp, app de delivery, etc.
  };

  const handleCallClick = () => {
    // Aqui normalmente abriria o discador do telefone
  };

  return (
    <section id="pedido" className="py-20 relative overflow-hidden" data-konbinicode="cta-section">
      
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-red via-brand-pink to-brand-yellow"></div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-40 h-40 bg-white rounded-full"></div>
        <div className="absolute top-60 right-20 w-32 h-32 bg-white rounded-full"></div>
        <div className="absolute bottom-40 left-32 w-24 h-24 bg-white rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-20 h-20 bg-white rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          
          {/* Left Content */}
          <motion.div 
            className="text-center lg:text-left"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            data-konbinicode="cta-content"
          >
            {/* Badge */}
            <motion.div 
              className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Star className="text-brand-yellow fill-current" size={16} />
              <span className="text-white font-medium text-sm">Peça Agora e Receba em 25min!</span>
            </motion.div>

            {/* Main Heading */}
            <h2 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight" data-konbinicode="cta-title">
              FOME DE
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-yellow to-white">
                Hambúrguer?
              </span>
            </h2>

            {/* Subtitle */}
            <p className="text-xl text-white/90 mb-8 leading-relaxed" data-konbinicode="cta-subtitle">
              Não espere mais! Faça seu pedido agora e desfrute do melhor smash burger 
              da cidade no conforto da sua casa.
            </p>

            {/* Features */}
            <div className="flex flex-col sm:flex-row gap-6 mb-10 justify-center lg:justify-start" data-konbinicode="cta-features">
              <div className="flex items-center space-x-2 text-white">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <Clock size={18} />
                </div>
                <div>
                  <div className="font-bold">25 minutos</div>
                  <div className="text-sm opacity-80">Delivery rápido</div>
                </div>
              </div>
              <div className="flex items-center space-x-2 text-white">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <Truck size={18} />
                </div>
                <div>
                  <div className="font-bold">Frete Grátis</div>
                  <div className="text-sm opacity-80">Pedidos acima de R$ 35</div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start" data-konbinicode="cta-buttons">
              <Button 
                size="lg" 
                className="bg-white text-brand-red hover:bg-brand-yellow hover:text-white font-bold px-10 py-4 text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl"
                onClick={handleOrderClick}
              >
                Fazer Pedido
                <ArrowRight className="ml-2" size={22} />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white text-white hover:bg-white hover:text-brand-red font-bold px-10 py-4 text-xl transition-all duration-300"
                onClick={handleCallClick}
              >
                <Phone className="mr-2" size={20} />
                Ligar Agora
              </Button>
            </div>

            {/* Contact Info */}
            <div className="mt-8 text-center lg:text-left" data-konbinicode="cta-contact">
              <p className="text-white/80 text-sm mb-2">Ou ligue diretamente:</p>
              <p className="text-white font-bold text-2xl">(11) 99999-9999</p>
            </div>
          </motion.div>

          {/* Right Content - Food Animation */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            data-konbinicode="cta-visual"
          >
            {/* Main Food Image */}
            <div className="relative z-10 flex justify-center">
              <motion.div 
                className="w-80 h-80 lg:w-96 lg:h-96 relative"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="absolute inset-0 bg-white rounded-3xl shadow-2xl transform rotate-3"></div>
                <div className="absolute inset-2 bg-white rounded-3xl shadow-xl overflow-hidden">
                  <img 
                    src="https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" 
                    alt="Delicioso hambúrguer para pedido"
                    className="w-full h-full object-cover"
                    data-konbinicode="cta-main-burger"
                  />
                </div>
              </motion.div>
            </div>

            {/* Floating Elements */}
            <motion.div 
              className="absolute top-4 right-4 sm:top-10 sm:right-10 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-white rounded-2xl shadow-xl p-3"
              animate={{ 
                y: [-15, 15, -15],
                rotate: [0, 10, -10, 0]
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            >
              <img 
                src="https://images.pexels.com/photos/32986485/pexels-photo-32986485.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" 
                alt="Batatas fritas" 
                className="w-full h-full object-cover rounded-xl"
                data-konbinicode="cta-fries"
              />
            </motion.div>

            <motion.div 
              className="absolute bottom-4 left-4 sm:bottom-10 sm:left-10 w-10 h-10 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-brand-pink rounded-full shadow-xl flex items-center justify-center"
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 360]
              }}
              transition={{ 
                duration: 5, 
                repeat: Infinity, 
                ease: "linear" 
              }}
            >
              <span className="text-white font-bold text-2xl">🍟</span>
            </motion.div>

            <motion.div 
              className="absolute top-1/2 left-2 sm:left-0 w-12 h-12 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-white rounded-2xl shadow-xl p-2"
              animate={{ x: [-25, 25, -25] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <img 
                src="https://images.pexels.com/photos/2424832/pexels-photo-2424832.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" 
                alt="Milkshake cremoso" 
                className="w-full h-full object-cover rounded-xl"
                data-konbinicode="cta-milkshake"
              />
            </motion.div>

            {/* Promotional Badge */}
            <motion.div 
              className="absolute bottom-8 right-8 bg-brand-yellow text-brand-black rounded-2xl p-4 shadow-xl"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="text-center">
                <div className="font-bold text-lg">R$ 35</div>
                <div className="text-xs">Frete Grátis!</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" className="w-full h-16 lg:h-24">
          <path 
            fill="white" 
            d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,64C960,75,1056,85,1152,85.3C1248,85,1344,75,1392,69.3L1440,64L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
          />
        </svg>
      </div>
    </section>
  );
}