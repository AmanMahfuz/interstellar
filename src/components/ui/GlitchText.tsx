'use client';

import { cn } from '@/components/ui/Button';

interface GlitchTextProps {
    text: string;
    className?: string;
    as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
    active?: boolean;
}

export default function GlitchText({ text, className, as: Component = 'span', active = false }: GlitchTextProps) {
    return (
        <Component className={cn("relative inline-block group", className)}>
            <span className="relative z-10">{text}</span>
            <span className={cn(
                "absolute top-0 left-0 -z-10 w-full h-full text-accent-1 animate-glitch-1 opacity-0",
                active ? "opacity-70" : "group-hover:opacity-70"
            )}>
                {text}
            </span>
            <span className={cn(
                "absolute top-0 left-0 -z-10 w-full h-full text-accent-2 animate-glitch-2 opacity-0",
                active ? "opacity-70" : "group-hover:opacity-70"
            )}>
                {text}
            </span>
        </Component>
    );
}

/* 
  Note: Add these keyframes to globals.css or tailwind config for full effect.
  For now simulating via a style tag injected or assuming simple offset/skew.
*/
