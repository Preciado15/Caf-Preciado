"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { PRODUCTS } from "@/data/products"
import { ArrowRight } from "lucide-react"

export default function FeaturedProducts() {
  return (
    <section 
      id="tienda" 
      className="py-32 md:py-48 px-6 md:px-12 bg-alabaster text-black"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Header (Asymmetrical layout for editorial feel) */}
        <div className="flex flex-col lg:flex-row items-end justify-between mb-24 md:mb-32 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl"
          >
            <span className="text-luxury-label text-black/40 mb-8 block">
              01 // Orígenes Exclusivos
            </span>
            <h2 className="text-luxury-title text-5xl md:text-6xl text-black">
              Cosechas seleccionadas.
            </h2>
          </motion.div>
          
          <motion.a
            href="/tienda"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="group flex-shrink-0 text-luxury-label border-b border-black/20 pb-2 hover:border-black transition-colors"
          >
            Ver Catálogo <ArrowRight className="inline-block w-3 h-3 ml-2 transform group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </div>

        {/* Product Grid (Borderless, heavy emphasis on photography) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-x-8 md:gap-y-20">
          {PRODUCTS.map((product, idx) => (
            <motion.article
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group cursor-pointer"
            >
              {/* Image Container (High portrait ratio for editorial feel) */}
              <div className="relative aspect-[3/4] bg-white w-full overflow-hidden mb-6">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover object-center scale-100 group-hover:scale-105 transition-transform duration-[1.5s] ease-[cubic-bezier(0.16,1,0.3,1)]"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>

              {/* Minimal Text Info */}
              <div className="flex flex-col">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <h3 className="font-serif font-light text-2xl text-black leading-none group-hover:opacity-70 transition-opacity">
                    {product.name}
                  </h3>
                  <span className="font-serif text-lg text-black/60 shrink-0">
                    {product.price}
                  </span>
                </div>
                
                <p className="text-luxury-label text-black/40 mb-4">{product.origin}</p>
                
                {/* Notes just text, separated by middle dots */}
                <p className="text-xs font-light text-black/60 italic mb-6 leading-relaxed">
                  {product.notes.join(" · ")}
                </p>

                <div 
                  className="mt-auto pt-4 border-t border-black/5 opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 pointer-events-none group-hover:pointer-events-auto flex items-center justify-between"
                >
                  <span className="text-luxury-label text-black">Añadir</span>
                  <span className="text-black/30 font-serif">+</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
