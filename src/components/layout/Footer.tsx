import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { Instagram, Linkedin, Youtube } from 'lucide-react';
import { useCursor } from '../../context/CursorContext';
import { useNavigation } from '../../context/NavigationContext';

export const Footer: React.FC = () => {
  const { setCursorVariant, resetCursor } = useCursor();
  const { openEnquiryDrawer } = useNavigation();
  const navigate = useNavigate();

  const currentYear = 2026;

  const navigationLinks = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Projects', path: '/products' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <footer
      id="site-footer"
      className="relative w-full bg-[#0A2F28] text-white pt-24 sm:pt-28 lg:pt-32 pb-12 sm:pb-16 px-6 sm:px-10 lg:px-16 select-none overflow-hidden"
      aria-label="Vaswani Group Footer"
    >
      {/* ───────────────────────────────────────────────────────────── */}
      {/* SUBTLE TEXTURE OVERLAY                                         */}
      {/* ───────────────────────────────────────────────────────────── */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.025] pointer-events-none mix-blend-overlay"
        aria-hidden="true"
      >
        <filter id="vaswani-footer-texture">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.85"
            numOctaves="3"
            stitchTiles="stitch"
          />
        </filter>
        <rect width="100%" height="100%" filter="url(#vaswani-footer-texture)" />
      </svg>

      {/* ───────────────────────────────────────────────────────────── */}
      {/* MAIN CONTAINER (MAX WIDTH 1440PX)                             */}
      {/* ───────────────────────────────────────────────────────────── */}
      <div className="relative w-full max-w-[1440px] mx-auto z-10 space-y-20 lg:space-y-24">
        
        {/* ───────────────────────────────────────────────────────────── */}
        {/* THREE-SECTION EDITORIAL MAIN ROW: LEFT | CENTER | RIGHT       */}
        {/* ───────────────────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row justify-between items-start gap-12 sm:gap-16 lg:gap-24"
        >
          {/* 1. LEFT: BRAND */}
          <div className="flex flex-col items-start space-y-6 max-w-sm">
            <button
              onClick={() => navigate('/')}
              onMouseEnter={() => setCursorVariant('pointer')}
              onMouseLeave={resetCursor}
              className="group text-left cursor-pointer inline-block"
            >
              <span className="font-sans text-[16px] md:text-[17px] lg:text-[18px] tracking-[0.3em] uppercase text-white font-medium block">
                VASWANI GROUP
              </span>
            </button>

            <p className="font-sans text-[16px] md:text-[17px] lg:text-[18px] text-white/70 font-light leading-relaxed">
              Thoughtfully designed homes shaped by over four decades of trust.
            </p>

            {/* Social Media Links */}
            <div className="flex flex-wrap items-center gap-6 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Vaswani on Instagram"
                onMouseEnter={() => setCursorVariant('pointer')}
                onMouseLeave={resetCursor}
                className="group inline-flex items-center gap-2 text-[16px] md:text-[17px] lg:text-[18px] font-sans text-white/70 hover:text-white transition-colors duration-300"
              >
                <Instagram className="w-4 h-4 stroke-[1.5]" />
                <span className="relative">
                  Instagram
                  <span className="absolute left-0 -bottom-0.5 w-0 h-[1px] bg-white/70 transition-all duration-300 group-hover:w-full" />
                </span>
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Vaswani on LinkedIn"
                onMouseEnter={() => setCursorVariant('pointer')}
                onMouseLeave={resetCursor}
                className="group inline-flex items-center gap-2 text-[16px] md:text-[17px] lg:text-[18px] font-sans text-white/70 hover:text-white transition-colors duration-300"
              >
                <Linkedin className="w-4 h-4 stroke-[1.5]" />
                <span className="relative">
                  LinkedIn
                  <span className="absolute left-0 -bottom-0.5 w-0 h-[1px] bg-white/70 transition-all duration-300 group-hover:w-full" />
                </span>
              </a>

              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Vaswani on YouTube"
                onMouseEnter={() => setCursorVariant('pointer')}
                onMouseLeave={resetCursor}
                className="group inline-flex items-center gap-2 text-[16px] md:text-[17px] lg:text-[18px] font-sans text-white/70 hover:text-white transition-colors duration-300"
              >
                <Youtube className="w-4 h-4 stroke-[1.5]" />
                <span className="relative">
                  YouTube
                  <span className="absolute left-0 -bottom-0.5 w-0 h-[1px] bg-white/70 transition-all duration-300 group-hover:w-full" />
                </span>
              </a>
            </div>
          </div>

          {/* 2. CENTER: NAVIGATION */}
          <div className="flex flex-col items-start space-y-4 md:px-4">
            <span className="font-sans text-[16px] md:text-[17px] lg:text-[18px] tracking-[0.25em] uppercase text-white/50 font-medium block">
              NAVIGATION
            </span>

            <ul className="space-y-3">
              {navigationLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => navigate(link.path)}
                    onMouseEnter={() => setCursorVariant('pointer')}
                    onMouseLeave={resetCursor}
                    className="group relative inline-block text-[16px] md:text-[17px] lg:text-[18px] font-sans text-white/70 hover:text-white font-light tracking-wide transition-colors duration-300 cursor-pointer text-left py-0.5"
                  >
                    <span>{link.label}</span>
                    <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-white/70 transition-all duration-300 group-hover:w-full" />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. RIGHT: CONTACT */}
          <div className="flex flex-col items-start space-y-4 md:min-w-[200px]">
            <span className="font-sans text-[16px] md:text-[17px] lg:text-[18px] tracking-[0.25em] uppercase text-white/50 font-medium block">
              CONTACT
            </span>

            <div className="space-y-3 text-[16px] md:text-[17px] lg:text-[18px] font-sans text-white/70 font-light leading-relaxed">
              <p className="text-white/90 font-normal">Mumbai, India</p>

              <p>
                <a
                  href="mailto:hello@vaswanigroup.com"
                  onMouseEnter={() => setCursorVariant('pointer')}
                  onMouseLeave={resetCursor}
                  className="group relative inline-block text-white/70 hover:text-white transition-colors duration-300"
                >
                  <span>hello@vaswanigroup.com</span>
                  <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-white/70 transition-all duration-300 group-hover:w-full" />
                </a>
              </p>

              <p>
                <a
                  href="tel:+912266000000"
                  onMouseEnter={() => setCursorVariant('pointer')}
                  onMouseLeave={resetCursor}
                  className="group relative inline-block text-white/70 hover:text-white transition-colors duration-300"
                >
                  <span>+91 XX XXXX XXXX</span>
                  <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-white/70 transition-all duration-300 group-hover:w-full" />
                </a>
              </p>

              <div className="pt-2">
                <button
                  onClick={openEnquiryDrawer}
                  onMouseEnter={() => setCursorVariant('pointer')}
                  onMouseLeave={resetCursor}
                  className="group relative inline-flex items-center gap-2 font-sans text-[16px] md:text-[17px] lg:text-[18px] text-white hover:text-white/90 font-medium transition-colors cursor-pointer"
                >
                  <span>Enquire →</span>
                  <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-white/80 transition-all duration-300 group-hover:w-full" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ───────────────────────────────────────────────────────────── */}
        {/* BOTTOM BAR: THIN DIVIDER & METADATA                           */}
        {/* ───────────────────────────────────────────────────────────── */}
        <div className="space-y-6 pt-4">
          <div className="w-full h-[1px] bg-white/[0.08]" />

          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-[16px] md:text-[17px] lg:text-[18px] font-sans text-white/50 font-light tracking-wide">
            {/* Left: Copyright */}
            <div className="text-center md:text-left">
              <span>© {currentYear} Vaswani Group. All Rights Reserved.</span>
            </div>

            {/* Center: Established 1985 */}
            <div className="text-center">
              <span className="text-white/60 tracking-[0.2em] uppercase">
                Established 1985
              </span>
            </div>

            {/* Right: Policies */}
            <div className="flex flex-wrap items-center justify-center md:justify-end gap-6 sm:gap-8">
              <button
                onClick={() => navigate('/about')}
                onMouseEnter={() => setCursorVariant('pointer')}
                onMouseLeave={resetCursor}
                className="group relative hover:text-white/80 transition-colors duration-300 cursor-pointer"
              >
                <span>Privacy Policy</span>
                <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-white/40 transition-all duration-300 group-hover:w-full" />
              </button>

              <button
                onClick={() => navigate('/about')}
                onMouseEnter={() => setCursorVariant('pointer')}
                onMouseLeave={resetCursor}
                className="group relative hover:text-white/80 transition-colors duration-300 cursor-pointer"
              >
                <span>Terms & Conditions</span>
                <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-white/40 transition-all duration-300 group-hover:w-full" />
              </button>

              <button
                onClick={() => navigate('/products')}
                onMouseEnter={() => setCursorVariant('pointer')}
                onMouseLeave={resetCursor}
                className="group relative hover:text-white/80 transition-colors duration-300 cursor-pointer"
              >
                <span>RERA Information</span>
                <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-white/40 transition-all duration-300 group-hover:w-full" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};
