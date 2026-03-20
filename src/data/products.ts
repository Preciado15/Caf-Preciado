export type Product = {
  id: number
  slug: string
  name: string
  type: string
  price: string
  gramsOptions: number[]
  origin: string
  roast: string
  notes: string[]
  description: string
  image: string
  badge?: string
}

export const PRODUCTS: Product[] = [
  {
    id: 1,
    slug: "obsidian-blend",
    name: "Obsidian Blend",
    type: "Espresso Roast",
    price: "$24.00",
    gramsOptions: [250, 500, 1000],
    origin: "Sumapaz, Cundinamarca · Colombia",
    roast: "Oscuro",
    notes: ["Chocolate", "Caramelo", "Panela"],
    description: "Un blend construido en torno al café de páramo del Sumapaz. Las altitudes de Cundinamarca aportan un cuerpo sedoso y una dulzura de panela que corona cada extracción.",
    image: "https://images.unsplash.com/photo-1559525839-b184a4d698c7?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 2,
    slug: "ethiopia-yirgacheffe",
    name: "Ethiopia Yirgacheffe",
    type: "Origen Único",
    price: "$28.00",
    gramsOptions: [250, 500],
    origin: "Yirgacheffe, Ethiopia",
    roast: "Claro",
    notes: ["Jazmín", "Bergamota", "Té negro"],
    description: "La cuna del café. Proceso lavado con la clásica acidez brillante y notas florales inconfundibles.",
    image: "https://images.unsplash.com/photo-1587734195503-904fca47e0e9?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 3,
    slug: "panama-geisha",
    name: "Panamá Geisha",
    type: "Reserva Limitada",
    price: "$65.00",
    gramsOptions: [100, 250],
    origin: "Boquete, Panamá",
    roast: "Medio-Claro",
    notes: ["Flor de naranjo", "Melocotón", "Miel"],
    description: "El legendario Geisha. Una experiencia trascendental con perfil floral exquisito y dulzor prolongado.",
    image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&q=80&w=600",
    badge: "Edición Limitada",
  },
  {
    id: 4,
    slug: "preciado-decaf",
    name: "Preciado Descafeinado",
    type: "Swiss Water Process",
    price: "$22.00",
    gramsOptions: [250, 500],
    origin: "Sumapaz, Cundinamarca · Colombia",
    roast: "Medio",
    notes: ["Cacao", "Nuez", "Avellana"],
    description: "El mismo café de páramo del Sumapaz de Cundinamarca, descafeinado con proceso Swiss Water sin solventes. Todo el carácter de las altitudes colombianas, sin la cafeína.",
    image: "https://images.unsplash.com/photo-1559496417-e7f25cb247f3?auto=format&fit=crop&q=80&w=600",
  },
]
