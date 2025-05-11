import Hero from "../components/sections/Hero";
import Navbar from "../components/ui/Navbar";
import About from "../components/About";
import Projects from "../components/sections/Projects";
import Contact from "../components/Contact";


export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}
