import React from 'react';
import { motion } from 'motion/react';

interface CityFootprint {
  id: string;
  name: string;
  state: string;
  description: string;
}

const CITIES: CityFootprint[] = [
  {
    id: 'mumbai',
    name: 'Mumbai',
    state: 'Maharashtra',
    description:
      'Boutique luxury residences and landmark commercial suites situated in premier strategic hubs, engineered with timeless stone craftsmanship and panoramic ocean and skyline views.',
  },
  {
    id: 'bengaluru',
    name: 'Bengaluru',
    state: 'Karnataka',
    description:
      'Our primary development hub, pioneering premier gated enclaves, penthouses, high-end residential towers, and commercial IT tech parks across Whitefield, Outer Ring Road, and CBD corridors.',
  },
];

export const GrowingAcrossIndia: React.FC = () => {
  return (
    <section
      id="growing-across-india"
      className="relative w-full text-[#135A5C] py-20 sm:py-24 lg:py-28 px-6 sm:px-10 lg:px-16 select-none overflow-hidden border-t border-[#135A5C]/10"
      aria-label="Growing Across India — Geographic Footprint"
    >
      <div className="w-full max-w-[1320px] mx-auto space-y-10 sm:space-y-12 relative z-10">
        
        {/* ========================================================================= */}
        {/* 1. EDITORIAL HEADER                                                       */}
        {/* ========================================================================= */}
        <div className="pb-6 border-b border-[#135A5C]/15">
          <div className="space-y-2 max-w-2xl">
            <h2 className="font-editorial text-[36px] md:text-[44px] lg:text-[52px] font-light leading-[1.1] text-[#135A5C] tracking-tight">
              Growing Across{' '}
              <span className="italic font-normal text-[#1E5E45]">India.</span>
            </h2>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 2. DUAL-PANEL ARCHITECTURAL SPREAD                                        */}
        {/* ========================================================================= */}
        <div className="bg-[#2C1E16] rounded-3xl border border-[#4A3728]/50 shadow-[0_16px_45px_rgba(44,30,22,0.18)] overflow-hidden text-white">
          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/15">
            {CITIES.map((city, idx) => (
              <motion.article
                key={city.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="bg-[#2C1E16] p-8 sm:p-10 lg:p-12 flex flex-col justify-between hover:bg-[#34241B] transition-colors duration-500 text-white"
              >
                <div className="space-y-5">
                  <div className="flex items-center justify-between">
                    <span className="font-sans text-[12px] sm:text-[13px] tracking-[0.22em] uppercase font-semibold text-[#D4AF37]">
                      0{idx + 1} — {city.state}
                    </span>
                  </div>

                  <h3 className="font-editorial text-[36px] sm:text-[44px] lg:text-[48px] font-light text-white tracking-tight leading-[1.05]">
                    {city.name}
                  </h3>

                  <div className="w-12 h-px bg-[#D4AF37]/50" />

                  <p className="font-sans text-[15px] sm:text-[16px] text-white/90 font-normal leading-relaxed">
                    {city.description}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
