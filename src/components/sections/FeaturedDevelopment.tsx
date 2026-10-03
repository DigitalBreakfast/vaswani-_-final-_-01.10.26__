import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Compass, Bed, Maximize2, Wine, Waves } from 'lucide-react';

export const FeaturedDevelopment: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);

  // Subtle parallax effect on scroll
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ['-3%', '3%']);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.14,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section
      id="featured-development"
      ref={containerRef}
      className="relative w-full bg-[#F8F6F2] text-[#135A5C] py-24 sm:py-32 md:py-40 lg:py-48 px-4 sm:px-8 lg:px-14 select-none overflow-hidden"
      aria-label="Featured Development — Vaswani Seascape"
    >
      {/* Background Architectural Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.035] bg-[linear-gradient(to_right,#135A5C_1px,transparent_1px),linear-gradient(to_bottom,#135A5C_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="w-full max-w-[1440px] mx-auto relative z-10">
        {/* ========================================================================= */}
        {/* FULL-WIDTH IMMERSIVE HERO CARD                                            */}
        {/* ========================================================================= */}
        <div className="relative w-full min-h-[640px] sm:min-h-[720px] md:min-h-[780px] lg:min-h-[840px] rounded-[32px] overflow-hidden shadow-[0_25px_70px_rgba(19,90,92,0.12)] bg-[#07241E]">
          
          {/* 1. Cinematic Architectural Background Video with Parallax */}
          <motion.div
            style={{ y: imageY }}
            className="absolute inset-0 w-full h-[108%] -top-[4%] pointer-events-none"
          >
            <video
              src="https://res.cloudinary.com/ds5s7shuo/video/upload/v1779548094/Skyline_change_from_frame_202605232003_cbbpz2.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover object-center"
            />
          </motion.div>

          {/* 2. Layered Luxury Dark Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/70 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-[#135A5C]/25 mix-blend-multiply pointer-events-none" />

          {/* 3. Blueprint Border Highlight */}
          <div className="absolute inset-0 rounded-[32px] border border-white/20 pointer-events-none shadow-[inset_0_1px_1px_rgba(255,255,255,0.3)]" />

          {/* 4. Architectural Compass Stamp (Top Right) - Level 04 */}
          <div className="absolute top-6 right-6 sm:top-8 sm:right-8 hidden md:flex items-center gap-2.5 px-4 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-white/90 font-sans text-[16px] md:text-[17px] lg:text-[18px] tracking-wide uppercase font-semibold">
            <Compass className="w-4 h-4 text-[#d7c2a3] animate-[spin_40s_linear_infinite]" />
            <span>SEASIDE ENCLAVE</span>
          </div>

          {/* ======================================================================= */}
          {/* CONTENT OVERLAY CONTAINER                                              */}
          {/* ======================================================================= */}
          <div className="relative z-10 w-full h-full p-7 sm:p-12 md:p-14 lg:p-16 flex flex-col justify-between min-h-[640px] sm:min-h-[720px] md:min-h-[780px] lg:min-h-[840px]">
            
            {/* TOP-LEFT: Eyebrow, Section Heading (Level 02), & Supporting Copy */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              className="max-w-[700px] space-y-6 sm:space-y-7"
            >
              {/* Eyebrow - Level 04 */}
              <motion.div variants={itemVariants} className="space-y-2 inline-block">
                <span className="font-sans text-[16px] md:text-[17px] lg:text-[18px] tracking-[0.25em] uppercase text-white/90 font-semibold block">
                  Juhu
                </span>
                <div className="w-10 h-[1.5px] bg-[#d7c2a3]" />
              </motion.div>

              {/* Section Heading / Project Title - Level 02 */}
              <motion.h2
                variants={itemVariants}
                className="font-editorial text-[36px] md:text-[44px] lg:text-[56px] font-light leading-[1.08] tracking-tight"
              >
                <span className="block italic font-normal text-[#d7c2a3]">
                  SEASCAPE
                </span>
              </motion.h2>

              {/* Supporting Lead Statement - Level 03 */}
              <motion.p
                variants={itemVariants}
                className="font-sans text-[20px] md:text-[22px] lg:text-[24px] text-white/95 font-light leading-[1.5] max-w-[700px]"
              >
                Sea & City View Residences
              </motion.p>

              {/* Body Copy - Level 04 */}
              <motion.p
                variants={itemVariants}
                className="font-sans text-[16px] md:text-[17px] lg:text-[18px] text-white/80 font-light leading-relaxed max-w-[620px]"
              >
                Seascape is a thoughtfully crafted residential development by the Vaswani Group, located on Juhu, one of Mumbai's most established and enduring addresses. Set within a neighbourhood known for its tree-lined avenues, landmark hospitality, open waterfront stretches, and strong social infrastructure, Seascape is surrounded by the best of Juhu living.
              </motion.p>
            </motion.div>

            {/* BOTTOM SECTION: Property Information Panel */}
            <div className="pt-10 sm:pt-12 flex justify-end">
              
              {/* Property Information Panel */}
              <motion.div
                initial={{ opacity: 0, scale: 0.96, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="w-full sm:w-auto lg:min-w-[400px] max-w-[460px] rounded-[24px] bg-[#d7c2a3] border border-[#d7c2a3] p-6 sm:p-7 text-[#0A2F28] shadow-[0_20px_50px_rgba(0,0,0,0.35)] space-y-4"
              >
                {/* Panel Header - Level 04 */}
                <div className="border-b border-[#0A2F28]/15 pb-3.5">
                  <span className="font-sans text-[16px] md:text-[17px] lg:text-[18px] tracking-[0.2em] uppercase text-[#0A2F28] font-bold block">
                    FLAGSHIP COASTAL RESIDENCES
                  </span>
                </div>

                {/* Information Grid - Level 04 */}
                <div className="grid grid-cols-2 gap-4 pt-1">
                  
                  {/* 4 Bedroom */}
                  <div className="flex items-start gap-2.5">
                    <Bed className="w-5 h-5 text-[#0A2F28] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-sans text-[16px] md:text-[17px] lg:text-[18px] tracking-wide uppercase text-[#0A2F28]/70 font-medium block">
                        RESIDENCES
                      </span>
                      <span className="font-sans text-[16px] md:text-[17px] lg:text-[18px] text-[#0A2F28] font-semibold">
                        4 Bedroom
                      </span>
                    </div>
                  </div>

                  {/* Carpet Area */}
                  <div className="flex items-start gap-2.5">
                    <Maximize2 className="w-5 h-5 text-[#0A2F28] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-sans text-[16px] md:text-[17px] lg:text-[18px] tracking-wide uppercase text-[#0A2F28]/70 font-medium block">
                        CARPET AREA
                      </span>
                      <span className="font-sans text-[16px] md:text-[17px] lg:text-[18px] text-[#0A2F28] font-semibold whitespace-nowrap">
                        2069 – 2422 sqft
                      </span>
                    </div>
                  </div>

                  {/* Rooftop Bar */}
                  <div className="flex items-start gap-2.5">
                    <Wine className="w-5 h-5 text-[#0A2F28] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-sans text-[16px] md:text-[17px] lg:text-[18px] tracking-wide uppercase text-[#0A2F28]/70 font-medium block">
                        EXPERIENCE
                      </span>
                      <span className="font-sans text-[16px] md:text-[17px] lg:text-[18px] text-[#0A2F28] font-semibold">
                        Rooftop Bar
                      </span>
                    </div>
                  </div>

                  {/* Swimming Pool */}
                  <div className="flex items-start gap-2.5">
                    <Waves className="w-5 h-5 text-[#0A2F28] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-sans text-[16px] md:text-[17px] lg:text-[18px] tracking-wide uppercase text-[#0A2F28]/70 font-medium block">
                        AMENITY
                      </span>
                      <span className="font-sans text-[16px] md:text-[17px] lg:text-[18px] text-[#0A2F28] font-semibold">
                        Swimming Pool
                      </span>
                    </div>
                  </div>

                </div>
              </motion.div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
