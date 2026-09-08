interface SectionHeadingProps {
    eyebrow: string;
    title: string;
    description?: string;
    align?: "left" | "center";
}

export function SectionHeading({
    eyebrow,
    title,
    description,
    align = "left",
}: SectionHeadingProps) {
    const centered =
        align === "center";

    return (
        <div className={`max-w-2xl ${centered ? "mx-auto text-center" : ""}`}>
            {eyebrow && (
                <span className="text-[11px] font-medium uppercase tracking-[0.28em] text-(--accent-dark)">
                    {eyebrow}
                </span>
            )}

            <h2 className="mt-4 font-serif text-[clamp(2.25rem,4vw,4rem)] leading-none tracking-tight">
                {title}
            </h2>

            {description && (
                <p className="mt-5 max-w-xl text-base leading-7 text-(--muted) sm:text-lg sm:leading-8">
                    {description}
                </p>
            )}
        </div>
    );
}