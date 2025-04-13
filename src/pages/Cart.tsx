
import { useState } from "react";
import { Link } from "react-router-dom";
import { AlertCircle, ShoppingCart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CartItem from "@/components/cart/CartItem";
import { useCart } from "@/contexts/CartContext";

const Cart = () => {
  const { state, clearCart } = useCart();
  const [isClearing, setIsClearing] = useState(false);
  
  const handleClearCart = () => {
    setIsClearing(true);
    setTimeout(() => {
      clearCart();
      setIsClearing(false);
    }, 500);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container px-4 md:px-6 py-10">
        <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
        
        {state.items.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="bg-secondary/50 p-6 rounded-full mb-6">
              <ShoppingCart className="h-12 w-12 text-muted-foreground" />
            </div>
            <h2 className="text-2xl font-semibold mb-2">Your cart is empty</h2>
            <p className="text-muted-foreground mb-8 text-center max-w-md">
              Looks like you haven't added any products to your cart yet.
              Browse our products and find something you like!
            </p>
            <Button asChild size="lg">
              <Link to="/products">Browse Products</Link>
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-card rounded-lg border border-border p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-semibold">
                    {state.items.length} {state.items.length === 1 ? "Item" : "Items"}
                  </h2>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={handleClearCart}
                    disabled={isClearing}
                  >
                    {isClearing ? 'Clearing...' : 'Clear Cart'}
                  </Button>
                </div>
                
                <div className="divide-y divide-border">
                  {state.items.map((item) => (
                    <CartItem 
                      key={item.product.id} 
                      product={item.product} 
                      quantity={item.quantity} 
                    />
                  ))}
                </div>
              </div>
            </div>
            
            <div>
              <Card className="sticky top-20">
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span>${state.total.toFixed(2)}</span>
                    </div>
                    
                    <Separator />
                    
                    <div className="flex justify-between text-lg font-medium">
                      <span>Total</span>
                      <span>${state.total.toFixed(2)}</span>
                    </div>
                    
                    <div className="bg-secondary/30 p-3 rounded-md flex gap-2 text-xs mt-2">
                      <AlertCircle className="h-4 w-4 flex-shrink-0" />
                      <p className="text-muted-foreground">
                        Digital products will be available for download immediately after purchase.
                      </p>
                    </div>
                  </div>
                  
                  <Button className="w-full mt-6" size="lg" asChild>
                    <Link to="/checkout" className="flex items-center justify-center gap-2">
                      Checkout <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                  
                  <Button variant="outline" className="w-full mt-3" asChild>
                    <Link to="/products">Continue Shopping</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Cart;
