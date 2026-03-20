"use client"

import { motion } from "framer-motion"

const DIFFS = [
  {
    num: "01",
    title: "Origen",
    desc: "Cosechado a 1.800 metros. Altitud que concentra los azúcares y desarrolla un perfil limpio, imposible de replicar en otras altitudes."
  },
  {
    num: "02",
    title: "Cosecha",
    desc: "Recolección manual de cerezas perfectamente maduras. Un proceso exhaustivo que garantiza cero defectos en cada lote."
  },
  {
    num: "03",
    title: "Tueste",
    desc: "No almacenamos café tostado. Tu pedido se tuesta exclusivamente para ti, despachado en el pico de su curva de sabor."
  }
]

export default function Differentiators() {
  return (
    <section 
      id="diferenciadores" 
      className="py-32 md:py-48 px-6 md:px-12 bg-white text-black"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-24 lg:gap-32 items-start">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:w-1/3 flex flex-col items-start"
          >
            <span className="text-luxury-label text-black/40 mb-8 block">
              02 // El Proceso
            </span>
            <h2 className="text-luxury-title text-4xl md:text-5xl text-black mb-10 leading-tight">
              Diseño integral <br />
              <span className="italic text-black/50 font-light">desde la semilla.</span>
            </h2>
            <p className="font-light text-black/60 leading-relaxed max-w-sm mb-12">
              El café de especialidad no es un accidente. Es la suma de decisiones radicales
              tomadas en cada paso de nuestro proceso en Cundinamarca.
            </p>
            <a href="#historia" className="text-luxury-label border-b border-black/20 pb-2 hover:border-black transition-colors">
              Nuestra Historia
            </a>
          </motion.div>

          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-y-20 gap-x-12">
            {DIFFS.map((col, idx) => (
              <motion.div
                key={col.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8, delay: 0.2 + idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col group relative"
              >
                <div className="mb-6 pb-6 border-b border-black/10 text-luxury-label text-bronze w-full flex justify-between items-end">
                  Paso
                  <span className="font-serif text-4xl font-light text-black/10 group-hover:text-bronze transition-colors duration-500">
                    {col.num}
                  </span>
                </div>
                
                <h3 className="font-serif text-2xl text-black mb-6">
                  {col.title}
                </h3>
                
                <p className="text-black/60 font-light text-sm leading-relaxed max-w-xs">
                  {col.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
