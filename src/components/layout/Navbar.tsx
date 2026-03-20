"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, ShoppingBag } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

const NAV_LINKS = [
  { name: "Tienda",      href: "#tienda" },
  { name: "Origen",      href: "#origen" },
  { name: "Preparación", href: "#preparacion" },
  { name: "Journal",     href: "#journal" },
]

/** Logo SVG inline — taza de café con páginas de libro (reflejo del logo real) */
function LogoIcon({ className }: { className?: string }) {
  return (
    <svg
      width="32" height="36" viewBox="0 0 32 36"
      fill="none" xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Vapor */}
      <path d="M10 4 Q11 1 12 4 Q13 7 14 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.7"/>
      <path d="M15 3 Q16 0 17 3 Q18 6 19 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.7"/>
      {/* Taza */}
      <path d="M5 9 h22 l-2 16 H7 Z" stroke="currentColor" strokeWidth="1.4" fill="none"/>
      {/* Asa */}
      <path d="M27 12 Q33 12 33 18 Q33 24 27 24" stroke="currentColor" strokeWidth="1.4" fill="none"/>
      {/* Libro abierto dentro de la taza */}
      <path d="M13 15 L16 13 L19 15" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round"/>
      <line x1="16" y1="13" x2="16" y2="22" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round"/>
      <path d="M10 15 Q13 14 16 15 Q19 14 22 15 L22 22 Q19 21 16 22 Q13 21 10 22 Z" stroke="currentColor" strokeWidth="1.1" fill="none"/>
      {/* Platillo */}
      <ellipse cx="16" cy="26" rx="10" ry="2" stroke="currentColor" strokeWidth="1.2" fill="none"/>
    </svg>
  )
}

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const textColor    = isScrolled ? "text-espresso"    : "text-crema"
  const hoverColor   = "hover:text-copper"
  const copperColor  = isScrolled ? "text-copper"      : "text-copper"

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out px-6 md:px-12",
        isScrolled
          ? "bg-crema/95 backdrop-blur-md py-3 shadow-md border-b border-copper/10"
          : "bg-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* ── Logo Café Preciado ── */}
        <Link href="/" className="z-50 flex items-center gap-3 group">
          <LogoIcon className={cn("transition-colors duration-300 flex-shrink-0", copperColor)} />
          <div className="flex flex-col leading-none">
            <span className={cn(
              "font-serif text-lg md:text-xl tracking-[0.2em] uppercase font-bold transition-colors duration-300",
              textColor
            )}>
              Café Preciado
            </span>
            <span className="font-script text-sm md:text-base text-copper tracking-wide leading-none mt-0.5">
              Escribiendo Sueños
            </span>
          </div>
        </Link>

        {/* ── Links Desktop ── */}
        <nav className="hidden md:flex items-center space-x-9" aria-label="Navegación principal">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "text-xs tracking-[0.15em] uppercase transition-colors duration-300 relative font-medium",
                "after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1px] after:bg-copper after:transition-all after:duration-300 hover:after:w-full",
                isScrolled ? `text-espresso ${hoverColor}` : `text-crema/80 hover:text-crema`
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* ── Íconos ── */}
        <div className="flex items-center gap-5 z-50">
          <button
            className={cn("transition-colors", textColor, hoverColor)}
            aria-label="Ver carrito de compras"
          >
            <ShoppingBag className="w-5 h-5" />
          </button>
          <button
            className={cn("md:hidden transition-colors", textColor, hoverColor)}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* ── Menú Mobile ── */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute top-full left-0 right-0 bg-crema shadow-xl border-t border-copper/20 md:hidden overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-base tracking-widest uppercase text-espresso hover:text-copper transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <p className="font-script text-xl text-copper pt-4 border-t border-copper/20">
                Escribiendo Sueños
              </p>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
