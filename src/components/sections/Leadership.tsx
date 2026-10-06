import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, ArrowUp, Briefcase, Compass, Award } from 'lucide-react';
import { useCursor } from '../../context/CursorContext';

interface LeaderProfile {
  id: string;
  name: string;
  designation: string;
  quote: string;
  intro: string;
  fullMessage: string[];
  image: string;
  altText: string;
}

const LEADERS: LeaderProfile[] = [
  {
    id: 'karan-vaswani',
    name: 'Karan Vaswani',
    designation: 'Managing Director',
    quote: 'Every meaningful development begins with people.',
    intro:
      'For me, the journey of Vaswani Group has always been centred around the people who place their trust in us. While real estate is often measured by buildings and skylines, we have always believed that our true purpose lies in creating spaces where families, communities and businesses can flourish.',
    fullMessage: [
      'For me, the journey of Vaswani Group has always been centred around the people who place their trust in us. While real estate is often measured by buildings and skylines, we have always believed that our true purpose lies in creating spaces where families, communities and businesses can flourish.',
      'Every new development is an opportunity to contribute something meaningful. Alongside launching new projects, some of our most rewarding work has come from restoring confidence, fulfilling commitments and helping communities move forward. These experiences continue to reinforce the responsibility that comes with every home we build.',
      'Our philosophy has always extended beyond construction. We strive to create environments that combine thoughtful architecture, disciplined execution and uncompromising craftsmanship with the warmth and comfort that transform buildings into places people are proud to call home.',
      'The relationships we build with homeowners, partners and communities continue to shape our journey. Their trust inspires us to uphold the values of integrity, quality and long-term thinking in everything we do.',
      'For us, success is measured not only by the developments we create, but by the lasting trust we earn and the lives we help enrich. It is this belief that continues to guide Vaswani as we look towards the future.',
    ],
    image: 'https://res.cloudinary.com/ds5s7shuo/image/upload/v1788387227/Screenshot_2026-09-03_at_3.43.27_AM_cyw8ft.png',
    altText: 'Karan Vaswani — Managing Director, Vaswani Group',
  },
  {
    id: 'ajay-vaswani',
    name: 'Ajay Vaswani',
    designation: 'Executive Director',
    quote: 'Great homes are designed around the way people truly live.',
    intro:
      "The expectations of today's homebuyers continue to evolve, and with them, so must the way we design and deliver our developments. A home is no longer simply a place to live—it is where people work, connect, grow and create lasting memories.",
    fullMessage: [
      "The expectations of today's homebuyers continue to evolve, and with them, so must the way we design and deliver our developments. A home is no longer simply a place to live—it is where people work, connect, grow and create lasting memories.",
      'Our approach begins with understanding these changing lifestyles. Every project is thoughtfully planned so that the layout, amenities and surrounding environment work together to support the rhythm of everyday life. We believe the best developments are those that feel intuitive, comfortable and meaningful from the moment people experience them.',
      'At the same time, we remain firmly committed to the principles that have guided Vaswani for decades. Quality, transparency and excellence in execution continue to define every project we undertake, ensuring that each development delivers enduring value for homeowners and future generations alike.',
      'As we continue to grow, our focus remains on creating places that combine timeless design with thoughtful planning—homes and communities that simply feel right, today and for years to come.',
    ],
    image: 'https://res.cloudinary.com/ds5s7shuo/image/upload/v1788387227/Screenshot_2026-09-03_at_3.43.34_AM_qo6cva.png',
    altText: 'Ajay Vaswani — Executive Director, Vaswani Group',
  },
  {
    id: 'anil-advani',
    name: 'Anil Advani',
    designation: 'Founder & Principal',
    quote: 'Integrity is not just our foundation; it is our legacy.',
    intro:
      'When we established Vaswani Group four decades ago, we made a simple commitment: every milestone we build must stand the test of time and reflect unconditional honesty to our community and partners.',
    fullMessage: [
      'When we established Vaswani Group four decades ago, we made a simple commitment: every milestone we build must stand the test of time and reflect unconditional honesty to our community and partners.',
      'Over the years, as our skylines expanded across Bengaluru and Mumbai, that core ethos never wavered. Sustainable development is born out of respect for the land, meticulous engineering, and genuine relationships built over generations.',
      'Watching the next generation carry forward these principles with modern architectural vision and technological discipline is our greatest pride. We build not merely for the present, but to leave landmarks of enduring civic pride.',
    ],
    image: 'https://res.cloudinary.com/ds5s7shuo/image/upload/v1787999433/Screenshot_2026-08-29_at_3.57.00_PM_mkoqrd.png',
    altText: 'Anil Advani — Founder & Principal, Vaswani Group',
  },
];

export const Leadership: React.FC = () => {
  const { setCursorVariant, resetCursor } = useCursor();
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  const toggleExpand = (id: string) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section
      id="leadership"
      className="relative w-full text-[#135A5C] py-20 sm:py-24 lg:py-28 px-6 sm:px-10 lg:px-16 select-none overflow-hidden border-t border-[#135A5C]/10"
      aria-label="Leadership — The People Behind the Vision"
    >
      {/* Subtle ambient background glow */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#135A5C]/3 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-[#E8D6C5]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-[1400px] mx-auto space-y-12 sm:space-y-16">
        
        {/* ========================================================================= */}
        {/* SECTION INTRODUCTION                                                      */}
        {/* ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl space-y-3"
        >
          <span className="font-sans text-[16px] md:text-[17px] lg:text-[18px] tracking-[0.25em] uppercase text-[#135A5C] font-semibold block">
            LEADERSHIP
          </span>

          {/* Section Heading - Level 02: Cormorant Garamond 56px desktop, 44px tablet, 36px mobile */}
          <h2 className="font-editorial text-[36px] md:text-[44px] lg:text-[56px] font-light leading-[1.1] text-[#135A5C] tracking-tight">
            The People Behind <span className="italic font-normal">the Vision</span>
          </h2>
        </motion.div>

        {/* ========================================================================= */}
        {/* EDITORIAL PROFILE CARDS (Compact, Alternating Layout)                     */}
        {/* ========================================================================= */}
        <div className="space-y-10 sm:space-y-12">
          
          {/* CARD 1: KARAN VASWANI */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="bg-[#2C1E16] rounded-[28px] p-6 sm:p-8 lg:p-10 border border-[#4A3728]/50 shadow-[0_20px_50px_rgba(44,30,22,0.18)] text-white"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              
              {/* Portrait */}
              <div className="lg:col-span-4 xl:col-span-4">
                <div
                  className="relative w-full aspect-[4/5] sm:aspect-[1/1] lg:aspect-[4/5] max-h-[380px] overflow-hidden rounded-2xl bg-[#1E140E] shadow-sm group"
                  onMouseEnter={() => setCursorVariant('explore', 'LEADERSHIP')}
                  onMouseLeave={resetCursor}
                >
                  <img
                    src={LEADERS[0].image}
                    alt={LEADERS[0].altText}
                    className="w-full h-full object-cover object-center filter grayscale-[15%] contrast-[1.04] brightness-[0.98] transition-all duration-700 ease-out group-hover:scale-105 group-hover:grayscale-0 group-hover:brightness-100"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2C1E16]/80 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-3.5 right-3.5 flex items-end justify-end pointer-events-auto">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/65 backdrop-blur-md border border-[#D4AF37]/50 shadow-[0_4px_16px_rgba(0,0,0,0.35)] text-white hover:border-[#D4AF37] hover:bg-black/80 hover:scale-[1.03] transition-all duration-300 group/badge cursor-default">
                      <div className="w-5 h-5 rounded-full bg-[#D4AF37]/15 flex items-center justify-center border border-[#D4AF37]/35">
                        <Briefcase className="w-3 h-3 text-[#D4AF37]" />
                      </div>
                      <span className="font-sans text-[11px] sm:text-[12px] tracking-[0.16em] uppercase font-semibold text-white/95 leading-none">
                        {LEADERS[0].designation}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="lg:col-span-8 xl:col-span-8 space-y-4">
                {/* Leader Name - Level 02: Cormorant Garamond */}
                <div className="border-b border-white/20 pb-3">
                  <h3 className="font-editorial text-[36px] md:text-[44px] lg:text-[56px] font-light text-white tracking-tight leading-[1.1]">
                    {LEADERS[0].name}
                  </h3>
                </div>

                {/* Featured Quote - Level 03: Plus Jakarta Sans */}
                <div className="relative pl-4 sm:pl-5 border-l-2 border-[#D4AF37] py-0.5">
                  <blockquote className="font-sans text-[20px] md:text-[22px] lg:text-[24px] font-normal italic leading-[1.5] text-white max-w-[700px]">
                    "{LEADERS[0].quote}"
                  </blockquote>
                </div>

                {/* Short Introduction - Level 04: Plus Jakarta Sans */}
                <p className="font-sans text-[16px] md:text-[17px] lg:text-[18px] text-white/90 font-normal leading-relaxed">
                  {LEADERS[0].intro}
                </p>

                {/* Expandable Leadership Message */}
                <AnimatePresence initial={false}>
                  {expanded[LEADERS[0].id] && (
                    <motion.div
                      key="content-0"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pt-3 pb-1 space-y-3.5 border-t border-white/20">
                        {LEADERS[0].fullMessage.slice(1).map((p, i) => (
                          <p
                            key={i}
                            className="font-sans text-[16px] md:text-[17px] lg:text-[18px] text-white/90 font-normal leading-relaxed"
                          >
                            {p}
                          </p>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Read / Hide Button - Level 04: Plus Jakarta Sans */}
                <div className="pt-2">
                  <button
                    onClick={() => toggleExpand(LEADERS[0].id)}
                    onMouseEnter={() => setCursorVariant('pointer')}
                    onMouseLeave={resetCursor}
                    className="group inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full border border-white/35 hover:border-white hover:bg-white hover:text-[#2C1E16] text-white font-sans text-[16px] md:text-[17px] lg:text-[18px] tracking-wide uppercase font-medium transition-all duration-300 cursor-pointer shadow-xs"
                    aria-expanded={Boolean(expanded[LEADERS[0].id])}
                  >
                    <span>
                      {expanded[LEADERS[0].id]
                        ? 'Hide Leadership Message'
                        : 'Read Leadership Message'}
                    </span>
                    {expanded[LEADERS[0].id] ? (
                      <ArrowUp className="w-4 h-4 transition-transform duration-300 group-hover:-translate-y-0.5" />
                    ) : (
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                    )}
                  </button>
                </div>

              </div>

            </div>
          </motion.div>

          {/* CARD 2: AJAY VASWANI */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="bg-[#2C1E16] rounded-[28px] p-6 sm:p-8 lg:p-10 border border-[#4A3728]/50 shadow-[0_20px_50px_rgba(44,30,22,0.18)] text-white"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              
              <div className="lg:col-span-8 xl:col-span-8 space-y-4 order-2 lg:order-1">
                {/* Leader Name - Level 02: Cormorant Garamond */}
                <div className="border-b border-white/20 pb-3">
                  <h3 className="font-editorial text-[36px] md:text-[44px] lg:text-[56px] font-light text-white tracking-tight leading-[1.1]">
                    {LEADERS[1].name}
                  </h3>
                </div>

                {/* Featured Quote - Level 03: Plus Jakarta Sans */}
                <div className="relative pl-4 sm:pl-5 border-l-2 border-[#D4AF37] py-0.5">
                  <blockquote className="font-sans text-[20px] md:text-[22px] lg:text-[24px] font-normal italic leading-[1.5] text-white max-w-[700px]">
                    "{LEADERS[1].quote}"
                  </blockquote>
                </div>

                {/* Short Introduction - Level 04: Plus Jakarta Sans */}
                <p className="font-sans text-[16px] md:text-[17px] lg:text-[18px] text-white/90 font-normal leading-relaxed">
                  {LEADERS[1].intro}
                </p>

                {/* Expandable Leadership Message */}
                <AnimatePresence initial={false}>
                  {expanded[LEADERS[1].id] && (
                    <motion.div
                      key="content-1"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pt-3 pb-1 space-y-3.5 border-t border-white/20">
                        {LEADERS[1].fullMessage.slice(1).map((p, i) => (
                          <p
                            key={i}
                            className="font-sans text-[16px] md:text-[17px] lg:text-[18px] text-white/90 font-normal leading-relaxed"
                          >
                            {p}
                          </p>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Read / Hide Button - Level 04: Plus Jakarta Sans */}
                <div className="pt-2">
                  <button
                    onClick={() => toggleExpand(LEADERS[1].id)}
                    onMouseEnter={() => setCursorVariant('pointer')}
                    onMouseLeave={resetCursor}
                    className="group inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full border border-white/35 hover:border-white hover:bg-white hover:text-[#2C1E16] text-white font-sans text-[16px] md:text-[17px] lg:text-[18px] tracking-wide uppercase font-medium transition-all duration-300 cursor-pointer shadow-xs"
                    aria-expanded={Boolean(expanded[LEADERS[1].id])}
                  >
                    <span>
                      {expanded[LEADERS[1].id]
                        ? 'Hide Leadership Message'
                        : 'Read Leadership Message'}
                    </span>
                    {expanded[LEADERS[1].id] ? (
                      <ArrowUp className="w-4 h-4 transition-transform duration-300 group-hover:-translate-y-0.5" />
                    ) : (
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                    )}
                  </button>
                </div>

              </div>

              {/* Portrait */}
              <div className="lg:col-span-4 xl:col-span-4 order-1 lg:order-2">
                <div
                  className="relative w-full aspect-[4/5] sm:aspect-[1/1] lg:aspect-[4/5] max-h-[380px] overflow-hidden rounded-2xl bg-[#1E140E] shadow-sm group"
                  onMouseEnter={() => setCursorVariant('explore', 'LEADERSHIP')}
                  onMouseLeave={resetCursor}
                >
                  <img
                    src={LEADERS[1].image}
                    alt={LEADERS[1].altText}
                    className="w-full h-full object-cover object-center filter grayscale-[15%] contrast-[1.04] brightness-[0.98] transition-all duration-700 ease-out group-hover:scale-105 group-hover:grayscale-0 group-hover:brightness-100"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2C1E16]/80 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-3.5 right-3.5 flex items-end justify-end pointer-events-auto">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/65 backdrop-blur-md border border-[#D4AF37]/50 shadow-[0_4px_16px_rgba(0,0,0,0.35)] text-white hover:border-[#D4AF37] hover:bg-black/80 hover:scale-[1.03] transition-all duration-300 group/badge cursor-default">
                      <div className="w-5 h-5 rounded-full bg-[#D4AF37]/15 flex items-center justify-center border border-[#D4AF37]/35">
                        <Compass className="w-3 h-3 text-[#D4AF37]" />
                      </div>
                      <span className="font-sans text-[11px] sm:text-[12px] tracking-[0.16em] uppercase font-semibold text-white/95 leading-none">
                        {LEADERS[1].designation}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>

          {/* CARD 3: ANIL ADVANI */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="bg-[#2C1E16] rounded-[28px] p-6 sm:p-8 lg:p-10 border border-[#4A3728]/50 shadow-[0_20px_50px_rgba(44,30,22,0.18)] text-white"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              
              {/* Portrait */}
              <div className="lg:col-span-4 xl:col-span-4">
                <div
                  className="relative w-full aspect-[4/5] sm:aspect-[1/1] lg:aspect-[4/5] max-h-[380px] overflow-hidden rounded-2xl bg-[#1E140E] shadow-sm group"
                  onMouseEnter={() => setCursorVariant('explore', 'LEADERSHIP')}
                  onMouseLeave={resetCursor}
                >
                  <img
                    src={LEADERS[2].image}
                    alt={LEADERS[2].altText}
                    className="w-full h-full object-cover object-center filter grayscale-[15%] contrast-[1.04] brightness-[0.98] transition-all duration-700 ease-out group-hover:scale-105 group-hover:grayscale-0 group-hover:brightness-100"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2C1E16]/80 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-3.5 right-3.5 flex items-end justify-end pointer-events-auto">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/65 backdrop-blur-md border border-[#D4AF37]/50 shadow-[0_4px_16px_rgba(0,0,0,0.35)] text-white hover:border-[#D4AF37] hover:bg-black/80 hover:scale-[1.03] transition-all duration-300 group/badge cursor-default">
                      <div className="w-5 h-5 rounded-full bg-[#D4AF37]/15 flex items-center justify-center border border-[#D4AF37]/35">
                        <Award className="w-3 h-3 text-[#D4AF37]" />
                      </div>
                      <span className="font-sans text-[11px] sm:text-[12px] tracking-[0.16em] uppercase font-semibold text-white/95 leading-none">
                        {LEADERS[2].designation}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="lg:col-span-8 xl:col-span-8 space-y-4">
                {/* Leader Name - Level 02: Cormorant Garamond */}
                <div className="border-b border-white/20 pb-3">
                  <h3 className="font-editorial text-[36px] md:text-[44px] lg:text-[56px] font-light text-white tracking-tight leading-[1.1]">
                    {LEADERS[2].name}
                  </h3>
                </div>

                {/* Featured Quote - Level 03: Plus Jakarta Sans */}
                <div className="relative pl-4 sm:pl-5 border-l-2 border-[#D4AF37] py-0.5">
                  <blockquote className="font-sans text-[20px] md:text-[22px] lg:text-[24px] font-normal italic leading-[1.5] text-white max-w-[700px]">
                    "{LEADERS[2].quote}"
                  </blockquote>
                </div>

                {/* Short Introduction - Level 04: Plus Jakarta Sans */}
                <p className="font-sans text-[16px] md:text-[17px] lg:text-[18px] text-white/90 font-normal leading-relaxed">
                  {LEADERS[2].intro}
                </p>

                {/* Expandable Leadership Message */}
                <AnimatePresence initial={false}>
                  {expanded[LEADERS[2].id] && (
                    <motion.div
                      key="content-2"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pt-3 pb-1 space-y-3.5 border-t border-white/20">
                        {LEADERS[2].fullMessage.slice(1).map((p, i) => (
                          <p
                            key={i}
                            className="font-sans text-[16px] md:text-[17px] lg:text-[18px] text-white/90 font-normal leading-relaxed"
                          >
                            {p}
                          </p>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Read / Hide Button - Level 04: Plus Jakarta Sans */}
                <div className="pt-2">
                  <button
                    onClick={() => toggleExpand(LEADERS[2].id)}
                    onMouseEnter={() => setCursorVariant('pointer')}
                    onMouseLeave={resetCursor}
                    className="group inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full border border-white/35 hover:border-white hover:bg-white hover:text-[#2C1E16] text-white font-sans text-[16px] md:text-[17px] lg:text-[18px] tracking-wide uppercase font-medium transition-all duration-300 cursor-pointer shadow-xs"
                    aria-expanded={Boolean(expanded[LEADERS[2].id])}
                  >
                    <span>
                      {expanded[LEADERS[2].id]
                        ? 'Hide Leadership Message'
                        : 'Read Leadership Message'}
                    </span>
                    {expanded[LEADERS[2].id] ? (
                      <ArrowUp className="w-4 h-4 transition-transform duration-300 group-hover:-translate-y-0.5" />
                    ) : (
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                    )}
                  </button>
                </div>

              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
