import {
    Heart,
    Leaf,
    MessageCircle,
    ShieldCheck,
} from "lucide-react";

import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";

const benefits = [
    {
        number: "01",
        icon: MessageCircle,
        title: "Atendimento personalizado",
        description: 
            "Cada atendimento começa entendendo suas necessidades, expectativas e objetivos.",
    },
    {
        number: "02",
        icon: ShieldCheck,
        title: "Orientação profissional",
        description:
            "Informações claras para compreender as possibilidades e tomar uma decisão consciente."
    },
    {
        number: "03",
        icon: Heart,
        title: "Experiência acolhedora",
        description:
            "Um ambiente pensado para proporcionar conforto, privacidade e tranquilidade.",
    },
    {
        number: "04",
        icon: Leaf,
        title: "Naturalidade com princípio",
        description:
            "Uma abordagem que respeita suas características e aquilo que você busca.",
    },
];

export function Benefits() {
    return (
        <section>
            <Container>
                <SectionHeading 
                    eyebrow="Nossa abordagem"
                    title="Um cuidado pensado para você."
                    description="Mais do que escolher um procedimento, trata-se de encontrar uma abordagem que faça sentido para suas necessidades."
                />

                <div className="mt-16 grid gap-px overflow-hidden rounded-4xl border border-black/10 bg-black/10 md:grid-cols-2">
                    {benefits.map((benefit) => {
                        const Icon = benefit.icon;

                        return (
                            <article
                                key={benefit.number}
                                className="group relative overflow-hidden bg-(--background) p-7 transition-[background-color] duration-500 hover:bg-(--surface) sm:p-10"
                            >
                                <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-(--accent) transition-transform duration-500 ease-out group-hover:scale-x-100" />
                                <div className="flex items-start justify-between">
                                    <span className="text-xs font-medium tracking-[0.2em] text-black/35">
                                        {benefit.number}
                                    </span>

                                    <Icon 
                                        size={22}
                                        strokeWidth={1.5}
                                        className="text-(--accent-dark) transition-transform duration-300 group-hover:-translate-y-1"
                                    />
                                </div>

                                <h3 className="mt-16 font-serif text-2xl leading-[1.1] tracking-wider sm:text-3xl">
                                    {benefit.title}
                                </h3>

                                <p className="mt-4 max-w-md text-sm leading-6 text-black/55">
                                    {benefit.description}
                                </p>
                            </article>
                        );
                    })}
                </div>
            </Container>
        </section>
    );
}