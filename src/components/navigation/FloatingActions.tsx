import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUp, MessageCircle } from 'lucide-react';
import { useSmoothScroll } from '../../context/SmoothScrollContext';
import { useCursor } from '../../context/CursorContext';

export const FloatingActions: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const { scrollTo } = useSmoothScroll();
  const { setCursorVariant, resetCursor } = useCursor();

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 350);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToTop = () => {
    if (scrollTo) {
      scrollTo(0, { duration: 1.2 });
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappNumber = '918049111000';
  const whatsappMessage = encodeURIComponent(
    'Hello Vaswani Group, I would like to enquire about your properties.'
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <div
      className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-40 flex flex-col items-center gap-2.5 pointer-events-auto"
      role="region"
      aria-label="Floating quick actions"
    >
      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 12 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            onClick={handleScrollToTop}
            onMouseEnter={() => setCursorVariant('pointer')}
            onMouseLeave={resetCursor}
            className="group relative w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center bg-[#152E28]/90 hover:bg-[#152E28] text-white backdrop-blur-lg border border-white/20 hover:border-white/40 shadow-[0_4px_20px_rgba(21,46,40,0.35),inset_0_1px_1px_rgba(255,255,255,0.25)] transition-all duration-300 ease-out hover:-translate-y-1 active:translate-y-0 focus:outline-none select-none cursor-pointer"
            aria-label="Scroll to top of page"
          >
            {/* Glass Specular Sheen */}
            <span
              aria-hidden="true"
              className="absolute inset-0 rounded-full bg-gradient-to-b from-white/20 via-transparent to-black/10 pointer-events-none"
            />

            {/* Icon */}
            <ArrowUp
              size={18}
              strokeWidth={1.75}
              className="relative z-10 transition-transform duration-300 ease-out group-hover:-translate-y-0.5"
            />

            {/* Tooltip - Level 04 */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-md bg-[#152E28]/95 text-white font-sans text-[16px] md:text-[17px] lg:text-[18px] tracking-wide uppercase font-semibold whitespace-nowrap shadow-lg border border-white/10 backdrop-blur-md opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200"
            >
              Top
            </span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* WhatsApp Quick Chat Button */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setCursorVariant('pointer')}
        onMouseLeave={resetCursor}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="group relative w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center bg-[#152E28]/90 hover:bg-[#152E28] text-white backdrop-blur-lg border border-white/20 hover:border-white/40 shadow-[0_4px_20px_rgba(21,46,40,0.35),inset_0_1px_1px_rgba(255,255,255,0.25)] transition-all duration-300 ease-out hover:-translate-y-1 active:translate-y-0 focus:outline-none select-none cursor-pointer"
        aria-label="Contact Vaswani Group on WhatsApp"
      >
        {/* Glass Specular Sheen */}
        <span
          aria-hidden="true"
          className="absolute inset-0 rounded-full bg-gradient-to-b from-white/20 via-transparent to-black/10 pointer-events-none"
        />

        {/* Live status dot */}
        <span
          aria-hidden="true"
          className="absolute top-1 right-1 w-2.5 h-2.5 rounded-full bg-[#25D366] ring-2 ring-[#152E28] shadow-[0_0_8px_rgba(37,211,102,0.8)]"
        />

        {/* Icon */}
        <MessageCircle
          size={19}
          strokeWidth={1.75}
          className="relative z-10 transition-transform duration-300 ease-out group-hover:scale-110"
        />

        {/* Tooltip - Level 04 */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-md bg-[#152E28]/95 text-white font-sans text-[16px] md:text-[17px] lg:text-[18px] tracking-wide uppercase font-semibold whitespace-nowrap shadow-lg border border-white/10 backdrop-blur-md opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200"
        >
          WhatsApp
        </span>
      </motion.a>
    </div>
  );
};
