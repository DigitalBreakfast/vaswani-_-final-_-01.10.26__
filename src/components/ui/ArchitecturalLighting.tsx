import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';

export const ArchitecturalLighting: React.FC<{
  className?: string;
}> = ({ className = '' }) => {
  const prefersReduced = usePrefersReducedMotion();

  const { scrollYProgress } = useScroll();

  // Scroll-tied architectural daylight angles
  const sunX = useTransform(scrollYProgress, [0, 0.5, 1], ['-10%', '15%', '-5%']);
  const sunY = useTransform(scrollYProgress, [0, 0.5, 1], ['-15%', '25%', '-10%']);
  const sunOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.45, 0.65, 0.5, 0.35]);
  const glassReflectX = useTransform(scrollYProgress, [0, 1], ['-20%', '40%']);

  if (prefersReduced) return null;

  return (
    <div
      className={`pointer-events-none fixed inset-0 z-0 overflow-hidden select-none ${className}`}
      aria-hidden="true"
    >
      {/* 1. Moving Sunlight Core Warmth */}
      <motion.div
        style={{
          x: sunX,
          y: sunY,
          opacity: sunOpacity,
        }}
        animate={{
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="w-[90vw] h-[60vw] max-w-6xl rounded-full bg-radial from-[#FAF8F5] via-[#EAE4D6]/40 to-transparent blur-3xl absolute -top-32 left-1/2 -translate-x-1/2"
      />

      {/* 2. Secondary Sea Green Architectural Caustic Beam */}
      <motion.div
        animate={{
          x: ['-4%', '6%', '-4%'],
          y: ['3%', '-3%', '3%'],
          opacity: [0.2, 0.35, 0.2],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="w-[70vw] h-[45vw] max-w-4xl rounded-full bg-radial from-[#1E5E45]/8 via-[#68C29F]/5 to-transparent blur-3xl absolute top-1/3 right-[-10%]"
      />

      {/* 3. Subtle Glass Reflection Sweep along Diagonal */}
      <motion.div
        style={{ x: glassReflectX }}
        className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.015] to-transparent opacity-60 transform -skew-x-12"
      />

      {/* 4. Film Grain Texture Overlay for Depth */}
      <div className="absolute inset-0 bg-[radial-gradient(#1A1C1E_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.015]" />
    </div>
  );
};
