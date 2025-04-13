
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/products/ProductCard";
import { products } from "@/data/products";

const FeaturedProducts = () => {
  const featuredProducts = products.filter(product => product.featured).slice(0, 3);

  return (
    <section className="py-20 container px-4 md:px-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4">
        <div>
          <h2 className="text-3xl font-bold tracking-tight mb-2">Featured Products</h2>
          <p className="text-muted-foreground">
            Explore our most popular digital assets and templates
          </p>
        </div>
        <Button asChild variant="ghost" className="group">
          <Link to="/products" className="flex items-center gap-2">
            View All Products
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {featuredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
