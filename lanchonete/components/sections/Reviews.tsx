'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

export default function Reviews() {

  const reviews = [
    {
      id: 1,
      name: 'Ana Silva',
      avatar: 'https://images.pexels.com/photos/3812748/pexels-photo-3812748.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      rating: 5,
      text: 'Simplesmente o melhor hambúrguer que já comi! A carne smash é perfeita, crocante por fora e suculenta por dentro. O atendimento também é excelente. Virei cliente fiel!',
      date: 'Há 2 dias',
      order: 'Double Smash + Batata'
    },
    {
      id: 2,
      name: 'Carlos Rodrigues',
      avatar: 'https://images.pexels.com/photos/4728859/pexels-photo-4728859.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      rating: 5,
      text: 'Fiquei impressionado com a qualidade! O hambúrguer chegou quentinho e exatamente como pedi. O molho especial é incrível. Delivery super rápido também.',
      date: 'Há 5 dias',
      order: 'BBQ Smash + Milkshake'
    },
    {
      id: 3,
      name: 'Mariana Costa',
      avatar: 'https://images.pexels.com/photos/31650401/pexels-photo-31650401.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      rating: 5,
      text: 'Ambiente super aconchegante e hambúrgueres deliciosos! Trouxe minha família e todos adoraram. Os ingredientes são fresquinhos e o preço é justo. Recomendo!',
      date: 'Há 1 semana',
      order: 'Classic Smash + Onion Rings'
    },
    {
      id: 4,
      name: 'Roberto Lima',
      avatar: 'https://images.pexels.com/photos/31650379/pexels-photo-31650379.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      rating: 5,
      text: 'Já experimentei várias hamburguerias, mas essa é diferente! A técnica smash faz toda a diferença. O combo com milkshake então... sem palavras. Parabéns pela qualidade!',
      date: 'Há 1 semana',
      order: 'Double Smash + Milkshake Chocolate'
    },
    {
      id: 5,
      name: 'Julia Santos',
      avatar: 'https://images.pexels.com/photos/3951865/pexels-photo-3951865.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      rating: 5,
      text: 'Que descoberta maravilhosa! O hambúrguer é artesanal de verdade, dá pra sentir o carinho na preparação. As batatas com queijo são viciantes. Voltarei sempre!',
      date: 'Há 2 semanas',
      order: 'Classic Smash + Batata com Queijo'
    },
    {
      id: 6,
      name: 'Pedro Alves',
      avatar: 'https://images.pexels.com/photos/4842640/pexels-photo-4842640.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      rating: 5,
      text: 'Atendimento nota 10! Fizeram questão de perguntar o ponto da carne e personalizar meu pedido. O hambúrguer estava perfeito. Empresa que se preocupa com o cliente!',
      date: 'Há 2 semanas',
      order: 'BBQ Smash + Refrigerante'
    }
  ];

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < rating ? 'text-brand-yellow fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <section className="py-20 bg-gradient-to-br from-brand-yellow/10 to-brand-pink/10" data-konbinicode="reviews-section">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          data-konbinicode="reviews-header"
        >
          <h2 className="text-4xl lg:text-6xl font-bold text-brand-black mb-6" data-konbinicode="reviews-title">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-brand-yellow">
              Avaliações
            </span>
            <br />
            dos Fãs
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8" data-konbinicode="reviews-subtitle">
            Veja o que nossos clientes estão falando sobre a experiência Smash House. 
            Cada avaliação é um motivo de orgulho para nossa equipe!
          </p>

          {/* Overall Rating */}
          <div className="bg-white rounded-2xl p-6 max-w-sm mx-auto shadow-lg" data-konbinicode="reviews-overall">
            <div className="text-5xl font-bold text-brand-black mb-2">4.9</div>
            <div className="flex justify-center items-center space-x-1 mb-2">
              {renderStars(5)}
            </div>
            <div className="text-gray-600 font-medium">Baseado em 500+ avaliações</div>
          </div>
        </motion.div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" data-konbinicode="reviews-grid">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              data-konbinicode={`review-${review.id}`}
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-brand-yellow/20">
                <Quote size={32} />
              </div>

              {/* User Info */}
              <div className="flex items-center space-x-4 mb-6" data-konbinicode={`review-user-${review.id}`}>
                <div className="w-12 h-12 rounded-full overflow-hidden shadow-lg">
                  <img 
                    src={review.avatar} 
                    alt={review.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-brand-black">{review.name}</h4>
                  <p className="text-sm text-gray-500">{review.date}</p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-1 mb-4" data-konbinicode={`review-rating-${review.id}`}>
                {renderStars(review.rating)}
              </div>

              {/* Review Text */}
              <p className="text-gray-700 leading-relaxed mb-6 italic" data-konbinicode={`review-text-${review.id}`}>
                "{review.text}"
              </p>

              {/* Order Info */}
              <div className="bg-brand-yellow/10 rounded-2xl p-3">
                <div className="text-xs text-brand-black font-medium opacity-80">
                  Pedido: <span className="font-bold">{review.order}</span>
                </div>
              </div>

              {/* Bottom Accent */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-yellow to-brand-red"></div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          data-konbinicode="reviews-cta"
        >
          <div className="bg-gradient-to-r from-brand-red to-brand-pink rounded-3xl p-8 text-white max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold mb-4" data-konbinicode="reviews-cta-title">
              Sua Opinião é Importante!
            </h3>
            <p className="text-lg mb-6 opacity-90" data-konbinicode="reviews-cta-text">
              Já experimentou nossos hambúrgueres? Compartilhe sua experiência e 
              ajude outros clientes a descobrirem o sabor Smash House!
            </p>
            <button 
              className="bg-white text-brand-red font-bold py-3 px-8 rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              onClick={() => {
                // Redirect to review logic here
              }}
            >
              Deixar Avaliação
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}