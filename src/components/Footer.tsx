import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

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
            <div className="flex items-center gap-3">
              <Button variant="outline" size="icon" className="rounded-xl" asChild>
                <a href="tel:9652396581">
                  <Phone className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="outline" size="icon" className="rounded-xl" asChild>
                <a href="https://www.linkedin.com/in/karanr3ddy" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="outline" size="icon" className="rounded-xl" asChild>
                <a href="https://github.com/karanr3ddy" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="outline" size="icon" className="rounded-xl" asChild>
                <a href="mailto:contact@karanpunnam.dev">
                  <Mail className="w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>
          
          {/* Copyright */}
          <Separator className="my-8" />
          <div className="text-center">
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
