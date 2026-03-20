import Link from "next/link"

export default function Footer() {
  return (
    <footer 
      className="text-white pt-32 pb-16 px-6 md:px-12 bg-black border-t border-white/5" 
    >
      <div className="max-w-7xl mx-auto mb-32 flex flex-col md:flex-row justify-between gap-16 md:gap-32">
        
        {/* Brand Column */}
        <div className="md:w-1/3">
          <Link href="/" className="mb-12 inline-block">
            <span className="font-serif text-3xl font-light text-white hover:text-bronze transition-colors">
              Preciado.
            </span>
          </Link>
          <p className="text-white/40 text-xs leading-relaxed font-light font-sans max-w-sm">
            Especialistas en la extracción, cuidado y tueste del grano colombiano. 
            Radicados en Cundinamarca, operando para los paladares más exigentes del mundo.
          </p>
        </div>

        {/* Links Grid */}
        <div className="md:w-2/3 grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          <div>
            <h4 className="text-luxury-label text-bronze mb-8">
              Colección
            </h4>
            <ul className="space-y-4 text-xs font-light text-white/50">
              <li><Link href="#tienda" className="hover:text-white transition-colors">Origen Único</Link></li>
              <li><Link href="#tienda" className="hover:text-white transition-colors">Ediciones Limitadas</Link></li>
              <li><Link href="#tienda" className="hover:text-white transition-colors">Accesorios</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-luxury-label text-bronze mb-8">
              La Marca
            </h4>
            <ul className="space-y-4 text-xs font-light text-white/50">
              <li><Link href="#historia" className="hover:text-white transition-colors">Nuestra Finca</Link></li>
              <li><Link href="#diferenciadores" className="hover:text-white transition-colors">Sostenibilidad</Link></li>
              <li><Link href="/journal" className="hover:text-white transition-colors">Journal</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-luxury-label text-bronze mb-8">
              Asistencia
            </h4>
            <ul className="space-y-4 text-xs font-light text-white/50">
              <li><Link href="/contacto" className="hover:text-white transition-colors">Contacto Boutique</Link></li>
              <li><Link href="/envios" className="hover:text-white transition-colors">Envíos & Devoluciones</Link></li>
              <li><Link href="/faq" className="hover:text-white transition-colors">Preguntas Frecuentes</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-luxury-label text-bronze mb-8">
              Legal
            </h4>
            <ul className="space-y-4 text-xs font-light text-white/50">
              <li><Link href="/privacidad" className="hover:text-white transition-colors">Políticas de Privacidad</Link></li>
              <li><Link href="/terminos" className="hover:text-white transition-colors">Términos de Servicio</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto border-t border-white/5 pt-12 flex flex-col md:flex-row items-baseline justify-between gap-6">
        <p className="text-luxury-label text-white/20">
          © {new Date().getFullYear()} CAFÉ PRECIADO LTD. EST. 2008.
        </p>

        <div className="flex gap-8 text-luxury-label text-white/40">
          <a href="https://instagram.com" className="hover:text-white transition-colors">Instagram</a>
          <a href="https://twitter.com" className="hover:text-white transition-colors">Twitter</a>
        </div>
      </div>
    </footer>
  )
}
