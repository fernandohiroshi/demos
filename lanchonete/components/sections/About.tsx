'use client';

import { motion } from 'framer-motion';
import { Heart, Award, Users, Flame } from 'lucide-react';

export default function About() {

  return (
    <section id="sobre" className="py-20 bg-white" data-konbinicode="about-section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          
          {/* Left Content */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            data-konbinicode="about-content"
          >
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-brand-black mb-6" data-konbinicode="about-title">
                Nossa História é
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-brand-yellow"> Feita com</span>
                <br />
                <span className="text-brand-red">Amor</span>
              </h2>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6" data-konbinicode="about-description">
                A Smash House nasceu da paixão pela autentica culinária americana de rua. 
                Inspirados nos clássicos smash burgers que conquistaram o mundo, trouxemos 
                para o Brasil a técnica perfeita: carnes smash prensadas na chapa quente, 
                criando aquela crosta dourada irresistível que derrete na boca.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed" data-konbinicode="about-philosophy">
                Cada hambúrguer é uma obra de arte feita com ingredientes frescos, 
                pão brioche artesanal e o tempero secreto que só a gente conhece. 
                Aqui, tradição e inovação se encontram para criar experiências únicas.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-6" data-konbinicode="about-features">
              <div className="text-center p-4 bg-brand-yellow/10 rounded-2xl">
                <div className="w-12 h-12 bg-brand-yellow rounded-full flex items-center justify-center mx-auto mb-3">
                  <Flame className="text-white" size={24} />
                </div>
                <h3 className="font-bold text-brand-black mb-2">Técnica Smash</h3>
                <p className="text-sm text-gray-600">Prensado na chapa para crosta perfeita</p>
              </div>

              <div className="text-center p-4 bg-brand-red/10 rounded-2xl">
                <div className="w-12 h-12 bg-brand-red rounded-full flex items-center justify-center mx-auto mb-3">
                  <Heart className="text-white fill-current" size={24} />
                </div>
                <h3 className="font-bold text-brand-black mb-2">Ingredientes Frescos</h3>
                <p className="text-sm text-gray-600">Selecionados diariamente</p>
              </div>

              <div className="text-center p-4 bg-brand-green/10 rounded-2xl">
                <div className="w-12 h-12 bg-brand-green rounded-full flex items-center justify-center mx-auto mb-3">
                  <Award className="text-white" size={24} />
                </div>
                <h3 className="font-bold text-brand-black mb-2">Receita Secreta</h3>
                <p className="text-sm text-gray-600">Temperos únicos da casa</p>
              </div>

              <div className="text-center p-4 bg-brand-blue/10 rounded-2xl">
                <div className="w-12 h-12 bg-brand-blue rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="text-white" size={24} />
                </div>
                <h3 className="font-bold text-brand-black mb-2">Família</h3>
                <p className="text-sm text-gray-600">Ambiente acolhedor e descontraído</p>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Images */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            data-konbinicode="about-images"
          >
            {/* Main Image */}
            <div className="relative z-10">
              <div className="rounded-3xl overflow-hidden shadow-2xl max-w-full">
                <img 
                  src="https://images.pexels.com/photos/375895/pexels-photo-375895.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" 
                  alt="Fachada moderna da Smash House Burgers"
                  className="w-full max-w-full h-64 sm:h-80 md:h-96 lg:h-[400px] object-cover"
                  data-konbinicode="about-restaurant-exterior"
                />
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-2 right-2 sm:top-4 sm:right-4 w-10 h-10 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-brand-pink rounded-2xl shadow-lg flex items-center justify-center">
              <span className="text-white font-bold text-2xl">5★</span>
            </div>

            <div className="absolute bottom-2 left-2 sm:bottom-4 sm:left-4 bg-white rounded-2xl shadow-lg p-2 sm:p-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-r from-brand-yellow to-brand-red rounded-full flex items-center justify-center">
                  <Heart className="text-white fill-current" size={20} />
                </div>
                <div>
                  <div className="font-bold text-brand-black">500+</div>
                  <div className="text-xs text-gray-600">Clientes Felizes</div>
                </div>
              </div>
            </div>

            {/* Background Decorative Shapes */}
            <div className="absolute -top-4 -left-4 sm:-top-8 sm:-left-8 w-12 h-12 sm:w-20 sm:h-20 lg:w-32 lg:h-32 bg-brand-yellow/20 rounded-3xl transform rotate-12"></div>
            <div className="absolute hidden lg:block -bottom-4 right-4 sm:-bottom-8 sm:-right-8 w-10 h-10 sm:w-16 sm:h-16 lg:w-24 lg:h-24 bg-brand-red/20 rounded-3xl transform -rotate-12"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}