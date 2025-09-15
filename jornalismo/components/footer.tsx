import Link from "next/link"
import { Mail, Twitter, Linkedin, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-4">Sarah Mitchell</h3>
              <p className="text-gray-300 mb-6 max-w-md">
                Jornalista investigativa premiada, dedicada a descobrir a verdade, responsabilizar os poderosos e contar histórias que importam.
              </p>
              <div className="flex space-x-4">
                <a href="mailto:sarah@sarahmitchell.com" className="text-gray-300 hover:text-white transition-colors">
                  <Mail className="h-5 w-5" />
                </a>
                <a
                  href="https://twitter.com/sarahmitchell"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a
                  href="https://linkedin.com/in/sarahmitchell"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="https://instagram.com/sarahmitchell"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold mb-4">Links Rápidos</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#about" className="text-gray-300 hover:text-white transition-colors">
                    Sobre
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="text-gray-300 hover:text-white transition-colors">
                    Serviços
                  </Link>
                </li>
                <li>
                  <Link href="#portfolio" className="text-gray-300 hover:text-white transition-colors">
                    Portfólio
                  </Link>
                </li>
                <li>
                  <Link href="#experience" className="text-gray-300 hover:text-white transition-colors">
                    Experiência
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-gray-300 hover:text-white transition-colors">
                    Contato
                  </Link>
                </li>
              </ul>
            </div>

            {/* Categories */}
            <div>
              <h4 className="font-bold mb-4">Categorias</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                    Investigações
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                    Política
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                    Corporativo
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                    Justiça Social
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                    Meio Ambiente
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm"> {new Date().getFullYear()} Sarah Mitchell. Todos os direitos reservados.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Política de Privacidade
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Termos de Uso
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Política de Ética
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
