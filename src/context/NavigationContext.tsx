import React, { createContext, useContext, useState, useEffect } from 'react';
import { NavItem } from '../types';

export const GLOBAL_NAV_ITEMS: NavItem[] = [
  {
    id: 'home',
    label: 'HOME',
    href: '/',
    description: 'Return to the homepage. Explore our architectural heritage and residential philosophies.',
    tag: 'Foundation & Overview',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    visualTitle: 'Vaswani Architectural Heritage',
    visualLocation: 'Bengaluru • Mumbai • Dubai',
    visualCredit: 'Established 1985 • 40 Years of Craftsmanship',
    subItems: [
      { label: 'Hero Overview', href: '/', description: 'Cinematic architectural prelude' },
      { label: 'Our Philosophy', href: '/#philosophy', description: 'Simply Feels Right brand conviction' },
      { label: 'Featured Landmark', href: '/#featured-development', description: 'Vaswani Seascape flagship coastal villas' },
      { label: 'Portfolio Overview', href: '/#portfolio', description: 'Curated residential & commercial works' },
    ],
  },
  {
    id: 'about',
    label: 'ABOUT',
    href: '/about',
    description: 'Four decades of quiet luxury, master craftsmanship, and architectural integrity.',
    tag: 'Heritage & Vision',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
    visualTitle: 'Four Decades of Architectural Rigor',
    visualLocation: 'South Asia & UAE Headquarters',
    visualCredit: 'Led by Kailash & Vikram Vaswani',
    subItems: [
      { label: 'Documentary Story', href: '/about#about-hero', description: 'Building places that simply feel right' },
      { label: 'Founding Philosophy', href: '/about#philosophy', description: 'The foundation of everything we build' },
      { label: 'Heritage Timeline', href: '/about#heritage-timeline', description: 'Four-decade journey from 1985 to present' },
    ],
  },
  {
    id: 'products',
    label: 'PROJECTS',
    href: '/products',
    description: 'Bespoke sky mansions, coastal villas, and grade-A commercial landmark masterplans.',
    tag: 'Curated Portfolio',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
    visualTitle: 'Vaswani Seascape & Portfolio',
    visualLocation: 'Coastal Enclave & Urban Sanctuaries',
    visualCredit: 'Private Residences • Vaswani Architecture Studio',
    subItems: [
      { label: 'Vaswani Seascape', href: '/products#featured-development', description: 'Flagship coastal residences' },
      { label: 'Vaswani Reserve', href: '/products', description: 'Secluded woodland sanctuary' },
      { label: 'Vaswani Victoria', href: '/products', description: 'Signature heritage penthouses' },
      { label: 'Commercial Tech Hubs', href: '/products', description: 'LEED Platinum sustainable enterprise parks' },
    ],
  },
  {
    id: 'partner',
    label: 'PARTNER WITH US',
    href: '/partner',
    description: 'Strategic alliances, joint development partnerships, and institutional co-investments.',
    tag: 'Strategic Alliances',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80',
    visualTitle: 'Strategic Capital & Land Alliances',
    visualLocation: 'India & UAE Executive Desks',
    visualCredit: '72+ Delivered Masterworks • Transparent Governance',
    subItems: [
      { label: 'Joint Development', href: '/partner', description: 'Land alliances with transparent equity share' },
      { label: 'Institutional Capital', href: '/partner', description: 'Prudent co-investment structures' },
      { label: 'Commercial Masterplans', href: '/partner', description: 'Redevelopment of prime urban corridors' },
    ],
  },
  {
    id: 'contact',
    label: 'CONTACT',
    href: '/contact',
    description: 'Discrete private consultations with our principal architects and client advisory partners.',
    tag: 'Private Office',
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80',
    visualTitle: 'Vaswani Private Client Lounge',
    visualLocation: 'Bengaluru • Mumbai • Dubai',
    visualCredit: 'By Appointment Only • Discrete Advisory',
    subItems: [
      { label: 'Bengaluru Headquarters', href: '/contact', description: 'Vaswani Victoria, Victoria Road' },
      { label: 'Mumbai Private Suite', href: '/contact', description: 'BKC Executive Suite, Bandra Kurla' },
      { label: 'Dubai Advisory Lounge', href: '/contact', description: 'DIFC Gate Precinct, Downtown Dubai' },
      { label: 'Private Consultation Request', href: '/contact', description: 'Schedule a confidential advisory session' },
    ],
  },
];

interface NavigationContextType {
  isMegaMenuOpen: boolean;
  setIsMegaMenuOpen: (open: boolean) => void;
  toggleMegaMenu: () => void;
  openMegaMenuToSection: (sectionId: string) => void;
  isEnquiryDrawerOpen: boolean;
  setIsEnquiryDrawerOpen: (open: boolean) => void;
  openEnquiryDrawer: () => void;
  closeEnquiryDrawer: () => void;
  activeNavId: string;
  setActiveNavId: (id: string) => void;
  isScrolled: boolean;
  scrollProgress: number;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export const NavigationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState<boolean>(false);
  const [isEnquiryDrawerOpen, setIsEnquiryDrawerOpen] = useState<boolean>(false);
  const [activeNavId, setActiveNavId] = useState<string>('home');
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  const toggleMegaMenu = () => setIsMegaMenuOpen((prev) => !prev);
  
  const openMegaMenuToSection = (sectionId: string) => {
    setActiveNavId(sectionId);
    setIsMegaMenuOpen(true);
  };

  const openEnquiryDrawer = () => setIsEnquiryDrawerOpen(true);
  const closeEnquiryDrawer = () => setIsEnquiryDrawerOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? (scrollY / totalHeight) * 100 : 0;

      setIsScrolled(scrollY > 25);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Keyboard navigation: Escape key closes active menus
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (isMegaMenuOpen) setIsMegaMenuOpen(false);
        if (isEnquiryDrawerOpen) setIsEnquiryDrawerOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMegaMenuOpen, isEnquiryDrawerOpen]);

  // Lock body scroll when mega menu or enquiry drawer is open
  useEffect(() => {
    if (isMegaMenuOpen || isEnquiryDrawerOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMegaMenuOpen, isEnquiryDrawerOpen]);

  return (
    <NavigationContext.Provider
      value={{
        isMegaMenuOpen,
        setIsMegaMenuOpen,
        toggleMegaMenu,
        openMegaMenuToSection,
        isEnquiryDrawerOpen,
        setIsEnquiryDrawerOpen,
        openEnquiryDrawer,
        closeEnquiryDrawer,
        activeNavId,
        setActiveNavId,
        isScrolled,
        scrollProgress,
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = (): NavigationContextType => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
};
