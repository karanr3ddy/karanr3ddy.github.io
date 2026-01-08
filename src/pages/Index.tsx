import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Footer from "@/components/Footer";
import ThreeBackground from "@/components/ThreeBackground";

const Index = () => {
  return (
    <>
      <ThreeBackground />
      <main className="min-h-screen bg-background/80" role="main">
      <header>
        <Hero />
      </header>
      <section id="skills" aria-labelledby="skills-heading">
        <Skills />
      </section>
      <section id="experience" aria-labelledby="experience-heading">
        <Experience />
      </section>
      <section id="education" aria-labelledby="education-heading">
        <Education />
      </section>
      <Footer />
      </main>
    </>
  );
};

export default Index;
