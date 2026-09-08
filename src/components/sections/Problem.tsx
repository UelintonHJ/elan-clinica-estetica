import Image from "next/image";

import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { Button } from "../ui/Button";
import { createWhatsAppUrl } from "@/lib/whatsapp";

export function Problem() {
    const whatsappUrl = createWhatsAppUrl(
        "Olá! Gostaria de conversar sobre minhas necessidades."
    );

    return (
        <section className="py-28 sm:py-36">
            <Container>
                <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-24">
                    <div className="relative aspect-4/5 overflow-hidden rounded-4xl">
                        <Image 
                            src="/images/problem.jpg"
                            alt="Detalhe natural de uma pessoa durante um momento de autocuidado"
                            fill
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            className="object-cover"
                        />
                    </div>

                    <div>
                        <SectionHeading 
                            eyebrow="Um cuidado diferente"
                            title="Sua rotina mudou. Seu cuidado também pode mudar."
                            description="Talvez você não esteja procurando transformar que você é, apenas queira se sentir mais confortável com aquilo que vê no espelho."
                        />

                        <div className="mt-8 space-y-5 text-sm leading-7 text-black/55 sm:text-base">
                            <p>
                                A correria do dia a dia, mudanças na pele e diferentes
                                fases da vida podem fazer você perceber características
                                que gostaria de cuidar com mais atenção.
                            </p>

                            <p>
                                E encontrar um tratamento adequado não deveria significar
                                escolher algo apenas porque está na moda.
                            </p>

                            <p>
                                O caminho começa entendendo suas necessidades, suas 
                                expectativas e o que realmente faz sentido para você.
                            </p>
                        </div>

                        <div className="mt-9">
                            <Button
                                href={whatsappUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Quero conversar sobre minhas necessidades
                            </Button>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}