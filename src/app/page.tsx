import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import BrandStory from "@/components/home/BrandStory";
import CoffeeOrigin from "@/components/home/CoffeeOrigin";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import BrewingGuide from "@/components/home/BrewingGuide";
import BookQuote from "@/components/home/BookQuote";
import SubscriptionTeaser from "@/components/home/SubscriptionTeaser";
import JournalPreview from "@/components/home/JournalPreview";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <BrandStory />
        <CoffeeOrigin />
        <FeaturedProducts />
        <BrewingGuide />
        <BookQuote />
        <SubscriptionTeaser />
        <JournalPreview />
      </main>
      <Footer />
    </div>
  );
}
