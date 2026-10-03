import React from 'react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { useCursor } from '../../context/CursorContext';

export interface AboutHeroProps {
  onExploreJourney?: () => void;
  onOurDevelopments?: () => void;
}

export const AboutHero: React.FC<AboutHeroProps> = () => {
  return (
    <section
      id="about-hero"
      className="relative w-full h-screen min-h-[720px] max-h-[1200px] bg-[#FAF8F5] text-[#0A2F28] overflow-hidden flex flex-col justify-between pt-32 sm:pt-36 pb-12 sm:pb-16 px-6 sm:px-10 lg:px-16 select-none"
      aria-label="About Vaswani Hero"
    >
      {/* ───────────────────────────────────────────────────────────── */}
      {/* 1. CINEMATIC DOCUMENTARY BACKGROUND VIDEO (105% -> 100% ZOOM) */}
      {/* ───────────────────────────────────────────────────────────── */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <motion.div
          initial={{ scale: 1.05, opacity: 0.65 }}
          animate={{ scale: 1.0, opacity: 0.8 }}
          transition={{
            scale: { duration: 5.5, ease: [0.25, 1, 0.5, 1] },
            opacity: { duration: 1.8, ease: 'easeOut' },
          }}
          className="w-full h-full"
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover object-center -scale-x-100"
          >
            <source
              src="https://res.cloudinary.com/ds5s7shuo/video/upload/v1788814003/Transitioning_cranes_between_frames_202609080216_hve6bc.mp4"
              type="video/mp4"
            />
          </video>
        </motion.div>
      </div>

      {/* ───────────────────────────────────────────────────────────── */}
      {/* 2. GRADIENT TRANSPARENCY OVERLAYS (LEFT HEAVILY SHIELDED)      */}
      {/* ───────────────────────────────────────────────────────────── */}
      <div
        className="absolute inset-0 w-full h-full pointer-events-none bg-gradient-to-r from-[#FAF8F5]/95 via-[#FAF8F5]/80 to-white/40 backdrop-blur-[0.5px]"
        style={{ zIndex: 1 }}
      />
      <div
        className="absolute inset-y-0 left-0 w-full sm:w-3/4 lg:w-3/5 pointer-events-none bg-gradient-to-r from-[#FAF8F5] via-[#FAF8F5]/95 to-transparent"
        style={{ zIndex: 1 }}
      />

      {/* ───────────────────────────────────────────────────────────── */}
      {/* 3. EDITORIAL CONTENT OVERLAY (LEFT-ALIGNED)                  */}
      {/* ───────────────────────────────────────────────────────────── */}
      <div
        className="relative w-full max-w-[1440px] mx-auto my-auto py-4"
        style={{ zIndex: 2 }}
      >
        <div className="max-w-[760px] space-y-7 sm:space-y-9 text-left">
          
          {/* Eyebrow: ABOUT VASWANI - Level 04: Plus Jakarta Sans */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-2 inline-block"
          >
            <span className="font-sans text-[16px] md:text-[17px] lg:text-[18px] tracking-[0.25em] uppercase text-[#0A2F28]/80 font-semibold block">
              ABOUT VASWANI
            </span>
            <div className="w-10 h-[1.5px] bg-[#0A2F28]/50" />
          </motion.div>

          {/* Page Hero Title - Level 01: Cormorant Garamond 88px desktop, 72px tablet, 52px mobile */}
          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="font-editorial text-[52px] md:text-[72px] lg:text-[88px] font-light leading-[1.02] tracking-tight text-[#0A2F28]"
          >
            <span className="block">Building Places That</span>
            <span className="block mt-1 sm:mt-2">
              Simply Feel{' '}
              <span className="italic font-normal text-[#9E6D38]">
                Right.
              </span>
            </span>
          </motion.h1>

          {/* Lead Paragraph - Level 03: Plus Jakarta Sans 24px desktop, 22px tablet, 20px mobile */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-4 font-sans text-[20px] md:text-[22px] lg:text-[24px] text-[#0A2F28]/85 font-normal leading-[1.5] max-w-[700px]"
          >
            <p>
              For over four decades, we've believed that the right home doesn't need to be sold. It speaks through thoughtful design, uncompromising quality, and every decision made with intention.
            </p>
            <p className="text-[#0A2F28]/75 pt-1">
              From the first conversation to the moment the keys are handed over, every experience is designed to feel effortless, considered, and simply right.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
