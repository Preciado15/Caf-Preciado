export type BrewMethod = {
  id: string
  name: string
  description: string
  image: string
  ratio: string
  temp: string
  time: string
  grind: string
}

export const BREW_METHODS: BrewMethod[] = [
  {
    id: "pourover",
    name: "Pour Over",
    description:
      "Para tazas limpias y brillantes que resaltan la acidez y las notas florales de nuestros granos de origen único. Ideal para Etiopía Yirgacheffe.",
    image: "https://images.unsplash.com/photo-1495474472201-44755106a759?auto=format&fit=crop&q=80&w=1200",
    ratio: "1:16",
    temp: "92°C",
    time: "2:30 – 3:00 min",
    grind: "Medio-fino",
  },
  {
    id: "espresso",
    name: "Espresso",
    description:
      "Extracción bajo presión para obtener un licor de café intenso, viscoso y con una crema texturizada. La expresión ideal del Obsidian Blend.",
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=1200",
    ratio: "1:2",
    temp: "93°C",
    time: "25 – 30 seg",
    grind: "Fino",
  },
  {
    id: "frenchpress",
    name: "Prensa Francesa",
    description:
      "Método de inmersión total que produce una taza con gran cuerpo, resaltando las notas a chocolate y caramelo. Perfecto para el desayuno.",
    image: "https://images.unsplash.com/photo-1444419988131-046ed4e5088b?auto=format&fit=crop&q=80&w=1200",
    ratio: "1:15",
    temp: "95°C",
    time: "4:00 min",
    grind: "Grueso",
  },
]
