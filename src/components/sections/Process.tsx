"use client";

import { motion } from "motion/react";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { Button } from "../ui/Button";
import { Reveal } from "../ui/Reveal";
import { createWhatsAppUrl } from "@/lib/whatsapp";

const steps = [
    {
        number: "01",
        title: "Converse conosco",
        description:
            "Conte pelo WhatsApp o que você gostaria de cuidar ou conhecer."
    },
    {
        number: "02",
        title: "Entendendo as possibilidades",
        description:
            "Nossa equipe poderá orientar você sobre os próximos passos e esclarecer suas dúvidas."
    },
    {
        number: "03",
        title: "Faça sua avaliação",
        description:
            "Aqui entra a descrição real de como funciona a avaliação clínica.",
    },
    {
        number: "04",
        title: "Defina seu plano",
        description:
            "A recomendação e o planejamento são definidos de acordo com o atendimento real da clínica.",
    },
];

export function Process() {
    const whatsappUrl = createWhatsAppUrl(
        "Olá! Gostaria de entender como funciona o atendimento."
    );

    return (
        <section className="py-28 sm:py-36">
            <Container>
                <Reveal>
                    <SectionHeading
                        eyebrow="Seu primeiro passo"
                        title="Seu primeiro passo é mais simples do que parece."
                        description="Converse com nossa equipe e entenda como podemos orientar você."
                    />
                </Reveal>

                <div className="relative mt-16">
                    <motion.div
                        aria-hidden="true"
                        className="absolute left-0 right-0 top-6 hidden h-px origin-left bg-black/10 lg:block"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{
                            once: true,
                            amount: 0.35,
                        }}
                        transition={{
                            duration: 1.1,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                    />

                    <div className="grid gap-10 lg:grid-cols-4">
                        {steps.map((step, index) => (
                            <Reveal
                                key={step.number}
                                delay={0.12 + index * 0.1}
                                distance={18}
                            >
                                <article key={step.number} className="relative">
                                    <motion.div
                                        className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-black/10 bg-(--background) text-xs font-medium"
                                        initial={{
                                            opacity: 0,
                                            scale: 0.8,
                                        }}
                                        whileInView={{
                                            opacity: 1,
                                            scale: 1,
                                        }}
                                        viewport={{
                                            once: true,
                                            amount: 0.35,
                                        }}
                                        transition={{
                                            duration: 0.5,
                                            delay: 0.18 + index * 0.1,
                                            ease: [0.22, 1, 0.36, 1],
                                        }}
                                    >
                                        {step.number}
                                    </motion.div>

                                    <h3 className="mt-7 font-serif text-2xl">
                                        {step.title}
                                    </h3>

                                    <p className="mt-3 text-sm leading-6 text-black/55">
                                        {step.description}
                                    </p>
                                </article>
                            </Reveal>
                        ))}
                    </div>
                </div>

                <Reveal delay={0.2} distance={12}>
                    <div className="mt-14">
                        <Button
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Começar conversa no WhatsApp
                        </Button>
                    </div>
                </Reveal>
            </Container>
        </section>
    );
}