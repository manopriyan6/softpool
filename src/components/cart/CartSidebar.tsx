
import { ShoppingCart, X, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Card } from "@/components/ui/card";
import { useCart } from "@/contexts/CartContext";
import { Link } from "react-router-dom";

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartSidebar = ({ isOpen, onClose }: CartSidebarProps) => {
  const { state, removeFromCart } = useCart();
  
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      <div 
        className="absolute inset-0 bg-background/80 backdrop-blur-sm" 
        onClick={onClose}
      />
      
      <div className="relative w-full max-w-md bg-background border-l border-border h-full flex flex-col animate-in slide-in-from-right">
        <div className="flex items-center justify-between p-4 border-b border-border">
          <div className="flex items-center gap-2">
            <ShoppingCart className="h-5 w-5" />
            <h2 className="font-semibold text-lg">Your Cart</h2>
            <span className="bg-primary/10 text-primary px-2 py-0.5 rounded-full text-xs font-medium">
              {state.items.length} {state.items.length === 1 ? "item" : "items"}
            </span>
          </div>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-5 w-5" />
          </Button>
        </div>
        
        <div className="flex-1 overflow-y-auto p-4">
          {state.items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center p-4">
              <div className="bg-secondary/50 p-4 rounded-full mb-4">
                <ShoppingCart className="h-10 w-10 text-muted-foreground" />
              </div>
              <h3 className="font-medium text-lg mb-1">Your cart is empty</h3>
              <p className="text-muted-foreground mb-6">
                Looks like you haven't added any products to your cart yet.
              </p>
              <Button onClick={onClose} asChild>
                <Link to="/products">Browse Products</Link>
              </Button>
            </div>
          ) : (
            <div className="space-y-4">
              {state.items.map((item) => (
                <div key={item.product.id} className="flex gap-3">
                  <div className="h-16 w-16 min-w-16 rounded-md overflow-hidden bg-secondary/50">
                    <img 
                      src={item.product.image} 
                      alt={item.product.title} 
                      className="h-full w-full object-cover"
                    />
                  </div>
                  
                  <div className="flex flex-col flex-grow">
                    <div className="flex justify-between">
                      <h3 className="font-medium text-sm">{item.product.title}</h3>
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="h-6 w-6"
                        onClick={() => removeFromCart(item.product.id)}
                      >
                        <X className="h-3 w-3" />
                      </Button>
                    </div>
                    <div className="flex justify-between items-center mt-auto">
                      <span className="text-xs text-muted-foreground">Qty: {item.quantity}</span>
                      <span className="font-medium">${(item.product.price * item.quantity).toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        
        {state.items.length > 0 && (
          <div className="p-4 border-t border-border">
            <Card className="bg-secondary/30 p-4 mb-4">
              <div className="flex justify-between mb-2">
                <span className="text-muted-foreground">Subtotal</span>
                <span>${state.total.toFixed(2)}</span>
              </div>
              <Separator className="my-2" />
              <div className="flex justify-between font-medium">
                <span>Total</span>
                <span>${state.total.toFixed(2)}</span>
              </div>
              
              <div className="mt-3 text-xs flex items-start gap-2 text-muted-foreground">
                <AlertCircle className="h-4 w-4 flex-shrink-0" />
                <p>Taxes and shipping calculated at checkout</p>
              </div>
            </Card>
            
            <div className="space-y-2">
              <Button className="w-full" asChild onClick={onClose}>
                <Link to="/checkout">Proceed to Checkout</Link>
              </Button>
              <Button variant="outline" className="w-full" onClick={onClose}>
                Continue Shopping
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartSidebar;
