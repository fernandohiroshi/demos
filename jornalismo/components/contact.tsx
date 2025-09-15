import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin, Twitter, Linkedin, Instagram } from "lucide-react"

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "sarah@sarahmitchell.com",
    href: "mailto:sarah@sarahmitchell.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (555) 123-4567",
    href: "tel:+15551234567",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "New York, NY",
    href: null,
  },
]

const socialLinks = [
  {
    icon: Twitter,
    label: "Twitter",
    href: "https://twitter.com/sarahmitchell",
    username: "@sarahmitchell",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/sarahmitchell",
    username: "Sarah Mitchell",
  },
  {
    icon: Instagram,
    label: "Instagram",
    href: "https://instagram.com/sarahmitchell",
    username: "@sarahmitchell",
  },
]

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Entre em Contato</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tem uma dica de reportagem, oportunidade de colaboração ou apenas quer conversar? Vou adorar receber sua mensagem.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Informações de Contato</h3>

              <div className="space-y-6 mb-12">
                {contactInfo.map((contact, index) => (
                  <div key={index} className="flex items-center">
                    <div className="flex-shrink-0 w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mr-4">
                      <contact.icon className="h-6 w-6 text-gray-600" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-600">{contact.label}</div>
                      {contact.href ? (
                        <a
                          href={contact.href}
                          className="text-lg font-medium text-gray-900 hover:text-gray-600 transition-colors"
                        >
                          {contact.value}
                        </a>
                      ) : (
                        <div className="text-lg font-medium text-gray-900">{contact.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-6">Acompanhe Meu Trabalho</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-12 h-12 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                    >
                      <social.icon className="h-6 w-6 text-gray-600" />
                    </a>
                  ))}
                </div>
                <div className="mt-4 space-y-2">
                  {socialLinks.map((social, index) => (
                    <div key={index} className="flex items-center text-sm text-gray-600">
                      <social.icon className="h-4 w-4 mr-2" />
                      <span>{social.username}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Professional Networks */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Redes Profissionais</h3>

              <div className="space-y-6">
                <Card className="border-gray-200">
                  <CardContent className="p-6">
                    <h4 className="font-bold text-gray-900 mb-2">Society of Professional Journalists</h4>
                    <p className="text-gray-600 mb-4">Membro ativo e participante do comitê de ética</p>
                    <Button variant="outline" size="sm" className="border-gray-300 bg-transparent">
                      Ver Perfil
                    </Button>
                  </CardContent>
                </Card>

                <Card className="border-gray-200">
                  <CardContent className="p-6">
                    <h4 className="font-bold text-gray-900 mb-2">Investigative Reporters & Editors</h4>
                    <p className="text-gray-600 mb-4">Membro do conselho e palestrante em conferências</p>
                    <Button variant="outline" size="sm" className="border-gray-300 bg-transparent">
                      Ver Perfil
                    </Button>
                  </CardContent>
                </Card>

                <Card className="border-gray-200">
                  <CardContent className="p-6">
                    <h4 className="font-bold text-gray-900 mb-2">National Press Club</h4>
                    <p className="text-gray-600 mb-4">Membro desde 2015, participante frequente de eventos</p>
                    <Button variant="outline" size="sm" className="border-gray-300 bg-transparent">
                      Ver Perfil
                    </Button>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-12 p-6 bg-gray-50 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-2">Dicas e Fontes</h4>
                <p className="text-gray-600 mb-4">
                  Tem informações sobre corrupção, fraude ou injustiça? Protejo minhas fontes e utilizo métodos seguros de comunicação.
                </p>
                <Button className="bg-gray-900 hover:bg-gray-800 text-white">Formulário Seguro</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
