import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { Benefits } from "@/components/sections/Benefits";
import { Process } from "@/components/sections/Process";
import { Differentials } from "@/components/sections/Differentials";
import { Testimonials } from "@/components/sections/Testimonials";
import { Offer } from "@/components/sections/Offer";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";

import { Reveal } from "@/components/ui/Reveal";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />

        <Reveal>
          <Problem />
        </Reveal>

        <Reveal delay={0.04}>
          <Benefits />
        </Reveal>

        <Reveal delay={0.04}>
          <Process />
        </Reveal>

        <Reveal delay={0.04}>
          <Differentials />
        </Reveal>

        <Reveal delay={0.04}>
          <Testimonials />
        </Reveal>

        <Reveal delay={0.04}>
          <Offer />
        </Reveal>

        <Reveal delay={0.04}>
          <FAQ />
        </Reveal>

        <Reveal delay={0.04}>
          <FinalCTA />
        </Reveal>
      </main>

      <Footer />
    </>
  );
}
