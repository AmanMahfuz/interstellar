'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import BlackHoleBackground from '@/components/layout/BlackHoleBackground';
import SectionWrapper from '@/components/ui/SectionWrapper';
import { Button } from '@/components/ui/Button';
import { BentoGrid, BentoGridItem } from '@/components/ui/BentoGrid';
import FlyThroughSection from '@/components/ui/FlyThroughSection';
import GlitchText from '@/components/ui/GlitchText';
import HolographicCard from '@/components/ui/HolographicCard';
import Link from 'next/link';
import { Code, Music, Gamepad2, Globe, Cpu, Zap, Activity } from 'lucide-react';

export default function Home() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="min-h-screen flex flex-col relative overflow-x-hidden bg-[#000]">
      <BlackHoleBackground />
      <Navbar />

      {/* Hero Section - The Launch */}
      <FlyThroughSection id="hero" zoomIntensity={1.5} className="w-full min-h-[140vh] flex items-center justify-center pt-20">
        <div className="max-w-7xl mx-auto px-4 z-10 w-full flex flex-col items-center text-center">

          <div className="inline-block mb-8 px-8 py-3 rounded-full border border-accent-1/20 bg-black/40 backdrop-blur-md animate-float">
            <span className="text-accent-1 text-sm font-bold tracking-[0.5em] font-heading uppercase flex items-center gap-2">
              <Activity size={16} /> SYSTEM ONLINE
            </span>
          </div>

          <GlitchText
            as="h1"
            text="AWEGA 25"
            active
            className="font-heading text-fluid-h1 font-black leading-none mb-4 tracking-widest text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60 drop-shadow-2xl"
          />

          <p className="text-2xl md:text-4xl text-gray-200 mb-12 font-light tracking-[0.2em] uppercase">
            Enter <span className="text-accent-1 font-bold">Warp Speed</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-8">
            <Button onClick={() => scrollTo('warp-core')} size="lg" className="px-16 py-6 text-xl shadow-[0_0_50px_rgba(110,231,247,0.4)] bg-white text-black rounded-full font-bold tracking-widest hover:scale-110 transition-transform duration-300">
              ENGAGE
            </Button>
          </div>
        </div>
      </FlyThroughSection>

      {/* About Section - Time Dilation */}
      <FlyThroughSection id="warp-core" zoomIntensity={1.2} className="w-full min-h-[150vh] flex items-center justify-center">
        <SectionWrapper>
          <div className="flex flex-col items-center text-center">
            <GlitchText as="h2" text="TIME DILATION" className="font-heading text-6xl md:text-9xl font-black mb-12 text-white/10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 whitespace-nowrap" />

            <h2 className="font-heading text-5xl md:text-7xl font-bold mb-12 relative z-10">
              25 YEARS OF <br /><span className="text-accent-2">MOMENTUM</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl relative z-10">
              <HolographicCard className="p-8 text-center bg-black/60">
                <h3 className="text-6xl font-heading font-black text-white mb-2">1999</h3>
                <p className="text-accent-1 tracking-widest uppercase text-sm">Initiation</p>
              </HolographicCard>
              <HolographicCard className="p-8 text-center bg-black/60 scale-110 border-accent-1/50">
                <h3 className="text-7xl font-heading font-black text-white mb-2">25</h3>
                <p className="text-accent-2 tracking-widest uppercase text-sm">Silver Jubilee</p>
              </HolographicCard>
              <HolographicCard className="p-8 text-center bg-black/60">
                <h3 className="text-6xl font-heading font-black text-white mb-2">2025</h3>
                <p className="text-accent-3 tracking-widest uppercase text-sm">The Future</p>
              </HolographicCard>
            </div>
          </div>
        </SectionWrapper>
      </FlyThroughSection>

      {/* Core Systems - Holographic Bento */}
      <FlyThroughSection id="systems" zoomIntensity={0.8} className="w-full min-h-screen py-32">
        <SectionWrapper>
          <div className="mb-16 text-center">
            <h2 className="font-heading text-4xl md:text-6xl font-bold mb-4 tracking-wide text-glow-strong flex items-center justify-center gap-4">
              <Zap className="text-accent-1" size={48} /> SECTOR GRID
            </h2>
          </div>

          <BentoGrid className="max-w-7xl mx-auto">
            <BentoGridItem
              title={<span className="text-2xl tracking-wide font-bold">TECH ARENA</span>}
              description={<span className="text-gray-400">Hackathons & AI Showcases.</span>}
              header={<HolographicCard className="h-full min-h-[10rem] flex items-center justify-center bg-accent-1/5 border-accent-1/20"><Code size={64} className="text-accent-1 opacity-50" /></HolographicCard>}
              className="md:col-span-2 bg-transparent border-none shadow-none p-0"
            />
            <BentoGridItem
              title={<span className="text-2xl tracking-wide font-bold">CULTURAL</span>}
              description={<span className="text-gray-400">Sonic & Visual Arts.</span>}
              header={<HolographicCard className="h-full min-h-[10rem] flex items-center justify-center bg-accent-2/5 border-accent-2/20"><Music size={64} className="text-accent-2 opacity-50" /></HolographicCard>}
              className="md:col-span-1 bg-transparent border-none shadow-none p-0"
            />
            <BentoGridItem
              title={<span className="text-2xl tracking-wide font-bold">GAMING</span>}
              description={<span className="text-gray-400">Neural Link Uplink.</span>}
              header={<HolographicCard className="h-full min-h-[10rem] flex items-center justify-center bg-accent-3/5 border-accent-3/20"><Gamepad2 size={64} className="text-accent-3 opacity-50" /></HolographicCard>}
              className="md:col-span-1 bg-transparent border-none shadow-none p-0"
            />
            <BentoGridItem
              title={<span className="text-2xl tracking-wide font-bold">NETWORK</span>}
              description={<span className="text-gray-400">Global Connectivity.</span>}
              header={<HolographicCard className="h-full min-h-[10rem] flex items-center justify-center bg-blue-500/5 border-blue-500/20"><Globe size={64} className="text-blue-500 opacity-50" /></HolographicCard>}
              className="md:col-span-2 bg-transparent border-none shadow-none p-0"
            />
          </BentoGrid>
        </SectionWrapper>
      </FlyThroughSection>

      {/* Schedule Warp - New Section */}
      <FlyThroughSection id="schedule" zoomIntensity={1.2} className="w-full min-h-screen flex items-center justify-center py-32">
        <SectionWrapper>
          <div className="text-center mb-16">
            <GlitchText as="h2" text="MISSION TIMELINE" className="font-heading text-5xl md:text-7xl font-bold mb-4 tracking-wide" />
            <p className="text-accent-1 tracking-[0.5em] uppercase text-sm">Synchronize Watches</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Manually included top events for warp effect */}
            <HolographicCard className="bg-black/80 hover:scale-105 transition-transform">
              <div className="flex justify-between items-start mb-4">
                <span className="text-accent-1 font-mono text-xs border border-accent-1/30 px-2 py-1 rounded">TECHNICAL</span>
                <span className="text-gray-400 text-xs">10:00 AM</span>
              </div>
              <h3 className="text-2xl font-heading font-bold mb-2">HACKATHON 2025</h3>
              <p className="text-sm text-gray-400 mb-4">24-hour coding marathon.</p>
              <div className="h-1 w-full bg-accent-1/20 rounded-full overflow-hidden">
                <div className="h-full w-2/3 bg-accent-1 animate-pulse" />
              </div>
            </HolographicCard>

            <HolographicCard className="bg-black/80 hover:scale-105 transition-transform">
              <div className="flex justify-between items-start mb-4">
                <span className="text-accent-2 font-mono text-xs border border-accent-2/30 px-2 py-1 rounded">CULTURAL</span>
                <span className="text-gray-400 text-xs">06:00 PM</span>
              </div>
              <h3 className="text-2xl font-heading font-bold mb-2">VIBE NIGHT</h3>
              <p className="text-sm text-gray-400 mb-4">Sonic waves & neon lights.</p>
              <div className="h-1 w-full bg-accent-2/20 rounded-full overflow-hidden">
                <div className="h-full w-full bg-accent-2 animate-pulse" />
              </div>
            </HolographicCard>

            <HolographicCard className="bg-black/80 hover:scale-105 transition-transform">
              <div className="flex justify-between items-start mb-4">
                <span className="text-accent-3 font-mono text-xs border border-accent-3/30 px-2 py-1 rounded">GAMES</span>
                <span className="text-gray-400 text-xs">01:00 PM</span>
              </div>
              <h3 className="text-2xl font-heading font-bold mb-2">FIFA TOURNAMENT</h3>
              <p className="text-sm text-gray-400 mb-4">Competitive e-sports arena.</p>
              <div className="h-1 w-full bg-accent-3/20 rounded-full overflow-hidden">
                <div className="h-full w-1/3 bg-accent-3 animate-pulse" />
              </div>
            </HolographicCard>

            <HolographicCard className="md:col-span-3 text-center py-8 border-dashed border-white/20">
              <Link href="/schedule" className="text-xl font-heading font-bold text-white hover:text-accent-1 transition-colors">
                VIEW FULL MANIFEST →
              </Link>
            </HolographicCard>
          </div>
        </SectionWrapper>
      </FlyThroughSection>

      {/* Sponsors Section */}
      {/* Sponsors Section */}
      <FlyThroughSection id="sponsors" zoomIntensity={1.0} className="w-full min-h-screen flex items-center justify-center py-32" variant="absorb">
        <SectionWrapper>
          <div className="text-center mb-16">
            <GlitchText as="h2" text="ALLIANCE PARTNERS" className="font-heading text-5xl md:text-7xl font-bold mb-4 tracking-wide text-glow-strong" />
            <p className="text-gray-400 tracking-[0.2em] uppercase">Fueling the Mission</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <HolographicCard key={i} className="flex items-center justify-center min-h-[150px] bg-white/5 border-white/10 hover:border-accent-1 hover:bg-white/10 transition-all opacity-70 hover:opacity-100 group">
                <span className="font-heading font-bold text-xl text-white/50 group-hover:text-accent-1 group-hover:text-glow-strong transition-all">CORP {i}</span>
              </HolographicCard>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href="/sponsors">
              <Button variant="outline" className="border-accent-1/50 text-accent-1 hover:bg-accent-1 hover:text-black rounded-none">BECOME A PARTNER</Button>
            </Link>
          </div>
        </SectionWrapper>
      </FlyThroughSection>

      {/* Coordinators Section */}
      <FlyThroughSection id="coordinators" zoomIntensity={1.1} className="w-full min-h-screen flex items-center justify-center py-32">
        <SectionWrapper>
          <div className="text-center mb-20">
            <GlitchText as="h2" text="COMMAND CREW" className="font-heading text-5xl md:text-7xl font-bold mb-4 tracking-wide" />
            <p className="text-gray-400 tracking-[0.2em] uppercase">Mission Control</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-5xl mx-auto">
            <HolographicCard className="text-center p-8 bg-black/60 border-accent-2/30">
              <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-b from-accent-2 to-transparent mb-6 p-1">
                <div className="w-full h-full rounded-full bg-black/80 flex items-center justify-center">
                  <span className="text-4xl">👨‍✈️</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-1">Dr. S Ajith</h3>
              <p className="text-accent-2 text-sm tracking-widest uppercase mb-4">Faculty Coordinator</p>
              <div className="font-mono text-xs text-gray-500 bg-white/5 py-2 px-4 rounded inline-block">ID: FAC-001</div>
            </HolographicCard>

            <HolographicCard className="text-center p-8 bg-black/60 border-accent-1/30">
              <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-b from-accent-1 to-transparent mb-6 p-1">
                <div className="w-full h-full rounded-full bg-black/80 flex items-center justify-center">
                  <span className="text-4xl">🧑‍🚀</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-1">Aman Mahfuz</h3>
              <p className="text-accent-1 text-sm tracking-widest uppercase mb-4">Student Lead</p>
              <div className="font-mono text-xs text-gray-500 bg-white/5 py-2 px-4 rounded inline-block">ID: STU-X99</div>
            </HolographicCard>

            <HolographicCard className="text-center p-8 bg-black/60 border-accent-3/30">
              <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-b from-accent-3 to-transparent mb-6 p-1">
                <div className="w-full h-full rounded-full bg-black/80 flex items-center justify-center">
                  <span className="text-4xl">👩‍🚀</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-1">Sarah James</h3>
              <p className="text-accent-3 text-sm tracking-widest uppercase mb-4">Tech Head</p>
              <div className="font-mono text-xs text-gray-500 bg-white/5 py-2 px-4 rounded inline-block">ID: STU-T42</div>
            </HolographicCard>
          </div>
        </SectionWrapper>
      </FlyThroughSection>

      {/* Final CTA - Destination */}
      <FlyThroughSection id="contact" zoomIntensity={3} className="w-full min-h-[80vh] flex items-center justify-center pb-32">
        <div className="text-center">
          <div className="mb-8 relative inline-flex items-center justify-center">
            <div className="absolute inset-0 bg-accent-1/20 blur-3xl rounded-full" />
            <Cpu size={120} className="relative z-10 text-white animate-pulse" />
          </div>

          <GlitchText as="h2" text="DESTINATION LOCKED" className="font-heading text-5xl md:text-8xl font-black mb-8 block" />

          <Link href="/slot-booking">
            <Button size="lg" className="px-20 py-8 text-2xl rounded-none border-x-2 border-accent-1 bg-transparent text-white font-bold hover:bg-accent-1 hover:text-black tracking-[0.2em] transition-all">
              [ INITIATE LANDING ]
            </Button>
          </Link>
        </div>
      </FlyThroughSection>

      <Footer />
    </main>
  );
}
