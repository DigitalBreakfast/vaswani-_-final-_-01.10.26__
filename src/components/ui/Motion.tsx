import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'motion/react';
import { useMagnetic } from '../../hooks/useMagnetic';
import { usePerspectiveTilt } from '../../hooks/usePerspectiveTilt';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';

/* ==========================================================================
   MOTION CONSTANTS: LUXURY EASING & PHYSICS
   ========================================================================== */
export const LUXURY_EASE = [0.16, 1, 0.3, 1] as const;
export const SLOW_DECEL = [0.05, 0.7, 0.1, 1] as const;
export const EDITORIAL_EASE = [0.25, 0.1, 0.25, 1] as const;
export const CURTAIN_EASE = [0.77, 0, 0.175, 1] as const;

/* ==========================================================================
   1. GENERAL REVEAL COMPONENT
   ========================================================================== */
export interface RevealProps {
  children: React.ReactNode;
  variant?: 'fadeUp' | 'fade' | 'maskUp' | 'slideRight' | 'scaleUp' | 'curtainLeft';
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
}

export const Reveal: React.FC<RevealProps> = ({
  children,
  variant = 'fadeUp',
  delay = 0,
  duration = 0.8,
  className = '',
  once = true,
}) => {
  const prefersReduced = usePrefersReducedMotion();

  if (prefersReduced) {
    return <div className={className}>{children}</div>;
  }

  const variants = {
    fadeUp: {
      hidden: { opacity: 0, y: 32 },
      visible: { opacity: 1, y: 0 },
    },
    fade: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    },
    maskUp: {
      hidden: { opacity: 0, y: '100%' },
      visible: { opacity: 1, y: 0 },
    },
    slideRight: {
      hidden: { opacity: 0, x: -30 },
      visible: { opacity: 1, x: 0 },
    },
    scaleUp: {
      hidden: { opacity: 0, scale: 0.96 },
      visible: { opacity: 1, scale: 1 },
    },
    curtainLeft: {
      hidden: { opacity: 0, clipPath: 'inset(0 100% 0 0)' },
      visible: { opacity: 1, clipPath: 'inset(0 0% 0 0)' },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: '-60px' }}
      transition={{
        duration,
        delay,
        ease: LUXURY_EASE,
      }}
      variants={variants[variant]}
      className={className}
    >
      {children}
    </motion.div>
  );
};

/* ==========================================================================
   2. TYPOGRAPHY-SPECIFIC ANIMATIONS
   ========================================================================== */

/**
 * MaskRevealHeading — Premium mask reveal where typography slides up
 * from behind an overflow-hidden mask container.
 */
export const MaskRevealHeading: React.FC<{
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}> = ({ children, delay = 0, duration = 0.9, className = '' }) => {
  const prefersReduced = usePrefersReducedMotion();

  if (prefersReduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.div
        initial={{ y: '110%', opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{
          duration,
          delay,
          ease: LUXURY_EASE,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};

/**
 * WordReveal — Staggered word-by-word text animation
 * Splits a sentence into individual words that reveal in sequence.
 */
export const WordReveal: React.FC<{
  text: string;
  className?: string;
  delay?: number;
  staggerDelay?: number;
  as?: React.ElementType;
}> = ({ text, className = '', delay = 0, staggerDelay = 0.045, as: Component = 'span' }) => {
  const prefersReduced = usePrefersReducedMotion();
  const words = text.split(' ');

  if (prefersReduced) {
    return <Component className={className}>{text}</Component>;
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: delay,
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.65,
        ease: LUXURY_EASE,
      },
    },
  };

  return (
    <motion.span
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      className={`inline-block ${className}`}
    >
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden mr-[0.25em] last:mr-0">
          <motion.span variants={wordVariants} className="inline-block">
            {word}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
};

/**
 * TrackingReveal — Letter spacing transition from expanded to locked precision
 */
export const TrackingReveal: React.FC<{
  children: React.ReactNode;
  initialTracking?: string;
  finalTracking?: string;
  delay?: number;
  duration?: number;
  className?: string;
}> = ({
  children,
  initialTracking = '0.35em',
  finalTracking = '0.2em',
  delay = 0.1,
  duration = 1.1,
  className = '',
}) => {
  const prefersReduced = usePrefersReducedMotion();

  if (prefersReduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, letterSpacing: initialTracking }}
      whileInView={{ opacity: 1, letterSpacing: finalTracking }}
      viewport={{ once: true }}
      transition={{
        duration,
        delay,
        ease: LUXURY_EASE,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

/**
 * BlurToSharpText — Cinematic editorial blur transition into optical clarity
 */
export const BlurToSharpText: React.FC<{
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  initialBlur?: number;
  className?: string;
}> = ({ children, delay = 0.1, duration = 0.85, initialBlur = 12, className = '' }) => {
  const prefersReduced = usePrefersReducedMotion();

  if (prefersReduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, filter: `blur(${initialBlur}px)`, y: 12 }}
      whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{
        duration,
        delay,
        ease: LUXURY_EASE,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

/**
 * LineReveal — Mask reveal for multi-line typography blocks
 */
export const LineReveal: React.FC<{
  lines: string[];
  delay?: number;
  stagger?: number;
  duration?: number;
  className?: string;
  lineClassName?: string;
}> = ({
  lines,
  delay = 0.1,
  stagger = 0.12,
  duration = 0.85,
  className = '',
  lineClassName = '',
}) => {
  const prefersReduced = usePrefersReducedMotion();

  if (prefersReduced) {
    return (
      <div className={className}>
        {lines.map((l, i) => (
          <div key={i} className={lineClassName}>{l}</div>
        ))}
      </div>
    );
  }

  return (
    <div className={className}>
      {lines.map((line, idx) => (
        <div key={idx} className="overflow-hidden">
          <motion.div
            initial={{ y: '110%', opacity: 0 }}
            whileInView={{ y: '0%', opacity: 1 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{
              duration,
              delay: delay + idx * stagger,
              ease: LUXURY_EASE,
            }}
            className={lineClassName}
          >
            {line}
          </motion.div>
        </div>
      ))}
    </div>
  );
};

/**
 * FadeUpText — Gentle upward fade with calm luxury easing
 */
export const FadeUpText: React.FC<{
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  yOffset?: number;
  className?: string;
}> = ({ children, delay = 0.1, duration = 0.75, yOffset = 24, className = '' }) => {
  const prefersReduced = usePrefersReducedMotion();

  if (prefersReduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{
        duration,
        delay,
        ease: LUXURY_EASE,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

/**
 * ScrollTextReveal — Text with dynamic scroll-tied opacity
 */
export const ScrollTextReveal: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = '' }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 90%', 'center center'],
  });
  const opacity = useTransform(scrollYProgress, [0, 1], [0.2, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [24, 0]);

  return (
    <motion.div ref={ref} style={{ opacity, y }} className={className}>
      {children}
    </motion.div>
  );
};

/* ==========================================================================
   3. STAGGER CONTAINERS & MAGNETIC PHYSICS
   ========================================================================== */

export const StaggerContainer: React.FC<{
  children: React.ReactNode;
  staggerDelay?: number;
  delay?: number;
  className?: string;
}> = ({ children, staggerDelay = 0.1, delay = 0, className = '' }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: delay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const StaggerItem: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = '' }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 24 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.7,
            ease: LUXURY_EASE,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

/* ==========================================================================
   4. PARALLAX & DEPTH
   ========================================================================== */

export const Parallax: React.FC<{
  children: React.ReactNode;
  offset?: number;
  className?: string;
}> = ({ children, offset = 40, className = '' }) => {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReduced = usePrefersReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-offset, offset]);

  if (prefersReduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div style={{ y }}>{children}</motion.div>
    </div>
  );
};

export const ParallaxLayer: React.FC<{
  children: React.ReactNode;
  speed?: number; // -1 to 1 (negative moves opposite to scroll)
  className?: string;
}> = ({ children, speed = 0.2, className = '' }) => {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReduced = usePrefersReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-100 * speed, 100 * speed]);

  if (prefersReduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div ref={ref} className={`relative ${className}`}>
      <motion.div style={{ y }}>{children}</motion.div>
    </div>
  );
};

/* ==========================================================================
   5. MAGNETIC PROXIMITY PULL
   ========================================================================== */

export const Magnetic: React.FC<{
  children: React.ReactNode;
  strength?: number;
  className?: string;
}> = ({ children, strength = 0.3, className = '' }) => {
  const { ref, position, handleMouseMove, handleMouseLeave } = useMagnetic({ strength });
  const prefersReduced = usePrefersReducedMotion();

  if (prefersReduced) {
    return <div className={`inline-block ${className}`}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', damping: 20, stiffness: 250, mass: 0.5 }}
      className={`inline-block ${className}`}
    >
      {children}
    </motion.div>
  );
};

/* ==========================================================================
   6. MOUSE-REACTIVE 3D PERSPECTIVE TILT CARD
   ========================================================================== */

export const PerspectiveTiltCard: React.FC<{
  children: React.ReactNode;
  maxRotation?: number;
  className?: string;
}> = ({ children, maxRotation = 6, className = '' }) => {
  const { ref, transformStyle, glarePosition, handleMouseMove, handleMouseLeave } = usePerspectiveTilt({
    maxRotation,
  });

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: transformStyle,
        transition: 'transform 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
        transformStyle: 'preserve-3d',
      }}
      className={`relative rounded-xl transition-all duration-300 ${className}`}
    >
      {/* Light Glare Reflection */}
      <div
        style={{
          background: `radial-gradient(circle at ${glarePosition.x}% ${glarePosition.y}%, rgba(255,255,255,${glarePosition.opacity}) 0%, rgba(255,255,255,0) 60%)`,
        }}
        className="absolute inset-0 pointer-events-none rounded-xl z-20 transition-opacity duration-300"
      />
      {children}
    </div>
  );
};

/* ==========================================================================
   7. PAGE LOAD ORCHESTRATOR
   Phase 1: Logo
   Phase 2: Navigation
   Phase 3: Background Media
   Phase 4: Hero Typography Mask
   Phase 5: Action Buttons
   ========================================================================== */

export const PageLoadOrchestrator: React.FC<{
  phase: 1 | 2 | 3 | 4 | 5;
  children: React.ReactNode;
  className?: string;
  delayOffset?: number;
}> = ({ phase, children, className = '', delayOffset = 0 }) => {
  const prefersReduced = usePrefersReducedMotion();

  // Deliberate, calm phase delays
  const phaseDelays: Record<number, number> = {
    1: 0.1,   // Logo
    2: 0.35,  // Navigation
    3: 0.6,   // Background media
    4: 0.9,   // Hero typography
    5: 1.25,  // Buttons & controls
  };

  const delay = (phaseDelays[phase] || 0) + delayOffset;

  if (prefersReduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: phase === 4 ? 30 : 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.85,
        delay,
        ease: LUXURY_EASE,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

/* ==========================================================================
   8. SECTION TRANSITION & AMBIENT MOTION
   ========================================================================== */

export const SectionTransition: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = '' }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'start center'],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [40, 0]);

  return (
    <motion.section ref={ref} style={{ opacity, y }} className={`relative ${className}`}>
      {children}
    </motion.section>
  );
};

export const AmbientEnvironmentalLight: React.FC<{
  className?: string;
}> = ({ className = '' }) => {
  const prefersReduced = usePrefersReducedMotion();

  if (prefersReduced) return null;

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      <motion.div
        animate={{
          x: ['-5%', '5%', '-5%'],
          y: ['-2%', '3%', '-2%'],
          opacity: [0.35, 0.55, 0.35],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="w-[80vw] h-[50vw] max-w-5xl rounded-full bg-radial from-[#1E5E45]/8 via-[#EAE4D6]/30 to-transparent blur-3xl absolute -top-40 left-1/2 -translate-x-1/2"
      />
    </div>
  );
};
