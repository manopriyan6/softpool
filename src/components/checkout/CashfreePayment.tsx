
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, CreditCard } from "lucide-react";
import { toast } from "sonner";
import { useCart } from "@/contexts/CartContext";

interface CashfreePaymentProps {
  onSuccess: () => void;
}

const CashfreePayment = ({ onSuccess }: CashfreePaymentProps) => {
  const [loading, setLoading] = useState(false);
  const { state, clearCart } = useCart();
  
  const initiateCashfreePayment = async () => {
    setLoading(true);
    
    try {
      // Simulating payment processing
      // In a real implementation, you would call your backend API to create a payment order
      // and then initialize the Cashfree SDK with the order token
      
      console.log("Initiating Cashfree payment for ₹", state.total.toFixed(2));
      
      // Simulate API call and payment processing
      setTimeout(() => {
        setLoading(false);
        clearCart();
        toast.success("Payment successful! Your digital products are ready for download.");
        onSuccess();
      }, 2000);
      
      /* 
      Real implementation would look something like:
      
      // 1. Create order on your backend
      const orderResponse = await fetch('/api/create-order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: state.total,
          items: state.items.map(item => ({
            id: item.product.id,
            name: item.product.title,
            price: item.product.price,
            quantity: item.quantity
          }))
        }),
      });
      
      const { orderToken } = await orderResponse.json();
      
      // 2. Initialize Cashfree checkout
      const cashfree = new window.Cashfree({
        mode: "sandbox" // or "production"
      });
      
      cashfree.checkout({
        orderToken,
        onSuccess: (data) => {
          clearCart();
          toast.success("Payment successful! Your digital products are ready for download.");
          onSuccess();
        },
        onFailure: (data) => {
          toast.error("Payment failed. Please try again.");
          setLoading(false);
        },
        onClose: () => {
          setLoading(false);
        },
      });
      */
      
    } catch (error) {
      console.error("Payment initiation failed:", error);
      toast.error("Payment failed. Please try again.");
      setLoading(false);
    }
  };
  
  return (
    <div className="space-y-6">
      <div className="p-6 border border-border rounded-lg">
        <div className="flex items-center gap-3 mb-4">
          <CreditCard className="h-8 w-8 text-primary" />
          <h2 className="text-xl font-medium">Pay with Cashfree</h2>
        </div>
        
        <p className="text-muted-foreground mb-4">
          Secure and fast payments with Cashfree - India's leading payment gateway.
        </p>
        
        <div className="bg-secondary/30 p-4 rounded-lg mb-6">
          <h3 className="font-medium mb-2">Order Total</h3>
          <p className="text-2xl font-bold">₹ {state.total.toFixed(2)}</p>
          <p className="text-xs text-muted-foreground mt-1">
            Including taxes and all applicable fees
          </p>
        </div>
        
        <Button 
          onClick={initiateCashfreePayment} 
          className="w-full" 
          size="lg" 
          disabled={loading}
        >
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
      </div>
    </div>
  );
};

export default CashfreePayment;
