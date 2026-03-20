"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export default function BrandStory() {
  return (
    <section id="historia" className="py-32 md:py-48 px-6 md:px-12 bg-crema text-espresso relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* Bloque tipográfico */}
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="uppercase tracking-[0.2em] text-copper text-sm font-semibold mb-6 block">Nuestro Legado</span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.1] mb-8">
              El Sumapaz <br /><span className="italic font-light">en cada grano</span>.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="space-y-6 text-espresso/80 text-lg font-light leading-relaxed max-w-md"
          >
            <p>
              Café Preciado nació en las laderas del Páramo del Sumapaz, a más de 1.800 metros sobre el nivel del mar, donde el agua de páramo y la neblina perpetua crean las condiciones perfectas para un café de carácter singular.
            </p>
            <p>
              Cada lote es el resultado de décadas de convivencia con la tierra y de un proceso de tostado meticuloso, diseñado para realzar las notas naturales de panela, mandarina y avellana que distinguen al terroir cundinamarqués.
            </p>
            <p>
              Creemos que el mejor momento para disfrutar un Café Preciado es acompañado de un buen libro. Hay algo en la lentitud de una buena lectura que honra la paciencia con la que cultivamos cada grano. Tiempo que se vuelve placer.
            </p>
            <div className="pt-8 border-t border-espresso/10">
              <p className="font-serif italic text-2xl text-espresso">— La Familia Preciado</p>
              <p className="text-xs uppercase tracking-widest text-espresso/40 mt-2">Sumapaz, Cundinamarca · Desde 2008</p>
            </div>
          </motion.div>
        </div>

        {/* Composición editorial de imágenes */}
        <div className="relative h-[600px] md:h-[800px] w-full">
          {/* Imagen superior derecha */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute top-0 right-0 w-3/4 h-[60%] overflow-hidden bg-latte"
          >
            <Image
              src="https://images.unsplash.com/photo-1559525839-b184a4d698c7?auto=format&fit=crop&q=80&w=1000"
              alt="Proceso de preparación artesanal de Café Preciado"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 75vw, 37vw"
            />
          </motion.div>

          {/* Imagen inferior izquierda */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            className="absolute bottom-0 left-0 w-2/3 h-[50%] overflow-hidden bg-obsidian border-4 border-crema shadow-2xl"
          >
            <Image
              src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=1000"
              alt="Granos de café arábica de Café Preciado, Sumapaz"
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              sizes="(max-width: 768px) 66vw, 33vw"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
