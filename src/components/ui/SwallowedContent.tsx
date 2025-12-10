'use client';

import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { useRef, ReactNode } from 'react';

interface SwallowedContentProps {
    children: ReactNode;
    className?: string;
    intensity?: number;
}

export default function SwallowedContent({ children, className, intensity = 1 }: SwallowedContentProps) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    // As the element moves up the screen (progress 0 -> 1):
    // 0.5 is center screen.
    // We want it to be normal at center, and "swallowed" as it goes up (0.5 -> 1).

    // Scale: 1 -> 0 (sucked in)
    // But we want it to happen as it leaves the top.

    // Revised logic:
    // We want the content to stay stable while it's in the middle of the screen.
    // The effect should only trigger as it exits the TOP of the screen.

    // scrollYProgress 0 = Entering from bottom
    // scrollYProgress 1 = Exiting at top

    // Keep stable from 0 to 0.7
    // "Swallow" from 0.7 to 1.0

    const scale = useTransform(scrollYProgress, [0.7, 1], [1, 0.4]);
    const opacity = useTransform(scrollYProgress, [0.7, 0.95], [1, 0]);
    const rotate = useTransform(scrollYProgress, [0.7, 1], [0, 15 * intensity]); // Reduced rotation
    const y = useTransform(scrollYProgress, [0.7, 1], [0, -100]); // Slower up movement
    const filter = useTransform(scrollYProgress, [0.7, 1], ["blur(0px)", "blur(8px)"]);

    return (
        <motion.div
            ref={ref}
            style={{ scale, opacity, rotate, y, filter }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
