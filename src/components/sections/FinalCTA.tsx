import { Container } from "../ui/Container";
import { createWhatsAppUrl } from "@/lib/whatsapp";

export function FinalCTA() {
    const whatsappUrl = createWhatsAppUrl(
        "Olá! Gostaria de conversar com a equipe sobre um atendimento."
    );

    return (
        <section id="contato" className="pb-12">
            <Container>
                <div className="relative overflow-hidden rounded-[2.5rem] bg-[#171717] px-7 py-20 text-center text-white sm:px-12 sm:py-28">
                    <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-[#9a8068]/20 blur-3xl" />

                    <div className="relative mx-auto max-w-2xl">
                        <p className="font-serif text-2xl text-white/80">
                            Élan Clínica Estética
                        </p>

                        <h2 className="mt-5 font-serif text-4xl leading-tight sm:text-6xl">
                            Seu próximo passo começa com uma conversa.
                        </h2>

                        <p className="mx-auto mt-6 max-w-lg text-sm leading-6 text-white/55 sm:text-base">
                            Conte-nos o que você gostaria de cuidar e converse
                            com nossa equipe sobre as possibilidades para você.
                        </p>

                        <a 
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-9 inline-flex min-h-12 items-center rounded-full bg-white px-7 text-sm font-medium text-black transition-transform duration-300 hover:-translate-y-0.5"
                        >
                            Conversar pelo WhatsApp
                        </a>

                        <p className="mt-5 text-xs text-white/35">
                            Responderemos assim que possível.
                        </p>
                    </div>
                </div>
            </Container>
        </section>
    );
}