import React, { useState } from 'react';
import { motion } from 'motion/react';
import { RotateCcw, Check, Sliders } from 'lucide-react';
import {
  HeroDisplay,
  SectionHeading,
  LeadParagraph,
  BodyInterface,
} from '../ui/Typography';
import { Button } from '../ui/Button';

export const TypographySpecimen: React.FC = () => {
  // Live Specimen Tester State
  const [specimenText, setSpecimenText] = useState('Architectural Thinking. Timeless Living.');
  const [selectedLevel, setSelectedLevel] = useState<'level1' | 'level2' | 'level3' | 'level4'>('level1');
  const [animationKey, setAnimationKey] = useState<number>(0);
  const [activeTab, setActiveTab] = useState<'system' | 'levels' | 'interactive' | 'specimen'>('system');

  const replayAnimations = () => {
    setAnimationKey((prev) => prev + 1);
  };

  return (
    <div className="space-y-12 select-none">
      {/* Header Intro */}
      <div className="space-y-4">
        <span className="font-sans text-[16px] md:text-[17px] lg:text-[18px] uppercase tracking-wide text-[#1E5E45] font-semibold block">
          Vaswani Editorial Typography System
        </span>
        <HeroDisplay>
          Calm, Timeless & Architectural
        </HeroDisplay>
        <LeadParagraph>
          Standardized across the entire publication using exclusively four disciplined typography levels. Cormorant Garamond commands all editorial headings, while Plus Jakarta Sans balances interface clarity and readability.
        </LeadParagraph>
      </div>

      {/* Navigation Tabs */}
      <div className="flex flex-wrap gap-3 border-b border-[#EAE4D6] pb-4">
        {[
          { id: 'system', label: '01. Two Font Families' },
          { id: 'levels', label: '02. Four Typography Levels' },
          { id: 'interactive', label: '03. Interactive Typographic Studio' },
          { id: 'specimen', label: '04. Editorial Specimen' },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`px-5 py-3 rounded-full font-sans text-[16px] md:text-[17px] lg:text-[18px] uppercase tracking-wide transition-all cursor-pointer ${
              activeTab === tab.id
                ? 'bg-[#1E5E45] text-[#FAF8F5] shadow-sm font-semibold'
                : 'bg-white text-[#525866] hover:text-[#1A1C1E] border border-[#EAE4D6]'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* =========================================================================
          TAB 1: TWO FONT FAMILIES
          ========================================================================= */}
      {activeTab === 'system' && (
        <div className="space-y-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Cormorant Garamond Card */}
            <div className="p-8 sm:p-10 rounded-2xl bg-white border border-[#EAE4D6] shadow-sm space-y-6 flex flex-col justify-between relative overflow-hidden">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-3.5 py-1 rounded-full bg-[#1E5E45]/10 text-[#1E5E45] font-sans text-[16px] md:text-[17px] lg:text-[18px] uppercase tracking-wide font-semibold">
                    Editorial Headings
                  </span>
                  <span className="font-sans text-[16px] text-[#8990A0]">Level 01 & Level 02</span>
                </div>
                <h3 className="font-editorial text-[36px] md:text-[44px] lg:text-[56px] font-light text-[#1A1C1E] leading-[1.1]">
                  Cormorant Garamond
                </h3>
                <p className="font-sans text-[16px] md:text-[17px] lg:text-[18px] text-[#525866] leading-relaxed">
                  Traditional serif elegance engineered for quiet architectural authority and monumental headlines.
                </p>
                <div className="space-y-2 pt-3 border-t border-[#EAE4D6]">
                  <span className="font-sans text-[16px] uppercase tracking-wide text-[#1E5E45] font-semibold block">Primary Roles:</span>
                  <ul className="text-[16px] md:text-[17px] lg:text-[18px] font-sans text-[#404550] space-y-1.5 list-disc list-inside">
                    <li>Level 01: Hero Display (Homepage & Page Heros)</li>
                    <li>Level 02: Section Headings, Project Titles, Editorial Headlines</li>
                    <li>CTA Headlines & Major Landmarks</li>
                  </ul>
                </div>
              </div>
              <div className="pt-6 border-t border-[#EAE4D6]">
                <p className="font-editorial italic text-[24px] sm:text-[32px] text-[#1E5E45]">
                  "Architecture that simply feels right."
                </p>
              </div>
            </div>

            {/* Plus Jakarta Sans Card */}
            <div className="p-8 sm:p-10 rounded-2xl bg-white border border-[#EAE4D6] shadow-sm space-y-6 flex flex-col justify-between relative overflow-hidden">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-3.5 py-1 rounded-full bg-[#1A1C1E]/10 text-[#1A1C1E] font-sans text-[16px] md:text-[17px] lg:text-[18px] uppercase tracking-wide font-semibold">
                    UI & Body Text
                  </span>
                  <span className="font-sans text-[16px] text-[#8990A0]">Level 03 & Level 04</span>
                </div>
                <h3 className="font-sans text-[36px] md:text-[44px] lg:text-[56px] font-light text-[#1A1C1E] leading-[1.1]">
                  Plus Jakarta Sans
                </h3>
                <p className="font-sans text-[16px] md:text-[17px] lg:text-[18px] text-[#525866] leading-relaxed">
                  Contemporary humanist sans-serif providing crystal-clear legibility across interface elements, paragraphs, and data.
                </p>
                <div className="space-y-2 pt-3 border-t border-[#EAE4D6]">
                  <span className="font-sans text-[16px] uppercase tracking-wide text-[#1E5E45] font-semibold block">Primary Roles:</span>
                  <ul className="text-[16px] md:text-[17px] lg:text-[18px] font-sans text-[#404550] space-y-1.5 list-disc list-inside">
                    <li>Level 03: Lead Paragraphs & Supporting Statements</li>
                    <li>Level 04: Paragraphs, Navigation, Buttons, Forms</li>
                    <li>Footer, Labels, Cards, Metadata, Captions, Lists, Eyebrows</li>
                  </ul>
                </div>
              </div>
              <div className="pt-6 border-t border-[#EAE4D6]">
                <p className="font-sans font-medium text-[16px] md:text-[17px] lg:text-[18px] text-[#1A1C1E]">
                  A timeless digital voice designed for effortless spatial rhythm.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          TAB 2: FOUR TYPOGRAPHY LEVELS
          ========================================================================= */}
      {activeTab === 'levels' && (
        <div className="space-y-8">
          {/* Level 01 */}
          <div className="p-8 sm:p-10 rounded-2xl bg-white border border-[#EAE4D6] shadow-sm space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#EAE4D6] pb-3">
              <span className="font-sans text-[16px] md:text-[17px] lg:text-[18px] uppercase tracking-wide font-semibold text-[#1E5E45]">
                LEVEL 01 — Hero Display
              </span>
              <span className="font-sans text-[16px] text-[#8990A0]">
                Cormorant Garamond • Desktop: 88px | Tablet: 72px | Mobile: 52px
              </span>
            </div>
            <HeroDisplay className="text-[#1A1C1E]">
              Vaswani Group
            </HeroDisplay>
            <p className="font-sans text-[16px] text-[#6C7382]">
              Used ONLY for: Homepage Hero and Page Hero Titles.
            </p>
          </div>

          {/* Level 02 */}
          <div className="p-8 sm:p-10 rounded-2xl bg-white border border-[#EAE4D6] shadow-sm space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#EAE4D6] pb-3">
              <span className="font-sans text-[16px] md:text-[17px] lg:text-[18px] uppercase tracking-wide font-semibold text-[#1E5E45]">
                LEVEL 02 — Section Headings
              </span>
              <span className="font-sans text-[16px] text-[#8990A0]">
                Cormorant Garamond • Desktop: 56px | Tablet: 44px | Mobile: 36px
              </span>
            </div>
            <SectionHeading className="text-[#1A1C1E]">
              Architectural Perspectives & Sanctuaries
            </SectionHeading>
            <p className="font-sans text-[16px] text-[#6C7382]">
              Used for: All section headings, project titles, editorial headlines, and CTA headlines across the entire website.
            </p>
          </div>

          {/* Level 03 */}
          <div className="p-8 sm:p-10 rounded-2xl bg-white border border-[#EAE4D6] shadow-sm space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#EAE4D6] pb-3">
              <span className="font-sans text-[16px] md:text-[17px] lg:text-[18px] uppercase tracking-wide font-semibold text-[#1E5E45]">
                LEVEL 03 — Lead Paragraph
              </span>
              <span className="font-sans text-[16px] text-[#8990A0]">
                Plus Jakarta Sans • Desktop: 24px | Tablet: 22px | Mobile: 20px (Max-width: 700px)
              </span>
            </div>
            <LeadParagraph className="text-[#1A1C1E]">
              Homes shaped by thoughtful design, enduring natural materials, and over four decades of architectural discipline.
            </LeadParagraph>
            <p className="font-sans text-[16px] text-[#6C7382]">
              Used for: Introductory paragraphs, supporting statements, section introductions.
            </p>
          </div>

          {/* Level 04 */}
          <div className="p-8 sm:p-10 rounded-2xl bg-white border border-[#EAE4D6] shadow-sm space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#EAE4D6] pb-3">
              <span className="font-sans text-[16px] md:text-[17px] lg:text-[18px] uppercase tracking-wide font-semibold text-[#1E5E45]">
                LEVEL 04 — Body & Interface
              </span>
              <span className="font-sans text-[16px] text-[#8990A0]">
                Plus Jakarta Sans • Desktop: 18px | Tablet: 17px | Mobile: 16px
              </span>
            </div>
            <BodyInterface className="text-[#525866] max-w-3xl">
              Every detail is calibrated to feel serene, timeless, and architectural. Used consistently across paragraphs, navigation links, buttons, form controls, footer elements, cards, project metadata, and labels.
            </BodyInterface>
            <div className="flex flex-wrap gap-4 pt-2">
              <Button variant="primary" size="md">Primary Action</Button>
              <Button variant="secondary" size="md">Secondary Action</Button>
              <span className="px-4 py-2 rounded-full border border-[#EAE4D6] font-sans text-[16px] md:text-[17px] lg:text-[18px] uppercase tracking-wide text-[#1E5E45] font-semibold">
                Interface Tag
              </span>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          TAB 3: INTERACTIVE STUDIO
          ========================================================================= */}
      {activeTab === 'interactive' && (
        <div className="p-8 sm:p-10 rounded-2xl bg-white border border-[#EAE4D6] shadow-sm space-y-8">
          <div className="flex items-center justify-between">
            <span className="font-sans text-[16px] md:text-[17px] lg:text-[18px] uppercase tracking-wide font-semibold text-[#1E5E45]">
              Live Typographic Tester
            </span>
            <Button variant="secondary" size="sm" onClick={replayAnimations} icon={<RotateCcw className="w-4 h-4" />}>
              Replay
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2 font-sans">
              <label className="text-[16px] font-semibold uppercase text-[#1A1C1E]">Custom Preview Text</label>
              <input
                type="text"
                value={specimenText}
                onChange={(e) => setSpecimenText(e.target.value)}
                className="w-full px-5 py-3.5 border border-[#EAE4D6] rounded-xl text-[16px] outline-none focus:border-[#1E5E45]"
              />
            </div>
            <div className="space-y-2 font-sans">
              <label className="text-[16px] font-semibold uppercase text-[#1A1C1E]">Select Level</label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  { id: 'level1', label: 'Level 01' },
                  { id: 'level2', label: 'Level 02' },
                  { id: 'level3', label: 'Level 03' },
                  { id: 'level4', label: 'Level 04' },
                ].map((lvl) => (
                  <button
                    key={lvl.id}
                    onClick={() => setSelectedLevel(lvl.id as any)}
                    className={`py-3 rounded-xl font-sans text-[16px] font-semibold transition-all cursor-pointer ${
                      selectedLevel === lvl.id
                        ? 'bg-[#1E5E45] text-white'
                        : 'bg-[#FAF8F5] border border-[#EAE4D6] text-[#1A1C1E]'
                    }`}
                  >
                    {lvl.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Result Preview Box */}
          <div className="p-8 sm:p-12 rounded-2xl bg-[#FAF8F5] border border-[#EAE4D6] min-h-[180px] flex items-center justify-center text-center">
            {selectedLevel === 'level1' && (
              <HeroDisplay key={animationKey} className="text-[#135A5C]">
                {specimenText}
              </HeroDisplay>
            )}
            {selectedLevel === 'level2' && (
              <SectionHeading key={animationKey} className="text-[#135A5C]">
                {specimenText}
              </SectionHeading>
            )}
            {selectedLevel === 'level3' && (
              <LeadParagraph key={animationKey} className="text-[#3A534A] mx-auto">
                {specimenText}
              </LeadParagraph>
            )}
            {selectedLevel === 'level4' && (
              <BodyInterface key={animationKey} className="text-[#1A1C1E]">
                {specimenText}
              </BodyInterface>
            )}
          </div>
        </div>
      )}

      {/* =========================================================================
          TAB 4: EDITORIAL SPECIMEN
          ========================================================================= */}
      {activeTab === 'specimen' && (
        <div className="p-8 sm:p-14 rounded-2xl bg-white border border-[#EAE4D6] shadow-sm space-y-10 max-w-4xl mx-auto">
          <div className="space-y-4 text-center">
            <span className="font-sans text-[16px] md:text-[17px] lg:text-[18px] uppercase tracking-widest text-[#1E5E45] font-semibold block">
              VASWANI EDITORIAL ESSAY
            </span>
            <SectionHeading className="text-[#1A1C1E]">
              The Discipline of Quiet Luxury
            </SectionHeading>
            <LeadParagraph className="mx-auto text-[#525866]">
              When every architectural detail is calibrated with patience, the result simply feels right.
            </LeadParagraph>
          </div>

          <div className="space-y-6 font-sans text-[16px] md:text-[17px] lg:text-[18px] text-[#333] leading-relaxed">
            <p>
              In an era dominated by transient design trends and excessive ornamentation, the Vaswani philosophy remains anchored in timeless architectural principles: authentic materiality, generous spatial proportions, and unhurried craftsmanship.
            </p>
            <p>
              By standardizing our typographic hierarchy to four distinct, intentional levels, our publication achieves visual serenity. Whitespace breathes, headlines command respect, and interface elements seamlessly support the homeowner’s journey without visual noise.
            </p>
          </div>

          <div className="pt-8 border-t border-[#EAE4D6] flex items-center justify-between font-sans text-[16px] md:text-[17px] lg:text-[18px] text-[#6C7382]">
            <span>Published by Vaswani Group</span>
            <span className="text-[#1E5E45] font-semibold">Bengaluru • Mumbai • Dubai</span>
          </div>
        </div>
      )}
    </div>
  );
};
