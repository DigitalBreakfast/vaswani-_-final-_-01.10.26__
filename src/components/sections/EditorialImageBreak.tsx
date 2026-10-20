import React from 'react';
import { motion } from 'motion/react';
import { useCursor } from '../../context/CursorContext';

interface EditorialImageBreakProps {
  imageSrc?: string;
  eyebrow?: string;
  quote?: string;
  location?: string;
  projectName?: string;
}

export const EditorialImageBreak: React.FC<EditorialImageBreakProps> = ({
  imageSrc = 'https://res.cloudinary.com/ds5s7shuo/image/upload/v1779550159/Make_setting_night_time_202605232058_w4cpyk.jpg',
  eyebrow = 'ARCHITECTURAL DISTINCTION · MUMBAI',
  quote = 'Residences shaped by four decades of quiet craft and generational trust.',
  location = 'Bandra West, Mumbai',
  projectName = 'Vaswani Residential Landmark',
}) => {
  const { setCursorVariant, resetCursor } = useCursor();

  return (
    <section
      aria-label="Architectural Image Interlude"
      className="w-full py-6 sm:py-10 lg:py-14 px-6 sm:px-10 lg:px-16 select-none overflow-hidden"
    >
      <div className="w-full max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          onMouseEnter={() => setCursorVariant('explore', 'ARCHIVE')}
          onMouseLeave={resetCursor}
          className="group relative w-full h-[380px] sm:h-[480px] lg:h-[600px] rounded-[24px] sm:rounded-[32px] overflow-hidden shadow-[0_24px_60px_rgba(28,68,59,0.18)] border border-[#1C443B]/10 cursor-pointer"
        >
          {/* Main Background Image with Smooth Hover Scale */}
          <motion.img
            src={imageSrc}
            alt={projectName}
            initial={{ scale: 1.05 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
            loading="lazy"
          />

          {/* Measured Architectural Scrims for High Legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/10 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent pointer-events-none" />

          {/* Top Edge Accent Bar */}
          <div className="absolute top-6 sm:top-8 left-6 sm:left-10 right-6 sm:right-10 flex items-center justify-between text-white/70 text-[11px] sm:text-[12px] font-sans tracking-[0.25em] uppercase font-medium">
            <span>VASWANI PORTFOLIO</span>
            <span className="hidden sm:inline">ESTABLISHED 1985</span>
          </div>

          {/* Bottom Editorial Narrative & Location Monograph */}
          <div className="absolute bottom-6 sm:bottom-10 left-6 sm:left-10 right-6 sm:right-10 flex flex-col md:flex-row md:items-end justify-between gap-6 z-10 text-white">
            <div className="space-y-3 max-w-2xl">
              <span className="font-sans text-[12px] sm:text-[13px] tracking-[0.25em] uppercase text-[#E8D6C5] font-semibold block">
                {eyebrow}
              </span>
              <h3 className="font-editorial text-[24px] sm:text-[32px] lg:text-[40px] font-light leading-[1.18] text-white tracking-tight">
                {quote}
              </h3>
            </div>

            <div className="text-left md:text-right shrink-0 pt-2 md:pt-0 border-t md:border-t-0 border-white/20">
              <span className="font-sans text-[11px] sm:text-[12px] tracking-[0.2em] uppercase text-[#E8D6C5]/80 block font-medium">
                {projectName}
              </span>
              <span className="font-sans text-[14px] sm:text-[15px] text-white/90 font-light mt-0.5 block">
                {location}
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
