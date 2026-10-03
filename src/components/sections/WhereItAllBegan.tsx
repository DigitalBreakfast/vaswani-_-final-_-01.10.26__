import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useCursor } from '../../context/CursorContext';

const FOUNDER_IMAGES = [
  {
    src: 'https://res.cloudinary.com/ds5s7shuo/image/upload/v1790293181/ecb4a660-9696-4569-bc46-24b8679481b4.png',
    alt: 'Mr. Ramesh Vaswani & Mr. Maniklal Vaswani — Founders of Vaswani Group',
  },
  {
    src: 'https://res.cloudinary.com/ds5s7shuo/image/upload/v1790292774/Founder_vaswani_dxd4ad.png',
    alt: 'Founders & Leadership — Vaswani Group',
  },
  {
    src: 'https://res.cloudinary.com/ds5s7shuo/image/upload/v1790293224/0ca385fc-c755-43bc-8cb5-f5b9ecc9bbe2.png',
    alt: 'Heritage and Leadership — Vaswani Group',
  },
];

export const WhereItAllBegan: React.FC = () => {
  const { setCursorVariant, resetCursor } = useCursor();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleNext = useCallback(() => {
    setCurrentImageIndex((prev) => (prev + 1) % FOUNDER_IMAGES.length);
  }, []);

  const handlePrev = useCallback(() => {
    setCurrentImageIndex((prev) => (prev - 1 + FOUNDER_IMAGES.length) % FOUNDER_IMAGES.length);
  }, []);

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(interval);
  }, [isHovered, handleNext]);

  return (
    <section
      id="where-it-all-began"
      className="relative w-full text-[#135A5C] py-28 sm:py-36 md:py-44 lg:py-48 px-6 sm:px-10 lg:px-16 select-none overflow-hidden"
      aria-label="Where It All Began — Vaswani Founding Story"
    >
      {/* Subtle warm architectural ambient glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#1A4E40]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-24 items-center">
          
          {/* ========================================================================= */}
          {/* LEFT SIDE: Large Dominant Founder Photograph                              */}
          {/* ========================================================================= */}
          <motion.div
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 xl:col-span-6 relative"
          >
            {/* Visual Container with generous presence */}
            <div
              className="relative w-full aspect-[4/5] sm:aspect-[5/6] lg:aspect-[4/5] overflow-hidden rounded-sm bg-[#EAE4D6] shadow-[0_20px_60px_-15px_rgba(19,90,92,0.12)] group"
              onMouseEnter={() => {
                setIsHovered(true);
                setCursorVariant('explore', 'HERITAGE');
              }}
              onMouseLeave={() => {
                setIsHovered(false);
                resetCursor();
              }}
            >
              {/* Stacked Carousel Images (Smooth In-Place Crossfade) */}
              {FOUNDER_IMAGES.map((img, idx) => (
                <motion.img
                  key={img.src}
                  src={img.src}
                  alt={img.alt}
                  initial={false}
                  animate={{
                    opacity: idx === currentImageIndex ? 1 : 0,
                    scale: idx === currentImageIndex ? 1 : 1.05,
                  }}
                  transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0 w-full h-full object-cover object-center contrast-[1.02] brightness-[0.98]"
                  loading={idx === 0 ? 'eager' : 'lazy'}
                />
              ))}

              {/* Soft warm luxury lighting gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#135A5C]/75 via-[#135A5C]/20 to-transparent pointer-events-none z-10" />

              {/* Carousel Navigation Pill Controls */}
              <div className="absolute top-5 right-5 z-20 flex items-center gap-2">
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/45 backdrop-blur-md border border-white/20 text-white font-sans text-[11px] sm:text-[12px] tracking-wider uppercase font-medium">
                  <span>{String(currentImageIndex + 1).padStart(2, '0')}</span>
                  <span className="text-white/40">/</span>
                  <span className="text-white/60">{String(FOUNDER_IMAGES.length).padStart(2, '0')}</span>
                </div>

                <div className="flex items-center gap-1">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handlePrev();
                    }}
                    aria-label="Previous portrait"
                    onMouseEnter={() => setCursorVariant('pointer')}
                    onMouseLeave={resetCursor}
                    className="w-8 h-8 rounded-full bg-black/45 hover:bg-[#135A5C] text-white backdrop-blur-md border border-white/20 flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer shadow-sm"
                  >
                    <ChevronLeft className="w-4 h-4 stroke-[2]" />
                  </button>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleNext();
                    }}
                    aria-label="Next portrait"
                    onMouseEnter={() => setCursorVariant('pointer')}
                    onMouseLeave={resetCursor}
                    className="w-8 h-8 rounded-full bg-black/45 hover:bg-[#135A5C] text-white backdrop-blur-md border border-white/20 flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer shadow-sm"
                  >
                    <ChevronRight className="w-4 h-4 stroke-[2]" />
                  </button>
                </div>
              </div>

              {/* Personal Inscribed Founder Plaque Overlay (Remains Constant) */}
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-1.5 pointer-events-none z-20">
                <span className="font-sans text-[16px] md:text-[17px] lg:text-[18px] tracking-[0.2em] uppercase text-[#E8D6C5] font-semibold block">
                  FOUNDERS & PRINCIPALS
                </span>
                <p className="font-editorial text-[36px] md:text-[44px] lg:text-[56px] font-light text-[#FAF8F5] tracking-tight leading-tight">
                  Mr. Ramesh Vaswani & Mr. Maniklal Vaswani
                </p>
                <p className="font-sans text-[16px] md:text-[17px] lg:text-[18px] text-[#D8E6E0] font-light tracking-wide">
                  Established 1985 • Bengaluru & Mumbai
                </p>
              </div>
            </div>

            {/* Subtle floating architectural offset border accent */}
            <div className="absolute -bottom-4 -left-4 w-28 h-28 border-b border-l border-[#135A5C]/20 pointer-events-none -z-10 hidden sm:block" />
          </motion.div>

          {/* ========================================================================= */}
          {/* RIGHT SIDE: Heading, Supporting Brochure Copy & Timeline Marker           */}
          {/* ========================================================================= */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 1.1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 xl:col-span-6 space-y-8 sm:space-y-10"
          >
            
            {/* Eyebrow & Rule */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="font-sans text-[16px] md:text-[17px] lg:text-[18px] tracking-[0.25em] uppercase text-[#1A4E40] font-semibold">
                  OUR ORIGIN
                </span>
                <div className="w-12 h-[1px] bg-[#1A4E40]/40" />
              </div>

              {/* Section Heading - Level 02: 56px desktop, 44px tablet, 36px mobile */}
              <h2 className="font-editorial text-[36px] md:text-[44px] lg:text-[56px] font-light leading-[1.1] tracking-tight text-[#135A5C]">
                Where It All <br />
                <span className="italic font-normal text-[#1A4E40]">Began</span>
              </h2>
            </div>

            {/* Supporting Copy */}
            <div className="space-y-6 font-sans text-[16px] md:text-[17px] lg:text-[18px] text-[#2C4A40] font-light leading-relaxed max-w-[580px]">
              {/* Lead Paragraph - Level 03 */}
              <p className="font-sans text-[20px] md:text-[22px] lg:text-[24px] text-[#135A5C] font-normal leading-[1.5] max-w-[700px]">
                Vaswani Group was founded by Mr. Ramesh Vaswani and Mr. Maniklal Vaswani.
              </p>
              
              <p>
                The business began with a commitment to thoughtful development, combining construction expertise, strong partnerships and disciplined execution.
              </p>

              <p>
                Every decision laid the foundation for a company built on trust.
              </p>
            </div>

            {/* Timeless Editorial Quote Pull-out - Level 04: Plus Jakarta Sans */}
            <div className="pt-2 pb-2 pl-5 border-l-2 border-[#1A4E40]/30 italic font-sans text-[16px] md:text-[17px] lg:text-[18px] text-[#1A4E40] font-normal leading-relaxed max-w-[540px]">
              "The right home doesn't need to be sold. It speaks through thoughtful design, uncompromising quality, and every decision made with intention."
            </div>

            {/* ========================================================================= */}
            {/* TIMELINE MARKER (At the bottom, grows into place)                         */}
            {/* ========================================================================= */}
            <div className="pt-6 sm:pt-8 space-y-4">
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                style={{ originX: 0 }}
                className="w-full h-[1px] bg-gradient-to-r from-[#135A5C]/40 via-[#1A4E40]/30 to-transparent"
              />

              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 10 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.9, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-wrap items-center justify-between gap-4 pt-1"
              >
                {/* Founding Year Badge - Level 04 */}
                <div className="flex items-center gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#1A4E40] animate-pulse" />
                  <span className="font-sans text-[16px] md:text-[17px] lg:text-[18px] tracking-[0.2em] uppercase text-[#135A5C] font-semibold">
                    FOUNDED 1985
                  </span>
                </div>

                {/* Legacy Counter - Level 04 */}
                <div className="font-sans text-[16px] md:text-[17px] lg:text-[18px] tracking-[0.2em] uppercase text-[#1A4E40] font-medium">
                  40+ YEARS OF TRUST
                </div>
              </motion.div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};
