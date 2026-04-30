import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Services } from "../components/Services";
import { Expertise } from "../components/Expertise";
import { Gallery } from "../components/Gallery";
import { Contact } from "../components/Contact";
import { PaymentLogos } from "../components/PaymentLogos";

export function Home() {
  return (
    <div className="relative">
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Expertise />
      <Contact />
      <section
        aria-hidden
        className="border-t border-neutral-200 bg-neutral-50 py-10 md:py-12"
      >
        <PaymentLogos />
      </section>
    </div>
  );
}
