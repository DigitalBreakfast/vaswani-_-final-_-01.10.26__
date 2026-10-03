import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';
import { useCursor } from '../../context/CursorContext';
import { ArrowLeftRight, Play, Pause, Compass } from 'lucide-react';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';

export const CustomCursor: React.FC = () => {
  const { variant, label } = useCursor();
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // High quality spring dampening for follower ring with zero jitter
  const springConfig = { damping: 28, stiffness: 350, mass: 0.45 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Detect touch-only device
    const checkTouch = () => {
      if (window.matchMedia('(hover: none) and (pointer: coarse)').matches) {
        setIsTouchDevice(true);
      }
    };
    checkTouch();

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    // Apply global body class for cursor hiding
    document.body.classList.add('custom-cursor-active');

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.body.classList.remove('custom-cursor-active');
    };
  }, [mouseX, mouseY, isVisible]);

  if (isTouchDevice || variant === 'hidden' || !isVisible || prefersReducedMotion) {
    return null;
  }

  const isViewMode = variant === 'view';
  const isExplore = variant === 'explore';
  const isPointer = variant === 'pointer';
  const isDrag = variant === 'drag';
  const isPlay = variant === 'play';
  const isPause = variant === 'pause';
  const isMagnetic = variant === 'magnetic';
  const isText = variant === 'text';

  const isSpecialPill = isViewMode || isExplore || isPlay || isPause;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden select-none">
      {/* Follower Outer Ring / Bubble */}
      <motion.div
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isSpecialPill ? 1 : isPointer ? 1.4 : isDrag ? 1.4 : isMagnetic ? 1.6 : isText ? 0.8 : 1,
          width: isExplore ? 56 : isViewMode ? 48 : isPlay || isPause ? 40 : isText ? 4 : 36,
          height: isExplore ? 56 : isViewMode ? 48 : isPlay || isPause ? 40 : isText ? 28 : 36,
          borderRadius: isText ? '2px' : '9999px',
          backgroundColor: isViewMode
            ? 'rgba(21, 46, 40, 0.94)'
            : isExplore
            ? 'rgba(21, 46, 40, 0.94)'
            : isPlay || isPause
            ? 'rgba(26, 28, 30, 0.92)'
            : isPointer
            ? 'rgba(21, 46, 40, 0.12)'
            : isMagnetic
            ? 'rgba(21, 46, 40, 0.2)'
            : isText
            ? 'rgba(21, 46, 40, 0.8)'
            : 'rgba(26, 28, 30, 0.04)',
          borderColor: isSpecialPill
            ? 'rgba(215, 194, 163, 0.3)'
            : isPointer || isMagnetic
            ? '#152E28'
            : isText
            ? 'transparent'
            : 'rgba(26, 28, 30, 0.2)',
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 320 }}
        className="border backdrop-blur-xs flex items-center justify-center text-center shadow-md pointer-events-none transition-colors"
      >
        {isViewMode && (
          <span className="font-sans text-[8px] font-medium text-[#FAF8F5] uppercase tracking-[0.16em] animate-in fade-in zoom-in duration-200">
            {label || 'VIEW'}
          </span>
        )}

        {isExplore && (
          <div className="flex flex-col items-center justify-center p-1 text-[#FAF8F5]">
            <Compass
              className="w-2.5 h-2.5 text-[#d7c2a3] animate-spin mb-0.5"
              style={{ animationDuration: '14s' }}
            />
            <span className="font-sans text-[7.5px] sm:text-[8px] font-medium uppercase tracking-[0.12em] leading-[1.12] max-w-[48px] text-center line-clamp-3">
              {label || 'EXPLORE'}
            </span>
          </div>
        )}

        {isPlay && (
          <div className="flex items-center justify-center text-[#FAF8F5]">
            <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
          </div>
        )}

        {isPause && (
          <div className="flex items-center justify-center text-[#FAF8F5]">
            <Pause className="w-3.5 h-3.5 fill-current" />
          </div>
        )}

        {isDrag && (
          <ArrowLeftRight className="w-4 h-4 text-[#152E28] animate-pulse" />
        )}
      </motion.div>

      {/* Tiny Core Precise Dot (hidden in special pill modes and text mode) */}
      {!isSpecialPill && !isText && (
        <motion.div
          style={{
            x: mouseX,
            y: mouseY,
            translateX: '-50%',
            translateY: '-50%',
          }}
          animate={{
            scale: isPointer ? 0.5 : isMagnetic ? 0 : 1,
            backgroundColor: isPointer ? '#152E28' : '#1A1C1E',
          }}
          transition={{ duration: 0.15 }}
          className="w-1.5 h-1.5 rounded-full pointer-events-none fixed top-0 left-0 z-[10000]"
        />
      )}
    </div>
  );
};
