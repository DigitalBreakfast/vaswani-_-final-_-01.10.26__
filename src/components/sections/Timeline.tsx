import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowLeft,
  ArrowRight,
  Camera,
  Images,
  MapPin,
  CheckCircle2,
} from 'lucide-react';
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
  badge: string;
  highlights: string[];
  photos: MilestonePhoto[];
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
    highlights: [
      "Founded by Ramesh & Maniklal Vaswani in Mumbai's western suburban corridor",
      'Established foundational principles of structural integrity and clear title assurances',
    ],
    photos: [
      {
        url: 'https://res.cloudinary.com/ds5s7shuo/image/upload/v1790975652/Hamara_Ghar.jpg_20261003023231_b71vrf.jpg',
        caption: 'Hamara Ghar — An early hallmark residential landmark in Santacruz West',
        tag: 'Santacruz West',
      },
      {
        url: 'https://images.unsplash.com/photo-1541888946425-d0fbb18f1563?auto=format&fit=crop&w=1200&q=85',
        caption: 'Rigorous engineering foundations and handcrafted stone construction',
        tag: 'Heritage Craft',
      },
    ],
  },
  {
    id: '1992-2002',
    chapter: '02',
    year: '1992–2002',
    headline: 'Building Momentum with Discipline',
    description:
      "As Mumbai's housing demand accelerated, Vaswani Group expanded steadily across key neighbourhoods, refining delivery systems and focusing on long-term relationships, to evolve from a dependable local builder into a recognised urban developer.",
    badge: 'MOMENTUM WITH DISCIPLINE',
    highlights: [
      'Pioneered prime developments in Bandra West and high-growth suburban corridors',
      'Scaled civil execution with precision schedules and multi-tier quality checks',
    ],
    photos: [
      {
        url: 'https://res.cloudinary.com/ds5s7shuo/image/upload/v1790975653/vaswani_belvedere_redesigned_sqvfmt.jpg',
        caption: 'Belvedere — Defining high-rise residential exclusivity in Bandra West',
        tag: 'Bandra West',
      },
      {
        url: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=85',
        caption: 'Urban skyline presence expanding across Mumbai’s prime western suburbs',
        tag: 'Suburban Growth',
      },
    ],
  },
  {
    id: '2003-2013',
    chapter: '03',
    year: '2003–2013',
    headline: 'Urban Relevance',
    description:
      "With Mumbai's skyline rising, design maturity became the next step in the Group's journey towards building homes for future homeowners, integrating smarter space planning, natural light, and lifestyle-conscious planning into every development.",
    badge: 'URBAN RELEVANCE',
    highlights: [
      'Integrated biophilic cross-ventilation and natural daylight into every floor plan',
      'Constructed landmark coastal and prime residential enclaves with enduring architecture',
    ],
    photos: [
      {
        url: 'https://res.cloudinary.com/ds5s7shuo/image/upload/v1790975652/Sea_Garden.JPG_20261003023534_ookbaq.jpg',
        caption: 'Sea Garden — Bespoke coastal enclaves crafted with panoramic views',
        tag: 'Santacruz West',
      },
      {
        url: 'https://res.cloudinary.com/ds5s7shuo/image/upload/v1790975652/Exotica.png_20261003023004_ukmw81.jpg',
        caption: 'Exotica — Contemporary architectural residences tailored for Bandra West',
        tag: 'Bandra West',
      },
    ],
  },
  {
    id: '2014-2024',
    chapter: '04',
    year: '2014–2024',
    headline: 'Growing with the City',
    description:
      "As Mumbai's older precincts moved towards redevelopment, Vaswani Group reimagined residences across the city's prime micromarkets, with a focus on elevating engineering standards, structural sophistication, and living experiences.",
    badge: 'GROWING WITH THE CITY',
    highlights: [
      'Spearheaded luxury redevelopment landmarks across Bandra, Khar, and Kandivali',
      'Delivered celebrated contemporary high-rises including 36 AB, Bel Air, and Vista One',
    ],
    photos: [
      {
        url: 'https://res.cloudinary.com/ds5s7shuo/image/upload/v1790975654/Vaswani_36_AB.png_20261003022855_om2zjx.jpg',
        caption: '36 AB — Sculptural tower redevelopment on prime Bandra West avenues',
        tag: 'Bandra West',
      },
      {
        url: 'https://res.cloudinary.com/ds5s7shuo/image/upload/v1790975654/vista_one_vaswani_d8lkkw.jpg',
        caption: 'Vista One — Exemplary mastercrafted residential project in Kandivali West',
        tag: 'Kandivali West',
      },
      {
        url: 'https://res.cloudinary.com/ds5s7shuo/image/upload/v1790975653/Ira_Chhaya.jpg_20261003023150_xj6tz7.jpg',
        caption: 'IRA Chhaya — Boutique luxury floorplates in the heart of Khar West',
        tag: 'Khar West',
      },
      {
        url: 'https://res.cloudinary.com/ds5s7shuo/image/upload/v1790975653/Vaswani_Bel_Air.png_20261003022620_cwxncm.jpg',
        caption: 'Bel Air — Timeless proportions and acoustic calm delivered in Bandra West',
        tag: 'Bandra West',
      },
    ],
  },
  {
    id: '2025-beyond',
    chapter: '05',
    year: '2025 & Beyond',
    headline: 'Today, Our Testament to the Future',
    description:
      "As we continue to strengthen and scale, Vaswani Group remains grounded in credibility and consistency, ensuring our growth always keeps in focus what matters most to us: building families homes that simply feel right.",
    badge: 'TESTAMENT TO THE FUTURE',
    highlights: [
      'Ultra-luxury coastal sky villas and next-generation smart sustainable developments',
      'Four decades of generational homeowner trust guiding future skyline expansions',
    ],
    photos: [
      {
        url: 'https://res.cloudinary.com/ds5s7shuo/image/upload/v1779550159/Make_setting_night_time_202605232058_w4cpyk.jpg',
        caption: 'Seascape — Horizon coastal sky villas overlooking the Arabian Sea',
        tag: 'Juhu Oceanfront',
      },
      {
        url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85',
        caption: 'Verano / Montclaire — Next-generation biophilic residential sanctuary',
        tag: 'Bandra West',
      },
    ],
  },
];

export const Timeline: React.FC = () => {
  const { setCursorVariant, resetCursor } = useCursor();
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedPhotoIdx, setSelectedPhotoIdx] = useState<number>(0);
  const [direction, setDirection] = useState<number>(1);

  const handleSelect = (index: number) => {
    if (index === currentIndex) return;
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
    setSelectedPhotoIdx(0);
  };

  const handlePrev = () => {
    setSelectedPhotoIdx(0);
    if (currentIndex > 0) {
      setDirection(-1);
      setCurrentIndex(currentIndex - 1);
    } else {
      setDirection(-1);
      setCurrentIndex(MILESTONES.length - 1);
    }
  };

  const handleNext = () => {
    setSelectedPhotoIdx(0);
    if (currentIndex < MILESTONES.length - 1) {
      setDirection(1);
      setCurrentIndex(currentIndex + 1);
    } else {
      setDirection(1);
      setCurrentIndex(0);
    }
  };

  const activeMilestone = MILESTONES[currentIndex];
  const currentPhoto =
    activeMilestone.photos[selectedPhotoIdx] || activeMilestone.photos[0];

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
          <div className="space-y-2">
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
        {/* 3. REDESIGNED SLIDE CONTAINER WITH INTEGRATED PHOTO SECTION               */}
        {/* ========================================================================= */}
        <div className="relative min-h-[460px]">
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
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                
                {/* ───────────────────────────────────────────────────────────── */}
                {/* LEFT: Chapter Details & Narrative (7 cols)                    */}
                {/* ───────────────────────────────────────────────────────────── */}
                <div className="lg:col-span-7 space-y-6 flex flex-col justify-between h-full">
                  <div className="space-y-5">
                    
                    {/* Chapter & Inscribed Era Badge */}
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

                      <span className="px-3.5 py-1.5 rounded-full bg-[#135A5C]/8 border border-[#135A5C]/15 text-[12px] sm:text-[13px] font-sans tracking-wide uppercase text-[#135A5C] font-medium">
                        {activeMilestone.badge}
                      </span>
                    </div>

                    {/* Chapter Title */}
                    <h3 className="font-editorial text-[32px] sm:text-[40px] lg:text-[46px] font-normal leading-[1.15] text-[#135A5C] tracking-tight">
                      {activeMilestone.headline}
                    </h3>

                    {/* Lead Narrative */}
                    <p className="font-sans text-[16px] sm:text-[18px] text-[#2C4A40] font-normal leading-relaxed">
                      {activeMilestone.description}
                    </p>

                    {/* Highlights Points */}
                    {activeMilestone.highlights && activeMilestone.highlights.length > 0 && (
                      <div className="pt-2 space-y-2.5">
                        <span className="text-[12px] font-sans tracking-[0.2em] uppercase text-[#135A5C]/70 font-semibold block">
                          Era Hallmarks & Milestones
                        </span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                          {activeMilestone.highlights.map((h, hIdx) => (
                            <div
                              key={hIdx}
                              className="flex items-start gap-2.5 p-3 rounded-xl bg-[#135A5C]/4 border border-[#135A5C]/10 text-[13px] sm:text-[14px] text-[#1A4E40]"
                            >
                              <CheckCircle2 className="w-4 h-4 text-[#135A5C] shrink-0 mt-0.5" />
                              <span className="font-sans leading-snug">{h}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Card Footer Monograph Indicator */}
                  <div className="pt-6 border-t border-[#135A5C]/15 flex items-center justify-between text-[13px] sm:text-[14px] font-sans text-[#5A756C] tracking-wide uppercase">
                    <div className="flex items-center gap-2">
                      <Images className="w-4 h-4 text-[#135A5C]" />
                      <span>VASWANI GROUP HERITAGE</span>
                    </div>
                    <span className="text-[#1A4E40] font-medium">
                      CHAPTER {currentIndex + 1} OF {MILESTONES.length}
                    </span>
                  </div>
                </div>

                {/* ───────────────────────────────────────────────────────────── */}
                {/* RIGHT: Dedicated Photos Showcase (5 cols)                      */}
                {/* ───────────────────────────────────────────────────────────── */}
                <div className="lg:col-span-5 space-y-3.5">
                  
                  {/* Photo Section Header */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-[#135A5C] font-sans text-[12px] sm:text-[13px] tracking-[0.2em] uppercase font-semibold">
                      <Camera className="w-3.5 h-3.5 text-[#135A5C]" />
                      <span>Era Landmarks & Archives</span>
                    </div>
                    <span className="text-[12px] font-sans text-[#5A756C] font-medium">
                      {selectedPhotoIdx + 1} of {activeMilestone.photos.length}
                    </span>
                  </div>

                  {/* Featured Main Photo Frame */}
                  <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] w-full rounded-2xl overflow-hidden bg-[#135A5C]/10 border border-[#135A5C]/20 shadow-md group">
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={`${activeMilestone.id}-${selectedPhotoIdx}`}
                        src={currentPhoto.url}
                        alt={currentPhoto.caption}
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        loading="lazy"
                      />
                    </AnimatePresence>

                    {/* Location Badge */}
                    {currentPhoto.tag && (
                      <div className="absolute top-3.5 left-3.5 z-10">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white border border-white/20 text-[11px] font-sans tracking-wider uppercase font-medium shadow-sm">
                          <MapPin className="w-3 h-3 text-[#E8D6C5]" />
                          {currentPhoto.tag}
                        </span>
                      </div>
                    )}

                    {/* Gradient Overlay for Caption */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />

                    {/* Caption Bar */}
                    <div className="absolute bottom-3 left-3 right-3 z-10">
                      <div className="p-3 rounded-xl bg-black/60 backdrop-blur-md border border-white/15 text-white">
                        <p className="font-sans text-[13px] sm:text-[14px] font-normal leading-snug line-clamp-2">
                          {currentPhoto.caption}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Thumbnail Selector Row if era has multiple photos */}
                  {activeMilestone.photos.length > 1 && (
                    <div className="grid grid-cols-2 gap-2.5 pt-1">
                      {activeMilestone.photos.map((photo, pIdx) => {
                        const isSelected = selectedPhotoIdx === pIdx;
                        return (
                          <button
                            key={pIdx}
                            type="button"
                            onClick={() => setSelectedPhotoIdx(pIdx)}
                            onMouseEnter={() => setCursorVariant('pointer')}
                            onMouseLeave={resetCursor}
                            className={`relative h-20 rounded-xl overflow-hidden border-2 transition-all duration-300 cursor-pointer text-left group/thumb ${
                              isSelected
                                ? 'border-[#135A5C] ring-2 ring-[#135A5C]/25 shadow-sm'
                                : 'border-[#135A5C]/20 opacity-75 hover:opacity-100 hover:border-[#135A5C]/50'
                            }`}
                          >
                            <img
                              src={photo.url}
                              alt={photo.caption}
                              className="w-full h-full object-cover group-hover/thumb:scale-105 transition-transform duration-500"
                            />
                            <div
                              className={`absolute inset-0 transition-opacity ${
                                isSelected
                                  ? 'bg-gradient-to-t from-black/80 via-transparent to-transparent'
                                  : 'bg-black/40 hover:bg-black/15'
                              }`}
                            />
                            <span className="absolute bottom-1.5 left-2 right-2 text-[11px] font-sans text-white font-medium truncate block">
                              {photo.tag || `Photo 0${pIdx + 1}`}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  )}

                </div>

              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
