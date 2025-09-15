'use client';

import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Blog() {

  const blogPosts = [
    {
      id: 1,
      title: 'A História do Smash Burger: De Tendência a Clássico',
      excerpt: 'Descubra como o smash burger conquistou o mundo e se tornou a técnica favorita dos amantes de hambúrguer. Uma jornada deliciosa pela história.',
      image: 'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      author: 'Chef Marcus',
      date: '15 Jan 2024',
      readTime: '5 min',
      category: 'História',
      categoryColor: 'from-brand-red to-brand-pink'
    },
    {
      id: 2,
      title: 'Harmonização Perfeita: Qual Bebida Combina com Seu Burger?',
      excerpt: 'Aprenda as melhores combinações entre hambúrgueres e bebidas. Desde milkshakes clássicos até cervejas artesanais que elevam a experiência.',
      image: 'https://images.pexels.com/photos/2424832/pexels-photo-2424832.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      author: 'Sommelier Ana',
      date: '12 Jan 2024',
      readTime: '4 min',
      category: 'Harmonização',
      categoryColor: 'from-brand-blue to-brand-pink'
    },
    {
      id: 3,
      title: 'Fast Casual: O Futuro da Gastronomia Rápida',
      excerpt: 'Entenda como o movimento fast casual está revolucionando a indústria alimentar, combinando qualidade gourmet com praticidade.',
      image: 'https://images.pexels.com/photos/31650401/pexels-photo-31650401.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      author: 'Equipe Smash House',
      date: '10 Jan 2024',
      readTime: '6 min',
      category: 'Tendências',
      categoryColor: 'from-brand-yellow to-brand-green'
    },
    {
      id: 4,
      title: 'Ingredientes Frescos: O Segredo dos Nossos Sabores',
      excerpt: 'Conheça nossos fornecedores locais e descubra como a seleção criteriosa de ingredientes faz a diferença no sabor final dos pratos.',
      image: 'https://images.pexels.com/photos/1055272/pexels-photo-1055272.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      author: 'Nutricionista Carol',
      date: '8 Jan 2024',
      readTime: '3 min',
      category: 'Ingredientes',
      categoryColor: 'from-brand-green to-brand-blue'
    },
    {
      id: 5,
      title: 'Dicas de Casa: Como Fazer o Smash Perfeito',
      excerpt: 'Aprenda a técnica secreta para reproduzir em casa aquela crosta dourada irresistível que só o smash burger tem. Passo a passo completo.',
      image: 'https://images.pexels.com/photos/33068080/pexels-photo-33068080.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      author: 'Chef Marcus',
      date: '5 Jan 2024',
      readTime: '8 min',
      category: 'Receitas',
      categoryColor: 'from-brand-red to-brand-yellow'
    },
    {
      id: 6,
      title: 'Sustentabilidade: Nosso Compromisso com o Planeta',
      excerpt: 'Saiba como a Smash House está contribuindo para um futuro mais sustentável através de práticas eco-friendly e parcerias responsáveis.',
      image: 'https://images.pexels.com/photos/375895/pexels-photo-375895.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      author: 'Diretor de Sustentabilidade',
      date: '3 Jan 2024',
      readTime: '5 min',
      category: 'Sustentabilidade',
      categoryColor: 'from-brand-green to-brand-yellow'
    }
  ];

  return (
    <section id="blog" className="py-20 bg-white" data-konbinicode="blog-section">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          data-konbinicode="blog-header"
        >
          <h2 className="text-4xl lg:text-6xl font-bold text-brand-black mb-6" data-konbinicode="blog-title">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-brand-yellow">
              Blog
            </span>
            <br />
            Smash House
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto" data-konbinicode="blog-subtitle">
            Curiosidades, dicas culinárias, tendências gastronômicas e tudo sobre o universo 
            dos hambúrgueres artesanais. Conteúdo fresquinho direto da nossa cozinha!
          </p>
        </motion.div>

        {/* Featured Post */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          data-konbinicode="blog-featured"
        >
          <div className="bg-gradient-to-r from-brand-yellow to-brand-red rounded-3xl overflow-hidden shadow-2xl">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative h-80 lg:h-auto">
                <img 
                  src={blogPosts[0].image} 
                  alt={blogPosts[0].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <div className={`px-3 py-1 rounded-full text-sm font-bold bg-gradient-to-r ${blogPosts[0].categoryColor} text-white shadow-lg`}>
                    ⭐ Destaque
                  </div>
                </div>
              </div>
              <div className="p-8 lg:p-12 text-white">
                <div className="flex items-center space-x-4 text-sm mb-4 opacity-90">
                  <div className="flex items-center space-x-1">
                    <User size={16} />
                    <span>{blogPosts[0].author}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar size={16} />
                    <span>{blogPosts[0].date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock size={16} />
                    <span>{blogPosts[0].readTime}</span>
                  </div>
                </div>
                <h3 className="text-3xl font-bold mb-4">{blogPosts[0].title}</h3>
                <p className="text-lg opacity-90 mb-6 leading-relaxed">{blogPosts[0].excerpt}</p>
                <Button 
                  variant="outline" 
                  className="border-2 border-white text-white hover:bg-white hover:text-brand-red font-bold"
                  onClick={() => {
                    // Read article logic here
                  }}
                >
                  Ler Artigo Completo
                  <ArrowRight className="ml-2" size={18} />
                </Button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" data-konbinicode="blog-posts-grid">
          {blogPosts.slice(1).map((post, index) => (
            <motion.article
              key={post.id}
              className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              data-konbinicode={`blog-post-${post.id}`}
            >
              {/* Post Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <div className={`px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${post.categoryColor} text-white shadow-lg`}>
                    {post.category}
                  </div>
                </div>
              </div>

              {/* Post Content */}
              <div className="p-6">
                {/* Meta Info */}
                <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                  <div className="flex items-center space-x-2">
                    <User size={14} />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Calendar size={14} />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock size={14} />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-bold text-xl text-brand-black mb-3 leading-tight group-hover:text-brand-red transition-colors duration-300">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {post.excerpt}
                </p>

                {/* Read More Button */}
                <button 
                  className="text-brand-red font-medium text-sm hover:text-brand-yellow transition-all duration-300 flex items-center group-hover:translate-x-2 transform"
                  onClick={() => {
                    // Read article logic here
                  }}
                >
                  Ler mais
                  <ArrowRight className="ml-1" size={16} />
                </button>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Blog CTA */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          data-konbinicode="blog-cta"
        >
          <div className="bg-gray-50 rounded-3xl p-8 max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold text-brand-black mb-4">
              Não Perca Nenhuma Novidade!
            </h3>
            <p className="text-gray-700 mb-6">
              Assine nossa newsletter e receba conteúdo exclusivo, receitas especiais 
              e promoções diretamente no seu e-mail.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Seu melhor e-mail"
                className="flex-1 px-4 py-3 rounded-full border border-gray-300 focus:border-brand-red focus:outline-none"
              />
              <Button 
                className="bg-gradient-to-r from-brand-red to-brand-pink hover:from-brand-pink hover:to-brand-red text-white font-bold px-8 py-3 rounded-full"
                onClick={() => {
                  // Newsletter subscription logic here
                }}
              >
                Assinar
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}