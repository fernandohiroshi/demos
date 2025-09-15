"use client";

import Image from "next/image";

export default function ServicesBanner() {
  const services = ["BANHO", "TOSA", "HIDRATAÇÃO", "PERFUMARIA"];
  const symbols = [
    <span
      style={{
        borderRadius: "50%",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: 56,
        height: 56,
      }}
    >
      <Image src="/duck.png" alt="Banho" width={40} height={40} />
    </span>,
    <span
      style={{
        borderRadius: "50%",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: 56,
        height: 56,
      }}
    >
      <Image src="/scissors.png" alt="Tesoura" width={40} height={40} />
    </span>,
    <span
      style={{
        borderRadius: "50%",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: 56,
        height: 56,
      }}
    >
      <Image src="/water-drop.png" alt="Hidratação" width={40} height={40} />
    </span>,
    <span
      style={{
        borderRadius: "50%",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: 56,
        height: 56,
      }}
    >
      <Image src="/perfume.png" alt="Perfumaria" width={40} height={40} />
    </span>,
  ];

  return (
    <section className="bg-white   py-8 overflow-hidden">
      <div className="animate-scroll">
        <div className="flex items-center space-x-8 text-4xl lg:text-6xl font-black text-black whitespace-nowrap">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="flex items-center space-x-8">
              {services.map((service, index) => (
                <div
                  key={`${i}-${index}`}
                  className="flex items-center gap-2 lg:gap-4"
                >
                  <span className="flex items-center gap-2 lg:gap-3">
                    <span className="inline-flex items-center animate-spin-slow">
                      {symbols[index]}
                    </span>
                    <span>{service}</span>
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
      `}</style>
    </section>
  );
}
