import React from 'react';

interface BaseTypographyProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

/* ==========================================================================
   STANDARDIZED 4-LEVEL ARCHITECTURAL TYPOGRAPHY SYSTEM
   • Headings: Cormorant Garamond
   • Body & UI: Plus Jakarta Sans
   ========================================================================== */

/**
 * LEVEL 01: Hero Display
 * Font: Cormorant Garamond
 * Desktop: 88px | Tablet: 72px | Mobile: 52px
 * Used ONLY for Homepage Hero & Page Hero Titles
 */
export const HeroDisplay: React.FC<BaseTypographyProps & { uppercase?: boolean; italic?: boolean }> = ({
  children,
  className = '',
  uppercase = false,
  italic = false,
  as: Component = 'h1',
  ...props
}) => {
  return (
    <Component
      className={`font-editorial text-[52px] md:text-[72px] lg:text-[88px] font-light text-[#1A1C1E] tracking-tight leading-[1.02] ${
        uppercase ? 'uppercase tracking-wide' : ''
      } ${italic ? 'italic' : ''} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
};

export const DisplayXL = HeroDisplay;

/**
 * LEVEL 02: Section Headings
 * Font: Cormorant Garamond
 * Desktop: 56px | Tablet: 44px | Mobile: 36px
 * Used for: All section headings, Project titles, Editorial headlines, CTA headlines.
 * Every section heading across the website uses this same size.
 */
export const SectionHeading: React.FC<BaseTypographyProps & {
  badge?: string;
  subtitle?: string;
  italic?: boolean;
}> = ({
  children,
  className = '',
  badge,
  subtitle,
  italic = false,
  as: Component = 'h2',
  ...props
}) => {
  return (
    <div className="space-y-4">
      {badge && <Eyebrow dot>{badge}</Eyebrow>}
      <Component
        className={`font-editorial text-[36px] md:text-[44px] lg:text-[56px] font-light text-[#1A1C1E] tracking-tight leading-[1.1] ${
          italic ? 'italic' : ''
        } ${className}`}
        {...props}
      >
        {children}
      </Component>
      {subtitle && (
        <LeadParagraph tone="muted">
          {subtitle}
        </LeadParagraph>
      )}
    </div>
  );
};

export const DisplayLarge: React.FC<BaseTypographyProps & { uppercase?: boolean; italic?: boolean }> = ({
  children,
  className = '',
  uppercase = false,
  italic = false,
  as: Component = 'h2',
  ...props
}) => {
  return (
    <Component
      className={`font-editorial text-[36px] md:text-[44px] lg:text-[56px] font-light text-[#1A1C1E] tracking-tight leading-[1.1] ${
        uppercase ? 'uppercase tracking-wider' : ''
      } ${italic ? 'italic' : ''} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
};

export const HeadingLarge = DisplayLarge;
export const HeadingMedium = DisplayLarge;
export const HeadingSmall = DisplayLarge;
export const DisplayHeading = DisplayLarge;

/**
 * LEVEL 03: Lead Paragraph
 * Font: Plus Jakarta Sans
 * Desktop: 24px | Tablet: 22px | Mobile: 20px
 * Maximum width: 700px
 * Used for: Introductory paragraphs, Supporting statements, Section introductions
 */
export const LeadParagraph: React.FC<BaseTypographyProps & { tone?: 'primary' | 'muted' | 'subtle'; italic?: boolean }> = ({
  children,
  className = '',
  tone = 'primary',
  italic = false,
  as: Component = 'p',
  ...props
}) => {
  const toneClass = {
    primary: 'text-[#1A1C1E]',
    muted: 'text-[#525866]',
    subtle: 'text-[#6C7382]',
  }[tone];

  return (
    <Component
      className={`font-sans text-[20px] md:text-[22px] lg:text-[24px] font-normal leading-[1.5] max-w-[700px] ${
        italic ? 'italic' : ''
      } ${toneClass} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
};

export const IntroParagraph = LeadParagraph;
export const PhilosophyStatement = LeadParagraph;

/**
 * LEVEL 04: Body & Interface
 * Font: Plus Jakarta Sans
 * Desktop: 18px | Tablet: 17px | Mobile: 16px
 * Use this single size for:
 * Paragraphs, Navigation, Buttons, Forms, Footer, Labels, Cards, Metadata,
 * Contact info, Project info, Captions, Lists, Statistics labels, Eyebrows, Menu items
 */
export const BodyText: React.FC<BaseTypographyProps & {
  tone?: 'primary' | 'muted' | 'subtle' | 'contrast';
  weight?: 'light' | 'normal' | 'medium' | 'semibold';
}> = ({
  children,
  className = '',
  tone = 'muted',
  weight = 'normal',
  as: Component = 'p',
  ...props
}) => {
  const toneClass = {
    primary: 'text-[#1A1C1E]',
    muted: 'text-[#525866]',
    subtle: 'text-[#6C7382]',
    contrast: 'text-[#FAF8F5]',
  }[tone];

  const weightClass = {
    light: 'font-light',
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
  }[weight];

  return (
    <Component
      className={`font-sans text-[16px] md:text-[17px] lg:text-[18px] ${weightClass} leading-[1.6] ${toneClass} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
};

export const BodyLarge = BodyText;
export const BodyRegular = BodyText;
export const BodySmall = BodyText;
export const Body = BodyText;
export const BodyInterface = BodyText;
export const SubHeading = BodyText;

/**
 * Eyebrow / Category Label (Level 04 size: 16px/17px/18px, styled via tracking, weight, uppercase)
 */
export const Eyebrow: React.FC<BaseTypographyProps & {
  dot?: boolean;
  color?: 'green' | 'muted' | 'charcoal';
}> = ({
  children,
  className = '',
  dot = false,
  color = 'green',
  as: Component = 'span',
  ...props
}) => {
  const colorClass = {
    green: 'text-[#1E5E45]',
    muted: 'text-[#6C7382]',
    charcoal: 'text-[#1A1C1E]',
  }[color];

  return (
    <Component
      className={`inline-flex items-center gap-2 font-sans text-[16px] md:text-[17px] lg:text-[18px] uppercase tracking-wider font-medium select-none ${colorClass} ${className}`}
      {...props}
    >
      {dot && <span className="w-2 h-2 rounded-full bg-[#1E5E45] inline-block animate-pulse shrink-0" />}
      {children}
    </Component>
  );
};

export const Caption = Eyebrow;

/**
 * Editorial Quote Component
 */
export const EditorialQuote: React.FC<BaseTypographyProps & {
  author?: string;
  role?: string;
}> = ({
  children,
  author,
  role,
  className = '',
  ...props
}) => {
  return (
    <blockquote className={`relative pl-6 sm:pl-8 border-l-2 border-[#1E5E45] space-y-4 my-8 ${className}`} {...props}>
      <p className="font-editorial italic font-light text-[36px] md:text-[44px] lg:text-[56px] leading-[1.1] text-[#1A1C1E]">
        "{children}"
      </p>
      {(author || role) && (
        <footer className="flex items-center gap-3 pt-2 font-sans text-[16px] md:text-[17px] lg:text-[18px]">
          {author && <span className="font-medium text-[#1A1C1E]">{author}</span>}
          {author && role && <span className="text-[#8990A0]">•</span>}
          {role && <span className="text-[#6C7382]">{role}</span>}
        </footer>
      )}
    </blockquote>
  );
};

/**
 * Editorial Architectural Stat
 * Number: Cormorant Garamond Level 02 (56px) or Level 01 (88px)
 * Labels / Metadata: Plus Jakarta Sans Level 04 (16px/17px/18px)
 */
export const AgencyStat: React.FC<{
  value: string | number;
  unit?: string;
  label: string;
  description?: string;
  stroke?: boolean;
  className?: string;
}> = ({
  value,
  unit,
  label,
  description,
  stroke = false,
  className = '',
}) => {
  return (
    <div className={`space-y-2 ${className}`}>
      <div className="flex items-baseline gap-2">
        <span
          className={`font-editorial font-light text-[36px] md:text-[44px] lg:text-[56px] text-[#1A1C1E] leading-none ${
            stroke ? 'text-transparent [-webkit-text-stroke:1.5px_#1A1C1E]' : ''
          }`}
        >
          {value}
        </span>
        {unit && (
          <span className="font-sans text-[16px] md:text-[17px] lg:text-[18px] uppercase tracking-wider font-semibold text-[#1E5E45]">
            {unit}
          </span>
        )}
      </div>
      <div className="space-y-1">
        <span className="block font-sans text-[16px] md:text-[17px] lg:text-[18px] font-medium text-[#1A1C1E]">
          {label}
        </span>
        {description && (
          <span className="block font-sans text-[16px] md:text-[17px] lg:text-[18px] text-[#525866] leading-relaxed">
            {description}
          </span>
        )}
      </div>
    </div>
  );
};

export const AgencyNumber: React.FC<BaseTypographyProps & { stroke?: boolean }> = ({
  children,
  className = '',
  stroke = false,
  ...props
}) => {
  return (
    <span
      className={`font-editorial font-light leading-none inline-block text-[52px] md:text-[72px] lg:text-[88px] ${
        stroke
          ? 'text-transparent [-webkit-text-stroke:1.5px_rgba(26,28,30,0.22)]'
          : 'text-[#1A1C1E]/20'
      } ${className}`}
      {...props}
    >
      {children}
    </span>
  );
};

export const ArchNumber = AgencyNumber;

/**
 * EditorialDivider — Architectural divider line
 */
export const EditorialDivider: React.FC<{ className?: string; subtle?: boolean; marker?: string }> = ({
  className = '',
  subtle = false,
  marker,
}) => {
  if (marker) {
    return (
      <div className={`flex items-center gap-4 my-8 ${className}`}>
        <div className="flex-1 h-px bg-[#EAE4D6]" />
        <span className="font-sans text-[16px] md:text-[17px] lg:text-[18px] text-[#8990A0] uppercase tracking-wider">{marker}</span>
        <div className="flex-1 h-px bg-[#EAE4D6]" />
      </div>
    );
  }

  return (
    <div
      className={`w-full h-px ${
        subtle
          ? 'bg-gradient-to-r from-transparent via-[#1A1C1E]/6 to-transparent'
          : 'bg-[#EAE4D6]'
      } ${className}`}
    />
  );
};
