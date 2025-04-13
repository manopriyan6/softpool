
import { useParams, Navigate } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProductDetailComponent from "@/components/products/ProductDetail";
import { products } from "@/data/products";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  
  const product = products.find((p) => p.id === id);
  
  if (!product) {
    return <Navigate to="/products" />;
  }
  
  // Get related products (same category, excluding current product)
  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <ProductDetailComponent product={product} relatedProducts={relatedProducts} />
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;
