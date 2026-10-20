import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useCursor } from '../../context/CursorContext';

interface MilestonePhoto {
  url: string;
  caption: string;
  tag?: string;
}

interface Milestone {
  id: string;
  chapter: string;
  year: string;
  headline: string;
  description: string;
  photos: MilestonePhoto[];
}

const MILESTONES: Milestone[] = [
  {
    id: '1985-1991',
    chapter: '01',
    year: '1985–1991',
    headline: 'Foundations of trust',
    description:
      "Two founders saw opportunity in Mumbai's growing western suburbs and chose to build with discipline from the first day.",
    photos: [
      {
        url: 'https://res.cloudinary.com/ds5s7shuo/image/upload/v1792530848/fe9757b2-36c6-46be-9917-4f46738965cd.png',
        caption: 'Hamara Ghar — An early hallmark residential landmark in Santacruz West',
        tag: 'Santacruz West',
      },
    ],
  },
  {
    id: '1992-2002',
    chapter: '02',
    year: '1992–2002',
    headline: 'Building momentum',
    description:
      "As Mumbai's demand for homes accelerated, the Group grew steadily across key neighbourhoods and became a recognised urban developer.",
    photos: [
      {
        url: 'https://res.cloudinary.com/ds5s7shuo/image/upload/v1790975653/vaswani_belvedere_redesigned_sqvfmt.jpg',
        caption: 'Belvedere — Defining high-rise residential exclusivity in Bandra West',
        tag: 'Bandra West',
      },
    ],
  },
  {
    id: '2003-2013',
    chapter: '03',
    year: '2003–2013',
    headline: 'Urban relevance',
    description:
      'Natural light, smarter planning and design for how families live became part of every development.',
    photos: [
      {
        url: 'https://res.cloudinary.com/ds5s7shuo/image/upload/v1790975652/Sea_Garden.JPG_20261003023534_ookbaq.jpg',
        caption: 'Sea Garden — Bespoke coastal enclaves crafted with panoramic views',
        tag: 'Santacruz West',
      },
    ],
  },
  {
    id: '2014-2024',
    chapter: '04',
    year: '2014–2024',
    headline: 'Growing with the city',
    description:
      "As Mumbai's older neighbourhoods moved towards redevelopment, we reimagined homes across its most sought-after addresses.",
    photos: [
      {
        url: 'https://res.cloudinary.com/ds5s7shuo/image/upload/v1790975654/Vaswani_36_AB.png_20261003022855_om2zjx.jpg',
        caption: '36 AB — Sculptural tower redevelopment on prime Bandra West avenues',
        tag: 'Bandra West',
      },
    ],
  },
  {
    id: '2025-beyond',
    chapter: '05',
    year: '2025 and beyond',
    headline: 'Our testament to the future',
    description:
      'We keep growing with the same credibility and consistency, building families homes that simply feel right.',
    photos: [
      {
        url: 'https://res.cloudinary.com/ds5s7shuo/image/upload/v1779550159/Make_setting_night_time_202605232058_w4cpyk.jpg',
        caption: 'Seascape — Horizon coastal sky villas overlooking the Arabian Sea',
        tag: 'Juhu Oceanfront',
      },
    ],
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
      <div className="w-full max-w-[1440px] mx-auto space-y-10 sm:space-y-12">
        
        {/* ========================================================================= */}
        {/* 1. SECTION TITLE & HEADER                                                 */}
        {/* ========================================================================= */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#135A5C]/15">
          <div className="space-y-3">
            <span className="font-sans text-[15px] sm:text-[16px] md:text-[17px] tracking-[0.25em] uppercase text-[#1A4E40] font-semibold block">
              OUR JOURNEY
            </span>
            <h2 className="font-editorial text-[36px] md:text-[44px] lg:text-[56px] font-light leading-[1.1] text-[#135A5C] tracking-tight">
              Four decades of building what matters.
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
        {/* 2. CLICKABLE YEAR TABS                                                    */}
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
                className={`relative px-5 py-2.5 rounded-full font-sans text-[15px] md:text-[16px] tracking-wide uppercase font-medium whitespace-nowrap transition-all duration-300 cursor-pointer flex-shrink-0 ${
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
                  <span
                    className={`w-2 h-2 rounded-full ${
                      isActive ? 'bg-[#E8D6C5]' : 'bg-[#135A5C]/30'
                    }`}
                  />
                  <span>{m.year}</span>
                </span>
              </button>
            );
          })}
        </nav>

        {/* ========================================================================= */}
        {/* 3. SLIDE CONTAINER                                                        */}
        {/* ========================================================================= */}
        <div className="relative min-h-[220px]">
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
              className="w-full bg-white border border-[#135A5C]/20 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-[0_20px_50px_rgba(19,90,92,0.08)] text-left"
            >
              <div className="max-w-3xl space-y-5 py-2 sm:py-4">
                {/* Chapter & Inscribed Era */}
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span className="font-sans text-[14px] sm:text-[15px] tracking-[0.25em] uppercase text-[#1A4E40] font-semibold">
                      CHAPTER {activeMilestone.chapter}
                    </span>
                    <span className="w-8 h-[1px] bg-[#1A4E40]/30" />
                    <span className="font-editorial text-[26px] sm:text-[32px] text-[#135A5C] font-light">
                      {activeMilestone.year}
                    </span>
                  </div>
                </div>

                {/* Chapter Title */}
                <h3 className="font-editorial text-[32px] sm:text-[40px] lg:text-[48px] font-normal leading-[1.15] text-[#135A5C] tracking-tight">
                  {activeMilestone.headline}
                </h3>

                {/* Lead Narrative */}
                <p className="font-sans text-[17px] sm:text-[19px] lg:text-[20px] text-[#2C4A40] font-normal leading-relaxed max-w-2xl">
                  {activeMilestone.description}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
