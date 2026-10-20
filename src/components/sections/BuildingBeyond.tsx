import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowRight,
  ArrowUpRight,
  X,
  Droplets,
  GraduationCap,
  CheckCircle2,
} from 'lucide-react';
import { useCursor } from '../../context/CursorContext';
import { useNavigation } from '../../context/NavigationContext';

interface FeatureModalData {
  initiative: string;
  tag: string;
  title: string;
  expandedParagraphs: string[];
  keyPillars: string[];
  type: 'swes' | 'sparsh';
  metrics: { label: string; value: string }[];
}

const modalDetails: Record<'swes' | 'sparsh', FeatureModalData> = {
  swes: {
    initiative: 'SWES PARTNERSHIP',
    tag: 'EDUCATION',
    title: 'Empowering young minds.',
    expandedParagraphs: [
      'Education is the strongest foundation a young life can have. Through scholarships and free-ship support, in partnership with the Santacruz West Education Society, we have helped deserving students stay in school without the weight of fees.',
      'A child who can keep learning has room to grow, and a future that stays open. We remain committed to backing the next generation.',
    ],
    keyPillars: [
      'School fee funding for children from economically weaker families',
      'Merit and free-ship scholarships ensuring uninterrupted education',
      'Long-term community backing for future generations',
    ],
    type: 'swes',
    metrics: [
      { label: 'Partner', value: 'SWES' },
      { label: 'Initiative', value: 'Scholarships' },
      { label: 'Focus', value: 'Education' },
    ],
  },
  sparsh: {
    initiative: 'SPARSH INITIATIVE',
    tag: 'CLEAN WATER',
    title: 'Clean water, for every family.',
    expandedParagraphs: [
      'Safe drinking water is a basic human right. Through the Sparsh initiative, we fit sustainable filtration systems in underprivileged communities.',
      'Cleaner water means fewer water-borne illnesses and healthier days for children and parents alike. It restores dignity to something as ordinary as a glass of water.',
    ],
    keyPillars: [
      'Sustainable filtration systems in underprivileged communities',
      'Prevention of water-borne illnesses for children and parents',
      'Restoring health, dignity, and dependable daily access',
    ],
    type: 'sparsh',
    metrics: [
      { label: 'Initiative', value: 'Sparsh' },
      { label: 'Access', value: 'Safe Water' },
      { label: 'Impact', value: 'Health' },
    ],
  },
};

/* ========================================================================= */
/* BESPOKE SPARSH LOGO COMPONENT                                             */
/* ========================================================================= */
const SparshLogoMark: React.FC<{ size?: 'sm' | 'md' | 'lg' }> = ({ size = 'md' }) => {
  const dim = size === 'lg' ? 'w-24 h-24' : size === 'sm' ? 'w-12 h-12' : 'w-20 h-20';
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${dim} transition-transform duration-500`}
        aria-label="Sparsh Clean Water Initiative Logo"
      >
        <circle cx="50" cy="50" r="46" stroke="#8E6B47" strokeWidth="1.2" strokeOpacity="0.35" strokeDasharray="3 3" />
        <circle cx="50" cy="50" r="41" stroke="#1C443B" strokeWidth="1.2" strokeOpacity="0.25" />
        <ellipse cx="50" cy="64" rx="22" ry="6.5" stroke="#8E6B47" strokeWidth="1.2" strokeOpacity="0.45" />
        <ellipse cx="50" cy="70" rx="30" ry="8" stroke="#1C443B" strokeWidth="1" strokeOpacity="0.25" />
        <path
          d="M50 18C50 18 35 38 35 52C35 60.2843 41.7157 67 50 67C58.2843 67 65 60.2843 65 52C65 38 50 18 50 18Z"
          fill="url(#sparshGrad)"
          stroke="#1C443B"
          strokeWidth="1.2"
        />
        <path
          d="M43 46C43 38 48 29 48 29"
          stroke="white"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeOpacity="0.75"
        />
        <path
          d="M38 60C41 55 46 54 50 54C54 54 59 55 62 60"
          stroke="#FAF8F5"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
        <defs>
          <linearGradient id="sparshGrad" x1="50" y1="18" x2="50" y2="67" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#8E6B47" />
            <stop offset="65%" stopColor="#1C443B" />
            <stop offset="100%" stopColor="#14332C" />
          </linearGradient>
        </defs>
      </svg>
      <div className="mt-2.5">
        <span className="font-editorial text-[20px] sm:text-[22px] tracking-[0.22em] uppercase font-light text-[#1C443B] block leading-none">
          SPARSH
        </span>
        <span className="font-sans text-[10px] sm:text-[11px] tracking-[0.26em] uppercase text-[#8E6B47] font-semibold block mt-1">
          CLEAN WATER INITIATIVE
        </span>
      </div>
    </div>
  );
};

/* ========================================================================= */
/* SWES LOGO COMPONENT                                                       */
/* ========================================================================= */
const SwesLogoMark: React.FC<{ size?: 'sm' | 'md' | 'lg' }> = ({ size = 'md' }) => {
  const imgBox = size === 'lg' ? 'w-24 h-24' : size === 'sm' ? 'w-12 h-12' : 'w-20 h-20';
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <div className={`${imgBox} rounded-xl bg-white shadow-xs border border-[#1C443B]/10 p-2 flex items-center justify-center transition-transform duration-500`}>
        <img
          src="https://res.cloudinary.com/ds5s7shuo/image/upload/v1790339685/SWES_bpzahd.jpg"
          alt="Santacruz West Education Society (SWES) Logo"
          className="max-h-full max-w-full object-contain"
          loading="lazy"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="mt-2.5">
        <span className="font-editorial text-[20px] sm:text-[22px] tracking-[0.22em] uppercase font-light text-[#1C443B] block leading-none">
          SWES
        </span>
        <span className="font-sans text-[10px] sm:text-[11px] tracking-[0.26em] uppercase text-[#8E6B47] font-semibold block mt-1">
          SANTACRUZ WEST EDUCATION SOCIETY
        </span>
      </div>
    </div>
  );
};

export const BuildingBeyond: React.FC = () => {
  const { setCursorVariant, resetCursor } = useCursor();
  const { openEnquiryDrawer } = useNavigation();
  const [activeModal, setActiveModal] = useState<'sparsh' | 'swes' | null>(null);

  const luxuryEase = [0.16, 1, 0.3, 1] as const;

  return (
    <section
      id="building-beyond"
      className="relative w-full text-[#1C443B] py-16 sm:py-20 lg:py-24 px-5 sm:px-8 lg:px-12 select-none overflow-hidden"
      aria-label="Social Impact & Responsibility — Building beyond homes"
    >
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="w-full max-w-[1440px] h-full mx-auto border-x border-[#1C443B]/5" />
      </div>

      <div className="w-full max-w-[1400px] mx-auto relative z-10">
        {/* ========================================================================= */}
        {/* SECTION HEADER                                                            */}
        {/* ========================================================================= */}
        <div className="max-w-[820px] mx-auto text-center mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, ease: luxuryEase }}
            className="inline-flex items-center justify-center gap-3 mb-3.5"
          >
            <span className="w-6 h-[1px] bg-[#8E6B47]" />
            <span className="font-sans text-[13px] sm:text-[14px] tracking-[0.25em] uppercase text-[#8E6B47] font-semibold">
              SOCIAL IMPACT & RESPONSIBILITY
            </span>
            <span className="w-6 h-[1px] bg-[#8E6B47]" />
          </motion.div>

          {/* Section Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, delay: 0.1, ease: luxuryEase }}
            className="font-editorial text-[38px] sm:text-[46px] lg:text-[56px] font-light leading-[1.1] tracking-tight text-[#1C443B] mb-4"
          >
            Building beyond <span className="italic font-normal text-[#8E6B47]">homes.</span>
          </motion.h2>

          {/* Intro Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, delay: 0.2, ease: luxuryEase }}
            className="font-sans text-[17px] sm:text-[19px] lg:text-[20px] text-[#1C443B]/75 font-normal leading-[1.6] max-w-[740px] mx-auto"
          >
            A good home is only part of a good life. We also invest in what makes one possible: a child’s education and a family’s health.
          </motion.p>
        </div>

        {/* ========================================================================= */}
        {/* INITIATIVE CARDS (DUAL-WING GRID)                                          */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {/* ======================================================================= */}
          {/* CARD 1: SWES PARTNERSHIP                                                */}
          {/* ======================================================================= */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, ease: luxuryEase }}
            onClick={() => setActiveModal('swes')}
            onMouseEnter={() => setCursorVariant('pointer')}
            onMouseLeave={resetCursor}
            className="group relative rounded-2xl bg-white border border-[#1C443B]/10 hover:border-[#8E6B47]/40 shadow-xs hover:shadow-xl transition-all duration-500 overflow-hidden flex flex-col cursor-pointer hover:-translate-y-1"
          >
            {/* Visual / Logo Showcase */}
            <div className="relative h-64 sm:h-72 overflow-hidden bg-gradient-to-b from-[#F7F4EF] via-[#FAF8F5] to-white border-b border-[#1C443B]/10 flex flex-col items-center justify-center p-6 text-center">
              {/* Subtle architectural background texture & lines */}
              <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#8E6B47_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

              {/* Top Bar with Badge & Action Arrow */}
              <div className="absolute top-4 inset-x-4 sm:inset-x-5 flex items-center justify-between z-10 pointer-events-none">
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-[#1C443B]/15 text-[#1C443B] font-sans text-[12px] sm:text-[13px] tracking-wider uppercase font-semibold shadow-xs">
                  <GraduationCap className="w-3.5 h-3.5 text-[#8E6B47]" />
                  SWES PARTNERSHIP
                </span>

                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white border border-[#1C443B]/15 text-[#1C443B] flex items-center justify-center group-hover:bg-[#1C443B] group-hover:text-white group-hover:border-[#1C443B] transition-all duration-300 shadow-xs">
                  <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>

              {/* Logo Presentation */}
              <div className="relative z-10 pt-4 group-hover:scale-105 transition-transform duration-500 ease-out">
                <SwesLogoMark size="md" />
              </div>
            </div>

            {/* Content Body */}
            <div className="p-6 sm:p-8 flex flex-col justify-between flex-1 bg-white">
              <div>
                <span className="font-sans text-[12px] sm:text-[13px] tracking-[0.25em] uppercase text-[#8E6B47] font-semibold block mb-2">
                  SWES PARTNERSHIP
                </span>
                <h3 className="font-editorial text-[28px] sm:text-[34px] lg:text-[38px] font-light leading-tight text-[#1C443B] group-hover:text-[#8E6B47] transition-colors mb-3.5">
                  Empowering young minds.
                </h3>
                <p className="font-sans text-[16px] sm:text-[17px] text-[#1C443B]/80 font-normal leading-relaxed">
                  With the Santacruz West Education Society, we fund school fees for children from economically weaker families, so their learning is never cut short.
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#1C443B]/10 flex items-center justify-between">
                <span className="font-sans text-[14px] sm:text-[15px] tracking-wide uppercase font-semibold text-[#1C443B] group-hover:text-[#8E6B47] transition-colors flex items-center gap-2">
                  <span>Explore the initiative</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </div>
            </div>
          </motion.div>

          {/* ======================================================================= */}
          {/* CARD 2: SPARSH INITIATIVE                                               */}
          {/* ======================================================================= */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, delay: 0.15, ease: luxuryEase }}
            onClick={() => setActiveModal('sparsh')}
            onMouseEnter={() => setCursorVariant('pointer')}
            onMouseLeave={resetCursor}
            className="group relative rounded-2xl bg-white border border-[#1C443B]/10 hover:border-[#8E6B47]/40 shadow-xs hover:shadow-xl transition-all duration-500 overflow-hidden flex flex-col cursor-pointer hover:-translate-y-1"
          >
            {/* Visual / Logo Showcase */}
            <div className="relative h-64 sm:h-72 overflow-hidden bg-gradient-to-b from-[#F7F4EF] via-[#FAF8F5] to-white border-b border-[#1C443B]/10 flex flex-col items-center justify-center p-6 text-center">
              {/* Subtle architectural background texture & lines */}
              <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#8E6B47_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

              {/* Top Bar with Badge & Action Arrow */}
              <div className="absolute top-4 inset-x-4 sm:inset-x-5 flex items-center justify-between z-10 pointer-events-none">
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-[#1C443B]/15 text-[#1C443B] font-sans text-[12px] sm:text-[13px] tracking-wider uppercase font-semibold shadow-xs">
                  <Droplets className="w-3.5 h-3.5 text-[#8E6B47]" />
                  SPARSH INITIATIVE
                </span>

                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white border border-[#1C443B]/15 text-[#1C443B] flex items-center justify-center group-hover:bg-[#1C443B] group-hover:text-white group-hover:border-[#1C443B] transition-all duration-300 shadow-xs">
                  <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>

              {/* Logo Presentation */}
              <div className="relative z-10 pt-4 group-hover:scale-105 transition-transform duration-500 ease-out">
                <SparshLogoMark size="md" />
              </div>
            </div>

            {/* Content Body */}
            <div className="p-6 sm:p-8 flex flex-col justify-between flex-1 bg-white">
              <div>
                <span className="font-sans text-[12px] sm:text-[13px] tracking-[0.25em] uppercase text-[#8E6B47] font-semibold block mb-2">
                  SPARSH INITIATIVE
                </span>
                <h3 className="font-editorial text-[28px] sm:text-[34px] lg:text-[38px] font-light leading-tight text-[#1C443B] group-hover:text-[#8E6B47] transition-colors mb-3.5">
                  Clean water, for every family.
                </h3>
                <p className="font-sans text-[16px] sm:text-[17px] text-[#1C443B]/80 font-normal leading-relaxed">
                  We install reliable water filters in underprivileged communities, bringing safe drinking water to families who need it most.
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#1C443B]/10 flex items-center justify-between">
                <span className="font-sans text-[14px] sm:text-[15px] tracking-wide uppercase font-semibold text-[#1C443B] group-hover:text-[#8E6B47] transition-colors flex items-center gap-2">
                  <span>Explore the initiative</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* EXPANDED STORY MODAL                                                      */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {activeModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setActiveModal(null)}
              className="absolute inset-0 bg-[#1C443B]/80 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.96 }}
              transition={{ duration: 0.4, ease: luxuryEase }}
              className="relative w-full max-w-2xl max-h-[88vh] overflow-y-auto bg-[#FAF8F5] text-[#1C443B] rounded-2xl shadow-2xl p-6 sm:p-8 md:p-10 z-10 border border-[#1C443B]/15"
            >
              <button
                onClick={() => setActiveModal(null)}
                className="absolute top-5 right-5 p-2 rounded-full text-[#1C443B]/70 hover:text-[#1C443B] hover:bg-[#1C443B]/10 transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Eyebrow & Title */}
              <div className="space-y-2 mb-6 pr-8">
                <span className="font-sans text-[14px] sm:text-[15px] tracking-[0.25em] uppercase text-[#8E6B47] font-semibold block">
                  {modalDetails[activeModal].initiative}
                </span>
                <h3 className="font-editorial text-[34px] sm:text-[42px] lg:text-[48px] font-light text-[#1C443B] leading-tight">
                  {modalDetails[activeModal].title}
                </h3>
              </div>

              {/* Logo & Emblem Hero Area */}
              <div className="w-full py-8 sm:py-10 px-6 rounded-xl bg-white border border-[#1C443B]/10 mb-6 flex items-center justify-center shadow-xs">
                {modalDetails[activeModal].type === 'swes' ? (
                  <SwesLogoMark size="lg" />
                ) : (
                  <SparshLogoMark size="lg" />
                )}
              </div>

              {/* Metric Highlights */}
              <div className="grid grid-cols-3 gap-3 mb-6 p-4 rounded-xl bg-white border border-[#1C443B]/10 text-center">
                {modalDetails[activeModal].metrics.map((m, idx) => (
                  <div key={idx} className={idx === 1 ? 'border-x border-[#1C443B]/10' : ''}>
                    <div className="font-editorial text-[26px] sm:text-[32px] font-light text-[#1C443B]">{m.value}</div>
                    <div className="font-sans text-[12px] sm:text-[13px] tracking-wider uppercase text-[#8E6B47] font-medium">{m.label}</div>
                  </div>
                ))}
              </div>

              {/* Expanded Text Paragraphs */}
              <div className="space-y-4 mb-6">
                {modalDetails[activeModal].expandedParagraphs.map((para, idx) => (
                  <p
                    key={idx}
                    className={`font-sans ${
                      idx === 0
                        ? 'text-[18px] sm:text-[20px] text-[#1C443B] font-normal leading-[1.6]'
                        : 'text-[16px] sm:text-[17px] text-[#1C443B]/80 font-normal leading-relaxed'
                    }`}
                  >
                    {para}
                  </p>
                ))}
              </div>

              {/* Commitment Pillars */}
              <div className="p-5 rounded-xl bg-white border border-[#1C443B]/10 mb-6 space-y-3">
                <span className="font-sans text-[13px] sm:text-[14px] tracking-wider uppercase text-[#8E6B47] font-semibold block">
                  Commitment Highlights
                </span>
                <ul className="space-y-2">
                  {modalDetails[activeModal].keyPillars.map((pillar, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-[15px] sm:text-[16px] text-[#1C443B]/85">
                      <CheckCircle2 className="w-5 h-5 text-[#8E6B47] shrink-0 mt-0.5" />
                      <span className="font-sans font-normal">{pillar}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Actions */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#1C443B]/15">
                <button
                  onClick={() => {
                    setActiveModal(null);
                    openEnquiryDrawer();
                  }}
                  className="px-7 py-3 rounded-full bg-[#1C443B] text-white hover:bg-[#14332C] font-sans text-[14px] sm:text-[15px] tracking-wider uppercase font-medium transition-all cursor-pointer shadow-xs"
                >
                  Partner With Us
                </button>
                <button
                  onClick={() => setActiveModal(null)}
                  className="font-sans text-[14px] sm:text-[15px] tracking-wider uppercase text-[#1C443B]/70 hover:text-[#1C443B] transition-colors cursor-pointer"
                >
                  Close Story
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
