import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Visite Nossa Localização
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Nos encontre convenientemente localizado no coração da cidade.
            Estamos aqui para atendê-lo com serviços premium de cuidado
            automotivo.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Map Placeholder */}
          <div className="relative">
            <div className="aspect-[4/3] bg-slate-200 rounded-lg overflow-hidden">
              <iframe
                title="Mapa de São Paulo"
                src="https://www.google.com/maps?q=-23.55052,-46.633308&z=15&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-xl font-bold text-slate-900">
                  <MapPin className="h-5 w-5 mr-2 text-blue-600" />
                  Endereço
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Rua Premium, 123
                  <br />
                  Distrito Luxo, São Paulo - SP
                  <br />
                  CEP: 01234-567
                  <br />
                  Brasil
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-xl font-bold text-slate-900">
                  <Phone className="h-5 w-5 mr-2 text-blue-600" />
                  Telefone & Email
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-2 text-slate-400" />
                  <span className="text-slate-600">(11) 9999-WASH</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-4 w-4 mr-2 text-slate-400" />
                  <span className="text-slate-600">
                    contato@cruzewash.com.br
                  </span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-xl font-bold text-slate-900">
                  <Clock className="h-5 w-5 mr-2 text-blue-600" />
                  Horário de Funcionamento
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-600">Segunda - Sexta</span>
                    <span className="font-medium">8:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Sábado</span>
                    <span className="font-medium">8:00 - 17:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Domingo</span>
                    <span className="font-medium">10:00 - 16:00</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-slate-900">
                  Siga-nos
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="flex items-center justify-center w-10 h-10 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    className="flex items-center justify-center w-10 h-10 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition-colors"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    className="flex items-center justify-center w-10 h-10 bg-blue-400 text-white rounded-full hover:bg-blue-500 transition-colors"
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                </div>
                <p className="text-slate-600 text-sm mt-4">
                  Siga-nos para dicas de cuidado automotivo, ofertas especiais e
                  conteúdo dos bastidores!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
