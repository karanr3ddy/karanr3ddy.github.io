import { Badge } from "@/components/ui/badge";

const skills = [
  { name: "React.js", category: "Frontend" },
  { name: "TypeScript", category: "Language" },
  { name: "Angular2+", category: "Frontend" },
  { name: "JavaScript", category: "Language" },
  { name: "Node.js", category: "Backend" },
  { name: "Java", category: "Backend" },
  { name: "Tailwind CSS", category: "Styling" },
  { name: "SCSS", category: "Styling" },
  { name: "HTML5", category: "Core" },
  { name: "CSS3", category: "Styling" },
  { name: "RESTful APIs", category: "Integration" },
  { name: "Git", category: "Tools" },
  { name: "CI/CD", category: "DevOps" },
  { name: "Docker", category: "DevOps" },
  { name: "Docker Compose", category: "DevOps" },
];

const Skills = () => {
  return (
    <div className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="mb-16">
            <span className="font-mono text-primary text-sm tracking-wider uppercase">Expertise</span>
            <h2 id="skills-heading" className="text-4xl md:text-5xl font-bold mt-2">
              Skills & <span className="text-gradient">Technologies</span>
            </h2>
          </div>
          
          {/* Skills grid */}
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <Badge
                key={skill.name}
                variant="secondary"
                className="px-5 py-3 text-base font-medium rounded-xl border border-border hover:border-primary/50 hover:bg-secondary transition-all duration-300 cursor-default animate-fade-in-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {skill.name}
              </Badge>
            ))}
          </div>
          
          {/* Languages */}
          <div className="mt-16">
            <h3 className="text-lg font-semibold text-muted-foreground mb-6">Languages</h3>
            <div className="flex flex-wrap gap-4">
              {["Telugu", "Hindi", "English"].map((lang) => (
                <div key={lang} className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-foreground">{lang}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
