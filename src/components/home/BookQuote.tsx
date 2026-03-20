"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { BookOpen, Coffee, Feather } from "lucide-react"

/* ─── Libros de Fabián Preciado ───────────────────────────────────────────── */
/* NOTA: Reemplaza estos títulos con los títulos reales cuando estén disponibles */
const FABIAN_BOOKS = [
  {
    id: 1,
    title: "Raíces del Páramo",
    subtitle: "Cuentos desde el Sumapaz",
    year: "2019",
    genre: "Narrativa",
    excerpt:
      "\"El páramo no es solo tierra. Es memoria, es niebla, es el lugar donde los sueños crecen más despacio y más hondo.\"",
    coffee: "Sumapaz Lavado",
    coffeeNotes: "La acidez viva del Sumapaz en perfecta armonía con la prosa pausada.",
    color: "from-mahogany/90 to-espresso/80",
  },
  {
    id: 2,
    title: "Escribiendo Sueños",
    subtitle: "Poesía del cafetal",
    year: "2021",
    genre: "Poesía",
    excerpt:
      "\"Cada grano lleva una historia que nadie sembró, que el agua de páramo escribió en silencio sobre la tierra roja.\"",
    coffee: "Obsidian Blend",
    coffeeNotes: "El cuerpo oscuro y sedoso del Obsidian para acompañar versos que pesan oro.",
    color: "from-espresso/90 to-obsidian/80",
  },
  {
    id: 3,
    title: "La Taza y el Libro",
    subtitle: "Un ensayo sobre el ritual",
    year: "2023",
    genre: "Ensayo",
    excerpt:
      "\"Leer sin café es posible. Pero con un Café Preciado entre las manos, las páginas saben diferente.\"",
    coffee: "Preciado Descafeinado",
    coffeeNotes: "Para las noches largas de lectura, sin renunciar al ritual ni al sabor.",
    color: "from-sienna/70 to-mahogany/70",
  },
]

export default function BookQuote() {
  return (
    <section
      className="relative overflow-hidden text-crema"
      style={{ backgroundColor: "var(--color-mahogany)" }}
    >
      {/* ── Encabezado de sección ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <span className="uppercase tracking-[0.35em] text-xs text-copper/70 mb-3 block">El Autor &amp; El Caficultor</span>

          {/* Ícono central — taza + pluma */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-16 bg-copper/30" />
            <div className="flex items-center gap-2 text-copper">
              <Coffee className="w-5 h-5" />
              <span className="text-copper text-xl" aria-hidden="true">×</span>
              <Feather className="w-5 h-5" />
            </div>
            <div className="h-px w-16 bg-copper/30" />
          </div>

          <h2 className="font-serif text-4xl md:text-6xl leading-tight mb-4 text-crema">
            Fabián Preciado
          </h2>
          <p
            className="text-2xl md:text-3xl text-copper mb-6"
            style={{ fontFamily: "var(--font-script)" }}
          >
            Escribiendo Sueños desde el Sumapaz
          </p>
          <p className="text-crema/60 text-base max-w-2xl mx-auto font-light leading-relaxed">
            El mismo hombre que cultiva los granos también cultiva palabras. Cada libro de Fabián Preciado
            nació entre cafetales y niebla de páramo — y cada uno tiene su café perfecto.
          </p>
        </motion.div>

        {/* ── Tarjetas de libros ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FABIAN_BOOKS.map((book, idx) => (
            <motion.div
              key={book.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.9, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="group relative flex flex-col"
            >
              {/* Portada del libro — estilizada */}
              <div
                className={`relative h-64 md:h-72 overflow-hidden bg-gradient-to-br ${book.color} flex flex-col items-center justify-center p-8 border border-copper/20 group-hover:border-copper/60 transition-colors duration-500 cursor-pointer`}
              >
                {/* Textura de lomo de libro */}
                <div className="absolute left-0 top-0 bottom-0 w-4 border-r border-copper/20 bg-black/20" />

                {/* Año y género */}
                <div className="absolute top-4 right-4 text-right">
                  <p className="text-[9px] uppercase tracking-[0.3em] text-copper/60">{book.genre}</p>
                  <p className="text-[9px] uppercase tracking-widest text-crema/30">{book.year}</p>
                </div>

                {/* Ícono */}
                <BookOpen className="w-8 h-8 text-copper/40 mb-5 group-hover:text-copper/70 transition-colors duration-500" />

                {/* Títulos */}
                <h3 className="font-serif text-2xl text-crema text-center leading-tight mb-2">
                  {book.title}
                </h3>
                <p
                  className="text-base text-copper/80 text-center"
                  style={{ fontFamily: "var(--font-script)" }}
                >
                  {book.subtitle}
                </p>

                {/* Línea decorativa inferior */}
                <div className="absolute bottom-4 left-8 right-8 h-px bg-copper/20 group-hover:bg-copper/50 transition-colors duration-500" />
              </div>

              {/* Cuerpo — extracto y maridaje */}
              <div
                className="flex-1 p-6 border border-t-0 border-copper/20 group-hover:border-copper/40 transition-colors duration-500"
                style={{ backgroundColor: "rgba(44, 14, 6, 0.5)" }}
              >
                {/* Cita del libro */}
                <blockquote className="text-crema/70 text-sm italic font-light leading-relaxed mb-6 border-l-2 border-copper/40 pl-4">
                  {book.excerpt}
                </blockquote>

                {/* Separador con ícono */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="h-px flex-1 bg-copper/20" />
                  <Coffee className="w-3 h-3 text-copper/50" />
                  <div className="h-px flex-1 bg-copper/20" />
                </div>

                {/* Maridaje */}
                <p className="text-[9px] uppercase tracking-[0.3em] text-copper/60 mb-1">Maridaje perfecto</p>
                <p className="font-serif text-base text-copper mb-2">{book.coffee}</p>
                <p className="text-xs text-crema/50 leading-relaxed">{book.coffeeNotes}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Cita grande central ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          className="mt-24 text-center relative"
        >
          {/* Comillas decorativas */}
          <span
            className="absolute -top-10 left-1/2 -translate-x-1/2 font-serif leading-none select-none pointer-events-none"
            style={{ fontSize: "12rem", lineHeight: 1, color: "rgba(200,146,42,0.07)" }}
            aria-hidden="true"
          >
            "
          </span>

          <div className="relative z-10 max-w-3xl mx-auto">
            <blockquote
              className="font-serif text-2xl md:text-4xl leading-[1.4] text-crema/90 italic mb-8"
            >
              Un buen café merece un buen libro.<br />
              <span className="text-copper not-italic font-light">Café Preciado merece a Fabián Preciado.</span>
            </blockquote>

            <div className="flex items-center justify-center gap-6">
              <div className="h-px w-12 bg-copper/40" />
              <p
                className="text-2xl text-copper"
                style={{ fontFamily: "var(--font-script)" }}
              >
                Escribiendo Sueños
              </p>
              <div className="h-px w-12 bg-copper/40" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* ── Banner inferior — invitación a descubrir los libros ── */}
      <div
        className="relative z-10 border-t py-12 px-6 md:px-12 mt-16"
        style={{ borderColor: "rgba(200,146,42,0.15)" }}
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-copper/60 mb-1">Café Preciado × Fabián Preciado</p>
            <p className="font-serif text-xl text-crema">
              El café que se escribe. Los libros que se saborean.
            </p>
          </div>
          <div className="flex gap-4">
            <a
              href="#tienda"
              className="px-8 py-3 border border-copper text-copper uppercase tracking-widest text-xs hover:bg-copper hover:text-obsidian transition-all duration-300 font-medium"
            >
              Pedir el Café
            </a>
            <a
              href="#journal"
              className="px-8 py-3 border border-crema/20 text-crema/60 uppercase tracking-widest text-xs hover:border-copper/40 hover:text-crema transition-all duration-300"
            >
              Leer el Journal
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
