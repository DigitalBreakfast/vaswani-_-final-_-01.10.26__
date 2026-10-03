import React from 'react';
import { Button } from './Button';
import { useNavigation } from '../../context/NavigationContext';

/**
 * 1. Split Layout Editorial CTA
 */
export const EditorialSplitCTA: React.FC<{
  title?: string;
  subtitle?: string;
  description?: string;
  image?: string;
  primaryBtnText?: string;
  secondaryBtnText?: string;
  onPrimaryClick?: () => void;
  className?: string;
}> = ({
  title = 'Begin Your Architectural Journey',
  subtitle = 'Private Client Advisory',
  description = 'Schedule a discrete private consultation with our principal architects and real estate strategists across Bengaluru, Mumbai, and Dubai.',
  image = 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
  primaryBtnText = 'Schedule Consultation',
  secondaryBtnText = 'Explore Residences',
  onPrimaryClick,
  className = '',
}) => {
  const { openEnquiryDrawer } = useNavigation();

  return (
    <div className={`grid grid-cols-1 lg:grid-cols-12 rounded-2xl bg-white border border-[#EAE4D6] shadow-md overflow-hidden ${className}`}>
      {/* Left Content */}
      <div className="lg:col-span-7 p-8 sm:p-12 lg:p-16 flex flex-col justify-between space-y-8">
        <div className="space-y-4">
          <span className="font-sans text-[16px] md:text-[17px] lg:text-[18px] uppercase tracking-wide text-[#1E5E45] font-semibold block">
            {subtitle}
          </span>
          <h3 className="font-editorial text-[36px] md:text-[44px] lg:text-[56px] font-light text-[#1A1C1E] leading-[1.1]">
            {title}
          </h3>
          <p className="font-sans text-[16px] md:text-[17px] lg:text-[18px] text-[#525866] leading-relaxed max-w-xl">
            {description}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-4 pt-4">
          <Button
            variant="primary"
            size="md"
            onClick={onPrimaryClick || openEnquiryDrawer}
            showArrow
          >
            {primaryBtnText}
          </Button>
          <Button variant="secondary" size="md">
            {secondaryBtnText}
          </Button>
        </div>
      </div>

      {/* Right Image */}
      <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-full bg-[#F5F2EA]">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
      </div>
    </div>
  );
};

/**
 * 2. Fullscreen Minimalist CTA
 */
export const FullscreenCTA: React.FC<{
  title?: string;
  description?: string;
  btnText?: string;
  onAction?: () => void;
  className?: string;
}> = ({
  title = 'Crafted for Generations. Inspired by Tomorrow.',
  description = 'Discover the exclusive portfolio of iconic residential sanctuaries and grade-A commercial landmarks.',
  btnText = 'Enquire for Ownership',
  onAction,
  className = '',
}) => {
  const { openEnquiryDrawer } = useNavigation();

  return (
    <div className={`py-20 sm:py-28 px-4 sm:px-8 text-center rounded-2xl bg-[#FAF8F5] border border-[#EAE4D6] space-y-6 max-w-5xl mx-auto ${className}`}>
      <span className="font-sans text-[16px] md:text-[17px] lg:text-[18px] uppercase tracking-wide text-[#1E5E45] font-semibold block">
        The Vaswani Experience
      </span>
      <h3 className="font-editorial text-[36px] md:text-[44px] lg:text-[56px] font-light text-[#1A1C1E] leading-[1.1] max-w-3xl mx-auto">
        {title}
      </h3>
      <p className="font-sans text-[20px] md:text-[22px] lg:text-[24px] text-[#525866] max-w-[700px] mx-auto font-light leading-[1.5]">
        {description}
      </p>
      <div className="pt-4 flex justify-center">
        <Button variant="primary" size="lg" onClick={onAction || openEnquiryDrawer} showArrow>
          {btnText}
        </Button>
      </div>
    </div>
  );
};

/**
 * 3. Image Banner CTA (Dark Luxury Atmosphere)
 */
export const ImageBannerCTA: React.FC<{
  title?: string;
  subtitle?: string;
  image?: string;
  onAction?: () => void;
  className?: string;
}> = ({
  title = 'Reserve Your Private Preview Tour',
  subtitle = 'By Invitation Only',
  image = 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80',
  onAction,
  className = '',
}) => {
  const { openEnquiryDrawer } = useNavigation();

  return (
    <div className={`relative rounded-2xl overflow-hidden min-h-[380px] sm:min-h-[440px] flex items-center p-8 sm:p-16 border border-[#EAE4D6] ${className}`}>
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#1A1C1E]/90 via-[#1A1C1E]/70 to-transparent" />

      <div className="relative z-10 space-y-6 max-w-xl text-[#FAF8F5]">
        <span className="px-4 py-1.5 rounded-full bg-[#1E5E45]/80 text-[#FAF8F5] font-sans text-[16px] md:text-[17px] lg:text-[18px] uppercase tracking-wide font-semibold backdrop-blur-md inline-block">
          {subtitle}
        </span>
        <h3 className="font-editorial text-[36px] md:text-[44px] lg:text-[56px] font-light leading-[1.1]">
          {title}
        </h3>
        <Button variant="primary" size="md" onClick={onAction || openEnquiryDrawer} showArrow>
          Schedule Private Preview
        </Button>
      </div>
    </div>
  );
};

/**
 * 4. Minimal Editorial Line CTA
 */
export const MinimalEditorialCTA: React.FC<{
  statement?: string;
  actionText?: string;
  onAction?: () => void;
  className?: string;
}> = ({
  statement = 'Looking for tailored masterplan or commercial leasing opportunities?',
  actionText = 'Speak with our Advisory Team',
  onAction,
  className = '',
}) => {
  const { openEnquiryDrawer } = useNavigation();

  return (
    <div className={`py-8 px-6 rounded-xl bg-white border border-[#EAE4D6] flex flex-col sm:flex-row items-center justify-between gap-4 font-sans text-[16px] md:text-[17px] lg:text-[18px] ${className}`}>
      <span className="text-[#1A1C1E] font-medium">{statement}</span>
      <Button variant="text" size="sm" onClick={onAction || openEnquiryDrawer} showArrow>
        {actionText}
      </Button>
    </div>
  );
};
