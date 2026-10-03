import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CURTAIN_EASE, LUXURY_EASE } from '../ui/Motion';

export const Preloader: React.FC<{
  onComplete?: () => void;
  forceShow?: boolean;
}> = ({ onComplete, forceShow = false }) => {
  const [progress, setProgress] = useState(0);
  const [stage, setStage] = useState<1 | 2 | 3 | 4>(1);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // Stage 1 -> 2: Brand Identity
    const t1 = setTimeout(() => setStage(2), 250);
    // Stage 2 -> 3: Ambient Atmosphere
    const t2 = setTimeout(() => setStage(3), 800);

    // Smooth progress counter simulation
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setStage(4);
          setTimeout(() => {
            setIsDone(true);
            onComplete?.();
          }, 450);
          return 100;
        }
        const step = Math.floor(Math.random() * 14) + 6;
        return Math.min(100, prev + step);
      });
    }, 75);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearInterval(interval);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {(!isDone || forceShow) && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            clipPath: 'inset(0 0 100% 0)',
            transition: { duration: 0.95, ease: CURTAIN_EASE },
          }}
          className="fixed inset-0 z-50 bg-[#141618] text-[#FAF8F5] flex flex-col justify-between p-6 sm:p-12 select-none overflow-hidden"
        >
          {/* Subtle Ambient Daylight Glow in Dark Canvas */}
          <div className="absolute inset-0 bg-radial from-[#1E5E45]/15 via-transparent to-transparent pointer-events-none blur-3xl opacity-60" />
          <div className="absolute inset-0 bg-architectural-grid-ivory opacity-[0.025] pointer-events-none" />

          {/* Top Bar */}
          <div className="relative z-10 flex items-center justify-between">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: LUXURY_EASE }}
              className="flex items-center gap-3"
            >
              <span className="w-2 h-2 rounded-full bg-[#1E5E45]" />
              <span className="font-sans text-[16px] md:text-[17px] lg:text-[18px] text-[#D5D9E2] uppercase tracking-[0.25em] font-semibold">
                VASWANI GROUP
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="font-sans text-[16px] md:text-[17px] lg:text-[18px] uppercase tracking-wider text-[#68C29F] font-semibold">
                ARCHITECTURAL PRELUDE
              </span>
            </motion.div>
          </div>

          {/* Center Brand Monogram Reveal */}
          <div className="relative z-10 flex flex-col items-center justify-center text-center space-y-6">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: LUXURY_EASE }}
              className="relative w-28 h-28 flex items-center justify-center"
            >
              {/* Rotating Architectural Geometry */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 16, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 rounded-2xl border border-white/10 border-t-[#68C29F]/70"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-2.5 rounded-xl border border-white/5 border-b-[#1E5E45]"
              />
              <span className="font-editorial text-[52px] sm:text-[72px] font-light tracking-wider text-[#FAF8F5]">
                V
              </span>
            </motion.div>

            <div className="space-y-2 overflow-hidden">
              <motion.h2
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.85, delay: 0.3, ease: LUXURY_EASE }}
                className="font-editorial text-[36px] md:text-[44px] lg:text-[56px] font-light tracking-tight text-[#FAF8F5] leading-[1.1]"
              >
                Simply Feels Right
              </motion.h2>
              <motion.p
                initial={{ y: 15, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.85, delay: 0.45, ease: LUXURY_EASE }}
                className="font-editorial italic text-[20px] md:text-[22px] lg:text-[24px] text-[#B3B9C4] font-normal"
              >
                An Immersive Architectural Experience
              </motion.p>
            </div>
          </div>

          {/* Bottom Progress & Coordinates - Level 04 */}
          <div className="relative z-10 space-y-3 max-w-xl mx-auto w-full">
            <div className="flex items-center justify-between font-sans text-[16px] md:text-[17px] lg:text-[18px] text-[#8990A0]">
              <span className="uppercase tracking-wider font-medium">
                {stage === 1 && 'CHOREOGRAPHING LIGHT & SPACE'}
                {stage === 2 && 'SYNCHRONIZING KINETIC TOKENS'}
                {stage === 3 && 'ENGAGING ARCHITECTURAL INERTIA'}
                {stage === 4 && 'EXPERIENCE READY'}
              </span>
              <span className="text-[#68C29F] font-editorial text-[24px] md:text-[28px] font-light">
                {progress}%
              </span>
            </div>

            {/* Hairline Progress Track */}
            <div className="w-full h-px bg-white/10 overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-[#1E5E45] via-[#46A882] to-[#68C29F]"
                style={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>

            <div className="flex items-center justify-between font-sans text-[16px] md:text-[17px] lg:text-[18px] text-[#6C7382] pt-1">
              <span>EST. 1985 • BENGALURU • MUMBAI • DUBAI</span>
              <span className="tracking-wide text-[#8990A0] font-semibold">
                12°58'N 77°35'E
              </span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
