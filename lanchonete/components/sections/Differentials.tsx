'use client';

import { motion } from 'framer-motion';
import { Leaf, Clock, Shield, Truck, ChefHat, Heart } from 'lucide-react';

export default function Differentials() {

  const differentials = [
    {
      icon: Leaf,
      title: 'Ingredientes Frescos',
      description: 'Selecionamos diariamente os melhores ingredientes do mercado para garantir frescor e qualidade em cada prato.',
      color: 'from-brand-green to-brand-blue',
      bgColor: 'bg-brand-green/10'
    },
    {
      icon: ChefHat,
      title: 'Técnica Smash Autêntica',
      description: 'Nossas carnes são prensadas na chapa quente, criando a crosta dourada perfeita que faz toda a diferença.',
      color: 'from-brand-red to-brand-pink',
      bgColor: 'bg-brand-red/10'
    },
    {
      icon: Clock,
      title: 'Delivery Rápido',
      description: 'Seu pedido fica pronto em até 25 minutos e chega quentinho na sua casa com nosso sistema de entrega expressa.',
      color: 'from-brand-yellow to-brand-red',
      bgColor: 'bg-brand-yellow/10'
    },
    {
      icon: Shield,
      title: 'Qualidade Garantida',
      description: 'Controle rigoroso de qualidade em todas as etapas. Se não ficar perfeito, refazemos sem custo adicional.',
      color: 'from-brand-blue to-brand-pink',
      bgColor: 'bg-brand-blue/10'
    },
    {
      icon: Truck,
      title: 'Entrega Gratuita',
      description: 'Frete grátis para pedidos acima de R$ 35,00 em um raio de 5km. Mais economia para você!',
      color: 'from-brand-pink to-brand-yellow',
      bgColor: 'bg-brand-pink/10'
    },
    {
      icon: Heart,
      title: 'Feito com Amor',
      description: 'Cada hambúrguer é preparado com carinho e atenção aos detalhes, porque acreditamos que amor se sente no sabor.',
      color: 'from-brand-red to-brand-yellow',
      bgColor: 'bg-brand-red/10'
    }
  ];

  return (
    <section className="py-20 bg-white" data-konbinicode="differentials-section">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          data-konbinicode="differentials-header"
        >
          <h2 className="text-4xl lg:text-6xl font-bold text-brand-black mb-6" data-konbinicode="differentials-title">
            Nossos
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-brand-yellow">
              Diferenciais
            </span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto" data-konbinicode="differentials-subtitle">
            Descobra por que somos a escolha número 1 quando o assunto é hambúrguer artesanal. 
            Qualidade, sabor e atendimento que superam expectativas
          </p>
        </motion.div>

        {/* Differentials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" data-konbinicode="differentials-grid">
          {differentials.map((differential, index) => (
            <motion.div
              key={index}
              className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              data-konbinicode={`differential-${index + 1}`}
            >
              {/* Icon */}
              <div className="relative mb-6">
                <div className={`w-20 h-20 ${differential.bgColor} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <differential.icon className="text-brand-black" size={32} />
                </div>
                
                {/* Floating Badge */}
                <div className={`absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r ${differential.color} rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                  <span className="text-white text-xs font-bold">✓</span>
                </div>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-brand-black mb-4 group-hover:text-brand-red transition-colors duration-300" data-konbinicode={`differential-title-${index + 1}`}>
                {differential.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300" data-konbinicode={`differential-description-${index + 1}`}>
                {differential.description}
              </p>

              {/* Bottom Accent Line */}
              <div className={`h-1 bg-gradient-to-r ${differential.color} rounded-full mt-6 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats */}
        <motion.div 
          className="mt-20 bg-gradient-to-r from-brand-yellow to-brand-red rounded-3xl p-8 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          data-konbinicode="differentials-stats"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-bold text-white mb-2">500+</div>
              <div className="text-white/90 font-medium">Clientes Satisfeitos</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">4.9★</div>
              <div className="text-white/90 font-medium">Avaliação Média</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">25min</div>
              <div className="text-white/90 font-medium">Tempo Médio</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">100%</div>
              <div className="text-white/90 font-medium">Satisfação</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}