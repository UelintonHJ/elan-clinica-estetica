"use client";

import { motion } from "motion/react";
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
    duration = 0.7,
    distance = 20,
    className,
}: RevealProps) {
    return (
        <motion.div
            initial={{
                opacity: 0,
                y: distance,
            }}
            whileInView={{
                opacity: 1,
                y: 0,
            }}
            viewport={{
                once: true,
                amount: 0.15,
            }}
            transition={{
                duration,
                delay,
                ease: [0.22, 1, 0.36, 1],
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}