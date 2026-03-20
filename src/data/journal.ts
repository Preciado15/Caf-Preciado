export type Article = {
  id: number
  slug: string
  title: string
  excerpt: string
  category: string
  image: string
  date: string
  readTime: string
}

export const ARTICLES: Article[] = [
  {
    id: 1,
    slug: "impacto-cambio-climatico-geisha",
    title: "El impacto del cambio climático en el Geisha",
    excerpt: "La elevación de temperaturas en las altitudes de Boquete está transformando el perfil del café más cotizado del mundo.",
    category: "Sostenibilidad",
    image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&q=80&w=800",
    date: "12 Mar, 2024",
    readTime: "5 min",
  },
  {
    id: 2,
    slug: "fermentacion-anaerobica",
    title: "Entendiendo la fermentación anaeróbica",
    excerpt:
      "El proceso de fermentación sin oxígeno está redefiniendo los límites sensoriales del café de especialidad.",
    category: "Procesos",
    image: "https://images.unsplash.com/photo-1518057111178-44a106bad636?auto=format&fit=crop&q=80&w=800",
    date: "05 Mar, 2024",
    readTime: "7 min",
  },
  {
    id: 3,
    slug: "agua-mineralidad-extraccion",
    title: "Agua y mineralidad: la variable que nadie menciona",
    excerpt:
      "El 98% de tu taza es agua. Descubre cómo la dureza y el pH determinan si extraes lo mejor o lo peor de un gran grano.",
    category: "Guía de Extracción",
    image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&q=80&w=800",
    date: "28 Feb, 2024",
    readTime: "8 min",
  },
  {
    id: 4,
    slug: "cafe-y-libros-el-ritual-perfecto",
    title: "Café y libros: el ritual más perfecto del mundo",
    excerpt:
      "Hay maridajes gastronómicos, pero pocos tan perfectos como el de una taza de Café Preciado y las primeras páginas de un buen libro. Un ensayo sobre la lentitud como lujo.",
    category: "Estilo de Vida",
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&q=80&w=800",
    date: "20 Mar, 2024",
    readTime: "4 min",
  },
]
