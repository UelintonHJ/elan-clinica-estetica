"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

interface RevealProps {
    children: ReactNode;
    delay?: number;
    duration?: number;
    distance?: number;
    className?: string;
    trigger?: "view" | "mount";
    fade?: boolean;
}

export function Reveal({
    children,
    delay = 0,
    duration = 0.8,
    distance = 20,
    className,
    trigger = "view",
    fade = true,
}: RevealProps) {
    const shouldReduceMotion = useReducedMotion();

    const initial = shouldReduceMotion
        ? false
        : {
            opacity: fade ? 0 : 1,
            visibility: fade ? "visible" : "hidden",
            y: distance,
        };

    const animate = {
        opacity: 1,
        visibility: "visible",
        y: 0,
    };

    const transition = shouldReduceMotion
        ? {
            duration: 0,
            delay: 0,
        }
        : {
            duration,
            delay,
            ease: [0.22, 1, 0.36, 1] as const,
        };

    if (trigger === "mount") {
        return (
            <motion.div
                initial={initial}
                animate={animate}
                transition={transition}
                className={className}
            >
                {children}
            </motion.div>
        )
    }

    return (
        <motion.div
            initial={initial}
            whileInView={animate}
            viewport={{
                once: true,
                amount: 0.15,
            }}
            transition={transition}
            className={className}
        >
            {children}
        </motion.div>
    );
}