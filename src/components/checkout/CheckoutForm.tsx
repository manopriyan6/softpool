
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CreditCard, Check, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/contexts/CartContext";
import { toast } from "sonner";

interface CheckoutFormProps {
  onSuccess?: () => void;
}

const CheckoutForm = ({ onSuccess }: CheckoutFormProps) => {
  const navigate = useNavigate();
  const { state, clearCart } = useCart();
  const [loading, setLoading] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setLoading(false);
      clearCart();
      toast.success("Payment successful! Your digital products are ready for download.");
      
      if (onSuccess) {
        onSuccess();
      } else {
        navigate("/");
      }
    }, 2000);
  };
  
  return (
    <div className="space-y-6">
      <div className="bg-secondary/30 p-4 rounded-lg flex items-center gap-3">
        <Lock className="h-5 w-5 text-primary" />
        <p className="text-sm">Your payment information is secure. We use encryption to keep your data safe.</p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Contact Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name</Label>
              <Input id="firstName" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input id="lastName" required />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input id="email" type="email" required />
            <p className="text-xs text-muted-foreground">
              We'll send your receipt and download links to this email.
            </p>
          </div>
        </div>
        
        <Separator />
        
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Payment Information</h3>
          <div className="space-y-2">
            <Label htmlFor="cardName">Name on Card</Label>
            <Input id="cardName" required />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="cardNumber">Card Number</Label>
            <div className="relative">
              <Input 
                id="cardNumber" 
                placeholder="1234 5678 9012 3456" 
                required 
                className="pl-10"
              />
              <CreditCard className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="expiry">Expiry Date</Label>
              <Input id="expiry" placeholder="MM/YY" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="cvc">CVC</Label>
              <Input id="cvc" placeholder="123" required />
            </div>
          </div>
        </div>
        
        <Card className="bg-secondary/30">
          <CardContent className="p-4 space-y-3">
            <h3 className="font-medium">Order Summary</h3>
            <div className="space-y-2">
              {state.items.map((item) => (
                <div key={item.product.id} className="flex justify-between text-sm">
                  <span>
                    {item.product.title} <span className="text-muted-foreground">x{item.quantity}</span>
                  </span>
                  <span>₹ {(item.product.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>
            <Separator />
            <div className="flex justify-between font-medium">
              <span>Total</span>
              <span>₹ {state.total.toFixed(2)}</span>
            </div>
          </CardContent>
        </Card>
        
        <Button type="submit" className="w-full" size="lg" disabled={loading}>
          {loading ? (
            <div className="flex items-center gap-2">
              <div className="h-4 w-4 animate-spin rounded-full border-2 border-primary-foreground border-t-transparent"></div>
              Processing...
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4" />
              Pay ₹ {state.total.toFixed(2)}
            </div>
          )}
        </Button>
      </form>
    </div>
  );
};

export default CheckoutForm;
