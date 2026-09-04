import Hero from "@/components/hero";
import Skills from "@/components/skills";
import About from "@/components/about";
import Contact from "@/components/contact";
import Projects from "@/components/projects";
const HomePage = () => {
  return (
    <main>
      <Hero />
      <Skills />
      <Projects/>
      <About />
      <Contact />
    </main>
  );
};

export default HomePage;
