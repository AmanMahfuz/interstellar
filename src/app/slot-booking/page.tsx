import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SectionWrapper from '@/components/ui/SectionWrapper';

export default function BookingPage() {
    return (
        <main className="min-h-screen flex flex-col pt-20">
            <Navbar />
            <SectionWrapper>
                <h1 className="font-heading text-4xl font-bold mb-8">Book Your Slots</h1>
                <div className="text-center py-20">
                    <p className="text-gray-400 mb-8">Select an event to proceed with booking.</p>
                    {/* Booking form placeholder */}
                    <div className="inline-block p-8 border border-white/10 rounded-2xl glass">
                        Booking Module Coming Soon
                    </div>
                </div>
            </SectionWrapper>
            <Footer />
        </main>
    );
}
