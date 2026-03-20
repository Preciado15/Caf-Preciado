"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { MapPin } from "lucide-react"
import { cn } from "@/lib/utils"
import { REGIONS } from "@/data/regions"

export default function CoffeeOrigin() {
  const [activeRegion, setActiveRegion] = useState(REGIONS[0])

  return (
    <section id="origen" className="py-24 md:py-32 px-6 md:px-12 bg-obsidian text-crema relative border-t border-espresso/20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-xl">
            <span className="uppercase tracking-[0.2em] text-copper text-sm font-semibold mb-4 block">El Origen</span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.1]">
              Terroir <br /> <span className="italic font-light text-crema/70">&amp; Expresión</span>
            </h2>
          </div>
          <p className="text-crema/60 text-lg font-light max-w-sm">
            Explora las regiones productoras más exclusivas del mundo. Cada lote cuenta la historia de su tierra natal.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 min-h-[600px]">

          {/* Selector de regiones */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="space-y-2">
              {REGIONS.map((region) => (
                <button
                  key={region.id}
                  onClick={() => setActiveRegion(region)}
                  className={cn(
                    "w-full text-left pl-6 py-5 border-l-2 transition-all duration-300 group",
                    activeRegion.id === region.id
                      ? "border-copper text-crema bg-espresso/20"
                      : "border-espresso text-crema/50 hover:text-crema/80 hover:border-crema/30"
                  )}
                >
                  <div className="flex items-center gap-3">
                    <MapPin
                      className={cn(
                        "w-4 h-4 flex-shrink-0 transition-colors",
                        activeRegion.id === region.id ? "text-copper" : "text-transparent group-hover:text-crema/30"
                      )}
                    />
                    <span className="font-serif text-xl md:text-2xl tracking-wide">{region.name}</span>
                  </div>
                  {activeRegion.id === region.id && (
                    <div className="mt-2 ml-7">
                      <span className="text-[10px] uppercase tracking-widest text-copper/70">{region.country} · {region.process}</span>
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Panel de detalles de la región */}
          <div className="lg:col-span-7 relative bg-espresso/10 p-6 md:p-12 overflow-hidden flex items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeRegion.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="grid md:grid-cols-2 gap-8 w-full z-10 relative"
              >
                <div className="space-y-6">
                  <div>
                    <h4 className="uppercase tracking-widest text-xs text-crema/50 mb-3">Notas de Cata</h4>
                    <div className="flex flex-wrap gap-2">
                      {activeRegion.notes.map((note) => (
                        <span key={note} className="px-3 py-1 border border-copper/30 text-copper text-xs uppercase tracking-wider bg-copper/5">
                          {note}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="uppercase tracking-widest text-xs text-crema/50 mb-1">Altitud</h4>
                      <p className="text-crema font-serif text-base italic">{activeRegion.altitude}</p>
                    </div>
                    <div>
                      <h4 className="uppercase tracking-widest text-xs text-crema/50 mb-1">Proceso</h4>
                      <p className="text-crema font-serif text-base italic">{activeRegion.process}</p>
                    </div>
                  </div>

                  <p className="text-crema/80 font-light text-sm leading-relaxed border-t border-crema/10 pt-6">
                    {activeRegion.description}
                  </p>

                  <a
                    href="#tienda"
                    className="inline-block uppercase tracking-widest text-xs text-crema hover:text-copper transition-colors border-b border-copper pb-1"
                  >
                    Ver Lotes Disponibles
                  </a>
                </div>

                {/* Imagen de la región */}
                <div className="relative aspect-[4/5] overflow-hidden group">
                  <div className="absolute inset-0 bg-obsidian/20 z-10 transition-opacity group-hover:opacity-0" />
                  <Image
                    src={activeRegion.image}
                    alt={`Región productora de café: ${activeRegion.name}`}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 30vw"
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
