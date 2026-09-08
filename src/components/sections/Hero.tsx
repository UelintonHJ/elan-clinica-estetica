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
            className="relative overflow-hidden pt-28 sm:pt-32 lg:pt-24"
        >
            <div aria-hidden="true" className="pointer-events-none absolute -right-32 top-24 h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(154,128,104,0.18),transparent_68%)] blur-2xl" />

            <Container className="relative flex min-h-[calc(100vh-6rem)] items-center py-12 sm:py-16 lg:py-20">
                <div className="grid w-full items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 xl:gap-20">
                    <div className="max-w-xl">
                        <span className="mb-5 block text-[11px] font-medium uppercase tracking-[0.28em] text-(--accent-dark) sm:text-xs">
                            Cuidado estético com elegância
                        </span>

                        <Reveal>
                            <h1 className="max-w-2xl font-serif text-[clamp(2.75rem,7vw,5.5rem)] leading-[0.96] tracking-[-0.035em]">
                                Realce sua beleza com cuidado, precisão e naturalidade.
                            </h1>
                        </Reveal>

                        <Reveal delay={0.08}>
                            <p className="mt-7 max-w-lg text-base leading-7 text-(--muted) sm:text-lg sm:leading-8">
                                Tratamentos estéticos personalizados para quem busca
                                cuidar da aparência com uma abordagem individualizada
                                e acompanhamento profissional.
                            </p>
                        </Reveal>

                        <p className="mt-4 max-w-lg text-sm leading-6 text-(--muted-light)">
                            Cada pessoa tem necessidades, características e
                            objetivos diferentes. Por isso, o primeiro passo é
                            entender você e orientar sobre as possibilidades mais
                            adequadas.
                        </p>

                        <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                            <Button
                                href={whatsappUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Conversar no WhatsApp
                                <ArrowUpRight size={17} className="ml-2 transition-transform duration-300 group-hover:-translate-y-0.5" />
                            </Button>

                            <Button
                                href="#clinica"
                                variant="secondary"
                            >
                                Conhecer a clínica
                            </Button>
                        </div>

                        <div className="mt-7 flex items-center gap-3 text-xs text-(--muted-light)">
                            <span className="h-px w-8 bg-(--border-strong)" />
                            Atendimento personalizado · Porto Alegre
                        </div>
                    </div>

                    <div className="relative">
                        <div className="group relative aspect-4/5 overflow-hidden rounded-xl shadow-(--shadow-image)">
                            <Image
                                src="/images/hero-clinic.jpg"
                                alt="Ambiente elegante de uma clínica de estética"
                                fill
                                priority
                                sizes="(max-width: 1024px) 100vw, 55vw"
                                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                            />

                            <div aria-hidden="true" className="absolute inset-0 bg-linear-to-t from-black/10 via-transparent to-transparent" />
                        </div>

                        <div className="absolute -bottom-6 -left-5 hidden max-w-60 rounded-lg border border-white/60 bg-white/80 p-5 shadow-(--shadow-soft) backdrop-blur-md sm:block">
                            <p className="font-serif text-lg leading-tight">
                                Cuidado começa com escuta.
                            </p>

                            <p className="mt-2 text-xs leading-5 text-(--muted)">
                                Uma experiência pensada para compreender você
                                antes de qualquer decisão.
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}