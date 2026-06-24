
import { ArrowRight, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-accent/5 z-[-2]" />
      {/* Animated blobs */}
      <div className="pointer-events-none absolute inset-0 z-[-1] overflow-hidden">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-primary/20 blur-3xl animate-blob" />
        <div className="absolute top-1/3 -right-24 h-80 w-80 rounded-full bg-accent/20 blur-3xl animate-blob" style={{ animationDelay: "2s" }} />
        <div className="absolute -bottom-24 left-1/3 h-72 w-72 rounded-full bg-primary/10 blur-3xl animate-blob" style={{ animationDelay: "4s" }} />
      </div>

      {/* Floating WhatsApp chat button */}
      <a
        href="https://wa.me/1234567890"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="absolute bottom-6 right-6 md:bottom-10 md:right-10 z-10 group"
      >
        <span className="absolute inset-0 rounded-full bg-primary/40 animate-ping" />
        <span className="relative flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-3 shadow-lg shadow-primary/30 transition-transform hover-scale">
          <MessageSquare className="h-5 w-5" />
          <span className="hidden sm:inline font-medium">Chat with us</span>
        </span>
      </a>

      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-10">
          <div className="space-y-4 max-w-3xl animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-balance animate-float">
              Premium Digital Products for{" "}
              <span className="text-gradient bg-[length:200%_auto] animate-gradient-x">Creative Professionals</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-[700px] mx-auto">
              Discover high-quality templates, design assets, and digital tools to elevate your projects.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: "150ms", animationFillMode: "backwards" }}>
            <Button asChild size="lg" className="gap-2 hover-scale">
              <Link to="/products">
                Browse Products <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="gap-2 hover-scale">
              <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
                <MessageSquare className="h-4 w-4" /> Contact via WhatsApp
              </a>
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
