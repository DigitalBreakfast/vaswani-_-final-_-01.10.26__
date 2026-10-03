import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useCursor } from '../../context/CursorContext';

interface Milestone {
  id: string;
  chapter: string;
  year: string;
  headline: string;
  description: string;
  badge: string;
}

const MILESTONES: Milestone[] = [
  {
    id: '1981-1991',
    chapter: '01',
    year: '1981–1991',
    headline: 'Foundations of Trust',
    description:
      "Vaswani Group was founded by Mr. Ramesh Vaswani and Mr. Maniklal Vaswani, who saw opportunity in Mumbai's growing western suburbs and chose to build with discipline from day one. Committed to ensuring structural integrity, transparency, and reliable delivery, their vision became the enduring foundation of the Group.",
    badge: 'FOUNDATIONS OF TRUST',
  },
  {
    id: '1992-2002',
    chapter: '02',
    year: '1992–2002',
    headline: 'Building Momentum with Discipline',
    description:
      "As Mumbai's housing demand accelerated, Vaswani Group expanded steadily across key neighbourhoods, refining delivery systems and focusing on long-term relationships, to evolve from a dependable local builder into a recognised urban developer.",
    badge: 'MOMENTUM WITH DISCIPLINE',
  },
  {
    id: '2003-2013',
    chapter: '03',
    year: '2003–2013',
    headline: 'Urban Relevance',
    description:
      "With Mumbai's skyline rising, design maturity became the next step in the Group's journey towards building homes for future homeowners, integrating smarter space planning, natural light, and lifestyle-conscious planning into every development.",
    badge: 'URBAN RELEVANCE',
  },
  {
    id: '2014-2024',
    chapter: '04',
    year: '2014–2024',
    headline: 'Growing with the City',
    description:
      "As Mumbai's older precincts moved towards redevelopment, Vaswani Group reimagined residences across the city's prime micromarkets, with a focus on elevating engineering standards, structural sophistication, and living experiences.",
    badge: 'GROWING WITH THE CITY',
  },
  {
    id: '2025-beyond',
    chapter: '05',
    year: '2025 & Beyond',
    headline: 'Today, Our Testament to the Future',
    description:
      "As we continue to strengthen and scale, Vaswani Group remains grounded in credibility and consistency, ensuring our growth always keeps in focus what matters most to us: building families homes that simply feel right.",
    badge: 'TESTAMENT TO THE FUTURE',
  },
];

export const Timeline: React.FC = () => {
  const { setCursorVariant, resetCursor } = useCursor();
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [direction, setDirection] = useState<number>(1);

  const handleSelect = (index: number) => {
    if (index === currentIndex) return;
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setDirection(-1);
      setCurrentIndex(currentIndex - 1);
    } else {
      setDirection(-1);
      setCurrentIndex(MILESTONES.length - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < MILESTONES.length - 1) {
      setDirection(1);
      setCurrentIndex(currentIndex + 1);
    } else {
      setDirection(1);
      setCurrentIndex(0);
    }
  };

  const activeMilestone = MILESTONES[currentIndex];

  return (
    <section
      id="four-decades-timeline"
      className="relative w-full text-[#135A5C] py-24 sm:py-32 lg:py-36 px-6 sm:px-10 lg:px-16 select-none overflow-hidden"
      aria-label="Four Decades of Progress Carousel"
    >
      <div className="w-full max-w-[1440px] mx-auto space-y-12 sm:space-y-16">
        
        {/* ========================================================================= */}
        {/* 1. SECTION TITLE & HEADER                                                 */}
        {/* ========================================================================= */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#135A5C]/15">
          <div className="space-y-2">
            {/* Section Heading - Level 02: Cormorant Garamond 56px desktop, 44px tablet, 36px mobile */}
            <h2 className="font-editorial text-[36px] md:text-[44px] lg:text-[56px] font-light leading-[1.1] text-[#135A5C] tracking-tight">
              Four Decades of <span className="italic font-normal text-[#1A4E40]">Progress</span>
            </h2>
          </div>

          {/* Controls: Prev / Next buttons + Chapter Indicator */}
          <div className="flex items-center gap-6 self-start md:self-end">
            <div className="font-sans text-[16px] md:text-[17px] lg:text-[18px] tracking-wide text-[#5A756C] uppercase">
              <span className="text-[#135A5C] font-semibold">{activeMilestone.chapter}</span>
              <span className="mx-2 text-[#135A5C]/30">/</span>
              <span>0{MILESTONES.length}</span>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={handlePrev}
                aria-label="Previous Chapter"
                onMouseEnter={() => setCursorVariant('pointer')}
                onMouseLeave={resetCursor}
                className="w-11 h-11 rounded-full border border-[#135A5C]/25 hover:border-[#135A5C] hover:bg-[#135A5C] hover:text-white text-[#135A5C] flex items-center justify-center transition-all duration-300 cursor-pointer shadow-xs"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next Chapter"
                onMouseEnter={() => setCursorVariant('pointer')}
                onMouseLeave={resetCursor}
                className="w-11 h-11 rounded-full border border-[#135A5C]/25 hover:border-[#135A5C] hover:bg-[#135A5C] hover:text-white text-[#135A5C] flex items-center justify-center transition-all duration-300 cursor-pointer shadow-xs"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 2. CLICKABLE YEAR TABS - Level 04: Plus Jakarta Sans                       */}
        {/* ========================================================================= */}
        <nav
          aria-label="Timeline Chapters Navigation"
          className="flex items-center gap-2 sm:gap-3 overflow-x-auto no-scrollbar pb-2 pt-1"
        >
          {MILESTONES.map((m, idx) => {
            const isActive = currentIndex === idx;
            return (
              <button
                key={m.id}
                onClick={() => handleSelect(idx)}
                onMouseEnter={() => setCursorVariant('pointer')}
                onMouseLeave={resetCursor}
                className={`relative px-5 py-2.5 rounded-full font-sans text-[16px] md:text-[17px] lg:text-[18px] tracking-wide uppercase font-medium whitespace-nowrap transition-all duration-300 cursor-pointer flex-shrink-0 ${
                  isActive
                    ? 'text-white'
                    : 'text-[#5A756C] hover:text-[#135A5C] hover:bg-[#135A5C]/5'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTimelineTab"
                    transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute inset-0 bg-[#135A5C] border-2 border-[#135A5C] rounded-full shadow-md"
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  <span className={`w-2 h-2 rounded-full ${isActive ? 'bg-[#E8D6C5]' : 'bg-[#135A5C]/30'}`} />
                  <span>{m.year}</span>
                </span>
              </button>
            );
          })}
        </nav>

        {/* ========================================================================= */}
        {/* 3. CAROUSEL SLIDE CONTAINER WITH CLEAN EDITORIAL LAYOUT (IMAGE-FREE)       */}
        {/* ========================================================================= */}
        <div className="relative min-h-[340px] sm:min-h-[360px]">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={activeMilestone.id}
              initial={{ opacity: 0, x: direction * 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -direction * 40 }}
              transition={{ duration: 0.45, ease: [0.25, 1, 0.5, 1] }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={(_, info) => {
                const swipeThreshold = 50;
                if (info.offset.x < -swipeThreshold) {
                  handleNext();
                } else if (info.offset.x > swipeThreshold) {
                  handlePrev();
                }
              }}
              className="w-full bg-[#FAF8F5]/90 border-2 sm:border-[3px] border-[#135A5C] rounded-2xl p-8 sm:p-12 lg:p-16 shadow-[0_12px_40px_-15px_rgba(19,90,92,0.14)] text-left"
            >
              <div className="max-w-4xl space-y-6 sm:space-y-8">
                
                {/* Chapter, Prominent Year & Inscribed Era Badge */}
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className="font-sans text-[16px] md:text-[17px] lg:text-[18px] tracking-[0.25em] uppercase text-[#1A4E40] font-semibold">
                      CHAPTER {activeMilestone.chapter}
                    </span>
                    <span className="w-8 h-[1px] bg-[#1A4E40]/30" />
                    <span className="font-editorial text-[26px] sm:text-[32px] text-[#135A5C] font-light">
                      {activeMilestone.year}
                    </span>
                  </div>

                  <span className="px-4 py-1.5 rounded-full bg-[#135A5C]/8 border border-[#135A5C]/15 text-[14px] sm:text-[15px] font-sans tracking-wide uppercase text-[#135A5C] font-medium">
                    {activeMilestone.badge}
                  </span>
                </div>

                {/* Chapter Title */}
                <h3 className="font-editorial text-[36px] md:text-[44px] lg:text-[56px] font-normal leading-[1.1] text-[#135A5C] tracking-tight">
                  {activeMilestone.headline}
                </h3>

                {/* Lead Paragraph */}
                <p className="font-sans text-[20px] md:text-[22px] lg:text-[24px] text-[#2C4A40] font-light leading-[1.6]">
                  {activeMilestone.description}
                </p>

                {/* Minimal Footer Monograph Indicator */}
                <div className="pt-6 border-t border-[#135A5C]/15 flex items-center justify-between text-[16px] md:text-[17px] lg:text-[18px] font-sans text-[#5A756C] tracking-wide uppercase">
                  <span>VASWANI GROUP HERITAGE</span>
                  <span className="text-[#1A4E40] font-medium">{currentIndex + 1} OF {MILESTONES.length}</span>
                </div>

              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
