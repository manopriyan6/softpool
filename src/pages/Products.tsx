
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProductsList from "@/components/products/ProductsList";
import { products } from "@/data/products";

const Products = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container px-4 md:px-6 py-10">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Browse Products</h1>
          <p className="text-muted-foreground">
            Discover our collection of premium digital products
          </p>
        </div>
        <ProductsList products={products} />
      </main>
      <Footer />
    </div>
  );
};

export default Products;
