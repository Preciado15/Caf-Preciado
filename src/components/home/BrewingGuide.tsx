"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Droplet, Thermometer, Clock, CookingPot } from "lucide-react"
import { cn } from "@/lib/utils"
import { BREW_METHODS } from "@/data/brewing"

export default function BrewingGuide() {
  const [activeMethod, setActiveMethod] = useState(BREW_METHODS[0])

  return (
    <section id="preparacion" className="py-24 md:py-32 px-6 md:px-12 bg-obsidian text-crema relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-espresso/10 -skew-x-12 transform origin-top pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 md:mb-24">
          <span className="uppercase tracking-[0.2em] text-copper text-sm font-semibold mb-4 block">El Ritual</span>
          <h2 className="font-serif text-4xl md:text-6xl leading-[1.1] mb-6">
            Guía de <span className="italic font-light">Preparación</span>
          </h2>
          <p className="text-crema/70 max-w-2xl mx-auto font-light">
            El tostado es nuestro arte; la extracción es el tuyo. Hemos definido los parámetros óptimos para honrar el trabajo de la finca en tu taza.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">

          {/* Selector de métodos */}
          <div className="w-full lg:w-1/3 space-y-0">
            {BREW_METHODS.map((method) => (
              <button
                key={method.id}
                onClick={() => setActiveMethod(method)}
                className={cn(
                  "w-full text-left p-6 transition-all duration-300 relative overflow-hidden group border-b border-espresso/50",
                  activeMethod.id === method.id ? "bg-espresso/20" : "hover:bg-espresso/10"
                )}
              >
                {activeMethod.id === method.id && (
                  <motion.div layoutId="activeMethodIndicator" className="absolute left-0 top-0 bottom-0 w-[3px] bg-copper" />
                )}
                <span className={cn(
                  "font-serif text-2xl transition-colors",
                  activeMethod.id === method.id ? "text-copper" : "text-crema/50 group-hover:text-crema"
                )}>
                  {method.name}
                </span>
              </button>
            ))}
          </div>

          {/* Detalles del método activo */}
          <div className="w-full lg:w-2/3">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeMethod.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="grid md:grid-cols-2 gap-12 items-center"
              >
                {/* Especificaciones */}
                <div className="space-y-8 order-2 md:order-1">
                  <p className="text-crema/80 font-light leading-relaxed text-lg">
                    {activeMethod.description}
                  </p>

                  <div className="space-y-5 pt-6 border-t border-espresso/50">
                    {[
                      { icon: Droplet,     label: "Ratio (Café:Agua)",    value: activeMethod.ratio },
                      { icon: Thermometer, label: "Temperatura del Agua", value: activeMethod.temp },
                      { icon: Clock,       label: "Tiempo de Extracción", value: activeMethod.time },
                      { icon: CookingPot,  label: "Molienda",             value: activeMethod.grind },
                    ].map(({ icon: Icon, label, value }) => (
                      <div key={label} className="flex items-center gap-4">
                        <div className="w-11 h-11 rounded-full border border-copper/30 flex items-center justify-center text-copper flex-shrink-0">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="text-[10px] uppercase tracking-widest text-crema/50">{label}</p>
                          <p className="font-serif text-lg">{value}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Visual del método */}
                <div className="order-1 md:order-2">
                  <div className="relative aspect-[4/5] w-full overflow-hidden">
                    <div className="absolute inset-0 bg-copper/10 mix-blend-overlay z-10 pointer-events-none" />
                    <Image
                      src={activeMethod.image}
                      alt={`Preparación de café con método ${activeMethod.name}`}
                      fill
                      className="object-cover grayscale"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
