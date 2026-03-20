export type Region = {
  id: string
  name: string
  country: string
  notes: string[]
  altitude: string
  process: string
  description: string
  image: string
  mapX: string // % horizontal en el SVG de mapa
  mapY: string // % vertical en el SVG de mapa
}

export const REGIONS: Region[] = [
  {
    id: "colombia",
    name: "Sumapaz, Cundinamarca",
    country: "Colombia",
    notes: ["Panela", "Mandarina", "Avellana tostada"],
    altitude: "1.800m – 2.400m",
    process: "Lavado / Honey",
    description:
      "En las estribaciones del Páramo del Sumapaz, la altitud más generosa de Cundinamarca produce granos de acidez viva y una dulzura natural incomparable. Un café que lleva la esencia del agua de páramo en cada gota.",
    image: "https://images.unsplash.com/photo-1518832553480-cd0e625ed3e6?auto=format&fit=crop&q=80&w=1000",
    mapX: "26%",
    mapY: "60%",
  },
  {
    id: "ethiopia",
    name: "Yirgacheffe, Etiopía",
    country: "Etiopía",
    notes: ["Jazmín", "Bergamota", "Té negro"],
    altitude: "1.900m – 2.200m",
    process: "Natural/Lavado",
    description:
      "La cuna del café. De proceso lavado, este lote presenta la clásica acidez brillante y las notas florales inconfundibles que hicieron famoso a Yirgacheffe.",
    image: "https://images.unsplash.com/photo-1525088553748-01d6e243ce35?auto=format&fit=crop&q=80&w=1000",
    mapX: "56%",
    mapY: "55%",
  },
  {
    id: "panama",
    name: "Boquete, Panamá",
    country: "Panamá",
    notes: ["Flor de naranjo", "Melocotón", "Miel"],
    altitude: "1.600m",
    process: "Honey",
    description:
      "El legendario Geisha de Panamá. Una experiencia que redefine lo que puede ser el café, con un perfil floral exquisito y una dulzura prolongada.",
    image: "https://images.unsplash.com/photo-1502462041640-b3d7e50d0662?auto=format&fit=crop&q=80&w=1000",
    mapX: "23%",
    mapY: "58%",
  },
]
