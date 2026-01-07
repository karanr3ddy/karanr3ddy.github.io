import { Award, GraduationCap } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const Education = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="mb-16">
            <span className="font-mono text-primary text-sm tracking-wider uppercase">Background</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-2">
              Education & <span className="text-gradient">Certifications</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Education */}
            <Card className="border-gradient bg-card hover:glow-sm transition-all duration-500 animate-fade-in-up">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-primary/10 border border-primary/20">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">Education</h3>
                    <span className="text-sm text-muted-foreground">Academic Background</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="border-l-2 border-primary/30 pl-6">
                  <h4 className="text-lg font-semibold text-foreground">B.Tech / B.E.</h4>
                  <p className="text-muted-foreground mt-1">Vaagdevi Engineering College, Warangal</p>
                </div>
              </CardContent>
            </Card>
            
            {/* Certification */}
            <Card className="border-gradient bg-card hover:glow-sm transition-all duration-500 animate-fade-in-up" style={{ animationDelay: '0.15s' }}>
              <CardHeader className="pb-4">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-primary/10 border border-primary/20">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">Certification</h3>
                    <span className="text-sm text-muted-foreground">Professional Credentials</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="border-l-2 border-primary/30 pl-6">
                  <h4 className="text-lg font-semibold text-foreground">InsuranceSuite 10.0 Developer</h4>
                  <p className="text-muted-foreground mt-1">Guidewire Certified Professional</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
