import React from 'react';
import { motion } from 'motion/react';
import { useCursor } from '../../context/CursorContext';

interface PurposeCard {
  id: string;
  eyebrow: string;
  title: string;
  statement: string;
}

const PURPOSE_CARDS: PurposeCard[] = [
  {
    id: 'mission',
    eyebrow: 'OUR MISSION',
    title: 'Mission',
    statement:
      'To craft iconic developments and thriving communities, driven by global standards, superior craftsmanship, and enduring excellence.',
  },
  {
    id: 'vision',
    eyebrow: 'OUR VISION',
    title: 'Vision',
    statement:
      'To be the benchmark of exceptional living, characterised by bespoke designs, elevated experiences, and a legacy of enduring excellence.',
  },
];

export const WhatWeStandFor: React.FC = () => {
  const { setCursorVariant, resetCursor } = useCursor();

  return (
    <section
      id="what-we-stand-for"
      className="relative w-full text-[#152E28] py-20 sm:py-24 lg:py-28 px-6 sm:px-10 lg:px-16 border-t border-[#152E28]/10 select-none overflow-hidden"
      aria-label="Our Purpose — Mission and Vision"
    >
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[#152E28]/[0.02] rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-[1400px] mx-auto space-y-12 sm:space-y-16">
        
        {/* ========================================================================= */}
        {/* SECTION HEADER                                                            */}
        {/* ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl space-y-4"
        >
          <span className="font-sans text-[16px] md:text-[17px] lg:text-[18px] tracking-[0.25em] uppercase text-[#8E6B47] font-semibold block">
            OUR PURPOSE
          </span>

          {/* Section Heading - Level 02: Cormorant Garamond 56px desktop, 44px tablet, 36px mobile */}
          <h2 className="font-editorial text-[36px] md:text-[44px] lg:text-[56px] font-light leading-[1.1] text-[#152E28] tracking-tight">
            Guided by Purpose. <span className="italic font-normal text-[#8E6B47]">Driven by Vision.</span>
          </h2>

          {/* Lead Paragraph - Level 03: Plus Jakarta Sans 24px desktop, 22px tablet, 20px mobile */}
          <p className="font-sans text-[20px] md:text-[22px] lg:text-[24px] text-[#152E28]/75 font-light leading-[1.5] max-w-[700px]">
            The principles that shape every decision we make, from thoughtful design to lasting communities.
          </p>
        </motion.div>

        {/* ========================================================================= */}
        {/* TWO EQUALLY SIZED SIDE-BY-SIDE PURPOSE CARDS (MISSION & VISION)           */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
          {PURPOSE_CARDS.map((card, index) => {
            return (
              <motion.article
                key={card.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.12,
                  ease: [0.16, 1, 0.3, 1],
                }}
                onMouseEnter={() => setCursorVariant('pointer')}
                onMouseLeave={resetCursor}
                className="group relative bg-[#152E28] text-white rounded-[24px] p-8 sm:p-10 lg:p-12 border border-[#152E28] shadow-[0_16px_40px_-12px_rgba(21,46,40,0.35)] hover:shadow-[0_22px_48px_-10px_rgba(21,46,40,0.45)] hover:-translate-y-1 transition-all duration-500 ease-out flex flex-col justify-between"
              >
                {/* Top Section: Header */}
                <div className="space-y-6 sm:space-y-8">
                  {/* Card Title - Level 02: Cormorant Garamond */}
                  <h3 className="font-editorial text-[36px] md:text-[44px] lg:text-[56px] font-light text-white tracking-tight leading-[1.1]">
                    {card.title}
                  </h3>
                </div>

                {/* Statement Body - Level 03: Plus Jakarta Sans */}
                <div className="pt-8 sm:pt-10">
                  <div className="w-12 h-[1px] bg-white/25 mb-6" />
                  <p className="font-sans text-[20px] md:text-[22px] lg:text-[24px] text-white/90 font-light leading-[1.5] max-w-[700px]">
                    {card.statement}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>

      </div>
    </section>
  );
};
