import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Services } from "../components/Services";
import { Expertise } from "../components/Expertise";
import { Gallery } from "../components/Gallery";
import { Contact } from "../components/Contact";

export function Home() {
  return (
    <div className="relative">
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Expertise />
      <Contact />
    </div>
  );
}
