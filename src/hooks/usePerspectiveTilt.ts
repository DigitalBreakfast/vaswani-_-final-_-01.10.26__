import React, { useState, useRef, useCallback } from 'react';
import { usePrefersReducedMotion } from './usePrefersReducedMotion';

interface UsePerspectiveTiltOptions {
  maxRotation?: number; // Maximum tilt angle in degrees (e.g. 6 to 10 for subtlety)
  perspective?: number; // CSS perspective distance in px (e.g. 1000)
  scale?: number;       // Gentle scale on hover (e.g. 1.015)
  speed?: number;       // Transition speed
}

export function usePerspectiveTilt(options: UsePerspectiveTiltOptions = {}) {
  const { maxRotation = 7, perspective = 1000, scale = 1.015 } = options;
  const ref = useRef<HTMLDivElement | null>(null);
  const [transformStyle, setTransformStyle] = useState<string>('');
  const [glarePosition, setGlarePosition] = useState<{ x: number; y: number; opacity: number }>({
    x: 50,
    y: 50,
    opacity: 0,
  });
  const prefersReducedMotion = usePrefersReducedMotion();

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (prefersReducedMotion || !ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      // Calculate tilt angles normalized between -1 and 1
      const rotateX = ((y - centerY) / centerY) * -maxRotation;
      const rotateY = ((x - centerX) / centerX) * maxRotation;

      setTransformStyle(
        `perspective(${perspective}px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(
          2
        )}deg) scale3d(${scale}, ${scale}, ${scale})`
      );

      // Glare reflection coordinates in percentage
      setGlarePosition({
        x: (x / rect.width) * 100,
        y: (y / rect.height) * 100,
        opacity: 0.15,
      });
    },
    [maxRotation, perspective, scale, prefersReducedMotion]
  );

  const handleMouseLeave = useCallback(() => {
    if (prefersReducedMotion) return;
    setTransformStyle(`perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`);
    setGlarePosition((prev) => ({ ...prev, opacity: 0 }));
  }, [perspective, prefersReducedMotion]);

  return {
    ref,
    transformStyle,
    glarePosition,
    handleMouseMove,
    handleMouseLeave,
  };
}
