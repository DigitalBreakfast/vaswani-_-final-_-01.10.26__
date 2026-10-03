/**
 * Vaswani Group Design System Tokens
 * Prompt 02 — Global Color System & Visual Identity
 * Architectural Luxury, Warm Ivory Foundation & Minimalist Precision
 */

export const TOKENS = {
  brand: {
    name: 'VASWANI',
    fullName: 'Vaswani Group',
    tagline: 'Architectural Thinking. Timeless Living.',
    established: '1985',
    ratio: {
      ivory: '80%',     // Primary Warm Ivory Base
      charcoal: '15%',  // Primary Charcoal Typography & Contrast
      accents: '5%',    // Sea Green & Subtle Secondary Accents
    }
  },

  colors: {
    // 1. PRIMARY BASE: Warm Ivory White (Dominant ~80% of digital canvas)
    // Inspired by luxury paper, natural stone, travertine, gallery walls, premium architecture
    ivory: {
      canvas: '#FAF8F5',       // Dominant Web Canvas (Warm Ivory White)
      paper: '#FBF9F4',        // Luxury Uncoated Cotton Paper
      stone: '#F5F2EA',        // Soft Stone Surface
      elevated: '#FFFFFF',     // Crisp Alabaster Card Surface
      subtle: '#EFEBE0',       // Subtle Tint / Hover Surface
      travertine: '#EAE4D6',   // Natural Travertine Border & Line
      sand: '#E3DC Flora',    // Warm Sand Tone
      border: 'rgba(26, 28, 30, 0.08)', // Gentle Architectural Divider
    },

    // 2. PRIMARY TEXT: Deep Charcoal (Headings, Body Copy, Navigation, Buttons, Icons)
    // Warm undertones, avoiding harsh pure black (#000000) or cold blue-greys
    charcoal: {
      950: '#111214',          // Deepest Architectural Shadow
      900: '#1A1C1E',          // Dominant Headings & High-Contrast Typography
      850: '#24272C',          // Secondary Dark Surface & Elevated Panels
      800: '#2E3138',          // Deep Border & Charcoal Interactive Hover
      700: '#404550',          // Sub-headings & Strong Accent Text
      600: '#525866',          // Body Copy Reading (Optimal Contrast on Ivory)
      500: '#6C7382',          // Secondary Paragraphs & Descriptive Copy
      400: '#8990A0',          // Captions & Metadata
      300: '#B0B6C4',          // Inactive Icons & Borders on Dark
      200: '#D5D9E2',          // Subtle Highlights on Charcoal
      100: '#F0F2F6',          // Off-White Highlights on Dark Surfaces
    },

    // 3. PRIMARY ACCENT: Sea Green (Used sparingly ~5% for buttons, links, progress, highlights)
    // Inspired by patinated copper, lush courtyards, and deep water features
    seaGreen: {
      950: '#0B2219',          // Deep Pine Shadow
      900: '#143C2E',          // Deep Sea Pine
      800: '#152E28',          // Primary Brand Button Accent & Active State
      700: '#1C3D35',          // Brand Accent Hover
      600: '#234A41',          // Rich Sea Green
      500: '#35936F',          // Vibrant Jade Accent
      400: '#46A882',          // Luminous Emerald Highlight
      300: '#68C29F',          // Mint Accent & Success Indicator
      200: '#9CE0C7',          // Pale Sage Tint
      100: '#D3F3E7',          // Ambient Light Mist
      50: '#F0FAF6',           // Light Sea Green Wash
    },

    // 4. SECONDARY PALETTE: Elegant supporting colors inspired by brand heritage
    // Used strictly as subtle accents throughout the experience
    secondary: {
      forestGreen: '#143328',   // Deep Forest Green
      warmSand: '#E5DAC8',      // Warm Sand
      softStone: '#E8E4DA',     // Soft Stone
      mutedBronze: '#8E7963',   // Muted Architectural Bronze
      terracotta: '#A8644E',    // Architectural Terracotta
      weatheredTeal: '#4A6B69', // Weathered Teal
      slateGrey: '#5E6573',     // Warm Slate Grey
    },

    // 5. WARM NEUTRAL SCALE (Zero cold blue-greys, strictly warm undertones)
    neutrals: {
      extraLight: '#FAF8F5',   // Extra Light (Warm Ivory Canvas Base)
      light: '#F3EFE6',        // Light (Ivory Elevated Surface)
      soft: '#EAE4D6',         // Soft (Travertine Surface / Border Light)
      medium: '#C8BEAA',       // Medium (Muted Architectural Divider)
      dark: '#5C5A55',         // Dark (Subtle Muted Charcoal Text)
      extraDark: '#1A1C1E',    // Extra Dark (Deep Architectural Charcoal)
    },

    // 6. SURFACE COLORS (Distinct, harmonized surfaces for all contexts)
    surfaces: {
      primaryBg: '#FAF8F5',
      secondaryBg: '#F3EFE6',
      elevated: '#FFFFFF',
      card: '#FFFFFF',
      cardBorder: '#EAE4D6',
      navLight: 'rgba(250, 248, 245, 0.88)',
      navDark: 'rgba(26, 28, 30, 0.92)',
      megaMenu: '#1A1C1E',
      footer: '#1A1C1E',
      formInput: '#FFFFFF',
      formBorder: '#DCD7CA',
      formFocus: '#152E28',
      modalLight: '#FAF8F5',
      modalDark: '#1A1C1E',
    },

    // 7. ARCHITECTURAL GRADIENTS (Subtle, tonal transitions, light-to-dark, never saturated)
    gradients: {
      morningLight: 'linear-gradient(180deg, #FAF8F5 0%, #F0EAE0 100%)',
      oceanMist: 'radial-gradient(circle at 50% 0%, rgba(30, 94, 69, 0.08) 0%, rgba(250, 248, 245, 0) 70%)',
      naturalStone: 'linear-gradient(135deg, #F8F5EE 0%, #EBE5D8 100%)',
      sunsetReflections: 'radial-gradient(circle at 80% 20%, rgba(168, 100, 78, 0.06) 0%, rgba(250, 248, 245, 0) 60%)',
      concreteShadow: 'linear-gradient(180deg, rgba(26, 28, 30, 0.03) 0%, rgba(26, 28, 30, 0) 100%)',
      glassLight: 'linear-gradient(135deg, rgba(255, 255, 255, 0.7) 0%, rgba(243, 239, 230, 0.4) 100%)',
      glassDark: 'linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.02) 100%)',
    },

    // 8. ARCHITECTURAL SHADOWS (Soft, natural, diffuse multi-layered depth)
    shadows: {
      sm: '0 2px 8px -1px rgba(26, 28, 30, 0.04), 0 1px 3px 0 rgba(26, 28, 30, 0.02)',
      md: '0 4px 20px -2px rgba(26, 28, 30, 0.04), 0 12px 36px -4px rgba(26, 28, 30, 0.06)',
      lg: '0 12px 48px -6px rgba(26, 28, 30, 0.08), 0 24px 64px -12px rgba(26, 28, 30, 0.06)',
      inner: 'inset 0 1px 2px rgba(26, 28, 30, 0.04)',
    }
  },

  typography: {
    fonts: {
      editorial: '"Cormorant Garamond", Georgia, serif',
      body: '"Plus Jakarta Sans", sans-serif',
      headings: '"Cormorant Garamond", Georgia, serif',
      ui: '"Plus Jakarta Sans", sans-serif',
      primary: '"Plus Jakarta Sans", sans-serif',
      secondary: '"Cormorant Garamond", Georgia, serif',
      accent: '"Cormorant Garamond", Georgia, serif',
      mono: '"Plus Jakarta Sans", sans-serif',
      // Standardized aliases
      cormorant: '"Cormorant Garamond", Georgia, serif',
      serif: '"Cormorant Garamond", Georgia, serif',
      sans: '"Plus Jakarta Sans", sans-serif',
      futura: '"Plus Jakarta Sans", sans-serif',
      agency: '"Plus Jakarta Sans", sans-serif',
      caladea: '"Cormorant Garamond", Georgia, serif',
      display: '"Cormorant Garamond", Georgia, serif',
    },
    // The 4 Standardized Typography Levels
    levels: {
      level1: {
        name: 'Hero Display',
        font: 'Cormorant Garamond',
        desktop: '88px',
        tablet: '72px',
        mobile: '52px',
        usage: 'Homepage Hero & Page Hero Titles',
      },
      level2: {
        name: 'Section Headings',
        font: 'Cormorant Garamond',
        desktop: '56px',
        tablet: '44px',
        mobile: '36px',
        usage: 'All section headings, Project titles, Editorial headlines, CTA headlines',
      },
      level3: {
        name: 'Lead Paragraph',
        font: 'Plus Jakarta Sans',
        desktop: '24px',
        tablet: '22px',
        mobile: '20px',
        maxWidth: '700px',
        usage: 'Introductory paragraphs, Supporting statements, Section introductions',
      },
      level4: {
        name: 'Body & Interface',
        font: 'Plus Jakarta Sans',
        desktop: '18px',
        tablet: '17px',
        mobile: '16px',
        usage: 'Paragraphs, Navigation, Buttons, Forms, Footer, Labels, Cards, Metadata, Captions, Lists, Stats labels, Eyebrows, Menu items',
      },
    },
    scale: {
      level1: 'clamp(3.25rem, 6vw, 5.5rem)',       // Level 01: 52px -> 72px -> 88px (Cormorant Garamond)
      level2: 'clamp(2.25rem, 4vw, 3.5rem)',        // Level 02: 36px -> 44px -> 56px (Cormorant Garamond)
      level3: 'clamp(1.25rem, 1.8vw, 1.5rem)',      // Level 03: 20px -> 22px -> 24px (Plus Jakarta Sans)
      level4: 'clamp(1rem, 1.2vw, 1.125rem)',       // Level 04: 16px -> 17px -> 18px (Plus Jakarta Sans)
      // Backward compatibility aliases mapped to standard levels
      displayXL: 'clamp(3.25rem, 6vw, 5.5rem)',     // Maps to Level 01
      displayLarge: 'clamp(2.25rem, 4vw, 3.5rem)',  // Maps to Level 02
      headingLarge: 'clamp(2.25rem, 4vw, 3.5rem)',  // Maps to Level 02
      headingMedium: 'clamp(2.25rem, 4vw, 3.5rem)', // Maps to Level 02
      headingSmall: 'clamp(1rem, 1.2vw, 1.125rem)', // Maps to Level 04
      bodyLarge: 'clamp(1.25rem, 1.8vw, 1.5rem)',   // Maps to Level 03
      bodyRegular: 'clamp(1rem, 1.2vw, 1.125rem)',  // Maps to Level 04
      bodySmall: 'clamp(1rem, 1.2vw, 1.125rem)',    // Maps to Level 04
      caption: 'clamp(1rem, 1.2vw, 1.125rem)',      // Maps to Level 04
      statsLarge: 'clamp(2.25rem, 4vw, 3.5rem)',    // Maps to Level 02
    },
    tracking: {
      tightest: '-0.02em',
      tight: '-0.015em',
      normal: '0',
      wide: '0.04em',
      wider: '0.08em',
      widest: '0.12em',
    }
  },

  grid: {
    desktop: {
      columns: 12,
      gutter: '2.5rem', // 40px
      margin: '4rem',   // 64px
      maxWidth: '1440px',
    },
    tablet: {
      columns: 8,
      gutter: '1.5rem', // 24px
      margin: '2rem',   // 32px
      maxWidth: '100%',
    },
    mobile: {
      columns: 4,
      gutter: '1rem',   // 16px
      margin: '1.25rem', // 20px
      maxWidth: '100%',
    }
  },

  radius: {
    none: '0px',
    xs: '2px',
    sm: '4px',
    md: '8px',
    lg: '12px',
    xl: '16px',
    pill: '9999px',
  },

  motion: {
    easing: {
      luxury: [0.16, 1, 0.3, 1],         // Swift start, luxurious deceleration
      gentle: [0.25, 0.1, 0.25, 1],      // Natural ease-in-out
      magnetic: [0.22, 1, 0.36, 1],      // Spring-like magnetic snapping
      editorialReveal: [0.77, 0, 0.175, 1] // Dramatic curtain reveal
    },
    duration: {
      instant: 0.15,
      fast: 0.3,
      base: 0.5,
      slow: 0.8,
      cinematic: 1.2,
    }
  }
} as const;

