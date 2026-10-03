import React from 'react';
import { motion } from 'motion/react';
import { Hero } from '../components/sections/Hero';
import { Philosophy } from '../components/sections/Philosophy';
import { InNumbers } from '../components/sections/InNumbers';
import { ArchitecturalPerspectives } from '../components/sections/ArchitecturalPerspectives';
import { Portfolio } from '../components/sections/Portfolio';
import { InsightsNews } from '../components/sections/InsightsNews';
import { HomeownerStories } from '../components/sections/HomeownerStories';
import { VideoTestimonials } from '../components/sections/VideoTestimonials';
import { FinalCTA } from '../components/sections/FinalCTA';

export const HomePage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="w-full relative z-10"
    >
      <div className="w-full">
        {/* SECTION 01: HERO */}
        <Hero />

        {/* SECTION 02: OUR PHILOSOPHY */}
        <Philosophy />

        {/* SECTION 03: IN NUMBERS */}
        <InNumbers />

        {/* SECTION 04: THREE VERTICAL FRAMES PERSPECTIVES */}
        <ArchitecturalPerspectives />

        {/* SECTION 05: PORTFOLIO */}
        <Portfolio />

        {/* SECTION 06: TESTIMONIALS (Homeowner Stories) */}
        <HomeownerStories />

        {/* SECTION 07: VIDEO TESTIMONIALS */}
        <VideoTestimonials />

        {/* SECTION 08: NEWS & INSIGHTS */}
        <InsightsNews />

        {/* SECTION 08: FINAL CTA */}
        <FinalCTA />
      </div>
    </motion.div>
  );
};
