import React from 'react';
import { motion } from 'motion/react';
import { Building2 } from 'lucide-react';

interface CityFootprint {
  id: string;
  name: string;
  state: string;
  role: string;
  tagline: string;
  description: string;
  projects: string[];
  sqftDelivered: string;
  established: string;
  image: string;
}

const CITIES: CityFootprint[] = [
  {
    id: 'mumbai',
    name: 'Mumbai',
    state: 'Maharashtra',
    role: 'Ultra-Luxury & Financial Capital Footprint',
    tagline: 'Signature prime developments tailored for high-net-worth families and corporate leaders.',
    description:
      'Boutique luxury residences and landmark commercial suites situated in premier strategic hubs, engineered with timeless stone craftsmanship and panoramic ocean and skyline views.',
    projects: [
      'Vaswani Horizon (BKC)',
      'Vaswani Sea Crest',
      'The Vaswani Pavilion',
    ],
    sqftDelivered: '2.4M+ Sq. Ft.',
    established: '1992',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=85',
  },
  {
    id: 'bengaluru',
    name: 'Bengaluru',
    state: 'Karnataka',
    role: 'Corporate Headquarters & Flagship Enclaves',
    tagline: 'The epicentre of our architectural heritage and four decades of residential excellence.',
    description:
      'Our primary development hub, pioneering premier gated enclaves, penthouses, high-end residential towers, and commercial IT tech parks across Whitefield, Outer Ring Road, and CBD corridors.',
    projects: [
      'Vaswani Menlo Park',
      'Vaswani Reserve',
      'Vaswani Whispering Palms',
      'Vaswani Starlight',
      'Vaswani Brentwood',
    ],
    sqftDelivered: '8.5M+ Sq. Ft.',
    established: '1985',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85',
  },
];

export const GrowingAcrossIndia: React.FC = () => {
  return (
    <section
      id="growing-across-india"
      className="relative w-full text-[#135A5C] py-16 sm:py-20 lg:py-24 px-6 sm:px-10 lg:px-16 select-none overflow-hidden border-t border-[#135A5C]/10"
      aria-label="Growing Across India — Geographic Footprint"
    >
      <div className="w-full max-w-[1320px] mx-auto space-y-10 sm:space-y-12 relative z-10">
        
        {/* ========================================================================= */}
        {/* 1. MINIMAL EDITORIAL HEADER                                               */}
        {/* ========================================================================= */}
        <div className="pb-6 border-b border-[#135A5C]/15">
          <div className="space-y-3 max-w-2xl">
            <h2 className="font-editorial text-[32px] md:text-[40px] lg:text-[48px] font-light leading-[1.1] text-[#135A5C] tracking-tight">
              Growing Across{' '}
              <span className="italic font-normal text-[#1E5E45]">India.</span>
            </h2>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 2. CLEAN EDITORIAL GRID                                                   */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          {CITIES.map((city) => (
            <motion.article
              key={city.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="group flex flex-col justify-between bg-white rounded-2xl border-2 sm:border-[3px] border-[#135A5C] transition-all duration-300 overflow-hidden shadow-[0_12px_40px_-15px_rgba(19,90,92,0.12)] hover:shadow-[0_16px_48px_-12px_rgba(19,90,92,0.18)] p-6 sm:p-7 space-y-5"
            >
              <div className="space-y-3.5">
                {/* Header: Title & Delivered Metric */}
                <div className="flex items-start justify-between gap-4 pb-3 border-b border-[#135A5C]/8">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-editorial text-2xl sm:text-[28px] font-light text-[#135A5C] tracking-tight">
                        {city.name}
                      </h3>
                      <span className="text-[11px] font-sans uppercase tracking-wider text-[#5A756C]">
                        • {city.state}
                      </span>
                    </div>
                  </div>

                  <div className="text-right flex-shrink-0">
                    <span className="font-editorial text-xl sm:text-2xl text-[#135A5C] font-light block leading-none">
                      {city.sqftDelivered}
                    </span>
                    <span className="text-[10px] uppercase tracking-wider text-[#7A958C] font-medium block mt-1">
                      Delivered
                    </span>
                  </div>
                </div>

                {/* Tagline / Excerpt */}
                <p className="text-[13px] sm:text-[14px] text-[#4A6358] font-light leading-relaxed">
                  {city.description}
                </p>

                {/* Notable Developments Minimal Tags */}
                <div className="space-y-2 pt-1">
                  <span className="text-[10px] uppercase tracking-widest text-[#7A958C] font-semibold block">
                    Key Landmarks
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {city.projects.map((proj, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#FAF8F5] border border-[#135A5C]/8 text-[12px] font-sans text-[#135A5C] font-normal"
                      >
                        <Building2 className="w-3 h-3 text-[#1E5E45]/70" />
                        <span>{proj}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
};
