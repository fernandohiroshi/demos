"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from "lucide-react"

export function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const contactInfo = [
    {
      icon: MapPin,
      title: "Endereço",
      content: "Rua Harmonia, 123 - Vila Madalena",
      subtitle: "São Paulo, SP - CEP 05435-000",
    },
    {
      icon: Phone,
      title: "Telefone",
      content: "(11) 3456-7890",
      subtitle: "WhatsApp: (11) 99999-9999",
    },
    {
      icon: Mail,
      title: "E-mail",
      content: "contato@trattoriabellavita.com.br",
      subtitle: "reservas@trattoriabellavita.com.br",
    },
    {
      icon: Clock,
      title: "Funcionamento",
      content: "Segunda a Domingo",
      subtitle: "18h00 às 23h00",
    },
  ]

  const socialLinks = [
    { icon: Instagram, href: "#", label: "@trattoriabellavita" },
    { icon: Facebook, href: "#", label: "Trattoria Bellavita" },
  ]

  return (
    <section id="contato" ref={ref} className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary mb-6">Entre em Contato</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Estamos sempre prontos para recebê-lo. Entre em contato conosco para reservas, informações ou qualquer
            dúvida.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <Card className="hover:shadow-md transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                          <info.icon className="h-6 w-6 text-primary" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">{info.title}</h3>
                        <p className="text-foreground font-medium">{info.content}</p>
                        <p className="text-sm text-muted-foreground">{info.subtitle}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}

            {/* Social Media */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-4">Siga-nos nas Redes Sociais</h3>
                  <div className="flex space-x-4">
                    {socialLinks.map((social, index) => (
                      <Button
                        key={social.label}
                        variant="outline"
                        size="sm"
                        className="flex items-center space-x-2 bg-transparent"
                        asChild
                      >
                        <a href={social.href} target="_blank" rel="noopener noreferrer">
                          <social.icon className="h-4 w-4" />
                          <span>{social.label}</span>
                        </a>
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          {/* Map Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="overflow-hidden h-full">
              <div className="relative h-full min-h-[400px] bg-muted flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-16 w-16 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-serif font-semibold text-foreground mb-2">Nossa Localização</h3>
                  <p className="text-muted-foreground mb-4">
                    Rua Harmonia, 123 - Vila Madalena
                    <br />
                    São Paulo, SP
                  </p>
                  <Button variant="outline" asChild>
                    <a
                      href="https://maps.google.com/?q=Vila+Madalena+São+Paulo"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Ver no Google Maps
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
