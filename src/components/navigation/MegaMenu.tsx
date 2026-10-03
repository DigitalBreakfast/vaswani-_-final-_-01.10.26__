import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ArrowUpRight, X, Phone, Mail, MapPin } from 'lucide-react';
import { useNavigation, GLOBAL_NAV_ITEMS } from '../../context/NavigationContext';
import { useCursor } from '../../context/CursorContext';
import { Eyebrow } from '../ui/Typography';
import { Button } from '../ui/Button';

export const MegaMenu: React.FC = () => {
  const { isMegaMenuOpen, toggleMegaMenu, openEnquiryDrawer, setActiveNavId } = useNavigation();
  const { setCursorVariant, resetCursor } = useCursor();
  const location = useLocation();
  const navigate = useNavigate();

  // Find initial hovered index based on current location
  const findInitialIndex = () => {
    const found = GLOBAL_NAV_ITEMS.findIndex((item) => {
      if (item.href === '/') return location.pathname === '/';
      return location.pathname.startsWith(item.href);
    });
    return Math.max(0, found);
  };

  const [hoveredIndex, setHoveredIndex] = useState<number>(findInitialIndex());
  const [expandedMobileId, setExpandedMobileId] = useState<string | null>(null);

  useEffect(() => {
    if (isMegaMenuOpen) {
      const idx = findInitialIndex();
      setHoveredIndex(idx);
      setExpandedMobileId(GLOBAL_NAV_ITEMS[idx]?.id || 'home');
    }
  }, [isMegaMenuOpen, location.pathname]);

  const activeItem = GLOBAL_NAV_ITEMS[hoveredIndex] || GLOBAL_NAV_ITEMS[0];

  const handleNavClick = (id: string, href: string) => {
    setActiveNavId(id);
    toggleMegaMenu();

    if (href.includes('#')) {
      const [path, hash] = href.split('#');
      const targetPath = path || '/';
      navigate(targetPath);
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 150);
    } else {
      navigate(href);
    }
  };

  return (
    <AnimatePresence>
      {isMegaMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-50 bg-[#1A1C1E] text-[#FAF8F5] flex flex-col justify-between overflow-y-auto"
        >
          {/* Subtle Deep Charcoal Ambient Architectural Mist & Grid */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#141618] via-[#1A1C1E] to-[#141618] pointer-events-none" />
          <div className="absolute inset-0 bg-architectural-grid-ivory opacity-[0.03] pointer-events-none" />

          {/* ========================================================================= */}
          {/* TOP BAR: Brand Identity + Close Action */}
          {/* ========================================================================= */}
          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-6 sm:py-8 flex items-center justify-between border-b border-white/[0.08]">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg border border-white/20 flex items-center justify-center bg-white/5">
                <span className="font-sans text-[16px] md:text-[17px] lg:text-[18px] tracking-widest text-[#FAF8F5]">V</span>
              </div>
              <div className="flex flex-col">
                <span className="font-sans text-[16px] md:text-[17px] lg:text-[18px] tracking-[0.2em] font-light text-[#FAF8F5] uppercase leading-none">
                  VASWANI GROUP
                </span>
                <span className="font-sans text-[16px] md:text-[17px] lg:text-[18px] tracking-wider text-[#8990A0] uppercase mt-1 font-medium">
                  ARCHITECTURAL DIRECTORY
                </span>
              </div>
            </div>

            <button
              onClick={toggleMegaMenu}
              onMouseEnter={() => setCursorVariant('pointer')}
              onMouseLeave={resetCursor}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/[0.06] hover:bg-white/[0.12] border border-white/15 text-[#FAF8F5] font-sans text-[16px] md:text-[17px] lg:text-[18px] uppercase tracking-widest transition-all cursor-pointer group"
            >
              <span className="group-hover:text-[#68C29F] transition-colors">Close</span>
              <X className="w-5 h-5 text-[#68C29F] transform group-hover:rotate-90 transition-transform duration-300" />
            </button>
          </div>

          {/* ========================================================================= */}
          {/* MAIN CONTENT: Left Editorial Navigation + Right Dynamic Visual Panel */}
          {/* ========================================================================= */}
          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-8 sm:py-12 lg:py-16 flex-1 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            
            {/* ----------------------------------------------------------------------- */}
            {/* LEFT COLUMN: Large Typography Menu Items with Sub-Navigation */}
            {/* ----------------------------------------------------------------------- */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center justify-between">
                <Eyebrow color="green">Curated Directory</Eyebrow>
                <span className="font-sans text-[16px] md:text-[17px] lg:text-[18px] text-[#8990A0]">0{hoveredIndex + 1} / 0{GLOBAL_NAV_ITEMS.length}</span>
              </div>

              {/* Nav List */}
              <ul className="space-y-4">
                {GLOBAL_NAV_ITEMS.map((item, index) => {
                  const isHovered = hoveredIndex === index;
                  const isActive = item.href === '/'
                    ? location.pathname === '/'
                    : location.pathname.startsWith(item.href);

                  return (
                    <motion.li
                      key={item.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.06 + 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      className="border-b border-white/[0.08] pb-4"
                    >
                      {/* Main Title Row */}
                      <div
                        onClick={() => handleNavClick(item.id, item.href)}
                        onMouseEnter={() => {
                          setHoveredIndex(index);
                          setCursorVariant('pointer');
                        }}
                        onMouseLeave={resetCursor}
                        className="group flex items-baseline justify-between py-2 cursor-pointer select-none"
                      >
                        <div className="flex items-baseline gap-4 sm:gap-6">
                          <span className="font-sans font-medium text-[16px] md:text-[17px] lg:text-[18px] text-[#6C7382] group-hover:text-[#68C29F] transition-colors tracking-tight">
                            0{index + 1}
                          </span>
                          <span className={`font-editorial text-[36px] md:text-[44px] lg:text-[56px] font-light leading-[1.1] transition-all duration-300 ${
                            isHovered || isActive
                              ? 'text-[#FAF8F5] translate-x-2'
                              : 'text-[#D5D9E2]/70 group-hover:text-[#FAF8F5]'
                          }`}>
                            {item.label}
                          </span>
                        </div>

                        <div className="flex items-center gap-3">
                          <span className="hidden sm:inline font-sans text-[16px] md:text-[17px] lg:text-[18px] text-[#8990A0] group-hover:text-[#FAF8F5] transition-colors">
                            {item.tag}
                          </span>
                          <div className={`w-9 h-9 rounded-full border flex items-center justify-center transition-all ${
                            isHovered || isActive
                              ? 'border-[#152E28] bg-[#152E28] text-[#FAF8F5]'
                              : 'border-white/10 text-white/40 group-hover:border-white/30 group-hover:text-white'
                          }`}>
                            <ArrowUpRight className="w-5 h-5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                          </div>
                        </div>
                      </div>

                      {/* Description & Sub-Navigation Links */}
                      {(isHovered || expandedMobileId === item.id) && item.subItems && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.35 }}
                          className="pt-3 pl-8 sm:pl-12 space-y-3"
                        >
                          <p className="font-sans text-[16px] md:text-[17px] lg:text-[18px] text-[#8990A0] leading-relaxed max-w-xl">
                            {item.description}
                          </p>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                            {item.subItems.map((sub, sIdx) => (
                              <a
                                key={sIdx}
                                href={sub.href}
                                onClick={(e) => {
                                  e.preventDefault();
                                  handleNavClick(item.id, sub.href);
                                }}
                                onMouseEnter={() => setCursorVariant('pointer')}
                                onMouseLeave={resetCursor}
                                className="group/sub flex items-center gap-2 text-[16px] md:text-[17px] lg:text-[18px] font-sans text-[#D5D9E2] hover:text-[#68C29F] py-1 transition-colors"
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-[#68C29F] opacity-60 group-hover/sub:opacity-100 group-hover/sub:scale-125 transition-all" />
                                <span className="tracking-wide">{sub.label}</span>
                              </a>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </motion.li>
                  );
                })}
              </ul>
            </div>

            {/* ----------------------------------------------------------------------- */}
            {/* RIGHT COLUMN: Dynamic Immersive Visual Panel */}
            {/* ----------------------------------------------------------------------- */}
            <div className="lg:col-span-5 space-y-6">
              {/* Dynamic Image Container with Architectural Cross-Dissolve */}
              <div className="relative h-72 sm:h-96 rounded-2xl overflow-hidden bg-[#24272C] border border-white/10 shadow-2xl">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeItem.id}
                    initial={{ opacity: 0, scale: 1.06 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute inset-0 w-full h-full"
                  >
                    <img
                      src={activeItem.image}
                      alt={activeItem.label}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#141618] via-transparent to-transparent pointer-events-none" />
                  </motion.div>
                </AnimatePresence>

                {/* Top Corner Category Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3.5 py-1.5 rounded-full bg-[#1A1C1E]/80 backdrop-blur-md border border-white/15 text-[16px] md:text-[17px] lg:text-[18px] uppercase font-sans tracking-wider text-[#FAF8F5]">
                    {activeItem.tag}
                  </span>
                </div>

                {/* Bottom Contextual Metadata Card */}
                <div className="absolute bottom-4 left-4 right-4 z-10 p-5 rounded-xl bg-[#1A1C1E]/85 backdrop-blur-md border border-white/10 space-y-2">
                  <h4 className="font-sans text-[16px] md:text-[17px] lg:text-[18px] font-medium text-[#FAF8F5]">
                    {activeItem.visualTitle || activeItem.label}
                  </h4>
                  <div className="flex items-center justify-between text-[16px] md:text-[17px] lg:text-[18px] text-[#8990A0] font-sans">
                    <span>{activeItem.visualLocation}</span>
                    <span className="text-[#68C29F]">{activeItem.visualCredit}</span>
                  </div>
                </div>
              </div>

              {/* Consultation Card with Direct Primary Trigger */}
              <div className="p-6 rounded-2xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-between gap-4">
                <div className="space-y-1">
                  <p className="text-[16px] md:text-[17px] lg:text-[18px] font-sans text-[#FAF8F5] font-medium">Private Advisory Consultation</p>
                  <p className="text-[16px] md:text-[17px] lg:text-[18px] text-[#8990A0] font-sans">Connect directly with our senior architectural partners.</p>
                </div>
                <Button
                  variant="primary"
                  onClick={() => {
                    toggleMegaMenu();
                    openEnquiryDrawer();
                  }}
                  showArrow
                >
                  Enquire
                </Button>
              </div>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* FOOTER: Global Office Coordinates & Contact Information */}
          {/* ========================================================================= */}
          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-6 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 text-[16px] md:text-[17px] lg:text-[18px] font-sans text-[#8990A0]">
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-[#68C29F]" /> Bengaluru: Victoria Road</span>
              <span className="hidden sm:inline-flex items-center gap-2"><MapPin className="w-4 h-4 text-[#68C29F]" /> Dubai: DIFC Precinct</span>
            </div>

            <div className="flex items-center gap-6">
              <a
                href="mailto:concierge@vaswanigroup.com"
                onMouseEnter={() => setCursorVariant('pointer')}
                onMouseLeave={resetCursor}
                className="flex items-center gap-2 hover:text-[#68C29F] transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>concierge@vaswanigroup.com</span>
              </a>
              <a
                href="tel:+918049111000"
                onMouseEnter={() => setCursorVariant('pointer')}
                onMouseLeave={resetCursor}
                className="flex items-center gap-2 hover:text-[#68C29F] transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>+91 80 4911 1000</span>
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
