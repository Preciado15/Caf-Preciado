"use client"

import { motion } from "framer-motion"

export default function SubscriptionTeaser() {
  return (
    <section id="suscripcion" className="relative py-32 px-6 md:px-12 overflow-hidden bg-latte text-espresso flex items-center justify-center min-h-[80vh]">
      {/* Fondo gráfico decorativo */}
      <div className="absolute inset-0 z-0 opacity-15 flex items-center justify-center pointer-events-none">
        <svg viewBox="0 0 800 800" className="w-[120%] h-[120%] animate-[slow-spin_40s_linear_infinite]" aria-hidden="true">
          <circle cx="400" cy="400" r="300" fill="none" stroke="#2C1E16" strokeWidth="1" strokeDasharray="10 10" />
          <circle cx="400" cy="400" r="200" fill="none" stroke="#2C1E16" strokeWidth="1" strokeDasharray="5 15" />
          <circle cx="400" cy="400" r="100" fill="none" stroke="#B57B52" strokeWidth="1" strokeDasharray="3 20" />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="bg-crema p-12 md:p-24 shadow-2xl border border-latte"
        >
          <span className="uppercase tracking-[0.3em] text-copper text-xs font-semibold mb-6 block">Club Preciado Reserve</span>
          <h2 className="font-serif text-4xl md:text-6xl leading-[1.1] mb-8">
            El Sumapaz en <br /><span className="italic font-light">tu puerta, cada mes</span>.
          </h2>
          <p className="text-espresso/70 text-lg font-light mb-4 max-w-xl mx-auto">
            Suscríbete a nuestro club mensual y recibe micro-lotes de temporada del Páramo del Sumapaz, tostados la semana de tu envío, con notas de cata escritas por nuestra familia.
          </p>
          <ul className="text-left max-w-sm mx-auto mb-12 space-y-3 text-sm text-espresso/60">
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-copper rounded-full flex-shrink-0" />
              Tostado bajo pedido — siempre fresco
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-copper rounded-full flex-shrink-0" />
              Pausa o cancela en cualquier momento
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-copper rounded-full flex-shrink-0" />
              Carta de cosecha y notas de cata incluidas
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-copper rounded-full flex-shrink-0" />
              Envío gratis a toda Colombia
            </li>
          </ul>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href="#suscripcion"
              className="px-10 py-4 bg-espresso text-crema uppercase tracking-widest text-sm hover:bg-copper transition-colors duration-300 shadow-xl w-full sm:w-auto"
            >
              Personalizar Plan
            </a>
            <a
              href="#suscripcion"
              className="px-10 py-4 border border-espresso text-espresso uppercase tracking-widest text-sm hover:bg-espresso hover:text-crema transition-colors duration-300 w-full sm:w-auto"
            >
              Regalar Suscripción
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
