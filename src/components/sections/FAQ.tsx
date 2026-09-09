"use client";

import { AnimatePresence, motion } from "motion/react";
import { Plus } from "lucide-react";
import { useState } from "react";

import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";

const faqs = [
    {
        question: "Preciso saber qual procedimento quero fazer?",
        answer:
            "Não necessariamente. Você pode explicar o que gostaria de cuidar e conversar com nossa equipe sobre os próximos passos.",
    },
    {
        question: "Como funciona o primeiro atendimento?",
        answer:
            "Insira aqui a descrição real de como funciona o primeiro atendimento da clínica.",
    },
    {
        question: "Vocês fazem avaliação antes do procedimento?",
        answer:
            "Insira aqui a política real da clínica sobre avaliação."
    },
    {
        question: "Quais procedimentos estão disponíveis?",
        answer:
            "Liste somente procedimentos realmente oferecidos pela clínica.",
    },
    {
        question: "Qual é o valor?",
        answer:
            "Explique aqui a política real de preços, avaliação e orçamento.",
    },
    {
        question: "Como posso agendar?",
        answer:
            "Você pode entrar em contato pelo WhatsApp e seguir o processo real de agendamento.",
    },
];

export function FAQ() {
    const [active, setActive] = useState<number | null>(null);

    return (
        <section id="faq" className="py-28 sm:py-36">
            <Container>
                <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr]">
                    <Reveal>
                        <SectionHeading
                            eyebrow="Dúvidas"
                            title="Antes de conversar, algumas respostas."
                            description="Informações claras ajudam você a decidir com mais tranquilidade."
                        />
                    </Reveal>

                    <div className="border-t border-black/10">
                        {faqs.map((faq, index) => {
                            const isOpen = active === index;
                            const answerId = `faq-answer-${index}`;

                            return (
                                <Reveal
                                    key={faq.question}
                                    delay={index * 0.04}
                                    distance={12}
                                >
                                    <div className="border-b border-black/10">
                                        <button
                                            type="button"
                                            aria-expanded={isOpen}
                                            aria-controls={answerId}
                                            onClick={() =>
                                                setActive(isOpen ? null : index)
                                            }
                                            className="group flex w-full items-center justify-between gap-6 py-6 text-left focus-visible:outline-none focus-visible:ring-(--foreground) focus-visible:ring-offset-4"
                                        >
                                            <span className="text-sm font-medium sm:text-base">
                                                {faq.question}
                                            </span>

                                            <motion.span
                                                animate={{
                                                    rotate: isOpen ? 45 : 0,
                                                }}
                                                transition={{
                                                    duration: 0.3,
                                                    ease: [0.22, 1, 0.36, 1],
                                                }}
                                                className="flex shrink-0"
                                                aria-hidden="true"
                                            >
                                                <Plus size={20} />
                                            </motion.span>
                                        </button>

                                        <AnimatePresence initial={false}>
                                            {isOpen && (
                                                <motion.div
                                                    id={answerId}
                                                    key={answerId}
                                                    initial={{
                                                        height: 0,
                                                        opacity: 0,
                                                    }}
                                                    animate={{
                                                        height: "auto",
                                                        opacity: 1,
                                                    }}
                                                    exit={{
                                                        height: 0,
                                                        opacity: 0,
                                                    }}
                                                    transition={{
                                                        height: {
                                                            duration: 0.35,
                                                            ease: [
                                                                0.22,
                                                                1,
                                                                0.36,
                                                                1,
                                                            ],
                                                        },
                                                        opacity: {
                                                            duration: 0.2,
                                                        },
                                                    }}
                                                    className="overflow-hidden"
                                                >
                                                    <p className="pb-6 pr-10 text-sm leading-6 text-black/55">
                                                        {faq.answer}
                                                    </p>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                </Reveal>
                            );
                        })}
                    </div>
                </div>
            </Container>
        </section>
    );
}