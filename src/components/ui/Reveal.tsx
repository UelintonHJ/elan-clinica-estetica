"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

interface RevealProps {
    children: ReactNode;
    delay?: number;
    duration?: number;
    distance?: number;
    className?: string;
}

export function Reveal({
    children,
    delay = 0,
    duration = 0.75,
    distance = 18,
    className,
}: RevealProps) {
    const shouldReduceMotion = useReducedMotion();

    const initial = shouldReduceMotion
        ? {
            opacity: 0,
            y: 0,
        }
        : {
            opacity: 0,
            y: distance,
        };

    const animate = {
        opacity: 1,
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