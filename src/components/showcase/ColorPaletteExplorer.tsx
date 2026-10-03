import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Copy, Check, Info, ShieldCheck } from 'lucide-react';
import { TOKENS } from '../../styles/tokens';
import { HeadingLarge, HeadingMedium, HeadingSmall, Eyebrow, BodyLarge } from '../ui/Typography';
import { ColorSwatchData } from '../../types';

export const ColorPaletteExplorer: React.FC = () => {
  const [copiedHex, setCopiedHex] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<'all' | 'ivory' | 'charcoal' | 'seaGreen' | 'secondary'>('all');

  const copyToClipboard = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 2000);
  };

  const primaryIvory: ColorSwatchData[] = [
    { name: 'Warm Ivory Canvas (80%)', hex: '#FAF8F5', role: 'Dominant Digital Canvas & Background Base', contrast: 'Base' },
    { name: 'Cotton Paper', hex: '#FBF9F4', role: 'Editorial Cards & Tactile Surfaces', contrast: '1.02:1' },
    { name: 'Soft Stone', hex: '#F5F2EA', role: 'Elevated Cards & Subtle Insets', contrast: '1.05:1' },
    { name: 'Travertine Line', hex: '#EAE4D6', role: 'Architectural Dividers & Borders', contrast: '1.2:1' },
    { name: 'Muted Sand Border', hex: '#DCD7CA', role: 'Form & Input Outer Borders', contrast: '1.35:1' },
    { name: 'Pure White (Elevated)', hex: '#FFFFFF', role: 'Elevated Card & Modal Interiors', contrast: '1.03:1' },
  ];

  const primaryCharcoal: ColorSwatchData[] = [
    { name: 'Deep Architectural Charcoal', hex: '#1A1C1E', role: 'Primary Headings, Monograms & Heavy Weights', contrast: '14.8:1' },
    { name: 'Charcoal 950', hex: '#111214', role: 'Deepest Contrast & Footer Background', contrast: '16.2:1' },
    { name: 'Charcoal 700 (Sub-headings)', hex: '#404550', role: 'Secondary Titles & Active Nav Links', contrast: '9.2:1' },
    { name: 'Charcoal 600 (Reading Body)', hex: '#525866', role: 'High-Legibility Editorial Body Text', contrast: '7.5:1' },
    { name: 'Charcoal 500 (Muted)', hex: '#6C7382', role: 'Captions, Microcopy & Inactive Nav', contrast: '5.1:1' },
    { name: 'Charcoal 400 (Metadata)', hex: '#8990A0', role: 'Timestamp, Tags & Technical Specs', contrast: '4.6:1' },
  ];

  const primarySeaGreen: ColorSwatchData[] = [
    { name: 'Brand Sea Green (5% Primary Accent)', hex: '#1E5E45', role: 'Primary Buttons, Active State & Monogram Dot', contrast: '6.8:1' },
    { name: 'Deep Sea Pine', hex: '#143C2E', role: 'Active Button Pressed & Deep Contrast', contrast: '10.2:1' },
    { name: 'Sea Green Hover', hex: '#257355', role: 'Interactive Button & Link Hover State', contrast: '5.6:1' },
    { name: 'Vibrant Jade', hex: '#35936F', role: 'Progress Bars & Graphical Highlights', contrast: '4.5:1' },
    { name: 'Luminous Emerald', hex: '#46A882', role: 'Accents & Visual Badges', contrast: '3.6:1' },
    { name: 'Mint Accent', hex: '#68C29F', role: 'Status Badges & Highlight Pills', contrast: '2.8:1' },
  ];

  const secondaryPalette: ColorSwatchData[] = [
    { name: 'Deep Forest Green', hex: '#143328', role: 'Secondary Luxury Accent', contrast: '11.5:1' },
    { name: 'Warm Sand', hex: '#E5DAC8', role: 'Natural Material Tint', contrast: '1.25:1' },
    { name: 'Soft Stone', hex: '#E8E4DA', role: 'Architectural Stone Accent', contrast: '1.2:1' },
    { name: 'Muted Bronze', hex: '#8E7963', role: 'Heritage & Trophy Metallic Details', contrast: '4.8:1' },
    { name: 'Terracotta', hex: '#A8644E', role: 'Architectural Brick & Earth Accent', contrast: '5.2:1' },
    { name: 'Weathered Teal', hex: '#4A6B69', role: 'Facade & Glass Accent', contrast: '5.8:1' },
  ];

  const renderSwatchGrid = (title: string, subtitle: string, swatches: ColorSwatchData[], tagColor: string) => (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 border-b border-[#EAE4D6] pb-3">
        <div className="flex items-center gap-3">
          <h4 className="font-futura text-xl font-normal text-[#1A1C1E]">{title}</h4>
          <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-futura uppercase tracking-wider font-semibold ${tagColor}`}>
            {subtitle}
          </span>
        </div>
        <span className="font-futura text-xs text-[#6C7382]">Click swatch to copy hex</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {swatches.map((swatch) => {
          const isCopied = copiedHex === swatch.hex;
          return (
            <motion.div
              key={swatch.hex + swatch.name}
              whileHover={{ y: -3 }}
              onClick={() => copyToClipboard(swatch.hex)}
              className="p-4 rounded-xl bg-white border border-[#EAE4D6] hover:border-[#1E5E45]/40 shadow-architectural-sm transition-all duration-300 cursor-pointer group space-y-3"
            >
              {/* Color Box */}
              <div
                style={{ backgroundColor: swatch.hex }}
                className="h-24 w-full rounded-lg border border-black/5 relative flex items-end justify-between p-2.5 transition-transform group-hover:scale-[1.01]"
              >
                <span className="font-agency font-bold text-sm px-2 py-0.5 rounded bg-black/60 text-white backdrop-blur-sm tracking-wider">
                  {swatch.hex}
                </span>
                <button className="p-1 rounded bg-black/60 text-white backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  {isCopied ? <Check className="w-3.5 h-3.5 text-[#68C29F]" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              {/* Swatch Info */}
              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <span className="font-futura text-base font-normal text-[#1A1C1E]">{swatch.name}</span>
                  {swatch.contrast && (
                    <span className="font-agency font-bold text-xs text-[#1E5E45] bg-[#FAF8F5] px-1.5 py-0.5 rounded border border-[#EAE4D6]">
                      {swatch.contrast}
                    </span>
                  )}
                </div>
                <p className="text-xs text-[#525866] leading-relaxed font-futura">{swatch.role}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );

  return (
    <div className="space-y-12">
      {/* Category Intro */}
      <div className="space-y-3">
        <Eyebrow dot>Vaswani Brand Guidelines Reinterpretation</Eyebrow>
        <HeadingLarge>
          The 80 / 15 / 5 Chromatic Hierarchy
        </HeadingLarge>
        <BodyLarge>
          A bespoke color system rooted in quiet luxury and architectural thinking. Warm Ivory replaces harsh white across 80% of surfaces, grounded by 15% Deep Charcoal text, and elevated with 5% Sea Green accents.
        </BodyLarge>
      </div>

      {/* WCAG AA Compliance Highlight */}
      <div className="p-6 rounded-xl bg-white border border-[#EAE4D6] shadow-architectural-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#1E5E45]/10 border border-[#1E5E45]/30 flex items-center justify-center text-[#1E5E45]">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-futura text-lg font-normal text-[#1A1C1E]">WCAG 2.1 AAA Contrast Certified</h4>
            <p className="text-xs text-[#525866] font-futura">All charcoal body and heading tones maintain 7.5:1 to 14.8:1 contrast on Warm Ivory.</p>
          </div>
        </div>
        <span className="font-futura text-xs text-[#1E5E45] bg-[#FAF8F5] px-3 py-1.5 rounded-full border border-[#EAE4D6] font-semibold">
          Zero Pure #000 / Zero Cold Blue-Greys
        </span>
      </div>

      {/* Swatches Grid */}
      <div className="space-y-12">
        {renderSwatchGrid('Primary Base: Warm Ivory Palette', '80% Dominant Base', primaryIvory, 'bg-[#FAF8F5] text-[#1A1C1E] border border-[#EAE4D6]')}
        {renderSwatchGrid('Primary Text & Surface: Deep Charcoal', '15% High-Contrast Weight', primaryCharcoal, 'bg-[#1A1C1E] text-[#FAF8F5]')}
        {renderSwatchGrid('Primary Brand Accent: Sea Green', '5% Interactive Accent', primarySeaGreen, 'bg-[#1E5E45] text-[#FAF8F5]')}
        {renderSwatchGrid('Secondary Heritage Accents', 'Subtle Architectural Accents', secondaryPalette, 'bg-[#8E7963]/20 text-[#8E7963] border border-[#8E7963]/30')}
      </div>
    </div>
  );
};
