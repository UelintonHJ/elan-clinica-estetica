"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

import { siteConfig } from "@/config/site";
import { Container } from "../ui/Container";
import { div } from "motion/react-client";

export function Header() {
    const [open, setOpen] = useState(false);

    return (
        <header className="absolute inset-x-0 top-0 z-50">
            <Container>
                <div className="flex h-24 items-center justify-between">
                    <nav className="hidden items-center gap-8 md:flex">
                        {siteConfig.navigation.slice(0, 2).map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                className="text-sm text-black/65 transition-colors hover:text-black"
                            >
                                {item.label}
                            </a>
                        ))}
                    </nav>

                    <a
                        href="#inicio"
                        className="absolute left-1/2 -translate-x-1/2 font-serif text-2xl tracking-tight"
                    >
                        {siteConfig.name}
                    </a>

                    <nav className="hidden items-center gap-8 md:flex">
                        <a 
                            href="#faq"
                            className="text-sm text-black/65 transition-colors hover:text-black"
                        >
                            FAQ
                        </a>

                        <a 
                            href="#contato"
                            className="text-sm font-medium text-black"
                        >
                            WhatsApp
                        </a>
                    </nav>

                    <button
                        type="button"
                        aria-label={open ? "Fechar menu" : "Abrir menu"}
                        aria-expanded={open}
                        onClick={() => setOpen((value) => !value)}
                        className="ml-auto rounded-full p-2 md:hidden"
                    >
                        {open ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </div>

                {open && (
                    <div className="border-t border-black/10 py-6 md:hidden">
                        <nav className="flex flex-col gap-5">
                            {siteConfig.navigation.map((item) => (
                                <a 
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => setOpen(false)}
                                    className="text-base"
                                >
                                    {item.label}
                                </a>
                            ))}

                            <a 
                                href="#contato"
                                onClick={() => setOpen(false)}
                                className="font-medium"
                            >
                                WhatsApp
                            </a>
                        </nav>
                    </div>
                )}
            </Container>
        </header>
    );
}