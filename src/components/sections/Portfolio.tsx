import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useCursor } from '../../context/CursorContext';
import {
  PORTFOLIO_PROJECTS,
  PortfolioCategory,
  PortfolioProject,
} from '../../data/portfolioData';

export const Portfolio: React.FC = () => {
  const { setCursorVariant, resetCursor } = useCursor();
  const navigate = useNavigate();

  const [activeTab, setActiveTab] =
    useState<PortfolioCategory>('Completed Portfolio');
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const isDraggingRef = useRef<boolean>(false);
  const startXRef = useRef<number>(0);
  const scrollLeftRef = useRef<number>(0);
  const dragDistanceRef = useRef<number>(0);

  const TABS: PortfolioCategory[] = [
    'Completed Portfolio',
    'Recently Delivered',
    'Ongoing & Upcoming',
  ];

  const displayedProjects = PORTFOLIO_PROJECTS.filter(
    (p) => p.category === activeTab
  );
  const totalProjects = displayedProjects.length;

  /**
   * Switching between categories:
   * Maintain scroll position, reset carousel position without reloading page.
   */
  const handleTabChange = (tab: PortfolioCategory) => {
    setActiveTab(tab);
    setActiveIndex(0);
    if (carouselRef.current) {
      carouselRef.current.scrollTo({ left: 0, behavior: 'smooth' });
    }
  };

  /**
   * Scroll carousel smoothly to target index
   */
  const scrollToIndex = useCallback((index: number) => {
    if (!carouselRef.current) return;
    const container = carouselRef.current;
    const cards = container.querySelectorAll<HTMLElement>('[data-project-card]');
    if (cards[index]) {
      const targetLeft = cards[index].offsetLeft - container.offsetLeft;
      container.scrollTo({
        left: targetLeft,
        behavior: 'smooth',
      });
      setActiveIndex(index);
    }
  }, []);

  const handlePrev = () => {
    if (totalProjects === 0) return;
    const nextIdx = (activeIndex - 1 + totalProjects) % totalProjects;
    scrollToIndex(nextIdx);
  };

  const handleNext = useCallback(() => {
    if (totalProjects === 0) return;
    const nextIdx = (activeIndex + 1) % totalProjects;
    scrollToIndex(nextIdx);
  }, [activeIndex, totalProjects, scrollToIndex]);

  /**
   * Update activeIndex on scroll
   */
  const handleScroll = useCallback(() => {
    if (!carouselRef.current) return;
    const container = carouselRef.current;
    const cards = container.querySelectorAll<HTMLElement>('[data-project-card]');
    let closestIndex = 0;
    let minDistance = Infinity;

    cards.forEach((card, idx) => {
      const distance = Math.abs(
        card.offsetLeft - container.offsetLeft - container.scrollLeft
      );
      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = idx;
      }
    });

    setActiveIndex(closestIndex);
  }, []);

  /**
   * Smooth automatic slide progression when not hovered
   */
  useEffect(() => {
    if (isHovered || totalProjects <= 1) return;

    const interval = setInterval(() => {
      handleNext();
    }, 6500);

    return () => clearInterval(interval);
  }, [isHovered, handleNext, totalProjects]);

  /**
   * Mouse Wheel horizontal navigation
   */
  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    if (!carouselRef.current) return;
    if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
      carouselRef.current.scrollLeft += e.deltaX;
    }
  };

  /**
   * Drag to Scroll
   */
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!carouselRef.current) return;
    isDraggingRef.current = true;
    dragDistanceRef.current = 0;
    startXRef.current = e.pageX - carouselRef.current.offsetLeft;
    scrollLeftRef.current = carouselRef.current.scrollLeft;
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current || !carouselRef.current) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startXRef.current) * 1.5;
    dragDistanceRef.current = Math.abs(walk);
    carouselRef.current.scrollLeft = scrollLeftRef.current - walk;
  };

  const handleMouseUpOrLeave = () => {
    isDraggingRef.current = false;
  };

  /**
   * Handle Card Click - opens detailed project page
   */
  const handleCardClick = (project: PortfolioProject) => {
    if (dragDistanceRef.current > 8) return;
    if (project.externalUrl) {
      window.open(project.externalUrl, '_blank', 'noopener,noreferrer');
    } else {
      navigate(`/products?project=${project.id}`);
    }
  };

  return (
    <section
      id="portfolio"
      className="relative w-full bg-[#FAF8F5] text-[#0A2F28] pt-28 pb-32 sm:pt-36 sm:pb-40 lg:pt-44 lg:pb-48 select-none overflow-hidden"
      aria-label="Our Portfolio — Architectural Body of Work"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        handleMouseUpOrLeave();
      }}
    >
      {/* ───────────────────────────────────────────────────────────── */}
      {/* 1. SECTION HEADER (1440PX MAX WIDTH)                           */}
      {/* ───────────────────────────────────────────────────────────── */}
      <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 mb-10 sm:mb-14 relative z-10">
        {/* Section Title & Supporting Copy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-[820px] mb-8 sm:mb-10 space-y-3"
        >
          <h2 className="font-editorial text-[42px] sm:text-[54px] lg:text-[68px] font-light leading-[1.05] text-[#152E28] tracking-tight">
            OUR PORTFOLIO
          </h2>
          <p className="font-sans text-[16px] sm:text-[18px] text-[#152E28]/80 font-normal leading-relaxed pt-1">
            Explore a carefully curated collection of current developments, recently delivered residences and landmark projects that have shaped the Vaswani legacy over four decades.
          </p>
        </motion.div>

        {/* Filter Tabs & View All Projects Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-4 border-b border-[#152E28]/10"
        >
          {/* Category Pill Navigation */}
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3.5 self-start md:self-center">
            {TABS.map((tab) => {
              const isActive = activeTab === tab;
              return (
                <button
                  key={tab}
                  onClick={() => handleTabChange(tab)}
                  onMouseEnter={() => setCursorVariant('pointer')}
                  onMouseLeave={resetCursor}
                  className={`relative px-5 sm:px-6 py-2.5 rounded-full font-sans text-[13px] sm:text-[14px] md:text-[15px] tracking-wider uppercase font-medium transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'bg-[#152E28] text-[#d7c2a3] shadow-md border border-[#152E28]'
                      : 'text-[#152E28]/75 hover:text-[#152E28] hover:bg-[#152E28]/5 border border-[#152E28]/20 bg-transparent'
                  }`}
                >
                  {tab}
                </button>
              );
            })}
          </div>

          {/* View All Projects Action */}
          <div className="shrink-0 self-end md:self-center">
            <button
              onClick={() => navigate('/products')}
              onMouseEnter={() => setCursorVariant('pointer')}
              onMouseLeave={resetCursor}
              className="group inline-flex items-center gap-3 text-[14px] sm:text-[15px] md:text-[16px] font-sans tracking-wide uppercase text-[#152E28] hover:text-[#152E28]/75 font-medium transition-colors duration-300 cursor-pointer pb-1 relative"
            >
              <span>View All Projects</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-1.5" />
              <span className="absolute left-0 bottom-0 w-0 h-[1.5px] bg-[#152E28] transition-all duration-300 group-hover:w-full" />
            </button>
          </div>
        </motion.div>
      </div>

      {/* ───────────────────────────────────────────────────────────── */}
      {/* 2. HORIZONTAL EDITORIAL CAROUSEL WITH MINIMAL ARROWS          */}
      {/* ───────────────────────────────────────────────────────────── */}
      <div className="relative w-full group/carousel">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{
              duration: 0.3,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="w-full relative z-10 pl-6 sm:pl-10 lg:pl-[max(1.5rem,calc((100vw-1440px)/2+4rem))]"
          >
          <div
            ref={carouselRef}
            onScroll={handleScroll}
            onWheel={handleWheel}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUpOrLeave}
            className="flex items-stretch gap-6 sm:gap-8 lg:gap-10 overflow-x-auto snap-x snap-mandatory scroll-smooth pr-6 sm:pr-10 lg:pr-16 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden cursor-grab active:cursor-grabbing pb-6"
            style={{ WebkitOverflowScrolling: 'touch' }}
          >
            {displayedProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                data-project-card
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.3,
                  delay: idx * 0.05,
                  ease: [0.16, 1, 0.3, 1],
                }}
                onClick={() => handleCardClick(project)}
                onMouseEnter={() => setCursorVariant('explore', project.name)}
                onMouseLeave={resetCursor}
                className="group relative shrink-0 snap-start snap-always w-[78vw] sm:w-[52vw] md:w-[42vw] lg:w-[380px] xl:w-[420px] aspect-[4/5] sm:aspect-[3/4] rounded-[24px] sm:rounded-[28px] overflow-hidden bg-[#152E28] shadow-[0_16px_45px_rgba(10,47,40,0.08)] hover:shadow-[0_28px_65px_rgba(10,47,40,0.22)] transition-all duration-500 ease-out group-hover:-translate-y-2 hover:-translate-y-2 cursor-pointer"
              >
                {/* Architectural Photography with Subtle Zoom on Hover */}
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  loading={idx < 2 ? 'eager' : 'lazy'}
                />

                {/* Refined Magazine Vignette Overlay - Architecture is Hero */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 via-45% to-transparent pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-transparent pointer-events-none" />

                {/* Top Status Badge */}
                <div className="absolute top-5 sm:top-6 left-5 sm:left-6 z-20">
                  <span className="font-sans text-[11px] sm:text-xs tracking-[0.2em] uppercase text-white font-medium px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 inline-flex items-center gap-1.5 shadow-sm">
                    {project.badge}
                  </span>
                </div>

                {/* Top Right External Link Icon for Seascape */}
                {project.externalUrl && (
                  <div className="absolute top-5 sm:top-6 right-5 sm:right-6 z-20 w-8 h-8 rounded-full bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-85 group-hover:opacity-100 transition-opacity">
                    <ExternalLink className="w-3.5 h-3.5" />
                  </div>
                )}

                {/* Bottom Editorial Content */}
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7 lg:p-8 z-10 flex flex-col justify-end">
                  {/* Category-Specific Meta Line */}
                  {project.category === 'Ongoing & Upcoming' && (
                    <span className="font-sans text-[12px] sm:text-[13px] tracking-[0.22em] uppercase text-[#d7c2a3] font-medium block mb-1.5">
                      {project.location}
                    </span>
                  )}

                  {project.category === 'Recently Delivered' && (
                    <span className="font-sans text-[12px] sm:text-[13px] tracking-[0.22em] uppercase text-[#d7c2a3] font-medium block mb-1.5">
                      Year Delivered: {project.year}
                    </span>
                  )}

                  {project.category === 'Completed Portfolio' && (
                    <span className="font-sans text-[12px] sm:text-[13px] tracking-[0.22em] uppercase text-[#d7c2a3] font-medium block mb-1.5">
                      Completion Year: {project.year}
                    </span>
                  )}

                  {/* Project Name (Hero Typography) */}
                  <h3 className="font-editorial text-[28px] sm:text-[34px] lg:text-[38px] font-light text-white tracking-tight leading-[1.1] mb-3">
                    {project.name}
                  </h3>

                  {/* Reveal "View Project →" */}
                  <div className="pt-3 border-t border-white/15 flex items-center justify-between text-white/80 group-hover:text-white font-sans text-[13px] sm:text-[14px] tracking-wide font-medium transition-all duration-300">
                    <span className="inline-flex items-center gap-1.5">
                      <span>View Project</span>
                      <span className="transition-transform duration-300 group-hover:translate-x-1.5">
                        →
                      </span>
                    </span>
                    {project.externalUrl && (
                      <span className="text-[11px] uppercase tracking-wider text-white/60">
                        Dedicated Site
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Minimal & Subtle Floating Navigation Arrows in between / flanking the images */}
      <div className="pointer-events-none absolute inset-y-0 left-0 right-0 z-30 flex items-center justify-between px-3 sm:px-6 lg:px-8">
        <button
          onClick={handlePrev}
          aria-label="Previous project"
          onMouseEnter={() => setCursorVariant('pointer')}
          onMouseLeave={resetCursor}
          className="pointer-events-auto w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#FAF8F5]/85 hover:bg-[#FAF8F5] text-[#152E28]/70 hover:text-[#152E28] backdrop-blur-md border border-[#152E28]/15 hover:border-[#152E28]/35 shadow-[0_4px_16px_rgba(21,46,40,0.08)] flex items-center justify-center transition-all duration-300 cursor-pointer active:scale-95 group/arrow"
        >
          <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 stroke-[1.25] transition-transform duration-300 group-hover/arrow:-translate-x-0.5" />
        </button>

        <button
          onClick={handleNext}
          aria-label="Next project"
          onMouseEnter={() => setCursorVariant('pointer')}
          onMouseLeave={resetCursor}
          className="pointer-events-auto w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#FAF8F5]/85 hover:bg-[#FAF8F5] text-[#152E28]/70 hover:text-[#152E28] backdrop-blur-md border border-[#152E28]/15 hover:border-[#152E28]/35 shadow-[0_4px_16px_rgba(21,46,40,0.08)] flex items-center justify-center transition-all duration-300 cursor-pointer active:scale-95 group/arrow"
        >
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 stroke-[1.25] transition-transform duration-300 group-hover/arrow:translate-x-0.5" />
        </button>
      </div>
    </div>
  </section>
);
};
