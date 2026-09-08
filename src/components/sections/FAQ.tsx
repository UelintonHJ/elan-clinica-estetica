"use client";

import { Plus } from "lucide-react";
import { useState } from "react";

import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";

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
                    <SectionHeading 
                        eyebrow="Dúvidas"
                        title="Antes de conversar, algumas respostas."
                        description="Informações claras ajudam você a decidir com mais tranquilidade."
                    />

                    <div className="border-t border-black/10">
                        {faqs.map((faq, index) => {
                            const isOpen = active === index;

                            return (
                                <div
                                    key={faq.question}
                                    className="border-b border-black/10"
                                >
                                    <button
                                        type="button"
                                        aria-expanded={isOpen}
                                        onClick={() => 
                                            setActive(isOpen ? null : index)
                                        }
                                        className="flex w-full items-center justify-between gap-6 py-6 text-left "
                                    >
                                        <span className="text-sm font-medium sm:text-base">
                                            {faq.question}
                                        </span>

                                        <Plus 
                                            size={20}
                                            className={`shrink-0 transition-transform duration-300 ${
                                                isOpen ? "rotate-45" : ""
                                            }`}
                                        />
                                    </button>

                                    <div
                                        className={`grid transition-[grid-template-rows] duration-300 ${
                                            isOpen
                                                ? "grid-rows-[1fr]"
                                                : "grid-rows-[0fr]"
                                        }`}
                                    >
                                        <div className="overflow-hidden">
                                            <p className="pb-6 pr-10 text-sm leading-6 text-black/55">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </Container>
        </section>
    );
}