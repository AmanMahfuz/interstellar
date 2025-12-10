'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SectionWrapper from '@/components/ui/SectionWrapper';
import EventCard from '@/components/schedule/EventCard';
import { useState } from 'react';
import { Button, cn } from '@/components/ui/Button';

const categories = ['All', 'Technical', 'Cultural', 'Games', 'Workshops'];

const events = [
    { title: "Hackathon 2025", time: "10:00 AM", venue: "Main Auditorium", category: "Technical", description: "24-hour coding marathon." },
    { title: "Robo War", time: "11:00 AM", venue: "Tech Park", category: "Technical", description: "Battle of the bots." },
    { title: "Vibe Night", time: "06:00 PM", venue: "Open Stage", category: "Cultural", description: "Musical night." },
    { title: "Dance Off", time: "02:00 PM", venue: "Open Stage", category: "Cultural", description: "Inter-college dance competition." },
    { title: "FIFA Tournament", time: "01:00 PM", venue: "Lab 3", category: "Games", description: "E-sports tournament." },
    { title: "AI Workshop", time: "09:30 AM", venue: "Seminar Hall", category: "Workshops", description: "Intro to Generative AI." },
];

export default function SchedulePage() {
    const [filter, setFilter] = useState('All');

    const filteredEvents = filter === 'All'
        ? events
        : events.filter(e => e.category === filter);

    return (
        <main className="min-h-screen flex flex-col pt-20">
            <Navbar />

            <SectionWrapper>
                <div className="text-center mb-12">
                    <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">Event Schedule</h1>
                    <p className="text-gray-400">Explore the timeline of AWEGA25.</p>
                </div>

                <div className="flex flex-wrap justify-center gap-2 mb-12">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={cn(
                                "px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border",
                                filter === cat
                                    ? "bg-accent-1 text-black border-accent-1 shadow-[0_0_15px_rgba(110,231,247,0.4)]"
                                    : "bg-white/5 text-gray-400 border-white/10 hover:border-accent-1/50 hover:text-white"
                            )}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredEvents.map((event, index) => (
                        <EventCard key={index} {...event} />
                    ))}
                </div>
            </SectionWrapper>

            <Footer />
        </main>
    );
}
