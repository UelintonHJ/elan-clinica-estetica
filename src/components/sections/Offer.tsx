import { ArrowUpRight } from "lucide-react";

import { Container } from "../ui/Container";
import { createWhatsAppUrl } from "@/lib/whatsapp";

export function Offer() {
    const whatsappUrl = createWhatsAppUrl(
        "Olá! Gostaria de conversar com a equipe sobre um atendimento."
    );

    return (
        <section className="py-28 sm:py-36">
            <Container>
                <div className="relative overflow-hidden rounded-[2.5rem] bg-[#e8e0d6] px-7 py-16 text-center sm:px-12 sm:py-24">
                    <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-white/30 blur-3xl" />

                    <div className="relative mx-auto max-w-2xl">
                        <span className="text-xs font-medium uppercase tracking-[0.3em] text-black/45">
                            Primeiro passo
                        </span>

                        <h2 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl">
                            Vamos conversar sobre o que faz sentido para você?
                        </h2>

                        <p className="mx-auto mt-6 max-w-lg text-sm leading-6 text-black/55 sm:text-base">
                            Antes de escolher um procedimento, entenda as possibilidades
                            disponíveis para o seu caso.
                        </p>

                        <a 
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-9 inline-flex min-h-12 items-center rounded-full bg-[#171717] px-7 text-sm font-medium text-white transition-transform duration-300 hover:-translate-y-0.5"
                        >
                            Quero falar com a clínica
                            <ArrowUpRight size={17} className="ml-2" />
                        </a>
                    </div>
                </div>
            </Container>
        </section>
    )
}