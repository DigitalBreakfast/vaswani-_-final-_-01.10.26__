import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { useCursor } from '../../context/CursorContext';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';

interface StatMetric {
  id: 'projects' | 'area' | 'families';
  valueDisplay: string;
  suffix?: string;
  targetNumber: number;
  decimals: number;
  label: string;
  sublabel: string;
}

const STATS: StatMetric[] = [
  {
    id: 'projects',
    valueDisplay: '72',
    targetNumber: 72,
    decimals: 0,
    label: 'PROJECTS',
    sublabel: 'Completed Landmarks',
  },
  {
    id: 'area',
    valueDisplay: '11.3',
    suffix: 'M',
    targetNumber: 11.3,
    decimals: 1,
    label: 'SQ. FT. DEVELOPED',
    sublabel: 'Master-Crafted Spaces',
  },
  {
    id: 'families',
    valueDisplay: '5000',
    suffix: '+',
    targetNumber: 5000,
    decimals: 0,
    label: 'FAMILIES',
    sublabel: 'Generational Communities',
  },
];

export const LegacyInNumbers: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });
  const { setCursorVariant, resetCursor } = useCursor();
  const prefersReduced = usePrefersReducedMotion();

  const [hoveredStat, setHoveredStat] = useState<'projects' | 'area' | 'families' | null>(null);

  // Counter values
  const [count72, setCount72] = useState(0);
  const [count113, setCount113] = useState(0);
  const [count5000, setCount5000] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    if (prefersReduced) {
      setCount72(72);
      setCount113(11.3);
      setCount5000(5000);
      return;
    }

    const duration = 1800;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);

      setCount72(Math.round(ease * 72));
      setCount113(Number((ease * 11.3).toFixed(1)));
      setCount5000(Math.round(ease * 5000));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, prefersReduced]);

  return (
    <section
      id="in-numbers"
      ref={containerRef}
      className="relative w-full min-h-screen lg:h-screen bg-[#FAF8F5] text-[#1A1C1E] select-none flex flex-col justify-between py-16 sm:py-20 lg:py-24 px-6 sm:px-12 lg:px-20 overflow-hidden transition-colors duration-700"
      aria-label="Vaswani In Numbers Impact Exhibition"
    >
      {/* Base Architectural Grid */}
      <div className="absolute inset-0 bg-architectural-grid opacity-[0.025] pointer-events-none" />

      {/* Atmospheric Constant Ambient Center Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[550px] rounded-full bg-radial from-[#1E5E45]/5 via-[#EAE4D6]/30 to-transparent blur-3xl pointer-events-none" />

      {/* ───────────────────────────────────────────────────────────── */}
      {/* TOP HEADER: GALLERY EXHIBITION HEADER                         */}
      {/* ───────────────────────────────────────────────────────────── */}
      <header className="relative z-20 w-full max-w-[1440px] mx-auto flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-2"
        >
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#1E5E45]" />
            <span className="font-sans text-[16px] md:text-[17px] lg:text-[18px] uppercase tracking-[0.3em] text-[#1E5E45] font-semibold">
              OUR IMPACT
            </span>
          </div>
        </motion.div>

        {/* Exhibition Room Coordinate - Level 04 */}
        <motion.span
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 0.6 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
          className="font-sans text-[16px] md:text-[17px] lg:text-[18px] uppercase tracking-wider text-[#5A626A] hidden sm:inline-block font-medium"
        >
          FOUR DECADES OF DISCIPLINE
        </motion.span>
      </header>

      {/* ───────────────────────────────────────────────────────────── */}
      {/* MAIN GALLERY EXHIBITION STAGE: 3 EQUALLY SPACED BLOCKS         */}
      {/* ───────────────────────────────────────────────────────────── */}
      <div className="relative z-20 w-full max-w-[1440px] mx-auto my-auto py-10 sm:py-16">
        
        {/* Animated Horizontal Architectural Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#1A1C1E]/15 to-transparent origin-center mb-12 sm:mb-16 lg:mb-20"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 sm:gap-14 lg:gap-16 items-start">

          {/* ========================================================= */}
          {/* STAT 01: 72 PROJECTS                                      */}
          {/* ========================================================= */}
          <div
            onMouseEnter={() => {
              setHoveredStat('projects');
              setCursorVariant('explore', '72 Projects');
            }}
            onMouseLeave={() => {
              setHoveredStat(null);
              resetCursor();
            }}
            className={`transition-all duration-700 cursor-pointer flex flex-col items-center lg:items-start text-center lg:text-left group relative ${
              hoveredStat && hoveredStat !== 'projects' ? 'opacity-40' : 'opacity-100'
            }`}
          >
            {/* Monumental Editorial Number - Level 02 Scale */}
            <div className="relative">
              <span
                className="font-editorial text-[36px] md:text-[44px] lg:text-[56px] font-light leading-none text-[#1A1C1E] transition-all duration-500 block"
              >
                {count72}
              </span>

              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: hoveredStat === 'projects' ? 1 : 0 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="absolute -bottom-2 left-0 right-0 h-[1.5px] bg-[#1E5E45] origin-left shadow-[0_0_8px_rgba(30,94,69,0.3)]"
              />
            </div>

            {/* Labels - Level 04 */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-1.5 mt-4 sm:mt-6"
            >
              <h3 className="font-sans text-[16px] md:text-[17px] lg:text-[18px] uppercase tracking-wider text-[#1E5E45] font-semibold">
                PROJECTS
              </h3>
              <p className="font-sans text-[16px] md:text-[17px] lg:text-[18px] text-[#5A626A] font-light">
                Delivered On Time & Budget
              </p>
            </motion.div>
          </div>

          {/* ========================================================= */}
          {/* STAT 02: 11.3M SQ. FT. DEVELOPED                          */}
          {/* ========================================================= */}
          <div
            onMouseEnter={() => {
              setHoveredStat('area');
              setCursorVariant('explore', '11.3M Sq. Ft.');
            }}
            onMouseLeave={() => {
              setHoveredStat(null);
              resetCursor();
            }}
            className={`transition-all duration-700 cursor-pointer flex flex-col items-center lg:items-start text-center lg:text-left group relative ${
              hoveredStat && hoveredStat !== 'area' ? 'opacity-40' : 'opacity-100'
            }`}
          >
            {/* Monumental Editorial Number - Level 02 Scale */}
            <div className="relative">
              <span
                className="font-editorial text-[36px] md:text-[44px] lg:text-[56px] font-light leading-none text-[#1A1C1E] transition-all duration-500 block"
              >
                {count113}
                <span className="text-[#1E5E45] font-light ml-1">M</span>
              </span>

              <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{
                  opacity: hoveredStat === 'area' ? 1 : 0,
                  scaleX: hoveredStat === 'area' ? 1 : 0,
                }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="absolute -bottom-2 left-0 right-0 h-[1.5px] bg-gradient-to-r from-[#1E5E45] via-[#68C29F] to-[#1E5E45] origin-center shadow-[0_0_8px_rgba(30,94,69,0.3)]"
              />
            </div>

            {/* Labels - Level 04 */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-1.5 mt-4 sm:mt-6"
            >
              <h3 className="font-sans text-[16px] md:text-[17px] lg:text-[18px] uppercase tracking-wider text-[#1E5E45] font-semibold">
                SQ. FT. DEVELOPED
              </h3>
              <p className="font-sans text-[16px] md:text-[17px] lg:text-[18px] text-[#5A626A] font-light">
                Precision Master Planning
              </p>
            </motion.div>
          </div>

          {/* ========================================================= */}
          {/* STAT 03: 5000+ FAMILIES                                   */}
          {/* ========================================================= */}
          <div
            onMouseEnter={() => {
              setHoveredStat('families');
              setCursorVariant('explore', '5000+ Families');
            }}
            onMouseLeave={() => {
              setHoveredStat(null);
              resetCursor();
            }}
            className={`transition-all duration-700 cursor-pointer flex flex-col items-center lg:items-start text-center lg:text-left group relative md:col-span-2 lg:col-span-1 ${
              hoveredStat && hoveredStat !== 'families' ? 'opacity-40' : 'opacity-100'
            }`}
          >
            {/* Monumental Editorial Number - Level 02 Scale */}
            <div className="relative">
              <span
                className="font-editorial text-[36px] md:text-[44px] lg:text-[56px] font-light leading-none text-[#1A1C1E] transition-all duration-500 block"
              >
                {count5000}
                <span className="text-[#1E5E45] font-light ml-1">+</span>
              </span>

              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: hoveredStat === 'families' ? 1 : 0 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="absolute -bottom-2 left-0 right-0 h-[1.5px] bg-[#1E5E45] origin-left shadow-[0_0_8px_rgba(30,94,69,0.3)]"
              />
            </div>

            {/* Labels - Level 04 */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-1.5 mt-4 sm:mt-6"
            >
              <h3 className="font-sans text-[16px] md:text-[17px] lg:text-[18px] uppercase tracking-wider text-[#1E5E45] font-semibold">
                FAMILIES
              </h3>
              <p className="font-sans text-[16px] md:text-[17px] lg:text-[18px] text-[#5A626A] font-light">
                Multi-Generational Belonging
              </p>
            </motion.div>
          </div>

        </div>

        {/* Animated Horizontal Architectural Divider Bottom */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#1A1C1E]/15 to-transparent origin-center mt-12 sm:mb-16 lg:mt-20"
        />

      </div>

      {/* ───────────────────────────────────────────────────────────── */}
      {/* BOTTOM FOOTER: TIMELESS EXHIBITION BENCHMARK - Level 04       */}
      {/* ───────────────────────────────────────────────────────────── */}
      <footer className="relative z-20 w-full max-w-[1440px] mx-auto flex items-center justify-between font-sans text-[16px] md:text-[17px] lg:text-[18px] text-[#5A626A] tracking-wider">
        <span className="hidden sm:inline">1985 — PRESENT</span>
        <span>ACROSS FOUR DECADES</span>
      </footer>

    </section>
  );
};
