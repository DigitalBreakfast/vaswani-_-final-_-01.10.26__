import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { useCursor } from '../../context/CursorContext';

export const SimplyFeelsRight: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { setCursorVariant, resetCursor } = useCursor();

  // Scroll-linked smooth parallax & subtle scaling
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 20,
    restDelta: 0.001,
  });

  // Background subtle parallax drift
  const bgY = useTransform(smoothProgress, [0, 1], ['-10%', '10%']);
  const bgScale = useTransform(smoothProgress, [0, 0.5, 1], [1.08, 1.0, 1.05]);

  // Quote subtle scale and opacity animation as visitor scrolls through
  const quoteScale = useTransform(smoothProgress, [0.15, 0.5, 0.85], [0.95, 1.03, 0.97]);
  const quoteOpacity = useTransform(smoothProgress, [0.1, 0.35, 0.7, 0.95], [0.3, 1, 1, 0.4]);
  const textY = useTransform(smoothProgress, [0.1, 0.5], ['30px', '0px']);

  return (
    <section
      id="simply-feels-right"
      ref={sectionRef}
      className="relative w-full min-h-[90vh] md:min-h-screen py-32 sm:py-40 md:py-48 lg:py-56 flex items-center justify-center select-none overflow-hidden bg-[#061A16] text-[#FAF8F5]"
      aria-label="Simply Feels Right — The Emotional Philosophy of Vaswani"
      onMouseEnter={() => setCursorVariant('pointer')}
      onMouseLeave={resetCursor}
    >
      {/* 1. FULL-WIDTH CINEMATIC LIFESTYLE PHOTOGRAPHY (PARALLAX) */}
      <div className="absolute inset-0 w-full h-[120%] -top-[10%] overflow-hidden pointer-events-none z-0">
        <motion.div
          style={{ y: bgY, scale: bgScale }}
          className="w-full h-full will-change-transform"
        >
          <img
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2400&q=88"
            alt="Tranquil morning light filling a serene luxury architectural residence"
            className="w-full h-full object-cover object-center filter brightness-[0.72] contrast-[1.06]"
            loading="lazy"
          />
        </motion.div>
      </div>

      {/* 2. CALM LUXURY LIGHTING & ATMOSPHERIC VEILS */}
      <div className="absolute inset-0 bg-[#061A16]/55 pointer-events-none z-[1]" />
      <div className="absolute inset-0 bg-radial-[circle_at_center] from-black/40 via-black/60 to-[#04120F]/90 pointer-events-none z-[1]" />
      <div className="absolute top-0 left-0 right-0 h-36 bg-gradient-to-b from-[#FAF8F5]/0 via-[#061A16]/50 to-transparent pointer-events-none z-[1]" />
      <div className="absolute bottom-0 left-0 right-0 h-36 bg-gradient-to-t from-[#061A16]/90 via-[#061A16]/40 to-transparent pointer-events-none z-[1]" />

      {/* 3. EDITORIAL TYPOGRAPHY & EMOTIONAL PHILOSOPHY */}
      <div className="relative z-10 w-full max-w-[1240px] mx-auto px-6 sm:px-10 lg:px-16 text-center flex flex-col items-center justify-center">
        
        <motion.div
          style={{
            scale: quoteScale,
            opacity: quoteOpacity,
            y: textY,
          }}
          className="space-y-10 sm:space-y-14 md:space-y-16 max-w-[700px] mx-auto will-change-transform"
        >
          {/* Eyebrow - Level 04 */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-3 inline-flex flex-col items-center"
          >
            <span className="font-sans text-[16px] md:text-[17px] lg:text-[18px] tracking-[0.3em] uppercase text-[#E8D6C5] font-semibold">
              THE PHILOSOPHY
            </span>
            <div className="w-8 h-[1.5px] bg-[#E8D6C5]/60" />
          </motion.div>

          {/* Section Heading - Level 02 */}
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-editorial text-[36px] md:text-[44px] lg:text-[56px] font-light tracking-tight leading-[1.08] text-[#FAF8F5]"
          >
            Simply Feels{' '}
            <span className="italic font-normal text-[#E8D6C5]">
              Right.
            </span>
          </motion.h2>

          {/* Emotional Philosophy Quote - Level 03 Lead Paragraph */}
          <motion.blockquote
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 1.3, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="font-sans text-[20px] md:text-[22px] lg:text-[24px] font-light leading-[1.5] text-[#F3EFEA] max-w-[700px] mx-auto tracking-normal"
          >
            “For over four decades, we've believed that the right home doesn't need to be sold. It speaks through thoughtful design, uncompromising quality, and every decision made with intention.”
          </motion.blockquote>

          {/* Final Calm Cadence - Level 04 */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="font-sans text-[16px] md:text-[17px] lg:text-[18px] tracking-wide uppercase text-[#B5CEC4] font-medium pt-2"
          >
            When every detail is considered, the result simply feels right.
          </motion.p>

        </motion.div>

      </div>
    </section>
  );
};
