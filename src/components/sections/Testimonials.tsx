import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";

export function Testimonials() {
    return (
        <section className="py-28 sm:py-36">
            <Container>
                <SectionHeading 
                    eyebrow="Experiências reais"
                    title="A experiência de quem já esteve aqui."
                    description="Relatos reais de clientes sobre sua experiência com a clínica."
                    align="center"
                />

                <div className="mt-16 grid gap-6 md:grid-cols-2">
                    <article className="rounded-4xl border border-black/10 bg-white/50 p-8 sm:p-10">
                        <p className="font-serif text-2xl leading-relaxed">
                            "Depoimento real do cliente será inserido aqui."
                        </p>

                        <p className="mt-8 text-sm text-black/50">
                            — Cliente autorizado
                        </p>
                    </article>

                    <article className="rounded-4xl border border-black/10 bg-white/50 p-8 sm:p-10">
                        <p className="font-serif text-2xl leading-relaxed">
                            "Outro depoimento real poderá ser inserido aqui."
                        </p>

                        <p className="mt-8 text-sm text-black/50">
                            — Cliente autorizado
                        </p>
                    </article>
                </div>
            </Container>
        </section>
    )
}