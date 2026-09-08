import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { createWhatsAppUrl } from "@/lib/whatsapp";
import { Reveal } from "@/components/ui/Reveal";

export function Hero() {
    const whatsappUrl = createWhatsAppUrl(
        "Olá! Vim pelo site e gostaria de conhecer os tratamentos."
    );

    return (
        <section
            id="inicio"
            className="relative min-h-screen overflow-hidden pt-24"
        >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_40%,rgba(154,128,104,0.16),transparent_30%)]" />

            <Container className="relative flex min-h-[calc(100vh-6rem)] items-center py-16">
                <div className="grid w-full items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
                    <div className="max-w-xl">
                        <span className="mb-6 block text-xs font-medium uppercase tracking-[0.3em] text-(--accent-dar)">
                            Cuidado estético com elegância
                        </span>

                        <Reveal>
                            <h1 className="font-serif text-5xl leading-[0.98] tracking-tight sm:text-6xl lg:text-7xl">
                                Realce sua beleza com cuidado, precisão e naturalidade.
                            </h1>
                        </Reveal>

                        <Reveal delay={0.1}>
                            <p className="mt-7 max-w-lg text-base leading-7 text-(--muted) sm:text-lg">
                                Tratamentos estéticos personalizados para quem busca
                                cuidar da aparência com uma abordagem individualizada
                                e acompanhamento profissional.
                            </p>
                        </Reveal>

                        <p className="mt-5 max-w-lg text-sm leading-6 text-black/550">
                            Cada pessoa tem necessidades, características e
                            objetivos diferentes. Por isso, o primeiro passo é
                            entender você e orientar sobre as possibilidades mais
                            adequadas.
                        </p>

                        <div className="mt-9 flex flex-wrap items-center gap-4">
                            <Button
                                href={whatsappUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Conversar no WhatsApp
                                <ArrowUpRight size={17} className="ml-2" />
                            </Button>

                            <Button
                                href="#clinica"
                                variant="secondary"
                            >
                                Conhececer a clínica
                            </Button>
                        </div>

                        <div className="mt-8 flex items-center gap-3 text-xs text-black/50">
                            <span className="h-px w-8 bg-black/20" />
                            Atendimento personalizado · Porto Alegre
                        </div>
                    </div>

                    <div className="relative">
                        <div className="relative aspect-4/4 overflow-hidden rounded-4xl">
                            <Image
                                src="/images/hero-clinic.jpg"
                                alt="Ambiente elegante de uma clínica de estética"
                                fill
                                priority
                                sizes="(max-width: 1024px) 100vw, 55vw"
                                className="object-cover"
                            />
                        </div>

                        <div className="absolute -bottom-5 -left-5 hidden max-w-55 rounded-2xl border border-white/60 bg-white/75 p-5 shadow-[0_20px_60px_rgba(0,0,0,0.08)] backdrop-blur-md sm:block">
                            <p className="font-serif text-lg">
                                Cuidado começa com escuta.
                            </p>

                            <p className="mt-2 text-xs leading-5 text-black/55">
                                Uma experiência pensada para compreender você
                                antes de qualquer decisão.
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}