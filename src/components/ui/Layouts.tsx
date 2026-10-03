import React from 'react';

/**
 * 1. Single Column Layout (Constrained max-w-4xl reading width)
 */
export const SingleColumnLayout: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = '' }) => (
  <div className={`w-full max-w-4xl mx-auto px-4 sm:px-8 space-y-8 ${className}`}>
    {children}
  </div>
);

/**
 * 2. Two Column Split (50/50 or custom ratio)
 */
export const TwoColumnSplit: React.FC<{
  left: React.ReactNode;
  right: React.ReactNode;
  ratio?: '50/50' | '60/40' | '40/60' | '70/30';
  className?: string;
}> = ({ left, right, ratio = '50/50', className = '' }) => {
  const gridClass = {
    '50/50': 'grid-cols-1 lg:grid-cols-2',
    '60/40': 'grid-cols-1 lg:grid-cols-12 [&>*:first-child]:lg:col-span-7 [&>*:last-child]:lg:col-span-5',
    '40/60': 'grid-cols-1 lg:grid-cols-12 [&>*:first-child]:lg:col-span-5 [&>*:last-child]:lg:col-span-7',
    '70/30': 'grid-cols-1 lg:grid-cols-12 [&>*:first-child]:lg:col-span-8 [&>*:last-child]:lg:col-span-4',
  }[ratio];

  return (
    <div className={`grid ${gridClass} gap-8 lg:gap-16 items-center ${className}`}>
      <div>{left}</div>
      <div>{right}</div>
    </div>
  );
};

/**
 * 3. Three Column Grid
 */
export const ThreeColumnGrid: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = '' }) => (
  <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 ${className}`}>
    {children}
  </div>
);

/**
 * 4. Centered Content Container
 */
export const CenteredContent: React.FC<{
  children: React.ReactNode;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}> = ({ children, maxWidth = 'md', className = '' }) => {
  const maxW = {
    sm: 'max-w-xl',
    md: 'max-w-3xl',
    lg: 'max-w-5xl',
    xl: 'max-w-7xl',
  }[maxWidth];

  return (
    <div className={`w-full ${maxW} mx-auto px-4 text-center space-y-6 ${className}`}>
      {children}
    </div>
  );
};

/**
 * 5. Asymmetrical Editorial Offset Grid
 */
export const AsymmetricalLayout: React.FC<{
  leadContent: React.ReactNode;
  sideCards: React.ReactNode[];
  className?: string;
}> = ({ leadContent, sideCards, className = '' }) => (
  <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-start ${className}`}>
    <div className="lg:col-span-7 space-y-6">{leadContent}</div>
    <div className="lg:col-span-5 space-y-6">{sideCards}</div>
  </div>
);
