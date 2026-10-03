import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Handshake, TrendingUp, Building, CheckCircle2 } from 'lucide-react';
import { useCursor } from '../context/CursorContext';
import { useNavigation } from '../context/NavigationContext';
import { InNumbers } from '../components/sections/InNumbers';
import { FinalCTA } from '../components/sections/FinalCTA';

export const PartnerPage: React.FC = () => {
  const { setCursorVariant, resetCursor } = useCursor();
  const { openEnquiryDrawer } = useNavigation();

  const partnershipModels = [
    {
      icon: Handshake,
      title: 'Joint Development & Land Alliances',
      description: 'We collaborate with visionary landowners across South Asia and the Middle East to unlock maximum enduring capital value through transparent equity or revenue-share models.',
      highlights: ['Transparent Legal Governance', 'Zero-Litigation Track Record', 'Uncompromising Quality Standards', 'Accelerated Execution Lifecycles'],
    },
    {
      icon: TrendingUp,
      title: 'Institutional Capital & Co-Investment',
      description: 'Structured co-investment vehicles for institutional funds, family offices, and sovereign wealth investors targeting prime urban residential and Grade-A commercial assets.',
      highlights: ['Prudent Financial Discipline', 'Consistent Double-Digit IRRs', 'Tier-1 Audit & Compliance', 'Robust ESG Benchmarks'],
    },
    {
      icon: Building,
      title: 'Commercial Redevelopment & Masterplans',
      description: 'Transforming legacy land parcels into future-proof enterprise tech parks, Grade-A headquarters, and mixed-use luxury lifestyle hubs.',
      highlights: ['LEED Platinum Certifications', 'Global Fortune 500 Tenants', 'Biophilic Design Integration', 'Comprehensive Asset Management'],
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="w-full bg-transparent text-[#135A5C] pt-28 sm:pt-36 select-none"
    >
      {/* ───────────────────────────────────────────────────────────── */}
      {/* 1. HERO BANNER                                                */}
      {/* ───────────────────────────────────────────────────────────── */}
      <section className="relative w-full py-16 sm:py-24 px-6 sm:px-10 lg:px-16 border-b border-[#135A5C]/10">
        <div className="w-full max-w-[1440px] mx-auto">
          <div className="max-w-[840px] space-y-6">
            <div className="space-y-2 inline-block">
              <span className="font-sans text-[16px] md:text-[17px] lg:text-[18px] tracking-[0.25em] uppercase text-[#1A4E40] font-semibold block">
                STRATEGIC ALLIANCES & CAPITAL
              </span>
              <div className="w-10 h-[1.5px] bg-[#1A4E40]" />
            </div>

            {/* Page Hero Title - Level 01: Cormorant Garamond 88px desktop, 72px tablet, 52px mobile */}
            <h1 className="font-editorial text-[52px] md:text-[72px] lg:text-[88px] font-light leading-[1.02] tracking-tight text-[#135A5C]">
              Partner With Four Decades of{' '}
              <span className="italic font-normal text-[#1A4E40]">
                Integrity & Excellence.
              </span>
            </h1>

            {/* Lead Paragraph - Level 03: Plus Jakarta Sans 24px desktop, 22px tablet, 20px mobile */}
            <p className="font-sans text-[20px] md:text-[22px] lg:text-[24px] text-[#3A534A] font-light leading-[1.5] max-w-[700px]">
              For over 40 years, the Vaswani Group has been the preferred partner of choice for leading landowners, institutional funds, and world-class architectural practices across Bengaluru, Mumbai, and Dubai.
            </p>

            <div className="pt-4">
              <button
                onClick={openEnquiryDrawer}
                onMouseEnter={() => setCursorVariant('pointer')}
                onMouseLeave={resetCursor}
                className="group flex items-center justify-center gap-3 px-8 sm:px-9 py-4 rounded-full bg-[#152E28] hover:bg-[#1C3D35] text-white font-sans text-[16px] md:text-[17px] lg:text-[18px] tracking-wide uppercase font-medium transition-all duration-300 shadow-md hover:shadow-xl cursor-pointer hover:-translate-y-0.5"
              >
                <span>Initiate Partnership Inquiry</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────── */}
      {/* 2. NUMBERS & CREDIBILITY                                      */}
      {/* ───────────────────────────────────────────────────────────── */}
      <InNumbers />

      {/* ───────────────────────────────────────────────────────────── */}
      {/* 3. PARTNERSHIP MODELS                                         */}
      {/* ───────────────────────────────────────────────────────────── */}
      <section className="w-full py-20 sm:py-32 px-6 sm:px-10 lg:px-16">
        <div className="w-full max-w-[1440px] mx-auto space-y-16">
          <div className="text-center max-w-[700px] mx-auto space-y-3">
            <span className="font-sans text-[16px] md:text-[17px] lg:text-[18px] tracking-[0.25em] uppercase text-[#1A4E40] font-semibold block">
              COLLABORATION PILLARS
            </span>
            {/* Section Heading - Level 02: Cormorant Garamond 56px desktop, 44px tablet, 36px mobile */}
            <h2 className="font-editorial text-[36px] md:text-[44px] lg:text-[56px] font-light leading-[1.1] tracking-tight text-[#135A5C]">
              Flexible, Transparent Partnership Structures
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            {partnershipModels.map((model, idx) => {
              const Icon = model.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
                  className="rounded-[28px] p-8 sm:p-10 bg-white border border-[#135A5C]/10 shadow-[0_15px_40px_rgba(19,90,92,0.05)] flex flex-col justify-between space-y-6"
                >
                  <div className="space-y-6">
                    <div className="w-14 h-14 rounded-2xl bg-[#F8F6F2] flex items-center justify-center text-[#1A4E40]">
                      <Icon className="w-7 h-7" />
                    </div>

                    {/* Model Title - Level 02: Cormorant Garamond */}
                    <h3 className="font-editorial text-[36px] md:text-[44px] lg:text-[56px] font-light text-[#135A5C] leading-snug">
                      {model.title}
                    </h3>

                    {/* Model Description - Level 04: Plus Jakarta Sans */}
                    <p className="font-sans text-[16px] md:text-[17px] lg:text-[18px] text-[#3A534A] font-light leading-relaxed">
                      {model.description}
                    </p>

                    <div className="space-y-3 pt-4 border-t border-[#135A5C]/10">
                      {model.highlights.map((item, i) => (
                        <div key={i} className="flex items-center gap-2.5 text-[16px] md:text-[17px] lg:text-[18px] font-sans text-[#135A5C]">
                          <CheckCircle2 className="w-4 h-4 text-[#1A4E40] shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6">
                    <button
                      onClick={openEnquiryDrawer}
                      onMouseEnter={() => setCursorVariant('pointer')}
                      onMouseLeave={resetCursor}
                      className="group flex items-center gap-2 text-[16px] md:text-[17px] lg:text-[18px] font-sans tracking-wide uppercase text-[#152E28] font-semibold hover:text-[#152E28]/80 transition-colors cursor-pointer"
                    >
                      <span>Discuss Opportunity</span>
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────── */}
      {/* 4. FINAL CTA                                                  */}
      {/* ───────────────────────────────────────────────────────────── */}
      <FinalCTA />
    </motion.div>
  );
};
