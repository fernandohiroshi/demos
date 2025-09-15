"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaWhatsapp,
  FaCalendarAlt,
  FaHeart,
  FaUsers,
  FaShieldAlt,
  FaBrain,
  FaLeaf,
  FaStar,
} from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";

export default function Home() {
  console.log("Home component initialized");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Mensagem enviada! Entraremos em contato em breve.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="min-h-screen bg-cream-50 overflow-x-hidden">
      {/* Header Fixo */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-sage-200">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="#" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-sage-400 rounded-full flex items-center justify-center">
              <FaLeaf className="text-white text-lg" />
            </div>
            <h1
              className="text-xl font-bold text-sage-800"
              data-konbinicode="logo-text"
            >
              Clínica Essência
            </h1>
          </Link>
          <nav className="hidden lg:flex space-x-8">
            <Link
              href="#inicio"
              className="text-sage-700 hover:text-sage-500 transition-colors"
            >
              Início
            </Link>
            <Link
              href="#sobre"
              className="text-sage-700 hover:text-sage-500 transition-colors"
            >
              Sobre
            </Link>
            <Link
              href="#servicos"
              className="text-sage-700 hover:text-sage-500 transition-colors"
            >
              Serviços
            </Link>
            <Link
              href="#depoimentos"
              className="text-sage-700 hover:text-sage-500 transition-colors"
            >
              Depoimentos
            </Link>
            <Link
              href="#blog"
              className="text-sage-700 hover:text-sage-500 transition-colors"
            >
              Blog
            </Link>
            <Link
              href="#contato"
              className="text-sage-700 hover:text-sage-500 transition-colors"
            >
              Contato
            </Link>
          </nav>
          <div className="flex items-center space-x-3">
            <FaWhatsapp className="text-sage-600 text-xl" />
            <span className="hidden xl:block text-sage-700 font-medium">
              (11) 9 9999-9999
            </span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="inicio"
        className="relative pt-40 pb-16 bg-gradient-to-br from-sage-50 to-cream-100"
      >
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center min-h-[80vh]">
            <motion.div
              className="space-y-6"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              <h2
                className="text-5xl md:text-6xl font-bold text-sage-800 leading-tight"
                data-konbinicode="hero-title"
              >
                Transforme sua vida com
                <span className="text-sage-500"> cuidado e acolhimento</span>
              </h2>
              <p
                className="text-xl text-sage-700 leading-relaxed"
                data-konbinicode="hero-description"
              >
                Na Clínica Essência, oferecemos um espaço seguro e acolhedor
                para sua jornada de autoconhecimento e bem-estar emocional.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-6">
                <Button className="bg-sage-500 hover:bg-sage-600 text-white px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all">
                  <FaCalendarAlt className="mr-2" />
                  Agende Sua Consulta
                </Button>
                <Button
                  variant="outline"
                  className="border-sage-300 text-sage-700 px-8 py-6 text-lg rounded-xl hover:bg-sage-50 transition-all"
                >
                  Saiba Mais
                </Button>
              </div>
            </motion.div>
            <motion.div
              className="relative"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <Image
                src="https://images.pexels.com/photos/5407206/pexels-photo-5407206.jpeg"
                alt="Psicóloga acolhedora"
                width={1200}
                height={1200}
                className="rounded-3xl shadow-2xl w-full h-auto object-cover"
                data-konbinicode="hero-image"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl">
                <div className="text-2xl font-bold text-sage-700">+500</div>
                <div className="text-sm text-sage-600">Vidas Transformadas</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Seção Sobre */}
      <section id="sobre" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              className="space-y-6"
              initial="hidden"
              whileInView="visible"
              variants={fadeIn}
            >
              <h3
                className="text-4xl font-bold text-sage-800"
                data-konbinicode="about-title"
              >
                Dra. Marina Essência
              </h3>
              <p
                className="text-lg text-sage-700 leading-relaxed"
                data-konbinicode="about-description"
              >
                Com mais de 10 anos de experiência em psicologia clínica, dedico
                minha carreira ao acolhimento e transformação de vidas. Formada
                pela USP com especialização em Terapia Cognitivo-Comportamental.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <FaBrain className="text-sage-500 text-xl" />
                  <span className="text-sage-700">
                    Especialização em TCC e Psicanálise
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <FaHeart className="text-sage-500 text-xl" />
                  <span className="text-sage-700">
                    Atendimento humanizado e personalizado
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <FaShieldAlt className="text-sage-500 text-xl" />
                  <span className="text-sage-700">
                    Ambiente seguro e confidencial
                  </span>
                </div>
              </div>
              <div className="bg-sage-50 p-6 rounded-xl">
                <h4 className="font-semibold text-sage-800 mb-2">Missão</h4>
                <p className="text-sage-700">
                  Proporcionar um espaço de acolhimento onde cada pessoa possa
                  descobrir sua essência, desenvolver autoconhecimento e
                  conquistar uma vida mais plena e equilibrada.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={fadeIn}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <Image
                src="https://images.pexels.com/photos/4098150/pexels-photo-4098150.jpeg?auto=compress&cs=tinysrgb&h=1200&w=1200"
                alt="Dra. Marina Essência"
                width={1200}
                height={1200}
                className="rounded-3xl shadow-xl w-full h-auto object-cover"
                data-konbinicode="about-image"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Seção Serviços */}
      <section id="servicos" className="py-20 bg-sage-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
          >
            <h3
              className="text-4xl font-bold text-sage-800 mb-4"
              data-konbinicode="services-title"
            >
              Nossos Serviços
            </h3>
            <p className="text-xl text-sage-600 max-w-2xl mx-auto">
              Oferecemos diferentes modalidades de atendimento para atender às
              suas necessidades específicas
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Terapia Individual",
                description:
                  "Atendimento personalizado para questões como ansiedade, depressão, autoestima e desenvolvimento pessoal.",
                icon: <FaUsers className="text-3xl text-sage-500" />,
              },
              {
                title: "Terapia de Casal",
                description:
                  "Fortalecimento de relacionamentos, comunicação e resolução de conflitos para casais.",
                icon: <FaHeart className="text-3xl text-sage-500" />,
              },
              {
                title: "Atendimento Online",
                description:
                  "Flexibilidade e comodidade com sessões por videochamada, mantendo a mesma qualidade do presencial.",
                icon: <FaBrain className="text-3xl text-sage-500" />,
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                variants={fadeIn}
                transition={{ delay: index * 0.2, duration: 0.6 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow bg-white border-0">
                  <CardContent className="p-8 text-center space-y-4">
                    <div className="flex justify-center">{service.icon}</div>
                    <h4 className="text-xl font-semibold text-sage-800">
                      {service.title}
                    </h4>
                    <p className="text-sage-600 leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção Abordagens Terapêuticas */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
          >
            <h3 className="text-4xl font-bold text-sage-800 mb-4">
              Abordagens Terapêuticas
            </h3>
            <p className="text-xl text-sage-600 max-w-2xl mx-auto">
              Utilizamos diferentes abordagens científicas para oferecer o
              melhor tratamento
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "TCC",
                fullName: "Terapia Cognitivo-Comportamental",
                description:
                  "Foca na identificação e modificação de padrões de pensamento e comportamento.",
              },
              {
                title: "Psicanálise",
                fullName: "Abordagem Psicanalítica",
                description:
                  "Explora o inconsciente para compreender conflitos internos e padrões relacionais.",
              },
              {
                title: "Humanista",
                fullName: "Abordagem Humanista",
                description:
                  "Enfatiza o potencial humano, autoestima e crescimento pessoal.",
              },
            ].map((approach, index) => (
              <motion.div
                key={index}
                className="bg-sage-50 p-8 rounded-2xl text-center space-y-4"
                initial="hidden"
                whileInView="visible"
                variants={fadeIn}
                transition={{ delay: index * 0.15, duration: 0.6 }}
              >
                <div className="text-2xl font-bold text-sage-600">
                  {approach.title}
                </div>
                <h4 className="text-lg font-semibold text-sage-800">
                  {approach.fullName}
                </h4>
                <p className="text-sage-700">{approach.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção Benefícios */}
      <section className="py-20 bg-cream-100">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={fadeIn}
            >
              <Image
                src="https://images.pexels.com/photos/5336963/pexels-photo-5336963.jpeg"
                alt="Bem-estar e tranquilidade"
                width={1200}
                height={1200}
                className="rounded-3xl shadow-xl w-full h-auto object-cover"
                data-konbinicode="benefits-image"
              />
            </motion.div>
            <motion.div
              className="space-y-8"
              initial="hidden"
              whileInView="visible"
              variants={fadeIn}
            >
              <h3 className="text-4xl font-bold text-sage-800">
                Por que escolher a Clínica Essência?
              </h3>
              <div className="space-y-6">
                {[
                  {
                    title: "Acolhimento Genuíno",
                    description:
                      "Ambiente livre de julgamentos onde você pode se expressar livremente",
                    icon: <FaHeart className="text-sage-500 text-xl" />,
                  },
                  {
                    title: "Escuta Ativa",
                    description:
                      "Atenção plena às suas necessidades e experiências únicas",
                    icon: <FaBrain className="text-sage-500 text-xl" />,
                  },
                  {
                    title: "Ambiente Seguro",
                    description:
                      "Espaço confidencial e protegido para sua jornada de autoconhecimento",
                    icon: <FaShieldAlt className="text-sage-500 text-xl" />,
                  },
                ].map((benefit, index) => (
                  <div key={index} className="flex space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-sage-100 rounded-full flex items-center justify-center">
                      {benefit.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-sage-800 mb-2">
                        {benefit.title}
                      </h4>
                      <p className="text-sage-600">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Seção Depoimentos */}
      <section id="depoimentos" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
          >
            <h3 className="text-4xl font-bold text-sage-800 mb-4">
              O que nossos pacientes dizem
            </h3>
            <p className="text-xl text-sage-600 max-w-2xl mx-auto">
              Transformações reais de pessoas que encontraram seu caminho
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Ana Silva",
                age: 32,
                text: "A Dra. Marina me ajudou a superar a ansiedade que me acompanhava há anos. Hoje me sinto mais confiante e em paz comigo mesma.",
                rating: 5,
              },
              {
                name: "Carlos Santos",
                age: 28,
                text: "O atendimento online foi perfeito para minha rotina. Consegui trabalhar questões importantes sem sair de casa.",
                rating: 5,
              },
              {
                name: "Maria Costa",
                age: 45,
                text: "A terapia de casal salvou meu casamento. Aprendemos a nos comunicar de forma mais saudável e amorosa.",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                variants={fadeIn}
              >
                <Card className="h-full bg-sage-50 border-0 hover:shadow-lg transition-shadow">
                  <CardContent className="p-8">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <FaStar key={i} className="text-yellow-400 text-lg" />
                      ))}
                    </div>
                    <p className="text-sage-700 mb-6 italic">
                      "{testimonial.text}"
                    </p>
                    <div>
                      <div className="font-semibold text-sage-800">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-sage-600">
                        {testimonial.age} anos
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção Blog */}
      <section id="blog" className="py-20 bg-sage-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
          >
            <h3 className="text-4xl font-bold text-sage-800 mb-4">Blog</h3>
            <p className="text-xl text-sage-600 max-w-2xl mx-auto">
              Artigos sobre saúde mental, autocuidado e bem-estar emocional
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Como Lidar com a Ansiedade no Dia a Dia",
                excerpt:
                  "Técnicas práticas para gerenciar momentos de ansiedade e encontrar tranquilidade.",
                date: "15 Jan 2024",
                image:
                  "https://images.pexels.com/photos/7592498/pexels-photo-7592498.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              },
              {
                title: "A Importância do Autocuidado Mental",
                excerpt:
                  "Descubra como pequenas práticas diárias podem transformar sua saúde mental.",
                date: "08 Jan 2024",
                image:
                  "https://images.pexels.com/photos/9004298/pexels-photo-9004298.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              },
              {
                title: "Construindo Relacionamentos Saudáveis",
                excerpt:
                  "Estratégias para desenvolver conexões mais profundas e significativas.",
                date: "02 Jan 2024",
                image:
                  "https://images.pexels.com/photos/4098344/pexels-photo-4098344.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              },
            ].map((post, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                variants={fadeIn}
              >
                <Card className="h-full bg-white border-0 hover:shadow-lg transition-shadow overflow-hidden">
                  <Image
                    src={post.image.replace("h=650&w=940", "h=1200&w=1200")}
                    alt={post.title}
                    width={1200}
                    height={1200}
                    className="w-full h-48 object-cover"
                  />
                  <CardContent className="p-6">
                    <div className="text-sm text-sage-500 mb-2">
                      {post.date}
                    </div>
                    <h4 className="text-lg font-semibold text-sage-800 mb-3">
                      {post.title}
                    </h4>
                    <p className="text-sage-600 mb-4">{post.excerpt}</p>
                    <Button
                      variant="outline"
                      className="w-full border-sage-300 text-sage-700 hover:bg-sage-50"
                    >
                      Ler Mais
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-sage-400 to-sage-500">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            className="max-w-3xl mx-auto space-y-6"
          >
            <h3 className="text-4xl md:text-5xl font-bold text-white">
              Pronto para começar sua jornada?
            </h3>
            <p className="text-xl text-sage-100">
              Dê o primeiro passo em direção ao bem-estar e transformação
              pessoal
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 pt-8">
              <Button className="bg-white text-sage-700 hover:bg-sage-50 px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all">
                <FaCalendarAlt className="mr-2" />
                Agendar Consulta
              </Button>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg rounded-xl"
              >
                <FaWhatsapp className="mr-2" />
                WhatsApp
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Seção Contato */}
      <section id="contato" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
          >
            <h3 className="text-4xl font-bold text-sage-800 mb-4">
              Entre em Contato
            </h3>
            <p className="text-xl text-sage-600 max-w-2xl mx-auto">
              Estamos aqui para ajudar você a dar o primeiro passo
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Formulário */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={fadeIn}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sage-700 font-medium mb-2">
                      Nome
                    </label>
                    <Input
                      type="text"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="border-sage-300 focus:border-sage-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sage-700 font-medium mb-2">
                      Telefone
                    </label>
                    <Input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="border-sage-300 focus:border-sage-500"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sage-700 font-medium mb-2">
                    E-mail
                  </label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="border-sage-300 focus:border-sage-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sage-700 font-medium mb-2">
                    Mensagem
                  </label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="border-sage-300 focus:border-sage-500 h-32"
                    placeholder="Como podemos ajudá-lo?"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-sage-500 hover:bg-sage-600 text-white py-6 text-lg rounded-xl"
                >
                  Enviar Mensagem
                </Button>
              </form>
            </motion.div>

            {/* Informações de Contato */}
            <motion.div
              className="space-y-8"
              initial="hidden"
              whileInView="visible"
              variants={fadeIn}
            >
              <div>
                <h4 className="text-2xl font-semibold text-sage-800 mb-6">
                  Informações
                </h4>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <FaMapMarkerAlt className="text-sage-500 text-xl flex-shrink-0" />
                    <span className="text-sage-700">
                      Av. Paulista, 1000 - São Paulo, SP
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <FaPhone className="text-sage-500 text-xl flex-shrink-0" />
                    <span className="text-sage-700">(11) 9 9999-9999</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <FaEnvelope className="text-sage-500 text-xl flex-shrink-0" />
                    <span className="text-sage-700">
                      contato@clinicaessencia.com.br
                    </span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <FaClock className="text-sage-500 text-xl flex-shrink-0 mt-1" />
                    <div className="text-sage-700">
                      <div>Segunda a Sexta: 8h às 18h</div>
                      <div>Sábado: 8h às 12h</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mapa */}
              <div className="bg-sage-100 rounded-xl p-6">
                <h5 className="font-semibold text-sage-800 mb-4">
                  Localização
                </h5>
                <div className="bg-sage-200 rounded-lg overflow-hidden">
                  <iframe
                    title="Mapa Clínica Essência"
                    src="https://www.google.com/maps?q=Av.+Brasil,+São+Paulo,+SP,+01430-000&output=embed"
                    width="100%"
                    height="192"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-sage-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-sage-400 rounded-full flex items-center justify-center">
                  <FaLeaf className="text-white" />
                </div>
                <h4 className="text-xl font-bold">Clínica Essência</h4>
              </div>
              <p className="text-sage-300">
                Transformando vidas através do cuidado, acolhimento e
                desenvolvimento pessoal.
              </p>
              <div className="flex space-x-4">
                <FaFacebook className="text-2xl hover:text-sage-400 transition-colors cursor-pointer" />
                <FaInstagram className="text-2xl hover:text-sage-400 transition-colors cursor-pointer" />
                <FaLinkedin className="text-2xl hover:text-sage-400 transition-colors cursor-pointer" />
              </div>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Serviços</h5>
              <ul className="space-y-2 text-sage-300">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Terapia Individual
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Terapia de Casal
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Atendimento Online
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Psicoterapia
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Links Úteis</h5>
              <ul className="space-y-2 text-sage-300">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Sobre
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Agendamento
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contato
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Contato</h5>
              <div className="space-y-2 text-sage-300">
                <div>(11) 9 9999-9999</div>
                <div>contato@clinicaessencia.com.br</div>
                <div>Av. Paulista, 1000</div>
                <div>São Paulo, SP</div>
              </div>
            </div>
          </div>
          <div className="border-t border-sage-700 mt-12 pt-8 text-center text-sage-400">
            <p>&copy; 2024 Clínica Essência. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
