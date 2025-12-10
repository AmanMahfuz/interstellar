import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SectionWrapper from '@/components/ui/SectionWrapper';

export default function GalleryPage() {
    return (
        <main className="min-h-screen flex flex-col pt-20">
            <Navbar />
            <SectionWrapper>
                <h1 className="font-heading text-4xl font-bold mb-8">Gallery</h1>
                <p className="text-gray-400">Capturing the moments of AWEGA.</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map(i => (
                        <div key={i} className="aspect-square bg-white/5 rounded-2xl animate-pulse" />
                    ))}
                </div>
            </SectionWrapper>
            <Footer />
        </main>
    );
}
