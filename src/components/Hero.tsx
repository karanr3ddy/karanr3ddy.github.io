import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid opacity-50" />
      
      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
      
      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Status badge */}
          <Badge variant="outline" className="px-4 py-2 mb-8 animate-fade-in border-primary/30 bg-primary/5">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse mr-2" />
            <span className="font-mono text-primary">Available for opportunities</span>
          </Badge>
          
          {/* Name */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <span className="text-foreground">Karan</span>
            <span className="text-gradient"> Punnam</span>
          </h1>
          
          {/* Title */}
          <p className="text-xl md:text-2xl text-muted-foreground font-medium mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Senior Software Engineer
          </p>
          
          {/* Summary */}
          <p className="text-lg text-muted-foreground/80 max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            5+ years delivering enterprise insurance portals. Specializing in 
            <span className="text-foreground"> Guidewire Jutro</span>, 
            <span className="text-foreground"> React</span>, and 
            <span className="text-foreground"> TypeScript</span>. 
            Expert in micro-frontend architecture and design token systems.
          </p>
          
          {/* Contact info */}
          <div className="flex flex-wrap items-center justify-center gap-6 mb-12 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <a href="tel:9652396581" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
              <Phone className="w-4 h-4" />
              <span className="font-mono text-sm">9652396581</span>
            </a>
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">Warangal, Telangana</span>
            </div>
          </div>
          
          {/* Social links */}
          <div className="flex items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            <Button 
              variant="outline" 
              size="icon"
              className="h-12 w-12 rounded-xl hover:border-primary/50 hover:glow-sm"
              asChild
            >
              <a href="https://www.linkedin.com/in/karanr3ddy" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5" />
              </a>
            </Button>
            <Button 
              variant="outline" 
              size="icon"
              className="h-12 w-12 rounded-xl hover:border-primary/50 hover:glow-sm"
              asChild
            >
              <a href="https://github.com/karanr3ddy" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5" />
              </a>
            </Button>
            <Button 
              variant="outline" 
              size="icon"
              className="h-12 w-12 rounded-xl hover:border-primary/50 hover:glow-sm"
              asChild
            >
              <a href="mailto:contact@karanpunnam.dev">
                <Mail className="w-5 h-5" />
              </a>
            </Button>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
            <div className="w-1 h-2 rounded-full bg-primary animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
