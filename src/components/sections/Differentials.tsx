import Image from "next/image";

import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { title } from "process";

const differentials = [
    {
        title: "[Diferencial real 01]",
        description:
            "Substitua este conteúdo por uma informação verdadeira sobre a clínica.",
    },
    {
        title: "[Diferencial real 02]",
        description:
            "Formação, experiência, tecnologia ou outro diferencial verificável.",
    },
    {
        title: "[Diferencial real 03]",
        description:
            "Explique de forma objetiva por que esse aspecto importa para o paciente."
    },
];

export function Differentials() {
    return (
        <section id="clinica" className="bg-[#1c1b19] py-28 text-white sm:py-36">
            <Container>
                <div className="grid items-end gap-12 lg:grid-cols-[0.8fr_1.2fr]">
                    <SectionHeading 
                        eyebrow="Nossa forma de cuidar"
                        title="Detalhes que fazem parte da nossa forma de cuidar."
                        description="Conheça os princípios que orientam a experiência na Élan Clínica Estética."
                    />

                    <div className="relative aspect-4/3 overflow-hidden rounded-4xl">
                        <Image 
                            src="/images/clinic.jpg"
                            alt="Interior da clínica de estética"
                            fill
                            sizes="(max-width: 1024px) 100vw, 60vw"
                            className="object-cover"
                        />
                    </div>
                </div>

                <div className="mt-16 grid gap-px overflow-hidden rounded-4xl border border-white/10 bg-white/10 md:grid-cols-3">
                    {differentials.map((item, index) => (
                        <article
                            key={item.title}
                            className="bg-[#22211f] p-8 sm:p-10"
                        >
                            <span className="text-xs text-white/35">
                                0{index + 1}
                            </span>

                            <h3 className="mt-14 font-serif text-2xl">
                                {item.title}
                            </h3>

                            <p className="mt-4 text-sm leading-6 text-white/55">
                                {item.description}
                            </p>
                        </article>
                    ))}
                </div>
            </Container>
        </section>
    );
}