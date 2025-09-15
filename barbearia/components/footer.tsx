import Link from "next/link"
import { MapPin, Phone, Mail, Instagram, Facebook, Twitter, Youtube } from "lucide-react"

export default function Footer() {
  const quickLinks = [
    { name: "Início", href: "#home" },
    { name: "Sobre Nós", href: "#about" },
    { name: "Serviços", href: "#services" },
    { name: "Galeria", href: "#gallery" },
    { name: "Equipe", href: "#team" },
    { name: "Contato", href: "#contact" },
  ]

  const services = [
    "Corte Clássico",
    "Barba Premium",
    "Cuidado da Barba",
    "Tratamento Capilar",
    "Tratamento Real",
    "Retoque Rápido",
  ]

  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ]

  return (
    <footer className="bg-zinc-950 border-t border-amber-500/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <Link href="/" className="text-3xl font-bold text-amber-500 mb-6 block">
              BARBEARIA
            </Link>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Experimente a arte da excelência em barbearia. Onde a tradição encontra o estilo moderno para o cavalheiro
              exigente.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="p-2 bg-zinc-800 rounded-full hover:bg-amber-500 transition-colors group"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5 text-amber-500 group-hover:text-black" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">Links Rápidos</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-300 hover:text-amber-500 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">Nossos Serviços</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-gray-300 hover:text-amber-500 transition-colors cursor-pointer">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">Informações de Contato</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-amber-500 mt-1 flex-shrink-0" />
                <div className="text-gray-300">
                  <p>Rua da Barbearia, 123</p>
                  <p>Centro</p>
                  <p>São Paulo, SP 01000-000</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-amber-500 flex-shrink-0" />
                <span className="text-gray-300">(11) 99999-9999</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-amber-500 flex-shrink-0" />
                <span className="text-gray-300">contato@barbearia.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-amber-500/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Barbearia. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
                Política de Privacidade
              </Link>
              <Link href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
                Termos de Serviço
              </Link>
              <Link href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
                Política de Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
