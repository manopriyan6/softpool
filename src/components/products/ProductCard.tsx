
import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Product } from "@/data/products";
import { useCart } from "@/contexts/CartContext";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();
  
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };

  return (
    <Card className="overflow-hidden card-hover">
      <Link to={`/product/${product.id}`}>
        <div className="aspect-[4/3] overflow-hidden bg-secondary/50">
          <img 
            src={product.image} 
            alt={product.title}
            className="w-full h-full object-cover transition-transform hover:scale-105"
          />
        </div>
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-accent/10 text-accent">
              {product.category}
            </span>
            <span className="font-bold text-lg">${product.price.toFixed(2)}</span>
          </div>
          <h3 className="font-semibold text-lg mb-2 hover:text-primary transition-colors">
            {product.title}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {product.description}
          </p>
        </CardContent>
        <CardFooter className="px-6 pb-6 pt-0">
          <Button 
            className="w-full gap-2" 
            onClick={handleAddToCart}
          >
            <ShoppingCart className="h-4 w-4" />
            Add to Cart
          </Button>
        </CardFooter>
      </Link>
    </Card>
  );
};

export default ProductCard;
