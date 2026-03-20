"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ShoppingBag } from "lucide-react"

const NAV_LINKS = [
  { name: "Tienda",      href: "#tienda" },
  { name: "Proceso",     href: "#diferenciadores" },
  { name: "Suscripción", href: "#suscripcion" },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] px-6 md:px-12 ${
        isScrolled
          ? "bg-black/95 backdrop-blur-2xl py-4 border-b border-white/10"
          : "bg-transparent py-8"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* LOGO */}
        <Link href="/" className="z-50 text-white flex-shrink-0 group">
          <span className="font-serif text-2xl md:text-3xl tracking-wide font-light text-white group-hover:text-bronze transition-colors duration-500">
            Preciado.
          </span>
        </Link>

        {/* DESKTOP LINKS (Centered for symmetry) */}
        <nav className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center space-x-12">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-luxury-label text-white/50 hover:text-white transition-colors duration-300"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* ACTIONS */}
        <div className="flex items-center gap-8 z-50 text-white">
          <Link href="/login" className="hidden md:block text-luxury-label text-white/50 hover:text-white transition-colors duration-300">
            Acceder
          </Link>
          <button className="text-white/50 hover:text-white transition-colors flex items-center gap-3" aria-label="Ver carrito">
            <span className="text-luxury-label hidden sm:inline-block">Cart (0)</span>
            <ShoppingBag className="w-5 h-5 font-light" strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </header>
  )
}
