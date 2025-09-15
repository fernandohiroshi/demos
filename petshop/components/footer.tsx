import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"

const footerSections = [
  {
    title: "SERVIÇOS",
    links: ["Banho Completo", "Tosa Artística", "Hidratação", "SPA Canino"],
  },
  {
    title: "ESPECIALIDADES",
    links: ["Tosa Bebê", "Tosa Higiênica", "Corte Tesoura", "Tosa Máquina"],
  },
  {
    title: "PRODUTOS",
    links: ["Shampoos", "Condicionadores", "Perfumes", "Acessórios"],
  },
  {
    title: "ATENDIMENTO",
    links: ["Agendamento", "Horários", "Preços", "Localização"],
  },
  {
    title: "EMPRESA",
    links: ["Sobre Nós", "Equipe", "Certificações", "Contato"],
  },
]

export default function Footer() {
  return (
    <footer className="bg-black text-white px-4 py-16 lg:px-8" id="contact">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {/* Logo */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <Link href="/" className="text-2xl font-bold text-white mb-6 block">
              PETIQUE
            </Link>
            <div className="flex space-x-4">
              <Link href="#" className="bg-[#E85A4F] p-2 rounded-full hover:bg-[#D44A3F] transition-colors">
                <Facebook className="h-4 w-4" />
              </Link>
              <Link href="#" className="bg-[#E85A4F] p-2 rounded-full hover:bg-[#D44A3F] transition-colors">
                <Instagram className="h-4 w-4" />
              </Link>
              <Link href="#" className="bg-[#E85A4F] p-2 rounded-full hover:bg-[#D44A3F] transition-colors">
                <Twitter className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section, index) => (
            <div key={index} className="space-y-4">
              <h3 className="font-bold text-white text-sm">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400 text-sm">© 2024 Petique. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
