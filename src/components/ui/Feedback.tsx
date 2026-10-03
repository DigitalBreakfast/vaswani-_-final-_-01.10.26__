import React from 'react';
import { Compass } from 'lucide-react';
import { Button } from './Button';

/**
 * 1. Minimal Architectural Empty State
 */
export const EmptyState: React.FC<{
  title?: string;
  description?: string;
  actionText?: string;
  onAction?: () => void;
  icon?: React.ReactNode;
  className?: string;
}> = ({
  title = 'No Records Found',
  description = 'There are no active entries matching your specified architectural filters or search query.',
  actionText = 'Reset Search Filters',
  onAction,
  icon = <Compass className="w-8 h-8 text-[#1E5E45]" />,
  className = '',
}) => {
  return (
    <div className={`p-12 sm:p-16 rounded-2xl bg-white border border-[#EAE4D6] shadow-sm flex flex-col items-center justify-center text-center space-y-4 max-w-xl mx-auto ${className}`}>
      <div className="w-16 h-16 rounded-full bg-[#FAF8F5] border border-[#EAE4D6] flex items-center justify-center">
        {icon}
      </div>
      <div className="space-y-2">
        <h4 className="font-editorial text-[36px] md:text-[44px] font-light text-[#1A1C1E] leading-[1.1]">{title}</h4>
        <p className="font-sans text-[16px] md:text-[17px] lg:text-[18px] text-[#6C7382] max-w-sm leading-relaxed">{description}</p>
      </div>
      {actionText && (
        <Button variant="secondary" size="sm" onClick={onAction}>
          {actionText}
        </Button>
      )}
    </div>
  );
};

/**
 * 2. Skeleton Loaders
 */
export const SkeletonCard: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`rounded-xl bg-white border border-[#EAE4D6] overflow-hidden p-6 space-y-4 animate-pulse ${className}`}>
    <div className="h-48 bg-[#EAE4D6] rounded-lg w-full" />
    <div className="space-y-2">
      <div className="h-4 bg-[#EAE4D6] rounded w-3/4" />
      <div className="h-3 bg-[#EAE4D6] rounded w-1/2" />
    </div>
    <div className="h-10 bg-[#EAE4D6] rounded-full w-28 mt-4" />
  </div>
);

export const SkeletonText: React.FC<{
  lines?: number;
  className?: string;
}> = ({ lines = 3, className = '' }) => (
  <div className={`space-y-2.5 animate-pulse ${className}`}>
    {Array.from({ length: lines }).map((_, i) => (
      <div
        key={i}
        style={{ width: i === lines - 1 ? '60%' : '100%' }}
        className="h-3.5 bg-[#EAE4D6] rounded"
      />
    ))}
  </div>
);

/**
 * 3. Architectural Progress Ring
 */
export const ArchitecturalProgressRing: React.FC<{
  progress: number; // 0 to 100
  size?: number;
  strokeWidth?: number;
  label?: string;
  className?: string;
}> = ({ progress, size = 90, strokeWidth = 4, label, className = '' }) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className={`inline-flex flex-col items-center justify-center font-sans ${className}`}>
      <div className="relative" style={{ width: size, height: size }}>
        <svg className="w-full h-full transform -rotate-90">
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="#EAE4D6"
            strokeWidth={strokeWidth}
            fill="transparent"
          />
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="#1E5E45"
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            fill="transparent"
            className="transition-all duration-500 ease-out"
          />
        </svg>
        <span className="absolute inset-0 flex items-center justify-center font-sans font-semibold text-[16px] md:text-[17px] lg:text-[18px] text-[#1A1C1E]">
          {Math.round(progress)}%
        </span>
      </div>
      {label && <span className="font-sans text-[16px] uppercase tracking-wide text-[#6C7382] mt-2 font-medium">{label}</span>}
    </div>
  );
};
