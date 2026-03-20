"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { ShoppingBag } from "lucide-react"
import { PRODUCTS } from "@/data/products"

export default function FeaturedProducts() {
  return (
    <section id="tienda" className="py-24 md:py-32 px-6 md:px-12 bg-latte/30 text-espresso">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <span className="uppercase tracking-[0.2em] text-copper text-sm font-semibold mb-4 block">La Colección</span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.1]">
              Granos <br /> <span className="italic font-light">Excepcionales</span>
            </h2>
          </div>
          <a href="/tienda" className="uppercase tracking-widest text-sm text-espresso border-b border-espresso hover:text-copper hover:border-copper transition-colors pb-1">
            Ver Toda la Tienda
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PRODUCTS.map((product, idx) => (
            <motion.article
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: "easeOut" }}
              className="group cursor-pointer"
            >
              {/* Imagen con efectos hover */}
              <div className="relative aspect-[3/4] bg-crema mb-6 overflow-hidden">
                {/* Badge de edición limitada */}
                {product.badge && (
                  <div className="absolute top-4 left-4 z-20 bg-copper text-crema text-[9px] uppercase tracking-widest px-2 py-1">
                    {product.badge}
                  </div>
                )}

                <Image
                  src={product.image}
                  alt={`${product.name} — ${product.type}`}
                  fill
                  className="object-cover object-center grayscale group-hover:grayscale-0 transition-all duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />

                {/* Overlay de compra — botón con transition correctamente declarado */}
                <div className="absolute inset-0 bg-obsidian/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button className="bg-crema text-espresso px-6 py-3 uppercase tracking-widest text-xs font-semibold hover:bg-copper hover:text-crema transition-colors duration-300 flex items-center gap-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <ShoppingBag className="w-4 h-4" /> Agregar
                  </button>
                </div>
              </div>

              {/* Info del producto */}
              <div className="text-center">
                <p className="uppercase tracking-widest text-[10px] text-espresso/50 mb-2">{product.type}</p>
                <h3 className="font-serif text-2xl mb-1 group-hover:text-copper transition-colors">{product.name}</h3>
                <p className="text-xs text-espresso/50 mb-2">{product.origin}</p>
                <p className="font-light text-sm">{product.price}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
