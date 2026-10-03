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
  title: string;
  initiative: string;
  tag: string;
  lead: string;
  paragraphs: string[];
  keyPillars: string[];
  image: string;
  metrics: { label: string; value: string }[];
}

const modalDetails: Record<'sparsh' | 'swes', FeatureModalData> = {
  sparsh: {
    initiative: 'SPARSH INITIATIVE',
    tag: 'CLEAN WATER & COMMUNITY HEALTH',
    title: 'Clean Water: A Fundamental Right',
    lead: 'Access to clean drinking water is one of the most essential foundations of a healthy community.',
    paragraphs: [
      'Through the Sparsh initiative, Vaswani supports sustainable, community-scale water purification and distribution systems in underserved localities.',
      'By partnering with grassroots water engineers and local community leadership, Sparsh ensures long-term operational upkeep, water quality monitoring, and dependable daily access for thousands of families.',
      'Our holistic approach directly enhances family health, reduces water-borne illnesses, and enables children to attend school without the burden of water insecurity.',
    ],
    keyPillars: [
      'Community-scale filtration and solar-powered purification units',
      'Regular microbiological testing and water quality certifications',
      'Grassroots maintenance committees ensuring generational reliability',
    ],
    image:
      'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1600&q=85',
    metrics: [
      { label: 'Active Systems', value: '14+' },
      { label: 'Daily Beneficiaries', value: '10,000+' },
      { label: 'Solar Powered', value: '100%' },
    ],
  },
  swes: {
    initiative: 'SWES PARTNERSHIP',
    tag: 'EDUCATION & SCHOLARSHIP SUPPORT',
    title: 'Empowering Young Minds Through Education',
    lead: 'Education creates opportunities that last a lifetime.',
    paragraphs: [
      'Through its long-standing partnership with the Welfare Educational Society (SWES), Vaswani supports bright, determined students from economically weaker backgrounds.',
      'Our programs provide comprehensive tuition support, essential learning technology, modern textbook libraries, and vocational readiness mentoring.',
      'By removing financial barriers to quality foundational and higher secondary education, we empower young minds to pursue professional dreams and become catalysts for progress in their communities.',
    ],
    keyPillars: [
      'Full and partial merit-and-need scholarships for school & college students',
      'Modern digital lab upgrades, STEM toolkits, and library endowments',
      'Career readiness workshops and mentorship from industry practitioners',
    ],
    image:
      'https://res.cloudinary.com/ds5s7shuo/image/upload/v1790339685/SWES_bpzahd.jpg',
    metrics: [
      { label: 'Scholars Funded', value: '500+' },
      { label: 'STEM Labs Equipped', value: '8' },
      { label: 'Program Graduation', value: '98%' },
    ],
  },
};

export const BuildingBeyond: React.FC = () => {
  const { setCursorVariant, resetCursor } = useCursor();
  const { openEnquiryDrawer } = useNavigation();
  const [activeModal, setActiveModal] = useState<'sparsh' | 'swes' | null>(null);

  const luxuryEase = [0.16, 1, 0.3, 1] as const;

  return (
    <section
      id="building-beyond"
      className="relative w-full text-[#152E28] py-16 sm:py-20 lg:py-24 px-5 sm:px-8 lg:px-12 select-none overflow-hidden"
      aria-label="Building Beyond Homes — Community Impact"
    >
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="w-full max-w-[1440px] h-full mx-auto border-x border-[#152E28]/5" />
      </div>

      <div className="w-full max-w-[1400px] mx-auto relative z-10">
        {/* ========================================================================= */}
        {/* COMPACT & MODERN SECTION HEADER                                           */}
        {/* ========================================================================= */}
        <div className="max-w-[760px] mx-auto text-center mb-10 sm:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, ease: luxuryEase }}
            className="inline-flex items-center justify-center gap-3 mb-3"
          >
            <span className="w-6 h-[1px] bg-[#8E6B47]" />
            <span className="font-sans text-[16px] md:text-[17px] lg:text-[18px] tracking-[0.25em] uppercase text-[#8E6B47] font-semibold">
              SOCIAL IMPACT & RESPONSIBILITY
            </span>
            <span className="w-6 h-[1px] bg-[#8E6B47]" />
          </motion.div>

          {/* Section Heading - Level 02: Cormorant Garamond 56px desktop, 44px tablet, 36px mobile */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, delay: 0.1, ease: luxuryEase }}
            className="font-editorial text-[36px] md:text-[44px] lg:text-[56px] font-light leading-[1.1] tracking-tight text-[#152E28] mb-4"
          >
            <span>Building Beyond </span>
            <span className="italic font-normal text-[#8E6B47]">Homes.</span>
          </motion.h2>

          {/* Lead Paragraph - Level 03: Plus Jakarta Sans 24px desktop, 22px tablet, 20px mobile */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, delay: 0.2, ease: luxuryEase }}
            className="font-sans text-[20px] md:text-[22px] lg:text-[24px] text-[#152E28]/75 font-normal leading-[1.5] max-w-[700px] mx-auto"
          >
            Creating enduring progress through grassroots partnerships in sustainable water security and youth educational equity.
          </motion.p>
        </div>

        {/* ========================================================================= */}
        {/* COOL & MODERN BENTO INITIATIVE CARDS (DUAL-WING GRID)                      */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {/* CARD 01: SPARSH */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, ease: luxuryEase }}
            onClick={() => setActiveModal('sparsh')}
            onMouseEnter={() => setCursorVariant('pointer')}
            onMouseLeave={resetCursor}
            className="group relative rounded-2xl bg-white border border-[#152E28]/10 hover:border-[#152E28]/30 shadow-xs hover:shadow-xl transition-all duration-500 overflow-hidden flex flex-col cursor-pointer hover:-translate-y-1"
          >
            <div className="relative h-64 sm:h-72 md:h-80 overflow-hidden bg-[#152E28]">
              <img
                src="https://res.cloudinary.com/ds5s7shuo/image/upload/v1790339685/SWES_bpzahd.jpg"
                alt="Sparsh Clean Water Project"
                className="w-full h-full object-contain object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#152E28] via-[#152E28]/20 to-black/30 pointer-events-none" />

              <div className="absolute top-4 inset-x-4 flex items-center justify-between z-10">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-white font-sans text-[16px] md:text-[17px] lg:text-[18px] tracking-wide uppercase font-medium">
                  <Droplets className="w-4 h-4 text-[#68C29F]" />
                  SPARSH INITIATIVE
                </span>

                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white flex items-center justify-center group-hover:bg-[#152E28] group-hover:border-[#152E28] transition-all duration-300">
                  <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>

              <div className="absolute bottom-4 left-5 right-5 z-10 text-white">
                <h3 className="font-editorial text-[36px] md:text-[44px] lg:text-[56px] font-light leading-tight text-white group-hover:text-[#d7c2a3] transition-colors">
                  Clean Water: A Fundamental Right
                </h3>
              </div>
            </div>

            <div className="p-5 sm:p-6 flex items-center justify-between bg-white border-t border-[#152E28]/10">
              <span className="font-sans text-[16px] md:text-[17px] lg:text-[18px] tracking-wide uppercase font-medium text-[#152E28] group-hover:text-[#8E6B47] transition-colors flex items-center gap-2">
                <span>Explore Initiative</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </div>
          </motion.div>

          {/* CARD 02: SWES */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, delay: 0.15, ease: luxuryEase }}
            onClick={() => setActiveModal('swes')}
            onMouseEnter={() => setCursorVariant('pointer')}
            onMouseLeave={resetCursor}
            className="group relative rounded-2xl bg-white border border-[#152E28]/10 hover:border-[#152E28]/30 shadow-xs hover:shadow-xl transition-all duration-500 overflow-hidden flex flex-col cursor-pointer hover:-translate-y-1"
          >
            <div className="relative h-64 sm:h-72 md:h-80 overflow-hidden bg-[#152E28]">
              <img
                src="https://res.cloudinary.com/ds5s7shuo/image/upload/v1790339685/SWES_bpzahd.jpg"
                alt="SWES Education Support"
                className="w-full h-full object-contain object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#152E28] via-[#152E28]/20 to-black/30 pointer-events-none" />

              <div className="absolute top-4 inset-x-4 flex items-center justify-between z-10">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-white font-sans text-[16px] md:text-[17px] lg:text-[18px] tracking-wide uppercase font-medium">
                  <GraduationCap className="w-4 h-4 text-[#d7c2a3]" />
                  SWES PARTNERSHIP
                </span>

                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white flex items-center justify-center group-hover:bg-[#152E28] group-hover:border-[#152E28] transition-all duration-300">
                  <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>

              <div className="absolute bottom-4 left-5 right-5 z-10 text-white">
                <h3 className="font-editorial text-[36px] md:text-[44px] lg:text-[56px] font-light leading-tight text-white group-hover:text-[#d7c2a3] transition-colors">
                  Empowering Young Minds
                </h3>
              </div>
            </div>

            <div className="p-5 sm:p-6 flex items-center justify-between bg-white border-t border-[#152E28]/10">
              <span className="font-sans text-[16px] md:text-[17px] lg:text-[18px] tracking-wide uppercase font-medium text-[#152E28] group-hover:text-[#8E6B47] transition-colors flex items-center gap-2">
                <span>Explore Initiative</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {activeModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setActiveModal(null)}
              className="absolute inset-0 bg-[#152E28]/80 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.96 }}
              transition={{ duration: 0.4, ease: luxuryEase }}
              className="relative w-full max-w-2xl max-h-[88vh] overflow-y-auto bg-[#FAF8F5] text-[#152E28] rounded-2xl shadow-2xl p-6 sm:p-8 md:p-10 z-10 border border-[#152E28]/15"
            >
              <button
                onClick={() => setActiveModal(null)}
                className="absolute top-5 right-5 p-2 rounded-full text-[#152E28]/70 hover:text-[#152E28] hover:bg-[#152E28]/10 transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-2 mb-5 pr-8">
                <span className="font-sans text-[16px] md:text-[17px] lg:text-[18px] tracking-[0.2em] uppercase text-[#8E6B47] font-semibold block">
                  {modalDetails[activeModal].initiative} • {modalDetails[activeModal].tag}
                </span>
                <h3 className="font-editorial text-[36px] md:text-[44px] lg:text-[56px] font-light text-[#152E28] leading-tight">
                  {modalDetails[activeModal].title}
                </h3>
              </div>

              <div className="w-full h-48 sm:h-60 rounded-xl overflow-hidden mb-6 bg-[#152E28]/10 relative">
                <img
                  src={modalDetails[activeModal].image}
                  alt={modalDetails[activeModal].title}
                  className="w-full h-full object-contain object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              </div>

              <div className="grid grid-cols-3 gap-3 mb-6 p-4 rounded-xl bg-white border border-[#152E28]/10 text-center">
                {modalDetails[activeModal].metrics.map((m, idx) => (
                  <div key={idx} className={idx === 1 ? 'border-x border-[#152E28]/10' : ''}>
                    <div className="font-editorial text-[36px] md:text-[44px] lg:text-[56px] font-light text-[#152E28]">{m.value}</div>
                    <div className="font-sans text-[16px] md:text-[17px] lg:text-[18px] tracking-wide uppercase text-[#8E6B47] font-medium">{m.label}</div>
                  </div>
                ))}
              </div>

              <div className="space-y-4 mb-6">
                <p className="font-sans text-[20px] md:text-[22px] lg:text-[24px] text-[#152E28] font-normal leading-[1.5] max-w-[700px]">
                  {modalDetails[activeModal].lead}
                </p>
                {modalDetails[activeModal].paragraphs.map((p, idx) => (
                  <p key={idx} className="font-sans text-[16px] md:text-[17px] lg:text-[18px] text-[#152E28]/80 font-normal leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>

              <div className="p-5 rounded-xl bg-white border border-[#152E28]/10 mb-6 space-y-3">
                <span className="font-sans text-[16px] md:text-[17px] lg:text-[18px] tracking-wide uppercase text-[#8E6B47] font-semibold block">
                  Core Commitment Pillars
                </span>
                <ul className="space-y-2">
                  {modalDetails[activeModal].keyPillars.map((pillar, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-[16px] md:text-[17px] lg:text-[18px] text-[#152E28]/85">
                      <CheckCircle2 className="w-5 h-5 text-[#8E6B47] shrink-0 mt-0.5" />
                      <span className="font-sans font-normal">{pillar}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#152E28]/15">
                <button
                  onClick={() => {
                    setActiveModal(null);
                    openEnquiryDrawer();
                  }}
                  className="px-7 py-3 rounded-full bg-[#152E28] text-white hover:bg-[#1C3D35] font-sans text-[16px] md:text-[17px] lg:text-[18px] tracking-wide uppercase font-medium transition-all cursor-pointer"
                >
                  Partner With Us
                </button>
                <button
                  onClick={() => setActiveModal(null)}
                  className="font-sans text-[16px] md:text-[17px] lg:text-[18px] tracking-wide uppercase text-[#152E28]/70 hover:text-[#152E28] transition-colors cursor-pointer"
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
