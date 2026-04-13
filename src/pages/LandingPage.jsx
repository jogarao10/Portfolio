import Header from "../component/landing/Header";
import Hero from "../component/landing/Hero";
import About from "../component/landing/About";
import Experience from "../component/landing/Experience";
import Services from "../component/landing/Services";
import Skills from "../component/landing/Skills";
import Projects from "../component/landing/Projects";
import Contact from "../component/landing/Contact";

function LandingPage() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Services />
      <Contact />
    </>
  );
}

export default LandingPage;
