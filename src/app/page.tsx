import CategoryGrid from "@/component/CategoryGrid";
import Hero from "@/component/Hero";
import ProductListing from "@/component/ProductListing";
import Footer from "@/layout/Footer";
import MasterLayout from "@/layout/MasterLayout";

export default function Home() {
  return (
    <div>
      <MasterLayout>
        <Hero />
        <CategoryGrid />
        <ProductListing />
      </MasterLayout>
      <Footer />
    </div>
  );
}
