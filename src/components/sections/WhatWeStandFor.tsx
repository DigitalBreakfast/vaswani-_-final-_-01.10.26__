import React, { useState } from 'react';
import { motion } from 'motion/react';
import { useCursor } from '../../context/CursorContext';

interface PrincipleItem {
  id: string;
  number: string;
  title: string;
  statement: string;
}

const PRINCIPLES: PrincipleItem[] = [
  {
    id: 'integrity',
    number: '01',
    title: 'Integrity',
    statement: 'We keep our promises and stay open at every step.',
  },
  {
    id: 'reliability',
    number: '02',
    title: 'Reliability',
    statement:
      'We plan to honour timelines, and on some projects have handed over ahead of schedule.',
  },
  {
    id: 'customer-centricity',
    number: '03',
    title: 'Customer-centricity',
    statement:
      'We build spaces that enrich everyday life, and we keep the journey clear and supported.',
  },
  {
    id: 'accountability',
    number: '04',
    title: 'Accountability',
    statement: 'We stand behind what we build.',
  },
  {
    id: 'value-creation',
    number: '05',
    title: 'Value creation',
    statement: 'We build lasting value for homeowners and partners alike.',
  },
];

export const WhatWeStandFor: React.FC = () => {
  const { setCursorVariant, resetCursor } = useCursor();
  const [activeId, setActiveId] = useState<string | null>(null);

  const toggleActive = (id: string) => {
    setActiveId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="what-we-stand-for"
      className="relative w-full text-[#1C443B] py-20 sm:py-24 lg:py-28 px-6 sm:px-10 lg:px-16 border-t border-[#1C443B]/10 select-none overflow-hidden"
      aria-label="Our Purpose — Five Principles"
    >
      {/* Subtle architectural ambient light */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[340px] bg-[#1C443B]/[0.02] rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-[1400px] mx-auto space-y-12 sm:space-y-14">
        
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
          <span className="font-sans text-[15px] sm:text-[16px] md:text-[17px] tracking-[0.25em] uppercase text-[#8E6B47] font-semibold block">
            OUR PURPOSE
          </span>

          {/* Section Heading - Level 02: Cormorant Garamond */}
          <h2 className="font-editorial text-[36px] md:text-[44px] lg:text-[56px] font-light leading-[1.1] text-[#1C443B] tracking-tight">
            What we hold ourselves to.
          </h2>

          {/* Lead Paragraph - Level 03: Plus Jakarta Sans */}
          <p className="font-sans text-[19px] md:text-[21px] lg:text-[23px] text-[#1C443B]/75 font-light leading-[1.5] max-w-[700px]">
            Five principles. Every decision we make answers to them.
          </p>
        </motion.div>

        {/* ========================================================================= */}
        {/* FIVE PERFECTLY ALIGNED PRINCIPLE CARDS                                    */}
        {/* ========================================================================= */}
        <div className="space-y-4 sm:space-y-5">
          {PRINCIPLES.map((card, index) => {
            const isActive = activeId === card.id;

            return (
              <motion.article
                key={card.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.07,
                  ease: [0.16, 1, 0.3, 1],
                }}
                onClick={() => toggleActive(card.id)}
                onMouseEnter={() => setCursorVariant('explore', card.title)}
                onMouseLeave={resetCursor}
                className={`group relative bg-[#1C443B] text-white rounded-[20px] sm:rounded-[24px] p-6 sm:p-8 lg:px-10 lg:py-7 border transition-all duration-400 ease-out overflow-hidden cursor-pointer ${
                  isActive
                    ? 'border-[#C5A880] ring-1 ring-[#C5A880]/50 shadow-[0_20px_50px_rgba(28,68,59,0.38)] -translate-y-1'
                    : 'border-[#235348] hover:border-[#C5A880]/60 shadow-[0_10px_30px_rgba(28,68,59,0.18)] hover:shadow-[0_18px_44px_rgba(28,68,59,0.3)] hover:-translate-y-1'
                }`}
              >
                {/* Subtle warm ambient highlight in the corner */}
                <div className="absolute -top-20 -right-20 w-44 h-44 bg-[#C5A880]/[0.06] rounded-full blur-2xl group-hover:bg-[#C5A880]/[0.14] transition-all duration-500 pointer-events-none" />

                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-center">
                  
                  {/* Left Column (5 of 12 cols): Numeral + Title aligned on same baseline */}
                  <div className="lg:col-span-5 flex items-baseline gap-5 sm:gap-6">
                    <span className="font-editorial text-[36px] sm:text-[40px] lg:text-[44px] font-light text-[#C5A880] leading-none shrink-0 w-12 sm:w-14">
                      {card.number}
                    </span>
                    <h3 className="font-editorial text-[26px] sm:text-[30px] lg:text-[34px] font-light text-white tracking-tight leading-[1.2] group-hover:text-[#FAF8F5] transition-colors">
                      {card.title}
                    </h3>
                  </div>

                  {/* Right Column (7 of 12 cols): Aligned statement with quiet hairline divider */}
                  <div className="lg:col-span-7 lg:pl-8 lg:border-l lg:border-white/15 group-hover:border-[#C5A880]/35 transition-colors">
                    <p className="font-sans text-[16px] sm:text-[17px] lg:text-[18px] text-white/85 font-light leading-[1.6] max-w-xl">
                      {card.statement}
                    </p>
                  </div>

                </div>
              </motion.article>
            );
          })}
        </div>

      </div>
    </section>
  );
};
