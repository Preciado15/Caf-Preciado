"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { ARTICLES } from "@/data/journal"
import Link from "next/link"

export default function JournalPreview() {
  return (
    <section id="journal" className="py-24 md:py-32 px-6 md:px-12 bg-crema text-espresso border-t border-espresso/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <span className="uppercase tracking-[0.2em] text-copper text-sm font-semibold mb-4 block">Cultura &amp; Ciencia</span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.1]">
              Preciado <span className="italic font-light">Journal</span>
            </h2>
          </div>
          <Link href="/journal" className="flex items-center gap-2 uppercase tracking-widest text-sm text-espresso hover:text-copper transition-colors group">
            Leer Todo <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ARTICLES.map((article, idx) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: "easeOut" }}
              className="group cursor-pointer"
            >
              <Link href={`/journal/${article.slug}`}>
                <div className="relative aspect-[4/3] overflow-hidden mb-6">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover transform transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute top-4 left-4 bg-crema px-3 py-1 text-[10px] uppercase tracking-wider z-10">
                    {article.category}
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <p className="text-xs text-espresso/50">{article.date}</p>
                    <span className="text-espresso/20">·</span>
                    <p className="text-xs text-espresso/50">{article.readTime} de lectura</p>
                  </div>
                  <h3 className="font-serif text-xl md:text-2xl leading-tight group-hover:text-copper transition-colors mb-2 line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-sm text-espresso/60 font-light line-clamp-2">{article.excerpt}</p>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
