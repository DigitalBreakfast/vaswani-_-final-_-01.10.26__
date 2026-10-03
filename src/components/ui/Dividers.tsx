import React from 'react';

/**
 * 1. Hairline Divider
 */
export const HairlineDivider: React.FC<{ className?: string }> = ({ className = '' }) => (
  <hr className={`border-t border-[#EAE4D6] my-6 w-full ${className}`} />
);

/**
 * 2. Gradient Divider
 */
export const GradientDivider: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`h-[1.5px] w-full bg-gradient-to-r from-transparent via-[#1E5E45]/40 to-transparent my-8 ${className}`} />
);

/**
 * 3. Text Divider (Centered label with flanking lines)
 */
export const TextDivider: React.FC<{
  label: string;
  className?: string;
}> = ({ label, className = '' }) => (
  <div className={`relative flex items-center justify-center my-8 ${className}`}>
    <div className="flex-grow border-t border-[#EAE4D6]" />
    <span className="shrink-0 px-4 font-sans text-[16px] md:text-[17px] lg:text-[18px] uppercase tracking-wide text-[#8990A0] bg-[#FAF8F5] font-semibold">
      {label}
    </span>
    <div className="flex-grow border-t border-[#EAE4D6]" />
  </div>
);

/**
 * 4. Number Divider (Sequential section boundary)
 */
export const NumberDivider: React.FC<{
  number: string;
  title: string;
  className?: string;
}> = ({ number, title, className = '' }) => (
  <div className={`flex items-baseline justify-between py-4 border-b border-[#EAE4D6] font-sans text-[16px] md:text-[17px] lg:text-[18px] ${className}`}>
    <span className="font-semibold text-[#1E5E45] tracking-wide">
      {number}
    </span>
    <span className="uppercase tracking-wide text-[#6C7382] font-medium">
      {title}
    </span>
  </div>
);
