import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SectionWrapper from '@/components/ui/SectionWrapper';

export default function SponsorsPage() {
    return (
        <main className="min-h-screen flex flex-col pt-20">
            <Navbar />
            <SectionWrapper>
                <h1 className="font-heading text-4xl font-bold mb-8">Our Sponsors</h1>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                    {[1, 2, 3].map(i => (
                        <div key={i} className="h-40 bg-white/5 rounded-xl border border-white/10 flex items-center justify-center">
                            <span className="text-gray-500">Sponsor Logo</span>
                        </div>
                    ))}
                </div>
            </SectionWrapper>
            <Footer />
        </main>
    );
}
