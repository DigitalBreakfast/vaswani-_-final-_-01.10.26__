import React, { useEffect, useState, useRef } from 'react';
import { useInView } from 'motion/react';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';

interface AnimatedCounterProps {
  value: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  decimals?: number;
  className?: string;
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  value,
  prefix = '',
  suffix = '',
  duration = 1.8,
  decimals = 0,
  className = '',
}) => {
  const [displayValue, setDisplayValue] = useState<number>(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const prefersReduced = usePrefersReducedMotion();

  useEffect(() => {
    if (!isInView) return;

    if (prefersReduced) {
      setDisplayValue(value);
      return;
    }

    let startTime: number | null = null;
    let animationFrameId: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      const easeOutProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = easeOutProgress * value;

      setDisplayValue(current);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setDisplayValue(value);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isInView, value, duration, prefersReduced]);

  const formattedNumber = decimals > 0
    ? displayValue.toFixed(decimals)
    : Math.floor(displayValue).toLocaleString();

  return (
    <span ref={ref} className={`font-editorial font-light tracking-tight inline-block ${className}`}>
      {prefix}
      {formattedNumber}
      {suffix}
    </span>
  );
};

export interface StatItem {
  id?: string;
  number: number;
  prefix?: string;
  suffix?: string;
  label: string;
  description?: string;
  decimals?: number;
}

export const StatBlock: React.FC<{
  stat: StatItem;
  size?: 'sm' | 'md' | 'lg' | 'hero';
  className?: string;
}> = ({ stat, className = '' }) => {
  return (
    <div className={`space-y-2 ${className}`}>
      <div className="flex items-baseline text-[#1A1C1E]">
        <AnimatedCounter
          value={stat.number}
          prefix={stat.prefix}
          suffix={stat.suffix}
          decimals={stat.decimals}
          className="text-[36px] md:text-[44px] lg:text-[56px] text-[#1A1C1E]"
        />
      </div>
      <div className="space-y-1 font-sans text-[16px] md:text-[17px] lg:text-[18px]">
        <p className="font-semibold uppercase tracking-wider text-[#1E5E45]">
          {stat.label}
        </p>
        {stat.description && (
          <p className="text-[#6C7382] leading-normal max-w-xs font-light">
            {stat.description}
          </p>
        )}
      </div>
    </div>
  );
};

export const StatGrid: React.FC<{
  stats: StatItem[];
  columns?: 2 | 3 | 4;
  className?: string;
}> = ({ stats, columns = 4, className = '' }) => {
  const colClass = {
    2: 'grid-cols-1 sm:grid-cols-2',
    3: 'grid-cols-1 sm:grid-cols-3',
    4: 'grid-cols-2 lg:grid-cols-4',
  }[columns];

  return (
    <div className={`grid ${colClass} gap-8 sm:gap-12 py-8 border-y border-[#EAE4D6] ${className}`}>
      {stats.map((stat, i) => (
        <StatBlock key={stat.id || i} stat={stat} size="md" />
      ))}
    </div>
  );
};

export const StatCard: React.FC<{
  stat: StatItem;
  className?: string;
}> = ({ stat, className = '' }) => {
  return (
    <div className={`p-8 rounded-xl bg-white border border-[#EAE4D6] shadow-sm hover:border-[#1E5E45]/40 transition-all duration-300 space-y-4 ${className}`}>
      <AnimatedCounter
        value={stat.number}
        prefix={stat.prefix}
        suffix={stat.suffix}
        decimals={stat.decimals}
        className="text-[36px] md:text-[44px] lg:text-[56px] text-[#1E5E45]"
      />
      <div className="space-y-1 pt-3 border-t border-[#EAE4D6] font-sans text-[16px] md:text-[17px] lg:text-[18px]">
        <h4 className="font-semibold uppercase tracking-wider text-[#1A1C1E]">
          {stat.label}
        </h4>
        {stat.description && (
          <p className="text-[#525866] leading-relaxed font-light">
            {stat.description}
          </p>
        )}
      </div>
    </div>
  );
};
