import Link from 'next/link';
import { Github, Twitter, Instagram, Linkedin, Heart } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="border-t border-white/10 bg-[#02050e] relative z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="col-span-1 md:col-span-1">
                        <Link href="/" className="flex items-center gap-2 mb-4">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-accent-1 to-accent-2" />
                            <span className="font-heading font-bold text-xl text-white">
                                AWEGA<span className="text-accent-1">25</span>
                            </span>
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            MES AIMAT's annual tech fest celebrating curiosity, code, and culture. Join the cosmic collision.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-heading text-lg font-semibold mb-4 text-white">Events</h3>
                        <ul className="space-y-2 text-gray-400 text-sm">
                            <li><Link href="/schedule?filter=technical" className="hover:text-accent-1 transition-colors">Technical</Link></li>
                            <li><Link href="/schedule?filter=cultural" className="hover:text-accent-1 transition-colors">Cultural</Link></li>
                            <li><Link href="/schedule?filter=games" className="hover:text-accent-1 transition-colors">Games</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-heading text-lg font-semibold mb-4 text-white">Quick Links</h3>
                        <ul className="space-y-2 text-gray-400 text-sm">
                            <li><Link href="/about" className="hover:text-accent-1 transition-colors">About Us</Link></li>
                            <li><Link href="/contact" className="hover:text-accent-1 transition-colors">Contact</Link></li>
                            <li><Link href="/sponsors" className="hover:text-accent-1 transition-colors">Sponsors</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-heading text-lg font-semibold mb-4 text-white">Connect</h3>
                        <div className="flex space-x-4 mb-4">
                            <a href="#" className="bg-white/5 p-2 rounded-full hover:bg-accent-1 hover:text-black transition-all">
                                <Instagram size={18} />
                            </a>
                            <a href="#" className="bg-white/5 p-2 rounded-full hover:bg-accent-1 hover:text-black transition-all">
                                <Linkedin size={18} />
                            </a>
                            <a href="#" className="bg-white/5 p-2 rounded-full hover:bg-accent-1 hover:text-black transition-all">
                                <Twitter size={18} />
                            </a>
                        </div>
                        <p className="text-xs text-gray-500">
                            Marampally, Aluva, Kerala.<br />
                            PIN: 683105
                        </p>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
                    <p>&copy; 2025 AWEGA. All rights reserved.</p>
                    <p className="flex items-center gap-1 mt-2 md:mt-0">
                        Designed for Awega25. Developed by <span className="text-gray-300">Aswin & Rizwan</span>
                    </p>
                </div>
            </div>
        </footer>
    );
}
