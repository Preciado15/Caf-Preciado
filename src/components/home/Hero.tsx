"use client"

import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative h-screen min-h-[700px] w-full flex flex-col justify-end pb-24 md:pb-32 px-6 md:px-12 overflow-hidden bg-black"
    >
      {/* ── Background Video ── */}
      <div className="absolute inset-0 z-0">
        <video
          src="/hero.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="object-cover w-full h-full opacity-40 scale-105"
        />
        {/* Soft elegant gradient from bottom to top for text legibility */}
        <div 
          className="absolute inset-0 z-10" 
          style={{ background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0) 60%)" }}
          aria-hidden="true" 
        />
      </div>

      {/* ── Content (Bottom Aligned for elegance) ── */}
      <div className="relative z-20 max-w-7xl mx-auto w-full flex flex-col items-start gap-10">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="overflow-hidden"
        >
          <span className="text-luxury-label text-white/50 mb-3 block">
            El Páramo del Sumapaz
          </span>
          <h1 className="text-luxury-title text-5xl md:text-7xl lg:text-[7rem] text-white max-w-5xl leading-tight">
            Café de origen, <br className="hidden md:block"/>
            <span className="italic text-white/60">elevado a su máxima expresión.</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center gap-6 mt-4 w-full sm:w-auto"
        >
          <a href="#tienda" className="btn-primary w-full sm:w-auto">
            Explorar Colección
          </a>
          <a href="#historia" className="btn-secondary w-full sm:w-auto">
            Nuestra Filosofía
          </a>
        </motion.div>
      </div>
    </section>
  )
}
