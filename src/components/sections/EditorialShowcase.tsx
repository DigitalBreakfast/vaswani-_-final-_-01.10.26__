import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { useCursor } from '../../context/CursorContext';
import { useNavigation } from '../../context/NavigationContext';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';
import {
  ArrowRight,
  ArrowUpRight,
  MapPin,
  ShieldCheck,
} from 'lucide-react';

interface EditorialCardProps {
  id: string;
  category: string;
  caption: string;
  detail: string;
  image: string;
  index: number;
}

const EDITORIAL_CARDS: EditorialCardProps[] = [
  {
    id: 'arch-1',
    category: '01 / ARCHITECTURE',
    caption: 'Sculptural Stone & Cantilevers',
    detail: 'Deep overhanging balconies engineered for thermal shading and cross-ventilation.',
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1000&q=85',
    index: 0,
  },
  {
    id: 'int-2',
    category: '02 / INTERIOR',
    caption: 'Honed Marble & Daylight',
    detail: 'Imported Italian Statuario marble illuminated by floor-to-ceiling panoramic glass.',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1000&q=85',
    index: 1,
  },
  {
    id: 'life-3',
    category: '03 / LIFESTYLE',
    caption: 'Authentic, Quiet Luxury',
    detail: 'Unhurried mornings and serene open landscapes designed for effortless living.',
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1000&q=85',
    index: 2,
  },
];

export const EditorialShowcase: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { setCursorVariant, resetCursor } = useCursor();
  const { openEnquiryDrawer } = useNavigation();
  const prefersReduced = usePrefersReducedMotion();

  const [, setActiveCardHover] = useState<number | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Parallax subtle shifts across rows
  const row1ImgScale = useTransform(scrollYProgress, [0, 0.4], [1, 1.05]);
  const row2ImgScale = useTransform(scrollYProgress, [0.3, 0.7], [1, 1.05]);

  return (
    <section
      id="editorial-showcase"
      ref={containerRef}
      className="relative w-full bg-[#135A5C] text-[#FAF8F5] py-24 sm:py-32 lg:py-40 select-none overflow-hidden"
      aria-label="Editorial Architectural Showcase"
    >
      {/* Background Architectural Grid */}
      <div className="absolute inset-0 bg-architectural-grid-ivory opacity-[0.025] pointer-events-none" />

      {/* Atmospheric Ambient Glow Orbs */}
      <div className="absolute top-1/4 -left-32 w-[600px] h-[600px] rounded-full bg-radial from-[#1E5E45]/35 via-[#0d3d34]/25 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 -right-32 w-[650px] h-[650px] rounded-full bg-radial from-[#68C29F]/15 via-[#06201b]/30 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute top-2/3 left-1/3 w-[500px] h-[500px] rounded-full bg-radial from-[#1E5E45]/20 via-transparent to-transparent blur-3xl pointer-events-none" />

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 space-y-28 sm:space-y-36 lg:space-y-44">
        
        {/* ========================================================================= */}
        {/* ROW 01: Asymmetrical 35% Left Editorial Panel / 65% Right Cinematic Hero */}
        {/* ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="min-h-[75vh] lg:min-h-[85vh] grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch"
        >
          {/* Left Side (35%): Large Dark Editorial Content Panel */}
          <div className="lg:col-span-4 flex flex-col justify-between bg-[#061d19]/90 backdrop-blur-xl border border-[#1E5E45]/40 rounded-3xl p-8 sm:p-10 lg:p-12 shadow-2xl relative overflow-hidden group">
            <div className="space-y-8">
              {/* Eyebrow - Level 04 */}
              <div className="space-y-4">
                <span className="font-sans text-[16px] md:text-[17px] lg:text-[18px] tracking-[0.25em] uppercase text-[#68C29F] font-semibold block">
                  FEATURED DEVELOPMENT
                </span>
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="w-16 h-[1.5px] bg-[#68C29F]/40 origin-left"
                />
              </div>

              {/* Large Editorial Headline - Level 02 */}
              <h2 className="font-editorial text-[36px] md:text-[44px] lg:text-[56px] font-light text-[#FAF8F5] tracking-tight leading-[1.08]">
                Seascape,<br />
                <span className="italic font-normal text-[#68C29F]">Juhu</span>
              </h2>

              {/* Supporting Lead/Body Paragraph - Level 04 */}
              <p className="font-sans text-[16px] md:text-[17px] lg:text-[18px] text-[#B3B9C4] font-light leading-relaxed">
                Conceived as a sanctuary of quiet luxury, where architectural clarity meets biophilic harmony. Every proportion, shadow, and natural material is curated to cultivate an enduring sense of calm.
              </p>
            </div>

            {/* Bottom Primary CTA - Level 04 */}
            <div className="pt-8 sm:pt-10">
              <button
                onClick={() => openEnquiryDrawer()}
                onMouseEnter={() => setCursorVariant('pointer')}
                onMouseLeave={resetCursor}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#1E5E45] hover:bg-[#257355] text-[#FAF8F5] font-sans text-[16px] md:text-[17px] lg:text-[18px] uppercase tracking-wide font-semibold flex items-center justify-between gap-4 transition-all duration-300 shadow-xl cursor-pointer group relative overflow-hidden"
              >
                <span>Explore Project</span>
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1.5 text-[#68C29F]" />
              </button>
            </div>
          </div>

          {/* Right Side (65%): Edge-to-Edge Cinematic Image */}
          <div
            onMouseEnter={() => setCursorVariant('view', 'Masterpiece')}
            onMouseLeave={resetCursor}
            className="lg:col-span-8 relative rounded-3xl overflow-hidden shadow-2xl bg-[#061d19] border border-[#1E5E45]/40 group min-h-[420px] lg:min-h-full"
          >
            <motion.div
              style={{ scale: prefersReduced ? 1 : row1ImgScale }}
              className="w-full h-full min-h-[420px] lg:min-h-full transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            >
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=85"
                alt="Vaswani Menlo Park — Flagship Masterpiece Architecture"
                className="w-full h-full object-cover brightness-[0.9] contrast-[1.05]"
              />
            </motion.div>

            {/* Subtle Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#061d19]/90 via-[#061d19]/20 to-transparent pointer-events-none" />

            {/* Architectural Caption Tag - Level 04 */}
            <div className="absolute bottom-6 sm:bottom-8 left-6 sm:left-8 right-6 sm:right-8 flex items-end justify-between text-[#FAF8F5]">
              <div className="space-y-1">
                <span className="font-sans text-[16px] md:text-[17px] lg:text-[18px] uppercase tracking-wider text-[#68C29F] font-semibold block">
                  VASWANI MENLO PARK • MASTER FACADE
                </span>
                <p className="font-sans text-[16px] md:text-[17px] lg:text-[18px] text-[#D5D9E2] font-light">
                  5.5-Acre Sanctuary with 80% Dedicated Greens • Whitefield, Bengaluru
                </p>
              </div>
              <span className="hidden sm:inline-block font-sans text-[16px] md:text-[17px] lg:text-[18px] tracking-wide text-[#FAF8F5]/70 font-semibold">
                12.9698° N, 77.7126° E
              </span>
            </div>
          </div>
        </motion.div>

        {/* ========================================================================= */}
        {/* ROW 02: 3-Image Portrait Editorial Grid + Completed Projects Panel        */}
        {/* ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="min-h-[75vh] grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
        >
          {/* Left Side (60%): 3 Equal Portrait Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            {EDITORIAL_CARDS.map((card, cIdx) => (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.15 * cIdx, ease: [0.16, 1, 0.3, 1] }}
                onMouseEnter={() => {
                  setActiveCardHover(cIdx);
                  setCursorVariant('explore', 'Details');
                }}
                onMouseLeave={() => {
                  setActiveCardHover(null);
                  resetCursor();
                }}
                className="group relative h-[380px] sm:h-[440px] rounded-2xl overflow-hidden bg-[#061d19] border border-[#1E5E45]/40 shadow-xl cursor-pointer"
              >
                <img
                  src={card.image}
                  alt={card.caption}
                  className="w-full h-full object-cover brightness-[0.82] transition-all duration-700 ease-out group-hover:scale-105 group-hover:brightness-95"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#061d19] via-[#061d19]/30 to-transparent" />

                {/* Top Category Tag - Level 04 */}
                <div className="absolute top-4 left-4">
                  <span className="font-sans text-[16px] md:text-[17px] lg:text-[18px] uppercase tracking-wider text-[#68C29F] font-semibold drop-shadow">
                    {card.category}
                  </span>
                </div>

                {/* Bottom Caption Container - Level 04 */}
                <div className="absolute bottom-5 left-4 right-4 space-y-1.5 transition-transform duration-300 group-hover:-translate-y-1">
                  <h4 className="font-editorial text-[24px] md:text-[28px] font-normal text-[#FAF8F5] leading-snug">
                    {card.caption}
                  </h4>
                  <p className="font-sans text-[16px] md:text-[17px] lg:text-[18px] text-[#B3B9C4] font-light leading-relaxed">
                    {card.detail}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Side (40%): Project Highlights Typography Panel */}
          <div className="lg:col-span-5 space-y-8 bg-[#061d19]/90 backdrop-blur-xl border border-[#1E5E45]/40 rounded-3xl p-8 sm:p-10 lg:p-12 shadow-2xl">
            <div className="space-y-4">
              <span className="font-sans text-[16px] md:text-[17px] lg:text-[18px] tracking-[0.25em] uppercase text-[#68C29F] font-semibold block">
                CURATED SPECIFICATIONS
              </span>
              <h3 className="font-editorial text-[36px] md:text-[44px] lg:text-[56px] font-light text-[#FAF8F5] tracking-tight leading-[1.1]">
                Completed Projects
              </h3>
              <p className="font-sans text-[16px] md:text-[17px] lg:text-[18px] text-[#B3B9C4] font-light leading-relaxed">
                From Olympic-length ozone-purified waters to soaring 28-foot double-height arrival lobbies, every amenity is an architectural extension of your personal residence.
              </p>
            </div>

            {/* Architectural Highlights List - Level 04 */}
            <div className="space-y-3.5 border-t border-white/10 pt-6">
              {[
                '25m Olympic Lap Pool & Recessed Timber Aqua Deck',
                '28-Foot Double-Height Italian Marble Arrival Lobby',
                '5.5-Acre Mature Native Botanical Reserve (80% Green)',
                'Acoustic Double-Glazed Thermal Break Fenestration',
              ].map((feat, fIdx) => (
                <div key={fIdx} className="flex items-start gap-3 font-sans text-[16px] md:text-[17px] lg:text-[18px] text-[#D5D9E2] font-light">
                  <span className="w-2 h-2 rounded-full bg-[#68C29F] mt-2 shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            {/* All Projects Secondary Action - Level 04 */}
            <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={() => {
                  const target = document.getElementById('overview') || document.getElementById('developments');
                  if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                onMouseEnter={() => setCursorVariant('pointer')}
                onMouseLeave={resetCursor}
                className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-[#FAF8F5] font-sans text-[16px] md:text-[17px] lg:text-[18px] uppercase tracking-wide font-semibold flex items-center justify-center gap-2.5 transition-all duration-300 cursor-pointer group"
              >
                <span>ALL PROJECTS</span>
                <ArrowRight className="w-5 h-5 text-[#68C29F] transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <div className="flex items-center gap-2 font-sans text-[16px] md:text-[17px] lg:text-[18px] text-[#8990A0] font-semibold tracking-wide">
                <ShieldCheck className="w-5 h-5 text-[#68C29F]" />
                <span>RERA VERIFIED</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ========================================================================= */}
        {/* ROW 03: Reversed Asymmetrical Layout */}
        {/* ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="min-h-[75vh] lg:min-h-[85vh] grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative"
        >
          {/* Left Side (65%): Cinematic Architectural Image */}
          <div
            onMouseEnter={() => setCursorVariant('view', 'Sky Villa')}
            onMouseLeave={resetCursor}
            className="lg:col-span-8 order-1 lg:order-1 relative rounded-3xl overflow-hidden shadow-2xl bg-[#061d19] border border-[#1E5E45]/40 group min-h-[420px] lg:min-h-[620px]"
          >
            <motion.div
              style={{ scale: prefersReduced ? 1 : row2ImgScale }}
              className="w-full h-full min-h-[420px] lg:min-h-[620px] transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            >
              <img
                src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1800&q=85"
                alt="Vaswani Sky Residences — Exterior Elevation and Sky Terraces"
                className="w-full h-full object-cover brightness-[0.88] contrast-[1.05]"
              />
            </motion.div>

            <div className="absolute inset-0 bg-gradient-to-t from-[#061d19]/80 via-[#061d19]/20 to-transparent pointer-events-none" />

            <div className="absolute top-6 left-6 sm:top-8 sm:left-8 flex items-center gap-2">
              <span className="px-4 py-1.5 rounded-full bg-[#061d19]/80 backdrop-blur-md border border-white/15 text-[#68C29F] font-sans text-[16px] md:text-[17px] lg:text-[18px] uppercase tracking-wide font-semibold">
                ELEVATED LIVING
              </span>
            </div>
          </div>

          {/* Right Side (35%): Floating Dark Glass Card */}
          <div className="lg:col-span-4 order-2 lg:order-2 bg-[#061d19]/85 backdrop-blur-xl border border-[#1E5E45]/50 rounded-3xl p-8 sm:p-10 shadow-2xl space-y-6 relative lg:-ml-12 z-20 hover:border-[#68C29F]/40 transition-all duration-500">
            {/* Top Badge & Location */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-sans text-[16px] md:text-[17px] lg:text-[18px] uppercase tracking-wider text-[#68C29F] font-semibold">
                  UPCOMING PROJECT
                </span>
                <span className="px-3 py-1 rounded-full bg-[#1E5E45]/40 border border-[#68C29F]/30 font-sans text-[16px] md:text-[17px] lg:text-[18px] text-[#68C29F] font-medium">
                  Phase I Ready
                </span>
              </div>
              <h3 className="font-editorial text-[36px] md:text-[44px] lg:text-[56px] font-light text-[#FAF8F5] tracking-tight leading-[1.1]">
                Vaswani Menlo Park
              </h3>
              <div className="flex items-center gap-2 font-sans text-[16px] md:text-[17px] lg:text-[18px] text-[#B3B9C4]">
                <MapPin className="w-4 h-4 text-[#68C29F] shrink-0" />
                <span>Brookefields, Whitefield • Bengaluru</span>
              </div>
            </div>

            <div className="w-full h-[1px] bg-white/10" />

            <p className="font-sans text-[16px] md:text-[17px] lg:text-[18px] text-[#D5D9E2] font-light leading-relaxed">
              5.5 acres of tranquil biophilic living featuring 3 & 4 BHK sky residences with expansive private timber balconies and uninterrupted horizon views.
            </p>

            {/* Specs Highlights - Level 04 */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-1">
                <span className="font-sans text-[16px] md:text-[17px] lg:text-[18px] uppercase tracking-wider text-[#8990A0] block">Configuration</span>
                <span className="font-sans text-[16px] md:text-[17px] lg:text-[18px] font-semibold text-[#FAF8F5] block">3 & 4 BHK</span>
              </div>
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-1">
                <span className="font-sans text-[16px] md:text-[17px] lg:text-[18px] uppercase tracking-wider text-[#8990A0] block">Open Space</span>
                <span className="font-sans text-[16px] md:text-[17px] lg:text-[18px] font-semibold text-[#68C29F] block">80% GREEN</span>
              </div>
            </div>

            {/* CTA Button - Level 04 */}
            <div className="pt-2">
              <button
                onClick={() => openEnquiryDrawer()}
                onMouseEnter={() => setCursorVariant('pointer')}
                onMouseLeave={resetCursor}
                className="w-full py-4 px-6 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-[#FAF8F5] font-sans text-[16px] md:text-[17px] lg:text-[18px] uppercase tracking-wide font-semibold flex items-center justify-center gap-3 transition-all duration-300 cursor-pointer group"
              >
                <span>View Residence Details</span>
                <ArrowUpRight className="w-5 h-5 text-[#68C29F] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
