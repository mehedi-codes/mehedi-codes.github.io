import Contact from "@/components/Intro/Contact";
import Hero from "@/components/Intro/Hero";
import Skills from "@/components/Intro/Skills";
import Shortbout from "@/components/Intro/Shortbout";
import Projects from "@/components/Intro/Projects";
const page = () => {
  return (
    <section className="relative">
      <Hero />
      <Shortbout />
      <Skills />
      <Projects/>
      <Contact />
    </section>
  );
};

export default page;
