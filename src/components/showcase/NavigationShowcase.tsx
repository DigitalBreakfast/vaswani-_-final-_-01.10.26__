import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigation, GLOBAL_NAV_ITEMS } from '../../context/NavigationContext';
import { useCursor } from '../../context/CursorContext';
import { Button } from '../ui/Button';

export const NavigationShowcase: React.FC = () => {
  const { 
    isMegaMenuOpen, 
    toggleMegaMenu, 
    openMegaMenuToSection, 
    openEnquiryDrawer, 
    isScrolled
  } = useNavigation();
  const { setCursorVariant, resetCursor } = useCursor();

  return (
    <div className="space-y-12 select-none">
      {/* Header Info */}
      <div className="space-y-4">
        <span className="font-sans text-[16px] md:text-[17px] lg:text-[18px] uppercase tracking-wide text-[#1E5E45] font-semibold block">
          Global Navigation & Mega Menu System
        </span>
        <h2 className="font-editorial text-[36px] md:text-[44px] lg:text-[56px] font-light text-[#1A1C1E] leading-[1.1]">
          Architectural Navigation Suite
        </h2>
        <p className="font-sans text-[20px] md:text-[22px] lg:text-[24px] text-[#525866] max-w-[700px] font-light leading-[1.5]">
          A quiet luxury navigation system engineered for world-class architectural brands. Features an adaptive frosted glass header and a fullscreen deep charcoal mega menu with dynamic visual transitions.
        </p>
      </div>

      {/* Navigation State & Quick Triggers */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-sans text-[16px] md:text-[17px] lg:text-[18px]">
        {/* Card 1: Header Scroll State */}
        <div className="p-8 rounded-2xl bg-white border border-[#EAE4D6] shadow-sm space-y-4 flex flex-col justify-between">
          <div className="space-y-2">
            <span className="font-semibold uppercase text-[#1E5E45] tracking-wide block">01 / STICKY ADAPTATION</span>
            <h4 className="font-editorial text-[24px] sm:text-[28px] font-light text-[#1A1C1E]">Top Bar Scroll Physics</h4>
            <p className="text-[#6C7382] leading-relaxed">
              Current state: <span className="font-semibold text-[#1A1C1E]">{isScrolled ? 'Frosted Glass Surface' : 'Transparent Floating Header'}</span>.
            </p>
          </div>
          <div className="pt-4 border-t border-[#EAE4D6] flex items-center justify-between">
            <span className="text-[#8990A0]">Scroll page to test blur</span>
            <Button
              variant="secondary"
              size="sm"
              onClick={() => window.scrollTo({ top: isScrolled ? 0 : 300, behavior: 'smooth' })}
            >
              {isScrolled ? 'Scroll to Top' : 'Trigger Scroll'}
            </Button>
          </div>
        </div>

        {/* Card 2: Fullscreen Mega Menu */}
        <div className="p-8 rounded-2xl bg-white border border-[#EAE4D6] shadow-sm space-y-4 flex flex-col justify-between">
          <div className="space-y-2">
            <span className="font-semibold uppercase text-[#1E5E45] tracking-wide block">02 / FULLSCREEN OVERLAY</span>
            <h4 className="font-editorial text-[24px] sm:text-[28px] font-light text-[#1A1C1E]">Fullscreen Mega Menu</h4>
            <p className="text-[#6C7382] leading-relaxed">
              Deep charcoal canvas with dynamic visual cross-dissolves and sub-navigation links.
            </p>
          </div>
          <div className="pt-4 border-t border-[#EAE4D6] flex items-center justify-between">
            <span className="text-[#8990A0]">Press ESC to close</span>
            <Button
              variant="primary"
              size="sm"
              onClick={toggleMegaMenu}
              showArrow
            >
              {isMegaMenuOpen ? 'Close Menu' : 'Open Mega Menu'}
            </Button>
          </div>
        </div>

        {/* Card 3: Consultation Drawer */}
        <div className="p-8 rounded-2xl bg-white border border-[#EAE4D6] shadow-sm space-y-4 flex flex-col justify-between">
          <div className="space-y-2">
            <span className="font-semibold uppercase text-[#1E5E45] tracking-wide block">03 / PRIVATE ADVISORY</span>
            <h4 className="font-editorial text-[24px] sm:text-[28px] font-light text-[#1A1C1E]">Primary Consultation Drawer</h4>
            <p className="text-[#6C7382] leading-relaxed">
              Slide-over VIP registration drawer connected to discrete concierge routing.
            </p>
          </div>
          <div className="pt-4 border-t border-[#EAE4D6] flex items-center justify-between">
            <span className="text-[#8990A0]">Right CTA Trigger</span>
            <Button
              variant="secondary"
              size="sm"
              onClick={openEnquiryDrawer}
              showArrow
            >
              Open Consultation
            </Button>
          </div>
        </div>
      </div>

      {/* Interactive Mega Menu Section Launcher */}
      <div className="p-8 rounded-2xl bg-white border border-[#EAE4D6] shadow-sm space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 font-sans text-[16px] md:text-[17px] lg:text-[18px]">
          <div className="space-y-1">
            <span className="uppercase tracking-wide text-[#1E5E45] font-semibold block">Direct Section Jump & Visual Dissolve Preview</span>
            <h4 className="font-editorial text-[28px] font-light text-[#1A1C1E]">
              Test Mega Menu Sections with Dynamic Imagery
            </h4>
          </div>
          <span className="text-[#6C7382]">Click any item to open focused overlay</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 pt-4 border-t border-[#EAE4D6]">
          {GLOBAL_NAV_ITEMS.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => openMegaMenuToSection(item.id)}
              onMouseEnter={() => setCursorVariant('pointer')}
              onMouseLeave={resetCursor}
              className="group p-5 rounded-xl bg-[#FAF8F5] hover:bg-white border border-[#EAE4D6] hover:border-[#1E5E45]/40 transition-all text-left space-y-3 cursor-pointer font-sans"
            >
              <div className="flex items-center justify-between">
                <span className="font-semibold text-[16px] text-[#1E5E45]">0{idx + 1}</span>
                <ArrowRight className="w-4 h-4 text-[#6C7382] transform group-hover:translate-x-1 transition-transform" />
              </div>
              <div className="space-y-1">
                <h5 className="font-semibold uppercase tracking-wide text-[16px] md:text-[17px] text-[#1A1C1E]">
                  {item.label}
                </h5>
                <p className="text-[16px] text-[#6C7382] line-clamp-2">
                  {item.tag}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
