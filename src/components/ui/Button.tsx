import { a } from "motion/react-client";
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
        primary:
            "bg-(--foreground) text-white hover:bg-[#2b2b2b]",
        secondary:
            "border border-(--border) bg-transparent text-(--foreground) hover:bg-black/[0.04]",
    };

    return (
        <a className={`
            inline-flex
            min-h-12
            items-center
            justify-center
            rounded-full
            px-6
            text-sm
            font-medium
            transition-all
            duration-300
            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-(--foreground)
            focus-visible:ring-offset-2
            ${variants[variant]}
            ${className}
        `}
            {...props}
        >
            {children}
        </a>
    );
}