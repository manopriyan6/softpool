
import { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CashfreePayment from "@/components/checkout/CashfreePayment";
import { useCart } from "@/contexts/CartContext";
import { MessageSquare, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const Checkout = () => {
  const { state } = useCart();
  const [orderComplete, setOrderComplete] = useState(false);
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  // Check authentication
  useEffect(() => {
    const user = localStorage.getItem('user');
    if (!user && !orderComplete) {
      navigate('/login?redirect=/checkout');
    } else if (user) {
      setIsAuthenticated(true);
    }
  }, [navigate, orderComplete]);
  
  // Redirect if cart is empty
  if (state.items.length === 0 && !orderComplete) {
    return <Navigate to="/products" />;
  }
  
  const handleOrderSuccess = () => {
    setOrderComplete(true);
  };
  
  if (!isAuthenticated && !orderComplete) {
    return null; // Will redirect in useEffect
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container px-4 md:px-6 py-10">
        {orderComplete ? (
          <div className="max-w-lg mx-auto text-center py-16">
            <div className="bg-primary/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
              <Check className="h-10 w-10 text-primary" />
            </div>
            <h1 className="text-3xl font-bold mb-4">Thank you for your purchase!</h1>
            <p className="text-muted-foreground mb-8">
              Your order has been confirmed. You'll receive an email with your download links shortly.
            </p>
            <div className="bg-secondary/30 p-4 rounded-lg flex items-center gap-3 text-left">
              <MessageSquare className="h-10 w-10 text-primary flex-shrink-0" />
              <div>
                <h3 className="font-medium mb-1">Need Help?</h3>
                <p className="text-sm text-muted-foreground">
                  Contact us via WhatsApp for any questions about your purchase.
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-8">Checkout</h1>
            
            <Tabs defaultValue="cashfree" className="mb-10">
              <TabsList className="grid grid-cols-2">
                <TabsTrigger value="cashfree">Cashfree</TabsTrigger>
                <TabsTrigger value="whatsapp">Pay via WhatsApp</TabsTrigger>
              </TabsList>
              
              <TabsContent value="cashfree" className="mt-6">
                <CashfreePayment onSuccess={handleOrderSuccess} />
              </TabsContent>
              
              <TabsContent value="whatsapp" className="mt-6">
                <div className="p-6 border border-border rounded-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <MessageSquare className="h-8 w-8 text-primary" />
                    <h2 className="text-xl font-medium">Pay via WhatsApp</h2>
                  </div>
                  <p className="text-muted-foreground mb-6">
                    Click the button below to contact us on WhatsApp. We'll guide you through the payment process and provide you with the products immediately after confirmation.
                  </p>
                  <a 
                    href={`https://wa.me/1234567890?text=I'd like to purchase items worth ₹${state.total.toFixed(2)} from my cart`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#25D366] hover:bg-[#128C7E] text-white py-3 px-6 rounded-md inline-flex items-center gap-2 transition-colors"
                  >
                    <MessageSquare className="h-5 w-5" />
                    Contact via WhatsApp
                  </a>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Checkout;
