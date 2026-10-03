import React, { useEffect, useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useSmoothScroll } from '../../context/SmoothScrollContext';

export const ScrollToTop: React.FC = () => {
  const { pathname, search, hash } = useLocation();
  const { lenis } = useSmoothScroll();

  // Prevent browser from automatically restoring previous scroll positions
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  useLayoutEffect(() => {
    if (!hash) {
      const resetScroll = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
        if (lenis) {
          lenis.scrollTo(0, { immediate: true });
        }
      };

      // 1. Immediate reset before paint
      resetScroll();

      // 2. Next animation frame
      const rafId = requestAnimationFrame(resetScroll);

      // 3. Tiny timeout backup in case of layout shifts during mount
      const timeoutId = setTimeout(resetScroll, 40);

      return () => {
        cancelAnimationFrame(rafId);
        clearTimeout(timeoutId);
      };
    }
  }, [pathname, search, hash, lenis]);

  return null;
};

