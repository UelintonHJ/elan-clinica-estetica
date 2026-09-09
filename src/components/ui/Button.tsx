import type { AnchorHTMLAttributes } from "react";

interface ButtonProps
    extends AnchorHTMLAttributes<HTMLAnchorElement> {
    variant?: "primary" | "secondary";
}

export function Button({
    variant = "primary",
    className = "",
    children,
    ...props
}: ButtonProps) {
    const variants = {
        primary: `
            bg-(--foreground) 
            text-white
            shadow-[0_8px_24px_rgba(33,31,28,0.10)]
            hover:-translate-y-0.5 
            hover:bg-[#2b2b2b]
            hover:shadow-[0_14px_32px_rgba(33,31,28,0.14)]
        `,

        secondary: `
            border 
            border-(--border) 
            bg-transparent 
            text-(--foreground) 
            hover:-translate-y-0.5
            hover:border-(--border-strong)
            hover:bg-black/[0.035]
            hover:shadow-[0_10px_24px_rgba(33,31,28,0.05)]
        `,
    };

    return (
        <a
            className={`
                group
                inline-flex
                min-h-12
                items-center
                justify-center
                rounded-(--radius-pill)
                px-6
                text-sm
                font-medium
                tracking-[-0.01em]

                transition-[transform,background-color,border-color,box-shadow]
                duration-(--duration-base)
                ease-out

                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-(--accent)
                focus-visible:ring-offset-2
                focus-visible:ring-offset-(--background)

                active:translate-0
                active:scale-[0.98]

                ${variants[variant]}
                ${className}
            `}
            {...props}
        >
            {children}
        </a>
    );
}