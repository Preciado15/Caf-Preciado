"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export default function BrandStory() {
  return (
    <section 
      id="historia" 
      className="py-32 md:py-48 px-6 md:px-12 bg-black text-white"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 md:gap-32">
        
        {/* Editorial Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="md:w-5/12 relative aspect-[3/4] md:aspect-[2/3] w-full"
        >
          <Image
            src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=1000"
            alt="Granos de café arábica"
            fill
            className="object-cover grayscale"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </motion.div>

        {/* Text Area */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="md:w-7/12"
        >
          <span className="text-luxury-label text-white/50 mb-12 block">
            Nuestra Filosofía
          </span>
          <h2 className="text-luxury-title text-4xl md:text-5xl lg:text-7xl leading-[1.05] text-white mb-16">
            Café con nombre <br />
            <span className="italic text-white/50">y apellido.</span>
          </h2>
          
          <div className="space-y-8 font-light text-white/70 leading-relaxed max-w-lg mb-12">
            <p>
              El Sumapaz de Cundinamarca es el páramo más grande del mundo. Una tierra mística
              de niebla constante y tierra volcánica.
            </p>
            <p>
              La familia Preciado ha cultivado estos terrenos escarpados desde 2008. No compramos café para mezclar. Cultivamos, procesamos y tostamos nuestra propia cosecha de especialidad para garantizar el máximo estándar de pureza.
            </p>
            <p>
              Una trazabilidad perfecta donde cada taza narra la paciencia y dedicación puestas en la montaña.
            </p>
          </div>
          
          <div className="pt-8 border-t border-white/20">
            <p className="font-serif text-3xl font-light text-white">La Familia Preciado</p>
            <p className="text-luxury-label text-bronze mt-4">
              Cundinamarca, Colombia
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
