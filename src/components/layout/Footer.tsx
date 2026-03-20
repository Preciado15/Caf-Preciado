import Link from "next/link"
import { Instagram, Facebook, Youtube } from "lucide-react"

function LogoIconSmall() {
  return (
    <svg width="24" height="28" viewBox="0 0 32 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M10 4 Q11 1 12 4 Q13 7 14 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.7"/>
      <path d="M15 3 Q16 0 17 3 Q18 6 19 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.7"/>
      <path d="M5 9 h22 l-2 16 H7 Z" stroke="currentColor" strokeWidth="1.4" fill="none"/>
      <path d="M27 12 Q33 12 33 18 Q33 24 27 24" stroke="currentColor" strokeWidth="1.4" fill="none"/>
      <path d="M13 15 L16 13 L19 15" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round"/>
      <line x1="16" y1="13" x2="16" y2="22" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round"/>
      <path d="M10 15 Q13 14 16 15 Q19 14 22 15 L22 22 Q19 21 16 22 Q13 21 10 22 Z" stroke="currentColor" strokeWidth="1.1" fill="none"/>
      <ellipse cx="16" cy="26" rx="10" ry="2" stroke="currentColor" strokeWidth="1.2" fill="none"/>
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="text-crema pt-24 pb-12 px-6 md:px-12" style={{ backgroundColor: "var(--color-mahogany)" }}>
      
      {/* Separador superior dorado */}
      <div className="max-w-7xl mx-auto mb-16">
        <div className="flex items-center gap-4 mb-16">
          <div className="flex-1 h-px" style={{ backgroundColor: "rgba(200,146,42,0.25)" }} />
          <span className="text-copper text-xs uppercase tracking-[0.4em]">Café Preciado</span>
          <div className="flex-1 h-px" style={{ backgroundColor: "rgba(200,146,42,0.25)" }} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Marca */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4 group">
              <LogoIconSmall />
              <div>
                <span className="font-serif text-xl tracking-widest uppercase text-crema block">Café Preciado</span>
                <span className="font-script text-lg text-copper leading-none"
                  style={{ fontFamily: "var(--font-script)" }}>
                  Escribiendo Sueños
                </span>
              </div>
            </Link>
            <p className="text-crema/60 text-sm leading-relaxed mt-4">
              Granos de especialidad cultivados a más de 1.800m en el Páramo del Sumapaz, Cundinamarca. Tostado artesanal, enviado fresco.
            </p>
          </div>

          {/* Explorar */}
          <div>
            <h4 className="font-serif text-base mb-6 tracking-wider text-copper">Explorar</h4>
            <ul className="space-y-4 text-sm text-crema/60">
              <li><Link href="#tienda"      className="hover:text-copper transition-colors">Nuestros Cafés</Link></li>
              <li><Link href="#origen"      className="hover:text-copper transition-colors">El Origen</Link></li>
              <li><Link href="#preparacion" className="hover:text-copper transition-colors">Guía de Preparación</Link></li>
              <li><Link href="#journal"     className="hover:text-copper transition-colors">Preciado Journal</Link></li>
              <li><Link href="#suscripcion" className="hover:text-copper transition-colors">Club Preciado</Link></li>
            </ul>
          </div>

          {/* Soporte */}
          <div>
            <h4 className="font-serif text-base mb-6 tracking-wider text-copper">Soporte</h4>
            <ul className="space-y-4 text-sm text-crema/60">
              <li><Link href="/preguntas-frecuentes" className="hover:text-copper transition-colors">Preguntas Frecuentes</Link></li>
              <li><Link href="/envios"               className="hover:text-copper transition-colors">Envíos y Devoluciones</Link></li>
              <li><Link href="/contacto"             className="hover:text-copper transition-colors">Contacto</Link></li>
              <li><Link href="/mayoristas"            className="hover:text-copper transition-colors">Distribución Mayorista</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-serif text-base mb-2 tracking-wider text-copper">Club Preciado</h4>
            <p className="font-script text-lg text-copper/70 mb-4" style={{ fontFamily: "var(--font-script)" }}>Escribiendo Sueños</p>
            <p className="text-crema/60 text-sm mb-6 leading-relaxed">
              Recibe noticias de cosecha, acceso anticipado a lotes limitados y maridajes café-libro.
            </p>
            <form className="flex border-b focus-within:border-copper transition-colors pb-2"
              style={{ borderColor: "rgba(200,146,42,0.3)" }}>
              <input
                type="email"
                placeholder="Tu correo electrónico"
                required
                className="bg-transparent border-none outline-none text-sm w-full text-crema placeholder:text-crema/30"
              />
              <button type="submit" className="text-xs tracking-widest uppercase hover:text-copper transition-colors ml-2 flex-shrink-0 text-crema/60">
                Unirse
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Barra inferior */}
      <div className="max-w-7xl mx-auto border-t pt-8 flex flex-col md:flex-row items-center justify-between text-xs gap-4"
        style={{ borderColor: "rgba(200,146,42,0.15)", color: "rgba(250,243,230,0.35)" }}>
        <p>&copy; {new Date().getFullYear()} Café Preciado · Sumapaz, Cundinamarca. Todos los derechos reservados.</p>
        <div className="flex items-center gap-8">
          <Link href="/privacidad" className="hover:text-copper transition-colors">Privacidad</Link>
          <Link href="/terminos"   className="hover:text-copper transition-colors">Términos</Link>
          <div className="flex items-center gap-4 ml-2">
            <a href="https://instagram.com/cafepreciado" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-copper transition-colors"><Instagram className="w-4 h-4" /></a>
            <a href="https://facebook.com/cafepreciado"  target="_blank" rel="noopener noreferrer" aria-label="Facebook"  className="hover:text-copper transition-colors"><Facebook  className="w-4 h-4" /></a>
            <a href="https://youtube.com/@cafepreciado"  target="_blank" rel="noopener noreferrer" aria-label="YouTube"   className="hover:text-copper transition-colors"><Youtube   className="w-4 h-4" /></a>
          </div>
        </div>
      </div>
    </footer>
  )
}
