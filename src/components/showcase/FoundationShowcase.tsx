import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Compass, 
  Palette, 
  Type, 
  Box, 
  Sparkles, 
  RotateCcw, 
  Grid
} from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { useCursor } from '../../context/CursorContext';
import { useNavigation } from '../../context/NavigationContext';
import { 
  HeroDisplay,
  SectionHeading,
  LeadParagraph,
  BodyInterface,
} from '../ui/Typography';
import { Button } from '../ui/Button';
import { ColorPaletteExplorer } from './ColorPaletteExplorer';
import { TypographySpecimen } from './TypographySpecimen';
import { LayoutGridTester } from './LayoutGridTester';
import { ComponentLibrary } from './ComponentLibrary';
import { MotionShowcase } from './MotionShowcase';
import { NavigationShowcase } from './NavigationShowcase';

type SectionTab = 'overview' | 'navigation' | 'colors' | 'typography' | 'grid' | 'components' | 'motion';

export const FoundationShowcase: React.FC<{
  onReplayPreloader: () => void;
}> = ({ onReplayPreloader }) => {
  const [activeTab, setActiveTab] = useState<SectionTab>('overview');
  const { showGridOverlay, toggleGridOverlay } = useTheme();
  const { setCursorVariant, resetCursor } = useCursor();
  const { openEnquiryDrawer } = useNavigation();

  const tabs: { id: SectionTab; label: string; icon: React.ReactNode; tag: string }[] = [
    { id: 'overview', label: '01. Philosophy', icon: <Compass className="w-4 h-4" />, tag: 'Quiet Luxury' },
    { id: 'navigation', label: '02. Navigation & Mega Menu', icon: <Compass className="w-4 h-4" />, tag: 'Sticky Glass & Fullscreen' },
    { id: 'colors', label: '03. Palette System', icon: <Palette className="w-4 h-4" />, tag: 'Warm Ivory 80/15/5' },
    { id: 'typography', label: '04. Typography', icon: <Type className="w-4 h-4" />, tag: '4 Levels Standard' },
    { id: 'grid', label: '05. Spatial Grid', icon: <Grid className="w-4 h-4" />, tag: '12-Col Geometry' },
    { id: 'components', label: '06. UI Library', icon: <Box className="w-4 h-4" />, tag: 'Production Matrix' },
    { id: 'motion', label: '07. Kinetic Motion', icon: <Sparkles className="w-4 h-4" />, tag: 'Physics & Easing Suite' },
  ];

  return (
    <div className="w-full relative pt-28 sm:pt-36 pb-32 overflow-hidden bg-[#FAF8F5] select-none">
      {/* Subtle Background Architectural Grid Pattern */}
      <div className="absolute inset-0 bg-architectural-grid-ivory pointer-events-none opacity-60" />

      {/* Atmospheric Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-96 architectural-glow-mist pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 space-y-16 sm:space-y-24">
        {/* ========================================================================= */}
        {/* HERO SECTION: Design System & Architectural Foundation Benchmark */}
        {/* ========================================================================= */}
        <section className="space-y-8">
          {/* Eyebrow and Status */}
          <div className="flex flex-wrap items-center justify-between gap-4 font-sans text-[16px] md:text-[17px] lg:text-[18px]">
            <div className="flex items-center gap-3">
              <span className="px-4 py-1.5 rounded-full bg-white border border-[#EAE4D6] shadow-sm uppercase tracking-wider text-[#1A1C1E] flex items-center gap-2 font-semibold">
                <span className="w-2 h-2 rounded-full bg-[#1E5E45] animate-pulse" />
                VASWANI DIGITAL FOUNDATION v1.0
              </span>
              <span className="text-[#1E5E45] font-semibold hidden md:inline-block">Warm Ivory Architecture</span>
            </div>

            {/* Quick Action Pills */}
            <div className="flex items-center gap-2">
              <button
                onClick={toggleGridOverlay}
                onMouseEnter={() => setCursorVariant('pointer')}
                onMouseLeave={resetCursor}
                className={`px-4 py-2 rounded-full font-sans uppercase tracking-wide border transition-all cursor-pointer flex items-center gap-2 font-semibold ${
                  showGridOverlay
                    ? 'bg-[#1E5E45] text-[#FAF8F5] border-[#1E5E45]'
                    : 'bg-white hover:bg-[#FAF8F5] text-[#1A1C1E] border-[#EAE4D6]'
                }`}
              >
                <Grid className="w-4 h-4" />
                <span>{showGridOverlay ? 'Grid Active' : 'Toggle Grid'}</span>
              </button>

              <button
                onClick={onReplayPreloader}
                onMouseEnter={() => setCursorVariant('pointer')}
                onMouseLeave={resetCursor}
                className="px-4 py-2 rounded-full bg-white hover:bg-[#FAF8F5] text-[#1A1C1E] font-sans uppercase tracking-wide border border-[#EAE4D6] transition-all cursor-pointer flex items-center gap-2 font-semibold"
              >
                <RotateCcw className="w-4 h-4 text-[#1E5E45]" />
                <span>Replay Intro</span>
              </button>
            </div>
          </div>

          {/* Main Hero Typography */}
          <div className="space-y-6 max-w-5xl">
            <HeroDisplay>
              Architectural Thinking. <br />
              <span className="italic font-normal text-[#1E5E45]">Timeless Living.</span>
            </HeroDisplay>

            <LeadParagraph>
              A bespoke digital foundation for the Vaswani Group. Rooted in warm ivory paper, deep charcoal typography, and subtle sea green accents. Crafted to luxury editorial standards.
            </LeadParagraph>
          </div>

          {/* Architectural Chromatic Ratio Bar */}
          <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[#EAE4D6] shadow-sm space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 font-sans text-[16px] md:text-[17px] lg:text-[18px]">
              <div className="space-y-0.5">
                <span className="uppercase tracking-wide text-[#1E5E45] font-semibold block">Chromatic Distribution Ratio</span>
                <h4 className="font-semibold text-[#1A1C1E]">
                  80% Warm Ivory Canvas • 15% Deep Charcoal • 5% Sea Green & Accents
                </h4>
              </div>
              <span className="text-[#6C7382]">Consistent with Brand Guidelines</span>
            </div>

            {/* Segmented Visual Ratio Track */}
            <div className="w-full h-5 rounded-full overflow-hidden flex border border-[#EAE4D6]">
              <div
                style={{ width: '80%' }}
                className="h-full bg-[#FAF8F5] border-r border-[#EAE4D6] flex items-center justify-center font-sans text-[16px] text-[#1A1C1E] uppercase font-bold"
                title="80% Warm Ivory White Canvas"
              >
                80% Canvas
              </div>
              <div
                style={{ width: '15%' }}
                className="h-full bg-[#1A1C1E] border-r border-[#2E3138] flex items-center justify-center font-sans text-[16px] text-[#FAF8F5] uppercase"
                title="15% Deep Charcoal Typography"
              >
                15% Text
              </div>
              <div
                style={{ width: '5%' }}
                className="h-full bg-[#1E5E45] flex items-center justify-center font-sans text-[16px] text-[#FAF8F5]"
                title="5% Sea Green Accents"
              >
                5%
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* INTERACTIVE NAVIGATION TABS */}
        {/* ========================================================================= */}
        <div className="sticky top-20 z-30 py-3 bg-[#FAF8F5]/90 backdrop-blur-xl border-y border-[#EAE4D6]">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  onMouseEnter={() => setCursorVariant('pointer')}
                  onMouseLeave={resetCursor}
                  className={`flex items-center gap-2.5 px-5 py-3 rounded-full font-sans text-[16px] md:text-[17px] lg:text-[18px] uppercase tracking-wide whitespace-nowrap transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'bg-[#1E5E45] text-[#FAF8F5] shadow-md font-semibold'
                      : 'bg-white hover:bg-[#FAF8F5] text-[#6C7382] hover:text-[#1A1C1E] border border-[#EAE4D6]'
                  }`}
                >
                  <span className={isActive ? 'text-[#FAF8F5]' : 'text-[#1E5E45]'}>{tab.icon}</span>
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* TAB VIEWS CONTAINER */}
        {/* ========================================================================= */}
        <div className="space-y-16">
          <AnimatePresence mode="wait">
            {/* 1. OVERVIEW & BRAND PILLARS */}
            {activeTab === 'overview' && (
              <motion.div
                key="overview"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="space-y-16"
              >
                {/* Brand Pillars Grid */}
                <div className="space-y-6">
                  <div className="space-y-2">
                    <span className="font-sans text-[16px] md:text-[17px] lg:text-[18px] uppercase tracking-wide text-[#1E5E45] font-semibold block">
                      Design Principles
                    </span>
                    <SectionHeading>Quiet Luxury & Architectural Rigor</SectionHeading>
                    <LeadParagraph>
                      Every layout, font choice, and spatial decision reflects four decades of architectural leadership across Bengaluru, Mumbai, and Dubai.
                    </LeadParagraph>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                    <div className="p-8 rounded-2xl bg-white border border-[#EAE4D6] shadow-sm hover:shadow-md hover:border-[#1E5E45]/40 transition-all duration-300 space-y-4">
                      <span className="font-sans text-[16px] md:text-[17px] lg:text-[18px] font-semibold text-[#1E5E45] tracking-wide block uppercase">01 / BASELINE</span>
                      <h3 className="font-editorial text-[36px] font-light text-[#1A1C1E]">
                        Warm Ivory Atmosphere
                      </h3>
                      <p className="font-sans text-[16px] md:text-[17px] lg:text-[18px] text-[#525866] leading-relaxed">
                        Replaces harsh cold pure white (#FFFFFF) with natural Warm Ivory (#FAF8F5) inspired by tactile cotton paper, honed travertine, and ambient daylight.
                      </p>
                    </div>

                    <div className="p-8 rounded-2xl bg-white border border-[#EAE4D6] shadow-sm hover:shadow-md hover:border-[#1E5E45]/40 transition-all duration-300 space-y-4">
                      <span className="font-sans text-[16px] md:text-[17px] lg:text-[18px] font-semibold text-[#1E5E45] tracking-wide block uppercase">02 / STRUCTURE</span>
                      <h3 className="font-editorial text-[36px] font-light text-[#1A1C1E]">
                        Deep Charcoal Typography
                      </h3>
                      <p className="font-sans text-[16px] md:text-[17px] lg:text-[18px] text-[#525866] leading-relaxed">
                        Deep Charcoal (#1A1C1E) text with warm undertones guarantees effortless readability, avoiding harsh sterile pitch blacks or cold blue greys.
                      </p>
                    </div>

                    <div className="p-8 rounded-2xl bg-white border border-[#EAE4D6] shadow-sm hover:shadow-md hover:border-[#1E5E45]/40 transition-all duration-300 space-y-4">
                      <span className="font-sans text-[16px] md:text-[17px] lg:text-[18px] font-semibold text-[#1E5E45] tracking-wide block uppercase">03 / PRECISION</span>
                      <h3 className="font-editorial text-[36px] font-light text-[#1A1C1E]">
                        Signature Sea Green Accents
                      </h3>
                      <p className="font-sans text-[16px] md:text-[17px] lg:text-[18px] text-[#525866] leading-relaxed">
                        Restrained 5% accent usage for primary call-to-actions, active indicators, and interactive micro-states inspired by lush landscaped courtyards.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Key Technical Specs Matrix */}
                <div className="p-8 rounded-2xl bg-white border border-[#EAE4D6] shadow-sm space-y-8">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-sans text-[16px] md:text-[17px] lg:text-[18px]">
                    <div className="space-y-1">
                      <span className="uppercase tracking-wide text-[#1E5E45] font-semibold block">Brand Typography & Spatial Infrastructure</span>
                      <h3 className="font-editorial text-[36px] font-light text-[#1A1C1E]">
                        System Architecture Matrix
                      </h3>
                    </div>
                    <div className="flex items-center gap-3">
                      <Button variant="secondary" size="sm" onClick={() => setActiveTab('motion')}>
                        Explore Motion Suite
                      </Button>
                      <Button variant="primary" size="sm" onClick={openEnquiryDrawer}>
                        Test Consultation Drawer
                      </Button>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-4 border-t border-[#EAE4D6] font-sans text-[16px] md:text-[17px] lg:text-[18px]">
                    <div>
                      <span className="uppercase text-[#8990A0] block font-semibold">Motion Easing</span>
                      <span className="text-[20px] text-[#1A1C1E] font-bold block mt-1">[0.16, 1, 0.3, 1]</span>
                      <span className="text-[#6C7382] block">Luxury Deceleration</span>
                    </div>

                    <div>
                      <span className="uppercase text-[#8990A0] block font-semibold">Editorial Headings</span>
                      <span className="font-editorial text-[24px] text-[#1A1C1E] font-normal block mt-1">Cormorant Garamond</span>
                      <span className="text-[#6C7382] block">Level 01 & Level 02</span>
                    </div>

                    <div>
                      <span className="uppercase text-[#8990A0] block font-semibold">UI & Body Text</span>
                      <span className="font-sans text-[20px] text-[#1A1C1E] font-semibold block mt-1">Plus Jakarta Sans</span>
                      <span className="text-[#6C7382] block">Level 03 & Level 04</span>
                    </div>

                    <div>
                      <span className="uppercase text-[#8990A0] block font-semibold">Smooth Scroll</span>
                      <span className="text-[20px] text-[#1A1C1E] font-bold block mt-1">Lenis Momentum</span>
                      <span className="text-[#6C7382] block">60 FPS Hardware Layer</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* 2. NAVIGATION & MEGA MENU SYSTEM */}
            {activeTab === 'navigation' && (
              <motion.div
                key="navigation"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
              >
                <NavigationShowcase />
              </motion.div>
            )}

            {/* 3. COLOR PALETTE EXPLORER */}
            {activeTab === 'colors' && (
              <motion.div
                key="colors"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
              >
                <ColorPaletteExplorer />
              </motion.div>
            )}

            {/* 4. TYPOGRAPHY SPECIMEN */}
            {activeTab === 'typography' && (
              <motion.div
                key="typography"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
              >
                <TypographySpecimen />
              </motion.div>
            )}

            {/* 5. SPATIAL GRID & LAYOUT TESTER */}
            {activeTab === 'grid' && (
              <motion.div
                key="grid"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
              >
                <LayoutGridTester />
              </motion.div>
            )}

            {/* 6. COMPONENT LIBRARY */}
            {activeTab === 'components' && (
              <motion.div
                key="components"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
              >
                <ComponentLibrary />
              </motion.div>
            )}

            {/* 7. KINETIC MOTION SHOWCASE */}
            {activeTab === 'motion' && (
              <motion.div
                key="motion"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
              >
                <MotionShowcase />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
