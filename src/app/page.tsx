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

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Problem />
        <Benefits />
        <Process />
        <Differentials />
        <Testimonials />
        <Offer />
        <FAQ />
        <FinalCTA />
      </main>

      <Footer />
    </>
  );
}
