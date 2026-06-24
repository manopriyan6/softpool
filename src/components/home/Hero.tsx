
import { ArrowRight, Download, MessageSquare, Shield } from "lucide-react";
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl pt-12">
            {[
              { Icon: Download, title: "Instant Downloads", desc: "Get access to your purchases immediately after checkout." },
              { Icon: Shield, title: "Secure Payment", desc: "Your transactions are protected with industry-standard encryption." },
              { Icon: MessageSquare, title: "24/7 Support", desc: "Get help via WhatsApp anytime you need assistance." },
            ].map(({ Icon, title, desc }, i) => (
              <div
                key={title}
                className="bg-secondary/50 p-6 rounded-lg border border-border/40 animate-fade-in hover-scale transition-colors hover:border-primary/40"
                style={{ animationDelay: `${300 + i * 120}ms`, animationFillMode: "backwards" }}
              >
                <Icon className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-lg font-medium mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
