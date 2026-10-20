import React from 'react';
import { motion } from 'motion/react';
import { useCursor } from '../../context/CursorContext';

export const Philosophy: React.FC = () => {
  const { setCursorVariant, resetCursor } = useCursor();

  // Slow, calm and elegant easing curve
  const easeTransition = [0.16, 1, 0.3, 1];

  return (
    <section
      id="philosophy"
      className="relative w-full bg-[#F5F2EC] text-[#135A5C] pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pt-44 lg:pb-28 px-6 sm:px-10 lg:px-16 overflow-hidden"
      aria-label="Our Philosophy — Vaswani Group"
    >
      <div className="w-full max-w-[1440px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 xl:gap-20 items-center">
          
          {/* ========================================================================= */}
          {/* LEFT COLUMN: Editorial Narrative (~40% / 5 Cols on LG)                    */}
          {/* ========================================================================= */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-8 sm:space-y-10">
            
            {/* SECTION LABEL: 14px, uppercase, 0.25em tracking, dark green, thin underline */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.8, ease: easeTransition }}
              className="inline-flex flex-col items-start"
            >
              <span className="font-sans text-[14px] tracking-[0.25em] uppercase text-[#135A5C] font-medium">
                OUR PHILOSOPHY
              </span>
              <span className="w-full h-px bg-[#135A5C]/40 mt-1.5" />
            </motion.div>

            {/* MAIN HEADING: Cormorant Garamond, Large Editorial Scale */}
            <div className="overflow-hidden">
              <motion.div
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 1.0, delay: 0.08, ease: easeTransition }}
              >
                <h2 className="font-editorial text-[48px] sm:text-[60px] lg:text-[68px] xl:text-[76px] font-light leading-[1.04] tracking-tight text-[#135A5C]">
                  Simply Feels <span className="italic font-normal">Right.</span>
                </h2>
              </motion.div>
            </div>

            {/* BODY COPY: Plus Jakarta Sans, generous line height, max-w ~560px */}
            <div className="space-y-5 font-sans text-[17px] sm:text-[18px] text-[#135A5C]/85 font-light leading-[1.75] max-w-[560px]">
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.85, delay: 0.25, ease: easeTransition }}
              >
                You know it the moment you step inside. The light settles where you hoped it would. The noise of the city drops away. Your shoulders ease before you have put down your keys.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.85, delay: 0.35, ease: easeTransition }}
              >
                For over four decades, we have believed that the right home never needs to be sold. We build for that first moment, and for the thousands of ordinary evenings that follow it.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.85, delay: 0.45, ease: easeTransition }}
              >
                Every decision, from the first sketch to the day we hand over the keys, answers to the same test. Will this home still feel right when the children have grown and the walls have heard a lifetime?
              </motion.p>
            </div>

          </div>

          {/* ========================================================================= */}
          {/* RIGHT COLUMN: Large Immersive Image (~60% / 7 Cols on LG)                 */}
          {/* ========================================================================= */}
          <div className="lg:col-span-7 flex justify-end">
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 1.2, delay: 0.15, ease: easeTransition }}
              className="group relative w-full h-[520px] sm:h-[620px] lg:h-[700px] xl:h-[760px] rounded-[32px] overflow-hidden shadow-[0_24px_70px_rgba(19,90,92,0.08)] bg-[#EAE4D6]"
              onMouseEnter={() => setCursorVariant('explore', 'Vaswani')}
              onMouseLeave={resetCursor}
            >
              {/* Editorial Photograph: Morning sunlight entering a beautifully crafted residence with natural timber and stone textures */}
              <img
                src="https://res.cloudinary.com/ds5s7shuo/image/upload/v1788480932/0e03f40e-2e17-4b45-8685-2d2e508a97cf.png"
                alt="Vaswani Group — Philosophy of enduring craftsmanship and thoughtful living"
                className="w-full h-full object-cover object-center transition-transform duration-[7000ms] ease-out group-hover:scale-[1.03]"
                loading="lazy"
              />

              {/* Gentle Atmospheric Gradient for soft depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#135A5C]/20 via-transparent to-transparent pointer-events-none" />

              {/* MICRO DETAIL: Circular Vaswani Monogram (56px, dark green, very subtle) */}
              <div
                className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8 w-14 h-14 rounded-full bg-[#135A5C] text-[#F5F2EC] flex items-center justify-center shadow-[0_8px_24px_rgba(0,0,0,0.22)] border border-white/20 select-none z-10 transition-transform duration-500 ease-out group-hover:scale-105"
                aria-label="Vaswani Monogram"
              >
                {/* Thin internal hairline circle for refined seal aesthetic */}
                <div className="absolute inset-[3px] rounded-full border border-white/25 pointer-events-none" />
                <span className="font-editorial text-[24px] font-light italic leading-none pt-0.5 select-none">
                  V
                </span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
