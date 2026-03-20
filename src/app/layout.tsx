import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  preload: false,
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  title: "Café Preciado | Café de Especialidad del Sumapaz, Colombia",
  description:
    "Café Preciado: granos de especialidad cultivados en el Páramo del Sumapaz, Cundinamarca, tostados artesanalmente. Suscripción mensual disponible.",
  keywords: [
    "café colombiano",
    "café de especialidad",
    "café Sumapaz",
    "café Cundinamarca",
    "specialty coffee Colombia",
    "café premium",
    "café artesanal",
    "suscripción de café",
    "single origin coffee",
    "Café Preciado",
  ],
  openGraph: {
    title: "Café Preciado | Del Páramo del Sumapaz a tu Taza",
    description:
      "Granos de especialidad cultivados a más de 1.800m en el Páramo del Sumapaz, Cundinamarca. Tostado artesanal, enviado fresco.",
    type: "website",
    locale: "es_CO",
    siteName: "Café Preciado",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Café Preciado",
    url: "https://cafepreciado.com",
    logo: "https://cafepreciado.com/logo.png",
    description:
      "Café de especialidad cultivado en el Páramo del Sumapaz, Cundinamarca. Tostado artesanal y suscripción mensual.",
    foundingDate: "2008",
    address: {
      "@type": "PostalAddress",
      addressRegion: "Cundinamarca",
      addressCountry: "CO",
    },
    sameAs: [
      "https://instagram.com/cafepreciado",
      "https://facebook.com/cafepreciado",
    ],
  };

  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${playfair.variable} ${inter.variable} antialiased selection:bg-gold selection:text-black`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
