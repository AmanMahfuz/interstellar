'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button, cn } from '@/components/ui/Button';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Schedule', href: '/schedule' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                'fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent',
                scrolled ? 'glass bg-deep-space/80' : 'bg-transparent',
                (scrolled || isOpen) && 'border-white/10'
            )}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link href="/" className="flex-shrink-0 flex items-center gap-2 group">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-accent-1 to-accent-2 animate-pulse group-hover:scale-110 transition-transform" />
                        <span className="font-heading font-bold text-2xl tracking-tighter text-white">
                            AWEGA<span className="text-accent-1">25</span>
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={cn(
                                        'text-sm font-medium transition-all duration-300 hover:text-accent-1 relative group',
                                        pathname === item.href ? 'text-accent-1' : 'text-gray-300'
                                    )}
                                >
                                    {item.name}
                                    <span className={cn(
                                        "absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-1 transition-all duration-300 group-hover:w-full",
                                        pathname === item.href ? "w-full" : ""
                                    )} />
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="hidden md:block">
                        <Link href="/slot-booking">
                            <Button size="sm" variant="primary">
                                Book Slots
                            </Button>
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-300 hover:text-white p-2"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden glass border-t border-white/10 overflow-hidden"
                    >
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className={cn(
                                        'block px-3 py-2 rounded-md text-base font-medium hover:bg-white/5 hover:text-accent-1 transition-colors',
                                        pathname === item.href ? 'text-accent-1 bg-white/5' : 'text-gray-300'
                                    )}
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <div className="mt-4 px-3">
                                <Link href="/slot-booking" onClick={() => setIsOpen(false)}>
                                    <Button className="w-full">Book Slots</Button>
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
