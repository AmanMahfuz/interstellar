'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, ReactNode } from 'react';

interface FlyThroughSectionProps {
    children: ReactNode;
    className?: string;
    zoomIntensity?: number;
    id?: string;
    variant?: 'fly' | 'absorb';
}

export default function FlyThroughSection({ children, className, zoomIntensity = 1, id, variant = 'absorb' }: FlyThroughSectionProps) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    // Variant 'fly': 0.5 -> 1 -> 4 (Zoom Past)
    // Variant 'absorb': 0.6 -> 1 -> 0 (Sucked In)

    const isAbsorb = variant === 'absorb';

    const scale = useTransform(
        scrollYProgress,
        [0, 0.4, 0.6, 1],
        isAbsorb ? [0.6, 1, 1, 0] : [0.5, 1, 1, 4 * zoomIntensity]
    );

    const opacity = useTransform(
        scrollYProgress,
        [0.2, 0.4, 0.6, 0.9],
        [0, 1, 1, 0]
    );

    const rotate = useTransform(
        scrollYProgress,
        [0.6, 1],
        isAbsorb ? [0, 90] : [0, 0]
    );

    const blur = useTransform(scrollYProgress, [0.7, 1], ["blur(0px)", "blur(10px)"]);
    const z = useTransform(scrollYProgress, [0.7, 1], [0, 500]); // Fake Z-index push?

    return (
        <div ref={ref} id={id} className="min-h-[150vh] flex items-center justify-center perspective-container">
            <motion.div
                style={{ scale, opacity, filter: blur, rotate }}
                className={className}
            >
                {children}
            </motion.div>
        </div>
    );
}
