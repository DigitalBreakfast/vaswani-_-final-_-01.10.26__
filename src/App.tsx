/**
 * Vaswani Group Luxury Real Estate Editorial Journal
 * Multi-page architecture with React Router and smooth luxury transitions.
 */

import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'motion/react';
import { CursorProvider } from './context/CursorContext';
import { NavigationProvider } from './context/NavigationContext';
import { ThemeProvider } from './context/ThemeContext';
import { SmoothScrollProvider } from './context/SmoothScrollContext';
import { CustomCursor } from './components/cursor/CustomCursor';
import { Header } from './components/navigation/Header';
import { MegaMenu } from './components/navigation/MegaMenu';
import { EnquiryDrawer } from './components/navigation/EnquiryDrawer';
import { ScrollToTop } from './components/navigation/ScrollToTop';
import { FloatingActions } from './components/navigation/FloatingActions';
import { Footer } from './components/layout/Footer';
import { AmbientParticles } from './components/ui/AmbientParticles';

// Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ProductsPage } from './pages/ProductsPage';
import { PartnerPage } from './pages/PartnerPage';
import { ContactPage } from './pages/ContactPage';

const AppLayout: React.FC = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-[#F8F6F2] text-[#135A5C] selection:bg-[#135A5C] selection:text-[#FAF8F5] relative overflow-x-hidden font-sans flex flex-col justify-between">
      {/* ───────────────────────────────────────────────────────────── */}
      {/* GLOBAL ARCHITECTURAL CANVAS BACKGROUND (WHOLE WEBSITE)         */}
      {/* ───────────────────────────────────────────────────────────── */}
      <div className="fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
        <img
          src="https://res.cloudinary.com/ds5s7shuo/image/upload/v1788810470/21b04289-48cd-402d-aa31-2fb617cdba2a.png"
          alt="Vaswani Architectural Texture Canvas"
          className="w-full h-full object-cover object-center"
          referrerPolicy="no-referrer"
        />
        {/* Soft luxury ivory veil to maintain pristine typography readability */}
        <div className="absolute inset-0 bg-[#F8F6F2]/75 backdrop-blur-[0.5px]" />
      </div>

      {/* Scroll restoration to top on route changes */}
      <ScrollToTop />

      {/* Custom Interactive Cursor */}
      <CustomCursor />

      {/* Ambient Atmospheric Particles */}
      <AmbientParticles count={20} />

      {/* Floating Luxury Header (Consistent across all pages) */}
      <Header />

      {/* Fullscreen Architectural Directory Mega Menu */}
      <MegaMenu />

      {/* Global Private Consultation Drawer */}
      <EnquiryDrawer />

      {/* Main Routed Page Content */}
      <main className="flex-1 w-full relative z-10">
        <AnimatePresence mode="wait">
          <div key={location.pathname} className="w-full">
            <Routes location={location}>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/projects" element={<ProductsPage />} />
              <Route path="/insights" element={<HomePage />} />
              <Route path="/partner" element={<PartnerPage />} />
              <Route path="/contact" element={<ContactPage />} />
              {/* Fallback */}
              <Route path="*" element={<HomePage />} />
            </Routes>
          </div>
        </AnimatePresence>
      </main>

      {/* Minimal Floating Actions: WhatsApp & Scroll To Top */}
      <FloatingActions />

      {/* Footer (Consistent across all pages) */}
      <Footer />
    </div>
  );
};

export default function App() {
  return (
    <ThemeProvider>
      <SmoothScrollProvider>
        <CursorProvider>
          <NavigationProvider>
            <BrowserRouter>
              <AppLayout />
            </BrowserRouter>
          </NavigationProvider>
        </CursorProvider>
      </SmoothScrollProvider>
    </ThemeProvider>
  );
}
