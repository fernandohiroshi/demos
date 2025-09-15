'use client';

import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Clock } from 'lucide-react';

export default function Hero() {

  const scrollToMenu = () => {
    const element = document.getElementById('cardapio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToCTA = () => {
    const element = document.getElementById('pedido');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-brand-yellow via-brand-pink to-brand-red overflow-hidden" data-konbinicode="hero-section">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white rounded-full"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-white rounded-full"></div>
        <div className="absolute bottom-40 left-32 w-20 h-20 bg-white rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-white rounded-full"></div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 pb-10 sm:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center min-h-[60vh] lg:min-h-[80vh]">
          
          {/* Left Content */}
          <motion.div 
            className="text-center lg:text-left"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            data-konbinicode="hero-content"
          >
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 my-6">
              <Star className="text-brand-yellow fill-current" size={16} />
              <span className="text-white font-medium text-sm">#1 Hamburgueria Artesanal</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight" data-konbinicode="hero-title">
              SABOREIE CADA
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-yellow to-white">
                Delicioso
              </span>
              <br />
              <span className="text-4xl lg:text-5xl text-brand-black">Bite</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl text-white/90 mb-8 max-w-lg leading-relaxed" data-konbinicode="hero-subtitle">
              Hambúrgueres artesanais feitos com ingredientes frescos e muito amor. 
              A experiência smash burger que você estava procurando!
            </p>

            {/* Stats */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-8 mb-10" data-konbinicode="hero-stats">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">500+</div>
                <div className="text-white/80 text-sm">Clientes Felizes</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">4.9★</div>
                <div className="text-white/80 text-sm">Avaliação</div>
              </div>
              <div className="text-center">
                <div className="flex items-center text-3xl font-bold text-white">
                  <Clock size={24} className="mr-2" />
                  25min
                </div>
                <div className="text-white/80 text-sm">Delivery</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start" data-konbinicode="hero-cta-buttons">
              <Button 
                size="lg" 
                className="bg-white text-brand-red hover:bg-brand-yellow hover:text-white font-bold px-8 py-4 text-lg transition-all duration-300 transform hover:scale-105 shadow-xl"
                onClick={scrollToCTA}
              >
                Peça Agora
                <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white text-white hover:bg-white hover:text-brand-red font-bold px-8 py-4 text-lg transition-all duration-300"
                onClick={scrollToMenu}
              >
                Ver Cardápio
              </Button>
            </div>
          </motion.div>

          {/* Right Content - Food Images */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            data-konbinicode="hero-images"
          >
            {/* Main Burger Image */}
            <div className="relative z-10">
              <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 mx-auto relative">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-yellow to-brand-red rounded-3xl transform rotate-6 opacity-20"></div>
                <div className="absolute inset-2 bg-white rounded-3xl shadow-2xl overflow-hidden">
                  <img 
                    src="https://images.pexels.com/photos/33068080/pexels-photo-33068080.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" 
                    alt="Deliciosos hambúrgueres artesanais da Smash House"
                    className="w-full h-full object-cover"
                    data-konbinicode="hero-main-burger"
                  />
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div 
              className="absolute top-4 right-4 sm:top-10 sm:right-10 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-white rounded-2xl shadow-lg p-2"
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <img 
                src="https://images.pexels.com/photos/32986485/pexels-photo-32986485.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" 
                alt="Batatas fritas douradas" 
                className="w-full h-full object-cover rounded-xl"
                data-konbinicode="hero-fries"
              />
            </motion.div>

            <motion.div 
              className="absolute bottom-4 left-4 sm:bottom-10 sm:left-10 w-10 h-10 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-brand-pink rounded-full shadow-lg flex items-center justify-center"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <Star className="text-white fill-current" size={24} />
            </motion.div>

            <motion.div 
              className="absolute top-1/2 left-2 sm:left-0 w-12 h-12 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-white rounded-2xl shadow-lg p-2"
              animate={{ x: [-20, 20, -20] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <img 
                src="https://images.pexels.com/photos/2424832/pexels-photo-2424832.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" 
                alt="Milkshake artesanal" 
                className="w-full h-full object-cover rounded-xl"
                data-konbinicode="hero-milkshake"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Wave Separator */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" className="w-full h-12 lg:h-20">
          <path 
            fill="white" 
            d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,64C960,75,1056,85,1152,85.3C1248,85,1344,75,1392,69.3L1440,64L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
          />
        </svg>
      </div>
    </section>
  );
}