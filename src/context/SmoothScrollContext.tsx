import React, { createContext, useContext, useEffect, useRef, useState, useCallback } from 'react';
import Lenis from 'lenis';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';

interface SmoothScrollContextType {
  lenis: Lenis | null;
  scrollTo: (target: string | number | HTMLElement, options?: { offset?: number; duration?: number; immediate?: boolean }) => void;
  stop: () => void;
  start: () => void;
  isSmoothEnabled: boolean;
  setIsSmoothEnabled: (enabled: boolean) => void;
}

const SmoothScrollContext = createContext<SmoothScrollContextType | undefined>(undefined);

export const SmoothScrollProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lenis, setLenis] = useState<Lenis | null>(null);
  const [isSmoothEnabled, setIsSmoothEnabled] = useState(true);
  const prefersReducedMotion = usePrefersReducedMotion();
  const reqIdRef = useRef<number | null>(null);

  useEffect(() => {
    // If user prefers reduced motion or disabled by user preference
    if (prefersReducedMotion || !isSmoothEnabled) {
      if (lenis) {
        lenis.destroy();
        setLenis(null);
      }
      return;
    }

    // Initialize Lenis with architectural luxury dampening
    const lenisInstance = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Luxurious exponential deceleration curve
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.5,
      infinite: false,
    });

    setLenis(lenisInstance);

    function raf(time: number) {
      lenisInstance.raf(time);
      reqIdRef.current = requestAnimationFrame(raf);
    }

    reqIdRef.current = requestAnimationFrame(raf);

    return () => {
      if (reqIdRef.current) cancelAnimationFrame(reqIdRef.current);
      lenisInstance.destroy();
    };
  }, [prefersReducedMotion, isSmoothEnabled]);

  const scrollTo = useCallback(
    (target: string | number | HTMLElement, options?: { offset?: number; duration?: number; immediate?: boolean }) => {
      if (lenis) {
        lenis.scrollTo(target, options);
      } else {
        if (typeof target === 'string') {
          const el = document.querySelector(target);
          if (el) el.scrollIntoView({ behavior: options?.immediate ? 'auto' : 'smooth' });
        } else if (typeof target === 'number') {
          window.scrollTo({ top: target, behavior: options?.immediate ? 'auto' : 'smooth' });
        } else if (target instanceof HTMLElement) {
          target.scrollIntoView({ behavior: options?.immediate ? 'auto' : 'smooth' });
        }
      }
    },
    [lenis]
  );

  const stop = useCallback(() => {
    lenis?.stop();
  }, [lenis]);

  const start = useCallback(() => {
    lenis?.start();
  }, [lenis]);

  return (
    <SmoothScrollContext.Provider
      value={{
        lenis,
        scrollTo,
        stop,
        start,
        isSmoothEnabled,
        setIsSmoothEnabled,
      }}
    >
      {children}
    </SmoothScrollContext.Provider>
  );
};

export const useSmoothScroll = (): SmoothScrollContextType => {
  const context = useContext(SmoothScrollContext);
  if (!context) {
    throw new Error('useSmoothScroll must be used within a SmoothScrollProvider');
  }
  return context;
};
