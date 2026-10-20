import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useNavigation } from '../../context/NavigationContext';
import { useCursor } from '../../context/CursorContext';

export const Header: React.FC = () => {
  const { openEnquiryDrawer } = useNavigation();
  const { setCursorVariant, resetCursor } = useCursor();
  
  const location = useLocation();
  const navigate = useNavigate();
  const [currentHash, setCurrentHash] = useState<string>(window.location.hash);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleHashChange = () => setCurrentHash(window.location.hash);
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { id: 'home', label: 'Home', path: '/' },
    { id: 'about', label: 'About', path: '/about' },
    { id: 'projects', label: 'Projects', path: '/products' },
    { id: 'contact', label: 'Contact', path: '/contact' },
  ];

  const handleNavClick = (path: string) => {
    setIsMobileMenuOpen(false);
    if (path.startsWith('/#')) {
      const hash = path.substring(2);
      if (location.pathname === '/') {
        const el = document.getElementById(hash);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
          window.history.pushState(null, '', `/#${hash}`);
          setCurrentHash(`#${hash}`);
        }
      } else {
        navigate('/');
        setTimeout(() => {
          const el = document.getElementById(hash);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
            window.history.pushState(null, '', `/#${hash}`);
            setCurrentHash(`#${hash}`);
          }
        }, 300);
      }
    } else {
      setCurrentHash('');
      navigate(path);
    }
  };

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="absolute top-0 left-0 right-0 z-50 pointer-events-none h-[100px] sm:h-[112px] lg:h-[120px]"
      >
        <div className="w-full max-w-[1440px] h-full mx-auto px-6 sm:px-10 lg:px-16 flex items-center justify-between">
          {/* ========================================================================= */}
          {/* LEFT: Vaswani Logo (Placed naturally, quiet architectural frame)          */}
          {/* ========================================================================= */}
          <div className="flex-1 flex items-center justify-start h-full pointer-events-auto">
            <button
              onClick={() => handleNavClick('/')}
              onMouseEnter={() => setCursorVariant('pointer')}
              onMouseLeave={resetCursor}
              className="h-full flex items-center select-none cursor-pointer focus-visible:outline-none text-left p-0 bg-transparent border-none group"
              aria-label="Vaswani Group Home"
            >
              <img
                src="https://res.cloudinary.com/ds5s7shuo/image/upload/v1788429433/WhatsApp_Image_2026-09-03_at_15.24.36-removebg-preview_ce4ow7.png"
                alt="Vaswani Group"
                className="h-full max-h-[92px] sm:max-h-[104px] lg:max-h-[114px] w-auto object-contain transition-all duration-300 group-hover:opacity-85 scale-110 sm:scale-120 origin-left"
              />
            </button>
          </div>

          {/* ========================================================================= */}
          {/* CENTER: Understated Editorial Menu Pills with High-Legibility Hover       */}
          {/* ========================================================================= */}
          <nav className="hidden md:flex items-center justify-center gap-3 sm:gap-3.5 lg:gap-4 bg-transparent pointer-events-auto">
            {navLinks.map((item, index) => {
              const isHome = item.path === '/';
              const isHashLink = item.path.startsWith('/#');
              const isActive = isHashLink
                ? location.pathname === '/' && currentHash === `#${item.path.substring(2)}`
                : isHome
                ? location.pathname === '/' && !currentHash
                : location.pathname.startsWith(item.path);

              return (
                <motion.button
                  key={item.id}
                  custom={index}
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.12 + index * 0.05,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  onClick={() => handleNavClick(item.path)}
                  onMouseEnter={() => setCursorVariant('pointer')}
                  onMouseLeave={resetCursor}
                  className={`relative px-4 sm:px-4.5 lg:px-5 py-2 rounded-full select-none cursor-pointer outline-none focus-visible:outline-none flex items-center justify-center transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.02] border backdrop-blur-md ${
                    isActive
                      ? 'bg-white/85 text-[#1C443B] border-[#1C443B]/35 shadow-[0_2px_8px_rgba(28, 68, 59,0.06)] font-semibold hover:bg-[#1C443B] hover:text-[#FAF8F5] hover:border-[#1C443B] hover:shadow-[0_4px_16px_rgba(28, 68, 59,0.2)]'
                      : 'bg-white/50 text-[#1C443B] border-[#1C443B]/18 shadow-[0_2px_6px_rgba(28, 68, 59,0.02)] hover:bg-[#1C443B] hover:text-[#FAF8F5] hover:border-[#1C443B] hover:shadow-[0_4px_16px_rgba(28, 68, 59,0.2)]'
                  }`}
                >
                  <span className="text-[13px] sm:text-[13.5px] lg:text-[14px] tracking-[0.05em] transition-colors duration-200 leading-none">
                    {item.label}
                  </span>
                </motion.button>
              );
            })}
          </nav>

          {/* ========================================================================= */}
          {/* RIGHT: Enquire CTA & Mobile Toggle                                        */}
          {/* ========================================================================= */}
          <div className="flex-1 flex items-center justify-end gap-3 pointer-events-auto">
            <button
              onClick={openEnquiryDrawer}
              onMouseEnter={() => setCursorVariant('pointer')}
              onMouseLeave={resetCursor}
              className="relative px-4.5 sm:px-5 lg:px-5.5 py-2 rounded-full select-none cursor-pointer outline-none focus-visible:outline-none flex items-center justify-center transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.02] border backdrop-blur-md bg-white/70 text-[#1C443B] border-[#1C443B]/30 shadow-[0_2px_8px_rgba(28, 68, 59,0.04)] hover:bg-[#1C443B] hover:text-[#FAF8F5] hover:border-[#1C443B] hover:shadow-[0_4px_16px_rgba(28, 68, 59,0.2)]"
            >
              <span className="text-[13px] sm:text-[13.5px] lg:text-[14px] font-medium tracking-[0.05em] transition-colors duration-200 leading-none">
                Enquire
              </span>
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              onMouseEnter={() => setCursorVariant('pointer')}
              onMouseLeave={resetCursor}
              aria-label="Toggle navigation menu"
              className="md:hidden relative w-10 h-10 rounded-full flex items-center justify-center border backdrop-blur-md bg-white/70 text-[#1C443B] border-[#1C443B]/30 hover:bg-[#1C443B] hover:text-[#FAF8F5] transition-all"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Navigation Dropdown Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-[100px] sm:top-[112px] left-4 right-4 z-40 md:hidden bg-[#FAF8F5]/95 backdrop-blur-xl border border-[#1C443B]/15 rounded-2xl p-6 shadow-2xl flex flex-col space-y-3"
          >
            {navLinks.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.path)}
                className="text-left py-2.5 px-4 rounded-xl font-sans text-[16px] text-[#1C443B] hover:bg-[#1C443B]/5 font-medium transition-colors"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                openEnquiryDrawer();
              }}
              className="text-left py-2.5 px-4 rounded-xl font-sans text-[16px] text-[#1C443B] hover:bg-[#1C443B] hover:text-white font-medium border border-[#1C443B]/20 transition-all mt-1"
            >
              Enquire
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

