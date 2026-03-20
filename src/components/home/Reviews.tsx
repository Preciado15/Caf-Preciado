"use client"

import { motion } from "framer-motion"

const TESTIMONIALS = [
  {
    text: "El carácter frutal y la sedosidad de este espresso no tienen comparación. Es evidente la pureza de la tierra volcánica.",
    name: "Valentina M.",
    role: "Diseñadora, Colombia"
  },
  {
    text: "La frescura es rotunda. Abrir cada empaque de Café Preciado revela el cuidado absoluto de una familia que dignifica su cultivo.",
    name: "Marcus W.",
    role: "Ingeniero, Alemania"
  },
  {
    text: "Como barista, aprecio el balance de acidez y dulzura. Su Geisha es uno de los mejores lotes panameños que he catado en mucho tiempo.",
    name: "Sofía R.",
    role: "Barista, Colombia"
  }
]

export default function Reviews() {
  return (
    <section 
      id="testimonios" 
      className="py-32 md:py-48 px-6 md:px-12 bg-alabaster text-black"
    >
      <div className="max-w-7xl mx-auto">
        
        <div className="flex flex-col md:flex-row items-end justify-between gap-16 mb-24 md:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="md:w-1/2"
          >
            <span className="text-luxury-label text-black/40 mb-8 block">
              04 // Validación
            </span>
            <h2 className="text-luxury-title text-5xl md:text-6xl text-black">
              Criterio Selectivo.
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, opacity: 1, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="md:w-[40%] text-sm font-light text-black/60 leading-relaxed border-l border-black/10 pl-8"
          >
            Una marca forjada a la medida de quienes comprenden que el café es un ritual 
            que no admite mediocridad. La satisfacción de nuestra clientela es nuestra mejor garantía.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">
          {TESTIMONIALS.map((review, idx) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col pt-10 border-t border-black/10"
            >
              <div className="text-bronze font-serif text-3xl mb-8 leading-none opacity-50">
                "
              </div>
              <blockquote className="text-black/80 font-light text-base leading-relaxed mb-16 flex-1 pr-4">
                {review.text}
              </blockquote>
              
              <div className="flex items-center gap-4">
                <div 
                  className="w-10 h-10 bg-black text-white font-serif flex justify-center items-center shrink-0 uppercase tracking-widest text-xs"
                >
                  {review.name[0]}
                </div>
                <div>
                  <h4 className="font-serif text-black">{review.name}</h4>
                  <p className="text-luxury-label text-black/40 mt-1">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
