import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import BrandStory from "@/components/home/BrandStory";
// import CoffeeOrigin from "@/components/home/CoffeeOrigin";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import Differentiators from "@/components/home/Differentiators";
// import BrewingGuide from "@/components/home/BrewingGuide";
import SubscriptionTeaser from "@/components/home/SubscriptionTeaser";
import Reviews from "@/components/home/Reviews";
import FinalCTA from "@/components/home/FinalCTA";
// import BookQuote from "@/components/home/BookQuote";
// import JournalPreview from "@/components/home/JournalPreview";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-black">
      <Navbar />
      <main className="flex-grow">
        {/* Narrativa fluida 
            1. Hero (Oscuro, impacto).
            2. Productos (Claro, descubrimiento).
            3. Historia (Oscuro, conexión emocional).
            4. Diferenciador (Claro, valor).
            5. Suscripción (Oscuro, propuesta).
            6. Reviews (Claro, validación).
            7. Conversión (Oscuro, CTA).
        */}
        
        <Hero />
        <FeaturedProducts />
        <BrandStory />
        <Differentiators />
        <SubscriptionTeaser />
        <Reviews />
        <FinalCTA />

      </main>
      <Footer />
    </div>
  );
}
