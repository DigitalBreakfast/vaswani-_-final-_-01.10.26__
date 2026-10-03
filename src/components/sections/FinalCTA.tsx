import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { useCursor } from '../../context/CursorContext';
import { useNavigation } from '../../context/NavigationContext';

export const FinalCTA: React.FC = () => {
  const { setCursorVariant, resetCursor } = useCursor();
  const { openEnquiryDrawer } = useNavigation();

  return (
    <section
      id="final-cta"
      className="relative w-full text-white py-32 sm:py-40 lg:py-48 px-6 sm:px-10 lg:px-16 select-none overflow-hidden"
      aria-label="Find A Place That Simply Feels Right — Vaswani Group"
    >
      {/* Background Image with Deep Atmospheric Dark Vignette */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://res.cloudinary.com/ds5s7shuo/image/upload/v1788424551/6fa11851-04a3-4a39-bd95-f1bb7b8cffcb.png"
          alt="Vaswani Architecture Atmosphere"
          className="w-full h-full object-cover object-center scale-105"
        />
        {/* Sleek multi-stage contrast gradient overlay */}
        <div className="absolute inset-0 bg-[#061A16]/80 backdrop-blur-[1px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#041310] via-transparent to-[#061A16]/80" />
      </div>

      <div className="relative z-10 w-full max-w-[1100px] mx-auto text-center flex flex-col items-center justify-center space-y-8">
        
        {/* Sub-label kicker */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-2.5"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#C4A265]" />
          <span className="font-sans text-xs tracking-[0.3em] uppercase text-[#C4A265] font-medium">
            Begin Your Conversation
          </span>
        </motion.div>

        {/* CTA Headline - Large Scale Cormorant Garamond */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-editorial text-[40px] sm:text-[54px] lg:text-[68px] xl:text-[76px] font-light leading-[1.06] tracking-tight text-white max-w-4xl"
        >
          Find A Place That{' '}
          <span className="italic font-editorial font-normal text-[#E8D6C5]">
            Simply Feels Right.
          </span>
        </motion.h2>

        {/* Supporting Line */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.85, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-sans text-base sm:text-lg text-white/70 font-light max-w-xl leading-relaxed"
        >
          Schedule a private advisory consultation with our senior partners across Mumbai & Bengaluru.
        </motion.p>

        {/* CTA Button - Elevated Magnetic Pill */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.85, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="pt-2"
        >
          <button
            onClick={openEnquiryDrawer}
            onMouseEnter={() => setCursorVariant('pointer')}
            onMouseLeave={resetCursor}
            className="group inline-flex items-center gap-3.5 px-9 py-4 rounded-full bg-white text-[#0A2F28] hover:bg-[#FAF8F5] font-sans text-sm sm:text-base tracking-[0.18em] uppercase font-semibold transition-all duration-300 shadow-[0_12px_40px_rgba(0,0,0,0.45)] hover:shadow-[0_18px_50px_rgba(0,0,0,0.6)] hover:-translate-y-1 cursor-pointer"
          >
            <span>Get In Touch</span>
            <ArrowRight className="w-4 h-4 text-[#0A2F28] transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </motion.div>

      </div>
    </section>
  );
};
