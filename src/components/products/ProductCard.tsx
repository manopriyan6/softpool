import { Eye, ShoppingCart, Download, Zap, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Product } from "@/data/products";
import { useCart } from "@/contexts/CartContext";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();
  const [quickViewOpen, setQuickViewOpen] = useState(false);

  const handleAddToCart = (e?: React.MouseEvent) => {
    e?.preventDefault();
    e?.stopPropagation();
    addToCart(product);
  };

  const openQuickView = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setQuickViewOpen(true);
  };

  return (
    <>
      <Card className="overflow-hidden card-hover animate-fade-in transition-all duration-300 hover:-translate-y-1 hover:shadow-lg group">
        <Link to={`/product/${product.id}`}>
          <div className="relative aspect-[4/3] overflow-hidden bg-secondary/50">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <button
              type="button"
              onClick={openQuickView}
              aria-label="Quick view"
              className="absolute top-3 right-3 inline-flex items-center gap-1.5 rounded-full bg-background/80 backdrop-blur px-3 py-1.5 text-xs font-medium border border-border/60 opacity-0 group-hover:opacity-100 transition-all hover:bg-primary hover:text-primary-foreground"
            >
              <Eye className="h-3.5 w-3.5" />
              Quick view
            </button>
          </div>
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-accent/10 text-accent">
                {product.category}
              </span>
              <span className="font-bold text-lg">₹{product.price.toFixed(2)}</span>
            </div>
            <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
              {product.title}
            </h3>
            <p className="text-sm text-muted-foreground line-clamp-2">
              {product.description}
            </p>
          </CardContent>
          <CardFooter className="px-6 pb-6 pt-0">
            <Button
              className="w-full gap-2 transition-transform hover:scale-[1.02]"
              onClick={handleAddToCart}
            >
              <ShoppingCart className="h-4 w-4" />
              Add to Cart
            </Button>
          </CardFooter>
        </Link>
      </Card>

      <Dialog open={quickViewOpen} onOpenChange={setQuickViewOpen}>
        <DialogContent className="max-w-2xl">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="aspect-square overflow-hidden rounded-lg bg-secondary/50">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <DialogHeader className="text-left">
                <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-accent/10 text-accent w-fit mb-2">
                  {product.category}
                </span>
                <DialogTitle className="text-2xl">{product.title}</DialogTitle>
                <DialogDescription className="pt-2 text-sm">
                  {product.description}
                </DialogDescription>
              </DialogHeader>

              <div className="text-3xl font-bold mt-4">
                ₹{product.price.toFixed(2)}
              </div>

              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Zap className="h-4 w-4 text-primary" />
                  Instant access after purchase
                </li>
                <li className="flex items-center gap-2">
                  <Download className="h-4 w-4 text-primary" />
                  Lifetime downloads, all updates included
                </li>
                <li className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-primary" />
                  Secure Cashfree checkout in INR
                </li>
              </ul>

              <DialogFooter className="mt-6 flex-col sm:flex-row gap-2">
                <Button variant="outline" asChild className="sm:flex-1">
                  <Link to={`/product/${product.id}`} onClick={() => setQuickViewOpen(false)}>
                    View details
                  </Link>
                </Button>
                <Button
                  className="gap-2 sm:flex-1"
                  onClick={() => {
                    handleAddToCart();
                    setQuickViewOpen(false);
                  }}
                >
                  <ShoppingCart className="h-4 w-4" />
                  Add to Cart
                </Button>
              </DialogFooter>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ProductCard;
