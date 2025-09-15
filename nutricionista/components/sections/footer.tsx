import { Leaf } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Leaf className="w-6 h-6 text-emerald-600" />
              <span className="text-2xl font-bold text-gray-800">Nutritionist</span>
            </div>
            <p className="text-gray-600 mb-4">Dicas claras e objetivas para nutricionistas</p>
            <p className="text-gray-600 mb-2">Rua Exemplo, 123 - São Paulo</p>
            <p className="text-gray-600 mb-2">nutritionist@email.com</p>
            <p className="text-gray-600">+55 11 99999-9999</p>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-gray-800 mb-4">Menu</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-600 hover:text-emerald-600 transition-colors">
                    Início
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-emerald-600 transition-colors">
                    Sobre
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-emerald-600 transition-colors">
                    Serviços
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-emerald-600 transition-colors">
                    Contato
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-4">Serviços</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-600 hover:text-emerald-600 transition-colors">
                    Consulta
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-emerald-600 transition-colors">
                    Planos
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-emerald-600 transition-colors">
                    Acompanhamento
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8 text-center">
          <p className="text-gray-600 text-sm">
            Powered by <span className="text-emerald-600 font-medium">Nutritionist</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
