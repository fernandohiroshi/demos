import { Card, CardContent } from "@/components/ui/card";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Instagram,
  Facebook,
  Twitter,
  Youtube,
} from "lucide-react";

export default function Contact() {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Nos Visite",
      details: ["Rua da Barbearia, 123", "Centro", "São Paulo, SP 01000-000"],
    },
    {
      icon: Phone,
      title: "Ligue para Nós",
      details: [
        "(11) 99999-9999",
        "(11) 3333-4444",
        "Emergência: (11) 99999-0000",
      ],
    },
    {
      icon: Mail,
      title: "Envie um Email",
      details: [
        "contato@barbearia.com",
        "agendamento@barbearia.com",
        "suporte@barbearia.com",
      ],
    },
    {
      icon: Clock,
      title: "Horário de Funcionamento",
      details: [
        "Seg-Sex: 09:00 - 20:00",
        "Sábado: 08:00 - 18:00",
        "Domingo: 10:00 - 16:00",
      ],
    },
  ];

  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  return (
    <section id="contact" className="py-20 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-amber-500/10 text-amber-500 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            ENTRE EM CONTATO
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Informações de <span className="text-amber-500">Contato</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Pronto para experimentar os melhores serviços de cuidado masculino?
            Entre em contato conosco hoje para agendar seu horário ou tirar
            dúvidas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {contactInfo.map((info, index) => (
            <Card
              key={index}
              className="bg-zinc-950 border-amber-500/20 hover:border-amber-500/40 transition-colors text-center"
            >
              <CardContent className="p-6">
                <div className="mx-auto mb-4 p-3 bg-amber-500/10 rounded-full w-fit">
                  <info.icon className="h-8 w-8 text-amber-500" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  {info.title}
                </h3>
                <div className="space-y-2">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-300 text-sm">
                      {detail}
                    </p>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Map and Social Media */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Map */}
          <div className="lg:col-span-2">
            <Card className="bg-zinc-950 border-shadow-red/20 overflow-hidden py-0">
              <CardContent className="p-0">
                <div className="aspect-video w-full h-full">
                  <iframe
                    title="Mapa - Curitiba"
                    src="https://www.google.com/maps?q=Av.+Sete+de+Setembro,+2775+-+Centro,+Curitiba+-+PR,+80230-010&output=embed"
                    width="100%"
                    height="100%"
                    style={{
                      border: 0,
                      borderRadius: "0.5rem",
                      width: "100%",
                      height: "100%",
                    }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Social Media */}
          <div>
            <Card className="bg-zinc-950 border-amber-500/20 h-full">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-white mb-6 text-center">
                  Siga-nos
                </h3>
                <div className="space-y-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className="flex items-center space-x-3 p-3 bg-zinc-800 rounded-lg hover:bg-amber-500 transition-colors group"
                    >
                      <social.icon className="h-5 w-5 text-amber-500 group-hover:text-black" />
                      <span className="text-gray-300 group-hover:text-black font-medium">
                        {social.label}
                      </span>
                    </a>
                  ))}
                </div>

                <div className="mt-8 p-4 bg-amber-500/10 rounded-lg border border-amber-500/20">
                  <h4 className="text-amber-500 font-semibold mb-2">
                    Mantenha-se Conectado
                  </h4>
                  <p className="text-gray-300 text-sm">
                    Siga-nos nas redes sociais para as últimas atualizações,
                    dicas de estilo e ofertas exclusivas.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
