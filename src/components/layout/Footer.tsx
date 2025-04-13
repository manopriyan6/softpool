
import { Link } from "react-router-dom";
import { MessageSquare, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const openWhatsApp = () => {
    window.open("https://wa.me/1234567890", "_blank");
  };

  return (
    <footer className="bg-secondary py-12 mt-20">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gradient">DigitalMarket</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Your premier marketplace for high-quality digital products.
            </p>
            <div className="flex gap-4">
              <Button variant="outline" size="icon" onClick={openWhatsApp}>
                <MessageSquare className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href="tel:1234567890">
                  <Phone className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href="mailto:contact@example.com">
                  <Mail className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/cart" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Cart
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>Need assistance? Reach out to us:</p>
              <p className="flex items-center gap-2">
                <MessageSquare className="h-4 w-4 text-primary" />
                <span>WhatsApp: +1 (234) 567-890</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <span>Email: contact@example.com</span>
              </p>
              <Button 
                variant="default" 
                className="mt-4 w-full" 
                onClick={openWhatsApp}
              >
                <MessageSquare className="h-4 w-4 mr-2" />
                Chat on WhatsApp
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border/40 mt-12 pt-6 text-center text-sm text-muted-foreground">
          <p>© {currentYear} DigitalMarket. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
