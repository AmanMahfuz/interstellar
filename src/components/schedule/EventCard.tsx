import { Calendar, Clock, MapPin } from 'lucide-react';
import { cn } from '@/components/ui/Button';

interface EventCardProps {
    title: string;
    time: string;
    venue: string;
    category: string;
    description: string;
    delay?: number;
}

export default function EventCard({ title, time, venue, category, description }: EventCardProps) {
    return (
        <div className="group relative p-6 rounded-2xl bg-surface/50 border border-white/5 hover:border-accent-1/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-accent-1/10">
            <div className="absolute inset-0 bg-gradient-to-br from-accent-1/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />

            <div className="relative z-10">
                <div className="flex justify-between items-start mb-4">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/5 text-accent-1 border border-white/10">
                        {category}
                    </span>
                    <span className="flex items-center text-xs text-gray-400 gap-1">
                        <Clock size={12} />
                        {time}
                    </span>
                </div>

                <h3 className="text-xl font-heading font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-accent-1 group-hover:to-accent-2 transition-all">
                    {title}
                </h3>

                <p className="text-sm text-gray-400 mb-4 line-clamp-2">
                    {description}
                </p>

                <div className="flex items-center text-xs text-gray-500 gap-1">
                    <MapPin size={12} />
                    {venue}
                </div>
            </div>
        </div>
    );
}
