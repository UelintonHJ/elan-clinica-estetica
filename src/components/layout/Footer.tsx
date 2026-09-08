import { FaInstagram } from "react-icons/fa";

import { Container } from "../ui/Container";
import { siteConfig } from "@/config/site";

export function Footer() {
    return (
        <footer className="pb-8 pt-12">
            <Container>
                <div className="flex flex-col gap-8 border-t border-black/10 pt-8 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                        <p className="font-serif text-xl">
                            {siteConfig.name}
                        </p>

                        <p className="mt-2 text-sm text-black/45">
                            {siteConfig.city}
                        </p>
                    </div>

                    <div className="flex items-center gap-6">
                        <a 
                            href="#inicio"
                            className="text-sm text-black/50 hover:text-black"
                        >
                            Voltar ao início
                        </a>

                        <a 
                            href="#"
                            aria-label="Instagram"
                            className="text-black/50 hover:text-black"
                        >
                            <FaInstagram size={18} />
                        </a>
                    </div>
                </div>

                <p className="mt-8 text-xs text-black/35">
                    © {new Date().getFullYear()} {siteConfig.name}. Todos os direitos reservados.
                </p>
            </Container>
        </footer>
    );
}