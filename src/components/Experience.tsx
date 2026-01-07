import { Briefcase } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    period: "May 2025 – July 2025",
    title: "Senior Software Engineer",
    company: "ValueMomentum",
    description: "Enhanced and fixed insurance portal features supporting producer engagement workflows.",
    highlights: ["Insurance Portal", "Producer Engagement"],
  },
  {
    period: "June 2024 – April 2025",
    title: "Technical Consultant",
    company: "Rite Software Solutions",
    description: "Implemented micro-frontend architecture for enterprise applications. Developed wizard-based workflows and brand-based theming using design tokens. Delivered UAT fixes and enhancements on schedule.",
    highlights: ["Micro-Frontend", "Design Tokens", "Enterprise Apps"],
  },
  {
    period: "July 2021 – February 2024",
    title: "Consultant",
    company: "Capgemini India Ltd",
    description: "Developed large-scale insurance portals using Guidewire Jutro and React.js. Designed configuration-driven UI components aligned with business workflows. Integrated REST APIs and managed data flow within Jutro portals.",
    highlights: ["Guidewire Jutro", "React.js", "REST APIs", "Insurance Portals"],
  },
  {
    period: "July 2019 – May 2021",
    title: "Senior Software Developer",
    company: "Telebu Communications",
    description: "Developed Angular applications and WebRTC-enabled front-end features. Built connection statistics component displaying live session data for join.telebu.com.",
    highlights: ["Angular", "WebRTC", "Real-time Stats"],
  },
];

const Experience = () => {
  return (
    <section className="py-24 relative bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="mb-16">
            <span className="font-mono text-primary text-sm tracking-wider uppercase">Career</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-2">
              Work <span className="text-gradient">Experience</span>
            </h2>
          </div>
          
          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent" />
            
            {experiences.map((exp, index) => (
              <div 
                key={index} 
                className="relative pl-8 md:pl-20 pb-16 last:pb-0 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-8 -translate-x-1/2 w-4 h-4 rounded-full bg-background border-2 border-primary glow-sm" />
                
                {/* Content card */}
                <Card className="border-gradient bg-card hover:glow-sm transition-all duration-500">
                  <CardContent className="p-6 md:p-8">
                    {/* Period */}
                    <span className="font-mono text-xs text-primary tracking-wider">{exp.period}</span>
                    
                    {/* Title & Company */}
                    <h3 className="text-xl md:text-2xl font-bold text-foreground mt-2">{exp.title}</h3>
                    <div className="flex items-center gap-2 mt-1 mb-4">
                      <Briefcase className="w-4 h-4 text-muted-foreground" />
                      <span className="text-muted-foreground">{exp.company}</span>
                    </div>
                    
                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed mb-4">{exp.description}</p>
                    
                    {/* Highlights */}
                    <div className="flex flex-wrap gap-2">
                      {exp.highlights.map((highlight) => (
                        <Badge 
                          key={highlight}
                          variant="outline"
                          className="font-mono text-xs bg-primary/10 text-primary border-primary/20"
                        >
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
