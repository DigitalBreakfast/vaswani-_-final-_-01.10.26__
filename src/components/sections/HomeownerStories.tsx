import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';
import { useCursor } from '../../context/CursorContext';

interface Testimonial {
  id: string;
  index: string;
  quote: string;
  author: string;
  project: string;
  location: string;
  year?: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: 'story-1',
    index: '01',
    quote:
      'From the very first interaction to the day we moved in, every detail felt thoughtful. It never felt like buying a house—it felt like finding the right home.',
    author: 'Vikram & Radhika Singhal',
    project: 'Vaswani Seascape',
    location: 'Coastal Enclave',
    year: 'Resident since 2021',
  },
  {
    id: 'story-2',
    index: '02',
    quote:
      'The architectural discipline is unmatched. Natural light enters in the purest ways, framing our family mornings with effortless quietness.',
    author: 'Arjun & Smriti Kapur',
    project: 'Vaswani Reserve',
    location: 'Sky Mansions',
    year: 'Resident since 2022',
  },
  {
    id: 'story-3',
    index: '03',
    quote:
      'Four decades of reputation is written into the acoustic silence, the enduring stonework, and the dignity of the space.',
    author: 'Dr. Naresh & Kavita Iyer',
    project: 'Vaswani Whispering Palms',
    location: 'Garden Estate',
    year: 'Resident since 2018',
  },
  {
    id: 'story-4',
    index: '04',
    quote:
      'Living here feels like stepping into a sanctuary designed solely around the rhythm of calm breezes and timeless proportion.',
    author: 'Priya & Rohit Deshmukh',
    project: 'Vaswani Menlo Park',
    location: 'Whitefield',
    year: 'Resident since 2023',
  },
  {
    id: 'story-5',
    index: '05',
    quote:
      'We surveyed luxury developments across Mumbai and Bangalore. Only Vaswani delivered true understated elegance without excess.',
    author: 'Siddharth & Ananya Mehta',
    project: 'Vaswani Walnut Creek',
    location: 'Heritage Enclave',
    year: 'Resident since 2020',
  },
  {
    id: 'story-6',
    index: '06',
    quote:
      'There is an unspoken reverence in the way spaces flow. They respect silence and proportion as much as square footage.',
    author: 'Tara & Vikram Mehra',
    project: 'Vaswani Bel Air',
    location: 'Bandra West',
    year: 'Resident since 2024',
  },
];

export const HomeownerStories: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const { setCursorVariant, resetCursor } = useCursor();
  const carouselRef = useRef<HTMLDivElement>(null);

  const total = TESTIMONIALS.length;

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % total);
  }, [total]);

  const prevSlide = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  // Gentle autoplay with pause on hover
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 6500);
    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  return (
    <section
      id="testimonials"
      className="relative w-full bg-[#FAF8F5] text-[#135A5C] py-24 sm:py-32 lg:py-40 select-none overflow-hidden border-t border-[#135A5C]/10"
      aria-label="What Our Homeowners Say"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Subtle architectural hairline accents in background */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-[#135A5C]/5 via-[#135A5C]/10 to-transparent" />
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-[#135A5C]/5 via-[#135A5C]/10 to-transparent" />
      </div>

      <div className="relative w-full max-w-[1380px] mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* ───────────────────────────────────────────────────────────── */}
        {/* HEADER: Sleek, Minimalist, Architectural Quiet Luxury        */}
        {/* ───────────────────────────────────────────────────────────── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-12 sm:pb-16 border-b border-[#135A5C]/10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl"
          >
            <h2 className="font-editorial text-[38px] sm:text-[48px] lg:text-[58px] font-light leading-[1.08] text-[#135A5C] tracking-tight">
              What Our Homeowners Say
            </h2>
          </motion.div>

          {/* Navigation Controls: Clean, minimal counter & hairline round buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-6"
          >
            {/* Minimalist Index Indicator */}
            <div className="font-editorial text-sm tracking-widest text-[#135A5C]/70 flex items-center gap-1.5">
              <span className="text-base text-[#135A5C] font-normal">
                {String(activeIndex + 1).padStart(2, '0')}
              </span>
              <span className="text-[#135A5C]/30">/</span>
              <span>{String(total).padStart(2, '0')}</span>
            </div>

            {/* Hairline Circular Navigation Buttons */}
            <div className="flex items-center gap-2.5">
              <button
                onClick={prevSlide}
                onMouseEnter={() => setCursorVariant('pointer')}
                onMouseLeave={resetCursor}
                aria-label="Previous testimonial"
                className="w-11 h-11 rounded-full border border-[#135A5C]/20 hover:border-[#135A5C] hover:bg-[#135A5C] hover:text-[#FAF8F5] text-[#135A5C] transition-all duration-300 flex items-center justify-center cursor-pointer active:scale-95 group"
              >
                <ArrowLeft className="w-4 h-4 stroke-[1.5] transition-transform duration-300 group-hover:-translate-x-0.5" />
              </button>

              <button
                onClick={nextSlide}
                onMouseEnter={() => setCursorVariant('pointer')}
                onMouseLeave={resetCursor}
                aria-label="Next testimonial"
                className="w-11 h-11 rounded-full border border-[#135A5C]/20 hover:border-[#135A5C] hover:bg-[#135A5C] hover:text-[#FAF8F5] text-[#135A5C] transition-all duration-300 flex items-center justify-center cursor-pointer active:scale-95 group"
              >
                <ArrowRight className="w-4 h-4 stroke-[1.5] transition-transform duration-300 group-hover:translate-x-0.5" />
              </button>
            </div>
          </motion.div>
        </div>

        {/* ───────────────────────────────────────────────────────────── */}
        {/* SLEEK FEATURED DISPLAY & INTERACTIVE ACCORDION / SLIDER      */}
        {/* ───────────────────────────────────────────────────────────── */}
        <div className="pt-12 sm:pt-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
            
            {/* PRIMARY HIGHLIGHT CARD (Large Typographic Stage) */}
            <div 
              className="lg:col-span-8 flex flex-col justify-between p-8 sm:p-12 lg:p-14 rounded-2xl bg-[#2D1B16] text-[#FAF8F5] border border-[#2D1B16] shadow-[0_16px_40px_rgba(45,27,22,0.28)] relative min-h-[380px] sm:min-h-[420px] overflow-hidden"
            >
              {/* Subtle architectural watermark quote */}
              <div 
                className="absolute top-6 right-8 text-white/[0.05] font-editorial text-[140px] sm:text-[180px] leading-none select-none pointer-events-none"
                aria-hidden="true"
              >
                “
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col justify-between h-full space-y-8 relative z-10"
                >
                  <div className="space-y-6">
                    {/* Index & Year Pill */}
                    <div className="flex items-center justify-between">
                      <span className="font-editorial text-xs sm:text-sm text-[#D2B277] tracking-[0.2em] uppercase font-light">
                        Story {TESTIMONIALS[activeIndex].index}
                      </span>
                    </div>

                    {/* Main Quote */}
                    <blockquote className="font-editorial text-[24px] sm:text-[28px] lg:text-[34px] font-light leading-[1.38] text-white tracking-tight">
                      “{TESTIMONIALS[activeIndex].quote}”
                    </blockquote>
                  </div>

                  {/* Metadata Row */}
                  <div className="pt-8 border-t border-white/15 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                      <h4 className="font-sans text-base sm:text-lg font-medium text-white tracking-tight">
                        {TESTIMONIALS[activeIndex].author}
                      </h4>
                    </div>

                    {/* Progress indicator bar */}
                    <div className="w-36 h-0.5 bg-white/20 rounded-full overflow-hidden self-start sm:self-center">
                      <motion.div
                        className="h-full bg-[#D2B277]"
                        initial={{ width: '0%' }}
                        animate={{ width: '100%' }}
                        transition={{ duration: 6.5, ease: 'linear' }}
                        key={`bar-${activeIndex}-${isPaused}`}
                      />
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* SIDE COLUMN: Minimalist Selectable List */}
            <div className="lg:col-span-4 flex flex-col gap-3">
              {TESTIMONIALS.map((item, idx) => {
                const isCurrent = idx === activeIndex;

                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveIndex(idx)}
                    onMouseEnter={() => setCursorVariant('pointer')}
                    onMouseLeave={resetCursor}
                    className={`text-left p-4 sm:p-5 rounded-xl transition-all duration-300 relative border group flex items-start gap-4 cursor-pointer ${
                      isCurrent
                        ? 'bg-[#2D1B16] text-white border-[#2D1B16] shadow-[0_6px_24px_rgba(45,27,22,0.25)] ring-1 ring-white/15'
                        : 'bg-[#2D1B16]/5 border-[#2D1B16]/10 hover:bg-[#2D1B16]/10 hover:border-[#2D1B16]/20'
                    }`}
                  >
                    {/* Minimalist Accent Line */}
                    <div
                      className={`w-1 self-stretch rounded-full transition-all duration-300 shrink-0 ${
                        isCurrent 
                          ? 'bg-[#D2B277]' 
                          : 'bg-transparent group-hover:bg-[#2D1B16]/30'
                      }`}
                    />

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center mb-1">
                        <span
                          className={`font-editorial text-xs tracking-wider transition-colors duration-200 ${
                            isCurrent ? 'text-[#D2B277] font-normal' : 'text-[#2D1B16]/50'
                          }`}
                        >
                          {item.index}
                        </span>
                      </div>

                      <h5
                        className={`font-sans text-sm font-medium truncate transition-colors duration-200 ${
                          isCurrent 
                            ? 'text-white' 
                            : 'text-[#2D1B16]/80 group-hover:text-[#2D1B16]'
                        }`}
                      >
                        {item.author}
                      </h5>
                    </div>
                  </button>
                );
              })}
            </div>

          </div>

          {/* ───────────────────────────────────────────────────────────── */}
          {/* BOTTOM TIMELINE / MINIMALIST PROGRESS RAIL                   */}
          {/* ───────────────────────────────────────────────────────────── */}
          <div className="mt-12 pt-8 border-t border-[#135A5C]/10 flex items-center justify-center gap-6 text-xs text-[#135A5C]/60">
            {/* Quick jump pills */}
            <div className="flex items-center gap-1.5">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  onMouseEnter={() => setCursorVariant('pointer')}
                  onMouseLeave={resetCursor}
                  aria-label={`Jump to testimonial ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                    i === activeIndex
                      ? 'w-8 bg-[#2D1B16]'
                      : 'w-2 bg-[#2D1B16]/20 hover:bg-[#2D1B16]/40'
                  }`}
                />
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
