import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useCursor } from '../../context/CursorContext';

interface PerspectiveFrame {
  id: string;
  number: string;
  status?: string;
  location: string;
  brand: string;
  name: string;
  link?: string;
  externalUrl?: string;
  image: string;
  aspect: string;
  details: string[];
}

const FRAMES: PerspectiveFrame[] = [
  {
    id: 'seascape',
    number: '01',
    status: 'Active',
    location: 'Juhu',
    brand: 'Vaswani',
    name: 'Seascape',
    externalUrl: 'https://vaswaniseascape.in',
    image: 'https://res.cloudinary.com/ds5s7shuo/image/upload/v1779550159/Make_setting_night_time_202605232058_w4cpyk.jpg',
    aspect: 'aspect-[3/4] sm:aspect-[9/14]',
    details: ['4 & 5 BHK', '2300 - 4500 Sq ft', 'Sea facing', 'Sky Villas'],
  },
  {
    id: 'verano',
    number: '02',
    status: 'Active',
    location: 'Bandra West',
    brand: 'Vaswani',
    name: 'Verano',
    link: '/products?project=verano-montclaire',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85',
    aspect: 'aspect-[3/4] sm:aspect-[9/14]',
    details: ['3 & 4 BHK', '1800 - 3200 Sq ft', 'Bandra West', 'Luxury Residences'],
  },
  {
    id: 'viona',
    number: '03',
    status: 'Active',
    location: 'Andheri',
    brand: 'Vaswani',
    name: 'Viona',
    link: '/products?project=viona',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85',
    aspect: 'aspect-[3/4] sm:aspect-[9/14]',
    details: ['2 & 3 BHK', '1200 - 2100 Sq ft', 'Andheri West', 'Contemporary Homes'],
  },
];

export const ArchitecturalPerspectives: React.FC = () => {
  const { setCursorVariant, resetCursor } = useCursor();
  const navigate = useNavigate();

  const handleFrameClick = (frame: PerspectiveFrame) => {
    if (frame.externalUrl) {
      window.open(frame.externalUrl, '_blank', 'noopener,noreferrer');
    } else if (frame.link) {
      navigate(frame.link);
    }
  };

  return (
    <section
      id="architectural-perspectives"
      className="relative w-full min-h-screen bg-[#0E1A17] text-white select-none overflow-hidden"
      aria-label="Architectural Perspectives"
    >
      {/* Full-bleed Three Vertical Frames Layout */}
      <div className="w-full h-full min-h-screen grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/15">
        {FRAMES.map((frame, idx) => (
          <motion.div
            key={frame.id}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
            onMouseEnter={() => setCursorVariant('pointer')}
            onMouseLeave={resetCursor}
            onClick={() => handleFrameClick(frame)}
            className="group relative w-full h-[70vh] md:h-screen min-h-[550px] overflow-hidden bg-[#18110E] cursor-pointer"
          >
            {/* Full-bleed Background Image with Warm Brown Tone Filter Default and Full Color on Hover */}
            <img
              src={frame.image}
              alt={`${frame.brand} ${frame.name}`}
              className="w-full h-full object-cover object-center sepia-[0.8] contrast-[1.1] brightness-[0.88] group-hover:sepia-0 group-hover:contrast-100 group-hover:brightness-100 transition-all duration-700 ease-out group-hover:scale-108"
              loading="lazy"
            />

            {/* Warm Brown Tint & Cinematic Gradient Overlays */}
            <div className="absolute inset-0 bg-[#2D1B16]/25 mix-blend-color transition-opacity duration-700 group-hover:opacity-0 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/35 to-black/25 transition-opacity duration-700 group-hover:opacity-85 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-transparent pointer-events-none" />

            {/* Top Navigation & Project Details Stage */}
            <div className="absolute top-7 sm:top-9 left-7 sm:left-9 right-7 sm:right-9 flex items-start justify-between z-20 pointer-events-none">
              <div className="flex items-center gap-2.5">
                {frame.status && (
                  <span className="font-sans text-[11px] sm:text-xs tracking-[0.2em] uppercase text-emerald-300 font-medium px-2.5 sm:px-3 py-1 rounded-full bg-emerald-950/60 backdrop-blur-md border border-emerald-500/30 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>{frame.status}</span>
                  </span>
                )}
              </div>

              {/* Top-Right Area: Arrow on idle / Clean Minimal Details Box on Hover */}
              <div className="relative flex items-start justify-end pointer-events-auto">
                {/* Default Arrow Button (smoothly transitions out on hover) */}
                <div className="w-11 h-11 rounded-full bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center text-white transition-all duration-300 shadow-lg group-hover:opacity-0 group-hover:scale-90">
                  <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>

                {/* Clean, Minimal Project Details Box with Light Brown (#E5DAC8) Background & Dark Green (#135A5C) Text */}
                <div className="absolute top-0 right-0 opacity-0 -translate-y-1.5 scale-95 group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100 transition-all duration-300 ease-out pointer-events-none">
                  <div className="bg-[#E5DAC8] backdrop-blur-md border border-[#135A5C]/20 rounded-2xl p-5 shadow-2xl min-w-[170px] text-left">
                    <div className="space-y-2 font-sans tracking-wide">
                      {frame.details.map((detail, dIdx) => (
                        <div
                          key={dIdx}
                          className={
                            dIdx === 0
                              ? 'text-[16px] md:text-[17px] lg:text-[18px] font-semibold text-[#135A5C] pb-0.5 border-b border-[#135A5C]/15'
                              : 'text-[16px] md:text-[17px] lg:text-[18px] text-[#135A5C] font-medium'
                          }
                        >
                          {detail}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Content Narrative */}
            <div className="absolute bottom-8 sm:bottom-12 left-8 sm:left-10 right-8 sm:right-10 z-10 space-y-4">
              <div className="space-y-1.5">
                <div className="font-sans text-[16px] md:text-[17px] lg:text-[18px] tracking-[0.2em] uppercase text-[#d7c2a3] font-medium block">
                  {frame.location}
                </div>
                <div className="w-10 h-[1.5px] bg-[#d7c2a3]/60 transition-all duration-500 group-hover:w-16" />
              </div>

              {/* Project Title - Level 02: Cormorant Garamond 56px desktop, 44px tablet, 36px mobile */}
              <h3 className="font-editorial text-[36px] md:text-[44px] lg:text-[56px] text-white font-light leading-[1.08] tracking-tight">
                {frame.name}
              </h3>

              <div className="pt-2 flex items-center gap-2 text-white/80 group-hover:text-white font-sans text-[16px] md:text-[17px] lg:text-[18px] tracking-wide transition-colors">
                <span>Explore Project</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
