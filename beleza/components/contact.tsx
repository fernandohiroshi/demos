import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Instagram,
  Facebook,
  Twitter,
} from "lucide-react";

export default function Contact() {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Nos Visite",
      details: ["Rua da Beleza, 123", "Centro", "São Paulo, SP 01234-567"],
    },
    {
      icon: Phone,
      title: "Nos Ligue",
      details: ["(11) 9999-8888", "Seg-Sáb: 9h-19h", "Dom: 10h-17h"],
    },
    {
      icon: Mail,
      title: "Nos Envie um Email",
      details: [
        "ola@shinebeauty.com",
        "agendamentos@shinebeauty.com",
        "info@shinebeauty.com",
      ],
    },
    {
      icon: Clock,
      title: "Horário de Funcionamento",
      details: [
        "Seg-Sex: 9:00 - 19:00",
        "Sábado: 9:00 - 18:00",
        "Domingo: 10:00 - 17:00",
      ],
    },
  ];

  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
  ];

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-stone-50 to-rose-50 text-stone-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light mb-6">
            Entre em <span className="italic text-rose-400">contato</span>
          </h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            Pronta para realçar sua beleza? Entre em contato conosco hoje para
            agendar seu atendimento ou saber mais sobre nossos serviços.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {contactInfo.map((info, index) => (
            <Card
              key={index}
              className="bg-white border-stone-200 text-stone-800 shadow-sm"
            >
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-rose-400 rounded-full mb-4">
                  <info.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-3 text-stone-900">
                  {info.title}
                </h3>
                <div className="space-y-1">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-stone-600 text-sm">
                      {detail}
                    </p>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Map Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-semibold mb-4">
              Encontre Nosso Salão
            </h3>
            <p className="text-stone-600 mb-6 leading-relaxed">
              Localizado no coração do centro, nosso salão é facilmente
              acessível por transporte público e oferece estacionamento
              conveniente. Estamos situados em uma área linda com muitas opções
              de compras e restaurantes nas proximidades.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-rose-400" />
                <span>Rua da Beleza, 123, Centro</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-rose-400" />
                <span>(11) 9999-8888</span>
              </div>
            </div>
            <Button className="mt-6 bg-rose-400 hover:bg-rose-500">
              Como Chegar
            </Button>
          </div>

          <div className="bg-rose-100 rounded-2xl p-0 shadow-sm overflow-hidden flex items-center justify-center">
            <iframe
              title="Mapa Foz do Iguaçu"
              src="https://www.google.com/maps?q=Av.+Brasil,+500,+Foz+do+Iguaçu,+PR&output=embed"
              width="100%"
              height="100%"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full aspect-video border-0"
            ></iframe>
          </div>
        </div>

        {/* Social Media & Newsletter */}
        <div className="text-center border-t border-stone-700 pt-12">
          <h3 className="text-2xl font-semibold mb-6">Mantenha-se Conectado</h3>
          <p className="text-stone-600 mb-8 max-w-2xl mx-auto">
            Siga-nos nas redes sociais para dicas de beleza, conteúdo dos
            bastidores e ofertas exclusivas. Junte-se à nossa comunidade de
            entusiastas da beleza!
          </p>

          <div className="flex justify-center gap-4 mb-8">
            {socialLinks.map((social, index) => (
              <Button
                key={index}
                variant="outline"
                size="icon"
                className="border-stone-600 text-stone-600 hover:bg-rose-400 hover:border-rose-400 hover:text-white bg-transparent"
                asChild
              >
                <a href={social.href} aria-label={social.label}>
                  <social.icon className="h-5 w-5" />
                </a>
              </Button>
            ))}
          </div>

          <div className="max-w-md mx-auto">
            <h4 className="font-semibold mb-3">Assine Nossa Newsletter</h4>
            <div className="flex flex-col md:flex-row gap-2">
              <input
                type="email"
                placeholder="Digite seu email"
                className="flex-1 px-4 py-2 bg-rose-100 border border-stone-600 rounded-md text-white placeholder-stone-400 focus:outline-none focus:border-rose-400"
              />
              <Button className="bg-rose-400 hover:bg-rose-500">Assinar</Button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center pt-12 border-t border-stone-200 mt-12">
          <div className="text-2xl font-bold mb-4">Shine</div>
          <p className="text-stone-600 text-sm">
            © {new Date().getFullYear()} Shine Beauty Salon. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </section>
  );
}
