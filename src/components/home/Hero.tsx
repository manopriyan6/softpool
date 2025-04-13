
import { ArrowRight, Download, MessageSquare, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="py-20 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-accent/5 z-[-1]" />
      
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-10">
          <div className="space-y-4 max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-balance animate-float">
              Premium Digital Products for <span className="text-gradient">Creative Professionals</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-[700px] mx-auto">
              Discover high-quality templates, design assets, and digital tools to elevate your projects.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="gap-2">
              <Link to="/products">
                Browse Products <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="gap-2">
              <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
                <MessageSquare className="h-4 w-4" /> Contact via WhatsApp
              </a>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl pt-12">
            <div className="bg-secondary/50 p-6 rounded-lg border border-border/40">
              <Download className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-lg font-medium mb-2">Instant Downloads</h3>
              <p className="text-sm text-muted-foreground">
                Get access to your purchases immediately after checkout.
              </p>
            </div>
            <div className="bg-secondary/50 p-6 rounded-lg border border-border/40">
              <Shield className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-lg font-medium mb-2">Secure Payment</h3>
              <p className="text-sm text-muted-foreground">
                Your transactions are protected with industry-standard encryption.
              </p>
            </div>
            <div className="bg-secondary/50 p-6 rounded-lg border border-border/40">
              <MessageSquare className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-lg font-medium mb-2">24/7 Support</h3>
              <p className="text-sm text-muted-foreground">
                Get help via WhatsApp anytime you need assistance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
