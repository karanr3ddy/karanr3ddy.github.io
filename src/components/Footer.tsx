import { Github, Linkedin, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-16 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Branding */}
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold">
                <span className="text-foreground">Karan</span>
                <span className="text-gradient"> Punnam</span>
              </h3>
              <p className="text-muted-foreground text-sm mt-1">Senior Software Engineer</p>
            </div>
            
            {/* Contact links */}
            <div className="flex items-center gap-4">
              <a 
                href="tel:9652396581"
                className="p-3 rounded-xl bg-secondary hover:bg-secondary/80 border border-border hover:border-primary/50 transition-all duration-300 group"
              >
                <Phone className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a 
                href="https://www.linkedin.com/in/karanr3ddy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-secondary hover:bg-secondary/80 border border-border hover:border-primary/50 transition-all duration-300 group"
              >
                <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a 
                href="https://github.com/karanr3ddy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-secondary hover:bg-secondary/80 border border-border hover:border-primary/50 transition-all duration-300 group"
              >
                <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a 
                href="mailto:contact@karanpunnam.dev"
                className="p-3 rounded-xl bg-secondary hover:bg-secondary/80 border border-border hover:border-primary/50 transition-all duration-300 group"
              >
                <Mail className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            </div>
          </div>
          
          {/* Copyright */}
          <div className="mt-12 pt-8 border-t border-border text-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Karan Punnam. Built with React & Tailwind CSS.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
