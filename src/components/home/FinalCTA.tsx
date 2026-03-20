"use client"

import { motion } from "framer-motion"

export default function FinalCTA() {
  return (
    <section 
      className="py-48 md:py-64 px-6 md:px-12 relative overflow-hidden flex items-center justify-center text-center bg-black"
    >
      <div className="absolute inset-0 opacity-[0.03]" aria-hidden="true"
        style={{
          backgroundImage: "radial-gradient(circle at center, rgba(255,255,255,0.8) 0%, transparent 60%)"
        }}
      />

      <div className="max-w-3xl mx-auto relative z-10 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-luxury-label text-bronze uppercase block mb-12 tracking-[0.4em]">
            05 // Conversión
          </span>
          <h2 className="text-luxury-title text-6xl md:text-8xl text-white mb-16 leading-none">
            La decisión.
          </h2>
          <p className="text-white/40 font-light text-base leading-relaxed mb-16 max-w-lg mx-auto">
            Abandone el café estándar. Únase al club selecto que ha hecho del buen grano
            el fundamento de sus mañanas.
          </p>
          <a
            href="#tienda"
            className="btn-primary"
          >
            Adquirir Suscripción
          </a>
        </motion.div>
      </div>
    </section>
  )
}
