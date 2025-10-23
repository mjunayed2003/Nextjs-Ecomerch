import CategoryGrid from "@/component/CategoryGrid";
import Hero from "@/component/Hero";
import ProductListing from "@/component/ProductListing";

export default function Home() {
  return (
    <div>
        <Hero />
        <CategoryGrid />
        <ProductListing />
    </div>
  );
}
