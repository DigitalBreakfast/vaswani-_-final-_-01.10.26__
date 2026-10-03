import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useCursor } from '../../context/CursorContext';
import { useNavigation } from '../../context/NavigationContext';
import { AmbientParticles } from '../ui/AmbientParticles';

export interface AboutFinalCTAProps {
  videoUrl?: string;
  posterUrl?: string;
}

export const AboutFinalCTA: React.FC<AboutFinalCTAProps> = ({
  videoUrl = 'https://assets.mixkit.co/videos/preview/mixkit-modern-building-architectural-features-42939-large.mp4',
  posterUrl = 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=85',
}) => {
  const { setCursorVariant, resetCursor } = useCursor();
  const { openEnquiryDrawer } = useNavigation();
  const navigate = useNavigate();

  const luxuryEase = [0.16, 1, 0.3, 1] as const;

  const handleExploreProjects = () => {
    navigate('/products');
  };

  return (
    <section
      id="about-final-cta"
      className="relative w-full min-h-[80vh] bg-[#0A2F28] text-white flex items-center justify-center py-24 sm:py-32 lg:py-36 px-6 sm:px-10 lg:px-16 select-none overflow-hidden"
      aria-label="Find A Place That Simply Feels Right — Vaswani Group"
    >
      {/* 1. BACKGROUND CINEMATIC LOOPING VIDEO */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster={posterUrl}
          className="w-full h-full object-cover object-center scale-105 transform-gpu transition-transform duration-1000"
        >
          <source src={videoUrl} type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-[#0A2F28]/45" />
        <div className="absolute inset-0 bg-radial-at-c from-transparent via-[#0A2F28]/20 to-[#0A2F28]/60" />
      </div>

      {/* 2. SOFT AMBIENT PARTICLES */}
      <div className="absolute inset-0 pointer-events-none z-[1] opacity-70">
        <AmbientParticles count={25} intensity={0.8} />
      </div>

      {/* 3. CENTERED EDITORIAL CONTENT CONTAINER */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto text-center flex flex-col items-center justify-center my-auto">
        <div className="max-w-[840px] mx-auto flex flex-col items-center">
          
          {/* Eyebrow - Level 04 */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: luxuryEase }}
            className="inline-flex items-center justify-center gap-3 mb-6 sm:mb-8"
          >
            <span className="w-6 sm:w-8 h-[1px] bg-white/60" />
            <span className="font-sans text-[16px] md:text-[17px] lg:text-[18px] tracking-[0.25em] uppercase text-white/90 font-semibold">
              BEGIN YOUR JOURNEY
            </span>
            <span className="w-6 sm:w-8 h-[1px] bg-white/60" />
          </motion.div>

          {/* CTA Headline - Level 02 */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 1, delay: 0.1, ease: luxuryEase }}
            className="font-editorial text-[36px] md:text-[44px] lg:text-[56px] font-light leading-[1.08] tracking-tight text-white mb-6 sm:mb-8"
          >
            <span className="block">Find A Place That</span>
            <span className="block italic font-normal text-[#F4EFE6]">
              Simply Feels Right.
            </span>
          </motion.h2>

          {/* Lead Paragraph - Level 03 */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 1, delay: 0.25, ease: luxuryEase }}
            className="font-sans text-[20px] md:text-[22px] lg:text-[24px] text-white/90 font-light leading-[1.5] max-w-[700px] mx-auto mb-10 sm:mb-12"
          >
            Discover homes shaped by thoughtful design, enduring quality and over four decades of trust.
          </motion.p>

          {/* Sequential Rounded Buttons - Level 04 */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.9, delay: 0.4, ease: luxuryEase }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full sm:w-auto"
          >
            {/* Primary Button */}
            <button
              onClick={handleExploreProjects}
              onMouseEnter={() => setCursorVariant('pointer')}
              onMouseLeave={resetCursor}
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-3.5 px-8 sm:px-10 h-[56px] rounded-full bg-white text-[#0A2F28] hover:bg-[#F4EFE6] font-sans text-[16px] md:text-[17px] lg:text-[18px] tracking-wide uppercase font-semibold transition-all duration-300 shadow-[0_12px_40px_rgba(0,0,0,0.25)] hover:shadow-[0_18px_50px_rgba(0,0,0,0.35)] hover:-translate-y-0.5 cursor-pointer"
            >
              <span>Explore Our Projects</span>
              <ArrowRight className="w-5 h-5 text-[#0A2F28] transition-transform duration-300 group-hover:translate-x-1.5" />
            </button>

            {/* Secondary Button */}
            <button
              onClick={openEnquiryDrawer}
              onMouseEnter={() => setCursorVariant('pointer')}
              onMouseLeave={resetCursor}
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-3.5 px-8 sm:px-10 h-[56px] rounded-full border border-white/40 hover:border-white hover:bg-white/10 text-white font-sans text-[16px] md:text-[17px] lg:text-[18px] tracking-wide uppercase font-semibold transition-all duration-300 backdrop-blur-xs hover:-translate-y-0.5 cursor-pointer"
            >
              <span>Get In Touch</span>
              <ArrowRight className="w-5 h-5 text-white/80 transition-transform duration-300 group-hover:translate-x-1.5" />
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
