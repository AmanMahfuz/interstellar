import { ReactNode } from 'react';
import { cn } from '@/components/ui/Button';

interface HolographicCardProps {
    children: ReactNode;
    className?: string;
}

export default function HolographicCard({ children, className }: HolographicCardProps) {
    return (
        <div className={cn(
            "relative overflow-hidden rounded-xl border border-accent-1/20 bg-black/40 backdrop-blur-sm group",
            className
        )}>
            {/* Scanlines */}
            <div className="absolute inset-0 pointer-events-none z-0 opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))]" style={{ backgroundSize: "100% 4px, 6px 100%" }} />

            {/* Corner Brackets */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-accent-1/50 rounded-tl-xl" />
            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-accent-1/50 rounded-tr-xl" />
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-accent-1/50 rounded-bl-xl" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-accent-1/50 rounded-br-xl" />

            {/* Hover Glow */}
            <div className="absolute inset-0 bg-accent-1/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <div className="relative z-10 p-6">
                {children}
            </div>
        </div>
    );
}
