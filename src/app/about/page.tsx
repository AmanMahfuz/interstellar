import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SectionWrapper from '@/components/ui/SectionWrapper';

export default function AboutPage() {
    return (
        <main className="min-h-screen flex flex-col pt-20">
            <Navbar />
            <SectionWrapper>
                <h1 className="font-heading text-4xl font-bold mb-8">About AWEGA</h1>
                <div className="prose prose-invert max-w-none">
                    <p className="text-xl text-gray-300">
                        AWEGA is the annual tech fest of MES AIMAT.
                    </p>
                </div>
            </SectionWrapper>
            <Footer />
        </main>
    );
}
