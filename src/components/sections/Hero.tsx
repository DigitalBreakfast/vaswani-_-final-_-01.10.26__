import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowDown, ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import { useCursor } from '../../context/CursorContext';

export interface HeroSlide {
  id: string;
  number: string;
  category: string;
  mediaType: 'video' | 'image';
  mediaUrl: string;
  posterUrl?: string;
  duration?: number;
}

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 'slide-1',
    number: '01',
    category: 'MASTER ARCHITECTURE',
    mediaType: 'video',
    mediaUrl:
      'https://res.cloudinary.com/ds5s7shuo/video/upload/v1788479298/vaswani_17_sec_ggiymg.mp4',
    posterUrl:
      'https://res.cloudinary.com/ds5s7shuo/video/upload/so_0/v1788479298/vaswani_17_sec_ggiymg.jpg',
    duration: 17333, // Exact duration of vaswani_17_sec_ggiymg.mp4 (17.333s)
  },
  {
    id: 'slide-2',
    number: '02',
    category: 'TRANSITION OF FORM',
    mediaType: 'video',
    mediaUrl:
      'https://res.cloudinary.com/ds5s7shuo/video/upload/v1788734901/Create_luxury_real_estate_film_202609070416_ruwg5u.mp4',
    posterUrl:
      'https://res.cloudinary.com/ds5s7shuo/video/upload/so_0/v1788734901/Create_luxury_real_estate_film_202609070416_ruwg5u.jpg',
    duration: 8000,
  },
  {
    id: 'slide-3',
    number: '03',
    category: 'STRATEGIC LOCATIONS',
    mediaType: 'video',
    mediaUrl:
      'https://res.cloudinary.com/ds5s7shuo/video/upload/v1788735846/Transition_between_frames_202609070433_gopqta.mp4',
    posterUrl:
      'https://res.cloudinary.com/ds5s7shuo/video/upload/so_0/v1788735846/Transition_between_frames_202609070433_gopqta.jpg',
    duration: 8000,
  },
];

const DEFAULT_SLIDE_INTERVAL = 7500; // Reduced by half a second (from 8s to 7.5s)

export const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const [dynamicDuration, setDynamicDuration] = useState<number | null>(null);

  const { setCursorVariant, resetCursor } = useCursor();

  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const startTimeRef = useRef<number>(Date.now());

  const totalSlides = HERO_SLIDES.length;

  const goToNextSlide = useCallback(() => {
    setDirection(1);
    setDynamicDuration(null);
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
    setProgress(0);
    startTimeRef.current = Date.now();
  }, [totalSlides]);

  const goToPrevSlide = useCallback(() => {
    setDirection(-1);
    setDynamicDuration(null);
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    setProgress(0);
    startTimeRef.current = Date.now();
  }, [totalSlides]);

  const goToSlide = (index: number) => {
    if (index === currentSlide) return;
    setDirection(index > currentSlide ? 1 : -1);
    setDynamicDuration(null);
    setCurrentSlide(index);
    setProgress(0);
    startTimeRef.current = Date.now();
  };

  const activeSlideData = HERO_SLIDES[currentSlide];
  const activeSlideDuration = dynamicDuration || activeSlideData.duration || DEFAULT_SLIDE_INTERVAL;

  // Auto-scroll Timer with Progress Bar
  useEffect(() => {
    if (isPaused) return;

    startTimeRef.current = Date.now() - (progress / 100) * activeSlideDuration;

    const interval = window.setInterval(() => {
      const elapsed = Date.now() - startTimeRef.current;
      const currentProgress = Math.min(100, (elapsed / activeSlideDuration) * 100);
      setProgress(currentProgress);

      if (elapsed >= activeSlideDuration) {
        goToNextSlide();
      }
    }, 50);

    return () => clearInterval(interval);
  }, [isPaused, goToNextSlide, progress, activeSlideDuration]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        goToPrevSlide();
      } else if (e.key === 'ArrowRight') {
        goToNextSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToNextSlide, goToPrevSlide]);

  // Touch Swipe Handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50;

    if (distance > minSwipeDistance) {
      goToNextSlide();
    } else if (distance < -minSwipeDistance) {
      goToPrevSlide();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  // Luxury Animation Variants
  const slideVariants = {
    enter: (dir: number) => ({
      opacity: 0,
      scale: 1.05,
      x: dir > 0 ? 40 : -40,
    }),
    center: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        duration: 0.9,
        ease: [0.16, 1, 0.3, 1],
      },
    },
    exit: (dir: number) => ({
      opacity: 0,
      scale: 0.98,
      x: dir > 0 ? -40 : 40,
      transition: {
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
  };

  return (
    <section
      id="home"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      className="relative w-full min-h-screen max-h-[1200px] bg-[#0A2F28] text-white overflow-hidden flex flex-col justify-between pt-24 sm:pt-28 md:pt-32 pb-8 sm:pb-10 md:pb-12 px-6 sm:px-10 lg:px-16 select-none"
      aria-label="Vaswani Group Home Showcase"
    >
      {/* ───────────────────────────────────────────────────────────── */}
      {/* 1. CINEMATIC MEDIA SLIDESHOW LAYER (4 ROTATING SCROLLS)       */}
      {/* ───────────────────────────────────────────────────────────── */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <AnimatePresence initial={false} custom={direction} mode="sync">
          <motion.div
            key={activeSlideData.id}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute inset-0 w-full h-full"
          >
            {activeSlideData.mediaType === 'video' ? (
              <video
                key={activeSlideData.mediaUrl}
                src={activeSlideData.mediaUrl}
                poster={activeSlideData.posterUrl}
                autoPlay
                muted
                playsInline
                onLoadedMetadata={(e) => {
                  const durSec = e.currentTarget.duration;
                  if (durSec && !isNaN(durSec) && isFinite(durSec) && durSec > 0) {
                    setDynamicDuration(Math.round(durSec * 1000));
                  }
                }}
                onEnded={() => {
                  goToNextSlide();
                }}
                className="w-full h-full object-cover object-center"
              />
            ) : (
              <img
                key={activeSlideData.mediaUrl}
                src={activeSlideData.mediaUrl}
                alt={activeSlideData.category}
                className="w-full h-full object-cover object-center"
                loading="eager"
                fetchPriority="high"
              />
            )}
          </motion.div>
        </AnimatePresence>

        {/* Subtle Edge Vignette for Bottom Controls (No Green Overlay) */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 pointer-events-none" />
      </div>

      {/* ───────────────────────────────────────────────────────────── */}
      {/* 2. SWIPE ARROWS: PREVIOUS & NEXT CONTROLS                     */}
      {/* ───────────────────────────────────────────────────────────── */}
      <div className="absolute inset-y-0 left-4 sm:left-8 flex items-center z-20 pointer-events-none">
        <button
          onClick={goToPrevSlide}
          onMouseEnter={() => setCursorVariant('pointer')}
          onMouseLeave={resetCursor}
          aria-label="Previous Slide"
          className="pointer-events-auto w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-white/10 hover:bg-white/25 text-white border border-white/25 hover:border-white flex items-center justify-center backdrop-blur-md transition-all duration-300 shadow-xl cursor-pointer hover:scale-105 active:scale-95"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-white transition-transform duration-200 group-hover:-translate-x-0.5" />
        </button>
      </div>

      <div className="absolute inset-y-0 right-4 sm:right-8 flex items-center z-20 pointer-events-none">
        <button
          onClick={goToNextSlide}
          onMouseEnter={() => setCursorVariant('pointer')}
          onMouseLeave={resetCursor}
          aria-label="Next Slide"
          className="pointer-events-auto w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-white/10 hover:bg-white/25 text-white border border-white/25 hover:border-white flex items-center justify-center backdrop-blur-md transition-all duration-300 shadow-xl cursor-pointer hover:scale-105 active:scale-95"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-white transition-transform duration-200 group-hover:translate-x-0.5" />
        </button>
      </div>

      {/* ───────────────────────────────────────────────────────────── */}
      {/* 3. HERO CONTENT LAYER (MINIMAL FULL-CANVAS PRESENTATION)      */}
      {/* ───────────────────────────────────────────────────────────── */}
      <div className="relative w-full max-w-[1440px] mx-auto my-auto z-10 pointer-events-none" />

      {/* ───────────────────────────────────────────────────────────── */}
      {/* 4. BOTTOM BAR: 3-SCROLL PROGRESS TABS & SCROLL DOWN           */}
      {/* ───────────────────────────────────────────────────────────── */}
      <div className="relative w-full max-w-[1440px] mx-auto z-10 pt-4 border-t border-white/15 flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
        {/* 3 Interactive Slide Tabs with Auto-Scroll Progress Fill */}
        <div className="grid grid-cols-3 gap-3 sm:gap-4 w-full md:max-w-[550px]">
          {HERO_SLIDES.map((slide, idx) => {
            const isActive = idx === currentSlide;

            return (
              <button
                key={slide.id}
                onClick={() => goToSlide(idx)}
                onMouseEnter={() => setCursorVariant('pointer')}
                onMouseLeave={resetCursor}
                className="group flex flex-col text-left py-2 relative cursor-pointer focus-visible:outline-none"
              >
                {/* Progress Bar Container */}
                <div className="w-full h-[2.5px] bg-white/20 rounded-full overflow-hidden mb-2">
                  {isActive ? (
                    <motion.div
                      className="h-full bg-white rounded-full"
                      style={{
                        width: `${progress}%`,
                        transition: isPaused ? 'none' : 'width 50ms linear',
                      }}
                    />
                  ) : (
                    <div
                      className={`h-full transition-all duration-300 ${
                        idx < currentSlide ? 'bg-white/60 w-full' : 'bg-transparent w-0'
                      }`}
                    />
                  )}
                </div>

                {/* Tab Label */}
                <div className="flex items-center">
                  <span
                    className={`font-sans text-[16px] md:text-[17px] lg:text-[18px] tracking-[0.2em] uppercase font-semibold transition-colors duration-200 ${
                      isActive
                        ? 'text-white'
                        : 'text-white/50 group-hover:text-white/80'
                    }`}
                  >
                    {slide.number}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Right Side: Pause/Play Indicator & Scroll Down */}
        <div className="flex items-center gap-5 sm:gap-6 self-end md:self-auto text-white/70 font-sans text-[16px] md:text-[17px] lg:text-[18px]">
          {/* Pause / Play Toggle */}
          <button
            onClick={() => setIsPaused((prev) => !prev)}
            onMouseEnter={() => setCursorVariant('pointer')}
            onMouseLeave={resetCursor}
            className="flex items-center gap-2 text-[16px] md:text-[17px] lg:text-[18px] tracking-[0.15em] uppercase text-white/70 hover:text-white transition-colors cursor-pointer"
            aria-label={isPaused ? 'Resume auto scroll' : 'Pause auto scroll'}
          >
            {isPaused ? (
              <>
                <Play className="w-4 h-4 text-white" />
                <span className="hidden sm:inline">RESUME</span>
              </>
            ) : (
              <>
                <Pause className="w-4 h-4 text-white" />
                <span className="hidden sm:inline">PAUSE</span>
              </>
            )}
          </button>

          {/* Scroll To Discover Indicator */}
          <button
            onClick={() => {
              const el = document.getElementById('philosophy');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            onMouseEnter={() => setCursorVariant('pointer')}
            onMouseLeave={resetCursor}
            className="flex items-center gap-2.5 text-[16px] md:text-[17px] lg:text-[18px] tracking-[0.2em] uppercase text-white/70 hover:text-white transition-colors cursor-pointer group"
            aria-label="Scroll to discover next section"
          >
            <span>SCROLL</span>
            <div className="w-8 h-8 rounded-full border border-white/30 group-hover:border-white flex items-center justify-center transition-all duration-300">
              <ArrowDown className="w-4 h-4 text-white/80 group-hover:text-white transition-transform duration-300 group-hover:translate-y-0.5" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};
