import { useState, useEffect } from 'react';

export interface ScrollState {
  scrollY: number;
  scrollX: number;
  scrollDirection: 'up' | 'down' | null;
  progress: number;
}

export function useScrollPosition(): ScrollState {
  const [scrollState, setScrollState] = useState<ScrollState>({
    scrollY: 0,
    scrollX: 0,
    scrollDirection: null,
    progress: 0,
  });

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const currentScrollX = window.scrollX;
      const totalScrollable = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalScrollable > 0 ? (currentScrollY / totalScrollable) * 100 : 0;
      
      const direction = currentScrollY > lastScrollY ? 'down' : currentScrollY < lastScrollY ? 'up' : null;

      setScrollState({
        scrollY: currentScrollY,
        scrollX: currentScrollX,
        scrollDirection: direction,
        progress,
      });

      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return scrollState;
}
