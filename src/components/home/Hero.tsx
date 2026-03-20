"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden text-crema"
      style={{ backgroundColor: "var(--color-mahogany)" }}
    >
      {/* Imagen de fondo */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 z-10" style={{ background: "linear-gradient(to bottom, rgba(61,20,8,0.75) 0%, rgba(61,20,8,0.45) 50%, rgba(61,20,8,0.85) 100%)" }} />
        <Image
          src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&q=80&w=2000"
          alt="Granos de café arábica del Páramo del Sumapaz cultivados por Café Preciado"
          fill
          priority
          className="object-cover opacity-70 animate-[slow-zoom_20s_ease-in-out_infinite_alternate]"
          sizes="100vw"
        />
      </div>

      {/* Contenido */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 flex flex-col items-center text-center">

        {/* Origen */}
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1 }}
          className="text-[10px] uppercase tracking-[0.45em] text-copper/80 mb-6 block"
        >
          Sumapaz · Cundinamarca · Colombia
        </motion.span>

        {/* Nombre de la marca — como en el logo */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-[0.12em] uppercase leading-none mb-4 text-crema"
        >
          Café Preciado
        </motion.h1>

        {/* Tagline — "Escribiendo Sueños" en script como en el logo */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="font-script text-3xl md:text-4xl text-copper mb-10"
          style={{ fontFamily: "var(--font-script)" }}
        >
          Escribiendo Sueños
        </motion.p>

        {/* Descripción */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.7 }}
          className="text-sm md:text-base text-crema/70 max-w-xl mx-auto mb-12 font-sans font-light leading-relaxed tracking-wide"
        >
          Granos de especialidad cultivados a más de 1.800m en el Páramo del Sumapaz.
          Tostados artesanalmente, semana a semana, para que tu taza cuente una historia.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.9 }}
          className="flex flex-col sm:flex-row items-center gap-5"
        >
          <a
            href="#tienda"
            className="group relative inline-flex items-center justify-center px-10 py-4 text-crema uppercase tracking-widest text-xs overflow-hidden border border-copper"
            style={{ backgroundColor: "var(--color-copper)" }}
          >
            <span className="relative z-10">Explorar Selección</span>
            <div className="absolute inset-0 bg-mahogany scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out" />
          </a>
          <a
            href="#historia"
            className="inline-flex items-center justify-center px-10 py-4 border border-crema/30 text-crema uppercase tracking-widest text-xs hover:border-copper hover:text-copper transition-colors duration-300"
          >
            Nuestra Historia
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center"
      >
        <span className="text-[9px] uppercase tracking-[0.3em] text-crema/40 mb-3">Descubrir</span>
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}>
          <ArrowDown className="w-5 h-5 text-copper" />
        </motion.div>
      </motion.div>
    </section>
  )
}
