"use client"

import { motion } from "framer-motion"

const PLANS = [
  {
    name: "Regular",
    desc: "Un clásico para quienes aprecian la consistencia impecable.",
    weight: "250g / mes",
    price: "$28",
    active: false,
    delay: 0.1
  },
  {
    name: "Reserva",
    desc: "Nuestros lotes más exclusivos y descubrimientos seleccionados por el equipo de cata.",
    weight: "500g / mes",
    price: "$48",
    active: true,
    delay: 0.2
  },
  {
    name: "Experto",
    desc: "Para profesionales y afines que exigen lo mejor que la montaña puede ofrecer.",
    weight: "1kg / mes",
    price: "$78",
    active: false,
    delay: 0.3
  }
]

export default function SubscriptionTeaser() {
  return (
    <section 
      id="suscripcion" 
      className="py-32 md:py-48 px-6 md:px-12 bg-black text-white"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-20 items-end justify-between mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-luxury-label text-white/40 mb-8 block">
              03 // El Club
            </span>
            <h2 className="text-luxury-title text-5xl md:text-7xl leading-[1.05] text-white">
              Suscripción <br className="hidden md:block"/>
              <span className="italic text-white/50">Mensual</span>
            </h2>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-white/60 font-light max-w-sm mb-4 leading-relaxed"
          >
            Reciba café recién tostado donde esté. Sin intermediarios, sin sorpresas. Una curaduría impecable directo a su taza.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-white/20">
          {PLANS.map((plan) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: plan.delay, ease: [0.16, 1, 0.3, 1] }}
              className={`p-10 flex flex-col justify-between border-b md:border-b-0 border-white/20 group hover:bg-white/5 transition-colors duration-500 ${plan.active ? 'bg-white/5' : ''} md:border-r last:mr-0 last:border-r-0`}
            >
              <div>
                <p className="text-luxury-label text-bronze uppercase block mb-12">
                  {plan.weight}
                </p>
                <h3 className="font-serif text-3xl mb-6">
                  {plan.name}
                </h3>
                <p className="font-light text-white/50 text-sm leading-relaxed mb-16 max-w-xs">
                  {plan.desc}
                </p>
              </div>

              <div className="flex items-center justify-between border-t border-white/10 pt-8 mt-auto">
                <span className="font-serif text-2xl">{plan.price}</span>
                <button className="text-luxury-label text-white group-hover:text-bronze transition-colors flex items-center">
                  Suscribir <span className="ml-2">→</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
