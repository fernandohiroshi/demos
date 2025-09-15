'use client';

import { motion } from 'framer-motion';
import { Instagram, Heart, MessageCircle } from 'lucide-react';

export default function Gallery() {

  const galleryImages = [
    {
      id: 1,
      src: 'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      alt: 'Delicioso hambúrguer artesanal',
      likes: 342,
      comments: 28,
      category: 'burgers'
    },
    {
      id: 2,
      src: 'https://images.pexels.com/photos/31650401/pexels-photo-31650401.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      alt: 'Clientes felizes aproveitando o ambiente',
      likes: 156,
      comments: 45,
      category: 'ambiente'
    },
    {
      id: 3,
      src: 'https://images.pexels.com/photos/29285466/pexels-photo-29285466.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      alt: 'Batatas fritas com queijo e molho',
      likes: 278,
      comments: 19,
      category: 'sides'
    },
    {
      id: 4,
      src: 'https://images.pexels.com/photos/2424832/pexels-photo-2424832.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      alt: 'Milkshake cremoso de morango',
      likes: 203,
      comments: 31,
      category: 'drinks'
    },
    {
      id: 5,
      src: 'https://images.pexels.com/photos/3812748/pexels-photo-3812748.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      alt: 'Cliente satisfeita saboreando hambúrguer',
      likes: 189,
      comments: 22,
      category: 'ambiente'
    },
    {
      id: 6,
      src: 'https://images.pexels.com/photos/1055272/pexels-photo-1055272.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      alt: 'Cupcake artesanal de chocolate',
      likes: 165,
      comments: 14,
      category: 'desserts'
    },
    {
      id: 7,
      src: 'https://images.pexels.com/photos/31650379/pexels-photo-31650379.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      alt: 'Ambiente acolhedor do restaurante',
      likes: 234,
      comments: 38,
      category: 'ambiente'
    },
    {
      id: 8,
      src: 'https://images.pexels.com/photos/33068080/pexels-photo-33068080.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      alt: 'Combo completo com bebida',
      likes: 412,
      comments: 57,
      category: 'combos'
    },
    {
      id: 9,
      src: 'https://images.pexels.com/photos/4728859/pexels-photo-4728859.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      alt: 'Cliente aproveitando o sabor',
      likes: 298,
      comments: 29,
      category: 'ambiente'
    }
  ];

  const colorByCategory = {
    burgers: 'from-brand-red to-brand-pink',
    ambiente: 'from-brand-yellow to-brand-green',
    sides: 'from-brand-green to-brand-blue',
    drinks: 'from-brand-blue to-brand-pink',
    desserts: 'from-brand-pink to-brand-yellow',
    combos: 'from-brand-red to-brand-yellow'
  };

  return (
    <section id="galeria" className="py-20 bg-gradient-to-br from-brand-yellow/5 to-brand-pink/5" data-konbinicode="gallery-section">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          data-konbinicode="gallery-header"
        >
          <h2 className="text-4xl lg:text-6xl font-bold text-brand-black mb-6" data-konbinicode="gallery-title">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-brand-yellow">
              Galeria
            </span>
            <br />
            de Sabores
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-8" data-konbinicode="gallery-subtitle">
            Confira os momentos especiais, pratos irresistíveis e o ambiente acolhedor 
            que fazem da Smash House um lugar único
          </p>

          {/* Instagram Link */}
          <div className="flex items-center justify-center space-x-2 text-brand-pink">
            <Instagram size={24} />
            <span className="font-medium">@smashhouseburgers</span>
          </div>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-konbinicode="gallery-grid">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              data-konbinicode={`gallery-item-${image.id}`}
            >
              {/* Image */}
              <div className="relative h-80 overflow-hidden">
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  data-konbinicode={`gallery-image-${image.id}`}
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center justify-between text-white">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <Heart size={18} className="fill-current text-red-400" />
                          <span className="text-sm font-medium">{image.likes}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MessageCircle size={18} />
                          <span className="text-sm font-medium">{image.comments}</span>
                        </div>
                      </div>
                      <div className={`px-2 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${colorByCategory[image.category as keyof typeof colorByCategory]} text-white`}>
                        {image.category}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 right-4">
                  <div className={`px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${colorByCategory[image.category as keyof typeof colorByCategory]} text-white shadow-lg`}>
                    {image.category}
                  </div>
                </div>
              </div>
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
          data-konbinicode="gallery-cta"
        >
          <div className="bg-white rounded-3xl p-8 shadow-xl max-w-md mx-auto">
            <div className="w-16 h-16 bg-gradient-to-r from-brand-pink to-brand-red rounded-full flex items-center justify-center mx-auto mb-4">
              <Instagram className="text-white" size={28} />
            </div>
            <h3 className="text-2xl font-bold text-brand-black mb-3" data-konbinicode="gallery-cta-title">
              Siga-nos no Instagram
            </h3>
            <p className="text-gray-600 mb-4" data-konbinicode="gallery-cta-text">
              Acompanhe nossos stories, novidades e promoções exclusivas!
            </p>
            <button 
              className="bg-gradient-to-r from-brand-pink to-brand-red text-white font-bold py-3 px-6 rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              onClick={() => {
                // Redirect to Instagram logic here
              }}
            >
              @smashhouseburgers
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}