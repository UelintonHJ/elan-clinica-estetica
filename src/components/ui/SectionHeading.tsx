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
    const alignment = 
        align === "center"
            ? "mx-auto text-center"
            : "text-left";

    return (
        <div className={`max-w-2xl ${alignment}`}>
            <span className="mb-4 block text-xs font-medium uppercase tracking-[0.25em] text-(--accent-dark)">
                {eyebrow}
            </span>

            <h2 className="font-serif text-4xl leading-[1.05] tracking-tight text-(--foreground) sm:text-5xl lg:text-6xl">
                {title}
            </h2>

            {description && (
                <p className="mt-6 max-w-xl text-base leading-7 text-(--muted) sm:text-lg">
                    {description}
                </p>
            )}
        </div>
    );
}