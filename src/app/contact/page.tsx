import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SectionWrapper from '@/components/ui/SectionWrapper';
import { Button } from '@/components/ui/Button';

export default function ContactPage() {
    return (
        <main className="min-h-screen flex flex-col pt-20">
            <Navbar />
            <SectionWrapper>
                <h1 className="font-heading text-4xl font-bold mb-8">Contact Us</h1>
                <div className="max-w-md mx-auto glass-card p-8 rounded-2xl">
                    <form className="space-y-4">
                        <div>
                            <label className="block text-sm text-gray-400 mb-1">Name</label>
                            <input className="w-full bg-black/20 border border-white/10 rounded-md px-4 py-2 text-white focus:border-accent-1 outline-none" />
                        </div>
                        <div>
                            <label className="block text-sm text-gray-400 mb-1">Email</label>
                            <input className="w-full bg-black/20 border border-white/10 rounded-md px-4 py-2 text-white focus:border-accent-1 outline-none" />
                        </div>
                        <div>
                            <label className="block text-sm text-gray-400 mb-1">Message</label>
                            <textarea className="w-full bg-black/20 border border-white/10 rounded-md px-4 py-2 text-white focus:border-accent-1 outline-none h-32" />
                        </div>
                        <Button className="w-full">Send Message</Button>
                    </form>
                </div>
            </SectionWrapper>
            <Footer />
        </main>
    );
}
