import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { useCursor } from '../../context/CursorContext';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';

interface InNumbersProps {
  className?: string;
}

export const InNumbers: React.FC<InNumbersProps> = ({ className = '' }) => {
  const containerRef = useRef<HTMLElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-40px' });
  const { setCursorVariant, resetCursor } = useCursor();
  const prefersReduced = usePrefersReducedMotion();

  const [count40, setCount40] = useState(0);
  const [count72, setCount72] = useState(0);
  const [count113, setCount113] = useState(0);
  const [count5000, setCount5000] = useState(0);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  useEffect(() => {
    if (!isInView) return;

    if (prefersReduced) {
      setCount40(40);
      setCount72(72);
      setCount113(11.3);
      setCount5000(5000);
      return;
    }

    // Slow, measured count-up animation (~2.8s)
    const duration = 2800;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3.5);

      setCount40(Math.round(ease * 40));
      setCount72(Math.round(ease * 72));
      setCount113(Number((ease * 11.3).toFixed(1)));
      setCount5000(Math.round(ease * 5000));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, prefersReduced]);

  const stats = [
    {
      numeral: count40,
      suffix: '',
      label: 'Years of Legacy',
      sublabel: 'Four decades of architectural leadership',
    },
    {
      numeral: count72,
      suffix: '',
      label: 'Projects Completed',
      sublabel: 'Delivered across prime urban corridors',
    },
    {
      numeral: count113,
      suffix: 'M',
      label: 'Sq. Ft. Developed',
      sublabel: 'Master-crafted residential & commercial spaces',
    },
    {
      numeral: count5000.toLocaleString(),
      suffix: '+',
      label: 'Happy Families',
      sublabel: 'Generations placing their trust in Vaswani',
    },
  ];

  return (
    <section
      id="in-numbers"
      ref={containerRef}
      className={`relative w-full bg-[#EFECE6] border-y border-[#135A5C]/12 text-[#135A5C] py-10 sm:py-12 lg:py-14 select-none overflow-hidden ${className}`}
      aria-label="Vaswani Legacy In Numbers"
    >
      <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        {/* Compact, Confident Architectural Statistics Band */}
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[#135A5C]/12">
          {stats.map((item, idx) => {
            const isHovered = hoveredIdx === idx;
            const isDimmed = hoveredIdx !== null && !isHovered;

            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 14 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                onMouseEnter={() => {
                  setHoveredIdx(idx);
                  setCursorVariant('pointer');
                }}
                onMouseLeave={() => {
                  setHoveredIdx(null);
                  resetCursor();
                }}
                className={`py-4 sm:py-2 px-4 sm:px-6 lg:px-8 transition-opacity duration-300 cursor-pointer flex flex-col justify-between ${
                  isDimmed ? 'opacity-40' : 'opacity-100'
                }`}
              >
                <div>
                  {/* Metric Numeral */}
                  <div className="flex items-baseline mb-1">
                    <span className="font-editorial text-[36px] sm:text-[44px] lg:text-[52px] font-light leading-none tracking-tight text-[#135A5C]">
                      {item.numeral}
                      {item.suffix && (
                        <span className="font-editorial font-light text-[#C4A265] ml-0.5">
                          {item.suffix}
                        </span>
                      )}
                    </span>
                  </div>

                  {/* Metric Label */}
                  <p className="font-sans text-[12px] sm:text-[13px] tracking-[0.2em] uppercase text-[#135A5C] font-semibold leading-snug">
                    {item.label}
                  </p>
                </div>

                {/* Subtitle */}
                <p className="font-sans text-[11px] sm:text-[12px] text-[#135A5C]/60 mt-1.5 leading-relaxed hidden md:block">
                  {item.sublabel}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
