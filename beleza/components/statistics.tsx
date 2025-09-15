export default function Statistics() {
  const stats = [
    { number: "2k+", label: "Clientes Felizes", description: "Clientes satisfeitos que confiam em nossos serviços" },
    { number: "10+", label: "Serviços Premium", description: "Tratamentos abrangentes de beleza disponíveis" },
    { number: "50+", label: "Produtos de Beleza", description: "Produtos de alta qualidade das melhores marcas" },
    {
      number: "8",
      label: "Estilistas Especialistas",
      description: "Membros da equipe profissional prontos para atendê-lo",
    },
  ]

  return (
    <section className="py-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-stone-800 mb-6">
            Por que nossos clientes <span className="italic text-rose-400">nos escolhem</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center bg-white rounded-2xl p-8 shadow-sm">
              <div className="text-4xl font-bold text-stone-800 mb-2">{stat.number}</div>
              <div className="text-lg font-semibold text-rose-400 mb-3">{stat.label}</div>
              <p className="text-stone-600 text-sm">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
