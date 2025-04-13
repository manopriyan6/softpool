
import { useState } from "react";
import { ChevronLeft, ShoppingCart, Share2, MessageSquare, Download, ArrowRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Product } from "@/data/products";
import { useCart } from "@/contexts/CartContext";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ProductDetailProps {
  product: Product;
  relatedProducts: Product[];
}

const ProductDetail = ({ product, relatedProducts }: ProductDetailProps) => {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  
  const handleAddToCart = () => {
    addToCart(product);
  };
  
  const handleBuyNow = () => {
    addToCart(product);
    navigate("/checkout");
  };
  
  const contactViaWhatsApp = () => {
    const message = `Hi, I'm interested in your product: ${product.title}`;
    window.open(`https://wa.me/1234567890?text=${encodeURIComponent(message)}`, "_blank");
  };
  
  const shareProduct = () => {
    if (navigator.share) {
      navigator.share({
        title: product.title,
        text: product.description,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      // Toast message would be shown here
    }
  };

  return (
    <div className="container px-4 md:px-6 py-10">
      <Button
        variant="ghost"
        size="sm"
        className="mb-6 gap-1"
        onClick={() => navigate(-1)}
      >
        <ChevronLeft className="h-4 w-4" />
        Back
      </Button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="space-y-6">
          <div className="bg-secondary/50 rounded-lg overflow-hidden aspect-square relative">
            {!isImageLoaded && (
              <div className="absolute inset-0 bg-secondary animate-pulse" />
            )}
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-full object-cover"
              onLoad={() => setIsImageLoaded(true)}
            />
          </div>
          
          <div className="flex justify-between gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={shareProduct}
              className="flex gap-2 flex-1"
            >
              <Share2 className="h-4 w-4" />
              Share
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={contactViaWhatsApp}
              className="flex gap-2 flex-1"
            >
              <MessageSquare className="h-4 w-4" />
              Ask via WhatsApp
            </Button>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <Badge className="mb-3">{product.category}</Badge>
            <h1 className="text-3xl font-bold">{product.title}</h1>
            <div className="flex items-center gap-2 mt-3">
              <span className="text-3xl font-bold">₹{product.price.toFixed(2)}</span>
            </div>
          </div>

          <Separator />

          <div>
            <h2 className="text-xl font-semibold mb-3">Description</h2>
            <p className="text-muted-foreground">{product.description}</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold">What You'll Get</h2>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <Download className="h-5 w-5 text-primary mt-0.5" />
                <span>Instant digital download after purchase</span>
              </li>
              <li className="flex items-start gap-2">
                <MessageSquare className="h-5 w-5 text-primary mt-0.5" />
                <span>30 days WhatsApp support</span>
              </li>
            </ul>
          </div>

          <div className="pt-4 flex gap-3">
            <Button size="lg" className="flex-1 gap-2" onClick={handleAddToCart}>
              <ShoppingCart className="h-5 w-5" />
              Add to Cart
            </Button>
            <Button size="lg" className="flex-1 gap-2" onClick={handleBuyNow}>
              <ArrowRight className="h-5 w-5" />
              Buy Now
            </Button>
          </div>
        </div>
      </div>

      {relatedProducts.length > 0 && (
        <div className="mt-20">
          <h2 className="text-2xl font-bold mb-6">You Might Also Like</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <Link to={`/product/${relatedProduct.id}`} key={relatedProduct.id}>
                <Card className="overflow-hidden card-hover h-full">
                  <div className="aspect-video overflow-hidden bg-secondary/50">
                    <img 
                      src={relatedProduct.image} 
                      alt={relatedProduct.title}
                      className="w-full h-full object-cover transition-transform hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-medium">{relatedProduct.title}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-1">
                      {relatedProduct.description}
                    </p>
                    <p className="mt-2 font-bold">₹{relatedProduct.price.toFixed(2)}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
