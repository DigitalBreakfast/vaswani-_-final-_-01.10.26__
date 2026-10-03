import React, { useLayoutEffect } from 'react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { useSmoothScroll } from '../context/SmoothScrollContext';
import { AboutHero } from '../components/sections/AboutHero';
import { WhereItAllBegan } from '../components/sections/WhereItAllBegan';
import { Timeline } from '../components/sections/Timeline';
import { WhatWeStandFor } from '../components/sections/WhatWeStandFor';
import { Leadership } from '../components/sections/Leadership';
import { GrowingAcrossIndia } from '../components/sections/GrowingAcrossIndia';
import { BuildingBeyond } from '../components/sections/BuildingBeyond';

export const AboutPage: React.FC = () => {
  const navigate = useNavigate();
  const { lenis } = useSmoothScroll();

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

      {/* 5. HERITAGE TIMELINE: Four Decades of Progress */}
      <div id="heritage-timeline">
        <Timeline />
      </div>

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
