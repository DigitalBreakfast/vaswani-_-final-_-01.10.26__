import React, { useLayoutEffect } from 'react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { useSmoothScroll } from '../context/SmoothScrollContext';
import { useCursor } from '../context/CursorContext';
import { AboutHero } from '../components/sections/AboutHero';
import { WhereItAllBegan } from '../components/sections/WhereItAllBegan';
import { Timeline } from '../components/sections/Timeline';
import { Leadership } from '../components/sections/Leadership';
import { WhatWeStandFor } from '../components/sections/WhatWeStandFor';
import { GrowingAcrossIndia } from '../components/sections/GrowingAcrossIndia';
import { BuildingBeyond } from '../components/sections/BuildingBeyond';

export const AboutPage: React.FC = () => {
  const navigate = useNavigate();
  const { lenis } = useSmoothScroll();
  const { setCursorVariant, resetCursor } = useCursor();

  // Guarantee the About page always begins strictly at the hero section
  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    }
  }, [lenis]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="w-full"
    >
      {/* 1. DOCUMENTARY HERO: About Vaswani */}
      <AboutHero
        onExploreJourney={() => {
          const el = document.getElementById('where-it-all-began') || document.getElementById('heritage-timeline');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
        onOurDevelopments={() => {
          navigate('/products');
        }}
      />

      {/* 2. WHERE IT ALL BEGAN: The Founding Story of Vaswani */}
      <WhereItAllBegan />

      {/* 3. EDITORIAL LEADERSHIP: The People Behind the Vision */}
      <div id="leadership-section">
        <Leadership />
      </div>

      {/* 4. IMMERSIVE VALUES SECTION: What We Stand For (Mission and Vision) */}
      <div id="what-we-stand-for-section">
        <WhatWeStandFor />
      </div>

      {/* 5. HERITAGE TIMELINE: Four Decades of Progress (Our Journey) */}
      <div id="heritage-timeline">
        <Timeline />
      </div>

      {/* FULL-WIDTH ARCHITECTURAL IMAGE BREAK */}
      <section
        id="full-width-image-break"
        aria-label="Vaswani Architectural Landmark"
        className="w-full relative overflow-hidden border-y border-[#1C443B]/10 select-none"
      >
        <div
          className="w-full h-[380px] sm:h-[480px] md:h-[580px] lg:h-[700px] xl:h-[780px] overflow-hidden relative group cursor-pointer"
          onMouseEnter={() => setCursorVariant('explore', 'ARCHIVE')}
          onMouseLeave={resetCursor}
        >
          <motion.img
            src="https://res.cloudinary.com/ds5s7shuo/image/upload/v1792530476/59305241-1ae4-4b7f-913e-0169cdb7dca0.png"
            alt="Vaswani Architectural Landmark"
            initial={{ scale: 1.05 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-full h-full object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-[1.02]"
            loading="lazy"
          />
        </div>
      </section>

      {/* 6. INTERACTIVE FOOTPRINT: Growing Across India */}
      <div id="growing-across-india-section">
        <GrowingAcrossIndia />
      </div>

      {/* 7. FINAL STORY: Building Beyond Real Estate */}
      <div id="building-beyond-section">
        <BuildingBeyond />
      </div>
    </motion.div>
  );
};
